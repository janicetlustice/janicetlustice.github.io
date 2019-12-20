function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 200) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
  //randombg();
}

//quote array
var quotes = ["Janice ambice<br>- Honzík", "Janice babice<br>- Honzík", "Janice bočnice<br>- Honzík", "Janice bránice<br>- Honzík", "Janice bělice<br>- Honzík", "Janice břidlice<br>- Honzík", "Janice celnice<br>- Honzík", "Janice chobotnice<br>- Honzík", "Janice cvičebnice<br>- Honzík", "Janice definice<br>- Honzík", "Janice demolice<br>- Honzík", "Janice dlaždice<br>- Honzík", "Janice dobrovolnice<br>- Honzík", "Janice dojnice<br>- Honzík", "Janice dopisnice<br>- Honzík", "Janice dračice<br>- Honzík", "Janice družice<br>- Honzík", "Janice družice<br>- Honzík", "Janice drápanice<br>- Honzík", "Janice dvojice<br>- Honzík", "Janice dálnice<br>- Honzík", "Janice dělnice<br>- Honzík", "Janice důstojnice<br>- Honzík", "Janice edice<br>- Honzík", "Janice erudice<br>- Honzík", "Janice exhibice<br>- Honzík", "Janice expedice<br>- Honzík", "Janice extradice<br>- Honzík", "Janice hadice<br>- Honzík", "Janice hampejznice<br>- Honzík", "Janice holubice<br>- Honzík", "Janice houfnice<br>- Honzík", "Janice hořčice<br>- Honzík", "Janice hranice<br>- Honzík", "Janice hubice<br>- Honzík", "Janice hvězdice<br>- Honzík", "Janice hákovnice<br>- Honzík", "Janice hřebice<br>- Honzík", "Janice hříšnice<br>- Honzík", "Janice inhibice<br>- Honzík", "Janice investice<br>- Honzík", "Janice jehlice<br>- Honzík", "Janice jirnice<br>- Honzík", "Janice jitrnice<br>- Honzík", "Janice kadeřnice<br>- Honzík", "Janice kadidelnice<br>- Honzík", "Janice klevetnice<br>- Honzík", "Janice kloboučnice<br>- Honzík", "Janice klávesnice<br>- Honzík", "Janice knižnice<br>- Honzík", "Janice koalice<br>- Honzík", "Janice kolejnice<br>- Honzík", "Janice kolmice<br>- Honzík", "Janice kondice<br>- Honzík", "Janice konfice<br>- Honzík", "Janice kouzelnice<br>- Honzík", "Janice krabice<br>- Honzík", "Janice krajnice<br>- Honzík", "Janice kraslice<br>- Honzík", "Janice krupice<br>- Honzík", "Janice kružnice<br>- Honzík", "Janice kružnice<br>- Honzík", "Janice kukuřice<br>- Honzík", "Janice kulovnice<br>- Honzík", "Janice káznice<br>- Honzík", "Janice lasice<br>- Honzík", "Janice lednice<br>- Honzík", "Janice lemuřice<br>- Honzík", "Janice loděnice<br>- Honzík", "Janice lomenice<br>- Honzík", "Janice ložnice<br>- Honzík", "Janice lékořice<br>- Honzík", "Janice lístkovnice<br>- Honzík", "Janice mazanice<br>- Honzík", "Janice mačkanice<br>- Honzík", "Janice metlice<br>- Honzík", "Janice mluvnice<br>- Honzík", "Janice motolice<br>- Honzík", "Janice munice<br>- Honzík", "Janice márnice<br>- Honzík", "Janice máselnice<br>- Honzík", "Janice míchanice<br>- Honzík", "Janice mšice<br>- Honzík", "Janice nemocnice<br>- Honzík", "Janice nábojnice<br>- Honzík", "Janice oběžnice<br>- Honzík", "Janice okenice<br>- Honzík", "Janice opice<br>- Honzík", "Janice oslice<br>- Honzík", "Janice osmiveslice<br>- Honzík", "Janice ostřice<br>- Honzík", "Janice ozubnice<br>- Honzík", "Janice očnice<br>- Honzík", "Janice palice<br>- Honzík", "Janice petlice<br>- Honzík", "Janice pivnice<br>- Honzík", "Janice plachetnice<br>- Honzík", "Janice poběhlice<br>- Honzík", "Janice podvodnice<br>- Honzík", "Janice pohlednice<br>- Honzík", "Janice pohrudnice<br>- Honzík", "Janice poklice<br>- Honzík", "Janice polnice<br>- Honzík", "Janice pomocnice<br>- Honzík", "Janice popelnice<br>- Honzík", "Janice porodnice<br>- Honzík", "Janice postranice<br>- Honzík", "Janice pracovnice<br>- Honzík", "Janice pramice<br>- Honzík", "Janice pranice<br>- Honzík", "Janice prohibice<br>- Honzík", "Janice pryskyřice<br>- Honzík", "Janice psice<br>- Honzík", "Janice přeslice<br>- Honzík", "Janice příjice<br>- Honzík", "Janice radlice<br>- Honzík", "Janice radnice<br>- Honzík", "Janice rekognice<br>- Honzík", "Janice ručnice<br>- Honzík", "Janice růžice<br>- Honzík", "Janice samice<br>- Honzík", "Janice sanice<br>- Honzík", "Janice sazenice<br>- Honzík", "Janice sběrnice<br>- Honzík", "Janice sestřenice<br>- Honzík", "Janice silnice<br>- Honzík", "Janice sítnice<br>- Honzík", "Janice sklenice<br>- Honzík", "Janice skluznice<br>- Honzík", "Janice skořice<br>- Honzík", "Janice slepice<br>- Honzík", "Janice slunečnice<br>- Honzík", "Janice směrnice<br>- Honzík", "Janice směsice<br>- Honzík", "Janice sněžnice<br>- Honzík", "Janice stanice<br>- Honzík", "Janice stolice<br>- Honzík", "Janice stropnice<br>- Honzík", "Janice strážnice<br>- Honzík", "Janice strážnice<br>- Honzík", "Janice studnice<br>- Honzík", "Janice stupnice<br>- Honzík", "Janice světlice<br>- Honzík", "Janice světnice<br>- Honzík", "Janice sítnice<br>- Honzík", "Janice tanečnice<br>- Honzík", "Janice tasemnice<br>- Honzík", "Janice taškařice<br>- Honzík", "Janice tkanice<br>- Honzík", "Janice tlačenice<br>- Honzík", "Janice tlumočnice<br>- Honzík", "Janice tradice<br>- Honzík", "Janice trestnice<br>- Honzík", "Janice trojice<br>- Honzík", "Janice trubice<br>- Honzík", "Janice truhlice<br>- Honzík", "Janice tvárnice<br>- Honzík", "Janice třenice<br>- Honzík", "Janice třeslice<br>- Honzík", "Janice udice<br>- Honzík", "Janice ulice<br>- Honzík", "Janice uličnice<br>- Honzík", "Janice učnice<br>- Honzík", "Janice velice<br>- Honzík", "Janice vesnice<br>- Honzík", "Janice večernice<br>- Honzík", "Janice vichřice<br>- Honzík", "Janice vidlice<br>- Honzík", "Janice vinice<br>- Honzík", "Janice vodnice<br>- Honzík", "Janice vrátnice<br>- Honzík", "Janice věznice<br>- Honzík", "Janice zadnice<br>- Honzík", "Janice zbrojnice<br>- Honzík", "Janice zemnice<br>- Honzík", "Janice zimnice<br>- Honzík", "Janice zornice<br>- Honzík", "Janice zpovědnice<br>- Honzík", "Janice zvonice<br>- Honzík", "Janice zápalnice<br>- Honzík", "Janice zřítelnice<br>- Honzík", "Janice úřednice<br>- Honzík", "Janice škrábanice<br>- Honzík", "Janice špice<br>- Honzík", "Janice štvanice<br>- Honzík", "Janice štěnice<br>- Honzík", "Janice čarodějnice<br>- Honzík", "Janice čemeřice<br>- Honzík", "Janice čepice<br>- Honzík", "Janice čmáranice<br>- Honzík", "Janice čtveřice<br>- Honzík", "Janice číslice<br>- Honzík", "Janice ďáblice<br>- Honzík", "Janice řeholnice<br>- Honzík", "Janice šachovnice<br>- Honzík", "Janice šibenice<br>- Honzík", "Janice škrábanice<br>- Honzík", "Janice špice<br>- Honzík", "Janice železnice<br>- Honzík","Janice krasavice<br>- Honzík","Janice hampejznice<br>- Honzík"];

//date
function startDate() {
  var d = new Date();
  var days = ["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}
function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('https://wallpapercave.com/wp/wp4200963.jpg')",
                 "url('https://wallpapercave.com/wp/wp4200967.jpg)",
                 "url('https://wallpapercave.com/wp/wp4200970.jpg')",
                 "url('https://wallpapercave.com/wp/wp4200989.jpg')",
                 "url('https://wallpapercave.com/wp/wp4200958.jpg')",
                 "url('https://wallpapercave.com/wp/wp4200960.jpg')",
               "url('https://wallpapercave.com/wp/wp4200962.jpg')",
                "url('https://wallpapercave.com/wp/wp4200965.jpg')",
                "url('https://wallpapercave.com/wp/wp4200954.jpg')"];
  document.body.style.backgroundImage = bigSize[random]; 
}
