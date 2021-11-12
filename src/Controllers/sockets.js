let socket = function(io){
    io.on('connection', (socket) => {

        console.log('a user connected');
        
        //Evento de mensaje de chat
        socket.on('chat message', (msg) => {
            // console.log('message: ' + msg); //Recepción de mensaje
            io.emit('chat message', msg); // Eco del mensaje a todos los clientes
        });

        //Evento de desconexión
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        //Evento de controller
        socket.on("contoller",(data)=>{
            console.log(data);
        })
    });
}
module.exports = socket;