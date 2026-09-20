// // // import React, { useState, useEffect } from 'react';
// // // import { Menu, X } from 'lucide-react';

// // // const Header = ({ onNavigate }) => {
// // //   const [visible, setVisible] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 50);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const handleNavigate = (path) => {
// // //     if (onNavigate) {
// // //       onNavigate(path);
// // //     }
// // //     setVisible(false);
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         .modern-header {
// // //           position: fixed;
// // //           top: 0;
// // //           width: 100%;
// // //           z-index: 50;
// // //           transition: all 0.5s ease;
// // //           background: transparent;
// // //         }

// // //         .modern-header.scrolled {
// // //           background: rgba(255, 255, 255, 0.8);
// // //           backdrop-filter: blur(20px);
// // //           box-shadow: 0 4px 20px rgba(33, 150, 243, 0.05);
// // //         }

// // //         .header-container {
// // //           max-width: 1280px;
// // //           margin: 0 auto;
// // //           padding: 1rem 1.5rem;
// // //         }

// // //         .header-content {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //         }

// // //         .logo-section {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 0.75rem;
// // //           cursor: pointer;
// // //           transition: transform 0.3s ease;
// // //         }

// // //         .logo-section:hover {
// // //           transform: scale(1.05);
// // //         }

// // //         .logo-img {
// // //           height: 80px;
// // //           width: auto;
// // //         }

// // //         .menu-btn {
// // //           padding: 0.75rem;
// // //           border-radius: 1rem;
// // //           background: linear-gradient(135deg, #2196F3 0%, #3F51B5 100%);
// // //           color: white;
// // //           border: none;
// // //           cursor: pointer;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           transition: all 0.3s ease;
// // //           box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
// // //         }

// // //         .menu-btn:hover {
// // //           transform: scale(1.05);
// // //           box-shadow: 0 6px 20px rgba(33, 150, 243, 0.5);
// // //         }

// // //         .side-drawer {
// // //           position: fixed;
// // //           top: 0;
// // //           right: 0;
// // //           height: 100%;
// // //           width: 320px;
// // //           background: rgba(255, 255, 255, 0.95);
// // //           backdrop-filter: blur(20px);
// // //           box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
// // //           z-index: 100;
// // //           transform: translateX(100%);
// // //           transition: transform 0.5s ease;
// // //         }

// // //         .side-drawer.visible {
// // //           transform: translateX(0);
// // //         }

// // //         .drawer-content {
// // //           padding: 2rem;
// // //           height: 100%;
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .drawer-header {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           margin-bottom: 2rem;
// // //         }

// // //         .drawer-title {
// // //           font-size: 1.5rem;
// // //           font-weight: 700;
// // //           background: linear-gradient(135deg, #2196F3, #3F51B5);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //         }

// // //         .close-btn {
// // //           padding: 0.5rem;
// // //           background: none;
// // //           border: none;
// // //           cursor: pointer;
// // //           border-radius: 0.75rem;
// // //           transition: background 0.3s ease;
// // //         }

// // //         .close-btn:hover {
// // //           background: rgba(0, 0, 0, 0.05);
// // //         }

// // //         .drawer-nav {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 1rem;
// // //           flex: 1;
// // //         }

// // //         .nav-link {
// // //           padding: 1rem 1.5rem;
// // //           border-radius: 1rem;
// // //           background: linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(63, 81, 181, 0.05));
// // //           color: #424242;
// // //           text-decoration: none;
// // //           font-weight: 600;
// // //           transition: all 0.3s ease;
// // //           text-align: center;
// // //           border: none;
// // //           cursor: pointer;
// // //           font-size: 1rem;
// // //         }

// // //         .nav-link:hover {
// // //           background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(63, 81, 181, 0.1));
// // //           transform: scale(1.05);
// // //           box-shadow: 0 4px 15px rgba(33, 150, 243, 0.2);
// // //         }

// // //         .drawer-footer {
// // //           text-align: center;
// // //           color: #757575;
// // //           font-size: 0.875rem;
// // //           margin-top: auto;
// // //         }

// // //         @media (max-width: 768px) {
// // //           .logo-img {
// // //             height: 60px;
// // //           }
// // //         }
// // //       `}</style>

// // //       <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
// // //         <div className="header-container">
// // //           <div className="header-content">
// // //             <div className="logo-section" onClick={() => handleNavigate('/')}>
// // //               <img src="/logoRRR.png" alt="MentorCrew Logo" className="logo-img" />
// // //             </div>
// // //             <button onClick={() => setVisible(!visible)} className="menu-btn">
// // //               {visible ? <X size={24} /> : <Menu size={24} />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <div className={`side-drawer ${visible ? 'visible' : ''}`}>
// // //         <div className="drawer-content">
// // //           <div className="drawer-header">
// // //             <h3 className="drawer-title">Menu</h3>
// // //             <button onClick={() => setVisible(false)} className="close-btn">
// // //               <X size={24} />
// // //             </button>
// // //           </div>
// // //           <nav className="drawer-nav">
// // //             <button onClick={() => handleNavigate('/services')} className="nav-link">
// // //               SERVICES
// // //             </button>
// // //             <button onClick={() => handleNavigate('/products')} className="nav-link">
// // //               PRODUCTS
// // //             </button>
// // //             <button onClick={() => handleNavigate('/login')} className="nav-link">
// // //               LOGIN
// // //             </button>
// // //           </nav>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Header;

// // import React, { useState, useEffect } from 'react';

// // const Header = ({ onNavigate }) => {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleNavigate = (path) => {
// //     if (onNavigate) {
// //       onNavigate(path);
// //     }
// //   };

// //   // External links (L&D, Staffing) open in a new tab
// //   const handleExternalNavigate = (url) => {
// //     window.open(url, '_blank', 'noopener,noreferrer');
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         .modern-header {
// //           position: fixed;
// //           top: 0;
// //           width: 100%;
// //           z-index: 50;
// //           transition: all 0.4s ease;
// //           background: transparent;
// //           backdrop-filter: none;
// //           border-bottom: 1px solid transparent;
// //         }

// //         .modern-header.scrolled {
// //           background: rgba(255, 255, 255, 0.8);
// //           backdrop-filter: blur(20px);
// //           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);
// //         }

// //         .header-container {
// //           max-width: 1280px;
// //           margin: 0 auto;
// //           padding: 0.75rem 1.5rem;
// //         }

// //         .header-content {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           gap: 1.5rem;
// //         }

// //         .logo-section {
// //           display: flex;
// //           align-items: center;
// //           gap: 0.75rem;
// //           cursor: pointer;
// //           transition: transform 0.3s ease;
// //           flex-shrink: 0;
// //         }

// //         .logo-section:hover {
// //           transform: scale(1.04);
// //         }

// //         .logo-img {
// //           width: auto;
// //         }

// //         .header-nav {
// //           display: flex;
// //           align-items: center;
// //           gap: 2.25rem;
// //           opacity: 0;
// //           transform: translateY(-8px);
// //           pointer-events: none;
// //           transition: opacity 0.4s ease, transform 0.4s ease;
// //         }

// //         .header-nav.nav-visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //           pointer-events: auto;
// //         }

// //         .nav-link {
// //           position: relative;
// //           background: none;
// //           border: none;
// //           cursor: pointer;
// //           // color: rgba(255, 255, 255, 0.85);
// //           font-size: 0.8rem;
// //           font-weight: 600;
// //           letter-spacing: 0.12em;
// //           text-transform: uppercase;
// //           padding: 0.5rem 0.1rem;
// //           transition: color 0.25s ease;
// //           white-space: nowrap;
// //         }

// //         .nav-link::after {
// //           content: '';
// //           position: absolute;
// //           left: 0;
// //           bottom: 0;
// //           width: 0%;
// //           height: 2px;
// //           background: linear-gradient(90deg, #2FE0C6, #3F8CFF);
// //           transition: width 0.3s ease;
// //           border-radius: 2px;
// //         }


// //         .nav-link:hover::after {
// //           width: 100%;
// //         }

// //         @media (max-width: 640px) {
// //           .logo-img {
// //             height: 42px;
// //           }

// //           .header-nav {
// //             gap: 1.1rem;
// //           }

// //           .nav-link {
// //             font-size: 0.68rem;
// //             letter-spacing: 0.08em;
// //           }

// //           .header-container {
// //             padding: 0.6rem 1rem;
// //           }
// //         }

// //         @media (max-width: 400px) {
// //           .header-nav {
// //             gap: 0.75rem;
// //           }
// //         }
// //       `}</style>

// //       <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
// //         <div className="header-container">
// //           <div className="header-content">
// //             <div className="logo-section" onClick={() => handleNavigate('/')}>
// //               <img src="/logoRRR.png" alt="MentorCrew Logo" className="logo-img" />
// //             </div>

// //             <nav className={`header-nav ${scrolled ? 'nav-visible' : ''}`}>
// //               <button
// //                 className="nav-link"
// //                 onClick={() =>
// //                   handleExternalNavigate(
// //                     'https://lnd.mentorcrew.co/'
// //                   )
// //                 }
// //               >
// //                 L&D
// //               </button>
// //               <button
// //                 className="nav-link"
// //                 onClick={() => handleExternalNavigate('https://www.techruit.co/')}
// //               >
// //                 Staffing
// //               </button>
// //               <button className="nav-link" onClick={() => handleNavigate('/products')}>
// //                 Products
// //               </button>
// //             </nav>
// //           </div>
// //         </div>
// //       </header>
// //     </>
// //   );
// // };

// // export default Header;


// import React, { useState, useEffect, useRef } from 'react';

// const NAV_ITEMS = [
//   { key: 'lnd', label: 'L&D', type: 'external', href: 'https://lnd.mentorcrew.co/' },
//   { key: 'staffing', label: 'Staffing', type: 'external', href: 'https://www.techruit.co/' },
//   { key: 'products', label: 'Products', type: 'internal', path: '/products' },
// ];

// // currentPath lets the header know which internal route is live, so the
// // pill can reflect real navigation state instead of only "last clicked."
// const Header = ({ onNavigate, currentPath = '/' }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [pillStyle, setPillStyle] = useState({ opacity: 0, width: 0, transform: 'translateX(0px)' });
//   const [ripples, setRipples] = useState([]);
//   const [pressedIndex, setPressedIndex] = useState(null);

//   const navRef = useRef(null);
//   const itemRefs = useRef([]);
//   const rippleTimeouts = useRef([]);

//   // The "true" active tab is derived from the current route, not from
//   // whichever nav item was last clicked. External items never count as
//   // active since clicking them doesn't navigate away from this page.
//   const activeIndex = NAV_ITEMS.findIndex(
//     (item) => item.type === 'internal' && item.path === currentPath
//   );
//   const resolvedActive = activeIndex === -1 ? null : activeIndex;

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => () => rippleTimeouts.current.forEach(clearTimeout), []);

//   const movePillTo = (index) => {
//     const el = itemRefs.current[index];
//     const nav = navRef.current;
//     if (!el || !nav) return;
//     const elRect = el.getBoundingClientRect();
//     const navRect = nav.getBoundingClientRect();
//     setPillStyle({
//       opacity: 1,
//       width: `${elRect.width + 24}px`,
//       transform: `translateX(${elRect.left - navRect.left - 12}px)`,
//     });
//   };

//   const showPillFor = (index) => {
//     setHoverIndex(index);
//     movePillTo(index);
//   };

//   const restPill = () => {
//     setHoverIndex(null);
//     if (resolvedActive === null) {
//       setPillStyle((prev) => ({ ...prev, opacity: 0 }));
//     } else {
//       movePillTo(resolvedActive);
//     }
//   };

//   // Recompute pill position on resize/route change so it doesn't drift.
//   useEffect(() => {
//     const handleResize = () => showPillForCurrent();
//     const showPillForCurrent = () => {
//       if (hoverIndex !== null) movePillTo(hoverIndex);
//       else if (resolvedActive !== null) movePillTo(resolvedActive);
//     };
//     showPillForCurrent();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [resolvedActive, scrolled]);

//   const fireRipple = (btn, index, clientX, clientY) => {
//     const rect = btn.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height) * 2;
//     const x = clientX - rect.left - size / 2;
//     const y = clientY - rect.top - size / 2;
//     const id = `${Date.now()}-${Math.random()}`;
//     setRipples((prev) => [...prev, { id, index, x, y, size }]);
//     const t = setTimeout(() => {
//       setRipples((prev) => prev.filter((r) => r.id !== id));
//     }, 650);
//     rippleTimeouts.current.push(t);
//   };

//   const handleItemClick = (item, index, e) => {
//     movePillTo(index);
//     fireRipple(e.currentTarget, index, e.clientX, e.clientY);

//     // Brief press-down feedback for tactile confirmation of the click.
//     setPressedIndex(index);
//     setTimeout(() => setPressedIndex(null), 150);

//     if (item.type === 'external') {
//       window.open(item.href, '_blank', 'noopener,noreferrer');
//     } else if (onNavigate) {
//       onNavigate(item.path);
//     }
//   };

//   const handleKeyDown = (item, index, e) => {
//     // Space/Enter already trigger onClick natively for <button>, this just
//     // makes sure the pill previews on keyboard focus too (see onFocus).
//     if (e.key === 'Escape') e.currentTarget.blur();
//   };

//   const handleNavigate = (path) => {
//     if (onNavigate) onNavigate(path);
//   };

//   return (
//     <>
//       <style>{`
//         .modern-header {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           z-index: 50;
//           transition: all 0.4s ease;
//           background: transparent;
//           backdrop-filter: none;
//           border-bottom: 1px solid transparent;
//         }

//         .modern-header.scrolled {
//           background: rgba(255, 255, 255, 0.8);
//           backdrop-filter: blur(20px);
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);
//         }

//         .header-container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0.75rem 1.5rem;
//         }

//         .header-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 1.5rem;
//         }

//         .logo-section {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           cursor: pointer;
//           transition: transform 0.3s ease;
//           flex-shrink: 0;
//           border-radius: 8px;
//         }

//         .logo-section:hover {
//           transform: scale(1.04);
//         }

//         .logo-section:focus-visible {
//           outline: 2px solid #2196F3;
//           outline-offset: 3px;
//         }

//         .logo-img {
//           width: auto;
//         }

//         .header-nav {
//           position: relative;
//           display: flex;
//           align-items: center;
//           gap: 2.25rem;
//           opacity: 0;
//           transform: translateY(-8px);
//           pointer-events: none;
//           transition: opacity 0.4s ease, transform 0.4s ease;
//         }

//         .header-nav.nav-visible {
//           opacity: 1;
//           transform: translateY(0);
//           pointer-events: auto;
//         }

//         .nav-pill {
//           position: absolute;
//           top: 50%;
//           left: 0;
//           height: 34px;
//           transform-origin: left center;
//           margin-top: -17px;
//           border-radius: 9999px;
//           background: linear-gradient(90deg, rgba(47, 224, 198, 0.16), rgba(63, 140, 255, 0.16));
//           border: 1px solid rgba(63, 140, 255, 0.35);
//           box-shadow: 0 4px 16px rgba(63, 140, 255, 0.15);
//           transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1),
//                       width 0.45s cubic-bezier(0.65, 0, 0.35, 1),
//                       opacity 0.3s ease;
//           pointer-events: none;
//           z-index: 0;
//         }

//         .nav-link {
//           position: relative;
//           z-index: 1;
//           overflow: hidden;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.3rem;
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 1.2rem;
//           font-weight: 600;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           padding: 0.5rem 0.1rem;
//           color: rgba(20, 20, 20, 0.75);
//           transition: color 0.3s ease, transform 0.15s ease;
//           white-space: nowrap;
//           border-radius: 6px;
//         }

//         .nav-link.active {
//           color: #2196F3;
//         }

//         .nav-link.pressed {
//           transform: scale(0.94);
//         }

//         /* Keyboard-only focus ring — mouse clicks won't trigger this */
//         .nav-link:focus-visible {
//           outline: 2px solid #2196F3;
//           outline-offset: 4px;
//         }

//         .nav-link .external-mark {
//           font-size: 0.65em;
//           opacity: 0.6;
//           transform: translateY(-1px);
//         }

//         .nav-ripple {
//           position: absolute;
//           border-radius: 50%;
//           background: rgba(63, 140, 255, 0.35);
//           transform: scale(0);
//           animation: rippleAnim 0.65s ease-out forwards;
//           pointer-events: none;
//         }

//         @keyframes rippleAnim {
//           to {
//             transform: scale(1);
//             opacity: 0;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .nav-pill,
//           .nav-link,
//           .header-nav,
//           .logo-section {
//             transition: none !important;
//           }
//           .nav-ripple {
//             animation: none !important;
//             display: none;
//           }
//         }

//         @media (max-width: 640px) {
//           .logo-img {
//             height: 42px;
//           }

//           .header-nav {
//             gap: 1.1rem;
//           }

//           .nav-link {
//             font-size: 0.68rem;
//             letter-spacing: 0.08em;
//           }

//           .header-container {
//             padding: 0.6rem 1rem;
//           }
//         }

//         @media (max-width: 400px) {
//           .header-nav {
//             gap: 0.75rem;
//           }
//         }
//       `}</style>

//       <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
//         <div className="header-container">
//           <div className="header-content">
//             <div
//               className="logo-section"
//               onClick={() => handleNavigate('/')}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') handleNavigate('/');
//               }}
//             >
//               <img src="/logoRRR.png" alt="MentorCrew Logo" className="logo-img" />
//             </div>

//             <nav
//               ref={navRef}
//               className={`header-nav ${scrolled ? 'nav-visible' : ''}`}
//               onMouseLeave={restPill}
//             >
//               <span className="nav-pill" style={pillStyle} />

//               {NAV_ITEMS.map((item, i) => (
//                 <button
//                   key={item.key}
//                   ref={(el) => (itemRefs.current[i] = el)}
//                   className={[
//                     'nav-link',
//                     resolvedActive === i ? 'active' : '',
//                     pressedIndex === i ? 'pressed' : '',
//                   ].join(' ').trim()}
//                   onMouseEnter={() => showPillFor(i)}
//                   onFocus={() => showPillFor(i)}
//                   onBlur={restPill}
//                   onKeyDown={(e) => handleKeyDown(item, i, e)}
//                   onClick={(e) => handleItemClick(item, i, e)}
//                   aria-current={resolvedActive === i ? 'page' : undefined}
//                   aria-label={item.type === 'external' ? `${item.label} (opens in new tab)` : item.label}
//                 >
//                   {item.label}
//                   {item.type === 'external' && <span className="external-mark" aria-hidden="true">↗</span>}
//                   {ripples
//                     .filter((r) => r.index === i)
//                     .map((r) => (
//                       <span
//                         key={r.id}
//                         className="nav-ripple"
//                         style={{
//                           left: r.x,
//                           top: r.y,
//                           width: r.size,
//                           height: r.size,
//                         }}
//                       />
//                     ))}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NAV_ITEMS = [
  { key: 'lnd', label: 'L&D', type: 'external', href: 'https://lnd.mentorcrew.co/' },
  { key: 'staffing', label: 'Staffing', type: 'external', href: 'https://www.techruit.co/' },
  { key: 'products', label: 'Products', type: 'internal', path: '/products' },
];

