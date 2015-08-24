require(['core/util'], function(util) {
    var message = util.composeGreeting();
    document.querySelector('#message').innerHTML = message;
});