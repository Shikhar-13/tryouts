const logger = {
    log : function(message){
        console.log(`[LOG]: ${message}`);
    }
}
const currentLog = Object.create(loger);   
currentLog.log('This is a log message');
currentLog = function(){
    console.log(`[LOG]: ${message}`);

}
currentLog.log('This is a log message');