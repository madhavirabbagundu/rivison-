// the callback is suppose we have a function and pass an argument to another function then that 
//function is excuted then the other function is called callback function

function callback(sum){
    console.log("sum is ${sum}",sum)

}
function first(a,b,callback){
//  var a = 20
//  var b = 40
  sum = a+b
 callback(sum)
}
first(3,6,callback)