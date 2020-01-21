const TAXES = 0.08;
const P_PRICE = 300;
const A_PRICE = 10;
const MONEY = prompt('Ingrese en cantidad su dinero');
const THRESHOLD = 1700; 

function calcTax (price) {
    let taxes = price * TAXES;
    return price + taxes; 
}

function formating (price) {
    let final = "$" + price.toFixed(2); 
    console.log(`El precio final es de ${final}, se compraron ${count} teléfonos`);
}

let subtotal = 0; 
let count = 0

if (MONEY < P_PRICE) {
    console.log('No money, no phone');
} else {
    while (subtotal + P_PRICE + A_PRICE <= THRESHOLD && subtotal + P_PRICE + A_PRICE < MONEY) {
        count = count + 1; 
        subtotal = subtotal + P_PRICE + A_PRICE; 
        console.log(`Compra ${count}, subtotal de $/${subtotal}`);   
    }

    let w_taxes = calcTax(subtotal);
    formating(w_taxes);
}






