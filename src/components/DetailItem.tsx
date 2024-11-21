import React from 'react';

interface DetailItemProps {
  icon: any;
  label: string;
  value: string;
  loading?: boolean;
}

function DetailItem({
  icon: Icon,
  label,
  value,
  loading = false,
}: DetailItemProps) {
  if (loading) {
    return (
      <div className="flex items-center gap-4 rounded-lg bg-slate-100 dark:bg-gray-600 p-4 animate-pulse">
        <div className="h-10 w-10 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-lg bg-slate-100 dark:bg-gray-600 p-4">
      <Icon className="text-gray-500 dark:text-gray-300" />
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="font-medium text-gray-700 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
}

export default DetailItem;
