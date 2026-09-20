import Swal from 'sweetalert2';

class AlertService {
  // Success Alert
  success(title, message, options = {}) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: options.timer || 3000,
      timerProgressBar: true,
      showConfirmButton: options.showConfirmButton !== false,
      confirmButtonText: options.confirmButtonText || 'OK',
      confirmButtonColor: '#10b981',
      ...options
    });
  }

  // Error Alert
  error(title, message, options = {}) {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      showConfirmButton: options.showConfirmButton !== false,
      confirmButtonText: options.confirmButtonText || 'OK',
      confirmButtonColor: '#ef4444',
      ...options
    });
  }

  // Warning Alert
  warning(title, message, options = {}) {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      showConfirmButton: options.showConfirmButton !== false,
      confirmButtonText: options.confirmButtonText || 'OK',
      confirmButtonColor: '#f59e0b',
      ...options
    });
  }

  // Info Alert
  info(title, message, options = {}) {
    return Swal.fire({
      icon: 'info',
      title: title,
      text: message,
      showConfirmButton: options.showConfirmButton !== false,
      confirmButtonText: options.confirmButtonText || 'OK',
      confirmButtonColor: '#3b82f6',
      ...options
    });
  }

  // Confirmation Dialog
  confirm(title, message, options = {}) {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#ef4444',
      confirmButtonText: options.confirmButtonText || 'Yes',
      cancelButtonText: options.cancelButtonText || 'No',
      ...options
    });
  }

  // Loading Alert
  loading(title = 'Please wait...', message = 'Processing your request') {
    return Swal.fire({
      title: title,
      text: message,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
  }

  // Close any open alert
  close() {
    Swal.close();
  }

  // Toast notification (small popup)
  toast(message, type = 'success', options = {}) {
    const Toast = Swal.mixin({
      toast: true,
      position: options.position || 'top-end',
      showConfirmButton: false,
      timer: options.timer || 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    return Toast.fire({
      icon: type,
      title: message,
      ...options
    });
  }

  // Custom HTML Alert
  html(title, html, options = {}) {
    return Swal.fire({
      title: title,
      html: html,
      showConfirmButton: options.showConfirmButton !== false,
      confirmButtonText: options.confirmButtonText || 'OK',
      confirmButtonColor: '#10b981',
      ...options
    });
  }

  // Input Dialog
  input(title, inputType = 'text', options = {}) {
    return Swal.fire({
      title: title,
      input: inputType,
      inputLabel: options.inputLabel || '',
      inputPlaceholder: options.inputPlaceholder || '',
      inputValue: options.inputValue || '',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Submit',
      cancelButtonText: options.cancelButtonText || 'Cancel',
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#ef4444',
      inputValidator: options.inputValidator || null,
      ...options
    });
  }

  // Auto-close success with redirect
  successWithRedirect(title, message, redirectUrl, delay = 2000) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: delay,
      timerProgressBar: true,
      showConfirmButton: false,
      willClose: () => {
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      }
    });
  }

  // Welcome message for successful login
  welcomeMessage(userName, role) {
    return this.success(
      `Welcome back, ${userName}!`,
      `You have successfully logged in as ${role.toLowerCase()}`,
      {
        timer: 2500,
        showConfirmButton: false
      }
    );
  }

  // Registration success message
  registrationSuccess(message = 'Account created successfully!') {
    return this.success(
      'Registration Complete!',
      message,
      {
        timer: 3000,
        showConfirmButton: false
      }
    );
  }
}

// Export a single instance
const alertService = new AlertService();
export default alertService;