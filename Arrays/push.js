// var pets = ["cat","dog"];
// pets.push("Hamster");// this mdified the pets list on line
// console.log(pets)
const pets = ["cat","dog"];
const wishlist = ["hanster", "horse", "snake"];

pets.push.apply(pets,wishlist);
    //pets.push("hanster", "horse", "snake"); // same at the above line

console.log(pets);