/*var items = [1,2,3,4,5];
var copy = items.slice();

console.log(items);
copy.push(6);
console.log(copy);*/

/*var person = {name :'Shane'};
var items = [1, person];
var copy = items.slice();
//console.log(items);

copy[1].name = 'Steff';
console.log(items);
console.log(copy);*/

/*var items = [1,2,3,4,5,6,7,8];
var copy = items.slice(0,1);
var copy2 = items.slice(4);
var copy3 = items.slice(-1);
var copy4 = items.slice(1,-1);

console.log(copy);
console.log(copy2);
console.log(copy3);
console.log(copy4);*/

var person = {
    name: 'Yuliana-Madeleine'
};

var filters = {
    'deslugify': x => x.replace('-', ''),
    'uppercase': x => x.toUpperCase()
};
var input = 'name | deslugify | uppercase';

var sections = input.split('|').map( x => x.trim());
console.log(sections);
var ref = person[sections[0]];
var output = sections
    .slice(1)
    .reduce((prev, next) => {
        if(filters[next]){
            return filters[next].call(null, prev);
        }
        return prev;
        }, ref);
console.log(output);