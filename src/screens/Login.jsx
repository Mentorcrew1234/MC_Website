import React, { useState } from "react";
import { Modal, Form, Input, Typography, Row, Col, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import authService from "../service/authService";
import loginAnimation from "../animations/Login.json";

const { Title, Text } = Typography;

const Login = ({ visible, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signInForm] = Form.useForm();
  const [signUpForm] = Form.useForm();

  // Animation options for Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleSignIn = async (values) => {
    setLoading(true);
    try {
      const result = await authService.login({
        email: values.email,
        password: values.password
      });

      if (result.success) {
        message.success(result.message);
        onClose();
        window.location.reload();
      } else {
        message.error(result.error);
      }
    } catch (error) {
      message.error('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (values) => {
    setLoading(true);
    try {
      const result = await authService.register({
        fullName: values.fullName,
        email: values.email,
        mobile: values.mobile,
        password: values.password
      });

      if (result.success) {
        message.success(result.message);
        switchToSignIn();
      } else {
        message.error(result.error);
      }
    } catch (error) {
      message.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = signInForm.getFieldValue('email');

    if (!email) {
      message.warning('Please enter your email first');
      return;
    }

    setLoading(true);
    try {
      const result = await authService.forgotPassword(email);
      if (result.success) {
        message.success(result.message);
      } else {
        message.error(result.error);
      }
    } catch (error) {
      message.error('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
    signInForm.resetFields();
    signUpForm.resetFields();
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
    signInForm.resetFields();
    signUpForm.resetFields();
  };

  const handleCancel = () => {
    setIsSignUp(false);
    setLoading(false);
    signInForm.resetFields();
    signUpForm.resetFields();
    onClose();
  };

  // Validation rules
  const validationRules = {
    email: [
      { required: true, message: 'Please enter your email!' },
      { type: 'email', message: 'Please enter a valid email format!' },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email format!'
      }
    ],
    password: [
      { required: true, message: 'Please enter your password!' },
      { min: 6, message: 'Password must be at least 6 characters!' },
      {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
        message: 'Password must contain both letters and numbers!'
      }
    ],
    fullName: [
      { required: true, message: 'Please enter your full name!' },
      { min: 2, message: 'Full name must be at least 2 characters!' },
      { max: 20, message: 'Full name cannot exceed 20 characters!' },
      {
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Full name can only contain letters and spaces!'
      }
    ],
    mobile: [
      { required: true, message: 'Please enter your mobile number!' },
      {
        pattern: /^\+\d{1,3}\s?\d{10}$/,
        message: 'Please enter mobile number with country code (+CountryCode + 10 digits)!'
      }
    ],
    confirmPassword: [
      { required: true, message: 'Please confirm your password!' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Passwords do not match!'));
        },
      }),
    ]
  };

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={1000}
      centered
      destroyOnClose
      className="auth-modal"
      styles={{
        body: { padding: 0 },
      }}
    >
      <Spin spinning={loading} tip={isSignUp ? "Creating account..." : "Signing in..."}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <Row style={{ minHeight: '600px' }}>
            {/* Left Side - Form */}
            <Col xs={24} md={14} style={{
              padding: '20px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column'
            }}>

              {/* Logo */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                padding: '0 20px'
              }}>
                <img
                  src="/logoRRR.png"
                  alt="Logo"
                  style={{
                    height: '60px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {!isSignUp ? (
                // Sign In Form
                <div style={{ flex: 1 }}>
                  <Title level={2} style={{ marginBottom: '8px', color: '#1f2937', textAlign: 'center' }}>
                    Welcome Back
                  </Title>
                  <Text style={{ color: '#6b7280', display: 'block', marginBottom: '32px', textAlign: 'center' }}>
                    Enter your email and password to access your account
                  </Text>

                  <Form
                    form={signInForm}
                    layout="vertical"
                    onFinish={handleSignIn}
                    size="large"
                    style={{ padding: "10px" }}
                  >
                    <Form.Item
                      label={<Text strong>Email</Text>}
                      name="email"
                      rules={validationRules.email}
                      style={{ marginBottom: '20px' }}
                    >
                      <Input
                        prefix={<MailOutlined />}
                        placeholder="Enter your email"
                        style={{ borderRadius: '8px' }}
                        disabled={loading}
                      />
                    </Form.Item>

                    <Form.Item
                      label={<Text strong>Password</Text>}
                      name="password"
                      rules={validationRules.password}
                      style={{ marginBottom: '20px' }}
                    >
                      <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Enter your password"
                        style={{ borderRadius: '8px' }}
                        disabled={loading}
                      />
                    </Form.Item>

                    <div style={{ textAlign: 'right', marginBottom: '14px' }}>
                      <Button
                        type="link"
                        onClick={handleForgotPassword}
                        style={{ padding: 0, color: '#6366f1' }}
                        disabled={loading}
                      >
                        Forgot your password?
                      </Button>
                    </div>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                        disabled={loading}
                        style={{
                          height: '45px',
                          borderRadius: '8px',
                          backgroundColor: '#6366f1',
                          borderColor: '#6366f1',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '14px'
                        }}
                      >
                        Sign In
                      </Button>
                    </Form.Item>
                  </Form>

                  <div style={{ textAlign: 'center' }}>
                    <Text style={{ color: '#6b7280' }}>
                      Don't have an account?{' '}
                      <Button
                        type="link"
                        onClick={switchToSignUp}
                        style={{ padding: 0, color: '#6366f1', fontWeight: '600' }}
                        disabled={loading}
                      >
                        Register Now
                      </Button>
                    </Text>
                  </div>
                </div>
              ) : (
                // Sign Up Form
                <div style={{ flex: 1 }}>
                  <Title level={2} style={{ marginBottom: '22px', color: '#1f2937', textAlign: 'center' }}>
                    Create an account
                  </Title>

                  <Form
                    form={signUpForm}
                    layout="vertical"
                    onFinish={handleSignUp}
                    size="large"
                  >
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label={<Text strong>Full Name</Text>}
                          name="fullName"
                          rules={validationRules.fullName}
                        >
                          <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your full name"
                            style={{ borderRadius: '8px' }}
                            disabled={loading}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label={<Text strong>Email</Text>}
                          name="email"
                          rules={validationRules.email}
                        >
                          <Input
                            prefix={<MailOutlined />}
                            placeholder="Enter your email"
                            style={{ borderRadius: '8px' }}
                            disabled={loading}
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      label={<Text strong>Mobile Number</Text>}
                      name="mobile"
                      rules={validationRules.mobile}
                    >
                      <Input
                        prefix={<PhoneOutlined />}
                        placeholder="Enter your mobile number"
                        style={{ borderRadius: '8px' }}
                        disabled={loading}
                      />
                    </Form.Item>

                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label={<Text strong>Password</Text>}
                          name="password"
                          rules={validationRules.password}
                        >
                          <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Enter password"
                            style={{ borderRadius: '8px' }}
                            disabled={loading}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label={<Text strong>Confirm Password</Text>}
                          name="confirmPassword"
                          rules={validationRules.confirmPassword}
                        >
                          <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Confirm password"
                            style={{ borderRadius: '8px' }}
                            disabled={loading}
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                        disabled={loading}
                        style={{
                          height: '45px',
                          borderRadius: '8px',
                          backgroundColor: '#6366f1',
                          borderColor: '#6366f1',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '24px'
                        }}
                      >
                        Sign Up
                      </Button>
                    </Form.Item>
                  </Form>

                  <div style={{ textAlign: 'center' }}>
                    <Text style={{ color: '#6b7280' }}>
                      Already have an account?{' '}
                      <Button
                        type="link"
                        onClick={switchToSignIn}
                        style={{ padding: 0, color: '#6366f1', fontWeight: '600' }}
                        disabled={loading}
                      >
                        Sign In
                      </Button>
                    </Text>
                  </div>
                </div>
              )}
            </Col>

            {/* Right Side - Animation and Message */}
            <Col xs={0} md={10} style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px'
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2
              }} />

              {/* Lottie Animation */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '350px',
                height: '300px',
                marginBottom: '20px'
              }}>
                <Lottie
                  options={defaultOptions}
                  height="100%"
                  width="100%"
                />
              </div>

              {/* Text Content */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                color: 'white'
              }}>
                {!isSignUp ? (
                  <div>
                    <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
                      "Connecting mentors. Empowering minds."
                    </Title>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>
                      Log in to continue your journey.
                    </Text>
                  </div>
                ) : (
                  <div>
                    <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
                      Every great journey starts with a step
                    </Title>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>
                      take yours with Mentorcrew.
                    </Text>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Spin>
    </Modal>
  );
};

export default Login;