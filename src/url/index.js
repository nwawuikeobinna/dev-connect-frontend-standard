let BASE_URL;

if (window.location.href.includes("localhost")) {
  BASE_URL = "http://localhost:5000/api/v1/";
}

if (window.location.href.includes("staging frontend url")) {
  BASE_URL = "staging endpoint base url";
}

if (window.location.href.includes("production frontend url")) {
  BASE_URL = "production endpoint base url";
}

export {BASE_URL};