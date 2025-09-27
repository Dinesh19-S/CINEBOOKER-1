export interface User {
  id: string;
  email: string;
  username: string;
  gender?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  address?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface Movie {
  id: string;
  title: string;
  language: string;
  genre: string[];
  duration: number; // in minutes
  rating: number;
  releaseDate: string;
  poster: string;
  description: string;
  cast: string[];
  director: string;
}

export interface Theater {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  screens: Screen[];
}

export interface Screen {
  id: string;
  name: string;
  totalSeats: number;
  seatLayout: SeatLayout;
}

export interface SeatLayout {
  rows: SeatRow[];
}

export interface SeatRow {
  rowName: string;
  seats: Seat[];
}

export interface Seat {
  id: string;
  seatNumber: string;
  type: 'regular' | 'premium' | 'vip';
  price: number;
  isAvailable: boolean;
}

export interface Showtime {
  id: string;
  movieId: string;
  theaterId: string;
  screenId: string;
  date: string;
  time: string;
  availableSeats: number;
}

export interface Booking {
  id: string;
  userId: string;
  movieId: string;
  theaterId: string;
  screenId: string;
  showtimeId: string;
  selectedSeats: string[];
  totalAmount: number;
  paymentMethod: string;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface PaymentMethod {
  type: 'upi' | 'netbanking' | 'card';
  provider?: string;
  details?: any;
}