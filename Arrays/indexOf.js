/*var family = ['shane', 'sally', 'Issac'];
var exist = family.indexOf('kittie') > -1;
console.log(family.indexOf('kittie'));// result is -1 because doesn't exist
console.log(exist);
if(!exist){
    family.push('kittie');
}
console.log(family);*/

/*
var family = ['shane', 'kittie','sally', 'Issac'];
console.log(family.indexOf('Kittie', 2)); // -1 because Kittie doesn't exist on index 2
*/

var yuly = {name: 'Yuly'};
var maria = {name: 'Maria'};
var alvaro = {name: 'Alvaro'};

/*var family = [yuly, maria];
console.log(family.indexOf(alvaro)); // -1 because doend't exist into the array
*/
/*
var family = [yuly, maria, alvaro];
console.log(family.indexOf(alvaro));
*/

/***************************** */

var whitelist = ['.css', '.js'];

var events = [
    {file: 'css/core.css'},
    {file: 'js/app.js'},
    {file:'index.html'}
];

var filtered = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
});

console.log(filtered);