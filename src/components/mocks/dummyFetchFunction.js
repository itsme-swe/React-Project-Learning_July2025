export const mockFetch = (data) => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(data);
      },
    });
  });
};

// 🔸 Here we are trying to build similar fetch function that browser give us.
