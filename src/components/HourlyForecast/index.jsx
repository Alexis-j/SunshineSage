import { CloudRain } from "lucide-react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  HourCard,
  HourTemp,
  HourTime,
  RainChance,
  ScrollContainer,
  Section,
  SectionHeader,
  SectionTitle,
} from "./styles";

const HourlyForecast = ({ weather }) => {
  const [unit] = useLocalStorage("unit", "C");

  if (!weather?.hourly) return null;

  const now = new Date();
  const currentHour = now.getHours();

  const hours = weather.hourly.filter((h) => {
    const hHour = new Date(h.time).getHours();
    return hHour >= currentHour;
  });

  if (hours.length === 0) return null;

  const convert = (c) => (unit === "C" ? c : (c * 9) / 5 + 32);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Hourly Forecast</SectionTitle>
      </SectionHeader>
      <ScrollContainer>
        {hours.slice(0, 8).map((h, i) => {
          const hHour = new Date(h.time).getHours();
          const isNow = i === 0;
          const rainChance = h.chance_of_rain ?? 0;
          return (
            <HourCard key={i} $active={isNow}>
              <HourTime>{isNow ? "Now" : `${hHour.toString().padStart(2, "0")}h`}</HourTime>
              <img
                src={"https:" + h.condition.icon}
                alt={h.condition.text}
              />
              <HourTemp>{convert(h.temp_c).toFixed(0)}°</HourTemp>
              {rainChance > 0 && (
                <RainChance $chance={rainChance}>
                  <CloudRain size={10} />
                  {rainChance}%
                </RainChance>
              )}
            </HourCard>
          );
        })}
      </ScrollContainer>
    </Section>
  );
};

export default HourlyForecast;
