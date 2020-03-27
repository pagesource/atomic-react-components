/**
 * @param {string} cookieValue -> expected in string format
 * @param {Object} cookieDetails - cookie object to be passed for setting
 * the value which expects name of the cookie and it's expiration time.
 *
 * Sets the cookie according to expiration time.
 */
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

/**
 *
 * @param {object} cookieDetails -> cookie object
 *
 * returns the cookie value corresponding to the name.
 */

const getCookie = (cookieDetails) => {
  const { cookieName } = cookieDetails;
  const regExp = `(^|;) ?${cookieName}=([^;]*)(;|$)`;
  const val = document.cookie.match(regExp);
  return val ? val[2] : null;
};

/**
 *
 * @param {string} name
 *
 * removes the cookie w.r.t the name provided.
 */

const removeCookie = (name) => {
  document.cookie = `${name}=1; expires=1 Jan 1970 00:00:00 GMT;`;
};
export { setCookie, getCookie, removeCookie };
