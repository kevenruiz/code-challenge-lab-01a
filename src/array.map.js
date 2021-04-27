export function doubleNumbers(arr) {
  return arr.map(item => {
    const multiply = item * 2;
    return multiply;
  });
}

export function stringItUp(arr) {
  return arr.map(item => {
    const stringy = item + '';
    return stringy;
  });
}


export function capitalizeNames(arr) {
  return arr.map(name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();



  });
}

export function makeStings(arr) {
  return arr.map(person => {
    return `${person.name} ${person.age < 18 ? 'is under age!!' : 'can go to The Matrix'}`;
  });
}

