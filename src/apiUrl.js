let apiUrl;

// check if development
if (window.location.hostname === "localhost") {
  apiUrl = "http://localhost:4000";
} else {
  apiUrl = "https://stark-basin-09914.herokuapp.com";
}

// export api url
export default apiUrl;