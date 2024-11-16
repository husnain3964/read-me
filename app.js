let userTitle = document.querySelector(".userTitle");
let userDes = document.querySelector(".userDes");
let addBtn = document.querySelector(".add");
// //////////////////////

// let page= document.querySelector('.page')
// addBtn.addEventListener("click", () => {
//   let box = document.createElement("div");
//   box.classList.add("noteBox");
//   box.innerHTML = `<div class="titleDiv">
// <h1 class="title">${userTitle.value}</h1>
// <button class="btn">+</button>
// </div>
// <p class="description">
// ${userDes.value}
// </p>`;

// page.appendChild(box)
// });


btn = document.querySelector(".btn");
 title = document.querySelector(".title");
 description = document.querySelector(".description");

btn.addEventListener("click", () => {
  if (btn.textContent === "+") {
    description.style.display = "block";
    btn.innerHTML = "-";
  } else {
    description.style.display = "none";
    btn.innerHTML = "+";
  }
});
