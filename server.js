const express = require('express');

const app = express();

const port = 3000;

const friends = [
    {
        id : 0,
        name : 'Shivam Jain'
    },
    {
        id : 1,
        name : 'Shivam Kumar'
    },
    {
        id : 2,
        name : 'Gopa Jeswanth'
    },
    {
        id : 3,
        name : 'Vishal Singh'
    },
    {
        id : 4,
        name : 'Himanshu Saha'
    }
]

app.get('/' , (req,res) => {
    res.send('Hello !');
})

app.get('/friends',(req,res) => {
    res.json(friends);
})

app.get('/friends/:friendID',(req,res) => {
    const friendID = req.params.friendID;
    const friend = friends[Number(friendID)];
    if(friend){
        res.json(friend);
    }
    else{
        res.status(404).json({
            error : "Friend Doesn't Exists!",
        });
    }
})

app.get('/messages',(req,res) => {
    res.send('<ul><li> Hello Jain! How are you ? </li></ul>');
})

app.post('/messages',(req,res) => {
    console.log('Updating messages...');
})

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
})