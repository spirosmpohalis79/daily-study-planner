const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const counter = document.querySelector("#counter");

let completed = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  const item = document.createElement("li");
  item.textContent = taskText;
  item.addEventListener("click", () => {
    item.classList.toggle("done");
    completed += item.classList.contains("done") ? 1 : -1;
    counter.textContent = `Ολοκληρωμένες εργασίες: ${completed}`;
  });
  list.appendChild(item);
  input.value = "";
  input.focus();
});
