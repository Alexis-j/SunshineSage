import styled from "styled-components";
import { Droplets, Thermometer, Wind } from "lucide-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.mainText};
`;

const DayRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const DayName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainText};
  min-width: 40px;
`;

const DayIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 4px;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $color }) => $color};
`;

const TempLabels = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
  min-width: 70px;
  justify-content: flex-end;
`;

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const MetricLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

const MetricValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainText};
`;

const Placeholder = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const findMinMax = (week) => {
  let min = Infinity, max = -Infinity;
  week.forEach((d) => {
    if (d.day.mintemp_c < min) min = d.day.mintemp_c;
    if (d.day.maxtemp_c > max) max = d.day.maxtemp_c;
  });
  return { min, max, range: max - min || 1 };
};

const AnalyticsView = ({ weather }) => {
  if (!weather?.week) {
    return <Placeholder>Search a city to see analytics</Placeholder>;
  }

  const week = weather.week;
  const { min, range } = findMinMax(week);
  const temps = week.map((d) => ({
    low: d.day.mintemp_c,
    high: d.day.maxtemp_c,
  }));

  return (
    <Container>
      <Card>
        <Title>Temperature Trend</Title>
        {week.map((d, i) => {
          const lowPct = ((d.day.mintemp_c - min) / range) * 100;
          const highPct = ((d.day.maxtemp_c - min) / range) * 100;
          return (
            <DayRow key={i}>
              <DayName>
                {i === 0
                  ? "Today"
                  : new Date(d.date + "T12:00:00").toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
              </DayName>
              <DayIcon src={"https:" + d.day.condition.icon} alt="" />
              <BarTrack>
                <BarFill
                  $pct={highPct - lowPct}
                  $color={({ theme }) => theme.colors.brandColor}
                  style={{ marginLeft: `${lowPct}%` }}
                />
              </BarTrack>
              <TempLabels>
                <span style={{ color: "#4FC3F7" }}>{Math.round(d.day.mintemp_c)}°</span>
                <span style={{ color: "#FF7043" }}>{Math.round(d.day.maxtemp_c)}°</span>
              </TempLabels>
            </DayRow>
          );
        })}
      </Card>

      <MetricGrid>
        <MetricCard>
          <MetricLabel>
            <Droplets size={14} /> Avg Humidity
          </MetricLabel>
          <MetricValue>
            {Math.round(
              week.reduce((a, d) => a + d.day.avghumidity, 0) / week.length
            )}
            %
          </MetricValue>
        </MetricCard>

        <MetricCard>
          <MetricLabel>
            <Wind size={14} /> Avg Wind
          </MetricLabel>
          <MetricValue>
            {Math.round(
              week.reduce((a, d) => a + d.day.maxwind_kph, 0) / week.length
            )}
            km/h
          </MetricValue>
        </MetricCard>

        <MetricCard>
          <MetricLabel>
            <Thermometer size={14} /> Avg Temp
          </MetricLabel>
          <MetricValue>
            {Math.round(
              week.reduce((a, d) => a + d.day.avgtemp_c, 0) / week.length
            )}
            °C
          </MetricValue>
        </MetricCard>

        <MetricCard>
          <MetricLabel>UV Index</MetricLabel>
          <MetricValue>
            {Math.round(
              week.reduce((a, d) => a + d.day.uv, 0) / week.length
            )}
          </MetricValue>
        </MetricCard>
      </MetricGrid>
    </Container>
  );
};

export default AnalyticsView;
