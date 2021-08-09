function deliveryCost(shirts){

    if(typeof shirts != 'number'){
        return 'please input a correct number'
    }

    if(shirts <1){
        return 'Please enter a positive number or a large number from zero'
    }

    const firstHundredShirtCost  = 100;

    const secondHundredShirtCost = 80;

    const overTwoHundredShirtCost   = 50;

    if(shirts <= 100) {

        const firstCost =  shirts * firstHundredShirtCost;

        return firstCost;
    }

    else if(shirts <= 200){

        const firstHundredCost = 100 * firstHundredShirtCost;

        const shirtsLeft = shirts -100 ;

        const secondHundredCost = shirtsLeft *secondHundredShirtCost;

        const secondCost = firstHundredCost + secondHundredCost;

        return secondCost;

    }
    else{
        const firstHundredCost = 100 *firstHundredShirtCost;

        const secondHundredCost = 100* secondHundredShirtCost;

        const shirtsLeft = shirts - 200;

        const overTwoHundredCost = shirtsLeft * overTwoHundredShirtCost;

        const totalCost = firstHundredCost +secondHundredCost +overTwoHundredCost;

        return totalCost;
    }
}

const shirtsQuantity = deliveryCost(201);

console.log(shirtsQuantity);   