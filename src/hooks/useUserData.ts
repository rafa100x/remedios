import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export function useUserData() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('grimorio_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [shoppingList, setShoppingList] = useState<number[]>(() => {
    const saved = localStorage.getItem('grimorio_shopping_list');
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
    localStorage.setItem('grimorio_shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('grimorio_ratings', JSON.stringify(ratings));
  }, [ratings]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(f => f !== id);
      } else {
        toast.success("Receta guardada", { description: "Se ha añadido a tus fórmulas guardadas." });
        return [...prev, id];
      }
    });
  };

  const toggleShoppingList = (id: number) => {
    setShoppingList(prev => {
      if (prev.includes(id)) {
        return prev.filter(f => f !== id);
      } else {
        toast.success("Añadido a insumos", { description: "Los ingredientes se han añadido a tu lista." });
        return [...prev, id];
      }
    });
  };

  const clearShoppingList = () => {
    setShoppingList([]);
    toast("Lista limpiada");
  };

  return { favorites, toggleFavorite, shoppingList, toggleShoppingList, clearShoppingList, ratings, rateRecipe };

  function rateRecipe (id: number, rating: number)  {
    setRatings(prev => ({ ...prev, [id]: rating }));
    toast.success("¡Gracias por calificar!");
  };
}
