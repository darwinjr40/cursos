

//socket: es el cliente que esta conectado, pueden haber miles de clientes conectados
const socketController = (socket) => {
    
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 123456789;
        callback( id );

        socket.broadcast.emit('enviar-mensaje', payload );
        // broadcast : manda el mensaje a todos excepto el que envio
    })

}



module.exports = {
    socketController
}

