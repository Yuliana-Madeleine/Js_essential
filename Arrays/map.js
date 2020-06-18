// const items =  [1,2,3,4,5];
// const mapped = items.map(function(item){
//     return item * 2;
// });
// console.log(mapped);

// const items = ["1","2","3","4","5"];
// const mapped = items.map(function (items){
//     return Number(items);
// }
// );
// console.log(mapped);


// const names = ["   Shane", "Sally    "];
// // const mapped =  items.map(x => x.trim());
// // console.log(mapped);
// const mapped = names.map(function (name){
//     return {
//         firstname: name.trim()
//     }
// });
// console.log(mapped);
// mapped.forEach(function(person){
//     console.log(person.firstname);
// });


const items = [
    {
        firstname:'Shane',
        lastname: 'Ousbourne'
    },
    {
        firstname:'Sally',
        lastname: 'Ousbourne'
    }
];
const mapped = items.map(x => {
    return {
        firstname: x.firstname,
        lastname: x.lastname,
        fullname: x.firstname + ' ' + x.lastname
    }
});

// mapped.forEach(function(person){
//         console.log(person.fullname);
// });

console.log(createHtmlList(['cat','dog','parrot']));
console.log(createHtmlList(items));

function createHtmlList(items){
    const listElements = items.map(x => `<li>${x.firstname}</li>`).join('');
    return `<ul>${listElements}</li>`;
}