export function toggleMenu(event) {
    event.preventDefault();
    const kkList = document.getElementById("kkListContainer");
    kkList.classList.toggle("visible");
  }

  export function toggleOverlay(event) {
    event.preventDefault();
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("visible");
  }