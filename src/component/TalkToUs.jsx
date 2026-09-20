// import React, { useState } from 'react';
// import { Form, Input, Select, message } from 'antd';
// import axios from 'axios';
// import {
//   EnvironmentOutlined,
//   MailOutlined,
//   CloseOutlined,
//   SendOutlined,
//   LinkedinOutlined,
// } from '@ant-design/icons';

// const { TextArea } = Input;
// const { Option } = Select;

// const HELP_OPTIONS = [
//   'Learning Programs',
//   'Staffing & Hiring',
//   'Product Demo',
//   'Partnership & Alliances',
//   'Career Opportunities',
//   'Something Else',
// ];

// // Base URL for the contact API. Override via REACT_APP_API_BASE_URL in
// // production builds (e.g. set it in .env.production).
// const API_BASE_URL = 'http://localhost:5000';

// // Mirrors the visible/onClose pattern already used by <Login />, so it can
// // be dropped into App.js the same way.
// const TalkToUs = ({ visible, onClose }) => {
//   const [form] = Form.useForm();
//   const [submitting, setSubmitting] = useState(false);

//   if (!visible) return null;

//   const handleSubmit = async (values) => {
//     setSubmitting(true);
//     try {
//       const { name, email, company, topic, message: userMessage } = values;

//       const response = await axios.post(`${API_BASE_URL}/api/contact`, {
//         name,
//         email,
//         company,
//         topic,
//         message: userMessage,
//       });

//       if (response.data?.success) {
//         message.success(response.data.message || 'Thanks! We received your message.');
//         form.resetFields();
//         onClose();
//       } else {
//         message.error(response.data?.message || 'Something went wrong. Please try again.');
//       }
//     } catch (err) {
//       const errMsg =
//         err.response?.data?.message || 'Something went wrong. Please try again.';
//       message.error(errMsg);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleOverlayKeyDown = (e) => {
//     if (e.key === 'Escape') onClose();
//   };

//   return (
//     <>
//       <style>{`
//         .ttu-overlay {
//           position: fixed;
//           inset: 0;
//           z-index: 200;
//           background: rgba(0, 10, 24, 0.55);
//           backdrop-filter: blur(6px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 24px;
//           animation: ttuFadeIn 0.25s ease;
//         }

//         @keyframes ttuFadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         .ttu-card {
//   width: 100%;
//   max-width: 960px;
//   max-height: 90vh;

//   display: grid;
//   grid-template-columns: 0.85fr 1.15fr;

//   border-radius: 20px;
//   overflow: hidden;

//   box-shadow: 0 30px 80px rgba(0, 10, 24, 0.45);
//   animation: ttuRise 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
// }

//         @keyframes ttuRise {
//           from { transform: translateY(24px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }

//         .ttu-info {
//           background: linear-gradient(160deg, #001529 0%, #000c17 100%);
//           color: white;
//           padding: 40px 36px;
//           position: relative;
//           overflow: hidden;
//         }

//         .ttu-info::before {
//           content: '';
//           position: absolute;
//           top: -60px;
//           right: -60px;
//           width: 220px;
//           height: 220px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(47, 224, 198, 0.18), transparent 70%);
//         }

//         .ttu-brand {
//           font-size: 24px;
//           font-weight: 700;
//           letter-spacing: 0.3px;
//           margin-bottom: 6px;
//           position: relative;
//         }

//         .ttu-brand span { color: #40a9ff; }

//         .ttu-tagline {
//           color: rgba(255, 255, 255, 0.55);
//           font-size: 14px;
//           line-height: 1.6;
//           margin-bottom: 28px;
//           max-width: 260px;
//           position: relative;
//         }

//         .ttu-detail-row {
//           display: flex;
//           align-items: flex-start;
//           gap: 12px;
//           margin-bottom: 18px;
//           position: relative;
//         }

//         .ttu-detail-icon {
//           width: 30px;
//           height: 30px;
//           border-radius: 8px;
//           background: rgba(63, 140, 255, 0.16);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #40a9ff;
//           flex-shrink: 0;
//           font-size: 14px;
//         }

//         .ttu-detail-text {
//           color: rgba(255, 255, 255, 0.8);
//           font-size: 14px;
//           line-height: 1.5;
//         }

//         .ttu-detail-text a {
//           color: rgba(255, 255, 255, 0.8);
//           text-decoration: none;
//         }
//         .ttu-detail-text a:hover { color: #40a9ff; }

