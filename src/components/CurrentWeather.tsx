import { useWeatherStore } from '@/stores/weather-store';
import Image from 'next/image';

function CurrentWeather() {
  const { loading, weather } = useWeatherStore();

  if (loading) {
    return (
      <div className="mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-lg">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="h-10 w-20 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
          <div className="h-16 w-16 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-black dark:text-white">
          <h1 className="text-2xl font-bold">{weather?.name}</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{weather?.main.temp}°C</span>
          </div>
        </div>
        <div className="h-16 w-16">
          <Image
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt={weather?.weather[0].description || 'icon-weather'}
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
