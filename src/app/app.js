// Custom App JS
let testvar = 444;
 //$('#ui-bar').remove();
// $(document.head).find('#style-ui-bar').remove();

//this sets the back button to off
//Config.history.maxStates = 1;
//this removes newline or line breaks
//Config.debug = false; // forcibly enable test mode
Config.passages.nobr = true;

//This creates a date variable
var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
var curTime = time;
 
State.variables.curDateTime = dateTime;
State.variables.curTime = curTime;

