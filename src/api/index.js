export const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Hello from the API!' });
      }, 1000);
    });
  };
  
