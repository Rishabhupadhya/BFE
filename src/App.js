import React, { useState, useEffect } from "react";
import JsonInputForm from "./components/JsonInputForm";

const App = () => {
  const [response, setResponse] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);

  // Set roll number as title
  useEffect(() => {
    document.title = "Your Roll Number"; // Replace with actual roll number
  }, []);

  const filterResponse = () => {
    if (!response) return null;

    let filteredResponse = {};
    if (dropdownOptions.includes("alphabets")) {
      filteredResponse.alphabets = response.alphabets;
    }
    if (dropdownOptions.includes("numbers")) {
      filteredResponse.numbers = response.numbers;
    }
    if (dropdownOptions.includes("highest-lowercase")) {
      filteredResponse["highest-lowercase"] = response["highest-lowercase"];
    }
    return filteredResponse;
  };

  return (
    <div>
      <h1>JSON Processor</h1>
      <JsonInputForm
        setResponse={setResponse}
        setDropdownOptions={setDropdownOptions}
      />
      {response && <pre>{JSON.stringify(filterResponse(), null, 2)}</pre>}
    </div>
  );
};

export default App;
