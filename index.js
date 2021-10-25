const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Wow, Welcome to node');
})


const users = [
    {id: 0, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888'},
    {id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '01788888888'},
    {id: 2, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888'},
    {id: 3, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888'},
    {id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888'},
    {id: 5, name: 'Sorin', email: 'Sorifa@gmail.com', phone: '01788888888'}
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    res.send(users);
})

//app.method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruites', (req, res) => {
    res.send(['mango', 'banana', 'apple']);
})

app.get('/fruites/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummay tok marka fazli');
})

app.listen(port, () =>{
    console.log('listing to port', port);
})