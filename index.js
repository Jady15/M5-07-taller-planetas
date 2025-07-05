const cowsay = require('cowsay');
const planetas = require('./planetas');

planetas.forEach(planeta => {
    const mensaje = `¡Planeta ${planeta.nombre} descubierto!\nDescripción: ${planeta.descripcion}\nDescubierto en: ${planeta.descubiertoEn}\nCoordenadas: (${planeta.coordenadasEstelares.x}, ${planeta.coordenadasEstelares.y}, ${planeta.coordenadasEstelares.z})`;

    console.log(cowsay.say({
        text: mensaje,
        e: "oO",
        T: "U "
    }));
});

