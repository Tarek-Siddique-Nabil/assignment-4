function totalSales( shirtQuantity, pantQuantity, shoeQuantity){


    if(typeof shirtQuantity && pantQuantity && shoeQuantity != 'number'){
        return 'please input a correct number'
    }

    if( shirtQuantity && pantQuantity && shoeQuantity  <-1 ){
        return 'Please enter a positive number '
    }




    // if(typeof pantQuantity != 'number'){
    //     return 'please input a correct number'
    // }

    // if( pantQuantity <0){
    //     return 'Please enter a positive number '
    // }




    // if(typeof shoeQuantity != 'number'){
    //     return 'please input a correct number'
    // }

    // if( shoeQuantity <0){
    //     return 'Please enter a positive number '
    // }



    const perShirtPrice = 100;

    const perPantPrice = 200;

    const perShoePrice = 500;




    const totalShirtPrice  =   shirtQuantity  *   perShirtPrice;


    const totalPantPrice   =   pantQuantity   *   perPantPrice;


    const totalShoePrice   =   shoeQuantity   *   perShoePrice;


    const totalPrice =  totalShirtPrice + totalPantPrice +totalShoePrice;

    return totalPrice;

}

const totalSale = totalSales(1,2,1);
console.log(totalSale);
  