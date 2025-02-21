// Array start

// let ary = ["car", "Bike", "Truck"];
// console.log(ary);

// console.log(ary.length); //To check length of array we use array_name.length --output : 3

// console.log(ary.toString()); //converts array to string with commas --Output : car,Bike,Truck

// console.log(ary[2]);   //to get requested element from index  -- output : Truck

// console.log(ary.at(1));   //similar to index -- output : Bike

// console.log(ary.join(""));    ////Joins array and make a string --output : carBikeTruck

// console.log(ary.pop());         //Removes last element from array and display in output --output : Truck

// ary.push ("Jet") ;   
// console.log(ary.push ("Jet"));    // pushes new element and shows index of new element --output: 5

// console.log(ary.shift());        //removes first element and shifts all other elements left side output will be item which is removed --output :car

// console.log(ary.unshift("Plane"));      //adds new element to array in the beginning and shows array's length in output -- output: 4


// To add new element in array ------------------------------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];   //appends new element at the end of array and display that in the output -- output : Kiwi
// console.log(fruits[fruits.length] = "Kiwi");

// To delete any element from array ---------------------------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];   
// console.log(delete fruits[0]);      // output : true
// console.log(fruits);    //output: [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]

// Joining arrays ----------------------------------------------------------------------- 
// let mycars = ["volvo", "BMW" , "G-wagon" ];
// let mybikes = ["Ninja" , "Tirumph" , "Ktm" ];
// let myVehicles = mycars.concat(mybikes);            //to join arrays we use array1name.concat(array2,array-n)

// console.log(myVehicles);                    //output : [ 'volvo', 'BMW', 'G-wagon', 'Ninja', 'Tirumph', 'Ktm' ]


//copyWithin() method doubt 


// flat() -----------------------------------------------------------------------------------
//creates single array from nested array

// const myArr = [[1,2],[3,4],[5,6]]; 
// console.log(myArr.flat());


//flatmap method doubt-----



// splice() ------------------------------------------------------------------------------------------------------------
// syntax: (start_index , no.of elements to be removed,new-item1,item2,.....)
// Modifies the original array (mutates it).
//Used for Adding, removing, replacing elements
// Returns the removed elements (if any).

//e.g : To remove bag from array ---------------------------------             
// let entities = ["bag" , "bottle"] ;
// console.log(entities.splice(0,1));
// console.log(entities);                     //only item left --output : [ 'bottle' ]


// let nums = [1,2,3,4,5]
// nums.splice(1,2,"x","y")                    //here index = 1 with value 2 is starting point and , 2 items are to be removed (2,3), x and y to be added
// console.log(nums)                           //(If we don't add x and y it will only delete items 2,3 )

// Output: [ 1, 'x', 'y', 4, 5 ]




// slice() Method-------------------------------------------------------------------------------------------------
// Does not modify the original array (creates a new array).
// Extracts a portion of an array.
// Returns a shallow copy of the selected elements.
// Syntax: array.slice(startIndex, endIndex);

//e.g - 1:------------------------------------------------------------
// const nums = [11,22,33,44,55]
// const slicednums = nums.slice(1,3)

// console.log(slicednums) 

//e.g - 2:------------------------------------------------------------
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1));                    //output : [ 'Orange', 'Lemon', 'Apple', 'Mango' ] 


//e.g - 3:--------------------------------------------------------------
// let array = ["abhi","akki","vibhu","abu"];          //It includes first argument value and previous value to second argument
// console.log(array.slice(1,3));                  // output : [ 'akki', 'vibhu' ]
// console.log(Array.slice(1));                        //// output : [ 'akki', 'vibhu' , 'abu']

// xyz

 


