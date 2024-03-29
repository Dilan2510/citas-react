/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";

function App() {
  const INITIAL = JSON.parse(localStorage.getItem("patients") ?? []);
  const [patients, SetPatients] = useState(INITIAL);
  const [patient, SetPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const DeletePatients = (id) => {
    const UpdatePatients = patients.filter((data) => data.id !== id);
    SetPatients(UpdatePatients);
  };

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
          DeletePatients={DeletePatients}
        ></ListPatients>
      </div>
    </div>
  );
}

export default App;
