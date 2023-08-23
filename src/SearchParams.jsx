import { useState } from "react";

const SearchParams = () => {
  // useState is a hook
  // the [] here is array unpacking
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const BREEDS = ["Poodle"];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => {
              setAnimal(event.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={BREEDS.length === 0}
            onChange={(event) => {
              setBreed(event.target.value);
            }}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
