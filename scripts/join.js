const joinDiv = document.querySelector(".join-submit-btn");
const submitBtn = document.createElement("button");
joinDiv.appendChild(submitBtn);
submitBtn.textContent = "Join";
submitBtn.setAttribute("class", "join");
submitBtn.setAttribute("type", "submit");

submitBtn.addEventListener("click", function (event) {
  if (
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost"
  ) {
    event.preventDefault(); // only block POST locally
    window.location.href = "thanksjoin.html";
  }
});


