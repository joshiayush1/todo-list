const btn = document.getElementById("btnAdd");
const input = document.getElementById("ipBox");

let tasksadditon = () => {
  btn.addEventListener("click", () => {
    let inputTask = input.value;

    if (inputTask === "") {
      alert("Wrtie a task to add !");
    } else {
      let newLi = document.createElement("li");
      newLi.innerHTML = `<img id="unchecked" src="images/unchecked.png" alt="" />
            ${inputTask}
            <img id="cross" src="images/todo-cross.svg" alt="" />
            `;
      document.querySelector(".tasks ul").appendChild(newLi);
      input.value = "";
    }
  });
};

tasksadditon();
let taskLineClicked = () => {
  document.querySelector(".tasks ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.style.textDecoration = "line-through";
    } else if (e.target.id === "cross") {
      e.target.closest("li").remove();
    }
  });
};

taskLineClicked();