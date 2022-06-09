import { useParams } from "react-router-dom";

const Service = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Servicios DESARROLLO</h1>
      <p>Aqui mostramos servicios como: {slug}</p>
    </div>
  );
};

export default Service;
