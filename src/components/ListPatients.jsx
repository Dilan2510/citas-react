/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Patients from "./Patients";

function ListPatients({ patients, SetPatient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {patients && patients.length ? (
        <>
          <h3 className="font-black text-3xl text-center">Lista Pacientes</h3>
          <p className="text-lg mt-5 mb-10 text-center font-bold">
            Administra tus{""}{" "}
            <span className="text-blue-700 font-bold">Pacientes y Citas</span>
          </p>

          {patients.length !== 0 ? (
            patients.map((patients) => (
              <Patients
                patients={patients}
                key={patients.id}
                SetPatient={SetPatient}
              />
            ))
          ) : (
            <p>No hay pacientes aún</p>
          )}
        </>
      ) : (
        <>
          <h3 className="font-black text-3xl text-center">No hay pacientes</h3>
          <p className="text-lg mt-5 mb-10 text-center font-bold">
            Agrege nuevos {""}{" "}
            <span className="text-blue-700 font-bold">
              Pacientes para poder visualizarlos
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListPatients;
