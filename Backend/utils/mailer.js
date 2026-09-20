// const { Resend } = require('resend');

// const resend = new Resend(process.env.RESEND_API_KEY);

// async function sendContactNotification(contact) {
//   const { name, email, company, topic, message } = contact;

//   await resend.emails.send({
//     from: 'Website Contact <onboarding@resend.dev>',
//     // to: 'hemalathasm24@gmail.com',
//     to: 'hema.1916118@gct.ac.in',
//     reply_to: email,
//     subject: `New contact form submission${topic ? `: ${topic}` : ''}`,
//     text: `
// Name: ${name}
// Email: ${email}
// Company: ${company || '-'}
// Topic: ${topic || '-'}

// Message:
// ${message}
//     `.trim(),
//     html: `
//       <h3>New contact form submission</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Company:</strong> ${company || '-'}</p>
//       <p><strong>Topic:</strong> ${topic || '-'}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message.replace(/\n/g, '<br>')}</p>
//     `,
//   });
// }

// module.exports = { sendContactNotification };




const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendContactNotification(contact) {
  const { name, email, company, topic, message } = contact;

  await resend.emails.send({
    from: 'Website Contact <onboarding@resend.dev>',
    to: 'hello@mentorcrew.co',
    reply_to: email,
    subject: `New contact form submission${topic ? `: ${topic}` : ''}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company || '-'}
Topic: ${topic || '-'}

Message:
${message}
    `.trim(),
    html: `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Topic:</strong> ${topic || '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });
}

module.exports = { sendContactNotification };