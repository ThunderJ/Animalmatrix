var engMode = true


//for HTML RESET button. Empties fields.
function refresh() { 
    document.getElementById("answer").innerHTML = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    if (engMode === true) {
            firstName.placeholder = "First name";
            lastName.placeholder = "Last name";
    } else {
            firstName.placeholder = "Eesnimi";
            lastName.placeholder = "Perenimi";
    } 
}

// if ranNo is > 1, apply genFName. If ranNo is <= 1, apply genLName
//FIRST NAME
function mixerFirstName(firstname) {
firstname = firstname.trim();
if (firstname.length > 1) {
    var firstLetter = firstname[0].toLowerCase();
    if ((/^[A-Za-z-]+$/.test(firstname)) === true && ranNo > 1){
      if (firstLetter === "a"){
          return ranVal(genFName);
      } else if (firstLetter ===  "b"){
          return ranVal(genFName);
      } else if (firstLetter ===  "c"){
          return ranVal(genFName);
      } else if (firstLetter ===  "d"){
          return ranVal(genFName);
      } else if (firstLetter ===  "e"){
          return ranVal(genFName);
      } else if (firstLetter ===  "f"){
          return ranVal(genFName);
      } else if (firstLetter ===  "g"){
          return ranVal(genFName);
      } else if (firstLetter ===  "h"){
          return ranVal(genFName);
      } else if (firstLetter ===  "i"){
          return ranVal(genFName);
      } else if (firstLetter ===  "j"){
          return ranVal(genFName);
      } else if (firstLetter ===  "k"){
          return ranVal(genFName);
      } else if (firstLetter ===  "l"){
          return ranVal(genFName);
      } else if (firstLetter ===  "m"){
          return ranVal(genFName);
      } else if (firstLetter ===  "n"){
          return ranVal(genFName);
      } else if (firstLetter ===  "o"){
          return ranVal(genFName);
      } else if (firstLetter ===  "p"){
          return ranVal(genFName);
      } else if (firstLetter ===  "q"){
          return ranVal(genFName);
      } else if (firstLetter ===  "r"){
          return ranVal(genFName);
      } else if (firstLetter ===  "s"){
          return ranVal(genFName);
      } else if (firstLetter ===  "t"){
          return ranVal(genFName); 
      } else if (firstLetter ===  "u"){
          return ranVal(genFName);
      } else if (firstLetter ===  "v"){
          return ranVal(genFName);
      } else if (firstLetter ===  "w"){
          return ranVal(genFName);
      } else if (firstLetter ===  "x"){
          return ranVal(genFName);
      } else if (firstLetter ===  "y"){
          return ranVal(genFName);
      } else if (firstLetter ===  "z"){
          return ranVal(genFName);
      } else {
          return false
      } 
} if ((/^[A-Za-z-]+$/.test(firstname)) === true && ranNo <= 1){
        if (firstLetter === "a"){
            return ranVal(a);
        } else if (firstLetter ===  "b"){
            return ranVal(b);
        } else if (firstLetter ===  "c"){
            return ranVal(c);
        } else if (firstLetter ===  "d"){
            return ranVal(d);
        } else if (firstLetter ===  "e"){
            return ranVal(e);
        } else if (firstLetter ===  "f"){
            return ranVal(f);
        } else if (firstLetter ===  "g"){
            return ranVal(g);
        } else if (firstLetter ===  "h"){
            return ranVal(h);
        } else if (firstLetter ===  "i"){
            return ranVal(i);
        } else if (firstLetter ===  "j"){
            return ranVal(j);
        } else if (firstLetter ===  "k"){
            return ranVal(k);
        } else if (firstLetter ===  "l"){
            return ranVal(l);
        } else if (firstLetter ===  "m"){
            return ranVal(m);
        } else if (firstLetter ===  "n"){
            return ranVal(n);
        } else if (firstLetter ===  "o"){
            return ranVal(o);
        } else if (firstLetter ===  "p"){
            return ranVal(p);
        } else if (firstLetter ===  "q"){
            return ranVal(q);
        } else if (firstLetter ===  "r"){
            return ranVal(r);
        } else if (firstLetter ===  "s"){
            return ranVal(s);
        } else if (firstLetter ===  "t"){
            return ranVal(t); 
        } else if (firstLetter ===  "u"){
            return ranVal(u);
        } else if (firstLetter ===  "v"){
            return ranVal(v);
        } else if (firstLetter ===  "w"){
            return ranVal(w);
        } else if (firstLetter ===  "x"){
            return ranVal(x);
        } else if (firstLetter ===  "y"){
            return ranVal(y);
        } else if (firstLetter ===  "z"){
            return ranVal(z);
        } else {
            return false;
        }
    }
 } else if (firstname.length === 1) {
     return 1;
 } else if (firstname.length === 0) {
     return 0;
 }
}

