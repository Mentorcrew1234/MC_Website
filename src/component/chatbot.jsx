import React, { useState, useEffect, useRef } from 'react';
import '../style/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello! 👋 Welcome to MentorCrew! I'm here to help you learn about our courses. How can I assist you today?");
        setTimeout(() => {
          addBotMessage("We offer courses in:\n• Quality Assurance (QA)\n• Cyber Security\n\nWhat would you like to know more about?");
        }, 1000);
      }, 500);
    }
  }, [isOpen]);

  const coursesData = {
    qa: {
      name: "Quality Assurance (QA)",
      description: "Master software testing and quality assurance methodologies",
      topics: [
        "Manual Testing Fundamentals",
        "Automation Testing with Selenium",
        "API Testing",
        "Performance Testing",
        "Test Case Design",
        "Bug Tracking & Reporting",
        "Agile Testing Methodologies",
        "CI/CD Integration"
      ],
      duration: "3-4 months",
      level: "Beginner to Advanced",
      benefits: [
        "Industry-recognized certification",
        "Hands-on projects",
        "Job placement assistance",
        "Live instructor-led sessions"
      ]
    },
    cybersecurity: {
      name: "Cyber Security",
      description: "Learn to protect systems, networks, and data from cyber threats",
      topics: [
        "Network Security Fundamentals",
        "Ethical Hacking",
        "Penetration Testing",
        "Security Operations (SOC)",
        "Incident Response",
        "Cryptography",
        "Web Application Security",
        "Cloud Security"
      ],
      duration: "4-6 months",
      level: "Intermediate to Advanced",
      benefits: [
        "Industry certifications prep (CEH, CompTIA Security+)",
        "Real-world security scenarios",
        "Career guidance",
        "Access to security labs"
      ]
    }
  };

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'bot', timestamp: new Date() }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'user', timestamp: new Date() }]);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();

    if (input.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! 😊 How can I help you today? Would you like to know about our QA or Cyber Security courses?";
    }

    if (input.includes('qa') || input.includes('quality assurance') || input.includes('testing') || input.includes('tester')) {
      const course = coursesData.qa;
      return `📚 ${course.name}\n\n${course.description}\n\nDuration: ${course.duration}\nLevel: ${course.level}\n\nKey Topics:\n${course.topics.slice(0, 4).map(t => `• ${t}`).join('\n')}\n\nBenefits:\n${course.benefits.slice(0, 3).map(b => `✓ ${b}`).join('\n')}\n\nWould you like to know more details or enroll?`;
    }

    if (input.includes('cyber') || input.includes('security') || input.includes('hacking') || input.includes('ethical')) {
      const course = coursesData.cybersecurity;
      return `🔒 ${course.name}\n\n${course.description}\n\nDuration: ${course.duration}\nLevel: ${course.level}\n\nKey Topics:\n${course.topics.slice(0, 4).map(t => `• ${t}`).join('\n')}\n\nBenefits:\n${course.benefits.slice(0, 3).map(b => `✓ ${b}`).join('\n')}\n\nInterested in learning more or enrolling?`;
    }

    if (input.includes('duration') || input.includes('long') || input.includes('time')) {
      return "Our courses have flexible durations:\n\n• QA Course: 3-4 months\n• Cyber Security: 4-6 months\n\nWe offer both weekday and weekend batches to fit your schedule!";
    }

    if (input.includes('price') || input.includes('cost') || input.includes('fee') || input.includes('pay')) {
      return "For course fees and pricing details, please contact our admissions team at:\n\n📧 Email: hello@mentorcrew.co\n📞 Phone: +91 7550066423\n\nWe offer flexible payment plans and early bird discounts!";
    }

    if (input.includes('enroll') || input.includes('join') || input.includes('register') || input.includes('admission')) {
      return "Great! To enroll in our courses:\n\n1. Visit our website\n2. Fill out the application form\n3. Speak with our admissions counselor\n4. Complete the payment\n5. Start your learning journey!\n\nWould you like me to connect you with our admissions team?";
    }

    if (input.includes('prerequisite') || input.includes('requirement') || input.includes('beginner') || input.includes('experience')) {
      return "📋 Prerequisites:\n\nQA Course:\n• Basic computer knowledge\n• No prior testing experience needed\n• Willingness to learn!\n\nCyber Security:\n• Basic networking concepts\n• Computer fundamentals\n• Programming basics (helpful but not mandatory)\n\nBoth courses are designed to take you from basics to advanced!";
    }

    if (input.includes('certificate') || input.includes('certification')) {
      return "🏆 Certifications:\n\nUpon completion, you'll receive:\n✓ Course completion certificate\n✓ Industry-recognized credentials\n✓ Project certificates\n✓ Internship certificate (if applicable)\n\nOur certifications are valued by top companies in the industry!";
    }

    if (input.includes('placement') || input.includes('job') || input.includes('career') || input.includes('work')) {
      return "💼 Career Support:\n\nWe provide:\n✓ Job placement assistance\n✓ Resume building workshops\n✓ Mock interviews\n✓ Industry connections\n✓ Career counseling\n\nMany of our students have successfully transitioned into QA and Cyber Security roles!";
    }

    if (input.includes('difference') || input.includes('compare') || input.includes('which course')) {
      return "🔍 Course Comparison:\n\nQA Course - Best for:\n• Those interested in software testing\n• Detail-oriented individuals\n• Ensuring software quality\n\nCyber Security - Best for:\n• Tech enthusiasts interested in security\n• Problem solvers\n• Protecting digital assets\n\nBoth have excellent career prospects! Which aligns with your interests?";
    }

    if (input.includes('contact') || input.includes('talk') || input.includes('speak') || input.includes('call')) {
      return "📞 Get in Touch:\n\n📧 Email: contact@mentorchew.com\n📱 Phone: +91 XXXXX XXXXX\n🌐 Website: www.mentorchew.com\n📍 Location: [Your Address]\n\nOur team is available Mon-Sat, 9 AM - 6 PM. We'd love to hear from you!";
    }

    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! 😊 Is there anything else you'd like to know about our courses? I'm here to help!";
    }

    if (input.includes('bye') || input.includes('goodbye')) {
      return "Thank you for your interest in MentorChew! Feel free to reach out anytime. Good luck with your learning journey! 👋";
    }

    return "I'd be happy to help! Here are some things you can ask me about:\n\n• QA Course details\n• Cyber Security Course details\n• Course duration and schedule\n• Prerequisites and requirements\n• Certifications\n• Career and placement support\n• How to enroll\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');

    setIsTyping(true);
    setTimeout(() => {
      const response = getBotResponse(userMessage);
      setIsTyping(false);
      addBotMessage(response);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about QA course",
    "Cyber Security course details",
    "How to enroll?",
    "Course fees"
  ];

  const handleQuickReply = (reply) => {
    setInputValue(reply);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chatbot-button">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="chatbot-button-text">Need help?</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                </svg>
              </div>
              <div className="chatbot-header-info">
                <h3>MentorCrew Assistant</h3>
                <p>Online • Always here to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message-wrapper ${message.sender}`}>
                {message.sender === 'bot' && (
                  <div className="message-avatar bot-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                    </svg>
                  </div>
                )}
                <div className={`message-bubble ${message.sender}`}>
                  <p className="message-text">{message.text}</p>
                  <p className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="message-avatar user-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="message-wrapper bot">
                <div className="message-avatar bot-avatar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                  </svg>
                </div>
                <div className="message-bubble bot typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length > 0 && messages.length < 4 && (
            <div className="quick-replies-container">
              <p className="quick-replies-label">Quick replies:</p>
              <div className="quick-replies">
                {quickReplies.map((reply, index) => (
                  <button key={index} onClick={() => handleQuickReply(reply)} className="quick-reply-btn">
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="chatbot-input-container">
            <div className="chatbot-input-wrapper">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="chatbot-input"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className="chatbot-send-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;