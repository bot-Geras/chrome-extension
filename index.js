
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("btn")
const ulEl = document.getElementById("ul-el")

btn.addEventListener("click", function(){
    // console.log("i was clicked")
    myLeads.push(inputEl.value)
    // console.log(myLeads)

})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