//LAST NAME
function mixerLastName(lastname) {
lastname = lastname.trim();
if (lastname.length > 1) {
    var firstLetter = lastname[0].toLowerCase();
    if ((/^[A-Za-z-]+$/.test(lastname)) === true && ranNo > 1){
        if (firstLetter === "a"){
            return ranVal(a);
        } else if (firstLetter ===  "b"){
            return ranVal(b);
        } else if (firstLetter ===  "c"){
            return ranVal(c);
        } else if (firstLetter ===  "d"){
            return ranVal(d);
        } else if (firstLetter ===  "e"){
            return ranVal(e);
        } else if (firstLetter ===  "f"){
            return ranVal(f);
        } else if (firstLetter ===  "g"){
            return ranVal(g);
        } else if (firstLetter ===  "h"){
            return ranVal(h);
        } else if (firstLetter ===  "i"){
            return ranVal(i);
        } else if (firstLetter ===  "j"){
            return ranVal(j);
        } else if (firstLetter ===  "k"){
            return ranVal(k);
        } else if (firstLetter ===  "l"){
            return ranVal(l);
        } else if (firstLetter ===  "m"){
            return ranVal(m);
        } else if (firstLetter ===  "n"){
            return ranVal(n);
        } else if (firstLetter ===  "o"){
            return ranVal(o);
        } else if (firstLetter ===  "p"){
            return ranVal(p);
        } else if (firstLetter ===  "q"){
            return ranVal(q);
        } else if (firstLetter ===  "r"){
            return ranVal(r);
        } else if (firstLetter ===  "s"){
            return ranVal(s);
        } else if (firstLetter ===  "t"){
            return ranVal(t); 
        } else if (firstLetter ===  "u"){
            return ranVal(u);
        } else if (firstLetter ===  "v"){
            return ranVal(v);
        } else if (firstLetter ===  "w"){
            return ranVal(w);
        } else if (firstLetter ===  "x"){
            return ranVal(x);
        } else if (firstLetter ===  "y"){
            return ranVal(y);
        } else if (firstLetter ===  "z"){
            return ranVal(z);
        } else {
            return false
        }
} if ((/^[A-Za-z-]+$/.test(lastname)) === true && ranNo <= 1){
          if (firstLetter === "a"){
              return ranVal(genLName);
          } else if (firstLetter ===  "b"){
              return ranVal(genLName);
          } else if (firstLetter ===  "c"){
              return ranVal(genLName);
          } else if (firstLetter ===  "d"){
              return ranVal(genLName);
          } else if (firstLetter ===  "e"){
              return ranVal(genLName);
          } else if (firstLetter ===  "f"){
              return ranVal(genLName);
          } else if (firstLetter ===  "g"){
              return ranVal(genLName);
          } else if (firstLetter ===  "h"){
              return ranVal(genLName);
          } else if (firstLetter ===  "i"){
              return ranVal(genLName);
          } else if (firstLetter ===  "j"){
              return ranVal(genLName);
          } else if (firstLetter ===  "k"){
              return ranVal(genLName);
          } else if (firstLetter ===  "l"){
              return ranVal(genLName);
          } else if (firstLetter ===  "m"){
              return ranVal(genLName);
          } else if (firstLetter ===  "n"){
              return ranVal(genLName);
          } else if (firstLetter ===  "o"){
              return ranVal(genLName);
          } else if (firstLetter ===  "p"){
              return ranVal(genLName);
          } else if (firstLetter ===  "q"){
              return ranVal(genLName);
          } else if (firstLetter ===  "r"){
              return ranVal(genLName);
          } else if (firstLetter ===  "s"){
              return ranVal(genLName);
          } else if (firstLetter ===  "t"){
              return ranVal(genLName); 
          } else if (firstLetter ===  "u"){
              return ranVal(genLName);
          } else if (firstLetter ===  "v"){
              return ranVal(genLName);
          } else if (firstLetter ===  "w"){
              return ranVal(genLName);
          } else if (firstLetter ===  "x"){
              return ranVal(genLName);
          } else if (firstLetter ===  "y"){
              return ranVal(genLName);
          } else if (firstLetter ===  "z"){
              return ranVal(genLName); 
          } else {
            return false;
        }
     }
   } else if (lastname.length === 1) {
     return 1;
 } else if (lastname.length === 0) {
     return 0;
 }
}


