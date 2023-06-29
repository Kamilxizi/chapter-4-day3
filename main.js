// const age = 18;

// console.log(age < 30);

//const age = 20;

//console.log(age > 18 && age , 40)

//console.log(true && false && true);

//----------  И && ----------

// const age =20;

// console.log(5 < 3 && age > 18 )//false соблюдать все

// console.log(false && true && true )//false    true+ false-

// --------------- ИЛИ ||---------------

// console.log( true || false )//true

// console.log( true || false || false || false )//true

// const age = 19;

// console.log(age > 21 || age > 18)
// console.log( false    || true )//true
// console.log( false || false)//false

// const isAdmin = false ;
// const text = "main/js";
// const result = false || true;
// const result = isAdmin || text ;//true

//-------------------НЕ ! ----------------

// const book = "Hello";
// const author = null;
// const title = "";
// const result = !book || title || "1" || author; // будет 1
// //const result = book || title || "1" || author; // HeLLo
// //onst result = !!book || title || "1" || author // true
// // !! BOOK ==> BOOLEAN (TRUE) одно и тоже
// console.log(result);

//---------------- Вместе -------------
// && importent than ||
//console.log(true || ( false && true ))// true
//console.log("Hello" && false || falsenull && true )//true
//console.log("Hello" && false || "" && true)// НИЧЕГО
// console.log("Hello" && false || (null && true))
//               (true && false )   (null && false)
// false || null
// null

// console.log("" || (30 && '1' && 10 == 10) || false )
//             "" || (30 && '1' && 10 ==10)  || false
// false || true || false
// true

//console.log( 321 && '1')//будет 1
// console.log(!true)// false
// console.log(!'')// true
// console.log(!5)//false
// console.log(!0)//true
//console.log(!!false)//true
//console.log(!!50)//true

// console.log(!true || !""); //true

// const stringNumber = "100"
// console.log(!! stringNumber)//true
//console.log(+stringNumber)//
// console.log(+true); //1
// console.log(-false); //2
// console.log(+null); //0
// console.log(+undefined); //0 not a number
// console.log(+"5")//5
// console.log(+"5enfcjnajnfc")//not a number
//console.log(+"5h")// not a number
//console.log(+"h5")//not a number

//-------- parsenInt ()----------
console.log(parseInt("23")); //23
console.log(parseInt("50h")); //50)
console.log(parseInt("h50")); // not a number
console.log(parseInt("50true")); //50

// ПРИОРИТЕТНАСТЬ 1) ! ; 2) && ; 3) || ;

const x = true;

const result = x && name1; //Eror
