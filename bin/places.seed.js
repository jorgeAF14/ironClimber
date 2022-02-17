require("dotenv/config");
// Un archivo de seeds debe ejecutarse independientemete: node bin/seeds.js
const mongoose = require('mongoose');
const Place = require('../models/Place.model');

// OJO --> MISMA BASE DE DATOS PRESENTE EN EL .env
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://ironclimber:ironclimber@cluster0.5aunx.mongodb.net/ironClimber-0122';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });


// To insert in "bin/places.seed.js"
const places = [
    {
        name: "Boulder Madrid - Rocódromo de Escalada en Madrid",
        description: "Unas instalaciones de escalada con 400 m2 escalables con zonas de altura máxima de 5 metros. El rocódromo se divide en dos salas con más de 7.000 presas, donde el plafón juega con diferentes formas y niveles de inclinación, ofreciendo diversos grados de dificultad que harán las delicias de escaladores principiantes y expertos.",
        location: {
            type: "Point",
            coordinates: ["40.3913241", "-3.6696253"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/boulder-madrid-escalada-1_vr4ces.jpg"],
        level: "5",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo Félix Rubio",
        description: "El rocódromo Félix Rubio se ha levantado en uno de los cuatro frontones de los que dispone el CDM Félix Rubio. La instalación presenta condiciones de exterior, pero con una cubierta para proteger la actividad de la lluvia y del sol directo",
        location: {
            type: "Point",
            coordinates: ["40.35693930000001", "-3.6921926"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/felix-rubio-1_rhwp5h.jpg"],
        level: "6a",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo Urban Monkey - Madrid",
        description: "Local con más de 700 m² repartidos en dos plantas con más de 450 m² escalables, Moon board, System Board, campus, gimnasio, parking de bicicletas, zona chill out y mucho más… Ven a conocer el mejor rocódromo del centro de Madrid.",
        location: {
            type: "Point",
            coordinates: ["40.4016191", "-3.6975305"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645125874/ironclimber/urban-monkey-madrid-1_d6ygkh.jpg"],
        level: "7a",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "BOULDER ZONE MADRID / RETIRO - Escalada Madrid",
        description: "El rocódromo Boulder Zone Retiro nos va a permitir escalar y entrenar en pleno centro de Madrid de forma cómoda y muy completa. Permite la práctica de escalada en pleno barrio Salamanca, junto a la biblioteca pública Manuel Alvar. Instalación de 500 metros cuadrados, todos ellos dedicados a la escalada.",
        location: {
            type: "Point",
            coordinates: ["40.434493", "-3.668765"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/boulder-zone-madrid-1_mwpvfk.jpg","https://res.cloudinary.com/andredoc/image/upload/v1645042370/ironclimber/boulder-zone-madrid-2_jnwrkb.jpg"],
        level: "8c",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Roc 30. Rocodromo \\ Centro de escalada",
        description: "La instalación del rocódromo ROC 30 pertenece a la Junta de Distrito de Carabanchel del Ayuntamiento de Madrid y está gestionada por la Federación Madrileña de Montañismo a través de la Escuela Madrileña de Alta Montaña.",
        location: {
            type: "Point",
            coordinates: ["40.399208", "-3.7188064"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041176/ironclimber/roc-30-1_brkmkd.jpg"],
        level: "7b",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Monkey Fingers",
        description: "Monkey Fingers es un rocódromo autogestionado, autofinanciado y autoorganizado situado en Carabanchel, en el sur de Madrid. Está constituido por unas 70 personas agrupadas en torno a un proyecto deportivo y social común: un rocódromo que en realidad es mucho más que un simple lugar donde practicar y mejorar.",
        location: {
            type: "Point",
            coordinates: ["40.3641161", "-3.7542472"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645042497/ironclimber/monkey-fingers-1_sonbjt.jpg"],
        level: "6a",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo Complutense",
        description: "El rocódromo de la Universidad Complutense se encuentra a 5 - 10 minutos andando desde el metro de Ciudad Universitaria. Aunque la instalación está destinada, principalmente, para el uso de los universitarios, también se permite la entrada al público general.",
        location: {
            type: "Point",
            coordinates: ["40.4391927", "-3.7274939"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645042471/ironclimber/complutense-1_znanvx.jpg"],
        level: "5",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rocodromo Peñuelas",
        description: "Rocodromo Peñuelas es una empresa de Gimnasio con rocódromo ubicada en Madrid. La dirección registrada de la entidad es C. de Arganda, 7, 6, 28005 Madrid. Se proporciona información más detallada en las secciones correspondientes junto con las preguntas frecuentes.",
        location: {
            type: "Point",
            coordinates: ["40.4010852", "-3.70672"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/penuelas-1_iozsd6.jpg"],
        level: "7b+",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "Rocodromo De Arturo Barea",
        description: "Rocodromo De Arturo Barea es una empresa de Gimnasio con rocódromo ubicada en Madrid. La dirección registrada de la entidad es Pl. de Arturo Barea, 28012 Madrid.",
        location: {
            type: "Point",
            coordinates: ["40.4084733", "-3.7034249"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/arturo-barea-1_xva4d7.jpg"],
        level: "6a+",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "Rocodromo Sainz de Baranda",
        description: "Rocódromo urbano de Sainz de Baranda está cerca de Torrespaña, conocida popularmente como «El Pirulí», es la torre de telecomunicaciones de Madrid. Se encuentra en la confluencia de la calle de O’Donnell con la calle del Alcalde Sainz de Baranda y próxima a la autovía de circunvalación M-30.",
        location: {
            type: "Point",
            coordinates: ["40.4189431", "-3.6648668"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645042527/ironclimber/sainz-de-baranda-1_cyjwcz.jpg"],
        level: "6b",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo Espacio Acción",
        description: "Rocódromo Espacio acción, en pleno centro de Madrid, y que incluye entre sus instalaciones el rocódromo cubierto más grande de España (1.600 m2). Inaugurado en 2002, te ofrece tres rocódromos independientes dentro del mismo edificio exclusivo, 100% climatizado en invierno y verano y Wi-Fi gratis",
        location: {
            type: "Point",
            coordinates: ["40.4318591", "-3.654194099999999"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/espacio-accion-1_xciioz.jpg"],
        level: "9a",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "Sharma Climbing Madrid",
        description: "Sharma Climbing Madrid se encuentra en la calle Julián Camarillo, 55 en el distrito de San Blas-Canillejas, Madrid.Se puede llegar en metro hasta la parada de Suanzes o Torre Arias, ambas en la línea 5, después tendremos que andar unos 5 – 10 min. hasta llegar al rocódromo.",
        location: {
            type: "Point",
            coordinates: ["40.4377578", "-3.6201507"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041176/ironclimber/sharma-climbing-madrid-1_axnmv9.jpg"],
        level: "8c",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rockomadrid",
        description: "El rocódromo rockOMadrid dispone de unas instalaciones polivalentes con más de 500 m2 dedicados a la escalada y actividades complementarias. Contamos con dos salas de escalada, 300 m2 escalables y más de 6.000 presas.",
        location: {
            type: "Point",
            coordinates: ["40.4653448", "-3.6959248"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041176/ironclimber/rockomadrid-1_axn5yh.png"],
        level: "9b",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rock Climbing",
        description: "A unas 50 millas al norte de Madrid hay 2 excelentes zonas de escalada en roca; las losas de granito de La Pedriza; y la piedra caliza empinada en Patones. Más al oeste de Madrid se encuentran las excelentes torres de granito de la sierra de Gredos, donde hay muchas rutas de varios largos.",
        location: {
            type: "Point",
            coordinates: ["40.4359793", "-3.6998316"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645042512/ironclimber/rock-climbing-1_jeprk0.jpg"],
        level: "8b+",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo pasarela Parque Tierno Galván",
        description: "Rocódromo pasarela Parque Tierno Galván es una empresa de Escalada ubicada en Madrid. La dirección registrada de la entidad es Unnamed Road,28045, 28045, Madrid. S",
        location: {
            type: "Point",
            coordinates: ["40.3937368", "-3.6869512"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/pasarela-tierno-galvan-1_stvhzn.jpg"],
        level: "9c",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Zona de Escalada (rocódromo y búlder)",
        description: "Con la explosión del deporte del boulder la apertura de zonas ha aumentado enormemente en la última década. Para esta actividad, la zona conformada por Madrid, Toledo y la Sierra de Gredos ofrece un escenario privilegiado, con la mayoría de bloques sobre granito y posibilidades infinitas. Un censo de todas las zonas es imposible.",
        location: {
            type: "Point",
            coordinates: ["40.36474399999999", "-3.6229449"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041176/ironclimber/zona-de-escalada-1_qbq9yu.jpg"],
        level: "7c+",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo Escalada Planetario",
        description: "El rocódromo del Planetario se encuentra en el Parque de Tierno Galván, justo detrás del metro de Arganzuela-Planetario. Existen varios sectores de distinta dificultad: 2 techos muy desplomados, 2 paredes largas de travesías y una pared completamente vertical, de unos 12 metros, para escalar con cuerda. A parte de esto encontramos una pared bautizada como \"Organiza tu rabia\" que dispone de varias vías totalmente verticales de unos 5 metros.",
        location: {
            type: "Point",
            coordinates: ["40.3936843", "-3.687612999999999"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/escalada-planetario-1_jvllj1.jpg"],
        level: "8b",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo-Boulder puente Almendrales",
        description: "Es un túnel cubierto de presas muy cerca del Hospital Doce de Octubre. No dispone de colchonetas y al ser un techo, no es adecuado para los principiantes, ya que requiere de cierta técnica. Puedes encontrar presas de madera y de resina. Se encuentra en el camino de Perales número 8 y su horario es libre.",
        location: {
            type: "Point",
            coordinates: ["40.38229949999999", "-3.6939634"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/boulder-puente-almendrales-1_chsftb.jpg"],
        level: "5+",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "Rocódromo Parque María Emperatriz de Austria",
        description: "Rocódromo Parque María Emperatriz de Austria es una empresa de Escalada ubicada en Madrid. La dirección registrada de la entidad es C. Carranque, 16, 28025 Madrid. Se proporciona información más detallada en las secciones correspondientes junto con las preguntas frecuentes.",
        location: {
            type: "Point",
            coordinates: ["40.3755332", "-3.7279892"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041175/ironclimber/maria-emperatriz-austria-1_cqn8tc.jpg"],
        level: "6a+",
        material: "",
        access: "",
        parking: false,
        type: "Rocodromo"
    },
    {
        name: "The Climb - Centro Escalada Madrid",
        description: "The Climb es un centro especializado en escalada en Madrid. Con una superficie de 1300 m2 escalables, tienda y cafetería, The Climb ofrece todo tipo de servicios relacionados con la escalada. Cuenta con una instalación con más de 180 Bloques para todos los niveles que se equipan de forma continua, zonas de escalada deportiva con vías de hasta 10m de altura",
        location: {
            type: "Point",
            coordinates: ["40.3468025", "-3.8010128"]
        },
        images: ["https://res.cloudinary.com/andredoc/image/upload/v1645041176/ironclimber/the-climb-1_pqppod.jpg"],
        level: "9c",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    }
];

Place.create(places)
    .then(placesFromDB => {
        console.log(`Created ${placesFromDB.length} places`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating places from the DB: ${err}`));