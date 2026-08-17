export interface ServiceItem {
  id: string;
  name: string;
  category: 'Hair' | 'Beard' | 'Styling' | 'Kids' | 'Packages';
  description: string;
  priceNote: string; // e.g. "Price: Contact for current price"
  durationEstimated?: string;
  image: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date?: string;
  comment: string;
  isVerified?: boolean;
  avatarText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Haircuts' | 'Beard' | 'Styling' | 'Shop Interior' | 'Grooming' | 'Kids';
  image: string;
  alt: string;
  caption: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isOpenToday: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
