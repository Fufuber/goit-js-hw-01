
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("USA", 50, 15)); // "Shipping to USA will cost 65 credits"
console.log(getShippingMessage("Canada", 100, 20)); // "Shipping to Canada will cost 120 credits"
console.log(getShippingMessage("Germany", 200, 50)); // "Shipping to Germany will cost 250 credits"