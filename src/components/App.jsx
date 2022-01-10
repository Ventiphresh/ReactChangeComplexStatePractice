import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleEvent(event) {
    const targetValue = event.target.value;
    const targetName = event.target.name;

    setContact((prevValue) => {
      if (targetName === "fName") {
        return {
          fName: targetValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (targetName === "lName") {
        return {
          fName: prevValue.fName,
          lName: targetValue,
          email: prevValue.email
        };
      } else if (targetName === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: targetValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleEvent} placeholder="First Name" />
        <input name="lName" onChange={handleEvent} placeholder="Last Name" />
        <input name="email" onChange={handleEvent} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
