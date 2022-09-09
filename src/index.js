import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Convert from './js/convert.js';

async function fromUSD(targetCode, amount){
  const response = await Convert.fromUSD(targetCode, amount);
  if(response.result === "success"){
    printElements(response, targetCode, amount);
  } else {
    printError(response, targetCode);
  }
}

function printElements(response, targetCode, amount){
  const inputCents =  parseFloat(amount).toFixed(2);
  const outputCents = response.conversion_result.toFixed(2);
  document.querySelector("#input-amount").innerText = inputCents.toLocaleString("en-US");
  document.querySelector("#output-amount").innerText = outputCents.toLocaleString("en-US");
  document.querySelector("#code-output").innerText = targetCode;
  document.querySelector("#conversion-rate").innerText = response.conversion_rate;
  document.querySelector("#result-div").classList.remove("hidden");
}

function printError(error, targetCode){
  document.querySelector("#error-result").innerText = `Cannot convert to ${targetCode}: ${error}.`;
}

function handleFormSubmission(event){
  event.preventDefault();
  resetResult();
  let targetCode = document.querySelector("input[name='target-code']:checked");
  if (targetCode.id === "other"){
    const customCode = document.querySelector("#other-text").value;
    targetCode = customCode.toUpperCase();
    if (targetCode === "RMB"){
      targetCode = "CNY";
      document.querySelector("#error-result").innerText = "* Using CNY instead of RMB";
    } else if (parseInt(targetCode)){
      printError("Not a 3 letter Currency Code", targetCode);
      return;
    }
  } else {
    targetCode = targetCode.value;
  }
  const amount = document.querySelector("#amount").value;
  fromUSD(targetCode, amount);
}

function resetResult(){
  document.querySelector("#input-amount").innerText = "";
  document.querySelector("#output-amount").innerText = "";
  document.querySelector("#code-output").innerText = "";
  document.querySelector("#conversion-rate").innerText = "";
  document.querySelector("#result-div").classList.add("hidden");
  document.querySelector("#error-result").innerText = `* = Required`;
}

function showHelp(){
  document.querySelector("#over-div").classList.remove("hidden");
  document.querySelector("#help-button").removeEventListener("click", showHelp);
  document.querySelector("#help-button").addEventListener("click", hideHelp);
}

function hideHelp(){
  document.querySelector("#over-div").classList.add("hidden");
  document.querySelector("#help-button").removeEventListener("click", hideHelp);
  document.querySelector("#help-button").addEventListener("click", showHelp);
}

function setToOther(){
  let currentChecked = document.querySelector("input:checked");
  const other = document.querySelector("#other");
  if(currentChecked){
    currentChecked.checked  = false;
  }
  other.checked = true;
  document.getElementById("other-req").setAttribute("class", "text-danger");
}

document.querySelector('form').addEventListener("submit", handleFormSubmission);
document.querySelector("#help-button").addEventListener("click", showHelp);
document.querySelector("#close-button").addEventListener("click", hideHelp);
document.querySelector('#other-text').addEventListener("click", setToOther);

//utility
const radio = document.querySelectorAll("input[name='target-code']");

for(let i = 0;i< radio.length;i++){ //I'm not sure if this is where I'm supposed to put a function like this, but the app works.
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

