var isRegistered = false; // Variable pour suivre l'état d'inscription

function sendMessage() {
  if (isRegistered) {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    if (message !== "") {
      var messagesDiv = document.getElementById("messages");
      var newMessage = document.createElement("div");
      newMessage.innerText = message;
      messagesDiv.appendChild(newMessage);

      messageInput.value = "";
    }
  } else {
    alert("Vous devez d'abord vous inscrire pour pouvoir envoyer des messages.");
  }
}

function register() {
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var passwordInput = document.getElementById("passwordInput");

  var name = nameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;

  // Effectuer des validations supplémentaires si nécessaire

  if (name !== "" && email !== "" && password !== "") {
    // Envoyer les données du formulaire d'inscription au serveur
    console.log("Nom: " + name);
    console.log("Email: " + email);
    console.log("Mot de passe: " + password);

    // Réinitialiser les champs du formulaire
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    isRegistered = true; // Mettre à jour l'état d'inscription
  } else {
    alert("Veuillez remplir tous les champs du formulaire d'inscription.");
  }
}