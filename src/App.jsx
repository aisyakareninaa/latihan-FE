import React, { useState, useEffect } from "react";
import Select from "react-select";

function App() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/berry/")
      .then((response) => response.json())
      .then((data) =>
        setOptions(
          data.results.map((result) => ({
            value: result.name,
            label: result.name,
          }))
        )
      );
  }, []);

  const sortedOptions = options.sort((a, b) => {
    return a.label.localeCompare(b.label, "es");
  });

  function handleChange(selected) {
    setSelectedOption(selected);
  }

  return (
    <div className="flex justify-center">
      <div className="relative inline-block w-1/2 mt-28">
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={sortedOptions}
          className="block appearance-none bg-white border border-gray-400
          hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight
          focus:outline-none focus:shadow-outline"
        />
      </div>
      {selectedOption && (
        <p className="mt-4 text-center">
          result options : {selectedOption.label}
        </p>
      )}
    </div>
  );
}

export default App;
