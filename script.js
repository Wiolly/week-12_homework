const nameInput = document.querySelector(".user-name");
const avatarInput = document.querySelector(".user-avatar");
const button = document.querySelector(".button");
const textarea = document.querySelector(".textarea");

button.addEventListener("click", checkSpam);
function checkSpam(str) {
  return str.replace(/viagra|xxx/gi, "***");
}

button.addEventListener("click", user);
function user() {
  nameInput.value.trim();
  nameInput.value.charAt(0).toUpperCase + nameInput.value.slice(1).toLowerCase;
}

button.addEventListener("click", send);
function send() {
  const userName = document.createElement("userName");
  userName.innerText = nameInput.value;
  const nameContainer = document.querySelector("#your-name");
  nameContainer.appendChild(userName);

  const userAvatar = document.createElement("userAvatar");
  userAvatar.src = avatarInput.value;
  const container = document.querySelector("#image-container");
  container.appendChild(userAvatar);

  const comment = document.createElement("comment");
  comment.innerText = textarea.value;
  const commentContainer = document.querySelector("#chat");
  commentContainer.appendChild(comment);
}
