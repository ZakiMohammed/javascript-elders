// theFunction
function calculateTotal(gst, discount) {
    const gstAmount = this.amount * (gst / 100);
    return +(this.amount + gstAmount - discount).toFixed(2);
}

// theObject
const bill = { amount: 112 };

// call
// const total = calculateTotal.call(bill, 18, 15);

// apply
// const total = calculateTotal.apply(bill, [18, 15]);

// bind
const calculateTotalReloaded = calculateTotal.bind(bill);
const total = calculateTotalReloaded(18, 15);

console.log('Total:', total);