//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-js-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "kk164eN5I4phRNvfmhZVOjlLu",
    "consumerSecret": "QzYuK0NHZqfTmoirTt2sgYIq1UHsrpCrtH5f5F9QL2yWXIbYev",
    "accessToken": "967515264085577729-QQqvChTfth6nrHYfRzNQxTVORFxigte",
    "accessTokenSecret": "kvXdUr13Qg0Icsp9alP4w16nzOF9vuhyfgjVzHYptJfjg"
}

var twitter = new Twitter(config);

//Example calls

twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

twitter.getMentionsTimeline({ count: '10'}, error, success);

twitter.getHomeTimeline({ count: '10'}, error, success);

twitter.getReTweetsOfMe({ count: '10'}, error, success);

twitter.getTweet({ id: '1111111111'}, error, success);




