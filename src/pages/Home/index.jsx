import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    lastname: "",
    phone: "",
    address: "",
    dni: "",
    status: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSendData = (event) => {
    //preventDefault() => para que laweb no se recargue 
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <form action="" method="post" onSubmit={handleSendData}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Home</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su correo"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su nombre"
              name="name"
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su apellido"
              name="lastname"
              fullWidth
              value={values.lastname}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su telefono"
              name="phone"
              fullWidth
              value={values.phone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su direccion"
              name="address"
              fullWidth
              value={values.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su dni"
              name="dni"
              fullWidth
              value={values.dni}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Ingrese su estado"
              name="status"
              fullWidth
              value={values.status}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">
              Home button
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Home;
