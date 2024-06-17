const menu_button = document.getElementsByClassName("menu_button")[0];
const menu_links = document.getElementsByClassName("menu_links")[0];
const menu = document.getElementsByClassName("menu")[0];

function toggle_menu(event){

    if(event.type == 'touchstart') event.preventDefault();

    menu_links.classList.toggle('active');
    menu.classList.toggle('active');
}

menu_button.addEventListener('click', toggle_menu);
menu_button.addEventListener('touchstart', toggle_menu);