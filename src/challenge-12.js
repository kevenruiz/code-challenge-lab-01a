const toLastNames = people => {
  people.map(`${people.firstName} ${people.firstName}`);
  return toLastNames(people);
};

