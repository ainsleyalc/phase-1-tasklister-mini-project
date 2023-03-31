const textBox = document.getElementById("new-task-description")
const taskForm = document.getElementById("create-task-form")
const ulList = document.getElementById("tasks")



document.addEventListener("DOMContentLoaded", () => {
  // your code here



taskForm.addEventListener("submit",(event) =>{
  event.preventDefault()
const newLi = document.createElement("li")
 let buttonx = document.createElement("button")
  newLi.innerText = textBox.value
  ulList.appendChild(newLi)
  taskForm.reset()
 
buttonx.textContent = "X"
newLi.appendChild(buttonx)
buttonx.addEventListener("click",()=> {
  newLi.remove()
})


})






































  
});