//         .ttu-divider {
//           height: 1px;
//           background: rgba(255, 255, 255, 0.08);
//           margin: 24px 0;
//           position: relative;
//         }

//         .ttu-linkedin {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           text-decoration: none;
//           position: relative;
//         }

//         .ttu-qr {
//           width: 76px;
//           height: 76px;
//           border-radius: 10px;
//           background: white;
//           padding: 6px;
//           flex-shrink: 0;
//         }

//         .ttu-linkedin-title {
//           color: white;
//           font-size: 14px;
//           font-weight: 600;
//           margin-bottom: 4px;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }

//         .ttu-linkedin-sub {
//           color: rgba(255, 255, 255, 0.5);
//           font-size: 12.5px;
//           line-height: 1.5;
//         }

//         .ttu-form-panel {
//   background: white;
//   padding: 40px 40px 32px;
//   position: relative;

//   max-height: 90vh;
//   overflow-y: auto;
//   overflow-x: hidden;

//   /* Hide scrollbar */
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* IE/old Edge */
// }

// /* Chrome, Safari, Edge */
// .ttu-form-panel::-webkit-scrollbar {
//   display: none;
// }
  
//         .ttu-close {
//           position: absolute;
//           top: 18px;
//           right: 18px;
//           width: 34px;
//           height: 34px;
//           border-radius: 50%;
//           border: none;
//           background: rgba(0, 0, 0, 0.05);
//           color: rgba(0, 0, 0, 0.55);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background 0.2s ease, transform 0.2s ease;
//         }

//         .ttu-close:hover {
//           background: rgba(0, 0, 0, 0.1);
//           transform: rotate(90deg);
//         }

//         .ttu-form-title {
//           font-size: 20px;
//           font-weight: 700;
//           color: rgba(20, 20, 20, 0.85);
//           margin-bottom: 4px;
//         }

//         .ttu-form-sub {
//           color: rgba(20, 20, 20, 0.5);
//           font-size: 13.5px;
//           margin-bottom: 24px;
//         }

//         .ttu-label {
//           font-size: 11.5px;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: rgba(20, 20, 20, 0.55);
//         }

//         .ttu-required::after {
//           content: ' *';
//           color: #2fbfa0;
//         }

//         .ttu-form-panel .ant-form-item {
//           margin-bottom: 18px;
//         }

//         .ttu-form-panel .ant-input,
//         .ttu-form-panel .ant-select-selector,
//         .ttu-form-panel textarea.ant-input {
//           border-radius: 10px !important;
//           border: 1px solid rgba(0, 0, 0, 0.12) !important;
//         }

//         .ttu-form-panel .ant-input:focus,
//         .ttu-form-panel .ant-input:hover,
//         .ttu-form-panel .ant-select-focused .ant-select-selector,
//         .ttu-form-panel .ant-select-selector:hover {
//           border-color: #40a9ff !important;
//           box-shadow: 0 0 0 3px rgba(64, 169, 255, 0.12) !important;
//         }

//         .ttu-actions {
//           display: flex;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 16px;
//           margin-top: 6px;
//         }

//         .ttu-send-btn {
//           height: 44px;
//           padding: 0 26px;
//           border-radius: 9999px;
//           border: none;
//           background: linear-gradient(90deg, #2fe0c6, #3f8cff);
//           color: white;
//           font-weight: 600;
//           font-size: 14px;
//           letter-spacing: 0.02em;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           cursor: pointer;
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//           box-shadow: 0 8px 20px rgba(63, 140, 255, 0.3);
//         }

//         .ttu-send-btn:hover:not(:disabled) {
//           transform: translateY(-1px);
//           box-shadow: 0 12px 26px rgba(63, 140, 255, 0.4);
//         }

//         .ttu-send-btn:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .ttu-send-btn:focus-visible {
//           outline: 2px solid #2196f3;
//           outline-offset: 3px;
//         }

//         .ttu-alt-contact {
//           color: rgba(20, 20, 20, 0.5);
//           font-size: 13.5px;
//         }

//         .ttu-alt-contact a {
//           color: #2196f3;
//           text-decoration: none;
//           font-weight: 600;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .ttu-overlay, .ttu-card, .ttu-close, .ttu-send-btn {
//             animation: none !important;
//             transition: none !important;
//           }
//         }

