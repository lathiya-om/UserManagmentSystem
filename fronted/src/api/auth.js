const API_BASE_URL = 'http://localhost:8080/api/auth';

const api = {
  async post(path, data, token = null) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    return response;
  },

  async loginUser(email, password) {
    const response = await api.post('/login', { email, password });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    const data = await response.json();
    return data.data;
  },

  async registerUser(username, email, password) {
    const response = await api.post('/register', { username, email, password });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    return response.json();
  },

  async refreshToken(token) {
    const response = await fetch(`${API_BASE_URL}/refresh?refreshToken=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Token refresh failed');
    }
    const data = await response.json();
    return data.data;
  },

  async logoutUser(token) {
    const response = await fetch(`${API_BASE_URL}/logout?refreshToken=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
      const errorData = await response.json();
      throw new Error(errorData.message || 'Logout failed');
    }
    return response.json();
  },
};

export default api;