const button = document.getElementById("randomButton");

function getRandomPosition() {
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  return { x, y };
}

function moveButton() {
  const { x, y } = getRandomPosition();
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

button.addEventListener("mouseover", () => {
  if (Math.random() < 0.5) {
    moveButton();
  }
});

button.addEventListener("click", () => {
  moveButton();
});
