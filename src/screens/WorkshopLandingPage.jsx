import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Award,
  Users,
  Cpu,
  Bot,
  Phone,
  Globe,
  Instagram,
} from 'lucide-react';
import WorkshopRegistrationModal from '../component/workshop/WorkshopRegistrationModal';
import '../style/Workshop.css';

/**
 * Official MentorCrew Workshop Poster asset in /public:
 */
const POSTER_IMAGE_SRC = '/workshop/qa-automation-ai-poster.png';

/**
 * Pricing configuration:
 * Note: Pricing will be fetched from backend/campaign settings.
 * If null, the page cleanly omits invented pricing and displays a direct "REGISTER NOW" CTA.
 */
const CONFIRMED_PRICE = null;

const WorkshopLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  // Workshop event details (unconfirmed details clearly noted as configurable placeholders)
  const workshopData = {
    title: 'QA Automation with AI',
    badge: 'Smarter Testing. Faster Results.',
    subheading:
      'Learn QA Automation with the power of AI and build smarter tests, reduce effort, and boost your career.',
    priceDisplay: CONFIRMED_PRICE,
    details: [
      { icon: Calendar, label: 'Date', value: 'Upcoming Weekend Batch (TBA)' },
      { icon: Clock, label: 'Time', value: '11:00 AM – 1:00 PM IST (TBA)' },
      { icon: Laptop, label: 'Mode', value: 'Live Online (Interactive)' },
      { icon: MapPin, label: 'Location', value: 'Online Session' },
      { icon: Clock, label: 'Duration', value: '2 Hours Intensive' },
    ],
  };

  // Why QA with AI? — exact concepts from poster
  const whyAiPoints = [
    {
      title: 'AI Speeds Up Test Creation & Maintenance',
      desc: 'Accelerate test authoring and eliminate tedious maintenance with intelligent generative test routines.',
    },
    {
      title: 'Higher Accuracy & Fewer Defects',
      desc: 'Achieve pinpoint assertion accuracy and catch critical regressions before they reach production.',
    },
    {
      title: 'Save Time, Reduce Effort & Improve Productivity',
      desc: 'Automate repetitive test suites so your engineering team can focus on exploratory and edge scenarios.',
    },
    {
      title: 'In-Demand Skills for a Future-Ready Career',
      desc: 'Position yourself for top-tier QA Automation and AI Quality Engineering roles in modern tech companies.',
    },
    {
      title: 'Real-Time Insights & Smart Diagnostics',
      desc: 'Diagnose flaky locators, identify defect root causes, and predict failure hotspots instantly.',
    },
    {
      title: 'Career Boost with Practical Experience',
      desc: 'Transition smoothly from manual verification to high-impact, AI-assisted test automation workflows.',
    },
  ];

  // What You Will Learn — exact topics from poster
  const whatYouWillLearn = [
    'Automation Testing with Selenium',
    'TestNG Framework & Test Design',
    'API Testing (Rest Assured)',
    'CI/CD Integration (Jenkins Basics)',
    'AI in Test Automation – Tools & Use Cases',
    'AI-Powered Test Case Generation',
    'Defect Prediction & Smart Reporting',
    'Real-time Projects with AI Integration',
  ];

  // Tools & Technologies — exact tools from poster
  const toolsAndTechniques = [
    { name: 'Selenium', type: 'Automation Framework' },
    { name: 'TestNG', type: 'Test Runner' },
    { name: 'Jenkins', type: 'CI/CD Pipeline' },
    { name: 'REST Assured', type: 'API Testing' },
    { name: 'ChatGPT', type: 'AI Test Generation' },
    { name: 'GitHub Copilot', type: 'AI Code Assistant' },
    { name: 'Git & GitHub', type: 'Version Control' },
  ];

  // Target audience — exact audience from poster
  const whoCanJoin = [
    { role: 'QA Aspirants', desc: 'Kickstart your testing journey with modern AI and automation tools.' },
    { role: 'Manual Testers', desc: 'Upgrade from manual testing into automated, AI-driven quality engineering.' },
    { role: 'Developers & Engineers', desc: 'Build reliable end-to-end automation and API validation suites.' },
    { role: 'Students & Graduates', desc: 'Acquire practical, portfolio-ready testing skills that hiring managers seek.' },
    { role: 'Career Switchers', desc: 'Transition into the software testing industry with high-demand AI skills.' },
  ];

  // Training Pillars — exact bottom bar from poster
  const trainingPillars = [
    {
      icon: Users,
      title: 'Expert Trainers',
      subtitle: 'Industry Experts',
      desc: 'Learn directly from seasoned software test engineers with real-world enterprise QA experience.',
    },
    {
      icon: Laptop,
      title: 'Practical Learning',
      subtitle: 'Hands-on Projects',
      desc: 'Build hands-on test scripts and work through practical project scenarios during the session.',
    },
    {
      icon: Award,
      title: 'Certification',
      subtitle: 'Boost Your Resume',
      desc: 'Receive an official MentorCrew Certificate of Participation to substantiate your automation credentials.',
    },
    {
      icon: Briefcase,
      title: 'Placement Support',
      subtitle: "We've Got Your Back",
      desc: 'Access career prep guidance, resume formatting tips, and MentorCrew community referrals.',
    },
  ];

  const handleOpenRegistration = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="workshop-page">
      <div className="workshop-container">
        {/* ===================================================================
            1. TOP SPACING & ACTUAL WORKSHOP POSTER (SINGLE COHESIVE HERO ASSET)
            =================================================================== */}
        <section className="workshop-hero-poster-section" aria-label="Official Workshop Poster">
          <div className="workshop-poster-frame">
            {posterFailed ? (
              /* Graceful branded fallback if poster image cannot be loaded */
              <div className="workshop-poster-fallback">
                <div className="fallback-header">
                  <span className="fallback-tag">Live Workshop</span>
                  <span className="fallback-brand">MentorCrew</span>
                </div>
                <h2 className="fallback-title">QA Automation with AI</h2>
                <span className="fallback-badge">Smarter Testing. Faster Results.</span>
                <p className="fallback-subtitle">
                  Learn QA Automation with the power of AI and build smarter tests, reduce effort, and boost your career.
                </p>
                <div className="fallback-pills">
                  <span>Selenium</span>
                  <span>TestNG</span>
                  <span>Jenkins</span>
                  <span>ChatGPT</span>
                  <span>Copilot</span>
                </div>
              </div>
            ) : (
              <img
                src={POSTER_IMAGE_SRC}
                alt="MentorCrew QA Automation with AI Official Poster"
                className="workshop-poster-img"
                onError={() => setPosterFailed(true)}
              />
            )}
          </div>
        </section>

        {/* ===================================================================
            2. WORKSHOP TITLE & SUPPORTING STATEMENT (DIRECT DIGITAL EXTENSION)
            =================================================================== */}
        <section className="workshop-intro-section">
          <div className="workshop-badge-pill">
            <Sparkles size={14} className="badge-icon" aria-hidden="true" />
            <span>{workshopData.badge}</span>
          </div>
          <h1 className="workshop-main-title">{workshopData.title}</h1>
          <p className="workshop-lead-text">{workshopData.subheading}</p>

          <div className="workshop-intro-action">
            <button
              type="button"
              className="workshop-primary-btn"
              onClick={handleOpenRegistration}
            >
              <span>REGISTER NOW</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </section>

        {/* ===================================================================
            3. WORKSHOP DETAILS (COMPACT, SCANNABLE, NON-INVENTED)
            =================================================================== */}
        <section className="workshop-section" aria-label="Workshop Details">
          <h2 className="workshop-section-heading">Workshop Details</h2>
          <div className="workshop-details-grid">
            {workshopData.details.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="detail-item">
                  <div className="detail-icon-wrap" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">{item.label}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            4. ABOUT THE WORKSHOP
            =================================================================== */}
        <section className="workshop-section" aria-label="About The Workshop">
          <h2 className="workshop-section-heading">About The Workshop</h2>
          <div className="workshop-text-block">
            <p>
              In fast-paced software development environments, traditional manual quality checks and
              fragile automation scripts create deployment bottlenecks. As AI transforms the software
              engineering lifecycle, QA engineers must evolve to lead the automation curve.
            </p>
            <p>
              <strong>QA Automation with AI</strong> by MentorCrew is an intensive, practical masterclass
              built to equip testers and engineers with actionable modern tooling. You will discover how
              to leverage Selenium, TestNG, Jenkins, and cutting-edge generative AI assistants (ChatGPT &
              Copilot) to design self-healing locators, automate test case generation, and validate complex
              APIs with speed and precision.
            </p>
          </div>
        </section>

        {/* ===================================================================
            5. WHY CHOOSE QA AUTOMATION WITH AI?
            =================================================================== */}
        <section className="workshop-section" aria-label="Why Choose QA Automation with AI">
          <h2 className="workshop-section-heading">Why Choose QA Automation with AI?</h2>
          <div className="why-ai-grid">
            {whyAiPoints.map((point, idx) => (
              <div key={idx} className="why-ai-item">
                <div className="why-ai-item-header">
                  <CheckCircle2 size={16} className="why-ai-check-icon" aria-hidden="true" />
                  <h3 className="why-ai-title">{point.title}</h3>
                </div>
                <p className="why-ai-desc">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            6. WHAT YOU WILL LEARN
            =================================================================== */}
        <section className="workshop-section" aria-label="What You Will Learn">
          <h2 className="workshop-section-heading">What You Will Learn</h2>
          <ul className="learning-topics-list">
            {whatYouWillLearn.map((topic, idx) => (
              <li key={idx} className="learning-topic-item">
                <span className="topic-num" aria-hidden="true">
                  {idx + 1}
                </span>
                <span className="topic-text">{topic}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===================================================================
            7. TOOLS & TECHNOLOGIES
            =================================================================== */}
        <section className="workshop-section" aria-label="Tools and Technologies">
          <h2 className="workshop-section-heading">Tools & Technologies</h2>
          <p className="workshop-section-subtext">
            Master the core automation stack and generative AI assistants highlighted in the campaign:
          </p>
          <div className="tools-chips-container">
            {toolsAndTechniques.map((tool, idx) => (
              <div key={idx} className="tool-chip">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-type">{tool.type}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            8. WHO CAN JOIN?
            =================================================================== */}
        <section className="workshop-section" aria-label="Who Can Join">
          <h2 className="workshop-section-heading">Who Can Join?</h2>
          <div className="audience-clean-list">
            {whoCanJoin.map((aud, idx) => (
              <div key={idx} className="audience-clean-item">
                <h3 className="audience-clean-role">{aud.role}</h3>
                <p className="audience-clean-desc">{aud.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            9. TRAINING, CERTIFICATION & PLACEMENT SUPPORT
            =================================================================== */}
        <section className="workshop-section" aria-label="Training, Certification and Support">
          <h2 className="workshop-section-heading">Training, Certification & Placement Support</h2>
          <div className="pillars-grid">
            {trainingPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box" aria-hidden="true">
                    <PillarIcon size={20} />
                  </div>
                  <div className="pillar-header-group">
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <span className="pillar-tag">{pillar.subtitle}</span>
                  </div>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            10. OFFICIAL MENTORCREW CAMPAIGN CONTACT
            =================================================================== */}
        <section className="workshop-contact-bar" aria-label="MentorCrew Contact">
          <div className="contact-item">
            <Phone size={15} className="contact-icon" aria-hidden="true" />
            <a href="tel:+917550066423">+91 75500 66423</a>
          </div>
          <div className="contact-item">
            <Globe size={15} className="contact-icon" aria-hidden="true" />
            <a href="https://www.mentorcrew.co" target="_blank" rel="noopener noreferrer">
              www.mentorcrew.co
            </a>
          </div>
          <div className="contact-item">
            <Instagram size={15} className="contact-icon" aria-hidden="true" />
            <a href="https://instagram.com/mentorcrew.co" target="_blank" rel="noopener noreferrer">
              @mentorcrew.co
            </a>
          </div>
        </section>

        {/* ===================================================================
            11. IN-PAGE REGISTRATION CALL TO ACTION
            =================================================================== */}
        <section className="workshop-cta-card">
          <h2 className="cta-card-title">Advance Your Testing Skills Today</h2>
          <p className="cta-card-sub">
            Enroll in MentorCrew’s QA Automation with AI masterclass and automate smarter.
          </p>
          <button
            type="button"
            className="workshop-primary-btn workshop-primary-btn-large"
            onClick={handleOpenRegistration}
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </section>
      </div>

      {/* ===================================================================
          12. STICKY MOBILE CTA (CLEAN & MINIMAL, ZERO INVENTED PRICING)
          =================================================================== */}
      <aside className="workshop-sticky-mobile-bar" aria-label="Mobile Registration Bar">
        <div className="sticky-mobile-inner">
          {workshopData.priceDisplay ? (
            <div className="sticky-mobile-price">
              <span className="price-tag">{workshopData.priceDisplay}</span>
              <span className="price-label">Workshop Pass</span>
            </div>
          ) : null}
          <button
            type="button"
            className="sticky-mobile-btn"
            onClick={handleOpenRegistration}
            style={{ width: workshopData.priceDisplay ? 'auto' : '100%', maxWidth: workshopData.priceDisplay ? '220px' : '100%' }}
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </aside>

      {/* ===================================================================
          13. REGISTRATION MODAL (BASED ON SUPPLIED GOOGLE FORM)
          =================================================================== */}
      <WorkshopRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        workshopTitle={workshopData.title}
        priceDisplay={workshopData.priceDisplay}
      />
    </main>
  );
};

export default WorkshopLandingPage;
