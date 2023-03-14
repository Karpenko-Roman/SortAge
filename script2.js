let Mikle = {
    name: "Mikle",
    age: 66
};
let Josh = {
    name: "Josh",
    age: 30
};
let Anna = {
    name: "Anna",
    age: 12
};



let arr = [Mikle, Josh, Anna];

function sortAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}


sortAge(arr);


document.write(arr[0].name + "<br / >"); 
document.write(arr[1].name + "<br / >");
document.write(arr[2].name + "<br / >"); 