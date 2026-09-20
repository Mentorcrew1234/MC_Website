import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Row, Col, Tooltip, Divider } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  SafetyOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
        } else {
          // Reset on exit so animation replays on re-entry!
          setFooterVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    footerRef.current.style.setProperty('--mouse-x', `${x}px`);
    footerRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handlePointerEnter = useCallback((e) => {
    setIsHovered(true);
    handlePointerMove(e);
  }, [handlePointerMove]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const policyContent = {
    terms: {
      title: 'Terms & Conditions',
      content: `Welcome to MentorCrew! By accessing or using our website (www.mentorcrew.co) and any services, content, or applications provided ("Platform"), you agree to comply with these Terms of Use.

Key Points:
- Users must be at least 18 years old or have parental/guardian consent if aged 13-18
- Registration requires accurate information
- Limited, non-exclusive license for personal, non-commercial use
- You are responsible for all content you post
- Payments processed via third-party gateways
- All content, logos, software owned by MentorCrew
- Platform provided "as is" without warranties

Contact: hello@mentorcrew.co`,
    },
    privacy: {
      title: 'Privacy Policy',
      content: `MentorCrew respects your privacy. This Policy explains how we collect, use, and protect your information.

Information We Collect:
- Personal Info: Name, email, payment details
- Usage Data: Pages visited, time spent, interactions
- Cookies & Tracking for analytics

How We Use Your Info:
- To provide and manage courses and services
- To send updates and promotions (with consent)
- To improve Platform performance

Data Security:
- We use appropriate security measures
- We do not sell your personal data
- Data shared only with trusted service providers

Your Rights:
- Access, correct, or delete personal information
- Opt-out of marketing communications`,
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      content: `MentorCrew aims to provide high-quality learning experiences.

Refund Policy:
- Refunds available only under specific conditions
- Content once accessed/downloaded cannot be refunded
- Submit requests via hello@mentorcrew.co

Important Notes:
- Users must adhere to assigned batch timings
- Changes in batch, schedule not permitted
- No refunds for dissatisfaction after course completion or missed classes
- Refunds processed via original payment method`,
    },
  };

  const linkStyle = {
    color: 'rgba(255,255,255,0.65)',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const rowItemStyle = {
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const iconWrapStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    background: 'rgba(24,144,255,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#40a9ff',
    fontSize: '14px',
    flexShrink: 0,
  };

  const socialIconStyle = {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.75)',
    fontSize: '17px',
    transition: 'all 0.25s ease',
  };

  const headingStyle = {
    color: 'white',
    marginBottom: '22px',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
  };

  const handleSocialEnter = (e, color) => {
    e.currentTarget.style.background = color;
    e.currentTarget.style.borderColor = color;
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.transform = 'translateY(-3px)';
  };

  const handleSocialLeave = (e) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
    e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleLinkEnter = (e) => {
    e.target.style.color = '#40a9ff';
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = 'rgba(255,255,255,0.65)';
  };

  return (
    <footer
      ref={footerRef}
      className="mentorcrew-footer"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #001529 0%, #000c17 100%)',
        color: 'white',
        paddingTop: '64px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <style>{`
        @property --mouse-x {
          syntax: '<length-percentage>';
          inherits: true;
          initial-value: 50%;
        }
        @property --mouse-y {
          syntax: '<length-percentage>';
          inherits: true;
          initial-value: 50%;
        }

        .mentorcrew-footer {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }

        .footer-glass-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: radial-gradient(
            620px circle at var(--mouse-x) var(--mouse-y),
            rgba(33, 150, 243, 0.14) 0%,
            rgba(0, 188, 212, 0.07) 25%,
            rgba(124, 77, 255, 0.05) 45%,
            transparent 65%
          );
        }

        .footer-glass-highlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          background: radial-gradient(
            320px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.04) 0%,
            rgba(64, 169, 255, 0.03) 35%,
            transparent 70%
          );
        }

        .footer-glass-border-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          pointer-events: none;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: radial-gradient(
            450px circle at var(--mouse-x) 0px,
            rgba(64, 169, 255, 0.55) 0%,
            rgba(124, 77, 255, 0.28) 42%,
            transparent 100%
          );
        }

        .footer-glass-glow.active,
        .footer-glass-highlight.active,
        .footer-glass-border-glow.active {
          opacity: 1;
        }

        @media (hover: none), (max-width: 768px) {
          .footer-glass-glow,
          .footer-glass-highlight,
          .footer-glass-border-glow {
            display: none !important;
          }
        }

        .footer-content-wrap {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .footer-content-wrap.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .footer-content-wrap {
            transform: translateY(16px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-glass-glow,
          .footer-glass-highlight,
          .footer-border-glow {
            display: none !important;
          }
          .footer-content-wrap {
            transition: opacity 0.3s ease !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className={isHovered ? "footer-glass-glow active" : "footer-glass-glow"} />
      <div className={isHovered ? "footer-glass-highlight active" : "footer-glass-highlight"} />
      <div className={isHovered ? "footer-glass-border-glow active" : "footer-glass-border-glow"} />

      <div
        className={`footer-content-wrap ${footerVisible ? 'is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}
      >
        <Row gutter={[48, 40]}>
          <Col xs={24} sm={24} md={7} lg={7}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '14px',
              }}
            >
              <img
                src="/m_logo.png"
                alt="MentorCrew Logo"
                onError={(e) => {
                  if (e.currentTarget.src.indexOf('/mentorcrew-logo-symbol.png') === -1) {
                    e.currentTarget.src = '/mentorcrew-logo-symbol.png';
                  }
                }}
                style={{
                  width: '46px',
                  height: '46px',
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '0.5px' }}>
                Mentor<span style={{ color: '#40a9ff' }}>Crew</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', fontSize: '14px', maxWidth: '260px', marginBottom: '24px' }}>
              Empowering minds through mentorship and guidance. Connect with experienced mentors to accelerate your growth.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.linkedin.com/company/mentorcrew-in" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => handleSocialEnter(e, '#0077b5')} onMouseLeave={handleSocialLeave}>
                <LinkedinOutlined />
              </a>
              <a href="https://youtube.com/@mentorcrew-in?si=2svNq_H-2j6X6750" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => handleSocialEnter(e, '#ff0000')} onMouseLeave={handleSocialLeave}>
                <YoutubeOutlined />
              </a>
              <a href="https://www.instagram.com/mentorcrew.co?igsh=MWplZnNrZmYwOW5vMg==" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => handleSocialEnter(e, '#e4405f')} onMouseLeave={handleSocialLeave}>
                <InstagramOutlined />
              </a>
              <a href="https://wa.me/917550066423" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => handleSocialEnter(e, '#25D366')} onMouseLeave={handleSocialLeave}>
                <FaWhatsapp />
              </a>
            </div>
          </Col>

          <Col xs={24} sm={8} md={5} lg={5}>
            <h4 style={headingStyle}>Quick Links</h4>

            <div style={rowItemStyle}>
              <span style={iconWrapStyle}><HomeOutlined /></span>
              <Link to="/" style={linkStyle} onMouseEnter={handleLinkEnter} onMouseLeave={handleLinkLeave}>Home</Link>
            </div>

            <div style={rowItemStyle}>
              <span style={iconWrapStyle}><InfoCircleOutlined /></span>
              <Link to="/" style={linkStyle} onMouseEnter={handleLinkEnter} onMouseLeave={handleLinkLeave}>About Us</Link>
            </div>
          </Col>

          <Col xs={24} sm={8} md={6} lg={6}>
            <h4 style={headingStyle}>Information</h4>

            <Tooltip title={<div style={{ whiteSpace: 'pre-wrap', maxWidth: '400px' }}>{policyContent.terms.content}</div>} overlayStyle={{ maxWidth: '450px' }} placement="top">
              <div style={{ ...rowItemStyle, cursor: 'pointer' }}>
                <span style={iconWrapStyle}><FileTextOutlined /></span>
                <span style={linkStyle}>Terms & Conditions</span>
              </div>
            </Tooltip>

            <Tooltip title={<div style={{ whiteSpace: 'pre-wrap', maxWidth: '400px' }}>{policyContent.privacy.content}</div>} overlayStyle={{ maxWidth: '450px' }} placement="top">
              <div style={{ ...rowItemStyle, cursor: 'pointer' }}>
                <span style={iconWrapStyle}><SafetyOutlined /></span>
                <span style={linkStyle}>Privacy Policy</span>
              </div>
            </Tooltip>

            <Tooltip title={<div style={{ whiteSpace: 'pre-wrap', maxWidth: '400px' }}>{policyContent.refund.content}</div>} overlayStyle={{ maxWidth: '450px' }} placement="top">
              <div style={{ ...rowItemStyle, cursor: 'pointer' }}>
                <span style={iconWrapStyle}><SyncOutlined /></span>
                <span style={linkStyle}>Refund & Return Policy</span>
              </div>
            </Tooltip>
          </Col>

          <Col xs={24} sm={8} md={6} lg={6}>
            <h4 style={headingStyle}>Contact Us</h4>

            <div style={rowItemStyle}>
              <span style={iconWrapStyle}><EnvironmentOutlined /></span>
              <a href="https://share.google/dD0uk4XPRDrrczK3G" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={handleLinkEnter} onMouseLeave={handleLinkLeave}>
                Perungudi, Chennai
              </a>
            </div>

            <div style={rowItemStyle}>
              <span style={iconWrapStyle}><PhoneOutlined /></span>
              <a href="tel:+917550066423" style={linkStyle} onMouseEnter={handleLinkEnter} onMouseLeave={handleLinkLeave}>
                +91 7550066423
              </a>
            </div>

            <div style={rowItemStyle}>
              <span style={iconWrapStyle}><MailOutlined /></span>
              <a href="mailto:hello@mentorcrew.co" style={linkStyle} onMouseEnter={handleLinkEnter} onMouseLeave={handleLinkLeave}>
                hello@mentorcrew.co
              </a>
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '48px 0 20px' }} />

        <Row justify="center" style={{ paddingBottom: '20px' }}>
          <Col>
            <p style={{ color: 'rgba(255,255,255,0.45)', margin: 0, fontSize: '13px', textAlign: 'center' }}>
              MentorCrew &copy; {currentYear}. All rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;