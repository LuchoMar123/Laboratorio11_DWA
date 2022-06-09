import { useParams } from "react-router-dom";

const Us = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Nosotros DESARROLLO</h1>
      <p>Esta pagina de nosotros trata sobre: {slug}</p>
    </div>
  );
};

export default Us;
