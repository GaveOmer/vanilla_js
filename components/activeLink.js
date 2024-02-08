document.addEventListener("DOMContentLoaded", function() {
  let currentPath = window.location.pathname;
  if (currentPath === "/posts") {
    document.getElementById("postsLink").classList.add("active");
  } else if (currentPath === "/about") {
    document.getElementById("aboutLink").classList.add("active");
  } else if (currentPath === "/roadmap") {
    document.getElementById("roadmapLink").classList.add("active");
  }
}); 