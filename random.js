const person = {
  name: "aayush",
  age: 22,
};
person.name = "sita";
const addNewProperties = () => {
  return [...person, age : person.age + 22];
};
console.log(person);
