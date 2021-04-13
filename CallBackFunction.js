function anotherAddEventListener (typeOfEvent, callback){

    var eventThatHappended = {
        eventType: "keypress",
        key : "p",
        durationOfKeypress: 2
    }

    if (eventThatHappended.eventType === typeOfEvent){
        callback(eventThatHappended);
    }
}

anotherAddEventListener("keypress", function(event){
    console.log(event);
})