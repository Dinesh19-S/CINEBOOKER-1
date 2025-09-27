import { Movie, Theater, Showtime } from '../types';

export const mockMovies: Movie[] = [
  // Tamil Movies
  {
    id: '1',
    title: 'Vikram',
    language: 'Tamil',
    genre: ['Action', 'Thriller', 'Crime'],
    duration: 174,
    rating: 8.4,
    releaseDate: '2022-06-03',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A black-ops agent goes in search of his missing grandfather and gets entangled in a larger conspiracy.',
    cast: ['Kamal Haasan', 'Vijay Sethupathi', 'Fahadh Faasil', 'Narain'],
    director: 'Lokesh Kanagaraj'
  },
  {
    id: '2',
    title: 'Beast',
    language: 'Tamil',
    genre: ['Action', 'Comedy', 'Thriller'],
    duration: 155,
    rating: 6.1,
    releaseDate: '2022-04-13',
    poster: 'https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A spy action thriller where a RAW agent gets trapped in a mall taken over by terrorists.',
    cast: ['Vijay', 'Pooja Hegde', 'Selvaraghavan', 'Yogi Babu'],
    director: 'Nelson Dilipkumar'
  },
  {
    id: '3',
    title: 'Valimai',
    language: 'Tamil',
    genre: ['Action', 'Crime', 'Thriller'],
    duration: 179,
    rating: 6.1,
    releaseDate: '2022-02-24',
    poster: 'https://images.pexels.com/photos/7991148/pexels-photo-7991148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A police officer takes on a bike racing gang involved in various crimes.',
    cast: ['Ajith Kumar', 'Huma Qureshi', 'Kartikeya Gummakonda'],
    director: 'H. Vinoth'
  },
  {
    id: '4',
    title: 'Don',
    language: 'Tamil',
    genre: ['Action', 'Comedy', 'Drama'],
    duration: 181,
    rating: 7.7,
    releaseDate: '2022-05-13',
    poster: 'https://images.pexels.com/photos/7991043/pexels-photo-7991043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A college student becomes a don to help his friends and family.',
    cast: ['Sivakarthikeyan', 'Priyanka Arul Mohan', 'SJ Suryah'],
    director: 'Cibi Chakaravarthi'
  },
  {
    id: '5',
    title: 'Etharkkum Thunindhavan',
    language: 'Tamil',
    genre: ['Action', 'Drama', 'Thriller'],
    duration: 151,
    rating: 6.1,
    releaseDate: '2022-03-10',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A lawyer fights against cybercrime and online harassment.',
    cast: ['Suriya', 'Priyanka Arul Mohan', 'Vinay Rai'],
    director: 'Pandiraj'
  },
  
  // Telugu Movies
  {
    id: '6',
    title: 'RRR',
    language: 'Telugu',
    genre: ['Action', 'Drama', 'History'],
    duration: 187,
    rating: 8.8,
    releaseDate: '2022-03-25',
    poster: 'https://images.pexels.com/photos/8159705/pexels-photo-8159705.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A fictional story about two legendary revolutionaries and their journey away from home.',
    cast: ['Ram Charan', 'Jr NTR', 'Alia Bhatt', 'Ajay Devgn'],
    director: 'S.S. Rajamouli'
  },
  {
    id: '7',
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
    id: '8',
    title: 'Radhe Shyam',
    language: 'Telugu',
    genre: ['Romance', 'Drama', 'Thriller'],
    duration: 138,
    rating: 5.4,
    releaseDate: '2022-03-11',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A romantic drama set in Europe about a palmist who falls in love.',
    cast: ['Prabhas', 'Pooja Hegde', 'Bhagyashree', 'Krishnam Raju'],
    director: 'Radha Krishna Kumar'
  },
  {
    id: '9',
    title: 'Acharya',
    language: 'Telugu',
    genre: ['Action', 'Drama'],
    duration: 143,
    rating: 5.3,
    releaseDate: '2022-04-29',
    poster: 'https://images.pexels.com/photos/8159705/pexels-photo-8159705.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A middle-aged Naxalite-turned-social reformer launches a fight against the Endowments Department.',
    cast: ['Chiranjeevi', 'Ram Charan', 'Pooja Hegde', 'Kajal Aggarwal'],
    director: 'Koratala Siva'
  },
  {
    id: '10',
    title: 'Bheemla Nayak',
    language: 'Telugu',
    genre: ['Action', 'Drama', 'Thriller'],
    duration: 144,
    rating: 6.8,
    releaseDate: '2022-02-25',
    poster: 'https://images.pexels.com/photos/7991043/pexels-photo-7991043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A remake of the Malayalam film Ayyappanum Koshiyum about two men from different backgrounds.',
    cast: ['Pawan Kalyan', 'Rana Daggubati', 'Nithya Menen', 'Samyuktha Menon'],
    director: 'Saagar K Chandra'
  },
  
  // Hindi Movies
  {
    id: '11',
    title: 'Sooryavanshi',
    language: 'Hindi',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 145,
    rating: 5.6,
    releaseDate: '2021-11-05',
    poster: 'https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sooryavanshi traces the acts and serious antics of DCP Veer Sooryavanshi.',
    cast: ['Akshay Kumar', 'Katrina Kaif', 'Ajay Devgn', 'Ranveer Singh'],
    director: 'Rohit Shetty'
  },
  {
    id: '12',
    title: 'Gangubai Kathiawadi',
    language: 'Hindi',
    genre: ['Biography', 'Crime', 'Drama'],
    duration: 157,
    rating: 7.8,
    releaseDate: '2022-02-25',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The story of Gangubai, a young woman who becomes a powerful figure in Kamathipura.',
    cast: ['Alia Bhatt', 'Shantanu Maheshwari', 'Vijay Raaz', 'Indira Tiwari'],
    director: 'Sanjay Leela Bhansali'
  },
  {
    id: '13',
    title: 'The Kashmir Files',
    language: 'Hindi',
    genre: ['Drama', 'History'],
    duration: 170,
    rating: 8.3,
    releaseDate: '2022-03-11',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A story based on video interviews of the first generation victims of the Kashmiri Pandit genocide.',
    cast: ['Anupam Kher', 'Mithun Chakraborty', 'Darshan Kumar', 'Pallavi Joshi'],
    director: 'Vivek Agnihotri'
  },
  {
    id: '14',
    title: 'Brahmastra',
    language: 'Hindi',
    genre: ['Action', 'Adventure', 'Fantasy'],
    duration: 167,
    rating: 5.6,
    releaseDate: '2022-09-09',
    poster: 'https://images.pexels.com/photos/7991148/pexels-photo-7991148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A young man discovers he has divine powers and embarks on a journey to save the universe.',
    cast: ['Ranbir Kapoor', 'Alia Bhatt', 'Amitabh Bachchan', 'Nagarjuna'],
    director: 'Ayan Mukerji'
  },
  {
    id: '15',
    title: 'Bhool Bhulaiyaa 2',
    language: 'Hindi',
    genre: ['Comedy', 'Horror'],
    duration: 143,
    rating: 5.6,
    releaseDate: '2022-05-20',
    poster: 'https://images.pexels.com/photos/8159705/pexels-photo-8159705.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A horror-comedy about a young man who gets entangled with a vengeful spirit.',
    cast: ['Kartik Aaryan', 'Kiara Advani', 'Tabu', 'Rajpal Yadav'],
    director: 'Anees Bazmee'
  },
  
  // Malayalam Movies
  {
    id: '16',
    title: 'Minnal Murali',
    language: 'Malayalam',
    genre: ['Action', 'Comedy', 'Drama'],
    duration: 158,
    rating: 7.8,
    releaseDate: '2021-12-24',
    poster: 'https://images.pexels.com/photos/7991043/pexels-photo-7991043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'An ordinary man from a small town gets superpowers after being struck by lightning.',
    cast: ['Tovino Thomas', 'Guru Somasundaram', 'Harisree Ashokan'],
    director: 'Basil Joseph'
  },
  {
    id: '17',
    title: 'Hridayam',
    language: 'Malayalam',
    genre: ['Drama', 'Romance'],
    duration: 178,
    rating: 7.7,
    releaseDate: '2022-01-21',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A coming-of-age story that follows the life of Arun from his college days to adulthood.',
    cast: ['Pranav Mohanlal', 'Kalyani Priyadarshan', 'Darshana Rajendran'],
    director: 'Vineeth Sreenivasan'
  },
  {
    id: '18',
    title: 'Bheeshma Parvam',
    language: 'Malayalam',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 144,
    rating: 7.1,
    releaseDate: '2022-03-03',
    poster: 'https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The story of a family and the struggles they face in their business and personal lives.',
    cast: ['Mammootty', 'Soubin Shahir', 'Sreenath Bhasi', 'Shine Tom Chacko'],
    director: 'Amal Neerad'
  },
  {
    id: '19',
    title: 'CBI 5: The Brain',
    language: 'Malayalam',
    genre: ['Crime', 'Mystery', 'Thriller'],
    duration: 162,
    rating: 5.6,
    releaseDate: '2022-05-01',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sethurama Iyer CBI is back to investigate a new case involving a series of murders.',
    cast: ['Mammootty', 'Mukesh', 'Jagathy Sreekumar', 'Saikumar'],
    director: 'K. Madhu'
  },
  {
    id: '20',
    title: 'Marakkar: Lion of the Arabian Sea',
    language: 'Malayalam',
    genre: ['Action', 'Drama', 'History'],
    duration: 182,
    rating: 5.8,
    releaseDate: '2021-12-02',
    poster: 'https://images.pexels.com/photos/7991148/pexels-photo-7991148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The story of Kunjali Marakkar IV, the naval chieftain of the Zamorin of Calicut.',
    cast: ['Mohanlal', 'Arjun Sarja', 'Suniel Shetty', 'Prabhu'],
    director: 'Priyadarshan'
  },
  
  // Kannada Movies
  {
    id: '21',
    title: 'KGF Chapter 2',
    language: 'Kannada',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 168,
    rating: 8.4,
    releaseDate: '2022-04-14',
    poster: 'https://images.pexels.com/photos/8159705/pexels-photo-8159705.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The blood-soaked land of Kolar Gold Fields has a new overlord now - Rocky.',
    cast: ['Yash', 'Sanjay Dutt', 'Srinidhi Shetty', 'Prakash Raj'],
    director: 'Prashanth Neel'
  },
  {
    id: '22',
    title: '777 Charlie',
    language: 'Kannada',
    genre: ['Adventure', 'Comedy', 'Drama'],
    duration: 166,
    rating: 8.7,
    releaseDate: '2022-06-10',
    poster: 'https://images.pexels.com/photos/7991043/pexels-photo-7991043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The journey of a lonely man and his dog Charlie, and how they transform each other.',
    cast: ['Rakshit Shetty', 'Sangeetha Sringeri', 'Raj B. Shetty'],
    director: 'Kiranraj K'
  },
  {
    id: '23',
    title: 'Kantara',
    language: 'Kannada',
    genre: ['Action', 'Drama', 'Thriller'],
    duration: 148,
    rating: 8.2,
    releaseDate: '2022-09-30',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A story set in a fictional village where a conflict arises between humans and nature.',
    cast: ['Rishab Shetty', 'Sapthami Gowda', 'Kishore Kumar G'],
    director: 'Rishab Shetty'
  },
  {
    id: '24',
    title: 'Vikrant Rona',
    language: 'Kannada',
    genre: ['Action', 'Adventure', 'Mystery'],
    duration: 147,
    rating: 6.3,
    releaseDate: '2022-07-28',
    poster: 'https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A police officer investigates mysterious events in a remote village.',
    cast: ['Sudeep', 'Jacqueline Fernandez', 'Nirup Bhandari'],
    director: 'Anup Bhandari'
  },
  {
    id: '25',
    title: 'James',
    language: 'Kannada',
    genre: ['Action', 'Drama'],
    duration: 145,
    rating: 5.8,
    releaseDate: '2022-03-17',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A security guard becomes a vigilante to fight against corruption and injustice.',
    cast: ['Puneeth Rajkumar', 'Shivaraj Kumar', 'Priya Anand'],
    director: 'Chethan Kumar'
  },
  
  // English Movies
  {
    id: '26',
    title: 'Spider-Man: No Way Home',
    language: 'English',
    genre: ['Action', 'Adventure', 'Fantasy'],
    duration: 148,
    rating: 8.4,
    releaseDate: '2021-12-17',
    poster: 'https://images.pexels.com/photos/8159705/pexels-photo-8159705.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Spider-Man seeks help from Doctor Strange to restore his secret identity.',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Jacob Batalon'],
    director: 'Jon Watts'
  },
  {
    id: '27',
    title: 'The Batman',
    language: 'English',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 176,
    rating: 7.8,
    releaseDate: '2022-03-04',
    poster: 'https://images.pexels.com/photos/7991043/pexels-photo-7991043.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues.',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano', 'Jeffrey Wright'],
    director: 'Matt Reeves'
  },
  {
    id: '28',
    title: 'Doctor Strange in the Multiverse of Madness',
    language: 'English',
    genre: ['Action', 'Adventure', 'Fantasy'],
    duration: 126,
    rating: 6.9,
    releaseDate: '2022-05-06',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses.',
    cast: ['Benedict Cumberbatch', 'Elizabeth Olsen', 'Chiwetel Ejiofor', 'Benedict Wong'],
    director: 'Sam Raimi'
  },
  {
    id: '29',
    title: 'Top Gun: Maverick',
    language: 'English',
    genre: ['Action', 'Drama'],
    duration: 130,
    rating: 8.3,
    releaseDate: '2022-05-27',
    poster: 'https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator.',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm'],
    director: 'Joseph Kosinski'
  },
  {
    id: '30',
    title: 'Avatar: The Way of Water',
    language: 'English',
    genre: ['Action', 'Adventure', 'Drama'],
    duration: 192,
    rating: 7.6,
    releaseDate: '2022-12-16',
    poster: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang'],
    director: 'James Cameron'
  }
];

