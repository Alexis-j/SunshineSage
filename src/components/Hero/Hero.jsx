import { MapPin } from "lucide-react";
import { Greeting, HeroSection, Location, LocationRow, Phrase, Subtitle } from "./styles";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

const Hero = ({ weather }) => {
  return (
    <HeroSection>
      <Greeting>{getGreeting()}</Greeting>
      {weather ? (
        <>
          <LocationRow>
            <MapPin size={20} />
            <Location>
              {weather.city}, {weather.country}
            </Location>
          </LocationRow>
          <Phrase>{weather.condition}</Phrase>
        </>
      ) : (
        <Subtitle>Search a city to see current weather</Subtitle>
      )}
    </HeroSection>
  );
};

export default Hero;
