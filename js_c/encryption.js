// encryption.js - Phiên bản hoàn chỉnh

securityScript.onerror = function() {
  console.error('Failed to load encryption.js');
  // Fallback: vẫn khởi tạo menu dù không có module bảo mật
  initUserMenu();
};

class Security {
  constructor() {
    this.storageKey = 'encryptedUserDB';
    this.sessionKey = 'currentSession';
    this.cryptoKey = this.generateCryptoKey();
  }

  // Tạo key mã hóa từ thông tin trình duyệt
  generateCryptoKey() {
    const salt = window.navigator.userAgent + window.screen.width;
    return btoa(salt).substring(0, 32);
  }

  // Mã hóa dữ liệu (AES-like đơn giản)
  encrypt(data) {
    try {
      const text = JSON.stringify(data);
      let result = '';
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) ^ this.cryptoKey.charCodeAt(i % this.cryptoKey.length);
        result += String.fromCharCode(charCode);
      }
      return btoa(result);
    } catch (error) {
      console.error('Encryption error:', error);
      return null;
    }
  }

  // Giải mã dữ liệu
  decrypt(encrypted) {
    try {
      const text = atob(encrypted);
      let result = '';
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) ^ this.cryptoKey.charCodeAt(i % this.cryptoKey.length);
        result += String.fromCharCode(charCode);
      }
      return JSON.parse(result);
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  }

  // Lưu dữ liệu người dùng
  saveUsers(users) {
    const encrypted = this.encrypt(users);
    if (encrypted) {
      localStorage.setItem(this.storageKey, encrypted);
      return true;
    }
    return false;
  }

  // Lấy dữ liệu người dùng
  getUsers() {
    const encrypted = localStorage.getItem(this.storageKey);
    return encrypted ? this.decrypt(encrypted) : [];
  }

  // Lưu session đăng nhập
  saveSession(user) {
    const safeUser = {
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      role: user.role,
      lastLogin: new Date().toISOString()
    };
    sessionStorage.setItem(this.sessionKey, JSON.stringify(safeUser));
  }

  // Lấy session hiện tại
  getSession() {
    const session = sessionStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session) : null;
  }

  // Xóa session
  clearSession() {
    sessionStorage.removeItem(this.sessionKey);
  }

  // Hash mật khẩu đơn giản (trong thực tế nên dùng bcrypt)
  hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(36);
  }
}

const security = new Security();