export const mockTheaters: Theater[] = [
  // Mumbai Theaters
  {
    id: '1',
    name: 'PVR Cinemas',
    city: 'mumbai',
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
    name: 'INOX Leisure',
    city: 'mumbai',
    state: 'Maharashtra',
    address: 'Palladium Mall, High Street Phoenix, Mumbai',
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
  },
  {
    id: '3',
    name: 'Cinepolis',
    city: 'mumbai',
    state: 'Maharashtra',
    address: 'Viviana Mall, Thane, Mumbai',
    screens: [
      {
        id: '3',
        name: 'Screen 1',
        totalSeats: 200,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 14 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 200,
                isAvailable: Math.random() > 0.3
              }))
            },
            {
              rowName: 'B',
              seats: Array.from({ length: 14 }, (_, i) => ({
                id: `B${i + 1}`,
                seatNumber: `B${i + 1}`,
                type: 'premium' as const,
                price: 280,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  {
    id: '4',
    name: 'Carnival Cinemas',
    city: 'mumbai',
    state: 'Maharashtra',
    address: 'Imax Wadala, Mumbai',
    screens: [
      {
        id: '4',
        name: 'IMAX Screen',
        totalSeats: 300,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 20 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'premium' as const,
                price: 350,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  {
    id: '5',
    name: 'MovieMax',
    city: 'mumbai',
    state: 'Maharashtra',
    address: 'Sion, Mumbai',
    screens: [
      {
        id: '5',
        name: 'Screen 1',
        totalSeats: 120,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 8 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 120,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  
  // Delhi Theaters
  {
    id: '6',
    name: 'PVR Select City Walk',
    city: 'new-delhi',
    state: 'Delhi',
    address: 'Select City Walk, Saket, New Delhi',
    screens: [
      {
        id: '6',
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
                price: 220,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  {
    id: '7',
    name: 'INOX Nehru Place',
    city: 'new-delhi',
    state: 'Delhi',
    address: 'Nehru Place, New Delhi',
    screens: [
      {
        id: '7',
        name: 'Screen 1',
        totalSeats: 160,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 10 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 200,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  
  // Chennai Theaters
  {
    id: '8',
    name: 'Sathyam Cinemas',
    city: 'chennai',
    state: 'Tamil Nadu',
    address: 'Express Avenue, Chennai',
    screens: [
      {
        id: '8',
        name: 'Screen 1',
        totalSeats: 250,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 15 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 150,
                isAvailable: Math.random() > 0.3
              }))
            }
          ]
        }
      }
    ]
  },
  
  // Bangalore Theaters
  {
    id: '9',
    name: 'PVR Forum Mall',
    city: 'bangalore',
    state: 'Karnataka',
    address: 'Forum Mall, Koramangala, Bangalore',
    screens: [
      {
        id: '9',
        name: 'Screen 1',
        totalSeats: 200,
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
            }
          ]
        }
      }
    ]
  },
  
  // Hyderabad Theaters
  {
    id: '10',
    name: 'AMB Cinemas',
    city: 'hyderabad',
    state: 'Telangana',
    address: 'Gachibowli, Hyderabad',
    screens: [
      {
        id: '10',
        name: 'Screen 1',
        totalSeats: 220,
        seatLayout: {
          rows: [
            {
              rowName: 'A',
              seats: Array.from({ length: 14 }, (_, i) => ({
                id: `A${i + 1}`,
                seatNumber: `A${i + 1}`,
                type: 'regular' as const,
                price: 160,
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
  // Movie 1 - Vikram (Tamil)
  {
    id: '1',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-21',
    time: '10:00',
    availableSeats: 45
  },
  {
    id: '2',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-21',
    time: '14:00',
    availableSeats: 32
  },
  {
    id: '3',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-21',
    time: '18:00',
    availableSeats: 28
  },
  {
    id: '4',
    movieId: '1',
    theaterId: '1',
    screenId: '1',
    date: '2024-12-21',
    time: '21:30',
    availableSeats: 55
  },
  
  // Movie 6 - RRR (Telugu)
  {
    id: '5',
    movieId: '6',
    theaterId: '2',
    screenId: '2',
    date: '2024-12-21',
    time: '09:30',
    availableSeats: 65
  },
  {
    id: '6',
    movieId: '6',
    theaterId: '2',
    screenId: '2',
    date: '2024-12-21',
    time: '13:15',
    availableSeats: 42
  },
  {
    id: '7',
    movieId: '6',
    theaterId: '2',
    screenId: '2',
    date: '2024-12-21',
    time: '17:00',
    availableSeats: 38
  },
  {
    id: '8',
    movieId: '6',
    theaterId: '2',
    screenId: '2',
    date: '2024-12-21',
    time: '20:45',
    availableSeats: 51
  },
  
  // Movie 21 - KGF Chapter 2 (Kannada)
  {
    id: '9',
    movieId: '21',
    theaterId: '3',
    screenId: '3',
    date: '2024-12-21',
    time: '10:15',
    availableSeats: 78
  },
  {
    id: '10',
    movieId: '21',
    theaterId: '3',
    screenId: '3',
    date: '2024-12-21',
    time: '14:30',
    availableSeats: 62
  },
  {
    id: '11',
    movieId: '21',
    theaterId: '3',
    screenId: '3',
    date: '2024-12-21',
    time: '18:15',
    availableSeats: 45
  },
  {
    id: '12',
    movieId: '21',
    theaterId: '3',
    screenId: '3',
    date: '2024-12-21',
    time: '22:00',
    availableSeats: 89
  }
];