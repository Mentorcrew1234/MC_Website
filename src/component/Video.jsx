import React, { useState } from 'react';
import { FileText, Layout, Smartphone, Palette } from 'lucide-react';
import '../style/Video.css';

const VideoComponent = () => {
  const [activeCard, setActiveCard] = useState('storytelling');

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  return (
    <div className='ing'>
      <div className="container-video">
        <div className="video-section">
          <iframe
            className="background-videoo"
            src="https://www.youtube.com/embed/iG6jNMQVZn4?mute=1&loop=1&playlist=iG6jNMQVZn4&controls=1&showinfo=0&rel=0&modestbranding=1&start=6"
            title="Background Video 1"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            className="background-videoo"
            src="https://www.youtube.com/embed/fpjq7rZ9N0M?controls=1&showinfo=0&rel=0&modestbranding=1"
            title="Background Video 2"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>


        <div className="content-section">
          <h1 className="content-title">Why we love what we do</h1>

          <div
            className={`card ${activeCard === 'storytelling' ? 'card-highlighted' : 'card-regular'}`}
            onClick={() => handleCardClick('storytelling')}
          >
            <div className="card-content">
              <div className="card-icon">
                <FileText size={24} color="#666" />
              </div>
              <div className="card-text">
                <h3 className="card-title">Storytelling</h3>
                <p className="card-description">Memorable stories of your success &amp; work that customers would remember and narrate.</p>
              </div>
            </div>
          </div>

          <div
            className={`card ${activeCard === 'content' ? 'card-highlighted' : 'card-regular'}`}
            onClick={() => handleCardClick('content')}
          >
            <div className="card-content">
              <div className="card-icon">
                <Layout size={24} color="#666" />
              </div>
              <div className="card-text">
                <h3 className="card-title">Content</h3>
                <p className="card-description">Relevant, appropriate &amp; contextual content for effective communication.</p>
              </div>
            </div>
          </div>

          <div
            className={`card ${activeCard === 'technology' ? 'card-highlighted' : 'card-regular'}`}
            onClick={() => handleCardClick('technology')}
          >
            <div className="card-content">
              <div className="card-icon">
                <Smartphone size={24} color="#666" />
              </div>
              <div className="card-text">
                <h3 className="card-title">Technology</h3>
                <p className="card-description">Innovative technical solutions that enhance your digital presence and user experience.</p>
              </div>
            </div>
          </div>

          <div
            className={`card ${activeCard === 'creativity' ? 'card-highlighted' : 'card-regular'}`}
            onClick={() => handleCardClick('creativity')}
          >
            <div className="card-content">
              <div className="card-icon">
                <Palette size={24} color="#666" />
              </div>
              <div className="card-text">
                <h3 className="card-title">Creativity</h3>
                <p className="card-description">Unique and imaginative approaches that help your brand stand out in a crowded marketplace.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;