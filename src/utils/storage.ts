export const loadFromLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return null; // Return null if on the server
  }

  const storedData = localStorage.getItem(key);
  const timestamp = localStorage.getItem(`${key}_timestamp`);

  if (storedData && timestamp) {
    const currentTime = Date.now();
    const oneHourInMillis = 60 * 60 * 1000;

    // Check if more than one hour has passed
    if (currentTime - parseInt(timestamp) > oneHourInMillis) {
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}_timestamp`);
      return null; // Data is expired
    }

    return JSON.parse(storedData); // Return the valid data
  }

  return null; // No data found
};

// Function to save data with timestamp
export const saveToLocalStorage = (key: string, data: any) => {
  if (typeof window === 'undefined') {
    return; // Do nothing if on the server
  }

  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem(`${key}_timestamp`, Date.now().toString()); // Save the current timestamp
};
