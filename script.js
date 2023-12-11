function useInfo() {
  let name = document.getElementById("userFirstName").value;

  let surname = document.getElementById("userLastName").value;

  let mail = document.getElementById("userMail").value;

  let addres = document.getElementById("userAddress").value;

  let city = document.getElementById("userCity").value;

  let kod = document.getElementById("userZip").value;

  var choice = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

  for (var i = 0; i < checkboxes.length; i++) {
    choice.push(checkboxes[i].value)
  }
  let usera = {
    name,
    surname,
    mail,
    addres,
    city,
    kod,
    choice
  };
  if (
    name == "" ||
    surname == "" ||
    mail == "" ||
    addres == "" ||
    city == "" ||
    kod == ""
  ) {
    alert("hey");
  } else {
    fetch("https://6522861af43b179384149799.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usera),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    const display = document.getElementById("ConfirmBlock");
    display.classList.remove("displayNone");
    const askBlock = document.getElementById("askBlock");
    askBlock.classList.add("displayNone");
  }
}


function getPsyholog() {


  let psyhologicHelp = document.getElementById("psyhologicHelp").value;

  let userPhoneHelp = {
    psyhologicHelp
  }
  if (
    psyhologicHelp == ""
  ) { alert("Not a number") } else {
    fetch("https://65490442dd8ebcd4ab240e17.mockapi.io/PhoneNumberUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPhoneHelp),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  const display = document.getElementById("ConfirmBlockPsyholog");

  display.classList.add("displayNone");
}


function getLower() {


  let lowerPhoneNumber = document.getElementById("lowerPhoneNumber").value;

  let lowerUserName = document.getElementById("lowerUserName").value;

  let getLowerHelp = {
    lowerPhoneNumber,
    lowerUserName
  }
  if (
    lowerPhoneNumber == "" || lowerUserName == ""
  ) { alert("Not real information") } else {
    fetch("https://65490442dd8ebcd4ab240e17.mockapi.io/lowerHelp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getLowerHelp),
    })
      .then((response) => response.json())
  }
  const display = document.getElementById("ConfirmBlockLower");

  display.classList.add("displayNone");
}






async function getUser() {
  const response = await fetch(
    "https://6522861af43b179384149799.mockapi.io/users"
  );
  let content = await response.json();

  let list = document.querySelector(".cardsLibrary");

  let key;
  for (key in content) {
    list.innerHTML += `
    <div class="card">
    <h5 class="cardDopColor"><span class="cardMainTeg">id:</span> ${content[key].id}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Ім'я:</span> ${content[key].name}</h5>    
    <h5 class="cardDopColor"><span class="cardMainTeg">Прізвище:</span> ${content[key].surname}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Mail:</span> ${content[key].mail}</h5>  
    <h5 class="cardDopColor"><span class="cardMainTeg">Код поштовий:</span> ${content[key].kod}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Адреса:</span> ${content[key].addres}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Місто:</span> ${content[key].city}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">дата:</span> ${content[key].createdAt}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Вибір:</span> ${content[key].choice.join(",")}</h5>
    </div>
    `;

  }



}
getUser();


async function getUserPsihologicalHelp() {

  const responsePsiholog = await fetch(
    "https://65490442dd8ebcd4ab240e17.mockapi.io/PhoneNumberUser"
  );
  let contentPsiholog = await responsePsiholog.json();

  let listPsiholog = document.querySelector(".cardsLibraryPsyhologies");

  let keyPsiholog;
  for (keyPsiholog in contentPsiholog) {
    listPsiholog.innerHTML += `
    <div class="card">    <h5 class="cardDopColor"><span class="cardMainTeg">id:</span> ${contentPsiholog[keyPsiholog].id}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Номер телефону: +</span> ${contentPsiholog[keyPsiholog].psyhologicHelp}</h5>
    </div>
    `;

  }
}
getUserPsihologicalHelp()





async function getUserLowerHelp() {

  const responseLower = await fetch(
    "https://65490442dd8ebcd4ab240e17.mockapi.io/lowerHelp"
  );
  let contentLower = await responseLower.json();

  let listLower = document.querySelector(".lowerHelpBlock");

  let keyLower;
  for (keyLower in contentLower) {
    listLower.innerHTML += `
    <div class="card">  
    <h5 class="cardDopColor"><span class="cardMainTeg">id:</span> ${contentLower[keyLower].id}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Номер телефону: +</span> ${contentLower[keyLower].lowerPhoneNumber}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Ім'я користувачі: </span> ${contentLower[keyLower].lowerUserName}</h5>
    </div>
    `;

  }
}
getUserLowerHelp()
