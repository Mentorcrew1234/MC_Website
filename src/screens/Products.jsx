import React, { useState } from 'react';

const ProductScreen = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="product-screen">
      <div className="container">
        <div className="hero-section">
          <div className="hero-image">
            <img src="/productRock.png" alt="LMS Preview" />
          </div>
          <div className="hero-content">
            <div className="badge">Coming Soon</div>
            <h1>The future of education is being built right here</h1>
            <p className="subtitle">
              We're building a powerful, intuitive LMS platform that will
              transform how educators teach and students learn online.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-screen {
          min-height: 100vh;
          background: 
            linear-gradient(135deg, #f0f4f8 0%, #e3f2fd 50%, #e8eaf6 100%),
            url("/bg.gif") no-repeat center center fixed,
            #add8e6;
          background-size: cover;
          font-family: 'Arial', sans-serif;
          color: black;
          padding: 20px 0;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding: 80px 0;
        }

        /* Increased image width & height */
        .hero-image img {
          width: 600px;   /* Explicit width */
          height: 600px;  /* Explicit height */
          object-fit: contain;
          border-radius: 20px;
        }

        .hero-content {
          max-width: 600px;
          color: black; /* Ensure text is black */
        }

        .badge {
          display: inline-block;
          background: rgba(0, 0, 0, 0.05);
          color: black;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin: 0 0 20px 0;
          font-weight: 700;
          line-height: 1.2;
          color: black;
        }

        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.9;
          color: black;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
          }

          .hero-image img {
            width: 320px;
            height: auto;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductScreen;
