// Toggle & Responsive nav 

const navSlide = () => {
    // buat manggil code
    const burger = document.querySelector(".burger")
    const navlists = document.querySelector("nav")

    burger.addEventListener ("click", () =>{
        // "classList" buat nambah class ketika di pencet
        navlists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
}

navSlide();


// bikin klo ngisi formulir ilang (yang udah di tulis)!

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")) {
        form.reset()
    }
}