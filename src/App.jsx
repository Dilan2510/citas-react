/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, SetPatients] = useState([]);
  const [patient, SetPatient] = useState({});

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          SetPatients={SetPatients}
          patient={patient}
          SetPatient={SetPatient}
        ></Form>
        <ListPatients
          patients={patients}
          SetPatient={SetPatient}
        ></ListPatients>
      </div>
    </div>
  );
}

export default App;
