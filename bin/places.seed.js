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
        description: "",
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
        description: "",
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
        description: "",
        location: {
            type: "Point",
            coordinates: ["40.4016191", "-3.6975305"]
        },
        images: ["https://lh5.googleusercontent.com/p/AF1QipMKUar8S5l7E5MBXVV63i838Ca0NUstzAjoyiaC=w312-h192-p-k-no"],
        level: "7a",
        material: "",
        access: "",
        parking: true,
        type: "Rocodromo"
    },
    {
        name: "BOULDER ZONE MADRID / RETIRO - Escalada Madrid",
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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