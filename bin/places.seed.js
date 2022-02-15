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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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
        image: [],
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