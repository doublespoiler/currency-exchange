export default class Convert{
  static async fromUSD(targetCode, amount){
    const targetCode = targetCode;
    const amount = amount;
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCode}/${amount}`);
      const jsonifiedResponse = await response.json();
      if(!response.ok){
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.error-type}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}