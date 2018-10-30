function whichLanguage() {
  let session = sessionStorage.getItem('language');
  if (session === "1") {
    textState = sessionStorage.getItem('language');
  }else console.log("NO SESSION"); // checks if user has switched default language

  if (textState === "0"){
    translator(textPage, 0)   // calls english texts index
  }else if (textState === "1"){
    translator(textPage, 1)   // calls finnish texts index
  }
}

function translator(textPage, selectedLanguage) {
  let x = selectedLanguage;   // for further information, see scrambler.js
  for (let i = 0; i < textPage.length; i++) {  // reads every text
    writer(textPage[i][x], textPage[i][2])     // sends them to render
  }
}

function writer(input, where) {     // this function updates DOM after every change
  where.innerHTML = input;   // so that the animation is visible for user
}