//         @media (max-width: 760px) {
//           .ttu-card {
//             grid-template-columns: 1fr;
//             max-height: 92vh;
//           }
//           .ttu-info { padding: 32px 28px; }
//           .ttu-form-panel { padding: 60px 24px 28px; }
//         }
//       `}</style>

//       <div
//         className="ttu-overlay"
//         onClick={onClose}
//         onKeyDown={handleOverlayKeyDown}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Talk to us"
//       >
//         <div className="ttu-card" onClick={(e) => e.stopPropagation()}>
//           <div className="ttu-info">
//             <div className="ttu-brand">
//               Mentor<span>Crew</span>
//             </div>
//             <p className="ttu-tagline">
//               Tell us what you're building or looking for — a mentor, a hire,
//               or a learning program. We usually reply within one business day.
//             </p>

//             <div className="ttu-detail-row">
//               <span className="ttu-detail-icon">
//                 <EnvironmentOutlined />
//               </span>
//               <span className="ttu-detail-text">
//                 Perungudi, Chennai,
//                 <br />
//                 Tamil Nadu, India
//               </span>
//             </div>

//             <div className="ttu-detail-row">
//               <span className="ttu-detail-icon">
//                 <MailOutlined />
//               </span>
//               <span className="ttu-detail-text">
//                 <a href="mailto:hello@mentorcrew.co">hello@mentorcrew.co</a>
//               </span>
//             </div>

//             <div className="ttu-divider" />

//             <a
//               className="ttu-linkedin"
//               href="https://www.linkedin.com/company/mentorcrew-in"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 className="ttu-qr"
//                 src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://www.linkedin.com/company/mentorcrew-in"
//                 alt="MentorCrew LinkedIn QR code"
//               />
//               <span>
//                 <div className="ttu-linkedin-title">
//                   <LinkedinOutlined /> Connect on LinkedIn
//                 </div>
//                 <div className="ttu-linkedin-sub">
//                   Scan the QR code or tap it to open our profile.
//                 </div>
//               </span>
//             </a>
//           </div>

//           <div className="ttu-form-panel">
//             <button className="ttu-close" onClick={onClose} aria-label="Close">
//               <CloseOutlined />
//             </button>

//             <div className="ttu-form-title">Talk to us</div>
//             <div className="ttu-form-sub">
//               Fill in a few details and we'll take it from there.
//             </div>

//             <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
//               <Form.Item
//                 name="name"
//                 label={<span className="ttu-label ttu-required">Name</span>}
//                 rules={[{ required: true, message: 'Please enter your name' }]}
//               >
//                 <Input placeholder="Your full name" size="large" />
//               </Form.Item>

//               <Form.Item
//                 name="email"
//                 label={<span className="ttu-label ttu-required">Email</span>}
//                 rules={[
//                   { required: true, message: 'Please enter your email' },
//                   { type: 'email', message: 'Enter a valid email' },
//                 ]}
//               >
//                 <Input placeholder="you@company.com" size="large" />
//               </Form.Item>

//               <Form.Item
//                 name="company"
//                 label={<span className="ttu-label">Company / Institution Name</span>}
//               >
//                 <Input placeholder="Enter company or institution name" size="large" />
//               </Form.Item>

//               <Form.Item
//                 name="topic"
//                 label={<span className="ttu-label">What can we help with?</span>}
//                 initialValue="Learning Programs"
//               >
//                 <Select size="large">
//                   {HELP_OPTIONS.map((opt) => (
//                     <Option key={opt} value={opt}>
//                       {opt}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>

//               <Form.Item
//                 name="message"
//                 label={<span className="ttu-label ttu-required">Message</span>}
//                 rules={[{ required: true, message: 'Please add a short message' }]}
//               >
//                 <TextArea rows={4} placeholder="Tell us a bit about what you need..." />
//               </Form.Item>

//               <div className="ttu-actions">
//                 <button type="submit" className="ttu-send-btn" disabled={submitting}>
//                   <SendOutlined /> {submitting ? 'Sending...' : 'Send'}
//                 </button>
//                 {/* <span className="ttu-alt-contact">
//                   or email <a href="mailto:hello@mentorcrew.co">hello@mentorcrew.co</a>
//                 </span> */}
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TalkToUs;




import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  EnvironmentOutlined,
  MailOutlined,
  CloseOutlined,
  SendOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const HELP_OPTIONS = [
  'Learning Programs',
  'Staffing & Hiring',
  'Product Demo',
  'Partnership & Alliances',
  'Career Opportunities',
  'Something Else',
];

