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

  const [aboutVisible, setAboutVisible] = useState(false);
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

        {/* ABOUT MENTORCREW OPEN SECTION (FULL WIDTH, 2-COLUMN: STORY ON LEFT + LARGE FLYWHEEL ON RIGHT) */}
        <div className="section-container story-about-wrapper" id="about-mentorcrew">
          <div
            className={`story-about-container story-reveal-about ${aboutVisible ? 'is-visible' : ''}`}
            ref={aboutRef}
          >
            <div className="story-about-split-layout">
              {/* LEFT COLUMN: ABOUT STORY & THREE P's (~45%) */}
              <div className="story-about-content-col">
                <div className="story-about-header">
                  <span className="story-eyebrow">ABOUT MENTORCREW</span>
                  <h2 className="story-main-heading">
                    Building the workforce <span className="text-gradient">of tomorrow.</span>
                  </h2>
                </div>
                <p className="story-about-text">
                  MentorCrew envisions what India envisions for its current and future workforce - Addressing the Employability Gap and building a qualified and sustainable workforce to meet global demands. MentorCrew endeavors to contribute to this collective vision with its refreshing ideas, proven and improved pedagogical practices and championing innovative and practical approaches to skill development. We at MentorCrew strongly believe that scalability and agility in our solutions can receive a positive stimulus effect by building and leveraging IT tools and digital platforms.
                </p>
                 {/* Visual transition arrow pointing to the next section */}
            <div className="story-arrow-transition-wrap">
              <div className="story-arrow-transition-float">
                <img
                  src="/arrow.png"
                  alt="Visual transition to next section"
                  className="story-transition-arrow-img"
                  loading="lazy"
                />
              </div>
            </div>

                {/* People / Purpose / Progress Row */}
                <div className={`story-three-p-row ${aboutVisible ? 'is-visible' : ''}`}>
                  <div className="story-three-p-item">
                    <span className="story-three-p-label"></span>
                    <span className="story-three-p-title">
                      
                      <br />
                    
                    </span>
                  </div>
                  <div className="story-three-p-item">
                    <span className="story-three-p-label"></span>
                    <span className="story-three-p-title">
                      
                      <br />
                      
                    </span>
                  </div>
                  <div className="story-three-p-item">
                    <span className="story-three-p-label"></span>
                    <span className="story-three-p-title">
                   
                      <br />
                     
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: LARGE DOMINANT FLYWHEEL VISUAL (~55%) */}
              <div className="story-about-visual-col">
                <div className="story-flywheel-hero-wrap">
                  <div className="story-flywheel-graphic-container">
                    <video
                      src="/perfect_flywheel.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="story-flywheel-img-hero"
                      aria-label="MentorCrew Ecosystem Flywheel - Learning & Development, Staffing, Products HR & L&D"
                    />
                  </div>
                </div>
              </div>
            </div>

           

            {/* Preserved underlying video, base wheel, and arrow assets in codebase */}
            <div className="story-arrow-preserved-asset" style={{ display: 'none' }} aria-hidden="true">
              <video src="/perfect_flywheel.mp4" muted playsInline />
              <img src="/wheel.png" alt="Flywheel Reference" />
              <img src="/arrow.png" alt="Growth Arrow" />
            </div>
          </div>
        </div>

        {/* MISSION & VISION SECTION: LARGE CINEMATIC VIDEO (LEFT) + EDITORIAL MISSION & VISION (RIGHT) */}
        <div className="section-container story-main-trio-container">
          {/* LEFT: LARGE CINEMATIC VIDEO (~54%) */}
          <div
            className="story-mv-video-col story-reveal-orb is-visible"
            ref={orbRef}
          >
            <div className="story-mv-video-card">
              <video
                src="/mission.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="story-mv-video"
                aria-label="MentorCrew Mission Video"
              />
            </div>
          </div>

          {/* RIGHT: EDITORIAL MISSION + VISION CONTENT (~46%) */}
          <div className="story-mv-content-col">
            {/* MISSION */}
            <div
              className="story-editorial-block story-reveal-mission is-visible"
              ref={missionRef}
            >
              <div className="story-editorial-header">
                <div className="story-act-icon-wrap">
                  <Flame size={20} />
                </div>
                <h3 className="story-editorial-title">MISSION</h3>
              </div>
              <div className="story-editorial-divider" />
              <p className="story-editorial-desc">
                A dynamic, vibrant, value-based organization that is committed to deliver learning and counsel of the highest excellence to prepare students and professionals for career readiness and successfully leverage entrepreneurial avenues/opportunities. MentorCrew is astute in spotting lacunae and opportunity in addressing the skill gaps and promoting continuous learning & development for workforce and businesses alike, now and for the future.
              </p>
            </div>

            {/* VISION */}
            <div
              className="story-editorial-block story-reveal-vision is-visible"
              ref={visionRef}
            >
              <div className="story-editorial-header">
                <div className="story-act-icon-wrap">
                  <Eye size={20} />
                </div>
                <h3 className="story-editorial-title">VISION</h3>
              </div>
              <div className="story-editorial-divider" />
              <p className="story-editorial-desc">
                Educate, Empower and Inspire to build a truly transformational, self-sufficient and valuable Human capital and thereby achieve holistic and equitable socio-economic development.
              </p>
            </div>
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