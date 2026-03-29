import { Card, Container, Grid } from "./styles";

const RightPanel = () => {
  return (
    <Container>
      <h3>Today Highlights</h3>

      <Grid>
        <Card>
          <p>Humidity</p>
          <h2>76%</h2>
        </Card>

        <Card>
          <p>Wind</p>
          <h2>12 km/h</h2>
        </Card>

        <Card>
          <p>Feels Like</p>
          <h2>18°</h2>
        </Card>

        <Card>
          <p>UV Index</p>
          <h2>5</h2>
        </Card>
      </Grid>
    </Container>
  );
};

export default RightPanel;
