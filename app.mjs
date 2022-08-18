function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    let contentItem = document.querySelector(".content");
let inputBx = document.querySelector("#input_bx");
let button = document.querySelector("#submit");
let errorMsg = document.querySelector(".message_bx");

// country flag and code
window.intlTelInput(inputBx, {
  separateDialCode: true,
  excludeCountries: ["in", "il"],
  preferredCountries: ["ng", "jp", "fr", "no"]
});
// network prefix
const prefixes = {
  MTN: [
    "0803",
    "0806",
    "0703",
    "0706",
    "0810",
    "0813",
    "0814",
    "0816",
    "0903",
    "0906",
    "0916",
  ],
  GLO: ["0805", "0807", "0811", "0705", "0815", "0905"],
  AIRTEL: ["0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901"],
  "9MOBILE": ["0809", "0817", "0818", "0908", "0909"],
  "MULTI-LINKS": ["0709", "0702"],
};

// logo img

const logos = {
  MTN: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg",
  "9MOBILE":
    "https://www.seekpng.com/png/full/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png",
  GLO: "https://upload.wikimedia.org/wikipedia/commons/8/86/Glo_button.png",
  AIRTEL:
    "https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png",
}

button.addEventListener("click", () => {
  let mobileNumber = inputBx.value;
  errorMsg.innerHTML = "";
  message = document.createElement("p");
  img = document.createElement("img");
  errorMsg.appendChild(message);
  errorMsg.appendChild(img);
  contentItem.appendChild(errorMsg);
  
//   for in iterates over all enumerable properties of an object{}
  for (const property in prefixes) {
    if (mobileNumber == "") {
      message.innerText = "Please Enter your mobile number!";
      return;
    } else if (mobileNumber.length.toString() !== "11") {
      message.innerText = "OOPS! You entered non valid phone number";
      message.style.color = "#da3400";
      return;
    // } else if (mobileNumber !== prefixes[property].includes(mobileNumber.substring(0, 4))){
    //   message.innerText = "OOPS! You entered non valid phone number";
    //   message.style.color = "#da3400";
    // }
//       include checks if any of the property is present in the array of object
    } else if (prefixes[property].includes(mobileNumber.substring(0, 4))) {
      message.innerText = `Your mobile number is ${property}`;
      img.src = `${logos[property]}`;
      return;
    }
  }
});
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //