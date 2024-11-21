import React from 'react';
import {
  Gauge,
  Wind,
  Thermometer,
  Eye,
  ThermometerSnowflake,
  Cloud,
} from 'lucide-react';
import DetailItem from './DetailItem';
import { useWeatherStore } from '@/stores/weather-store';

function DetailWeather() {
  const { loading, weather } = useWeatherStore();

  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-lg">
      <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
        Weather Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 text-gray-500 dark:text-gray-400">
        <DetailItem
          icon={ThermometerSnowflake}
          label="Humidity"
          value={weather?.main.humidity + ' %'}
          loading={loading}
        />
        <DetailItem
          icon={Gauge}
          label="Pressure"
          value={weather?.main.pressure + ' hPa'}
          loading={loading}
        />
        <DetailItem
          icon={Wind}
          label="Wind"
          value={weather?.wind.speed + ' m/s'}
          loading={loading}
        />
        <DetailItem
          icon={Cloud}
          label="Cloud"
          value={weather?.clouds.all + ' %'}
          loading={loading}
        />
        <DetailItem
          icon={Thermometer}
          label="Min"
          value={weather?.main.temp_min + ' °C'}
          loading={loading}
        />
        <DetailItem
          icon={Thermometer}
          label="Max"
          value={weather?.main.temp_max + ' °C'}
          loading={loading}
        />
        <DetailItem
          icon={Thermometer}
          label="Feels like"
          value={weather?.main.feels_like + ' °C'}
          loading={loading}
        />
        <DetailItem
          icon={Eye}
          label="Visibility"
          value={weather?.visibility + ' m'}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default DetailWeather;
