document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })    

function change(){
    var image = document.getElementById('card');
    image.style.backgroundImage = "url(assets/vakantiefoto1.jpg)"
  }

function change1(){
    var image = document.getElementById('card');
    image.style.backgroundImage = "url(assets/alkmaar.jpg)"
  }

function change2(){
    var image = document.getElementById('card');
    image.style.backgroundImage = "url(assets/mountainbiken.jpg)"
  }

function change3(){
    var image = document.getElementById('card');
    image.style.backgroundImage = "url(assets/koken.jpg)"
  }

function change4(){
    var image = document.getElementById('card');
    image.style.backgroundImage = "url(assets/front-end.jpg)"
  }
