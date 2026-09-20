import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeGlowCard, setActiveGlowCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const servicesRef = useRef(null);

  const services = [
    {
      id: 'school',
      title: 'Schools',
      subtitle: 'Empowering K-12 education with innovative solutions',
      frontIcon: './school.png',
      backIcon: 'fas fa-graduation-cap',
      backTitle: 'School Solutions',
      features: [
        'AI & Robotics',
        'How to ACE examinations',
        'Public Speaking',
        'Faculty Development',
      ],
      buttonText: 'Learn More',
      color: '#ff6b6b'
    },
    {
      id: 'college',
      title: 'Colleges',
      subtitle: 'Advanced higher education management systems',
      frontIcon: './college.png',
      backIcon: 'fas fa-user-graduate',
      backTitle: 'College Solutions',
      features: [
        'Technical Trainings',
        'Personality Development',
        'Placement focused trainings',
        'Language development',
        'Domain Trainings',
      ],
      buttonText: 'Explore',
      color: '#4ecdc4'
    },
    {
      id: 'corporate',
      title: 'Corporate',
      subtitle: 'Enterprise training and development solutions',
      frontIcon: './corporate.png',
      backIcon: 'fas fa-briefcase',
      backTitle: 'Corporate Solutions',
      features: [
        'Technical Trainings',
        'Personality Development',
        'Leadership coaching',
        'Domain Trainings',
        'Outbound Trainings',
      ],
      buttonText: 'Get Started',
      color: '#45b7d1'
    },
    {
      id: 'members',
      title: 'Members',
      subtitle: 'Exclusive community and membership benefits',
      frontIcon: './member.png',
      backIcon: 'fas fa-crown',
      backTitle: 'Member Benefits',
      features: [
        'Technical Trainings',
        'Personality Development',
        'Leadership coaching',
        'Domain Trainings',
        'Language development',
      ],
      buttonText: 'Join Now',
      color: '#f9ca24'
    }
  ];

  useEffect(() => {
    // Add Font Awesome CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    let timers = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          timers.forEach(t => clearTimeout(t));
          timers = services.map((_, index) =>
            setTimeout(() => {
              setVisibleCards(prev => Array.from(new Set([...prev, index])));
            }, index * 140)
          );
        } else {
          // Reset when leaving viewport so entrance animation replays on every re-entry!
          setSectionVisible(false);
          timers.forEach(t => clearTimeout(t));
          setVisibleCards([]);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      document.head.removeChild(link);
      timers.forEach(t => clearTimeout(t));
      observer.disconnect();
    };
  }, []);

  const handleCardClick = (index) => {
    // Handle button clicks or navigation
    console.log(`Service ${services[index].title} clicked`);
  };

  const handleCardTap = (index, e) => {
    // Prevent toggling flip/glow if tap originated on button or link
    if (e && e.target && (e.target.closest('.cta-button') || e.target.closest('button') || e.target.closest('a'))) {
      return;
    }
    setActiveGlowCard(prev => (prev === index ? null : index));
    setFlippedCard(prev => (prev === index ? null : index));
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .services-container {
          position: relative;
          min-height: 100vh;
          padding: 4rem 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #edf4fb 0%, #e6eff9 35%, #e9eefb 70%, #edeaf8 100%);
          overflow: hidden;
        }

        /* Subtle Dotted Matrix Decorative Pattern */
        .background-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99, 102, 241, 0.12) 1.2px, transparent 1.2px);
          background-size: 28px 28px;
          pointer-events: none;
          opacity: 0.45;
          z-index: 1;
        }

        /* Subtle Light Trails & Educational Atmospheric Contours */
        .background-trails {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          opacity: 0.45;
        }

        /* Animated Ambient Light Blobs */
        .background-blobs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(55px);
          opacity: 0.28;
          animation: blob 9s infinite ease-in-out;
        }

        .blob-1 {
          top: 3rem;
          left: 3rem;
          width: 22rem;
          height: 22rem;
          background-color: #C084FC;
        }

        .blob-2 {
          top: 8rem;
          right: 3rem;
          width: 20rem;
          height: 20rem;
          background-color: #93C5FD;
          animation-delay: 2.5s;
        }

        .blob-3 {
          bottom: -3rem;
          left: 8rem;
          width: 22rem;
          height: 22rem;
          background-color: #A5F3FC;
          animation-delay: 5s;
        }

        .blob-4 {
          bottom: 4rem;
          right: 8rem;
          width: 18rem;
          height: 18rem;
          background-color: #DDD6FE;
          animation-delay: 3.5s;
        }

        /* Floating Learning Icons */
        .floating-icons {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .icon-container {
          position: absolute;
          animation: float-icon 6s ease-in-out infinite;
        }

        .icon-1 {
          top: 15%;
          left: 15%;
        }

        .icon-2 {
          top: 25%;
          right: 20%;
          animation-delay: 3s;
        }

        .icon-3 {
          bottom: 20%;
          right: 25%;
        }

        .icon-4 {
          bottom: 30%;
          left: 10%;
          animation-delay: 1.5s;
        }

        .floating-icon {
          width: 3.5rem;
          height: 3.5rem;
          opacity: 0.25;
        }

        .icon-purple {
          color: #A78BFA;
        }

        .icon-indigo {
          color: #818CF8;
        }

        .icon-pink {
          color: #F9A8D4;
        }

        .icon-yellow {
          color: #FCD34D;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .services-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .services-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .services-title {
          padding: 20px;
          font-size: 3rem;
          font-weight: 500;
          background: black;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
        }

        .services-description {
          font-size: 1.1rem;
          color: black;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .service-pillar {
          perspective: 1000px;
          height: 350px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .service-pillar.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .services-header {
            transform: translateY(18px);
          }
          .service-pillar {
            transform: translateY(24px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-header,
          .service-pillar {
            transition: opacity 0.3s ease !important;
            transform: none !important;
          }
        }

        .pillar-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .pillar-card:hover,
        .pillar-card.is-flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          color: #0f172a;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.35s ease, -webkit-backdrop-filter 0.35s ease;
        }

        .card-front {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(235, 243, 255, 0.44) 50%, rgba(242, 236, 255, 0.52) 100%);
          backdrop-filter: blur(24px) saturate(155%);
          -webkit-backdrop-filter: blur(24px) saturate(155%);
          border: 1.5px solid rgba(255, 255, 255, 0.82);
          box-shadow:
            0 12px 32px -6px rgba(15, 23, 42, 0.08),
            0 4px 12px rgba(99, 102, 241, 0.05),
            inset 0 0 20px 0 rgba(99, 102, 241, 0.12),
            inset 0 0 10px 0 rgba(56, 189, 248, 0.1),
            inset 0 1px 2px 0 rgba(255, 255, 255, 0.95),
            inset 0 -2px 4px 0 rgba(167, 139, 250, 0.14);
        }

        .card-back {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.86) 0%, rgba(240, 246, 255, 0.70) 50%, rgba(245, 240, 255, 0.80) 100%);
          transform: rotateY(180deg);
          backdrop-filter: blur(24px) saturate(155%);
          -webkit-backdrop-filter: blur(24px) saturate(155%);
          border: 1.5px solid rgba(255, 255, 255, 0.82);
          box-shadow:
            0 12px 32px -6px rgba(15, 23, 42, 0.08),
            0 4px 12px rgba(99, 102, 241, 0.05),
            inset 0 0 20px 0 rgba(99, 102, 241, 0.12),
            inset 0 0 10px 0 rgba(56, 189, 248, 0.1),
            inset 0 1px 2px 0 rgba(255, 255, 255, 0.95);
          text-align: left;
          color: #0f172a;
        }

        .pillar-card:hover .card-front,
        .pillar-card.glow-active .card-front {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(232, 244, 255, 0.54) 45%, rgba(244, 236, 255, 0.64) 100%);
          backdrop-filter: blur(28px) saturate(170%);
          -webkit-backdrop-filter: blur(28px) saturate(170%);
          border-color: rgba(255, 255, 255, 0.96);
          box-shadow:
            0 24px 50px -8px rgba(124, 77, 255, 0.22),
            0 0 36px -4px rgba(56, 189, 248, 0.25),
            0 0 16px 1px rgba(99, 102, 241, 0.20),
            0 14px 28px -4px rgba(15, 23, 42, 0.10),
            inset 0 0 28px 0 rgba(99, 102, 241, 0.16),
            inset 0 0 14px 0 rgba(56, 189, 248, 0.14),
            inset 0 1.5px 2px 0 rgba(255, 255, 255, 1),
            inset 0 -2px 6px 0 rgba(167, 139, 250, 0.16);
        }

        .pillar-card:hover .card-back,
        .pillar-card.glow-active .card-back {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(238, 246, 255, 0.78) 45%, rgba(246, 240, 255, 0.86) 100%);
          backdrop-filter: blur(28px) saturate(170%);
          -webkit-backdrop-filter: blur(28px) saturate(170%);
          border-color: rgba(255, 255, 255, 0.96);
          box-shadow:
            0 24px 50px -8px rgba(124, 77, 255, 0.22),
            0 0 36px -4px rgba(56, 189, 248, 0.25),
            0 0 16px 1px rgba(99, 102, 241, 0.20),
            0 14px 28px -4px rgba(15, 23, 42, 0.10),
            inset 0 0 28px 0 rgba(99, 102, 241, 0.16),
            inset 0 0 14px 0 rgba(56, 189, 248, 0.14),
            inset 0 1.5px 2px 0 rgba(255, 255, 255, 1),
            inset 0 -2px 6px 0 rgba(167, 139, 250, 0.16);
        }

        .pillar-icon {
          width: 80px !important;
          height: 80px !important;
          margin-bottom: 1.5rem;
          animation: float-card 3s ease-in-out infinite;
          object-fit: contain;
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .pillar-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          color: #0f172a;
          text-shadow: none;
          letter-spacing: -0.01em;
        }

        .pillar-subtitle {
          font-size: 0.98rem;
          color: #475569;
          opacity: 1;
          line-height: 1.5;
        }

        .back-content {
          width: 100%;
        }

        .back-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          text-align: center;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 700;
        }

        .feature-list {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.4;
        }

        .feature-item::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .cta-button {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          width: 100%;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(124, 58, 237, 0.35);
          background: linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%);
        }

        @media (max-width: 768px) {
          .services-title {
            font-size: 2rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .service-pillar {
            height: 320px;
          }
          
          .pillar-icon {
            width: 64px !important;
            height: 64px !important;
          }

          .floating-icon {
            width: 2.5rem;
            height: 2.5rem;
          }

          .pillar-card:hover:not(.is-flipped) {
            transform: none;
          }

          .pillar-card.is-flipped {
            transform: rotateY(180deg) !important;
          }

          .pillar-card:hover:not(.glow-active):not(.is-flipped) .card-front,
          .pillar-card:hover:not(.glow-active):not(.is-flipped) .card-back {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(235, 243, 255, 0.44) 50%, rgba(242, 236, 255, 0.52) 100%);
            border-color: rgba(255, 255, 255, 0.82);
            box-shadow:
              0 12px 32px -6px rgba(15, 23, 42, 0.08),
              0 4px 12px rgba(99, 102, 241, 0.05),
              inset 0 0 20px 0 rgba(99, 102, 241, 0.12),
              inset 0 0 10px 0 rgba(56, 189, 248, 0.1),
              inset 0 1px 2px 0 rgba(255, 255, 255, 0.95),
              inset 0 -2px 4px 0 rgba(167, 139, 250, 0.14);
            backdrop-filter: blur(24px) saturate(155%);
            -webkit-backdrop-filter: blur(24px) saturate(155%);
          }

          .pillar-card.glow-active .card-front {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(232, 244, 255, 0.54) 45%, rgba(244, 236, 255, 0.64) 100%);
            backdrop-filter: blur(28px) saturate(170%);
            -webkit-backdrop-filter: blur(28px) saturate(170%);
            border-color: rgba(255, 255, 255, 0.96);
            box-shadow:
              0 24px 50px -8px rgba(124, 77, 255, 0.22),
              0 0 36px -4px rgba(56, 189, 248, 0.25),
              0 0 16px 1px rgba(99, 102, 241, 0.20),
              0 14px 28px -4px rgba(15, 23, 42, 0.10),
              inset 0 0 28px 0 rgba(99, 102, 241, 0.16),
              inset 0 0 14px 0 rgba(56, 189, 248, 0.14),
              inset 0 1.5px 2px 0 rgba(255, 255, 255, 1),
              inset 0 -2px 6px 0 rgba(167, 139, 250, 0.16);
          }

          .pillar-card.glow-active .card-back {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(238, 246, 255, 0.78) 45%, rgba(246, 240, 255, 0.86) 100%);
            backdrop-filter: blur(28px) saturate(170%);
            -webkit-backdrop-filter: blur(28px) saturate(170%);
            border-color: rgba(255, 255, 255, 0.96);
            box-shadow:
              0 24px 50px -8px rgba(124, 77, 255, 0.22),
              0 0 36px -4px rgba(56, 189, 248, 0.25),
              0 0 16px 1px rgba(99, 102, 241, 0.20),
              0 14px 28px -4px rgba(15, 23, 42, 0.10),
              inset 0 0 28px 0 rgba(99, 102, 241, 0.16),
              inset 0 0 14px 0 rgba(56, 189, 248, 0.14),
              inset 0 1.5px 2px 0 rgba(255, 255, 255, 1),
              inset 0 -2px 6px 0 rgba(167, 139, 250, 0.16);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-face,
          .pillar-card {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="services-container" ref={servicesRef}>
        {/* Subtle Decorative Dot Matrix Pattern */}
        <div className="background-pattern" />

        {/* Animated Ambient Background Blobs */}
        <div className="background-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>

        {/* Delicate Curved Light Trails & Educational Atmospheric Contours */}
        <svg className="background-trails" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="serviceTrailGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.38" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="serviceTrailGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Smooth delicate curved light trails */}
          <path d="M-100,200 C300,100 600,450 1100,220 C1300,120 1500,280 1600,320" fill="none" stroke="url(#serviceTrailGrad1)" strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M-50,650 C250,550 550,750 950,580 C1250,450 1450,600 1550,550" fill="none" stroke="url(#serviceTrailGrad2)" strokeWidth="1.5" />
          <path d="M100,850 C400,620 800,880 1350,720" fill="none" stroke="url(#serviceTrailGrad1)" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />

          {/* Extremely subtle educational geometric atmospheric contours */}
          <circle cx="200" cy="180" r="120" fill="none" stroke="rgba(129, 140, 248, 0.12)" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="1280" cy="700" r="140" fill="none" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Abstract open book / horizon curve silhouette */}
          <path d="M640,140 C680,125 720,125 760,140 C800,125 840,125 880,140" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1.2" />
        </svg>

        {/* Floating Learning Icons */}
        <div className="floating-icons">
          <div className="icon-container icon-1">
            <svg className="floating-icon icon-indigo" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>

          <div className="icon-container icon-2">
            <svg className="floating-icon icon-purple" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </div>

          <div className="icon-container icon-3">
            <svg className="floating-icon icon-pink" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="icon-container icon-4">
            <svg className="floating-icon icon-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
        </div>

        <div className="services-wrapper">
          <div className={`services-header ${sectionVisible ? 'visible' : ''}`}>
            <h1 className="services-title">Our Services</h1>
            <p className="services-description">
              Comprehensive solutions tailored for every educational and professional need
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-pillar ${visibleCards.includes(index) ? 'visible' : ''}`}
              >
                <div
                  className={`pillar-card ${activeGlowCard === index ? 'glow-active' : ''} ${flippedCard === index ? 'is-flipped' : ''}`}
                  onClick={(e) => handleCardTap(index, e)}
                  onMouseLeave={() => {
                    setActiveGlowCard(null);
                    setFlippedCard(null);
                  }}
                >
                  {/* Front of card */}
                  <div className="card-face card-front">
                    <img
                      src={service.frontIcon}
                      alt={`${service.title} icon`}
                      className="pillar-icon"
                      style={{ filter: `drop-shadow(0 0 10px ${service.color}80)` }}
                    />
                    <h3 className="pillar-title">{service.title}</h3>
                    <p className="pillar-subtitle">{service.subtitle}</p>
                  </div>

                  {/* Back of card */}
                  <div className="card-face card-back">
                    <div className="back-content">
                      <h4 className="back-title">
                        <i className={service.backIcon}></i>
                        {service.backTitle}
                      </h4>
                      <ul className="feature-list">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        className="cta-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(index);
                        }}
                      >
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;