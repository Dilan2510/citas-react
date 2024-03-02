// eslint-disable-next-line react/prop-types
const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-white text-center mb-5 p-2 font-bold uppercase rounded-md">
      <p>{children}</p>
    </div>
  );
};

export default Error;
