export type Rank = {
  level: number;
  title: string;
  minExp: number;
  icon: string;
};

export const RANKS: Rank[] = [
  { level: 1, title: 'Aprendiz', minExp: 0, icon: '🌱' },
  { level: 2, title: 'Caminante', minExp: 50, icon: '🌿' },
  { level: 3, title: 'Buscador de Raíces', minExp: 150, icon: '🪴' },
  { level: 4, title: 'Curandero', minExp: 300, icon: '⚕️' },
  { level: 5, title: 'Guardián de la Tierra', minExp: 600, icon: '🌳' },
  { level: 6, title: 'Maestro Ancestral', minExp: 1200, icon: '✨' }
];

export const calculateRank = (exp: number): Rank => {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (exp >= RANKS[i].minExp) {
      return RANKS[i];
    }
  }
  return RANKS[0];
};

export const getNextRank = (currentRank: Rank): Rank | null => {
  const index = RANKS.findIndex(r => r.level === currentRank.level);
  if (index >= 0 && index < RANKS.length - 1) {
    return RANKS[index + 1];
  }
  return null;
};
