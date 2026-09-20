// // // import React, { useState, useEffect, useRef } from 'react';
// // // import {
// // //   FileText, Layout, Smartphone, Palette,
// // //   Eye, Flame, ChevronLeft, ChevronRight
// // // } from 'lucide-react';
// // // import "../style/Landing.css";

// // // const ModernLandingPage = () => {
// // //   const [activeTab, setActiveTab] = useState("mission");
// // //   const [activeCard, setActiveCard] = useState('storytelling');
// // //   const [typedText, setTypedText] = useState('');
// // //   const [scrollY, setScrollY] = useState(0);
// // //   const scrollContainerRef = useRef(null);
// // //   const fullText = "India's effective learning platform";

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrollY(window.scrollY);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   useEffect(() => {
// // //     let index = 0;
// // //     let typing = true;
// // //     const interval = setInterval(() => {
// // //       if (typing) {
// // //         if (index <= fullText.length) {
// // //           setTypedText(fullText.slice(0, index));
// // //           index++;
// // //         } else {
// // //           typing = false;
// // //           setTimeout(() => {
// // //             typing = true;
// // //             index = 0;
// // //           }, 2000);
// // //         }
// // //       }
// // //     }, 100);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   const scrollVideos = (direction) => {
// // //     if (scrollContainerRef.current) {
// // //       const scrollAmount = direction === 'left' ? -400 : 400;
// // //       scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// // //     }
// // //   };

// // //   return (
// // //     <div className="modern-landing">
// // //       <section className="hero-section">
// // //         <video autoPlay loop muted playsInline className="hero-video">
// // //           <source src="/videoMC.mp4" type="video/mp4" />
// // //         </video>
// // //         <div className="hero-overlay" />
// // //         <div className="hero-content-transparent">
// // //           <h1 className="hero-title">
// // //             {typedText}
// // //             <span className="cursor">|</span>
// // //           </h1>
// // //           <p className="hero-subtitle">
// // //             "Striving to create an ecosystem of limitless possibilities"
// // //           </p>
// // //           <p className="hero-description">
// // //             We are here to cater the talent development need's of the generations to come in
// // //             By complementing the mainstream education and thereby upskill human capital to aid the inclusive growth of any society.
// // //           </p>
// // //         </div>
// // //       </section>

// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   FileText, Layout, Smartphone, Palette,
// //   Eye, Flame, ChevronLeft, ChevronRight, ArrowRight
// // } from 'lucide-react';
// // import "../style/Landing.css";

// // const ModernLandingPage = () => {
// //   const [activeTab, setActiveTab] = useState("mission");
// //   const [activeCard, setActiveCard] = useState('storytelling');
// //   const [typedText, setTypedText] = useState('');
// //   const [scrollY, setScrollY] = useState(0);
// //   const scrollContainerRef = useRef(null);
// //   const fullText = "India's effective learning platform";

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrollY(window.scrollY);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     let index = 0;
// //     let typing = true;
// //     const interval = setInterval(() => {
// //       if (typing) {
// //         if (index <= fullText.length) {
// //           setTypedText(fullText.slice(0, index));
// //           index++;
// //         } else {
// //           typing = false;
// //           setTimeout(() => {
// //             typing = true;
// //             index = 0;
// //           }, 2000);
// //         }
// //       }
// //     }, 100);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const scrollVideos = (direction) => {
// //     if (scrollContainerRef.current) {
// //       const scrollAmount = direction === 'left' ? -400 : 400;
// //       scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <div className="modern-landing">
// //       <section className="hero-section">
// //         <video autoPlay loop muted playsInline className="hero-video">
// //           <source src="/videoMC.mp4" type="video/mp4" />
// //         </video>
// //         <div className="hero-overlay" />
// //         <div className="hero-content-transparent">
// //           <h1 className="hero-title">
// //             {typedText}
// //             <span className="cursor">|</span>
// //           </h1>
// //           <p className="hero-subtitle hero-journey">
// //             <span>Learn</span>
// //             <ArrowRight size={22} className="arrow-animate" />
// //             <span>Develop</span>
// //             <ArrowRight size={22} className="arrow-animate" />
// //             <span>Grow</span>
// //           </p>
// //           <p className="hero-description">
// //             We are here to cater the talent development need's of the generations to come in
// //             By complementing the mainstream education and thereby upskill human capital to aid the inclusive growth of any society.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="about-overlap-section">
// //         <div className="about-container">
// //           <div className="about-card">
// //             <div className="about-header">
// //               <h2 className="about-title">
// //                 About <span className="text-gradient">MentorCrew</span>
// //               </h2>
// //             </div>
// //             <p className="about-text">
// //               MentorCrew envisions what India envisions for its current and future workforce - Addressing the Employability Gap and building a qualified and sustainable workforce to meet global demands. MentorCrew endeavors to contribute to this collective vision with its refreshing ideas, proven and improved pedagogical practices and championing innovative and practical approaches to skill development. We at MentorCrew strongly believe that scalability and agility in our solutions can receive a positive stimulus effect by building and leveraging IT tools and digital platforms.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="mission-section-modern">
// //         <div className="section-container">
// //           <div className="mission-grid">
// //             <div className="mission-content-side">
// //               <div
// //                 className={`mission-card ${activeTab === 'mission' ? 'active' : ''}`}
// //                 onClick={() => setActiveTab('mission')}
// //               >
// //                 <div className="card-header">
// //                   <div className="card-icon-wrapper">
// //                     <Flame size={24} />
// //                   </div>
// //                   <h3 className="card-title">Mission</h3>
// //                 </div>
// //                 <p className="card-description">
// //                   A dynamic, vibrant, value-based organization that is committed to deliver learning and counsel of the highest excellence to prepare students and professionals for career readiness and successfully leverage entrepreneurial avenues/opportunities. MentorCrew is astute in spotting lacunae and opportunity in addressing the skill gaps and promoting continuous learning & development for workforce and businesses alike, now and for the future.
// //                 </p>
// //               </div>

// //               <div
// //                 className={`mission-card ${activeTab === 'vision' ? 'active' : ''}`}
// //                 onClick={() => setActiveTab('vision')}
// //               >
// //                 <div className="card-header">
// //                   <div className="card-icon-wrapper">
// //                     <Eye size={24} />
// //                   </div>
// //                   <h3 className="card-title">Vision</h3>
// //                 </div>
// //                 <p className="card-description">
// //                   Educate, Empower and Inspire to build a truly transformational, self-sufficient and valuable Human capital and thereby achieve holistic and equitable socio-economic development.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="mission-video-side">
// //               <video
// //                 key={activeTab}
// //                 // src={activeTab === 'mission' ? '/mission.mp4' : '/vision.mp4'}
// //                 src="/mission.mp4"
// //                 autoPlay
// //                 loop
// //                 muted
// //                 className="mission-video"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="pace-section">
// //         <div className="section-container">
// //           <h2 className="section-title">
// //             Why Choose <span className="text-gradient">MentorCrew?</span>
// //           </h2>
// //           <p className="section-subtitle">
// //             We promise <strong>PACE</strong> in our trainings - Experience excellence through our comprehensive training methodology
// //           </p>

// //           <div className="pace-grid">
// //             {[
// //               {
// //                 letter: 'P',
// //                 video: '/letter-p.mp4',
// //                 title: 'Personalized Focus',
// //                 desc: 'Tailored learning paths designed specifically for your unique career goals and learning style',
// //                 gradient: 'linear-gradient(135deg, #2196F3, #00BCD4)'
// //               },
// //               {
// //                 letter: 'A',
// //                 video: '/letter-a.mp4',
// //                 title: 'Applied Learning',
// //                 desc: 'Hands-on practical experience with real-world projects and industry-relevant case studies',
// //                 gradient: 'linear-gradient(135deg, #3F51B5, #2196F3)'
// //               },
// //               {
// //                 letter: 'C',
// //                 video: '/letter-c.mp4',
// //                 title: 'Career Assistance',
// //                 desc: 'Comprehensive support including resume building, interview preparation, and job placement',
// //                 gradient: 'linear-gradient(135deg, #9C27B0, #3F51B5)'
// //               },
// //               {
// //                 letter: 'E',
// //                 video: '/letter-e.mp4',
// //                 title: 'Extended Query Assistance',
// //                 desc: 'Continuous mentorship and support even after course completion for long-term success',
// //                 gradient: 'linear-gradient(135deg, #E91E63, #9C27B0)'
// //               }
// //             ].map((item, i) => (
// //               <div key={i} className="pace-card">
// //                 <div className="pace-icon" style={{ background: item.gradient }}>
// //                   <video
// //                     src={item.video}
// //                     autoPlay
// //                     loop
// //                     muted
// //                     playsInline
// //                     style={{ width: "80px", height: "80px", borderRadius: "50%" }}
// //                   />
// //                 </div>
// //                 <h3 className="pace-card-title">{item.title}</h3>
// //                 <p className="pace-card-desc">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       <section className="love-section">
// //         <h2 className="love-title">
// //           Why we{" "}
// //           <span
// //             style={{
// //               background: "linear-gradient(135deg, #2196F3, #3F51B5)",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               display: "inline-block"
// //             }}
// //           >
// //             love
// //           </span>{" "}
// //           what we do
// //         </h2>

// //         <div className="video-scroll-container">
// //           <div className="video-scroll-wrapper">
// //             <button className="scroll-btn left" onClick={() => scrollVideos('left')}>
// //               <ChevronLeft size={24} color="#2196F3" />
// //             </button>

// //             <div className="video-scroll" ref={scrollContainerRef}>
// //               <div className="video-item">
// //                 <iframe
// //                   src="https://www.youtube.com/embed/iG6jNMQVZn4?mute=1&loop=1&playlist=iG6jNMQVZn4&controls=1&showinfo=0&rel=0&modestbranding=1&start=6"
// //                   title="Video 1"
// //                   frameBorder="0"
// //                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                   allowFullScreen
// //                   className="video-iframe"
// //                 />
// //               </div>
// //               <div className="video-item">
// //                 <iframe
// //                   src="https://www.youtube.com/embed/fpjq7rZ9N0M?controls=1&showinfo=0&rel=0&modestbranding=1"
// //                   title="Video 2"
// //                   frameBorder="0"
// //                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                   allowFullScreen
// //                   className="video-iframe"
// //                 />
// //               </div>
// //               <div className="video-item">
// //                 <iframe
// //                   src="https://www.youtube.com/embed/iG6jNMQVZn4?mute=1&loop=1&playlist=iG6jNMQVZn4&controls=1&showinfo=0&rel=0&modestbranding=1"
// //                   title="Video 3"
// //                   frameBorder="0"
// //                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                   allowFullScreen
// //                   className="video-iframe"
// //                 />
// //               </div>
// //             </div>

// //             <button className="scroll-btn right" onClick={() => scrollVideos('right')}>
// //               <ChevronRight size={24} color="#2196F3" />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="cards-grid-wrapper">
// //           <div className="cards-grid animated-scroll">
// //             {[
// //               { id: 'storytelling', icon: FileText, title: 'Storytelling', desc: 'Memorable stories of your success & work that customers would remember and narrate.' },
// //               { id: 'content', icon: Layout, title: 'Content', desc: 'Relevant, appropriate & contextual content for effective communication.' },
// //               { id: 'technology', icon: Smartphone, title: 'Technology', desc: 'Innovative technical solutions that enhance your digital presence and user experience.' },
// //               { id: 'creativity', icon: Palette, title: 'Creativity', desc: 'Unique and imaginative approaches that help your brand stand out in a crowded marketplace.' }
// //             ].map(card => (
// //               <div
// //                 key={card.id}
// //                 onClick={() => setActiveCard(card.id)}
// //                 className={`feature-card ${activeCard === card.id ? 'active' : ''}`}
// //               >
// //                 <div className="card-content">
// //                   <div className="card-icon">
// //                     <card.icon size={28} />
// //                   </div>
// //                   <div className="card-text">
// //                     <h3 className="feature-card-title">{card.title}</h3>
// //                     <p className="card-desc">{card.desc}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //             {/* Duplicate cards for seamless loop */}
// //             {[
// //               { id: 'storytelling-2', icon: FileText, title: 'Storytelling', desc: 'Memorable stories of your success & work that customers would remember and narrate.' },
// //               { id: 'content-2', icon: Layout, title: 'Content', desc: 'Relevant, appropriate & contextual content for effective communication.' },
// //               { id: 'technology-2', icon: Smartphone, title: 'Technology', desc: 'Innovative technical solutions that enhance your digital presence and user experience.' },
// //               { id: 'creativity-2', icon: Palette, title: 'Creativity', desc: 'Unique and imaginative approaches that help your brand stand out in a crowded marketplace.' }
// //             ].map(card => (
// //               <div
// //                 key={card.id}
// //                 onClick={() => setActiveCard(card.id.replace('-2', ''))}
// //                 className={`feature-card ${activeCard === card.id.replace('-2', '') ? 'active' : ''}`}
// //               >
// //                 <div className="card-content">
// //                   <div className="card-icon">
// //                     <card.icon size={28} />
// //                   </div>
// //                   <div className="card-text">
// //                     <h3 className="feature-card-title">{card.title}</h3>
// //                     <p className="card-desc">{card.desc}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ModernLandingPage;


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   FileText, Layout, Smartphone, Palette,
//   Eye, Flame, ChevronLeft, ChevronRight, ArrowRight
// } from 'lucide-react';
// import "../style/Landing.css";

// const stages = [
//   { label: 'Learn', overlay: 'linear-gradient(135deg, rgba(33,150,243,0.55), rgba(0,0,0,0.35))' },
//   { label: 'Develop', overlay: 'linear-gradient(135deg, rgba(156,39,176,0.55), rgba(0,0,0,0.35))' },
//   { label: 'Grow', overlay: 'linear-gradient(135deg, rgba(0,188,140,0.55), rgba(0,0,0,0.35))' },
// ];

// const ModernLandingPage = () => {
//   const [activeTab, setActiveTab] = useState("mission");
//   const [activeCard, setActiveCard] = useState('storytelling');
//   const [scrollY, setScrollY] = useState(0);
//   const [activeStage, setActiveStage] = useState(0);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Cycle Learn -> Develop -> Grow, syncing the highlighted word with the background tint
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStage((prev) => (prev + 1) % stages.length);
//     }, 2200);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollVideos = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = direction === 'left' ? -400 : 400;
//       scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="modern-landing">
//       <section className="hero-section">
//         <video autoPlay loop muted playsInline className="hero-video">
//           <source src="/videoMC.mp4" type="video/mp4" />
//         </video>
//         <div
//           className="hero-overlay"
//           // style={{ background: stages[activeStage].overlay }}
//         />
//         <div className="hero-content-transparent">
//           <h1 className="hero-journey">
//             {stages.map((stage, i) => (
//               <React.Fragment key={stage.label}>
//                 <span className={activeStage === i ? 'active' : ''}>
//                   {stage.label}
//                 </span>
//                 {i < stages.length - 1 && (
//                   <ArrowRight
//                     size={28}
//                     className={`arrow-animate ${activeStage === i ? 'active' : ''}`}
//                   />
//                 )}
//               </React.Fragment>
//             ))}
//           </h1>
//           <p className="hero-description">
//             We are here to cater the talent development need's of the generations to come in
//             By complementing the mainstream education and thereby upskill human capital to aid the inclusive growth of any society.
//           </p>
//         </div>
//       </section>

//       <section className="about-overlap-section">
//         <div className="about-container">
//           <div className="about-card">
//             <div className="about-header">
//               <h2 className="about-title">
//                 About <span className="text-gradient">MentorCrew</span>
//               </h2>
//             </div>
//             <p className="about-text">
//               MentorCrew envisions what India envisions for its current and future workforce - Addressing the Employability Gap and building a qualified and sustainable workforce to meet global demands. MentorCrew endeavors to contribute to this collective vision with its refreshing ideas, proven and improved pedagogical practices and championing innovative and practical approaches to skill development. We at MentorCrew strongly believe that scalability and agility in our solutions can receive a positive stimulus effect by building and leveraging IT tools and digital platforms.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mission-section-modern">
//         <div className="section-container">
//           <div className="mission-grid">
//             <div className="mission-content-side">
//               <div
//                 className={`mission-card ${activeTab === 'mission' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('mission')}
//               >
//                 <div className="card-header">
//                   <div className="card-icon-wrapper">
//                     <Flame size={24} />
//                   </div>
//                   <h3 className="card-title">Mission</h3>
//                 </div>
//                 <p className="card-description">
//                   A dynamic, vibrant, value-based organization that is committed to deliver learning and counsel of the highest excellence to prepare students and professionals for career readiness and successfully leverage entrepreneurial avenues/opportunities. MentorCrew is astute in spotting lacunae and opportunity in addressing the skill gaps and promoting continuous learning & development for workforce and businesses alike, now and for the future.
//                 </p>
//               </div>

//               <div
//                 className={`mission-card ${activeTab === 'vision' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('vision')}
//               >
//                 <div className="card-header">
//                   <div className="card-icon-wrapper">
//                     <Eye size={24} />
//                   </div>
//                   <h3 className="card-title">Vision</h3>
//                 </div>
//                 <p className="card-description">
//                   Educate, Empower and Inspire to build a truly transformational, self-sufficient and valuable Human capital and thereby achieve holistic and equitable socio-economic development.
//                 </p>
//               </div>
//             </div>

//             <div className="mission-video-side">
//               <video
//                 key={activeTab}
//                 // src={activeTab === 'mission' ? '/mission.mp4' : '/vision.mp4'}
//                 src="/mission.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 className="mission-video"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="pace-section">
//         <div className="section-container">
//           <h2 className="section-title">
//             Why Choose <span className="text-gradient">MentorCrew?</span>
//           </h2>
//           <p className="section-subtitle">
//             We promise <strong>PACE</strong> in our trainings - Experience excellence through our comprehensive training methodology
//           </p>

//           <div className="pace-grid">
//             {[
//               {
//                 letter: 'P',
//                 video: '/letter-p.mp4',
//                 title: 'Personalized Focus',
//                 desc: 'Tailored learning paths designed specifically for your unique career goals and learning style',
//                 gradient: 'linear-gradient(135deg, #2196F3, #00BCD4)'
//               },
//               {
//                 letter: 'A',
//                 video: '/letter-a.mp4',
//                 title: 'Applied Learning',
//                 desc: 'Hands-on practical experience with real-world projects and industry-relevant case studies',
//                 gradient: 'linear-gradient(135deg, #3F51B5, #2196F3)'
//               },
//               {
//                 letter: 'C',
//                 video: '/letter-c.mp4',
//                 title: 'Career Assistance',
//                 desc: 'Comprehensive support including resume building, interview preparation, and job placement',
//                 gradient: 'linear-gradient(135deg, #9C27B0, #3F51B5)'
//               },
//               {
//                 letter: 'E',
//                 video: '/letter-e.mp4',
//                 title: 'Extended Query Assistance',
//                 desc: 'Continuous mentorship and support even after course completion for long-term success',
//                 gradient: 'linear-gradient(135deg, #E91E63, #9C27B0)'
//               }
//             ].map((item, i) => (
//               <div key={i} className="pace-card">
//                 <div className="pace-icon" style={{ background: item.gradient }}>
//                   <video
//                     src={item.video}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     style={{ width: "80px", height: "80px", borderRadius: "50%" }}
//                   />
//                 </div>
//                 <h3 className="pace-card-title">{item.title}</h3>
//                 <p className="pace-card-desc">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <section className="love-section">
//         <h2 className="love-title">
//           Why we{" "}
//           <span
//             style={{
//               background: "linear-gradient(135deg, #2196F3, #3F51B5)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               display: "inline-block"
//             }}
//           >
//             love
//           </span>{" "}
//           what we do
//         </h2>

//         <div className="video-scroll-container">
//           <div className="video-scroll-wrapper">
//             <button className="scroll-btn left" onClick={() => scrollVideos('left')}>
//               <ChevronLeft size={24} color="#2196F3" />
//             </button>

//             <div className="video-scroll" ref={scrollContainerRef}>
//               <div className="video-item">
//                 <iframe
//                   src="https://www.youtube.com/embed/iG6jNMQVZn4?mute=1&loop=1&playlist=iG6jNMQVZn4&controls=1&showinfo=0&rel=0&modestbranding=1&start=6"
//                   title="Video 1"
//                   frameBorder="0"
//                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="video-iframe"
//                 />
//               </div>
//               <div className="video-item">
//                 <iframe
//                   src="https://www.youtube.com/embed/fpjq7rZ9N0M?controls=1&showinfo=0&rel=0&modestbranding=1"
//                   title="Video 2"
//                   frameBorder="0"
//                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="video-iframe"
//                 />
//               </div>
//               <div className="video-item">
//                 <iframe
//                   src="https://www.youtube.com/embed/iG6jNMQVZn4?mute=1&loop=1&playlist=iG6jNMQVZn4&controls=1&showinfo=0&rel=0&modestbranding=1"
//                   title="Video 3"
//                   frameBorder="0"
//                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="video-iframe"
//                 />
//               </div>
//             </div>

//             <button className="scroll-btn right" onClick={() => scrollVideos('right')}>
//               <ChevronRight size={24} color="#2196F3" />
//             </button>
//           </div>
//         </div>

//         <div className="cards-grid-wrapper">
//           <div className="cards-grid animated-scroll">
//             {[
//               { id: 'storytelling', icon: FileText, title: 'Storytelling', desc: 'Memorable stories of your success & work that customers would remember and narrate.' },
//               { id: 'content', icon: Layout, title: 'Content', desc: 'Relevant, appropriate & contextual content for effective communication.' },
//               { id: 'technology', icon: Smartphone, title: 'Technology', desc: 'Innovative technical solutions that enhance your digital presence and user experience.' },
//               { id: 'creativity', icon: Palette, title: 'Creativity', desc: 'Unique and imaginative approaches that help your brand stand out in a crowded marketplace.' }
//             ].map(card => (
//               <div
//                 key={card.id}
//                 onClick={() => setActiveCard(card.id)}
//                 className={`feature-card ${activeCard === card.id ? 'active' : ''}`}
//               >
//                 <div className="card-content">
//                   <div className="card-icon">
//                     <card.icon size={28} />
//                   </div>
//                   <div className="card-text">
//                     <h3 className="feature-card-title">{card.title}</h3>
//                     <p className="card-desc">{card.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {/* Duplicate cards for seamless loop */}
//             {[
//               { id: 'storytelling-2', icon: FileText, title: 'Storytelling', desc: 'Memorable stories of your success & work that customers would remember and narrate.' },
//               { id: 'content-2', icon: Layout, title: 'Content', desc: 'Relevant, appropriate & contextual content for effective communication.' },
//               { id: 'technology-2', icon: Smartphone, title: 'Technology', desc: 'Innovative technical solutions that enhance your digital presence and user experience.' },
//               { id: 'creativity-2', icon: Palette, title: 'Creativity', desc: 'Unique and imaginative approaches that help your brand stand out in a crowded marketplace.' }
//             ].map(card => (
//               <div
//                 key={card.id}
//                 onClick={() => setActiveCard(card.id.replace('-2', ''))}
//                 className={`feature-card ${activeCard === card.id.replace('-2', '') ? 'active' : ''}`}
//               >
//                 <div className="card-content">
//                   <div className="card-icon">
//                     <card.icon size={28} />
//                   </div>
//                   <div className="card-text">
//                     <h3 className="feature-card-title">{card.title}</h3>
//                     <p className="card-desc">{card.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ModernLandingPage;


import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FileText, Layout, Smartphone, Palette,
  Eye, Flame, ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';
import "../style/Landing.css";
import CountUp from './CountUp';

// Replace these values with verified MentorCrew statistics.
const sessions = 10;
const STUDENTS_ENROLLED = 500;
const STUDENTS_PLACED = 5;

const stats = [
  {
    value: 5,
    suffix: '+',
    label: 'Years of Experience'
  },
  {
    value: sessions,
    suffix: '+',
    label: 'Sessions Conducted'
  },
  {
    value: STUDENTS_ENROLLED,
    suffix: '+',
    label: 'Students Enrolled'
  },
  {
    value: STUDENTS_PLACED,
    suffix: '+',
    label: 'Students Placed'
  }
];

const stages = [
  { label: 'Learn', overlay: 'linear-gradient(135deg, rgba(33,150,243,0.55), rgba(0,0,0,0.35))' },
  { label: 'Develop', overlay: 'linear-gradient(135deg, rgba(156,39,176,0.55), rgba(0,0,0,0.35))' },
  { label: 'Grow', overlay: 'linear-gradient(135deg, rgba(0,188,140,0.55), rgba(0,0,0,0.35))' },
];

const testimonialVideos = [
  {
    id: 'mc-video-1',
    src: 'https://www.youtube.com/embed/iG6jNMQVZn4?mute=1&loop=1&playlist=iG6jNMQVZn4&controls=1&showinfo=0&rel=0&modestbranding=1&start=6',
    title: 'Video 1',
  },
  {
    id: 'mc-video-2',
    src: 'https://www.youtube.com/embed/fpjq7rZ9N0M?controls=1&showinfo=0&rel=0&modestbranding=1',
    title: 'Video 2',
  },
  {
    id: 'mc-video-3',
    src: 'https://www.youtube.com/embed/PQ03xR_Hvlk?mute=1&loop=1&playlist=PQ03xR_Hvlk&controls=1&showinfo=0&rel=0&modestbranding=1&start=6',
    title: 'Video 3',
  },
];

const ModernLandingPage = ({ entranceStage = 'completed', onVideoStarted }) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeCard, setActiveCard] = useState('storytelling');
  const [scrollY, setScrollY] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);
  const journeyContainerRef = useRef(null);
  const stageRefs = useRef([]);
  const [gliderStyle, setGliderStyle] = useState({ transform: 'translateX(0px)', width: 0, opacity: 0 });
  const [activeStoryPart, setActiveStoryPart] = useState('about');
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const orbRef = useRef(null);
  const visionRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(true);
  const [missionVisible, setMissionVisible] = useState(true);
  const [orbVisible, setOrbVisible] = useState(true);
  const [visionVisible, setVisionVisible] = useState(true);

  // Why Choose MentorCrew? (PACE) section reveal state & ref
  const paceRef = useRef(null);
  const [paceVisible, setPaceVisible] = useState(true);

  // Statistics / Impact section reveal state & ref
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Why We Love What We Do Video Testimonial Carousel state & refs (safe visible default)
  const loveSectionRef = useRef(null);
  const [loveSectionVisible, setLoveSectionVisible] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);

  const updateGlider = useCallback(() => {
    const container = journeyContainerRef.current;
    const currentSpan = stageRefs.current[activeStage];
    if (!container || !currentSpan) return;

    const containerRect = container.getBoundingClientRect();
    const spanRect = currentSpan.getBoundingClientRect();
    const left = spanRect.left - containerRect.left;
    const width = spanRect.width;

    setGliderStyle({
      transform: `translateX(${left}px)`,
      width: `${width}px`,
      opacity: 1,
    });
  }, [activeStage]);

  useEffect(() => {
    updateGlider();
    const timer = setTimeout(updateGlider, 100);
    window.addEventListener('resize', updateGlider);
    if (document.fonts?.ready) {
      document.fonts.ready.then(updateGlider).catch(() => {});
    }
    return () => {
      window.removeEventListener('resize', updateGlider);
      clearTimeout(timer);
    };
  }, [updateGlider]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize Learn -> Develop -> Grow with actual video playback position
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handleTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!duration || duration <= 0) return;

      // 3 stages: 0 (Learn), 1 (Develop), 2 (Grow)
      const progress = currentTime / duration;
      const newStage = progress >= 0.67 ? 2 : progress >= 0.33 ? 1 : 0;

      setActiveStage((prev) => (prev !== newStage ? newStage : prev));
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // 0.0s: Video MUST start playing immediately without delay or pause!
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Hero video autoplay was delayed or prevented:", err);
      });
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Synchronize story progression & section entrance animations with scroll (replays on every entry)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const isTargetAbout = entry.target === aboutRef.current;
        const isTargetMission = entry.target === missionRef.current;
        const isTargetOrb = entry.target === orbRef.current;
        const isTargetVision = entry.target === visionRef.current;
        const isTargetPace = entry.target === paceRef.current;
        const isTargetStats = entry.target === statsRef.current;
        const isTargetLove = entry.target === loveSectionRef.current;

        if (entry.isIntersecting) {
          if (isTargetAbout) {
            setAboutVisible(true);
            setActiveStoryPart('about');
          } else if (isTargetMission) {
            setMissionVisible(true);
            setActiveStoryPart('mission');
          } else if (isTargetOrb) {
            setOrbVisible(true);
          } else if (isTargetVision) {
            setVisionVisible(true);
            setActiveStoryPart('vision');
          } else if (isTargetPace) {
            setPaceVisible(true);
          } else if (isTargetStats) {
            setStatsVisible(true);
          } else if (isTargetLove) {
            setLoveSectionVisible(true);
          }
        } else {
          // Keep About, Mission, Vision, and PACE persistently visible once loaded
          if (isTargetStats) {
            setStatsVisible(false);
          } else if (isTargetLove) {
            setLoveSectionVisible(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (orbRef.current) observer.observe(orbRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (paceRef.current) observer.observe(paceRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (loveSectionRef.current) observer.observe(loveSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToStoryPart = (part) => {
    let targetEl = null;
    if (part === 'about') targetEl = aboutRef.current;
    else if (part === 'mission') targetEl = missionRef.current;
    else if (part === 'vision') targetEl = visionRef.current;

    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({ top: rect.top + scrollTop - 100, behavior: 'smooth' });
      setActiveStoryPart(part);
    }
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev === 0 ? testimonialVideos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev === testimonialVideos.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    if (e.changedTouches && e.changedTouches[0]) {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (deltaX > 45) {
        handlePrevVideo();
      } else if (deltaX < -45) {
        handleNextVideo();
      }
    }
    setTouchStartX(null);
  };

  const scrollVideos = (direction) => {
    if (direction === 'left') {
      handlePrevVideo();
    } else {
      handleNextVideo();
    }
  };

  return (
    <div className="modern-landing">
      <section className="hero-section">

  <video
    ref={videoRef}
    src="/videoMC.mp4"
    loop
    muted
    playsInline
    preload="auto"
    className="hero-video"
  >
    <source src="/videoMC.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay" />

  <div className={`hero-content-transparent ${
    entranceStage === 'waiting'
      ? 'hero-entrance-waiting'
      : entranceStage === 'animating'
      ? 'hero-entrance-animating'
      : 'hero-entrance-done'
  }`}>

    {/* Learn → Develop → Grow */}
    <h1 className="hero-journey" ref={journeyContainerRef}>
      <span className="hero-journey-glider" style={gliderStyle} />

      {stages.map((stage, i) => (
        <React.Fragment key={stage.label}>

          <span
            ref={(el) => (stageRefs.current[i] = el)}
            className={`hero-stage-item ${activeStage === i ? 'active' : ''}`}
          >
            {stage.label}
          </span>

          {i < stages.length - 1 && (
            <ArrowRight
              size={28}
              className={`arrow-animate ${
                activeStage === i ? 'active' : ''
              }`}
            />
          )}

        </React.Fragment>
      ))}

    </h1>

    {/* Tagline */}
    <p className="hero-tagline">
      "Striving to create an ecosystem of limitless possibilities"
    </p>

    {/* Description */}
    <p className="hero-description">
      We are here to cater the talent development need's of the
      generations to come in. By complementing the mainstream
      education and thereby upskill human capital to aid the
      inclusive growth of any society.
    </p>

    {/* CTA */}
    <a
      href="#about-mentorcrew"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById('about-mentorcrew') || aboutRef.current;
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="hero-explore-btn"
    >
      <span>Explore Our Solutions</span>
      <ArrowRight size={20} />
    </a>

  </div>

</section>

      {/* MentorCrew Story Section: About, Mission & Vision */}
      <section className="mentorcrew-story-section">
        <div className="story-section-bg-glow" />

        {/* ABOUT MENTORCREW UNIFIED SECTION (CONTENT + WHEEL VIDEO + ARROW IN ONE CONTINUOUS SECTION) */}
        <div className="section-container story-about-wrapper" id="about-mentorcrew">
          <div
            className="story-about-card story-reveal-about is-visible"
            ref={aboutRef}
          >
            {/* About Editorial Introduction */}
            <div className="story-about-header">
              <span className="story-eyebrow">ABOUT MENTORCREW</span>
              <h2 className="story-main-heading">
                Building the workforce <span className="text-gradient">of tomorrow.</span>
              </h2>
            </div>
            <p className="story-about-text">
              MentorCrew envisions what India envisions for its current and future workforce - Addressing the Employability Gap and building a qualified and sustainable workforce to meet global demands. MentorCrew endeavors to contribute to this collective vision with its refreshing ideas, proven and improved pedagogical practices and championing innovative and practical approaches to skill development. We at MentorCrew strongly believe that scalability and agility in our solutions can receive a positive stimulus effect by building and leveraging IT tools and digital platforms.
            </p>

            {/* Visual Row: Wheel Video + Growth Arrow inside the same About Section */}
            <div className="story-ecosystem-grid">
              {/* LEFT: WHEEL VIDEO CARD */}
              <div className="story-ecosystem-card story-ecosystem-wheel-card">
                <video
                  src="/wheel video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="story-wheel-video"
                />
              </div>

              {/* RIGHT: GROWTH ARROW CARD */}
              <div className="story-ecosystem-card story-ecosystem-arrow-card">
                <div className="story-arrow-wrapper">
                  <img
                    src="/arrow.png"
                    alt="Good to Great Growth Arrow - Each arm feeds the next, compounding growth"
                    className="story-ecosystem-img story-ecosystem-arrow-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-COLUMN COMPOSITION: 01 MISSION | CENTRAL LEARNING ORB | 02 VISION */}
        <div className="section-container story-main-trio-container">
          {/* LEFT: 01 MISSION */}
          <div
            className="story-act-card story-act-mission story-reveal-mission is-visible"
            ref={missionRef}
          >
            <div className="story-act-header">
              <span className="story-act-num">01</span>
              <div className="story-act-icon-wrap">
                <Flame size={24} />
              </div>
            </div>
            <h3 className="story-act-title">MISSION</h3>
            <p className="story-act-desc">
              A dynamic, vibrant, value-based organization that is committed to deliver learning and counsel of the highest excellence to prepare students and professionals for career readiness and successfully leverage entrepreneurial avenues/opportunities. MentorCrew is astute in spotting lacunae and opportunity in addressing the skill gaps and promoting continuous learning & development for workforce and businesses alike, now and for the future.
            </p>
          </div>

          {/* CENTER: CENTRAL VISUAL ANCHOR (EXISTING DART VIDEO: /mission.mp4) */}
          <div
            className="story-central-visual-wrap story-reveal-orb is-visible"
            ref={orbRef}
          >
            <div className="story-dart-card">
              <video
                src="/mission.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="story-dart-video"
              />
            </div>

            {/* PREVIOUS SVG BOOK + PLANT VISUAL PRESERVED INTACT (DISABLED) */}
            {false && (
              <>
                <div className="story-central-orb">
                  <div className="story-orb-glow" />

                  {/* Stable Circular Orbit with Travelling Light Particles */}
                  <div className="story-orbit-container">
                    <svg className="story-orbit-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Stable circular orbit track */}
                      <circle cx="120" cy="120" r="108" className="story-orbit-track" />
                      
                      {/* Rotating particle group along the orbit */}
                      <g className="story-orbit-particle-group">
                        <circle cx="120" cy="12" r="3.5" className="story-orbit-particle primary" />
                        <circle cx="120" cy="12" r="7" className="story-orbit-particle-glow" />
                        <circle cx="228" cy="120" r="2.2" className="story-orbit-particle secondary" />
                        <circle cx="12" cy="120" r="2.2" className="story-orbit-particle secondary" />
                      </g>
                    </svg>
                  </div>

                  {/* Core Learning-Growth Scene: Glass Orb, Book, Rising Energy & Growing Plant */}
                  <div className="story-growth-scene">
                    <svg className="story-growth-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        {/* Glass orb backdrop gradient */}
                        <radialGradient id="orbGlassGrad" cx="38%" cy="32%" r="65%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                          <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.70" />
                          <stop offset="75%" stopColor="#bae6fd" stopOpacity="0.40" />
                          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.20" />
                        </radialGradient>

                        {/* Stem gradient */}
                        <linearGradient id="stemGradient" x1="100" y1="160" x2="100" y2="76" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="50%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>

                        {/* Leaf gradients */}
                        <linearGradient id="leafGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#047857" />
                          <stop offset="60%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#6ee7b7" />
                        </linearGradient>

                        <linearGradient id="leafGradRight" x1="100%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#047857" />
                          <stop offset="60%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#6ee7b7" />
                        </linearGradient>

                        {/* Energy beam gradient */}
                        <radialGradient id="energyBeamGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                          <stop offset="50%" stopColor="#0284c7" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                        </radialGradient>

                        {/* Canopy bloom aura */}
                        <radialGradient id="canopyAuraGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#34d399" stopOpacity="0.40" />
                          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.20" />
                          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                        </radialGradient>

                        {/* Book page gradients */}
                        <linearGradient id="bookPageL" x1="100%" y1="0%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#cbd5e1" />
                          <stop offset="25%" stopColor="#f8fafc" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                        <linearGradient id="bookPageR" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#cbd5e1" />
                          <stop offset="25%" stopColor="#f8fafc" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>

                        {/* Particle filter */}
                        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* Inner Glass Orb Base */}
                      <circle cx="100" cy="100" r="86" fill="url(#orbGlassGrad)" className="story-glass-orb-body" />
                      <circle cx="100" cy="100" r="86" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" />

                      {/* Dynamic Glowing Energy Beam rising from book */}
                      <ellipse cx="100" cy="115" rx="18" ry="42" fill="url(#energyBeamGrad)" className="story-energy-beam" />
                      
                      {/* Canopy Glow behind mature foliage */}
                      <circle cx="100" cy="84" r="32" fill="url(#canopyAuraGrad)" className="story-canopy-aura" />

                      {/* GROWING PLANT (EMERGES ORGANICALLY FROM BOOK SEAM AT X:100, Y:156) */}
                      <g className="story-plant-assembly">
                        {/* Natural Living Plant Assembly with subtle living sway */}
                        <g className="plant-living-sway">
                          {/* 1. Main Stem: organic curved path drawing upward from book seam */}
                          <path
                            id="plant-stem"
                            className="plant-part plant-stem"
                            d="M 100 156 C 97 142, 98 120, 101.5 106 C 103 94, 100.5 74, 100 62"
                            pathLength="100"
                            stroke="url(#stemGradient)"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            fill="none"
                          />

                          {/* 2. Seedling Sprout at Book Seam (Phase 1: 0.0s - 1.4s) */}
                          <g id="plant-sprout" className="plant-part plant-sprout">
                            <ellipse cx="100" cy="155" rx="3.5" ry="2" fill="#34d399" />
                            <path d="M 100 155 C 97 152 95 148 97 146 C 99 146 100 150 100 155 Z" fill="url(#leafGradLeft)" />
                            <path d="M 100 155 C 103 152 105 148 103 146 C 101 146 100 150 100 155 Z" fill="url(#leafGradRight)" />
                          </g>

                          {/* 3. Lower-Left Leaf (Phase 3: 2.0s - 3.0s | Attachment: 98.5px, 132px) */}
                          <g id="leaf-lower-left" className="plant-part leaf-lower-left">
                            <path
                              d="M 98.5 132 C 88 125, 74 128, 68 138 C 76 144, 91 141, 98.5 132 Z"
                              fill="url(#leafGradLeft)"
                            />
                            <path d="M 98.5 132 C 88 133, 79 136, 70 138" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="0.75" strokeLinecap="round" />
                          </g>

                          {/* 4. Lower-Right Leaf (Phase 3: 2.0s - 3.0s | Attachment: 99px, 130px) */}
                          <g id="leaf-lower-right" className="plant-part leaf-lower-right">
                            <path
                              d="M 99 130 C 109 123, 123 126, 129 136 C 122 142, 107 139, 99 130 Z"
                              fill="url(#leafGradRight)"
                            />
                            <path d="M 99 130 C 109 131, 118 134, 127 136" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="0.75" strokeLinecap="round" />
                          </g>

                          {/* 5. Middle-Left Leaf (Phase 4: 2.8s - 4.0s | Attachment: 101.5px, 106px) */}
                          <g id="leaf-middle-left" className="plant-part leaf-middle-left">
                            <path
                              d="M 101.5 106 C 89 97, 72 100, 64 111 C 73 118, 91 115, 101.5 106 Z"
                              fill="url(#leafGradLeft)"
                            />
                            <path d="M 101.5 106 C 89 108, 78 111, 66 111" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.8" strokeLinecap="round" />
                          </g>

                          {/* 6. Middle-Right Leaf (Phase 4: 2.8s - 4.0s | Attachment: 101.5px, 104px) */}
                          <g id="leaf-middle-right" className="plant-part leaf-middle-right">
                            <path
                              d="M 101.5 104 C 114 95, 131 98, 139 109 C 130 116, 112 113, 101.5 104 Z"
                              fill="url(#leafGradRight)"
                            />
                            <path d="M 101.5 104 C 114 106, 125 109, 137 109" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.8" strokeLinecap="round" />
                          </g>

                          {/* 7. Upper-Left Leaf (Phase 5: 3.8s - 5.0s | Attachment: 99.5px, 82px) */}
                          <g id="leaf-upper-left" className="plant-part leaf-upper-left">
                            <path
                              d="M 99.5 82 C 89 73, 76 76, 70 85 C 77 91, 91 89, 99.5 82 Z"
                              fill="url(#leafGradLeft)"
                            />
                            <path d="M 99.5 82 C 89 83, 80 85, 72 85" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.75" strokeLinecap="round" />
                          </g>

                          {/* 8. Upper-Right Leaf (Phase 5: 3.8s - 5.0s | Attachment: 99.5px, 80px) */}
                          <g id="leaf-upper-right" className="plant-part leaf-upper-right">
                            <path
                              d="M 99.5 80 C 110 71, 123 74, 129 83 C 121 89, 108 87, 99.5 80 Z"
                              fill="url(#leafGradRight)"
                            />
                            <path d="M 99.5 80 C 110 81, 119 83, 127 83" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.75" strokeLinecap="round" />
                          </g>

                          {/* 9. Top Leaf (Phase 6: 4.8s - 5.8s | Attachment: 100px, 62px) */}
                          <g id="leaf-top" className="plant-part leaf-top">
                            <path
                              d="M 100 62 C 93 51, 94 40, 100 34 C 106 40, 107 51, 100 62 Z"
                              fill="url(#leafGradLeft)"
                            />
                            <line x1="100" y1="62" x2="100" y2="38" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.85" strokeLinecap="round" />
                            <circle cx="100" cy="35" r="1.8" fill="#d1fae5" />
                          </g>
                        </g>
                      </g>

                      {/* OPEN BOOK AT THE BOTTOM (REMAINS STATIONARY & FOUNDATIONAL) */}
                      <g className="story-open-book">
                        {/* Book base / hardcover shadow */}
                        <path
                          d="M 62 168 Q 100 176 138 168 L 135 174 Q 100 181 65 174 Z"
                          fill="#0f294a"
                          opacity="0.85"
                        />
                        
                        {/* Left page block */}
                        <path
                          d="M 100 158 C 86 152 74 154 64 159 L 64 167 C 74 162 86 160 100 166 Z"
                          fill="url(#bookPageL)"
                          stroke="#94a3b8"
                          strokeWidth="0.75"
                        />
                        {/* Right page block */}
                        <path
                          d="M 100 158 C 114 152 126 154 136 159 L 136 167 C 126 162 114 160 100 166 Z"
                          fill="url(#bookPageR)"
                          stroke="#94a3b8"
                          strokeWidth="0.75"
                        />

                        {/* Subtle page texture lines */}
                        <path d="M 70 161 C 78 158 88 158 95 161" stroke="rgba(100, 116, 139, 0.45)" strokeWidth="0.75" />
                        <path d="M 70 164 C 78 161 88 161 95 164" stroke="rgba(100, 116, 139, 0.35)" strokeWidth="0.75" />
                        <path d="M 105 161 C 112 158 122 158 130 161" stroke="rgba(100, 116, 139, 0.45)" strokeWidth="0.75" />
                        <path d="M 105 164 C 112 161 122 161 130 164" stroke="rgba(100, 116, 139, 0.35)" strokeWidth="0.75" />

                        {/* Center Spine & Binding Seam */}
                        <line x1="100" y1="158" x2="100" y2="167" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" />

                        {/* Gentle light source at the book seam */}
                        <ellipse cx="100" cy="158" rx="8" ry="3.5" fill="#38bdf8" opacity="0.65" filter="url(#softGlow)" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Labels in reference positions: LEARN (top), EMPOWER (bottom-left), GROW (bottom-right) */}
                <div className="story-orb-labels-wrap">
                  <span className="story-orb-badge badge-learn">
                    <span className="story-orb-badge-dot dot-learn" />
                    LEARN
                  </span>
                  <span className="story-orb-badge badge-empower">
                    <span className="story-orb-badge-dot dot-empower" />
                    EMPOWER
                  </span>
                  <span className="story-orb-badge badge-grow">
                    <span className="story-orb-badge-dot dot-grow" />
                    GROW
                  </span>
                </div>
              </>
            )}
          </div>

          {/* RIGHT: 02 VISION */}
          <div
            className="story-act-card story-act-vision story-reveal-vision is-visible"
            ref={visionRef}
          >
            <div className="story-act-header">
              <span className="story-act-num">02</span>
              <div className="story-act-icon-wrap">
                <Eye size={24} />
              </div>
            </div>
            <h3 className="story-act-title">VISION</h3>
            <p className="story-act-desc">
              Educate, Empower and Inspire to build a truly transformational, self-sufficient and valuable Human capital and thereby achieve holistic and equitable socio-economic development.
            </p>
          </div>
        </div>
      </section>
      {/* "Why Choose MentorCrew?" (PACE) Section - Temporarily Disabled (Preserved for future restoration) */}
      {/* 
      <section className="pace-section" id="why-choose-mentorcrew" ref={paceRef}>
        <div className="section-container">
          <h2 className={`section-title pace-reveal-title ${paceVisible ? 'is-visible' : ''}`}>
            Why Choose <span className="text-gradient">MentorCrew?</span>
          </h2>
          <p className={`section-subtitle pace-reveal-subtitle ${paceVisible ? 'is-visible' : ''}`}>
            We promise <strong>PACE</strong> in our trainings - Experience excellence through our comprehensive training methodology
          </p>

          <div className="pace-grid">
            {[
              {
                letter: 'P',
                video: '/letter-p.mp4',
                title: 'Personalized Focus',
                desc: 'Tailored learning paths designed specifically for your unique career goals and learning style',
                gradient: 'linear-gradient(135deg, #2196F3, #00BCD4)'
              },
              {
                letter: 'A',
                video: '/letter-a.mp4',
                title: 'Applied Learning',
                desc: 'Hands-on practical experience with real-world projects and industry-relevant case studies',
                gradient: 'linear-gradient(135deg, #3F51B5, #2196F3)'
              },
              {
                letter: 'C',
                video: '/letter-c.mp4',
                title: 'Career Assistance',
                desc: 'Comprehensive support including resume building, interview preparation, and job placement',
                gradient: 'linear-gradient(135deg, #9C27B0, #3F51B5)'
              },
              {
                letter: 'E',
                video: '/letter-e.mp4',
                title: 'Extended Query Assistance',
                desc: 'Continuous mentorship and support even after course completion for long-term success',
                gradient: 'linear-gradient(135deg, #E91E63, #9C27B0)'
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`pace-card pace-reveal-card pace-card-delay-${i} ${
                  paceVisible ? 'is-visible' : ''
                }`}
              >
                <div className="pace-icon" style={{ background: item.gradient }}>
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  />
                </div>
                <h3 className="pace-card-title">{item.title}</h3>
                <p className="pace-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      */}

      {/* Services Section - Temporarily Disabled (Preserved for future restoration) */}
      {/* <TrainingCards /> */}

      {/* Statistics Section: Our Impact */}
      <section className="stats-ribbon-section" ref={statsRef}>
        <div className="section-container">
          <div className={`stats-header stats-reveal-header ${statsVisible ? 'is-visible' : ''}`}>
            <span className="stats-badge">Our Impact</span>
            <h2 className="stats-title">
              Experience. Learning. Opportunity. <span className="text-gradient">Growth.</span>
            </h2>
          </div>

          <div className="stats-ribbons-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-ribbon-card stats-reveal-card stats-card-delay-${index} ${
                  statsVisible ? 'is-visible' : ''
                }`}
              >
                <div className="stat-ribbon-accent" />
                <div className="stat-number-wrapper">
                  <CountUp
                    key={`${stat.label}-${statsVisible}`}
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={2}
                    startWhen={statsVisible}
                    className="stat-number"
                  />
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="love-section" ref={loveSectionRef}>
        <h2 className={`love-title love-reveal-title ${loveSectionVisible ? 'is-visible' : 'is-hidden'}`}>
          Why we{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2196F3, #3F51B5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block"
            }}
          >
            love
          </span>{" "}
          what we do
        </h2>

        <div className={`video-carousel-container love-reveal-carousel ${loveSectionVisible ? 'is-visible' : 'is-hidden'}`}>
          <div
            className="video-carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="video-nav-arrow arrow-left scroll-btn left"
              onClick={handlePrevVideo}
              aria-label="Previous video testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              className={`video-carousel-track active-index-${activeVideoIndex}`}
              ref={scrollContainerRef}
            >
              {testimonialVideos.map((video, index) => {
                const isActive = index === activeVideoIndex;
                return (
                  <div
                    key={video.id}
                    className={`video-card-item ${isActive ? 'active-video' : 'side-video'}`}
                    onClick={() => {
                      if (!isActive) setActiveVideoIndex(index);
                    }}
                  >
                    <div className="video-card-inner">
                      <iframe
                        src={video.src}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-iframe"
                      />
                      {!isActive && (
                        <div
                          className="video-click-guard"
                          title={`Click to focus ${video.title}`}
                          aria-label={`Click to focus ${video.title}`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="video-nav-arrow arrow-right scroll-btn right"
              onClick={handleNextVideo}
              aria-label="Next video testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Minimal Glass Pagination Indicators */}
          <div className="video-carousel-dots" role="tablist" aria-label="Video carousel navigation">
            {testimonialVideos.map((video, index) => (
              <button
                key={`dot-${video.id}`}
                type="button"
                className={`video-carousel-dot ${index === activeVideoIndex ? 'active' : ''}`}
                onClick={() => setActiveVideoIndex(index)}
                aria-label={`Select ${video.title}`}
                role="tab"
                aria-selected={index === activeVideoIndex}
              />
            ))}
          </div>
        </div>

        {/* Storytelling / Content / Technology / Creativity cards - Temporarily Disabled (Preserved for future restoration) */}
        {false && (
          <div className={`cards-grid-wrapper love-reveal-cards ${loveSectionVisible ? 'is-visible' : 'is-hidden'}`}>
            <div className="cards-grid animated-scroll">
              {[
                { id: 'storytelling', icon: FileText, title: 'Storytelling', desc: 'Memorable stories of your success & work that customers would remember and narrate.' },
                { id: 'content', icon: Layout, title: 'Content', desc: 'Relevant, appropriate & contextual content for effective communication.' },
                { id: 'technology', icon: Smartphone, title: 'Technology', desc: 'Innovative technical solutions that enhance your digital presence and user experience.' },
                { id: 'creativity', icon: Palette, title: 'Creativity', desc: 'Unique and imaginative approaches that help your brand stand out in a crowded marketplace.' }
              ].map(card => (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(card.id)}
                  className={`feature-card ${activeCard === card.id ? 'active' : ''}`}
                >
                  <div className="card-content">
                    <div className="card-icon">
                      <card.icon size={28} />
                    </div>
                    <div className="card-text">
                      <h3 className="feature-card-title">{card.title}</h3>
                      <p className="card-desc">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate cards for seamless loop */}
              {[
                { id: 'storytelling-2', icon: FileText, title: 'Storytelling', desc: 'Memorable stories of your success & work that customers would remember and narrate.' },
                { id: 'content-2', icon: Layout, title: 'Content', desc: 'Relevant, appropriate & contextual content for effective communication.' },
                { id: 'technology-2', icon: Smartphone, title: 'Technology', desc: 'Innovative technical solutions that enhance your digital presence and user experience.' },
                { id: 'creativity-2', icon: Palette, title: 'Creativity', desc: 'Unique and imaginative approaches that help your brand stand out in a crowded marketplace.' }
              ].map(card => (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(card.id.replace('-2', ''))}
                  className={`feature-card ${activeCard === card.id.replace('-2', '') ? 'active' : ''}`}
                >
                  <div className="card-content">
                    <div className="card-icon">
                      <card.icon size={28} />
                    </div>
                    <div className="card-text">
                      <h3 className="feature-card-title">{card.title}</h3>
                      <p className="card-desc">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ModernLandingPage;