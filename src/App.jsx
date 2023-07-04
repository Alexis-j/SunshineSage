import { Container, Typography } from "@mui/material";

// console.log(import.meta.env.VITE_API_KEY)


export default function App() {
  return (
  <Container
    maxWidth="xs"
    sx={{mt: 2 }}
  >
    <Typography
    variant="h3"
    component="h1"
    align="center"
    gutterBottom
    >

    SunshineSage App</Typography>
  </Container>
  );
}
