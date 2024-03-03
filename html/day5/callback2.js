// function calc(a,res)
// {
//   for(i=0;i<a;i++){
//      if(i%2==0)res(i);
//   }
// }
// function result(a)
// {
//     console.log(a);
// }
// calc(15,result);

// _________________________________________________________
function calc(res,...a)
{
    for(i=0;i<a.length;i++){
        if(a[i]%2==0) res(a[i]);
    }
}
function result(a)
{
    console.log(a);
}
calc(result,1,2,3,4,5,6)
// _______________________________________________________________
