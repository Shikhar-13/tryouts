const utilities = {
    log: function(message){
        console.log(`[LOG]: ${message}`);
    },
    warn: function(message){console.warn(`[WARN]: ${message}`);},

};

const app = Object.create(utilities);
app.name = 'MyApp';
app.log('This is a log message');
app.warn('This is a warning message');