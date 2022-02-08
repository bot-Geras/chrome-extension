let myLeads = [];
const inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


tabBtn.addEventListener("click", function () {

  // grab the URL of the current tab
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {})
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })

})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a target= '_blank' href= '${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}

// clear localStorage, myLeads, and the DOM

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

btn.addEventListener("click", function () {
  // console.log("i was clicked")
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // console.log(myLeads)

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  console.log(localStorage.getItem(myLeads));
  render(myLeads);
});
