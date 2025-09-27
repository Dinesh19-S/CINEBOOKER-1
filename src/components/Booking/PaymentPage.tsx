import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Building, QrCode } from 'lucide-react';

interface PaymentPageProps {
  totalAmount: number;
  onPaymentComplete: (method: string, bookingId: string) => void;
  onBack: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ 
  totalAmount, 
  onPaymentComplete, 
  onBack 
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    selectedBank: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const upiOptions = [
    { name: 'Google Pay', icon: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=50', id: 'googlepay' },
    { name: 'PhonePe', icon: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=50', id: 'phonepe' },
    { name: 'Paytm', icon: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=50', id: 'paytm' },
    { name: 'UPI ID', icon: '@', id: 'upi' }
  ];

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank',
    'Kotak Mahindra Bank', 'IndusInd Bank', 'Yes Bank', 'Bank of Baroda'
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const bookingId = `BK${Date.now()}`;
    onPaymentComplete(selectedMethod, bookingId);
    setIsProcessing(false);
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'card':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  value={paymentDetails.cvv}
                  onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        );
      
      case 'upi':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {upiOptions.map((option) => (
                <button
                  key={option.id}
                  className="flex items-center space-x-3 p-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                >
                  {option.id === 'upi' ? (
                    <span className="text-2xl">{option.icon}</span>
                  ) : (
                    <img src={option.icon} alt={option.name} className="w-8 h-8 rounded" />
                  )}
                  <span className="text-white font-medium">{option.name}</span>
                </button>
              ))}
            </div>
            {paymentDetails.upiId && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  UPI ID
                </label>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  value={paymentDetails.upiId}
                  onChange={(e) => setPaymentDetails({...paymentDetails, upiId: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            )}
          </div>
        );
      
      case 'netbanking':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Your Bank
            </label>
            <select
              value={paymentDetails.selectedBank}
              onChange={(e) => setPaymentDetails({...paymentDetails, selectedBank: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Choose your bank</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-xl font-bold text-white">Payment</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Choose Payment Method</h2>
              
              <div className="space-y-4 mb-8">
                {/* UPI */}
                <button
                  onClick={() => setSelectedMethod('upi')}
                  className={`w-full p-6 rounded-xl transition-all duration-300 border-2 flex items-center space-x-4 ${
                    selectedMethod === 'upi' 
                      ? 'border-amber-500 bg-amber-500/10' 
                      : 'border-slate-600 bg-slate-800 hover:border-slate-500'
                  }`}
                >
                  <Smartphone className="w-8 h-8 text-amber-400" />
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-lg">UPI</h3>
                    <p className="text-gray-400">Google Pay, PhonePe, Paytm, UPI ID</p>
                  </div>
                  <div className="ml-auto">
                    <QrCode className="w-6 h-6 text-amber-400" />
                  </div>
                </button>

                {/* Net Banking */}
                <button
                  onClick={() => setSelectedMethod('netbanking')}
                  className={`w-full p-6 rounded-xl transition-all duration-300 border-2 flex items-center space-x-4 ${
                    selectedMethod === 'netbanking' 
                      ? 'border-amber-500 bg-amber-500/10' 
                      : 'border-slate-600 bg-slate-800 hover:border-slate-500'
                  }`}
                >
                  <Building className="w-8 h-8 text-amber-400" />
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-lg">Net Banking</h3>
                    <p className="text-gray-400">All major Indian banks</p>
                  </div>
                </button>

                {/* Card Payment */}
                <button
                  onClick={() => setSelectedMethod('card')}
                  className={`w-full p-6 rounded-xl transition-all duration-300 border-2 flex items-center space-x-4 ${
                    selectedMethod === 'card' 
                      ? 'border-amber-500 bg-amber-500/10' 
                      : 'border-slate-600 bg-slate-800 hover:border-slate-500'
                  }`}
                >
                  <CreditCard className="w-8 h-8 text-amber-400" />
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-lg">Card Payment</h3>
                    <p className="text-gray-400">Debit/Credit Cards (Visa, MasterCard, Rupay)</p>
                  </div>
                </button>
              </div>

              {/* Payment Form */}
              {selectedMethod && (
                <div className="bg-slate-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Payment Details</h3>
                  {renderPaymentForm()}
                </div>
              )}
            </div>

            {/* Payment Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800 rounded-xl p-6 sticky top-4">
                <h3 className="text-xl font-bold text-white mb-4">Payment Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Ticket Price</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Convenience Fee</span>
                    <span>₹{Math.round(totalAmount * 0.02)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>GST (18%)</span>
                    <span>₹{Math.round(totalAmount * 0.18)}</span>
                  </div>
                  <hr className="border-slate-600" />
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total Amount</span>
                    <span>₹{Math.round(totalAmount * 1.2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!selectedMethod || isProcessing}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isProcessing ? 'Processing...' : `Pay ₹${Math.round(totalAmount * 1.2)}`}
                </button>

                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-xs">
                    Secured by SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;