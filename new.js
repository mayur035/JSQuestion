// //1
function fibonacciArray(n) {
    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; 
    }

    return fibArray;
}
const res=10;
const fibonacciResult = fibonacciArray(res);
console.log("answer of 1st:",fibonacciResult.filter((ele)=>{return ele<res}));

// 2
const pattern=`/^Test@123$/`//regex pattern
const input="Test@123"
const output=pattern.match(input)?"Password is vaild":"Password is not vaild"
console.log("answer of 2nd:",output);


// 3
function User(num){
    return function(){
        return ++num
    }
}
console.log("answer of 3rd:",User(2)());//when you call function user then it return function with its laxical scope

//4
const data = [
    { name: 'John',age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
]

data.sort((a, b) => a.age - b.age);
console.log("answer of 4th:",data);

//5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunks = [];
for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
  chunks.push(chunk);
}
console.log("answer of 5th:",chunks); 

// 6
const ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const flat = ar.flat(Infinity);
const number = flat.sort((a, b) => { return a - b });
console.log("answer of 6th:",Math.max(...number));

