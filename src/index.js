import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Convert from './js/convert.js'

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
  const targetCode = document.querySelector("#targetCode").value;
  const amount = document.querySelector("#amount").value;
  document.querySelector("#targetCode").value = null;
  document.querySelector("#amount").value = null;
  fromUSD(targetCode, amount);
}

document.querySelector('form').addEventListener("submit", handleFormSubmission);