/*To run .js files those mustto be run using node, so then in the compiler section must white
node name.js 
the result to be showed must be the results of run the js file  */
///////CONCAT///////////////
var items = [1,2]
//var newItem = items.concat(3, 4, 5, undefined, "hello");
var newItem = items.concat(3, [4, 5]); // Nested array
console.log(newItem);
///////CONCAT OBJECTS///////////////

var people = [
    {name: 'Sali'},
    {name: 'Moli'}
]

var people1 = [
    {name:'Simon'},
    {name:'Ben'}
];

people. // take people array
concat(people1) // concat 
.forEach(function (person){ // concat one by one element of people1 array
    console.log(person.name);
});

// people1.forEach(function (person){
//     console.log(person.name);
// });

var name = ['chame','Alan','Osbourne'];
console.log(name.join(' '));
console.log(name.join()); // a comma is a default argument to join  

var help = ['usage',
'       foo-app<input>'
];

if(process.argv[2] === 'help'){
    console.log(help.join('\n'));
}