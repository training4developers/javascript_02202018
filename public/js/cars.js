

export const getCars = () => {

  return fetch('http://localhost:3010/cars')
    .then(res => res.json());

};

export const getPeople = () => {

  return fetch('http://localhost:3010/people')
    .then(res => res.json());

};