let input = document.querySelector("input");

input.addEventListener("keypress", event =>{
    if(event.keycode <=52 || event.keycode >=91) {
        event.defaultPrevented()
    }
});
