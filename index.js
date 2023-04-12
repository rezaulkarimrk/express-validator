const express = require("express");
const { body, validationResult } = require('express-validator');
const userRoutes = require("./routes/user.routes");

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", userRoutes);

const PORT = 3001;



app.listen(PORT, () => {
    console.log(`server is runnig at http://localhost:${PORT}`);
});



app.get("/test", (req, res) => {
    res.status(200).send('testing the server');
});


