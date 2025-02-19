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

// const fruits = ["Banana", "Orange", "Apple", "Mango"];   //appends new element at the end of array and display that in the output -- output : Kiwi
// console.log(fruits[fruits.length] = "Kiwi");


// const fruits = ["Banana", "Orange", "Apple", "Mango"];   
// console.log(delete fruits[0]);      // output : true
// console.log(fruits);    //output: [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]


// let mycars = ["volvo", "BMW" , "G-wagon" ];
// let mybikes = ["Ninja" , "Tirumph" , "Ktm" ];
// let myVehicles = mycars.concat(mybikes);            //to join arrays we use array1name.concat(array2,array-n)

// console.log(myVehicles);                    //output : [ 'volvo', 'BMW', 'G-wagon', 'Ninja', 'Tirumph', 'Ktm' ]


//copyWithin() method doubt 


// const myArr = [[1,2],[3,4],[5,6]]; //creates single array from nested array
// console.log(myArr.flat());


//flatmap method doubt-----

// let entities = ["bag" , "bottle"] ;              //splice method- arrayname.splice(start_index , no.of elements to be removed , "new element")
// console.log(entities.splice(2,0,"pens"));
// console.log(entities);



//splice to remove or add new element              // Remember syntax (start_index , no.of elements to be removed)
// let entities = ["bag" , "bottle"] ;
// console.log(entities.splice(0,1));
// console.log(entities);                     //only item left --output : [ 'bottle' ]

//slice to remove an element
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1));                    //output : [ 'Orange', 'Lemon', 'Apple', 'Mango' ] 

// slice creates new array , it doesn't remove elements from main array


// let array = ["abhi","akki","vibhu","abu"];          //It includes first argument value and previous value to second argument
// console.log(array.slice(1,3));                  // output : [ 'akki', 'vibhu' ]
// console.log(Array.slice(1));                        //// output : [ 'akki', 'vibhu' , 'abu']


// const fruits = ["Banana", "Orange", "Apple", "Mango"];       //arrayname.toString() converts array to string but does'nt replace commas
// console.log(fruits.toString());                              //output :  Banana,Orange,Apple,Mango
 

 


