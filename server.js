console.log('Mi Server');

// Importar Express
const express = require('express');

// Crear instancia de la aplicación Express
const app = express();

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 3000

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ENDPOINTS

// app.get('/', (req, res) => {
//     res.render('contacto');
// });

app.post('/enviar-formulario', (req, res) => {
    const  nombre = req.body.nombre;
    const  email = req.body.email;
    const  mensaje = req.body.mensaje;
    // console.log(nombre);
    // console.log(email);
    // guardar nombre en base de datos
    // res.send(`Hola ${nombre}, pronto te escribiré a tu email: ${email}`);
    res.render('saludo', {nombre: nombre, email: email, mensaje: mensaje});
});

app.post('/api/enviar-formulario', (req, res) => {
    const  nombre = req.body.nombre;
    const  email = req.body.email;
    const  mensaje = req.body.mensaje;
    const saludo = `Hola ${nombre}, pronto te escribiré a tu email: ${email}`;
    res.json({ saludo, mensaje});
});


// Escuchar peticiones en el puerto especificado
app.listen(PORT, () => {   console.log(`Servidor iniciado en puerto ${PORT}`); });