// A mock function to mimic making an async request for data
import faker from 'faker';

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
}


export function fetchPerson(person = faker.helpers.contextualCard()) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: person }), 10)
  );
}
