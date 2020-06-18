var items = [10,20,30,2];
//items.sort(); // this compare is compare as a string in "unicode"
//items.sort((a,b) => a-b);// this is to compare number
items.sort((a,b) => {
    //console.log(a-b);
    /*if(a-b === 0) return 0;
    if(a-b < 0) return -1;// 5474567
    if(a-b > 0) return 1;//5456745674*/
});

items.sort((a,b) => a-b); //ASC
items.sort((a,b) => b-a); //DESC
console.log(items);

