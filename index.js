let display = document.getElementById('display');
let myName = 'bello abibat wuraola';
let myHeight = '1.5cm';
let myCountry = 'Nigeria';


display.innerHTML = `
    <h4>NAME: <i>${myName.toUpperCase()}</i></h4>
    <p>HEIGHT: ${myHeight}</p>
    <p>COUNTRY: ${myCountry}</p>
`