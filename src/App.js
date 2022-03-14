import './App.scss';
import List from "./List.json";
import './buttons.scss';
import { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState({
    name: "",
    food: "",
    pet: ""
  });
  const [people, setPeople] = useState(List);

  // useEffect(() => {
  //   console.log("Running useEffect hook...");
  //   getPeopleList();
  // }, [setPeople]);

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
    console.log(form);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newPerson = {
      id: people.length + 1,
      name: form.name,
      food: form.food,
      pet: form.pet
    }
    getPeopleList(newPerson);
  }

  function getPeopleList(person) {
    if(person) {
      setPeople([...people, person]);
    } else {
      setPeople(List);
    }
  }

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="form__input"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="food"
          type="text"
          placeholder="Food"
          className="form__input"
          value={form.food}
          onChange={handleChange}
        />
        <input
          name="pet"
          type="text"
          placeholder="Pet"
          className="form__input"
          value={form.pet}
          onChange={handleChange}
        />
        <input
          className="button form__submit"
          type="submit"
          value="Submit"
          id="input-submit"
        />
      </form>
      <div className="people">
        {people.map((person) => {
          return (
            <div className="people__item" key={person.id}>
              <p className="people__item-value">{person.name}</p>
              <p className="people__item-value">{person.food}</p>
              <p className="people__item-value">{person.pet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
