(function () {

var names = ["Yaakov", "John", "Jourav", "Jhon", "Parul", "Frank", "Larry", "Paula", "Lara", "Jimmy"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
