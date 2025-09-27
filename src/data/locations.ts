export interface State {
  id: string;
  name: string;
  cities: City[];
}

export interface City {
  id: string;
  name: string;
  stateId: string;
}

export const indianStates: State[] = [
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    cities: [
      { id: 'visakhapatnam', name: 'Visakhapatnam', stateId: 'andhra-pradesh' },
      { id: 'vijayawada', name: 'Vijayawada', stateId: 'andhra-pradesh' },
      { id: 'guntur', name: 'Guntur', stateId: 'andhra-pradesh' },
      { id: 'nellore', name: 'Nellore', stateId: 'andhra-pradesh' },
      { id: 'kurnool', name: 'Kurnool', stateId: 'andhra-pradesh' },
      { id: 'rajahmundry', name: 'Rajahmundry', stateId: 'andhra-pradesh' },
      { id: 'tirupati', name: 'Tirupati', stateId: 'andhra-pradesh' },
      { id: 'anantapur', name: 'Anantapur', stateId: 'andhra-pradesh' }
    ]
  },
  {
    id: 'telangana',
    name: 'Telangana',
    cities: [
      { id: 'hyderabad', name: 'Hyderabad', stateId: 'telangana' },
      { id: 'warangal', name: 'Warangal', stateId: 'telangana' },
      { id: 'nizamabad', name: 'Nizamabad', stateId: 'telangana' },
      { id: 'karimnagar', name: 'Karimnagar', stateId: 'telangana' },
      { id: 'khammam', name: 'Khammam', stateId: 'telangana' },
      { id: 'mahbubnagar', name: 'Mahbubnagar', stateId: 'telangana' },
      { id: 'nalgonda', name: 'Nalgonda', stateId: 'telangana' },
      { id: 'adilabad', name: 'Adilabad', stateId: 'telangana' }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    cities: [
      { id: 'chennai', name: 'Chennai', stateId: 'tamil-nadu' },
      { id: 'coimbatore', name: 'Coimbatore', stateId: 'tamil-nadu' },
      { id: 'madurai', name: 'Madurai', stateId: 'tamil-nadu' },
      { id: 'tiruchirappalli', name: 'Tiruchirappalli', stateId: 'tamil-nadu' },
      { id: 'salem', name: 'Salem', stateId: 'tamil-nadu' },
      { id: 'tirunelveli', name: 'Tirunelveli', stateId: 'tamil-nadu' },
      { id: 'erode', name: 'Erode', stateId: 'tamil-nadu' },
      { id: 'vellore', name: 'Vellore', stateId: 'tamil-nadu' },
      { id: 'thoothukudi', name: 'Thoothukudi', stateId: 'tamil-nadu' },
      { id: 'dindigul', name: 'Dindigul', stateId: 'tamil-nadu' },
      { id: 'thanjavur', name: 'Thanjavur', stateId: 'tamil-nadu' },
      { id: 'kanchipuram', name: 'Kanchipuram', stateId: 'tamil-nadu' }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    cities: [
      { id: 'bangalore', name: 'Bangalore', stateId: 'karnataka' },
      { id: 'mysore', name: 'Mysore', stateId: 'karnataka' },
      { id: 'hubli', name: 'Hubli', stateId: 'karnataka' },
      { id: 'mangalore', name: 'Mangalore', stateId: 'karnataka' },
      { id: 'belgaum', name: 'Belgaum', stateId: 'karnataka' },
      { id: 'gulbarga', name: 'Gulbarga', stateId: 'karnataka' },
      { id: 'davanagere', name: 'Davanagere', stateId: 'karnataka' },
      { id: 'bellary', name: 'Bellary', stateId: 'karnataka' },
      { id: 'bijapur', name: 'Bijapur', stateId: 'karnataka' },
      { id: 'shimoga', name: 'Shimoga', stateId: 'karnataka' },
      { id: 'tumkur', name: 'Tumkur', stateId: 'karnataka' },
      { id: 'raichur', name: 'Raichur', stateId: 'karnataka' }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    cities: [
      { id: 'kochi', name: 'Kochi', stateId: 'kerala' },
      { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', stateId: 'kerala' },
      { id: 'kozhikode', name: 'Kozhikode', stateId: 'kerala' },
      { id: 'thrissur', name: 'Thrissur', stateId: 'kerala' },
      { id: 'kollam', name: 'Kollam', stateId: 'kerala' },
      { id: 'alappuzha', name: 'Alappuzha', stateId: 'kerala' },
      { id: 'palakkad', name: 'Palakkad', stateId: 'kerala' },
      { id: 'kannur', name: 'Kannur', stateId: 'kerala' },
      { id: 'kottayam', name: 'Kottayam', stateId: 'kerala' },
      { id: 'malappuram', name: 'Malappuram', stateId: 'kerala' }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    cities: [
      { id: 'mumbai', name: 'Mumbai', stateId: 'maharashtra' },
      { id: 'pune', name: 'Pune', stateId: 'maharashtra' },
      { id: 'nagpur', name: 'Nagpur', stateId: 'maharashtra' },
      { id: 'nashik', name: 'Nashik', stateId: 'maharashtra' },
      { id: 'aurangabad', name: 'Aurangabad', stateId: 'maharashtra' },
      { id: 'solapur', name: 'Solapur', stateId: 'maharashtra' },
      { id: 'amravati', name: 'Amravati', stateId: 'maharashtra' },
      { id: 'kolhapur', name: 'Kolhapur', stateId: 'maharashtra' },
      { id: 'sangli', name: 'Sangli', stateId: 'maharashtra' },
      { id: 'akola', name: 'Akola', stateId: 'maharashtra' },
      { id: 'latur', name: 'Latur', stateId: 'maharashtra' },
      { id: 'dhule', name: 'Dhule', stateId: 'maharashtra' }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi',
    cities: [
      { id: 'new-delhi', name: 'New Delhi', stateId: 'delhi' },
      { id: 'central-delhi', name: 'Central Delhi', stateId: 'delhi' },
      { id: 'north-delhi', name: 'North Delhi', stateId: 'delhi' },
      { id: 'south-delhi', name: 'South Delhi', stateId: 'delhi' },
      { id: 'east-delhi', name: 'East Delhi', stateId: 'delhi' },
      { id: 'west-delhi', name: 'West Delhi', stateId: 'delhi' },
      { id: 'north-east-delhi', name: 'North East Delhi', stateId: 'delhi' },
      { id: 'north-west-delhi', name: 'North West Delhi', stateId: 'delhi' },
      { id: 'south-east-delhi', name: 'South East Delhi', stateId: 'delhi' },
      { id: 'south-west-delhi', name: 'South West Delhi', stateId: 'delhi' }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    cities: [
      { id: 'ahmedabad', name: 'Ahmedabad', stateId: 'gujarat' },
      { id: 'surat', name: 'Surat', stateId: 'gujarat' },
      { id: 'vadodara', name: 'Vadodara', stateId: 'gujarat' },
      { id: 'rajkot', name: 'Rajkot', stateId: 'gujarat' },
      { id: 'bhavnagar', name: 'Bhavnagar', stateId: 'gujarat' },
      { id: 'jamnagar', name: 'Jamnagar', stateId: 'gujarat' },
      { id: 'junagadh', name: 'Junagadh', stateId: 'gujarat' },
      { id: 'gandhinagar', name: 'Gandhinagar', stateId: 'gujarat' },
      { id: 'anand', name: 'Anand', stateId: 'gujarat' },
      { id: 'morbi', name: 'Morbi', stateId: 'gujarat' }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    cities: [
      { id: 'jaipur', name: 'Jaipur', stateId: 'rajasthan' },
      { id: 'jodhpur', name: 'Jodhpur', stateId: 'rajasthan' },
      { id: 'kota', name: 'Kota', stateId: 'rajasthan' },
      { id: 'bikaner', name: 'Bikaner', stateId: 'rajasthan' },
      { id: 'udaipur', name: 'Udaipur', stateId: 'rajasthan' },
      { id: 'ajmer', name: 'Ajmer', stateId: 'rajasthan' },
      { id: 'bhilwara', name: 'Bhilwara', stateId: 'rajasthan' },
      { id: 'alwar', name: 'Alwar', stateId: 'rajasthan' },
      { id: 'bharatpur', name: 'Bharatpur', stateId: 'rajasthan' },
      { id: 'sikar', name: 'Sikar', stateId: 'rajasthan' }
    ]
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    cities: [
      { id: 'kolkata', name: 'Kolkata', stateId: 'west-bengal' },
      { id: 'howrah', name: 'Howrah', stateId: 'west-bengal' },
      { id: 'durgapur', name: 'Durgapur', stateId: 'west-bengal' },
      { id: 'asansol', name: 'Asansol', stateId: 'west-bengal' },
      { id: 'siliguri', name: 'Siliguri', stateId: 'west-bengal' },
      { id: 'malda', name: 'Malda', stateId: 'west-bengal' },
      { id: 'berhampore', name: 'Berhampore', stateId: 'west-bengal' },
      { id: 'kharagpur', name: 'Kharagpur', stateId: 'west-bengal' },
      { id: 'haldia', name: 'Haldia', stateId: 'west-bengal' },
      { id: 'krishnanagar', name: 'Krishnanagar', stateId: 'west-bengal' }
    ]
  }
];