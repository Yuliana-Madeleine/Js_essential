const items = [
    {
        active: true,
        firstname:'Shane',
        lastname: 'Ousbourne'
    },
    {
        active: true,
        firstname:'Sally',
        lastname: 'Ousbourne'
    },
    {
        active: false,
        firstname:'Ben',
        lastname: 'Barker'
    }
];

const mapped = items
    .filter(x => x.active)
    .map(x => x.firstname);

console.log(createHtmlList(mapped));

function createHtmlList(items){
    const listElements = items.map(x => `<li>${x}</li>`).join('');
    return `<ul>${listElements}</li>`;
}
