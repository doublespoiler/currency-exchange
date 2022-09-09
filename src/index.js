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
  console.log("success!");
}

function printError(error, targetCode){
  console.log("error!");
}

function handleFormSubmission(event){
  event.preventDefault();
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
const radio = document.querySelectorAll("input[name='option']");

for(let i = 0;i< radio.length;i++){
  radio[i].onclick = function(){
    if(this.id == "other"){
      document.getElementById('otherText').setAttribute("required", true);
    }else{
      document.getElementById('otherText').removeAttribute("required");
    }
  }
}