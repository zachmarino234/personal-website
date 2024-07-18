function getCurrentURL() {
  return window.location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("rectangle-btn");
  btn.addEventListener("click", function () {
    if (getCurrentURL() === "about.html") {
      window.location.href = "blog.html";

    } else if (getCurrentURL() === "blog.html") {
      window.location.href = "yahoo.html";

    } else if (getCurrentURL() === "yahoo.html") {
      window.location.href = "home.html";

    } else if (getCurrentURL() === "home.html") {
      window.location.href = "../../index.html";
    }
  });
});
