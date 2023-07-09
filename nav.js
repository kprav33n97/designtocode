// Execute code after page load 
window.onload = function navMenu() {
    // toggle btn
    let toggle = document.querySelector("#nav .toggle_btn")
    let collapse = document.querySelector("#nav .collapse")
    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active_navbar')
    })
}