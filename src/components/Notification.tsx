import React from 'react';

interface NotificationProps {
  type: 'error' | 'info' | 'success';
  message: string;
}

function Notification({ type, message }: NotificationProps) {
  const getNotificationStyle = () => {
    switch (type) {
      case 'error':
        return 'bg-red-100 text-red-700 border-red-400';
      case 'info':
        return 'bg-blue-100 text-blue-700 border-blue-400';
      case 'success':
        return 'bg-green-100 text-green-700 border-green-400';
      default:
        return '';
    }
  };

  return (
    <div
      className={`border-l-4 p-4 rounded shadow-sm ${getNotificationStyle()} mb-4 capitalize`}
      role="alert">
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Notification;
