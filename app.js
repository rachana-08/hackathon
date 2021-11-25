const express = require('express');
const app = express();
const path = require('path')

const handlebars = require('express-handlebars');
const port = process.env.PORT||3000;

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', handlebars.engine({defaultLayout:'layout'}));
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'lib')));

//home route
app.get('/',(req,res)=>{
    res.render('base');
})

app.listen(port, () =>{
    console.log("server is listening on port ",port);
});