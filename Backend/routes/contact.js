// const express = require('express');
// const rateLimit = require('express-rate-limit');
// const Contact = require('../models/Contact');

// const router = express.Router();

// // Prevent basic form-spam abuse: 5 submissions per 15 minutes per IP
// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   standardHeaders: true,
//   legacyHeaders: false,
//   message: { success: false, message: 'Too many submissions. Please try again later.' },
// });

// // POST /api/contact
// router.post('/', contactLimiter, async (req, res) => {
//   try {
//     const { name, email, company, topic, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: 'Name, email, and message are required.',
//       });
//     }

//     const contact = await Contact.create({
//       name,
//       email,
//       company,
//       topic,
//       message,
//       ip: req.ip,
//       userAgent: req.get('user-agent'),
//     });

//     return res.status(201).json({
//       success: true,
//       message: 'Thanks! We received your message.',
//       data: {
//         id: contact._id,
//         createdAt: contact.createdAt,
//       },
//     });
//   } catch (err) {
//     // Mongoose validation errors (bad email format, missing enum value, etc.)
//     if (err.name === 'ValidationError') {
//       const details = Object.values(err.errors).map((e) => e.message);
//       return res.status(400).json({ success: false, message: details.join(', ') });
//     }

//     console.error('Contact submission error:', err);
//     return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
//   }
// });

// // GET /api/contact  (simple listing, useful for an internal dashboard later)
// router.get('/', async (req, res) => {
//   try {
//     const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
//     const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);

//     const [items, total] = await Promise.all([
//       Contact.find()
//         .sort({ createdAt: -1 })
//         .skip((page - 1) * limit)
//         .limit(limit),
//       Contact.countDocuments(),
//     ]);

//     return res.json({ success: true, page, limit, total, data: items });
//   } catch (err) {
//     console.error('Contact fetch error:', err);
//     return res.status(500).json({ success: false, message: 'Something went wrong.' });
//   }
// });

// module.exports = router;





const express = require('express');
const rateLimit = require('express-rate-limit');
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../utils/mailer');

const router = express.Router();

// Prevent basic form-spam abuse: 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many submissions. Please try again later.' },
});

// POST /api/contact
router.post('/', contactLimiter, async (req, res) => {
  try {
    const { name, email, company, topic, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    const contact = await Contact.create({
      name,
      email,
      company,
      topic,
      message,
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });

    // Fire the email but don't let a mail failure block/fail the response
    sendContactNotification(contact).catch((mailErr) => {
      console.error('Contact email notification failed:', mailErr);
    });

    return res.status(201).json({
      success: true,
      message: 'Thanks! We received your message.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (err) {
    // Mongoose validation errors (bad email format, missing enum value, etc.)
    if (err.name === 'ValidationError') {
      const details = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: details.join(', ') });
    }

    console.error('Contact submission error:', err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

// GET /api/contact  (simple listing, useful for an internal dashboard later)
router.get('/', async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);

    const [items, total] = await Promise.all([
      Contact.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      Contact.countDocuments(),
    ]);

    return res.json({ success: true, page, limit, total, data: items });
  } catch (err) {
    console.error('Contact fetch error:', err);
    return res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

module.exports = router;