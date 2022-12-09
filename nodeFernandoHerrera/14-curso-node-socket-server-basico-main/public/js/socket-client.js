
// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


//es para tener coneccion con el cliente, tiene que estar integrado en un scrip del lado del cliente
//script => ./socket.io/socket.io.js : viene de index.html  ->  es io()
const socket = io();


//on : para escuchar eventos, connect es un evento predeterminado: se dispara solo cuando hay una conection con el servidor
socket.on('connect', () => {
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';

});
//este evento se activa cuando nos desconectamos del servidor
socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});

//payload: preferible que sea de type : primitivos o literales
socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})

//cada vez que haga click en el button se activa
btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit( 'enviar-mensaje', payload, ( id ) => {//emit: emite un evento => envia mensaje al server
        console.log('Desde el server', id );
    });

});