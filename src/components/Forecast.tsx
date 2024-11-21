import { useWeatherStore } from '@/stores/weather-store';
import { convertDate } from '@/utils/main';
import Image from 'next/image';
import React from 'react';

function Forecast() {
  const { forecast, loading } = useWeatherStore();

  if (loading) {
    // Skeleton Loader with dark mode support
    return (
      <div className="mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-lg">
        <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
          Forecast Weather
        </h2>
        <div className="flex gap-8 text-gray-500 dark:text-gray-400 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 w-18 h-28 animate-pulse">
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded"></div>
              <div className="h-16 w-16 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              <div className="h-4 w-12 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-lg">
      <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
        Forecast Weather
      </h2>
      <div className="flex gap-8 text-gray-500 dark:text-gray-400 overflow-x-auto h-32">
        {forecast?.list.map((item: any) => (
          <div
            key={item.dt}
            className="flex flex-col items-center gap-2 w-18 h-28">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {convertDate(item.dt_txt)}
            </span>
            <Image
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={'icon-weather'}
              width={64}
              height={64}
            />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {item.main.temp}°C
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
