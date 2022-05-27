const express = require("express");
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'ejs');

const countriesRoutes = require("./routes/countries");
app.use('/countries', countriesRoutes);


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

