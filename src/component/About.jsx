import { useState } from 'react';
import { Row, Col, Tabs, Typography } from 'antd';
import { FireOutlined, EyeOutlined } from '@ant-design/icons';
import '../style/About.css';
import '../style/Mentor.css';

const { Paragraph } = Typography;
const { TabPane } = Tabs;

const MergedAboutMentor = () => {
  const [activeTab, setActiveTab] = useState("1");

  const getVideoSrc = () => {
    return activeTab === "1" ? "/mission.mp4" : "/vision.mp4";
  };

  return (
    <div>
      {/* About Section */}
      <div className='container-about'>
        <div className="about-container">
          <h2>
            <b>About</b> <span style={{ color: "#0073e6" }}>MentorCrew</span>
          </h2>
          <p>
            MentorCrew envisions what India envisions for its current and future workforce - Addressing the Employability
            Gap and building a qualified and sustainable workforce to meet global demands. MentorCrew endeavors to
            contribute to this collective vision with its refreshing ideas, proven and improved pedagogical practices
            and championing innovative and practical approaches to skill development . We at MentorCrew strongly
            believe that scalability and agility in our solutions can receive a positive stimulus effect by building
            and leveraging IT tools and digital platforms.
          </p>
        </div>

        <div className="container" style={{ background: "white" }}>
          <Row gutter={[24, 48]}>
            {/* Left side with illustration */}
            <Col xs={24} md={12}>
              <video
                src={getVideoSrc()}
                // controls
                autoPlay
                loop
                muted
                style={{ width: '450px', height: '500px', marginTop: "15px", borderRadius: "8px" }}
              />

            </Col>

            {/* Right side with tabs */}
            <Col xs={24} md={12}>
              <Tabs
                defaultActiveKey="1"
                centered
                className="content-tabs"
                onChange={(key) => setActiveTab(key)}
              >
                <TabPane
                  tab={
                    <span className="tab-label">
                      <FireOutlined className="mission-icon" />
                      Mission
                    </span>
                  }
                  key="1"
                >
                  <Typography>
                    <Paragraph className="content-paragraph">
                      A dynamic, vibrant, value-based organization that is committed to deliver learning and counsel of
                      the highest excellence to prepare students and professionals for career readiness and successfully
                      leverage entrepreneurial  avenues/opportunities . MentorCrew is astute in spotting lacunae and
                      opportunity in addressing the skill gaps and promoting continuous learning & development for
                      workforce and businesses alike, now and for the future. MentorCrew is harnessing their rich
                      knowledge equity and valuable experience to play a key consulting role for Enterprises and
                      Institutions of all size and scale in holistically improving their learning systems by virtue of
                      proven pedagogical processes , refined learning methodologies , integrated curriculum and
                      embedding digital learning systems powered by revolutionary IT Technologies.
                    </Paragraph>
                  </Typography>
                </TabPane>

                <TabPane
                  tab={
                    <span className="tab-label">
                      <EyeOutlined className="tab-icon" />
                      Vision
                    </span>
                  }
                  key="2"
                >
                  <Typography>
                    <Paragraph className="content-paragraph">
                      Educate, Empower and Inspire to build a truly transformational, self-sufficient and valuable
                      Human capital and thereby achieve holistic and equitable socio-economic development.
                    </Paragraph>
                  </Typography>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>

      <div className="mentor-container">
        <div className="order-process-container">

          <h1 className="main-heading">Why Choose <span style={{ color: "#0073e6" }}>MentorCrew?</span></h1>
          <h3 className="sub-heading">We promise <strong>PACE</strong> in our trainings</h3>
          <p className="description-text">
            Experience excellence through our comprehensive training methodology designed to accelerate your career growth
          </p>

          <div className="steps-container">
            <div className="timeline-line"></div>

            <div className="step-item">
              <div className="icon-container personalized-bg">
                <div className="circle-bg"></div>
                <video autoPlay loop muted className="step-icon">
                  <source src="./letter-p.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="step-text">
                <h3>Personalized Focus</h3>
                <p>Tailored learning paths designed specifically for your unique career goals and learning style</p>
              </div>
            </div>

            <div className="step-item">
              <div className="icon-container applied-bg">
                <div className="circle-bg"></div>
                <video autoPlay loop muted className="step-icon">
                  <source src="./letter-a.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="step-text">
                <h3>Applied Learning</h3>
                <p>Hands-on practical experience with real-world projects and industry-relevant case studies</p>
              </div>
            </div>

            <div className="step-item">
              <div className="icon-container career-bg">
                <div className="circle-bg"></div>
                <video autoPlay loop muted className="step-icon">
                  <source src="./letter-c.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="step-text">
                <h3>Career Assistance</h3>
                <p>Comprehensive support including resume building, interview preparation, and job placement</p>
              </div>
            </div>

            <div className="step-item">
              <div className="icon-container extended-bg">
                <div className="circle-bg"></div>
                <video autoPlay loop muted className="step-icon">
                  <source src="./letter-e.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="step-text">
                <h3>Extended Query Assistance</h3>
                <p>Continuous mentorship and support even after course completion for long-term success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergedAboutMentor;