const nameInput = document.querySelector(".user-name");
const avatarInput = document.querySelector(".user-avatar");
const button = document.querySelector(".button");
const textarea = document.querySelector(".textarea");

function checkSpam(str) {
  return str.replace(/viagra|xxx/gi, "***");
}

function user() {
  const userName = nameInput.value.trim();
  return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
}

button.addEventListener("click", send);
function send() {
  const userName = document.createElement("userName");
  userName.innerText = user(nameInput.value);
  const nameContainer = document.querySelector("#your-name");
  nameContainer.appendChild(userName);

  const userAvatar = document.createElement("userAvatar");
  userAvatar.src = avatarInput.value;
  const container = document.querySelector("#image-container");
  container.appendChild(userAvatar);

  const comment = document.createElement("comment");
  comment.innerText = checkSpam(textarea.value);
  const commentContainer = document.querySelector("#chat");
  commentContainer.appendChild(comment);
}
