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
        images: ["https://lh5.googleusercontent.com/p/AF1QipM5_T3KkVduDRBjvVCaapmZuRL2bQlrE_Q_IXhp=w312-h192-p-k-no"],
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
        images: ["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=OWAmXspOXcl8HGDpVgvzcA&cb_client=search.gws-prod.gps&yaw=183.39185&pitch=0&thumbfov=100&w=312&h=192"],
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
        name: "BOULDER ZONE MADRI / RETIRO - Escalada Madrid",
        description: "",
        location: {
            type: "Point",
            coordinates: ["40.434493", "-3.668765"]
        },
        images: ["https://lh5.googleusercontent.com/p/AF1QipNIJNbipXzH5KyGxp4o7gUWKKdkGF1Eur6K97q1=w312-h192-p-k-no","https://lh5.googleusercontent.com/p/AF1QipMKUar8S5l7E5MBXVV63i838Ca0NUstzAjoyiaC=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipNAi_yADlOqeMqlLpocWtb80M8TGJHGp43Jllqp=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipPvYJld-rKjSw2qsMRhx_f6ZSnNa6GqH6oxo_BB=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipPPb5VBFjBZhnlF94ocQWPA7c5lvyjXg2KhSyfC=w312-h192-p-k-no"],
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
        images: ["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=17a0zcRoSorlODTUX465Cw&cb_client=search.gws-prod.gps&yaw=251.53117&pitch=0&thumbfov=100&w=312&h=192"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipNcKtDC4v2JhtuPyOP4rukCyiDsfG5VjrkWVG8n=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipM6B6QkgUNs7IqdULrbz-vr1ax9Eq9Kw31xtyed=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipPmJzOJlwmZNgg2C-_Hmgzf6C01-7xUQBRLP0Nn=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipNunnEkpszizJd6UEerGHdzacrNB_fJvbg-w7bN=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipOXGKoCwFga-E0auJsH6L7ZLMhkmklUT2VfiYF8=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipM7UJ_wsSaEcGTr1GhjpnvcH4edSQlpd-Dut6vY=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipOiJBwpEvxetfZuElHLZ-ZRUeoiqRClL6MN5M4a=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipNCZt0H3_m-pf9J_DfAtM4-EtylfXE6wC4OhEP3=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipNBU6jKoNE-BlVtNRBuUpcmMsP7QL7EUSJBhyno=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipPx6VBBtaUaaIGRS_mop994mN8_xuJdovgvfTvD=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipMF-ksjjnoeM5_F0qcCjnkTfhN7nNhVI0QSsWb7=w312-h192-p-k-no"],
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
        images: ["https://lh5.googleusercontent.com/p/AF1QipOJ0B8hi46bV0KuNxRF8NB9OgHm_SVInoNn5zqR=w312-h192-p-k-no"],
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