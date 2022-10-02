console.log("coment etticete")
//alert("eat my ass")

/////verables

var i = "hello gentelan";
console.log(i);

var x = 420;
console.log (x);

document.getElementById("nWord").innerHTML = "NoNoWord";

//above is so cool

// user imput


//var I = prompt('whats your profanity Xdd');
//var y = prompt("how old are you asking for a freind")
//console.log(I);
//console.log("you're "+y+ " buttercup");
//document.getElementById("eatMyAss").innerHTML ="hi "+I+ " and you're "+y+ " buttercup";
// new leson

function name() {
    console.log("\n writing this from a funcion ")
};
//call
name();

function add(num1,num2) {
    return console.log(num1 + num2);
}
add(3,9)
// while loop
console.log("\n");
var num = 5;

while (num<50){
    num += 5;
    console.log(num);
}


//for loop
console.log ("it's a for loop now")
for(let num = 0; num <= 10 ; num+=2){
    console.log(num);
}


// var replace with"let"
//indexs
console.log("indexeses")
let body = "myAss";
let fuck = "a,b,c,d,e,";
console.log(body)
console.log(body.length);
console.log(body.indexOf("A"));
console.log(body.slice(2,5));
console.log(body.replace("Ass","Bum"));
console.log(body[4]);
console.log(fuck.split("'"));
// arrays
console.log ("now array's");
let fruits = ['apple','pinapple','fruit'];
fruits = new Array('apple','pinapple','fruit',"poop funny haha");
console.log(fruits[3]);// accessing value

//common method
console.log("to string ",fruits.toString());

console.log(fruits.join(' * '));
console.log(fruits,fruits.pop(),fruits);
console.log(fruits.push("fruit"),fruits);
fruits[fruits.length] ="new fruit";// same as push
console.log(fruits);
fruits.shift();// remove ifirst element
console.log(fruits);
fruits.unshift("unshift");// add a element
console.log(fruits);
let vegetables = ["vege","tables","third element"];
let allGro = fruits.concat(vegetables);
console.log(allGro.slice(1,6));
console.log(allGro.reverse());// u dum??
console.log(allGro.sort());// sorting in ALPHBETICAL order

let nums = [3,4,5,67,75,548,56];

console.log(nums.sort(function(a,b){return a-b})); // a-b addind b-a desending

let empty = new Array();
for(let e = 0; e < 10;e++){
    empty.push(e);
}
console.log(empty);

let pearson = {
    first : "szczepan",
    last : "rydzewski",
    age : 14,
    height : 180,
    perinf : function(){
        return this.first +"\n"+ this.last;
    }
};
console.log(pearson);
console.log(pearson.perinf());

