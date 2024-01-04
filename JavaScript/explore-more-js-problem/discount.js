/* 
    1. If ticket numbers is less or equal to 100,
        per ticket price : 100 tk
    2. If ticket numbers is more than 100, but less or equal to 200,
        first 100 tickets will be : 100 tk, rest ticket will be 90 tk per piece.
    3. If you purchase more than 200 ticket
        first 100 ----> 100 tk
        101 - 200 ----> 90 tk
        200+      ----> 70 tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }

    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalCost200 = first100Price + restTicketPrice;
        return totalCost200;
    }

    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCostMoreThan200 = first100Price + second100Price + restTicketPrice;
        return totalCostMoreThan200;
    }
}

const myTicketPrice = ticketPrice(205);
console.log(myTicketPrice);