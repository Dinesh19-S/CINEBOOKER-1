import React, { useState } from 'react';
import { Movie } from '../../types';
import MovieDetails from './MovieDetails';
import DateSelection from './DateSelection';
import TheaterSelection from './TheaterSelection';
import ShowtimeSelection from './ShowtimeSelection';
import SeatSelection from './SeatSelection';
import PaymentPage from './PaymentPage';
import BookingSummary from './BookingSummary';

interface BookingFlowProps {
  movie: Movie;
  onBack: () => void;
}

type BookingStep = 'details' | 'date' | 'theater' | 'showtime' | 'seats' | 'payment' | 'summary';

const BookingFlow: React.FC<BookingFlowProps> = ({ movie, onBack }) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('details');
  const [bookingData, setBookingData] = useState({
    selectedDate: '',
    selectedTheater: null as any,
    selectedShowtime: null as any,
    selectedSeats: [] as string[],
    totalAmount: 0,
    paymentMethod: '',
    bookingId: ''
  });

  const updateBookingData = (data: Partial<typeof bookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    const steps: BookingStep[] = ['details', 'date', 'theater', 'showtime', 'seats', 'payment', 'summary'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const steps: BookingStep[] = ['details', 'date', 'theater', 'showtime', 'seats', 'payment', 'summary'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      onBack();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'details':
        return <MovieDetails movie={movie} onNext={nextStep} onBack={prevStep} />;
      case 'date':
        return (
          <DateSelection
            selectedDate={bookingData.selectedDate}
            onDateSelect={(date) => updateBookingData({ selectedDate: date })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 'theater':
        return (
          <TheaterSelection
            selectedTheater={bookingData.selectedTheater}
            onTheaterSelect={(theater) => updateBookingData({ selectedTheater: theater })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 'showtime':
        return (
          <ShowtimeSelection
            movie={movie}
            theater={bookingData.selectedTheater}
            date={bookingData.selectedDate}
            selectedShowtime={bookingData.selectedShowtime}
            onShowtimeSelect={(showtime) => updateBookingData({ selectedShowtime: showtime })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 'seats':
        return (
          <SeatSelection
            theater={bookingData.selectedTheater}
            selectedSeats={bookingData.selectedSeats}
            onSeatsSelect={(seats, total) => updateBookingData({ selectedSeats: seats, totalAmount: total })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 'payment':
        return (
          <PaymentPage
            totalAmount={bookingData.totalAmount}
            onPaymentComplete={(method, bookingId) => {
              updateBookingData({ paymentMethod: method, bookingId });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 'summary':
        return (
          <BookingSummary
            movie={movie}
            bookingData={bookingData}
            onNewBooking={onBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {renderStep()}
    </div>
  );
};

export default BookingFlow;