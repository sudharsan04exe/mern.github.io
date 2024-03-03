const arr1=[1,2,3];
const arr2=[2,3,4];

const arr=[...arr1,...arr2];
console.log(arr);

const obj1 ={
    name1:'asdf',
    age1:'17'
};

const obj2 ={
    name2:'jkl',
    age2:'15'
};

const obj3={...obj1,...obj2};
const obj4={...obj1}
console.log(obj4);
console.log(obj3);
