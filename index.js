let feature = document.getElementById("feature");
let dropdowns = document.getElementById("dropdown")
let dropdownMenu = document.getElementById("dropdown2")
let company = document.getElementById("company");

company.addEventListener('click' , () => {
    dropdownMenu.classList.toggle('opens');
})


feature.addEventListener('click' , () => {
    dropdowns.classList.toggle('open')
})