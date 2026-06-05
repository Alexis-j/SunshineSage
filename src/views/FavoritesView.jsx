import { useState } from "react";
import { Heart, MapPin, Plus, Trash2 } from "lucide-react";
import styled from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";

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

const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.brandColor};
  }
`;

const CityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainText};
`;

const RemoveBtn = styled.button`
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.error};
    background: rgba(239, 83, 80, 0.1);
  }
`;

const AddSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const AddInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.gradients.brand};
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.02);
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ActiveBadge = styled.span`
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.brandColor}20;
  color: ${({ theme }) => theme.colors.brandColor};
  font-weight: 600;
`;

const FavoritesView = ({ city, onSelectCity }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [input, setInput] = useState("");

  const addFavorite = () => {
    const name = input.trim();
    if (name && !favorites.includes(name)) {
      setFavorites([...favorites, name]);
      setInput("");
    }
  };

  const removeFavorite = (e, name) => {
    e.stopPropagation();
    setFavorites(favorites.filter((f) => f !== name));
  };

  return (
    <Container>
      <Card>
        <Title>
          <Heart size={16} style={{ marginRight: 6, verticalAlign: "middle" }} />
          Favorite Cities
        </Title>

        {favorites.length === 0 ? (
          <EmptyState>
            <MapPin size={32} opacity={0.3} />
            <span>No favorites yet. Add a city to get started.</span>
          </EmptyState>
        ) : (
          favorites.map((name) => (
            <FavoriteItem key={name} onClick={() => onSelectCity(name)}>
              <CityInfo>
                <MapPin size={16} />
                {name}
                {city && name.toLowerCase() === city.toLowerCase() && (
                  <ActiveBadge>Active</ActiveBadge>
                )}
              </CityInfo>
              <RemoveBtn onClick={(e) => removeFavorite(e, name)}>
                <Trash2 size={14} />
              </RemoveBtn>
            </FavoriteItem>
          ))
        )}

        <AddSection>
          <AddInput
            placeholder="Add city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addFavorite()}
          />
          <AddBtn onClick={addFavorite}>
            <Plus size={16} /> Add
          </AddBtn>
        </AddSection>
      </Card>
    </Container>
  );
};

export default FavoritesView;
