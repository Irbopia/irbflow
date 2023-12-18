import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeStamp(createdAt: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - createdAt.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = now.getMonth() - createdAt.getMonth() + 12 * (now.getFullYear() - createdAt.getFullYear());

  if (diffInMonths > 0) {
    if (diffInMonths === 1) {
      return '1 month ago';
    } else {
      return `${diffInMonths} months ago`;
    }
  } else if (diffInWeeks > 0) {
    if (diffInWeeks === 1) {
      return '1 week ago';
    } else {
      return `${diffInWeeks} weeks ago`;
    }
  } else if (diffInDays > 0) {
    if (diffInDays === 1) {
      return '1 day ago';
    } else {
      return `${diffInDays} days ago`;
    }
  } else if (diffInHours > 0) {
    if (diffInHours === 1) {
      return '1 hour ago';
    } else {
      return `${diffInHours} hours ago`;
    }
  } else if (diffInMinutes > 0) {
    if (diffInMinutes === 1) {
      return '1 minute ago';
    } else {
      return `${diffInMinutes} minutes ago`;
    }
  } else {
    return 'Just now';
  }
}


export function formatNumber(value: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  } else {
    return value.toLocaleString();
  }
}
