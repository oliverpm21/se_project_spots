const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const addPostBtn = document.querySelector(".profile__add-button");
const addPostModal = document.querySelector("#new-post-modal");
const addPostCloseBtn = addPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

addPostBtn.addEventListener("click", function () {
  addPostModal.classList.add("modal_is-opened");
});

addPostCloseBtn.addEventListener("click", function () {
  addPostModal.classList.remove("modal_is-opened");
});
