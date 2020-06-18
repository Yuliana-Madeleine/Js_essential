// var items = [1,2,3,4,5];
// var hasThreeNumber = items.some(x => x === 3); // this is ussefull when we want to know a short and quick answer True/False
// console.log(hasThreeNumber);

//To the dollowing example check the indexSome.html
var task = [
    {
        title: 'Do Laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Do the lessons',
        completed: true
    }
];
///To be work with indexSome.html
// var list =  document.querySelector('.task-list');
// list.classList.add(
//         task.some(task => task.completed === false)
//         ? 'task-list--uncompleted'
//         : 'task-list--completed'
// );

// list.innerHTML = task
//     .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
//     .map(x => `<li>${x}</li>`)
//     .join('');

//Other use of some: To check no duplicates when add new tittle

function addTask(title){
    if(task.some(task => task.title === title)){
        return;
    }
    task.push({title:title, completed:false});
}
addTask('Feed the dog');
console.log(task);