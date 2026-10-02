import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [documentTitle, setDocumentTitle] = useState("");

  /* Psst - don't forget to open this in a new window so that you can
view changes to the document title in the browser tab! :) */

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  const handleTitleChange = (e) => {
    setDocumentTitle(e.target.value);
  };

  return (
    <div className="App">
      <label htmlFor="title-input">
        Type in the input and look at the browser tab!
      </label>
      <input
        id="title-input"
        type="text"
        value={documentTitle}
        onChange={handleTitleChange}
        maxLength={25}
      />
    </div>
  );
};

export default App;
