window.addEventListener("load",e=>{
    let socket = io();

    let messages = document.querySelector('#messages');
    let form = document.querySelector('#form');
    let input = document.querySelector('#input');

    console.log("Script vinculado adecuadamente");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });

    socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });
});