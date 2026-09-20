import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '917550066423';
  const message = 'Hi, I would like to know more about MentorCrew.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
    zIndex: 1000,
    color: '#fff',
    fontSize: '28px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const handleEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.08)';
    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.35)';
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.25)';
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;