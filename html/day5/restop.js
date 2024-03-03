function fun1(...num){      //restop must be in the last
     console.log(num);
}
fun1("he",1 ,12,4,5);


function fun2(a,...num){      //restop
    console.log(num);
}
fun2("hello",1 ,12,4,5);

//---------------------------------------------------------------------------------------------

var array=[];
 function func(...num1){
        for( i=0;i<num1.length;i++){
            array[i]=(num1[i]*num1[i]);
        }
    console.log(array);
    return array;
}




console.log(func(5,2,3,5));
//________________________________________________________________________________________________

function sum(...numbers){
  
    for(let i=1;i<5;i++){
        numbers[i]=numbers[0]*numbers[i];
    }
    numbers[0]*=numbers[0];
    return numbers;
}
let a=sum(2,3,4,5,6);
console.log(a);

//__________________________________________________________________________________________________________




