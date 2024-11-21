import { useThemeStore } from '@/stores/theme-store';
import { Moon, Search, Sun } from 'lucide-react';
import React, { useState } from 'react';

interface HeaderProps {
  handleSearch: (city: string) => void;
}

function Header({ handleSearch }: HeaderProps) {
  const [city, setCity] = useState<string>('');
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const onSearch = async (event: any) => {
    event.preventDefault();
    setCity(event.target.city.value);

    await handleSearch(city);
  };

  return (
    <header className="mb-6 flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
      <div className="flex items-center gap-2">
        {isDarkMode ? (
          <Moon
            className="h-6 w-6 cursor-pointer text-yellow-300"
            onClick={toggleDarkMode}
          />
        ) : (
          <Sun
            className="h-6 w-6 cursor-pointer text-yellow-500"
            onClick={toggleDarkMode}
          />
        )}
        <span className="text-lg font-semibold text-black dark:text-white">
          Weather App
        </span>
      </div>
      <div className="relative w-full max-w-xs">
        <form onSubmit={onSearch} className="flex">
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update state city
            className="w-full rounded-l-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none text-black dark:text-white dark:bg-gray-700 dark:border-gray-600"
            placeholder="Search for cities"
          />
          <button
            type="submit"
            className="rounded-r-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none flex items-center dark:bg-yellow-500">
            <Search className="h-4 w-4 dark:text-black" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
