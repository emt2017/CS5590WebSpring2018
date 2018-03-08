var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'kk164eN5I4phRNvfmhZVOjlLu',
    consumer_secret: 'QzYuK0NHZqfTmoirTt2sgYIq1UHsrpCrtH5f5F9QL2yWXIbYev',
    access_token_key: '967515264085577729-QQqvChTfth6nrHYfRzNQxTVORFxigte',
    access_token_secret: 'kvXdUr13Qg0Icsp9alP4w16nzOF9vuhyfgjVzHYptJfjg'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {

    }
});

client.get('friends/list', params, function(error, friends, response){
    if (error)
        throw error;
    var account = 'nodejs';
    key = '"name":"' + account + '","parent": "US",children';

    var friendList =[] ;
    for(i=0;i<friends.users.length;i++){
        var data = {
            name: friends.users[i].name
        }
        friendList.push(data)
    }
    console.log(friends.users[4].name)
    console.log(friendList)

    var json = JSON.stringify({name: account ,parent: 'US',children:friendList});

    var fs = require('fs');
    fs.writeFile('treeData.json', json, function(err, json){
       if(err)
           throw err;

    });

});
