import { Container, HourCard, Hours } from "./styles";

const DayWeek = () => {
  return (
    <Container>
      <h3>Today</h3>

      <Hours>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <HourCard key={i}>
            <p>1PM</p>
            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png" alt="weather" />
            <span>20°</span>
          </HourCard>
        ))}
      </Hours>
    </Container>
  );
};

export default DayWeek;
