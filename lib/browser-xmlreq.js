/// shim for xmlhttprequest when packaged for the browser
/// in node.js the xmlhttprequest module is used

// Whether the UserAgent supports CORS for XHR
var hasCORS = 'undefined' != typeof XMLHttpRequest && (function () {
  try {
    var a = new XMLHttpRequest();
  } catch (e) {
    return false;
  }

  return a.withCredentials != undefined;
})();

module.exports.XMLHttpRequest = function(xdomain) {
  if (xdomain && 'undefined' != typeof XDomainRequest && !hasCORS) {
    return new XDomainRequest();
  }

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

