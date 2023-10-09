//your JS code here. If required.
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", function() {
  modal.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", function() {
  modal.classList.remove("modal-open");
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("modal-open");
  }
});