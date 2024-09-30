const title = "Panadería Luzma";
const email = "luzmarinaamaya362@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en los productos de ${title} y me gustaría recibir más información. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "+573138819929";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Panadería Luzma, nos especializamos en la venta de una variedad de productos de primera calidad, accesibles a todo el público. Desde galletas hasta pan, matecadas, donas y otros deliciosos productos, ofrecemos opciones para todos los gustos y ocasiones.",
        description2: "Nuestra panadería se enorgullece de ofrecer productos asequibles y de excelente calidad. Cada artículo es elaborado con cuidado para garantizar una experiencia deliciosa y satisfactoria en cada bocado. Visítanos y disfruta de nuestras especialidades hechas con dedicación y pasión.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Calidad y sabor para todos",
            p2: "Productos artesanales a precios accesibles",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/luzmarina.amaya.9674?mibextid=ZbWKwL",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
