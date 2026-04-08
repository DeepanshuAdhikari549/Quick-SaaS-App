const axiosMock = {
  defaults: { baseURL: '' },
  get: async (url, config) => {
    console.log('[MOCK] GET', url, config);
    if (url.includes('/get-user-creations')) {
        return { data: { success: true, creations: [] } };
    }
    if (url.includes('/get-published-creations')) {
        return { data: { success: true, creations: [] } };
    }
    return { data: { success: true } };
  },
  post: async (url, data, config) => {
    console.log('[MOCK] POST', url, data, config);
    // Generic mock response
    return { 
      data: { 
        success: true, 
        message: 'Mock response success', 
        result: 'This is a mocked response since you are running without a backend.', 
        photo: 'https://via.placeholder.com/512' 
      } 
    };
  }
};

export default axiosMock;
