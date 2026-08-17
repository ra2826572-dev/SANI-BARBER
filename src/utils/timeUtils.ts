export interface ShopStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  faisalabadTime: string;
  closesOrOpensAt: string;
}

export function getShopStatus(): ShopStatus {
  // Compute current time in Pakistan timezone (UTC+5)
  const now = new Date();
  
  // Format to get Pakistan local time components
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    weekday: 'short'
  });
  
  const timeParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).formatToParts(now);

  let hour = 0;
  let minute = 0;

  for (const part of timeParts) {
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  // Open daily: 9:00 AM (9:00) to 11:55 PM (23:55)
  const currentMinutes = hour * 60 + minute;
  const openMinutes = 9 * 60; // 9:00 AM -> 540 min
  const closeMinutes = 23 * 60 + 55; // 11:55 PM -> 1435 min

  const isOpen = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  const faisalabadTime = formatter.format(now);

  if (isOpen) {
    return {
      isOpen: true,
      statusText: 'Open Now',
      subText: 'Closes at 11:55 PM PKT',
      faisalabadTime,
      closesOrOpensAt: '11:55 PM'
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Currently Closed',
      subText: 'Opens at 9:00 AM PKT',
      faisalabadTime,
      closesOrOpensAt: '9:00 AM'
    };
  }
}
