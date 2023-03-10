console.log('Mi Server');

// Importar Express
const express = require('express');

// Crear instancia de la aplicación Express
const app = express();

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ENDPOINTS

app.get('/', (req, res) => {
    res.render('contacto', {suma: 1 + 1});
});

app.post('/enviar-formulario', (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let mensaje = req.body.mensaje;
    // console.log(nombre);
    // console.log(email);
    // guardar nombre en base de datos
    // res.send(`Hola ${nombre}, pronto te escribiré a tu email: ${email}`);
    res.render('saludo', {nombre: nombre, email: email, mensaje: mensaje});
});

app.get('/dias', (req, res) => {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    res.render('dias', {dias});
});


// Escuchar peticiones en el puerto especificado
app.listen(PORT, () => {   console.log(`Servidor iniciado en puerto ${PORT}`); });