const express = require("express");
const cors = require("cors");
const path = require("path"); // Ajoutez cela pour manipuler les chemins

const router = require("./routes");

const app = express();
app.use(cors());
const port = 8080;

// Servir les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Utiliser le routeur défini dans 'routes'
app.use(router);

app.listen(port, () => console.log(`Magic happens on port ${port}`));
