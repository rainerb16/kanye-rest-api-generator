// AJAX
function getQuote() {
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
          let kanyeQuote = JSON.parse(this.responseText);
          document.getElementById("kanye-quote").innerHTML = kanyeQuote.quote;
      } else if(this.readyState != 4) {
            document.getElementById("kanye-quote").innerHTML = "Loading...";
      } else {
            document.getElementById("kanye-quote").innerHTML = "Something went wrong..."
      }
  };

  ajax.open("GET", "https://api.kanye.rest/", true);
  ajax.send();

};


// AUDIO
function kanyeSound() {
  let kSound = document.getElementById("audio")
  kSound.play();
  kSound.volume = 0.15;
}


// EVENT LISTENER
document.getElementById("refresh").addEventListener("click", getQuote);
document.getElementById("refresh").addEventListener("click", kanyeSound);
