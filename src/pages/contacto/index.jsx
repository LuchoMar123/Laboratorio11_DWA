import { useParams } from "react-router-dom";

const Contact = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Contactanos DESARROLLO</h1>
      <p>Comuniquenos atraves de: {slug}</p>
    </div>
  );
};

export default Contact;
