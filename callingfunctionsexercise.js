function calculateBirthYear (age) {
return (2020 - age);
}

console.log(calculateBirthYear(3));


function nameAndAge (name, age) {
   const birthYear = calculateBirthYear(age);
   const message = "The person's" + " " + name + " " + "and they were born in" + " " + birthYear;
   return message;
}

console.log(nameAndAge("John", 12));