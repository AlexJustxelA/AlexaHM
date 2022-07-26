
// function luggage(a,b,c){
// if (a <=20 ){
//     console.log('Its 20 or under')

// }

// }
//  luggage(10);

// console.log("Hello")

/**
 * Write a program that simulates the following:
 * 1. Luggage is loaded into containers as it arrives.
 * 2. When weight is full, the container is loaded into the aircraft (max 40lbs.)
 * 3. At the destination, the containers are unloaded from the plane LIFO order. (last in, first out)
 * 4. Luggage is then handed back individually
 * 
 * Input: [30, 5, 6]
 * Key Point #1 Loaded into containers: [[30,5], [6]]
 * Key Point #2 LIFO Order: [[6],[30,5]]
 * Output: [6, 30, 5]
 * 
 * @param {string} input array of integers
 * @returns reordered array
 */
let luggage = []
 function luggageLoading(input) {
    
    if (input >= 40 ){
         console.log("40 or over, Restricted")
        return;
    }else(input < 39);{
       console.log("Its fine")
         
        containers =  luggage.push("Cool")
         console.log(containers); // Key Point #1
         return;
    }
        };

        luggageLoading(20);



    // 2. When weight is full, container is loaded into the aircraft (max 40lbs.)
   

    // 3. Reorder containers LIFO order
    console.log(reOrderedContainers); // Key Point #2     

    // 4. Return new reordered array of integers
    return finalArray;


console.log(luggageLoadin([30,5,6]));