// Base URL for the contact API. Override via REACT_APP_API_BASE_URL in
// production builds (e.g. set it in .env.production).
const API_BASE_URL = 'http://localhost:5000';

// Mirrors the visible/onClose pattern already used by <Login />, so it can
// be dropped into App.js the same way.
const TalkToUs = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  if (!visible) return null;

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      const { name, email, company, topic, message: userMessage } = values;

      const response = await axios.post(`${API_BASE_URL}/api/contact`, {
        name,
        email,
        company,
        topic,
        message: userMessage,
      });

      if (response.data?.success) {
        const { id, createdAt } = response.data.data || {};

        await Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          html: `
            <p style="margin-bottom: 8px;">${response.data.message || 'Thanks! We received your message.'}</p>
          `,
          confirmButtonText: 'Done',
          confirmButtonColor: '#3f8cff',
        });

        form.resetFields();
        onClose();
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: response.data?.message || 'Please try again.',
          confirmButtonColor: '#3f8cff',
        });
      }
    } catch (err) {
      const errMsg =
        err.response?.data?.message || 'Something went wrong. Please try again.';

      await Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: errMsg,
        confirmButtonColor: '#3f8cff',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleOverlayKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <>
      <style>{`
        .ttu-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0, 10, 24, 0.55);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: ttuFadeIn 0.25s ease;
        }

        @keyframes ttuFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ttu-card {
  width: 100%;
  max-width: 960px;
  max-height: 90vh;

  display: grid;
  grid-template-columns: 0.85fr 1.15fr;

  border-radius: 20px;
  overflow: hidden;

  box-shadow: 0 30px 80px rgba(0, 10, 24, 0.45);
  animation: ttuRise 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}

        @keyframes ttuRise {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .ttu-info {
          background: linear-gradient(160deg, #001529 0%, #000c17 100%);
          color: white;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
        }

        .ttu-info::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47, 224, 198, 0.18), transparent 70%);
        }

        .ttu-brand {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin-bottom: 6px;
          position: relative;
        }

        .ttu-brand span { color: #40a9ff; }

        .ttu-tagline {
          color: rgba(255, 255, 255, 0.55);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 260px;
          position: relative;
        }

        .ttu-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
          position: relative;
        }

        .ttu-detail-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: rgba(63, 140, 255, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #40a9ff;
          flex-shrink: 0;
          font-size: 14px;
        }

        .ttu-detail-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.5;
        }

        .ttu-detail-text a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }
        .ttu-detail-text a:hover { color: #40a9ff; }

        .ttu-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 24px 0;
          position: relative;
        }

        .ttu-linkedin {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          position: relative;
        }

        .ttu-qr {
          width: 76px;
          height: 76px;
          border-radius: 10px;
          background: white;
          padding: 6px;
          flex-shrink: 0;
        }

        .ttu-linkedin-title {
          color: white;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ttu-linkedin-sub {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12.5px;
          line-height: 1.5;
        }

        .ttu-form-panel {
  background: white;
  padding: 40px 40px 32px;
  position: relative;

  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;

  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/old Edge */
}

/* Chrome, Safari, Edge */
.ttu-form-panel::-webkit-scrollbar {
  display: none;
}

        .ttu-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: rgba(0, 0, 0, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .ttu-close:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .ttu-form-title {
          font-size: 20px;
          font-weight: 700;
          color: rgba(20, 20, 20, 0.85);
          margin-bottom: 4px;
        }

        .ttu-form-sub {
          color: rgba(20, 20, 20, 0.5);
          font-size: 13.5px;
          margin-bottom: 24px;
        }

        .ttu-label {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(20, 20, 20, 0.55);
        }

        .ttu-required::after {
          content: ' *';
          color: #2fbfa0;
        }

        .ttu-form-panel .ant-form-item {
          margin-bottom: 18px;
        }

        .ttu-form-panel .ant-input,
        .ttu-form-panel .ant-select-selector,
        .ttu-form-panel textarea.ant-input {
          border-radius: 10px !important;
          border: 1px solid rgba(0, 0, 0, 0.12) !important;
        }

        .ttu-form-panel .ant-input:focus,
        .ttu-form-panel .ant-input:hover,
        .ttu-form-panel .ant-select-focused .ant-select-selector,
        .ttu-form-panel .ant-select-selector:hover {
          border-color: #40a9ff !important;
          box-shadow: 0 0 0 3px rgba(64, 169, 255, 0.12) !important;
        }

        .ttu-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 6px;
        }

        .ttu-send-btn {
          height: 44px;
          padding: 0 26px;
          border-radius: 9999px;
          border: none;
          background: linear-gradient(90deg, #2fe0c6, #3f8cff);
          color: white;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 20px rgba(63, 140, 255, 0.3);
        }

        .ttu-send-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(63, 140, 255, 0.4);
        }

        .ttu-send-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .ttu-send-btn:focus-visible {
          outline: 2px solid #2196f3;
          outline-offset: 3px;
        }

        .ttu-alt-contact {
          color: rgba(20, 20, 20, 0.5);
          font-size: 13.5px;
        }

        .ttu-alt-contact a {
          color: #2196f3;
          text-decoration: none;
          font-weight: 600;
        }

        @media (prefers-reduced-motion: reduce) {
          .ttu-overlay, .ttu-card, .ttu-close, .ttu-send-btn {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 760px) {
          .ttu-card {
            grid-template-columns: 1fr;
            max-height: 92vh;
          }
          .ttu-info { padding: 32px 28px; }
          .ttu-form-panel { padding: 60px 24px 28px; }
        }
      `}</style>

      <div
        className="ttu-overlay"
        onClick={onClose}
        onKeyDown={handleOverlayKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Talk to us"
      >
        <div className="ttu-card" onClick={(e) => e.stopPropagation()}>
          <div className="ttu-info">
            <div className="ttu-brand">
              Mentor<span>Crew</span>
            </div>
            <p className="ttu-tagline">
              Tell us what you're building or looking for — a mentor, a hire,
              or a learning program. We usually reply within one business day.
            </p>

            <div className="ttu-detail-row">
              <span className="ttu-detail-icon">
                <EnvironmentOutlined />
              </span>
              <span className="ttu-detail-text">
                Perungudi, Chennai,
                <br />
                Tamil Nadu, India
              </span>
            </div>

            <div className="ttu-detail-row">
              <span className="ttu-detail-icon">
                <MailOutlined />
              </span>
              <span className="ttu-detail-text">
                <a href="mailto:hello@mentorcrew.co">hello@mentorcrew.co</a>
              </span>
            </div>

            <div className="ttu-divider" />

            <a
              className="ttu-linkedin"
              href="https://www.linkedin.com/company/mentorcrew-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="ttu-qr"
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://www.linkedin.com/company/mentorcrew-in"
                alt="MentorCrew LinkedIn QR code"
              />
              <span>
                <div className="ttu-linkedin-title">
                  <LinkedinOutlined /> Connect on LinkedIn
                </div>
                <div className="ttu-linkedin-sub">
                  Scan the QR code or tap it to open our profile.
                </div>
              </span>
            </a>
          </div>

          <div className="ttu-form-panel">
            <button className="ttu-close" onClick={onClose} aria-label="Close">
              <CloseOutlined />
            </button>

            <div className="ttu-form-title">Talk to us</div>
            <div className="ttu-form-sub">
              Fill in a few details and we'll take it from there.
            </div>

            <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
              <Form.Item
                name="name"
                label={<span className="ttu-label ttu-required">Name</span>}
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your full name" size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="ttu-label ttu-required">Email</span>}
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Enter a valid email' },
                ]}
              >
                <Input placeholder="you@company.com" size="large" />
              </Form.Item>

              <Form.Item
                name="company"
                label={<span className="ttu-label">Company / Institution Name</span>}
              >
                <Input placeholder="Enter company or institution name" size="large" />
              </Form.Item>

              <Form.Item
                name="topic"
                label={<span className="ttu-label">What can we help with?</span>}
                initialValue="Learning Programs"
              >
                <Select size="large">
                  {HELP_OPTIONS.map((opt) => (
                    <Option key={opt} value={opt}>
                      {opt}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="message"
                label={<span className="ttu-label ttu-required">Message</span>}
                rules={[{ required: true, message: 'Please add a short message' }]}
              >
                <TextArea rows={4} placeholder="Tell us a bit about what you need..." />
              </Form.Item>

              <div className="ttu-actions">
                <button type="submit" className="ttu-send-btn" disabled={submitting}>
                  <SendOutlined /> {submitting ? 'Sending...' : 'Send'}
                </button>
                {/* <span className="ttu-alt-contact">
                  or email <a href="mailto:hello@mentorcrew.co">hello@mentorcrew.co</a>
                </span> */}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalkToUs;