/*var help = ['usage',
'       foo-app<input>'
];

if(process.argv[2] === 'help'){
    console.log(help.join('\n'));
}*/

var name = 'yuliana madeleine';
var upperName = name.split(' ') // create an array [yuliana, madeleine]
                    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) //  [Yuliana, Madeleine]
                    .join(' ');
console.log("Capitalized: " + upperName);

var allUpper = name.split(' ')
                   .map(x => x.toUpperCase())
                   .join(' ');
console.log("All Uppercase: " + allUpper);
