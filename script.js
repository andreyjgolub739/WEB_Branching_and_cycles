//Завдання 1
let age = prompt("Введіть ваш вік: ");

if (age < 7) {
    console.log("Дитина");
} else if (age >= 12 && age <= 16) {
    console.log("Підліток");
} else if (age >= 25) {
    console.log("Дорослий");
}

//Завдання 2
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

//Завдання 3
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++){
        console.log(i + " * " + j + " = " + (i * j));
    }
}