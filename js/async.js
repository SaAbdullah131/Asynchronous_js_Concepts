
const processOrder = (customer) => {
    console.log(`Processing Order for customer 1`);

    setTimeout(() => {
            console.log(`Order Processed for customer 1`); // set this asynchronous into a queue
    }, 3000);
};
console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
