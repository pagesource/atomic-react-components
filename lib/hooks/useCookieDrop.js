const useCookieDrop = () => {
  const setCookie = (cookieValue, cookieDetails) => {
    const { cookieName, expirationDays } = cookieDetails;
    let expiryDate = '';
    if (expirationDays) {
      const date = new Date();
      date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
      expiryDate = `; expires=" ${date.toUTCString()}`;
    }
    document.cookie = `${cookieName}=${cookieValue || ''}${expiryDate}; path=/`;
  };
  const getCookie = cookieDetails => {
    const { cookieName } = cookieDetails;
    const regExp = `(^|;) ?${cookieName}=([^;]*)(;|$)`;
    const val = document.cookie.match(regExp);
    return val ? val[2] : null;
  };
  const removeCookie = name => {
    document.cookie = `${name}=1; expires=1 Jan 1970 00:00:00 GMT;`;
  };
  return {
    setCookie,
    getCookie,
    removeCookie,
  };
};

export default useCookieDrop;
