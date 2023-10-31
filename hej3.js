const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

const printDogName = (dogName) => {
  console.log("The " + dogName + " barks.");
};

dogs.forEach(printDogName);

const printDogNameUpperCase = (dog) => {
  console.log(dog.toUpperCase());
};

dogs.forEach(printDogNameUpperCase);

dogs.forEach(function (dog) {
  console.log("The " + dog + " needs to take a walk!");
});
