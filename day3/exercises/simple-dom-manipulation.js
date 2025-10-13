const btn = document.getElementById("clickMe");
btn.addEventListener("click", () => {
  let title = document.getElementById("title");
  title.textContent = "You clicked me!";
  title.style.color = "pink";
  title.style.fontSize = "60px";
});

const paragraph = document.getElementById("paragraph");
paragraph.onmouseover = () => {
  paragraph.style.color = "blue";
};

paragraph.onclick = () => {
  paragraph.hidden = true;
}