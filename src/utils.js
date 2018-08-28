export function toggleMenu(event) {
    event.preventDefault();
    const kkList = document.getElementById("kkListContainer");
    kkList.classList.toggle("visible");
  }