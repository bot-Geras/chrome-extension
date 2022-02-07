let myLeads = [];
const inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn");
const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

// localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage)

btn.addEventListener("click", function () {
  // console.log("i was clicked")
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // console.log(myLeads)

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  console.log(localStorage.getItem(myLeads));
  renderleads();
});

function renderleads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
        <a target= '_blank' href= '${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>`;
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
