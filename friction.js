function drop_down() {
    var button = document.getElementById('button1')
    var menu_down = document.getElementById('ul1')

if (window.innerWidth < 767) {
        if (menu_down.style.height === '230px' ) {
            //menu_down.style.display = 'inline-block' 
            menu_down.style.transition = 'all 0.6s ease-in-out'
            menu_down.style.height = '0px';
        }
        
    else {
            menu_down.style.transition = 'all 0.6s ease-in-out'
            menu_down.style.display = 'inline-block'
            menu_down.style.height = '230px';
        }

    }

}