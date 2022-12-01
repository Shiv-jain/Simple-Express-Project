const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const friendsRouter = require('./routers/friends.router');
const messagesRouter = require('./routers/messages.router');

app.set('view engine' , 'hbs');
app.set('views',path.join(__dirname,'views'));

app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use('/site',express.static(path.join(__dirname ,'public')));
app.use(express.json());

app.get('/' , (req,res) => {
    res.render('index',{
        title : 'Friend\'s are clever',
        caption : 'Let\'s go Skiing!'
    })
})

app.use('/friends',friendsRouter);

app.use('/messages',messagesRouter);

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
})