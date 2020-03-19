var wakeuptime=7;
var noon=12;
var lunchtime=12;
var naptime=lunchtime+2;
var parttimejs;
var evening=18;

// Getting it to show the current time on the page
 var showCurrentTime = function() {
       // display the string on the webpage
       var clock=document.getElementById('clock');
       var currentTime= new Date();
       var hours =currentTime.getHours();
       var min=currentTime.getMinutes();
       var sec=currentTime.getSeconds();
       var meridian="AM";
       if (hours>=noon) {
           meridian="PM";
       }
       if(hours>noon)  {
           hours=hours-12;
       }
       if(min<10)  {
           min="0"+min;
       }
       if(sec<10) {
           sec="0" +sec;
       }
       var clockTime=hours+":"+min+":"+sec+" "+meridian+"!";
       clock.innerText=clockTime;
};
   var updateClock= function() {
      var time= new Date().getHours();
      var messageText;
      var imagejs="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
      var timeEventJS=document.getElementById('timeevent');
      var lolcatImageJS=document.getElementById('lolcatimage');
      if (time==partytime) {
          imagejs="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText="Let's Party!"
      }
     else if (time==wakeuptime) {
          imagejs="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
          messageText = "Wake up!";
      }
      else if (time==lunchtime) {
        imagejs="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
      }
      else if(time==naptime)  {
          imagejs="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
          messageText = "Sleep tight!";
      }
      else if(time<noon) {
          imagejs="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
          messageText = "Good morning!";
      }
      else if(time>evening) {
          imagejs="eve.jpg";
        
          messageText = "Good evening!";
        }
        else
        {
          imagejs = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
          messageText = "Good afternoon!";
        }
        console.log(messageText)
        timeEventJS.innerText=messageText;
        lolcatImageJS.src=imagejs;
       showCurrentTime();
   };
   updateClock();
   var oneSec=1000;
   setInterval(updateClock,oneSec);
   
var partyButton =document.getElementById('partytime');
var partyEvent=function() {
if (partytime<0) {
    partytime=new Date().getHours();
    partyButton.innerText="Party Over!";
    partyButton.style.backgroundColor="#0A8DAB";

}
else {
    partytime=-1;
    partyButton.innerText="Party Time!";
    partyButton.style.backgroundColor="#222";
}
};
partyButton.addEventListener("click",partyEvent);
partyEvent();
var wakeUpTimeSelector =  document.getElementById("wakeuptimeselector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchtimeselector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("naptimeselector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);