export function convertDate(datetime: Date) {
  return new Date(datetime).toLocaleDateString('id-ID', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });
}
