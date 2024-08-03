import animals from '../data/animals'; // Adjust import path as necessary


const findAnimalByName = (name) => {
    return animals.find(animal => animal.name.toLowerCase() === name.toLowerCase());
  };

export default findAnimalByName;