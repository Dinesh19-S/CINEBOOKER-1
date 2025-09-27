import { Movie, Theater, Showtime } from '../types';

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'RRR',
    language: 'Telugu',
    genre: ['Action', 'Drama', 'History'],
    duration: 187,
    rating: 8.8,
    releaseDate: '2022-03-25',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A fictional story about two legendary revolutionaries and their journey away from home.',
    cast: ['Ram Charan', 'Jr NTR', 'Alia Bhatt', 'Ajay Devgn'],
    director: 'S.S. Rajamouli'
  },
  {
    id: '2',
    title: 'KGF Chapter 2',
    language: 'Kannada',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 168,
    rating: 8.4,
    releaseDate: '2022-04-14',
    poster: 'https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The blood-soaked land of Kolar Gold Fields has a new overlord now - Rocky.',
    cast: ['Yash', 'Sanjay Dutt', 'Srinidhi Shetty', 'Prakash Raj'],
    director: 'Prashanth Neel'
  },
  {
    id: '3',
    title: 'Pushpa: The Rise',
    language: 'Telugu',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 179,
    rating: 7.6,
    releaseDate: '2021-12-17',
    poster: 'https://images.pexels.com/photos/7991148/pexels-photo-7991148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A laborer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling.',
    cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil'],
    director: 'Sukumar'
  },
  {
    id: '4',
    title: 'Sooryavanshi',
    language: 'Hindi',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 145,
    rating: 5.6,
    releaseDate: '2021-11-05',
    poster: 'https://images.pexels.com/photos/7991043/pexels-photo-7991043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sooryavanshi traces the acts and serious antics of DCP Veer Sooryavanshi.',
    cast: ['Akshay Kumar', 'Katrina Kaif', 'Ajay Devgn', 'Ranveer Singh'],
    director: 'Rohit Shetty'
  },
  {
    id: '5',
    title: 'Minnal Murali',
    language: 'Malayalam',
    genre: ['Action', 'Comedy', 'Drama'],
    duration: 158,
    rating: 7.8,
    releaseDate: '2021-12-24',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'An ordinary man from a small town gets superpowers after being struck by lightning.',
    cast: ['Tovino Thomas', 'Guru Somasundaram', 'Harisree Ashokan'],
    director: 'Basil Joseph'
  },
  {
    id: '6',
    title: 'Master',
    language: 'Tamil',
    genre: ['Action', 'Crime', 'Thriller'],
    duration: 179,
    rating: 7.3,
    releaseDate: '2021-01-13',
    poster: 'https://images.pexels.com/photos/8159705/pexels-photo-8159705.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'An alcoholic professor is sent to a juvenile school where he clashes with a gangster.',
    cast: ['Vijay', 'Vijay Sethupathi', 'Malavika Mohanan', 'Andrea Jeremiah'],
    director: 'Lokesh Kanagaraj'
  }
];

export const mockTheaters: Theater[] = [
  {
    id: '1',
    name: 'PVR Cinemas',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Phoenix Mills, Lower Parel, Mumbai',
    screens: [
      {
        id: '1',
        name: 'Screen 1',
        totalSeats: 150,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 10 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 150,
                isAvailable: Math.random() > 0.3
              }))
            },
            {
              rowName: 'B',
              seats: Array.from({ length: 10 }, (_, i) => ({
                id: `B${i + 1}`,
                seatNumber: `B${i + 1}`,
                type: 'regular' as const,
                price: 150,
                isAvailable: Math.random() > 0.3
              }))
            },
            {
              rowName: 'C',
              seats: Array.from({ length: 10 }, (_, i) => ({
                id: `C${i + 1}`,
                seatNumber: `C${i + 1}`,
                type: 'premium' as const,
                price: 200,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  {
    id: '2',
    name: 'INOX',
    city: 'Delhi',
    state: 'Delhi',
    address: 'Select City Walk, Saket, New Delhi',
    screens: [
      {
        id: '2',
        name: 'Screen 1',
        totalSeats: 180,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 12 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 180,
                isAvailable: Math.random() > 0.3
              }))
            },
            {
              rowName: 'B',
              seats: Array.from({ length: 12 }, (_, i) => ({
                id: `B${i + 1}`,
                seatNumber: `B${i + 1}`,
                type: 'premium' as const,
                price: 250,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  }
];

export const mockShowtimes: Showtime[] = [
  {
    id: '1',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-20',
    time: '10:00',
    availableSeats: 45
  },
  {
    id: '2',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-20',
    time: '14:00',
    availableSeats: 32
  },
  {
    id: '3',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-20',
    time: '18:00',
    availableSeats: 28
  }
];