interface Location {
    coordinates: [number, number];
    type: string;
  }
  
  interface Car {
    _id: string;
    user: string;
    carAddress: string;
    destination: string;
    isElectric: boolean;
    features: string[];
    car_image: string[];
    location: Location;
    rating: number;
    trip: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    licensePlateNum: string;
    make: string;
    model: string;
    year: number;
    bags: number;
    deliveryFee: number;
    discountAmount: number;
    discountDays: number;
    doors: number;
    fuelType: string;
    seats: number;
    carType: string;
    transmission: string;
    vehicleType: string;
    finePerKm: number;
    hostLicenseBackImage: string;
    hostLicenseFrontImage: string;
    maxTravelDistancePerDay: number;
    pricePerDay: number;
    description: string;
    status: string;
  }
  
  interface User {
    _id: string;
    authId: string;
    name: string;
    email: string;
    role: string;
    phone_number: string;
    rating: number;
    cars: unknown[]; 
    createdAt: string;
    updatedAt: string;
    __v: number;
    address: string;
    profile_image: string;
  }
  
  interface Host {
    _id: string;
    name: string;
    createdAt: string;
    rating: number;
    trip: number;
    profile_image: string;
  }
  
  export interface Trip {
    _id: string;
    car: Car;
    user: User;
    host: Host;
    tripStartDate: string;
    tripStartTime: string;
    tripStartDateTime: string;
    tripEndDate: string;
    tripEndTime: string;
    tripEndDateTime: string;
    isPickupAtLocation: boolean;
    pickupLocation: string | null;
    returnLocation: string;
    tripPrice: number;
    maxTripDistance: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  