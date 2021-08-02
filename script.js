function printMessage(){
    let el = document.getElementById('random-message');
    // We have to put the final message below
    let randomNum = Math.floor(Math.random() * 9 + 1);
  el.textContent = `This is random message: ${randomNum}`;
  }
  

  // If we want a record of all the random messages, we change printMessage() for recorgMessges() in HTML

function recordMessages(){
  let randomNum = Math.floor(Math.random() * 9 + 1);
  let msg = `<p>Text number: ${randomNum}</p>`;
  let el = document.getElementById('messages');
  el.innerHTML += msg;
}


