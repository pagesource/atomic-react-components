const useCookieDrop = () => {
  const setCookie = (cookieKey, cookieValue, expirationDays) => {
    let expiryDate = '';
    if (expirationDays) {
      const date = new Date();
      date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
      expiryDate = `; expires=" ${date.toUTCString()}`;
    }
    document.cookie = `${cookieKey}=${cookieValue || ''}${expiryDate}; path=/`;
  };
  return {
    setCookie,
  };
};

export default useCookieDrop;
