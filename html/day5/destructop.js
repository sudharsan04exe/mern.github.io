let fruits=["apple","banana","xyz"];
let [a,b,c]=fruits;
console.log(a);
console.log(b);
console.log(c);

const obj3 ={
    name1:'asdf',
    age1:'17',
    address:{
        st:"saint st",
        city:"xyz"
    }
};
const obj4 ={
    name2:'jkl',
    age2:'15'
};
// let objects=[obj3,obj4];
let {name1,age1,address}=obj3;
console.log(name1);
console.log(age1);
console.log(address);


//_______________________________________________________________________________________________


const object ={
    firstname:'dummyname',
};
 let {...n1}=object; 
//let {firstname}=object;
function funct(firstname){
    console.log(firstname);
}
funct(n1);

//________________________________________________________________________________________________
