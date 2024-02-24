import Patients from "./Patients";

function ListPatients(patients) {
  console.log();
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h3 className="font-black text-3xl text-center">Lista Pacientes</h3>
      <p className="text-lg mt-5 mb-10 text-center font-bold">
        Administra tus{""}{" "}
        <span className="text-blue-700 font-bold">Pacientes y Citas</span>
      </p>
      <Patients {...patients}></Patients>
    </div>
  );
}

export default ListPatients;
