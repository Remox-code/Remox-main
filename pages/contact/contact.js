const tabs = document.querySelectorAll(".tab")
const forms = document.querySelectorAll(".form")

tabs.forEach(tab => {

tab.onclick = () => {

tabs.forEach(t => t.classList.remove("active"))
forms.forEach(f => f.classList.remove("active"))

tab.classList.add("active")

const id = tab.dataset.tab

document.getElementById(id).classList.add("active")

}

})
