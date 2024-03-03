
// function func1(callback){
//     setTimeout(function(){
//         var result = callback(1, 2, '+');
//         console.log(result);
//     },2000);   
// }
// function func2(n1, n2, op){
//     var val = 0;
//     if(op == '+') {
//         val = n1 + n2;
//     } else {
//         val = n1 - n2;
//     }
//     return val;
// }
// func1(func2);


function calc(a,b,res)
{
    let c = a+b;
    res(c);

}

function result(a)
{
    console.log(a);
}

calc(5,2,result)

//__________________________________________________________________________
// function func1(){
//     console.log(func2(1,2,'+'));
//  }
//  function func2(n1,n2,op){
//      var val=0;
//      if(op=='+')val=n1+n2;
//      else val=n1-n2;
//      return val;
//  }
//  func1();

//___________________________________________________________________________

