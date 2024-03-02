import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, SetPatients] = useState([]);

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Form patients={patients} SetPatients={SetPatients}></Form>
        <ListPatients {...patients}></ListPatients>
      </div>
    </div>
  );
}

export default App;
