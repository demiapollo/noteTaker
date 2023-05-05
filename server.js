//express and port
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

//middleware parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//check port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);

