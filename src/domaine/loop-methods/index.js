import React from "react"

function LoopMethods() {
  // 1_) Foreach Method
  // The forEach() method executes a provided function once for each array element.
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
  array1.forEach((element, index) => {
    // return a list of elements
    console.log(element, index);
  });
  // other exemple
  const items = ["item1", "item2", "item3"];
  const copyItems = [];
  // before
  for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
  }
  // after
  items.forEach((item) => {
    copyItems.push(item);
  });

  // ================================================================
  // ================================================================

  // 2_) Map Method
  // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  const array2 = [1, 2, 3, 4];
  const myMap = array2.map((element, index) => {
    return element + 1;
  });
  // return an array
  console.log(myMap);

  // ================================================================
  // ================================================================

  // 3_) Filter Method
  // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
  const array3 = [1, 2, 3, 4, 5];
  const myFilter = array3.filter((element, index) => {
    return element % 2 === 0;
  });
  // return an array
  console.log(myFilter);
  // other exemple
  // Deleting words
  const words = [
    "spray",
    "limit",
    "exuberant",
    "destruction",
    "elite",
    "present",
  ];
  const deleteWords = words.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
  });
  console.log(deleteWords);

  // ================================================================
  // ================================================================

  // 4_) Reduce Method
  // The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order,
  // passing in the return value from the calculation on the preceding element.The final result of running the reducer
  // across all elements of the array is a single value.
  const array4 = [1, 2, 3, 4];
  const myReduce = array4.reduce((element, index) => {
    return element + index;
  });
  // return a value
  console.log(myReduce);

  // other exemple
  const array = [15, 16, 17, 18, 19];

  function reducer(previous, current, index) {
    const returns = previous + current;
    console.log(
      `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
    );
    return returns;
  }

  array.reduce(reducer);

  // ================================================================
  // ================================================================

  // 5_) Some Method
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function.
  // It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns
  // false.It doesn't modify the array.
  const array5 = [1, 2, 3, 4];
  const mySome = array5.some((element, index) => {
    return element > 4;
  });
  // return a boolean
  console.log(mySome);

  // other exemple
  const fruits = ["apple", "banana", "mango", "guava"];

  function checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
  }

  checkAvailability(fruits, "kela"); // false
  checkAvailability(fruits, "banana"); // true

  // ================================================================
  // ================================================================

  // 6_) Evry Method
  // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  const array6 = [1, 2, -3, 4];
  const myEvery = array6.every((element, index) => {
    return element > 0;
  });

  // return a boolean
  console.log(myEvery);
  // other exemple
  function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough); // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true
  // ---------------
  // Modifying items
  // ---------------
  let arr = [1, 2, 3, 4];
  arr.every((elem, index, arr) => {
    arr[index + 1] -= 1;
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 2;
  });

  // Loop runs for 3 iterations, but would
  // have run 2 iterations without any modification
  //
  // 1st iteration: [1,1,3,4][0] -> 1
  // 2nd iteration: [1,1,2,4][1] -> 1
  // 3rd iteration: [1,1,2,3][2] -> 2

  // ---------------
  // Appending items
  // ---------------
  arr = [1, 2, 3];
  arr.every((elem, index, arr) => {
    arr.push("new");
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 4;
  });

  // Loop runs for 3 iterations, even after appending new items
  //
  // 1st iteration: [1, 2, 3, new][0] -> 1
  // 2nd iteration: [1, 2, 3, new, new][1] -> 2
  // 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

  // ---------------
  // Deleting items
  // ---------------
  arr = [1, 2, 3, 4];
  arr.every((elem, index, arr) => {
    arr.pop();
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 4;
  });

  // ================================================================
  // ================================================================

  // 7_) Find Method
  // The find() method returns the first element in the provided array that satisfies the provided testing function.
  //  If no values satisfy the testing function, undefined is returned.
  const array7 = [
    { _id: "a" },
    { _id: "b" },
    { _id: "c" },
    { _id: "d" },
    { _id: "e" },
  ];
  const myFind = array7.find((element, index) => {
    return element._id === "a";
  });
  // return an item
  console.log(myFind);
  // other exemple
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  const result = inventory.find(({ name }) => name === "cherries");

  console.log(result); // { name: 'cherries', quantity: 5 }

  // ================================================================
  // ================================================================

  // 8_) Find Method
  // The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
  //  If no elements satisfy the testing function, -1 is returned.
  const array8 = [
    { _id: "a" },
    { _id: "b" },
    { _id: "c" },
    { _id: "d" },
    { _id: "e" },
  ];
  const myFindIndex = array8.findIndex((element, index) => {
    return element._id === "a";
  });
  // return an index
  console.log(myFindIndex);
  // other exemple

  const fruitsTab = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

  const index = fruitsTab.findIndex((fruit) => fruit === "blueberries");

  console.log(index); // 3
  console.log(fruitsTab[index]); // blueberries

  return (
    <div>
      <p>my loops </p>
    </div>
  );
}

export default LoopMethods;
