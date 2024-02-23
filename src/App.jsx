import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Form></Form>
        <ListPatients></ListPatients>
      </div>
    </div>
  );
}

export default App;
