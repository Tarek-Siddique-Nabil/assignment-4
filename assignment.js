                                                               
                                                              
                                                              
                                                              
                                                               /*START*/



                                                             /* PROBLEM 1 */

function seerToMon(seer){
    
    if(typeof seer != 'number'){
        return 'please input a correct number'
    }

    if( seer <0){
        return 'Please enter a positive number or a large number from zero'
    }

    let mon = seer / 40;
    return mon;
}


const mon = seerToMon(40);

console.log(mon);




                                                              /* PROBLEM 2 */


  
function totalSales( shirtQuantity, pantQuantity, shoeQuantity){


    if(typeof shirtQuantity != 'number'){
        return 'please input a correct number'
    }

    if( shirtQuantity  <0){
        return 'Please enter a positive number '
    }




    if(typeof pantQuantity != 'number'){
        return 'please input a correct number'
    }

    if( pantQuantity <0){
        return 'Please enter a positive number '
    }




    if(typeof shoeQuantity != 'number'){
        return 'please input a correct number'
    }

    if( shoeQuantity <0){
        return 'Please enter a positive number '
    }



    const perShirtPrice = 100;

    const perPantPrice = 200;

    const perShoePrice = 500;




    const totalShirtPrice  =   shirtQuantity  *   perShirtPrice;


    const totalPantPrice   =   pantQuantity   *   perPantPrice;


    const totalShoePrice   =   shoeQuantity   *   perShoePrice;


    const totalPrice =  totalShirtPrice + totalPantPrice +totalShoePrice;

    return totalPrice;

}

const totalSale = totalSales(1,1,1);
console.log(totalSale);
  




                                                              /* PROBLEM 3 */



                                                              

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

const shirtsQuantity = deliveryCost(200);

console.log(shirtsQuantity);   




                                                                 /* PROBLEM 4 */



function perfectFriends(names){

    for(let i =0 ; i<names.length ;i++){
        if(names[i].length == 5){
         
            return names [i];
        }
        
    }
    
    }
    
     var names = ['bulu' , 'hablu' , 'tirtha',  'antik', 'sadman' , 'ifte' , 'aminul' ]
    var result = perfectFriends(names);
    console.log(result);
    


                                                  
                         
                                                                 /*---------------- END ------------------*/
    





