/*
Declaracion inicial de variables
*/
let currency = 'USDC'; // default currency
const API_KEY = '252cfc213dee9a87d807e439e212f378'; // Dejo la clave api ya que es una clave de pruebas.

/*
Declaro Funciones
*/
function printProductos(){
    document.getElementById("contentRes").innerHTML = `La moneda seteada es: ${currency}`;
}
async function getCountryCode() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        await fetch(`http://api.ipstack.com/check?access_key=${API_KEY}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const {country_code} = result;
            currency = (country_code != 'AR')?'USD':'ARS';
        })
    } catch(error) {
        console.error(error);
        currency = 'USD';
    }
    return printProductos();
}

/*Script principal*/
getCountryCode();