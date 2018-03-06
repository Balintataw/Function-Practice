// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function largestNum(arr) {
    var largest = arr[0];
    for (i=0;i<arr.length;i++) {
        if(arr[i] > largest)  {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNum(numbers));

// ---------------------------
// 2. Find longest string
// ---------------------------
function longestString(arr) {
    var longest = arr[0];
    for (i=0;i<arr.length;i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longestString(strings));

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evens(arr) {
    var result = [];
    for (i=0;i<arr.length;i++) {
        if(arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(evens(numbers));
// ---------------------------
// 4. Find odd numbers
// ---------------------------
function odds(arr) {
    var result = [];
    for (i=0;i<arr.length;i++) {
        if(arr[i] % 2 !== 0) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(odds(numbers));

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function containsIs(arr) {
    var result = [];
    for (i=0;i<arr.length;i++) {
        if (arr[i].includes('is')) {
            result.push(arr[i])
        }
    }    
    return result;
}

console.log(containsIs(strings))

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(concat(numbers, strings))

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
function teachJs(arr) {
    var teachersArray = [];
    for(i=0;i<arr.length;i++) {
        if(arr[i].teaches === 'JavaScript') {
            teachersArray.push(arr[i].firstname);
        }
    }
    return teachersArray.sort();
}

console.log(teachJs(instructors))