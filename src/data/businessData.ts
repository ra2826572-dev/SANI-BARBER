import { ServiceItem, ReviewItem, GalleryItem } from '../types';
import kidsBarberHaircutImg from '../assets/images/kids_barber_haircut_1786958941635.jpg';

export const BUSINESS_INFO = {
  name: 'Sani Barber Faisalabad',
  shortName: 'Sani Barber',
  tagline: 'Sharp Cuts. Clean Style. Professional Grooming.',
  description: 'Professional barbering and grooming in Faisalabad, with a clean environment and a focus on quality service.',
  
  address: {
    street: 'Plot 248 Ghulistaan Rd, Freed Colony',
    area: 'Gulshan Colony',
    city: 'Faisalabad',
    province: 'Punjab',
    postalCode: '38000',
    country: 'Pakistan',
    full: 'Plot 248 Ghulistaan Rd, Freed Colony, Gulshan Colony, Faisalabad, Pakistan',
    urduFull: 'پلاٹ 248، گلستان روڈ، فرید کالونی، گلشن کالونی، فیصل آباد، پاکستان',
    landmark: 'Ghulistaan Road, near Freed Colony entrance, Gulshan Colony',
    landmarkUrdu: 'گلستان روڈ، نزد فرید کالونی، گلشن کالونی، فیصل آباد',
    coordinates: {
      lat: 31.4082,
      lng: 73.0725
    },
    googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+248+Ghulistaan+Rd+Freed+Colony+Gulshan+Colony+Faisalabad+Pakistan',
    appleMapsUrl: 'https://maps.apple.com/?q=Plot+248+Ghulistaan+Rd,+Freed+Colony,+Gulshan+Colony,+Faisalabad,+Pakistan',
    // Embedded Google Map query URL with high compatibility
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Plot+248+Ghulistaan+Rd,+Freed+Colony,+Gulshan+Colony,+Faisalabad,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed'
  },
  
  rating: {
    score: 4.6,
    maxScore: 5.0,
    reviewCount: 22,
    source: 'Google Reviews',
    starsText: '4.6 / 5 — 22 Reviews'
  },
  
  hours: {
    dailySchedule: 'Monday – Sunday: 9:00 AM – 11:55 PM',
    summary: 'Open Daily (9:00 AM – 11:55 PM)',
    openHour: 9,      // 9:00 AM
    openMinute: 0,
    closeHour: 23,    // 11:55 PM
    closeMinute: 55,
    days: [
      { day: 'Monday', time: '9:00 AM – 11:55 PM' },
      { day: 'Tuesday', time: '9:00 AM – 11:55 PM' },
      { day: 'Wednesday', time: '9:00 AM – 11:55 PM' },
      { day: 'Thursday', time: '9:00 AM – 11:55 PM' },
      { day: 'Friday', time: '9:00 AM – 11:55 PM' },
      { day: 'Saturday', time: '9:00 AM – 11:55 PM' },
      { day: 'Sunday', time: '9:00 AM – 11:55 PM' },
    ]
  },
  
  // Explicit placeholders where information has not been provided
  placeholders: {
    phone: 'Phone number to be added',
    phoneRaw: '',
    whatsapp: 'WhatsApp number to be added',
    whatsappRaw: '',
    email: 'Email address to be added',
    instagram: 'Instagram link to be added',
    facebook: 'Facebook link to be added',
    priceNote: 'Price: Contact for current price'
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'haircut',
    name: 'Haircut',
    category: 'Hair',
    description: 'Precision scissor and clipper haircut tailored to your head shape, hair type, and desired look in a clean, sanitized station.',
    priceNote: 'Price: Contact for current price',
    durationEstimated: '30 - 45 mins',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
    popular: true
  },
  {
    id: 'beard-grooming',
    name: 'Beard Grooming',
    category: 'Beard',
    description: 'Beard trimming, sharp outline razor shaping, clean neck lining, and beard care product application.',
    priceNote: 'Price: Contact for current price',
    durationEstimated: '20 - 30 mins',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop',
    popular: true
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'Styling',
    description: 'Wash, blow-dry styling, volume texture finishing, and quality hair setting products for daily or special occasions.',
    priceNote: 'Price: Contact for current price',
    durationEstimated: '20 - 25 mins',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'kids-haircut',
    name: 'Kids Haircut',
    category: 'Kids',
    description: 'Gentle, patient, and stylish haircuts for children of all ages in a welcoming and comfortable family environment.',
    priceNote: 'Price: Contact for current price',
    durationEstimated: '25 - 35 mins',
    image: kidsBarberHaircutImg,
    popular: true
  },
  {
    id: 'hair-beard-combo',
    name: 'Hair & Beard Grooming',
    category: 'Packages',
    description: 'Full signature haircut combined with complete beard shaping, edge lineup, and finishing refresh.',
    priceNote: 'Price: Contact for current price',
    durationEstimated: '45 - 60 mins',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
    popular: true
  },
  {
    id: 'premium-grooming',
    name: 'Premium Grooming',
    category: 'Packages',
    description: 'Comprehensive grooming experience with detailed haircut, beard styling, refreshing wash, and quality product finish.',
    priceNote: 'Price: Contact for current price',
    durationEstimated: '60 mins',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop'
  }
];

export const AUTHENTIC_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Muqaddas',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'Very good experience. The shop is well-maintained and provides a clean and comfortable environment for grooming.',
    isVerified: true,
    avatarText: 'M'
  },
  {
    id: 'rev-2',
    author: 'ALI SHAHZAD',
    rating: 5,
    date: 'Verified Google Review',
    comment: "Shanii's work is awesome, great products!!",
    isVerified: true,
    avatarText: 'AS'
  },
  {
    id: 'rev-3',
    author: 'Moazzam Piya',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'A good hair dresser.',
    isVerified: true,
    avatarText: 'MP'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Fade & Cut',
    category: 'Haircuts',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
    alt: 'Clean haircut fade hairstyle reference',
    caption: 'Modern gradient fade with clean edge work.'
  },
  {
    id: 'gal-2',
    title: 'Sharp Beard Lining',
    category: 'Beard',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop',
    alt: 'Beard trim and styling detail',
    caption: 'Crisp beard trim and razor outline detailing.'
  },
  {
    id: 'gal-3',
    title: 'Professional Barber Tools',
    category: 'Shop Interior',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    alt: 'Clean barber workstation tools',
    caption: 'Sanitized clippers, scissors, and quality grooming equipment.'
  },
  {
    id: 'gal-4',
    title: 'Classic Pompadour & Texture',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    alt: 'Classic hair styling and volume',
    caption: 'Structured men styling with clean texture and hold.'
  },
  {
    id: 'gal-5',
    title: 'Patient & Gentle Kids Cut',
    category: 'Kids',
    image: kidsBarberHaircutImg,
    alt: 'Smiling young boy haircut styling at Sani Barber',
    caption: 'Comfortable haircut experience designed for young children.'
  },
  {
    id: 'gal-6',
    title: 'Complete Grooming Finish',
    category: 'Grooming',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop',
    alt: 'Clean grooming finish and hot towel touch',
    caption: 'Refreshed styling and detailed neck finish.'
  },
  {
    id: 'gal-7',
    title: 'Comfortable Barber Chairs',
    category: 'Shop Interior',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
    alt: 'Comfortable barber shop chair setup',
    caption: 'Well-maintained, spacious seating and organized setup.'
  },
  {
    id: 'gal-8',
    title: 'Modern Scissor Work',
    category: 'Haircuts',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    alt: 'Detailed scissor haircut technique',
    caption: 'Handcrafted scissor styling tailored to hair density.'
  }
];