// combines results from mixerFirstName and mixerLastName
function combiner(firstname, lastname) {  
    firstname = document.getElementById("input1").value;
    lastname = document.getElementById("input2").value;
    
    firstname =  RemoveAccents(firstname);
    lastname = RemoveAccents(lastname);
    // firstname.toLowerCase();
    // lastname.toLowerCase();
if (engMode === true) {
    if (mixerFirstName(firstname) !== false && mixerLastName(lastname) !== false && mixerFirstName(firstname) !== undefined && mixerLastName(lastname) !== undefined && mixerFirstName(firstname) !== 1 && mixerFirstName(firstname) !== 0 && mixerLastName(lastname) !== 0 && mixerLastName(lastname) !==1) { 
        document.getElementById("answer").innerHTML = "You are: " + mixerFirstName(firstname)+mixerLastName(lastname);
        load_js();
    } else if (mixerFirstName(firstname) === false || mixerLastName(lastname) === false || mixerFirstName(firstname) === undefined || mixerLastName(lastname) === undefined || mixerFirstName(firstname) === 0) {
           document.getElementById("answer").innerHTML = "Please enter your name (letters only)";
    } else if (mixerFirstName(firstname) === 1 || mixerLastName(lastname) === 1) {
        document.getElementById("answer").innerHTML = "Please enter more than one letter on both fields";
    }          
        
} else {
    if (mixerFirstName(firstname) !== false && mixerLastName(lastname) !== false && mixerFirstName(firstname) !== undefined && mixerLastName(lastname) !== undefined && mixerFirstName(firstname) !== 1 && mixerFirstName(firstname) !== 0 && mixerLastName(lastname) !== 0 && mixerLastName(lastname) !==1) {
        document.getElementById("answer").innerHTML = "Sa oled: " + mixerFirstName(firstname)+mixerLastName(lastname);
        load_js();
    } else if (mixerFirstName(firstname) === false || mixerLastName(lastname) === false || mixerFirstName(firstname) === undefined || mixerLastName(lastname) === undefined || mixerFirstName(firstname) === 0) {
        document.getElementById("answer").innerHTML = "Palun sisesta nimi (ainult tähed)";           
    }  else if (mixerFirstName(firstname) === 1 || mixerLastName(lastname) === 1) {
        document.getElementById("answer").innerHTML = "Palun sisesta rohkem kui üks täht mõlemasse välja";
    }  
 }
} 

            
            
document.addEventListener('keydown', function(event){
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if(keycode == 13) {
        combiner();}
});


function ranVal(input){
    return input[Math.floor(Math.random() * input.length)];
}


//remove accents
function RemoveAccents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
}


function load_js() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'randomNumber.js';
  head.appendChild(script);
}


//Input fields onfocus
var firstName = document.getElementById("input1");
var lastName = document.getElementById("input2");


firstName.onfocus = function hideText() {
    firstName.placeholder = "";
}

firstName.onblur = function showText() {
    firstName.placeholder = "Eesnimi";
}


lastName.onfocus = function hideText() {
    lastName.placeholder = "";
}

lastName.onblur = function showText() {
    lastName.placeholder = "Perenimi";
}


//Language settings
var estBtn = document.getElementById("est_lang");
var engBtn = document.getElementById("eng_lang");

estBtn.onclick = function() {
    document.getElementsByTagName("h1")[0].innerHTML = "LOOMAMATRIX.";
    firstName.placeholder = "Eesnimi";
    lastName.placeholder = "Perenimi";
    engMode = false
    estAnimals()
}

engBtn.onclick = function() {
    document.getElementsByTagName("h1")[0].innerHTML = "ANIMALMATRIX.";
    firstName.placeholder = "First name";
    lastName.placeholder = "Last name";
    engMode = true
    engAnimals()
}

