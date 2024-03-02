const Patients = (patients) => {
  console.log(patients);

  // const imprimir = () => {
  //   const data = [patients];
  //   console.log(data);
  //   data.map((e) => {
  //     console.log(e);
  //   });
  // };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre <span className="font-normal normal-case">{patients.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario{" "}
        <span className="font-normal normal-case">{patients.namePro}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email <span className="font-normal normal-case">{patients.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta{" "}
        <span className="font-normal normal-case">{patients.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas{" "}
        <span className="font-normal normal-case">{patients.name}</span>
      </p>
    </div>
  );
};

export default Patients;
