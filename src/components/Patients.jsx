// eslint-disable-next-line react/prop-types
const Patients = ({ patients, SetPatient }) => {
  // eslint-disable-next-line react/prop-types
  const { name, namePropietary, email, high, symptoms } = patients;
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario{" "}
        <span className="font-normal normal-case">{namePropietary}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta <span className="font-normal normal-case">{high}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mb-2">
        <button
          onClick={() => SetPatient(patients)}
          className="p-2 m-2 bg-indigo-600 text-white  font-bold  rounded-lg hover:bg-indigo-700 uppercase"
        >
          Editar
        </button>
        <button className="p-2 m-2 bg-red-600 text-white  font-bold hover:bg-red-700 uppercase rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patients;
