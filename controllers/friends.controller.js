const friends = require('../models/friends.model');

function getFriends(req,res){
    res.json(friends);
}

function postFriends(req,res){
    if(!req.body.name){
        return res.status(400).json({
            error : 'Missing Friend Name'
        })
    }

    const newFriend = {
        name : req.body.name,
        id : friends.length
    }
    friends.push(newFriend);
    res.json(newFriend);
}

function getFriendID(req,res){
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
}

module.exports = {
    getFriends,postFriends,getFriendID
}