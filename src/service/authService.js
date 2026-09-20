import api from './api';

class AuthService {
  // Register new user
  async register(userData) {
    try {
      const response = await api.post('/api/auth/register', {
        fullName: userData.fullName,
        email: userData.email,
        mobileNumber: userData.mobile,
        password: userData.password
      });

      return {
        success: true,
        data: response.data,
        message: 'Registration successful!'
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed',
        details: error.response?.data
      };
    }
  }

  // Login user
  async login(credentials) {
    try {
      const response = await api.post('/api/auth/login', {
        email: credentials.email,
        password: credentials.password
      });

      const { token, user, ...otherData } = response.data;

      // Store token and user info in localStorage
      if (token) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userInfo', JSON.stringify(user || otherData));
      }

      return {
        success: true,
        data: response.data,
        message: 'Login successful!'
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
        details: error.response?.data
      };
    }
  }

  // Logout user
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  // Get current user info
  getCurrentUser() {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
  }

  // Get auth token
  getToken() {
    return localStorage.getItem('authToken');
  }

  // Refresh token
  async refreshToken() {
    try {
      const response = await api.post('/auth/refresh');
      const { token } = response.data;

      if (token) {
        localStorage.setItem('authToken', token);
      }

      return {
        success: true,
        token: token
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Token refresh failed'
      };
    }
  }

  // Forgot password
  async forgotPassword(email) {
    try {
      const response = await api.post('/auth/forgot-password', { email });

      return {
        success: true,
        message: 'Password reset email sent successfully!'
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to send reset email'
      };
    }
  }

  // Reset password
  async resetPassword(resetData) {
    try {
      const response = await api.post('/auth/reset-password', resetData);

      return {
        success: true,
        message: 'Password reset successful!'
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Password reset failed'
      };
    }
  }
}

const authService = new AuthService();
export default authService;