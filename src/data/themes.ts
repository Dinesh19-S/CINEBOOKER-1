export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'dark-purple',
    name: 'Dark Purple',
    colors: {
      primary: 'from-purple-600 to-blue-600',
      secondary: 'from-amber-600 to-orange-600',
      accent: 'purple-500',
      background: 'slate-900',
      surface: 'slate-800',
      text: 'white',
      textSecondary: 'gray-400'
    }
  },
  {
    id: 'dark-red',
    name: 'Dark Red',
    colors: {
      primary: 'from-red-600 to-pink-600',
      secondary: 'from-orange-600 to-red-600',
      accent: 'red-500',
      background: 'gray-900',
      surface: 'gray-800',
      text: 'white',
      textSecondary: 'gray-400'
    }
  },
  {
    id: 'dark-blue',
    name: 'Dark Blue',
    colors: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'from-indigo-600 to-blue-600',
      accent: 'blue-500',
      background: 'slate-900',
      surface: 'slate-800',
      text: 'white',
      textSecondary: 'gray-400'
    }
  },
  {
    id: 'dark-green',
    name: 'Dark Green',
    colors: {
      primary: 'from-green-600 to-emerald-600',
      secondary: 'from-teal-600 to-green-600',
      accent: 'green-500',
      background: 'gray-900',
      surface: 'gray-800',
      text: 'white',
      textSecondary: 'gray-400'
    }
  },
  {
    id: 'light-blue',
    name: 'Light Blue',
    colors: {
      primary: 'from-blue-500 to-cyan-500',
      secondary: 'from-indigo-500 to-blue-500',
      accent: 'blue-600',
      background: 'gray-50',
      surface: 'white',
      text: 'gray-900',
      textSecondary: 'gray-600'
    }
  },
  {
    id: 'light-purple',
    name: 'Light Purple',
    colors: {
      primary: 'from-purple-500 to-pink-500',
      secondary: 'from-indigo-500 to-purple-500',
      accent: 'purple-600',
      background: 'gray-50',
      surface: 'white',
      text: 'gray-900',
      textSecondary: 'gray-600'
    }
  }
];