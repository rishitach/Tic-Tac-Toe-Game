// TO HOLD ALL THE LOGIC RELATED TO CONFIGURE OUR PLAYERS

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //  +'1' =>  1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //trim get rid of white space

  if (!enteredPlayerName) {
    //enteredPlayerName ===''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  if (editedPlayer === 1) {
    players[0].name = enteredPlayerName;
  } else {
    players[1].name = enteredPlayerName;
  }

  closePlayerConfig();
}
