const person = {
  studentAt: "Chas",
  name: "Miguel qw",
  age: 27,
  favoriteFoods: ["Sushi", "Kolpudding", "sötpoatis", "lime"],
};

console.log(person.name);
console.log(person.age);

person.eyeColor = "dark brown";

console.log(person);

const dogs = {
  labrador: {
    adult: {
      name: "Marley",
    },
    puppy: {
      name: "Buster",
    },
  },
};

console.log(dogs.labrador.puppy.name);
