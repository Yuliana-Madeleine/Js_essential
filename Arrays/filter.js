var items = [1,2,3,4,5];
var filter = items.filter(x => x>3); // when filter, it creates a new array with contains items from the condition

//console.log(filter);

var people = [
    {
        name: 'Shane',
        pets: ['cat', 'dog']
    },
    {
        name: 'Simon',
        pets: ['horse']
    },
    // {
    //     name: 'Ben',
    //     pets: []
    // },
    {
        name: 'Ben',        
    }
];
//var filtered = people.filter(x => x.pets.length);
var filtered = people.filter(x => x.pets);
console.log(filtered);

