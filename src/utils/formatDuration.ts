export function formatDuration(seconds: string | number): string {
    const totalSeconds = typeof seconds === 'string' ? parseInt(seconds, 10) : seconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    return `${hours}h ${minutes}m`;
  }
  