function printMessage(){
  let el = document.getElementById('random-message');
  // We have to put the final message below
  let randomNum = Math.floor(Math.random() * 9 + 1);
  el.innerHTML = randomMessage()
}

// If we want a record of all the random messages, we change printMessage() for recorgMessges() in HTML

function recordMessages(){
  let randomNum = Math.floor(Math.random() * 9 + 1);
  let msg = `<p>Text number: ${randomNum}</p>`;
  let el = document.getElementById('messages');
  el.innerHTML += msg;
}

function randomMessage(){
  const firstPartArray = ['The one','It','He','She','The one','The one','The one','She'];
  const secondPartArray = ['is','who','is','who','is','who','who','is'];
  const thirdPartArray = ['breaks hearts','full of moonlight','full of love','wins hearts','rules','made of color','destroys','great'];
  const randomMessageArray = [];
  let firstPart 
  let secondPart
  let thirdPart
  // check compatibility of first and second parts
  while ((firstPart === 'The one' && secondPart === 'is') || (firstPart !== 'The one' && secondPart === 'who') 
  || (firstPart === undefined  && secondPart === undefined)){
    firstPart = firstPartArray[Math.floor(Math.random() * 8)];
    secondPart = secondPartArray[Math.floor(Math.random() * 8)];
  }
  // check compatibility of second and third parts
  while (( thirdPart === undefined || (secondPart == 'is' && (thirdPart.includes('breaks') || thirdPart.includes('wins') 
  || thirdPart.includes('rules') || thirdPart.includes('destroys')))) 
  || (secondPart == 'who' && (thirdPart.includes('full') || thirdPart.includes('made') || thirdPart.includes('great')))) 
 {
    thirdPart = thirdPartArray[Math.floor(Math.random() * 8)]; 
  }
  randomMessageArray.push(firstPart,secondPart,thirdPart)
  return randomMessageArray.join(' ')
};


