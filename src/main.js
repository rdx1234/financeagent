
const test = (obj) => {
    obj.username = "aajhdfbjbvjhfhohrav"
    console.log(obj.username)
} 
console.log(this);
this.username = "Amit";
console.log(this);
test(this);

console.log(this.username);