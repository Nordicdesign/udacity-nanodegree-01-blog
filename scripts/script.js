
let openMenu = document.querySelector('#small-menu')
let closeMenu = document.querySelector('#close-menu')
let wrapper = document.querySelector('.wrapper')

document.onreadystatechange = function(e) {
    if (document.readyState === "interactive") {

        // click event for menu opening
        openMenu.addEventListener('click', function(e) {
          e.preventDefault();
          wrapper.classList.toggle('menu-visible');
        })

        // click event for menu closing
        closeMenu.addEventListener('click', function(e) {
          e.preventDefault();
          wrapper.classList.toggle('menu-visible');
        })
    }
};
