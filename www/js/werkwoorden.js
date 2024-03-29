var verbList = getVerbs() ;
var currentElement = getRandomElement(verbList);

function getJSON(url) {
  var resp = '';
  var xmlHttp = new XMLHttpRequest();

  if (xmlHttp != null) {
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    resp = xmlHttp.responseText;
  }
   
  return resp ;
}

function getVerbs() {
  var verbenUrl = '/werkwoorden/werkwoorden.json';
  return JSON.parse(getJSON(verbenUrl));
}

function newVerb() {
  currentElement = getRandomElement(verbList);
}

function getRandomElement(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function nextVerb() {
  hideAll();
  newVerb();
  var translation = document.getElementById("translation");
  translation.textContent = currentElement.translation;
}

function showVerb() {
  hideAll();
  var infinitief = document.getElementById("infinitief");
  infinitief.textContent = currentElement.infinitief;
  infinitief.setAttribute("class", "visible"); 
}

function showPrateritum() {
  var imperfectum = document.getElementById("imperfectum");
  imperfectum.textContent = currentElement.imperfectum;
  imperfectum.setAttribute("class", "visible"); 
}

function showPerfect() {
  var perfect = document.getElementById("perfectum");
  perfect.textContent = `${currentElement.hulpwerkwoord} ${currentElement.perfectum}`;
  perfect.setAttribute("class", "visible");
}

function showUsage() {
  var usage = document.getElementById("usage");
  while (usage.firstChild) {
    usage.removeChild(usage.firstChild);
  }
  let usageList = currentElement.usage;
  for (i in usageList) {
    p = document.createElement("p");
    p.setAttribute("class", "text-light");
    p.setAttribute("class", "fw-lighter");
    p.setAttribute("class", "fst-italic");
    p.textContent = usageList[i];
    usage.appendChild(p);
  }
  usage.setAttribute("class", "visible");
}

function showAll() {
  showVerb();
  showPrateritum();
  showPerfect();
  showUsage();
}

function hideAll() {
  var itemsIds = ["infinitief", "imperfectum", "perfectum", "usage"];
  for (i in itemsIds) {
    var item = document.getElementById(itemsIds[i]);
    item.setAttribute("class", "invisible");
  }
}
