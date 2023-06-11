const input = document.querySelector(".input");
const button = document.querySelector(".button");
const textarea = document.querySelector(".textarea");

button.addEventListener("click", send);

function send() {
  const userName = document.createElement("userName");
  userName.innerText = input.value;
  const nameContainer = document.querySelector("#your-name");
  nameContainer.appendChild(userName);
}

button.addEventListener("click", user);
function user() {
  input.value.trim();
  input.value.charAt(0).toUpperCase + input.value.slice(1).toLowerCase;
  input.value = " ";
}

button.addEventListener("click", avatar);
function avatar() {
  const img = document.createElement("img");
  img.src = "path/to/image.jpg";
  const container = document.querySelector("#image-container");
  container.append(img);
}

button.addEventListener("click", addChat);
function addChat() {
  const comment = document.createElement("comment");
  comment.innerText = textarea.value;
  const commentContainer = document.querySelector("#chat");
  commentContainer.appendChild(comment);
}

button.addEventListener("click", checkSpam);

function checkSpam(str) {
  const spam = textarea.replace(/viagra/gi, "***");
  const spam2 = textarea.replace(/XXX/gi, "***");
  return spam || spam2;
}
