let textState = 0;

const actionButton = document.getElementById("language");
actionButton.onclick = () => scrambler(textPage);

function scrambler(textPage) {                // this is the one to start transformations

  for (let i = 0; i < textPage.length; i++) {      // texts are collected in an array of arrays
    splitter(...textPage[i])          // which are then given as parameters
  }
  if (textState === 0) textState = 1;
  else textState = 0;
}


function splitter(from, to, where) {        // contains en and fi texts and element
  from = from.split("");                    // splits given strings into arrays
  to = to.split("");
  let spinCount = Math.max(from.length, to.length); // figures out longer one
  if (textState === 0){
    spinner(from, to, spinCount, where);       // starts animation function
  }else{
    spinner(to, from, spinCount, where);
  }
}
// these two provide "random" characters for animation; startChar is for capitals
let randomChar = () => String.fromCharCode(Math.floor(Math.random()*25) + 65).toLowerCase();
let startChar = () => String.fromCharCode(Math.floor(Math.random()*25) + 65);

function spinner(from, to, spinCount, where) {      // executes transformations

  let sentenceRoller = (i) =>{              // keeps track of textarray index

    let letterspin = (x) =>{                // modifies array
      if (i === 0) from[i] = startChar();   // first letter stays capital
      else from[i] = randomChar();          // others are lowercase
      if (x === 0) from[i] = to[i];         // last change is to the target letter
      renderer(from, where);                // sends modified arrays to render
    } // end of letterspin

    for (let i = 0; i < 10; i++){           // calls letterspin
      setTimeout(letterspin, i*80)          // adds delay between iterations
      if (i === 9){                         // on last spin sends "0" so letterspin
        setTimeout( () => letterspin(0), i*80);   // can stop with the correct letter
      }
    }
  } // end of sentenceRoller
  for(let i = 0; i < spinCount; i++){       // this switches the index for spinning
    setTimeout( () => {sentenceRoller(i)}, i*60)  // letter so that whole sentence
  }                                         // gets transformed.
} // end of spinner

function renderer(input, where) {     // this function updates DOM after every change
  where.innerHTML = input.join("");   // so that the animation is visible for user
}
