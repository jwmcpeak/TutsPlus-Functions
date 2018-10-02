// function sum(a, b) {
//     console.log(this);
// }

// window.sum();


let person = {
    firstName: 'John',
    lastName: 'Doe',
    sayHello() {
        
        console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
        console.log(this);
    }
};

let person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
};

let newFunction = person.sayHello.bind(person2);


document.getElementById('myButton').addEventListener('click', newFunction);