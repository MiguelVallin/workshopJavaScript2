const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

const doggieWalks = dogs.map((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});

console.log(doggieWalks);

const shoutyDogNames = dogs.map((dogName) => {
  return dogName.toUpperCase();
});

console.log(shoutyDogNames);
