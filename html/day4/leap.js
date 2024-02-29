let year="3/2/2020";
let date=year.split("/");
if((date[0]>31 || date[1]>12 || date[2].length!=4)||(date[0]>29 && date[1]==2)||(date[0]==30 && (date[1]==4 || date[1]==6 || date[1]==9 || date[1]==11))||(date[30]==31 && (date[1]==2|| date[1]==4 || date[1]==6 || date[1]==9 || date[1]==11))){
    console.log("invalid date");
}
else{
        console.log("Valid date");
    if((year%4==0 && year%100!=0) || year%400==0){
        console.log("Leap year");
    }
    else{
        console.log("Not a leap year");
    }
}