// currentPath lets the header know which internal route is live, so the
// pill can reflect real navigation state instead of only "last clicked."
// onTalkToUs opens the <TalkToUs /> modal — it's a CTA, not a route, so it's
// kept separate from NAV_ITEMS/onNavigate.
const Header = ({ onNavigate, onTalkToUs, currentPath = '/', entranceStage = 'completed' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [headerHovered, setHeaderHovered] = useState(false);

  const defaultActiveIndex = NAV_ITEMS.findIndex(
    (item) => item.type === 'internal' && item.path === currentPath
  );
  const [activeItemIndex, setActiveItemIndex] = useState(
    defaultActiveIndex !== -1 ? defaultActiveIndex : null
  );

  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  // Sync activeItemIndex with internal route if currentPath changes
  useEffect(() => {
    const idx = NAV_ITEMS.findIndex(
      (item) => item.type === 'internal' && item.path === currentPath
    );
    if (idx !== -1) {
      setActiveItemIndex(idx);
    }
  }, [currentPath]);

  // Scroll visibility handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      const diff = currentScrollY - lastScrollY.current;
      // Small threshold to ignore micro-jitter
      if (Math.abs(diff) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP layout and timeline initialization matching React Bits PillNav
  const layout = () => {
    circleRefs.current.forEach((circle, index) => {
      if (!circle?.parentElement) return;

      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      if (w === 0 || h === 0) return;

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 4;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 2;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });

      const label = pill.querySelector('.pill-label');
      const hoverLabel = pill.querySelector('.pill-label-hover');

      if (label) gsap.set(label, { y: 0 });
      if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

      tlRefs.current[index]?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 1, ease: 'power3.out', overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 1, ease: 'power3.out', overwrite: 'auto' }, 0);
      }

      if (hoverLabel) {
        tl.to(hoverLabel, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', overwrite: 'auto' }, 0);
      }

      // If this index is currently active, initialize at full duration
      if (activeItemIndex === index) {
        tl.progress(1);
      } else {
        tl.progress(0);
      }

      tlRefs.current[index] = tl;
    });
  };

  useEffect(() => {
    layout();

    const handleResize = () => layout();
    window.addEventListener('resize', handleResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth active / deactivate transition when activeItemIndex changes
  useEffect(() => {
    NAV_ITEMS.forEach((_, i) => {
      const tl = tlRefs.current[i];
      if (!tl) return;

      activeTweenRefs.current[i]?.kill();
      if (activeItemIndex === i) {
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
          duration: 0.35,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      } else {
        activeTweenRefs.current[i] = tl.tweenTo(0, {
          duration: 0.3,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    });
  }, [activeItemIndex]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;

    // If this item is currently active, keep it active
    if (activeItemIndex === i) {
      activeTweenRefs.current[i]?.kill();
      activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
        duration: 0.25,
        ease: 'power3.out',
        overwrite: 'auto',
      });
      return;
    }

    // Non-active items smoothly return to 0
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.25,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handleItemClick = (item, index, e) => {
    setActiveItemIndex(index);

    if (item.type === 'external') {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (onNavigate) {
      onNavigate(item.path);
    }
  };

  const handleKeyDown = (item, index, e) => {
    if (e.key === 'Escape') e.currentTarget.blur();
  };

  const handleNavigate = (path) => {
    if (onNavigate) onNavigate(path);
  };

  return (
    <>
      <style>{`
        .modern-header {
          position: fixed;
          top: 1rem;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.4s ease;
          background: transparent;
          padding: 0 1.5rem;
          pointer-events: none;
        }

        .header-visible {
          transform: translateY(0);
          opacity: 1;
          transition:
            transform 0.4s ease,
            opacity 0.4s ease;
        }

        .header-hidden {
          transform: translateY(-130%);
          opacity: 0;
          pointer-events: none;
          transition:
            transform 0.4s ease,
            opacity 0.4s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .header-visible,
          .header-hidden {
            transition: none;
          }
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          pointer-events: none;
        }

        .header-logo-panel,
        .header-nav-panel {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 20px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
                      0 10px 35px rgba(0, 0, 0, 0.08);
          pointer-events: auto;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .header-logo-panel {
          padding: 0.5rem 1.25rem;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .header-nav-panel {
          padding: 0.5rem 1.25rem;
          display: flex;
          align-items: center;
        }

        .modern-header.scrolled .header-logo-panel,
        .modern-header.scrolled .header-nav-panel {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
                      0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          border-radius: 8px;
        }

        .logo-section:hover {
          transform: scale(1.04);
        }

        .logo-section:focus-visible {
          outline: 2px solid #2196F3;
          outline-offset: 3px;
        }

        .logo-img {
          width: auto;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .header-nav {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .header-nav.nav-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .pill-nav-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          height: 38px;
          padding: 0 1.25rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #0f172a;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          outline: none;
        }

        .pill-nav-btn:hover,
        .pill-nav-btn.is-active {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 4px 18px rgba(63, 140, 255, 0.25);
        }

        .pill-nav-btn:focus-visible {
          outline: 2px solid #2196F3;
          outline-offset: 3px;
        }

        .pill-nav-btn .hover-circle {
          position: absolute;
          left: 50%;
          bottom: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #2FE0C6 0%, #3F8CFF 100%);
          z-index: 1;
          display: block;
          pointer-events: none;
          will-change: transform;
        }

        .pill-nav-btn .label-stack {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          z-index: 2;
          overflow: hidden;
          height: 1.15em;
        }

        .pill-nav-btn .pill-label {
          position: relative;
          z-index: 2;
          display: inline-block;
          line-height: 1;
          color: #0f172a;
          font-weight: 600;
          will-change: transform;
        }

        .pill-nav-btn .pill-label-hover {
          position: absolute;
          left: 0;
          top: 0;
          color: #ffffff;
          font-weight: 700;
          z-index: 3;
          display: inline-block;
          line-height: 1;
          will-change: transform, opacity;
        }

        .pill-nav-btn .external-mark {
          position: relative;
          z-index: 2;
          font-size: 0.7em;
          opacity: 0.65;
          color: #0f172a;
          transform: translateY(-1px);
          transition: color 0.3s ease, opacity 0.3s ease;
        }

        .pill-nav-btn:hover .external-mark,
        .pill-nav-btn.is-active .external-mark {
          color: #ffffff;
          opacity: 0.95;
        }

        .header-cta {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          height: 40px;
          padding: 0 1.4rem;
          border-radius: 9999px;
          border: none;
          background: linear-gradient(90deg, #2FE0C6, #3F8CFF);
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(63, 140, 255, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .header-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(63, 140, 255, 0.4);
        }

        .header-cta:active {
          transform: translateY(0);
        }

        .header-cta:focus-visible {
          outline: 2px solid #2196F3;
          outline-offset: 3px;
        }

        /* Cinematic Homepage Entrance Animation */
        @keyframes headerLogoEntrance {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes headerNavEntrance {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .logo-entrance-waiting {
          opacity: 0 !important;
          transform: translateX(-100px) !important;
          pointer-events: none !important;
        }

        .logo-entrance-animating {
          animation: headerLogoEntrance 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          will-change: transform, opacity;
        }

        .logo-entrance-done {
          /* Clean normal state */
        }

        .nav-entrance-waiting {
          opacity: 0 !important;
          transform: translateX(100px) !important;
          pointer-events: none !important;
        }

        .nav-entrance-animating {
          animation: headerNavEntrance 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          will-change: transform, opacity;
        }

        .nav-entrance-done {
          /* Clean normal state */
        }

        @media (prefers-reduced-motion: reduce) {
          .pill-nav-btn,
          .header-nav,
          .logo-section,
          .header-cta,
          .logo-entrance-waiting,
          .logo-entrance-animating,
          .nav-entrance-waiting,
          .nav-entrance-animating {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        @media (max-width: 640px) {
          @keyframes headerLogoEntranceMobile {
            0% {
              opacity: 0;
              transform: translateX(-35px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes headerNavEntranceMobile {
            0% {
              opacity: 0;
              transform: translateX(35px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .logo-entrance-waiting {
            transform: translateX(-35px) !important;
          }

          .nav-entrance-waiting {
            transform: translateX(35px) !important;
          }

          .logo-entrance-animating {
            animation: headerLogoEntranceMobile 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          }

          .nav-entrance-animating {
            animation: headerNavEntranceMobile 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          }

          .modern-header {
            top: 0.5rem;
            padding: 0 0.75rem;
          }

          .logo-img {
            height: 42px;
          }

          .header-right {
            gap: 0.85rem;
          }

          .header-nav {
            gap: 0.35rem;
          }

          .pill-nav-btn {
            height: 32px;
            padding: 0 0.65rem;
            font-size: 0.68rem;
            letter-spacing: 0.05em;
          }

          .header-cta {
            height: 34px;
            padding: 0 0.9rem;
            font-size: 0.65rem;
          }

          .header-container {
            padding: 0;
            gap: 0.5rem;
          }

          .header-logo-panel {
            padding: 0.35rem 0.65rem;
            border-radius: 14px;
          }

          .header-nav-panel {
            padding: 0.35rem 0.65rem;
            border-radius: 14px;
          }
        }

        @media (max-width: 400px) {
          .header-nav {
            gap: 0.25rem;
          }
        }
      `}</style>

      <header
        className={`modern-header ${scrolled ? 'scrolled' : ''} ${
          showHeader ? 'header-visible' : 'header-hidden'
        }`}
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
      >
        <div className="header-container">
          {/* PANEL 1 — LOGO */}
          <div
            className={`header-logo-panel ${
              entranceStage === 'waiting'
                ? 'logo-entrance-waiting'
                : entranceStage === 'animating'
                ? 'logo-entrance-animating'
                : 'logo-entrance-done'
            }`}
          >
            <div
              className="logo-section"
              onClick={() => handleNavigate('/')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleNavigate('/');
              }}
            >
              <img src="/logoRRR.png" alt="MentorCrew Logo" className="logo-img" />
            </div>
          </div>

          {/* PANEL 2 — NAVIGATION */}
          <div
            className={`header-nav-panel ${
              entranceStage === 'waiting'
                ? 'nav-entrance-waiting'
                : entranceStage === 'animating'
                ? 'nav-entrance-animating'
                : 'nav-entrance-done'
            }`}
          >
            <div className="header-right">
              <nav
                ref={navRef}
                className={`header-nav ${(scrolled || headerHovered) ? 'nav-visible' : ''}`}
              >
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeItemIndex === i;
                  return (
                    <button
                      key={item.key}
                      ref={(el) => (itemRefs.current[i] = el)}
                      className={`pill-nav-btn ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                      onFocus={() => handleEnter(i)}
                      onBlur={() => handleLeave(i)}
                      onKeyDown={(e) => handleKeyDown(item, i, e)}
                      onClick={(e) => handleItemClick(item, i, e)}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={item.type === 'external' ? `${item.label} (opens in new tab)` : item.label}
                    >
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={(el) => (circleRefs.current[i] = el)}
                      />
                      <span className="label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span className="pill-label-hover" aria-hidden="true">
                          {item.label}
                        </span>
                      </span>
                      {item.type === 'external' && <span className="external-mark" aria-hidden="true">↗</span>}
                    </button>
                  );
                })}
              </nav>

              <button className="header-cta" onClick={onTalkToUs}>
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;