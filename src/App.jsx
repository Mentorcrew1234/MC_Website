// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// // import { Layout } from "antd";
// // import ModernLandingPage from "./component/LandingScreen";
// // import Footer from "./component/Footer";
// // import About from "./component/About";
// // import TrainingCards from "./component/Service";
// // import Login from "./screens/Login";
// // import ProductScreen from "./screens/Products";
// // import Chatbot from './component/chatbot';
// // import Header from './component/Header';

// // const { Content } = Layout;

// // const AppContent = () => {
// //   const navigate = useNavigate();
// //   const [loginVisible, setLoginVisible] = useState(false);

// //   const handleNavigate = (path) => {
// //     if (path === '/login') {
// //       setLoginVisible(true);
// //     } else {
// //       navigate(path);
// //       setLoginVisible(false);
// //     }
// //   };

// //   const closeLogin = () => {
// //     setLoginVisible(false);
// //   };

// //   return (
// //     <Layout style={{ minHeight: '100vh' }}>
// //       <Header onNavigate={handleNavigate} />
      
// //       <Login visible={loginVisible} onClose={closeLogin} />
      
// //       <Content>
// //         <Routes>
// //           <Route path="/" element={<ModernLandingPage />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/services" element={<TrainingCards />} />
// //           <Route path="/products" element={<ProductScreen />} />
// //         </Routes>
// //       </Content>
      
// //       <Footer />
// //       {/* <Chatbot /> */}
// //     </Layout>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <Router>
// //       <AppContent />
// //     </Router>
// //   );
// // };

// // export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import { Layout } from "antd";
// import ModernLandingPage from "./component/LandingScreen";
// import Footer from "./component/Footer";
// import About from "./component/About";
// import TrainingCards from "./component/Service";
// import Login from "./screens/Login";
// import ProductScreen from "./screens/Products";
// import Chatbot from './component/chatbot';
// import Header from './component/Header';
// import WhatsAppButton from './component/WhatsAppButton';

// const { Content } = Layout;

// const AppContent = () => {
//   const navigate = useNavigate();
//   const [loginVisible, setLoginVisible] = useState(false);

//   const handleNavigate = (path) => {
//     if (path === '/login') {
//       setLoginVisible(true);
//     } else {
//       navigate(path);
//       setLoginVisible(false);
//     }
//   };

//   const closeLogin = () => {
//     setLoginVisible(false);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Header onNavigate={handleNavigate} />
      
//       <Login visible={loginVisible} onClose={closeLogin} />
      
//       <Content>
//         <Routes>
//           <Route path="/" element={<ModernLandingPage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<TrainingCards />} />
//           <Route path="/products" element={<ProductScreen />} />
//         </Routes>
//       </Content>
      
//       <Footer />
//       {/* <Chatbot /> */}
//       <WhatsAppButton />
//     </Layout>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Layout } from "antd";
import ModernLandingPage from "./component/LandingScreen";
import Footer from "./component/Footer";
import About from "./component/About";
import TrainingCards from "./component/Service";
import Login from "./screens/Login";
import ProductScreen from "./screens/Products";
import Chatbot from './component/chatbot';
import Header from './component/Header';
import WhatsAppButton from './component/WhatsAppButton';
import TalkToUs from './component/TalkToUs';
import WorkshopLandingPage from './screens/WorkshopLandingPage';

const { Content } = Layout;

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isWorkshopPage = location.pathname.startsWith('/workshop');
  const hasCompletedInitialEntrance = useRef(false);

  // On initial homepage load, UI elements wait in 'waiting' state for 2.0s while hero video plays immediately.
  // Routes other than '/' (or re-visits) initialize directly to 'completed'.
  const [entranceStage, setEntranceStage] = useState(() => {
    return window.location.pathname === '/' ? 'waiting' : 'completed';
  });

  useEffect(() => {
    if (!isHomePage) {
      setEntranceStage('completed');
      return;
    }

    if (hasCompletedInitialEntrance.current) {
      setEntranceStage('completed');
      return;
    }

    // Hero video is already playing from 0.0s.
    // At EXACTLY 2.0s after page load, trigger the cinematic UI entrance animation:
    const entranceTimer = setTimeout(() => {
      setEntranceStage('animating');
    }, 2000);

    // After slower cinematic animation completes (~1.3-1.4s later, at ~3.5s total), settle cleanly into 'completed':
    const completeTimer = setTimeout(() => {
      hasCompletedInitialEntrance.current = true;
      setEntranceStage('completed');
    }, 3500);

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(completeTimer);
    };
  }, [isHomePage]);

  const [loginVisible, setLoginVisible] = useState(false);
  const [talkToUsVisible, setTalkToUsVisible] = useState(false);

  const handleNavigate = (path) => {
    if (path === '/login') {
      setLoginVisible(true);
    } else {
      navigate(path);
      setLoginVisible(false);
    }
  };

  const closeLogin = () => {
    setLoginVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        onNavigate={handleNavigate}
        onTalkToUs={() => setTalkToUsVisible(true)}
        currentPath={location.pathname}
        entranceStage={entranceStage}
      />

      <Login visible={loginVisible} onClose={closeLogin} />
      <TalkToUs visible={talkToUsVisible} onClose={() => setTalkToUsVisible(false)} />

      <Content>
        <Routes>
          <Route
            path="/"
            element={
              <ModernLandingPage
                entranceStage={entranceStage}
              />
            }
          />
          <Route path="/about" element={<About />} />
          {/* Services Section temporarily disabled - preserved for future restoration: */}
          {/* <Route path="/services" element={<TrainingCards />} /> */}
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/workshop" element={<WorkshopLandingPage />} />
        </Routes>
      </Content>

      <Footer />
      {/* <Chatbot /> */}
      {!isWorkshopPage && <WhatsAppButton />}
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;