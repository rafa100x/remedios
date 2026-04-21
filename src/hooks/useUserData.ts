import { useState, useEffect } from 'react';

export function useUserData() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('grimorio_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [ratings, setRatings] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('grimorio_ratings');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('grimorio_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('grimorio_ratings', JSON.stringify(ratings));
  }, [ratings]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const rateRecipe = (id: number, rating: number) => {
    setRatings(prev => ({ ...prev, [id]: rating }));
  };

  return { favorites, toggleFavorite, ratings, rateRecipe };
}
