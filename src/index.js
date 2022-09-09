import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Convert from './js/convert.js';

async function fromUSD(targetCode, amount){
  const response = await Convert.fromUSD(targetCode, amount);
  console.log(response);
  if(response.result === "success"){
    printElements(response, targetCode, amount);
  } else {
    printError(response, targetCode);
  }
}

function printElements(response, targetCode, amount){
  document.querySelector("#input-amount").innerText = amount;
  document.querySelector("#output-amount").innerText = response.conversion_result.toFixed(2);
  document.querySelector("#code-output").innerText = targetCode;
  document.querySelector("#conversion-rate").innerText = response.conversion_rate;
  document.querySelector("#result-div").setAttribute("class", "");
}

function printError(error, targetCode){
  console.log("error found!" + error);
  document.querySelector("#error-result").innerText = `There was an error converting to ${targetCode}: ${error}.`;
}

function handleFormSubmission(event){
  event.preventDefault();
  resetResult();
  let targetCode = document.querySelector("input[name='target-code']:checked");
  if (targetCode.id === "other"){
    const customCode = document.querySelector("#other-text").value;
    targetCode = customCode.toUpperCase();
  } else {
    targetCode = targetCode.value;
  }
  const amount = document.querySelector("#amount").value;
  console.log("target" + targetCode + " amount " + amount );
  fromUSD(targetCode, amount);
}

document.querySelector('form').addEventListener("submit", handleFormSubmission);

//utility
const radio = document.querySelectorAll("input[name='target-code']");

for(let i = 0;i< radio.length;i++){
  radio[i].onclick = function(){
    if(this.id == "other"){
      document.getElementById("other-text").setAttribute("required", true);
      document.getElementById("other-req").setAttribute("class", "text-danger");
    }else{
      document.getElementById("other-text").removeAttribute("required");
      document.getElementById("other-req").setAttribute("class", "hidden");
    }
  };
}

function resetResult(){
  document.querySelector("#input-amount").innerText = "";
  document.querySelector("#output-amount").innerText = "";
  document.querySelector("#code-output").innerText = "";
  document.querySelector("#conversion-rate").innerText = "";
  document.querySelector("#result-div").setAttribute("class", "hidden");
  document.querySelector("#error-result").innerText = `* = Required`;
}