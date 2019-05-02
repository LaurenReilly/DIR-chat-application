const express = require('express');
const app = express();
//making some weird port so it doesn't conflic with our other 3000 port apps
app.listen(31337, () => {
    console.log("Yo dingus!")
});