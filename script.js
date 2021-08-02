function printMessage(){
    let el = document.getElementById('random-message');
    // We have to put the final message below
    let randomNum = Math.floor(Math.random() * 9 + 1);
  el.textContent = `This is random message: ${randomNum}`;
  }
  
