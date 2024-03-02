/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ patients, SetPatients }) {
  const [name, SetName] = useState("");
  const [namePropietary, SetNamePropietary] = useState("");
  const [email, SetEmail] = useState("");
  const [high, Sethigh] = useState("");
  const [symptoms, SetSymptoms] = useState("");
  const [error, SetError] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if ([name, namePropietary, email, high, symptoms].includes("")) {
      SetError(true);
    } else {
      SetError(false);
      const objectPatients = {
        name: name,
        namePropietary: namePropietary,
        email: email,
        high: high,
        symptoms: symptoms,
      };
      SetPatients([...patients, objectPatients]);
      /// reiniciar form
      SetName("");
      SetNamePropietary("");
      SetEmail("");
      Sethigh("");
      SetSymptoms("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paceintes</h2>
      <p className="text-lg mt-5 text-center mb-5 font-bold">
        Añade pacientes {""}
        <span className="text-indigo-600">Administralos</span>
      </p>
      <form
        onSubmit={HandleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div>
          {error && (
            <div className="bg-red-600 text-white text-center mb-5 p-2 font-bold uppercase rounded-md">
              Todos los campos son obligatorios
            </div>
          )}
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={namePropietary}
            onChange={(e) => SetNamePropietary(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={high}
            onChange={(e) => Sethigh(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => SetSymptoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
}

export default Form;
