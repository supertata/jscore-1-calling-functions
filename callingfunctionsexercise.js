function calculateBirthYear (a) {

    const currentYear = 2020;
let age = a;

return (currentYear - age);

}

console.log(calculateBirthYear(3));


function nameAndAge (n,a) {
   let age = a;
   let name = n;
   const birthYear = calculateBirthYear(a);
   let message = "The person's" + " " + name + " " + "and they were born in" + " " + birthYear;


   return message;
}

console.log(nameAndAge("Laetitia", 30));