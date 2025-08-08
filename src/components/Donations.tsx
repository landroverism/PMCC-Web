import { useState } from "react";

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value
    });
  };

  const finalAmount = selectedAmount || parseInt(customAmount) || 0;

  return (
    <section id="donations" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps us provide life-changing mental health and substance abuse 
            treatment to those who need it most. Every contribution makes a difference in someone's 
            journey to recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
            
            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Donation Amount (KES)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-3 rounded-lg border-2 font-semibold transition-colors ${
                      selectedAmount === amount
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                        : "border-gray-200 hover:border-emerald-300 text-gray-700"
                    }`}
                  >
                    KES {amount.toLocaleString()}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                />
                <span className="absolute left-4 top-3 text-gray-500">KES</span>
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="donor-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  id="donor-name"
                  name="name"
                  value={donorInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="donor-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="donor-email"
                  name="email"
                  value={donorInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="donor-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="donor-phone"
                  name="phone"
                  value={donorInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="donor-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="donor-message"
                  name="message"
                  rows={3}
                  value={donorInfo.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-vertical"
                  placeholder="Leave a message of support..."
                ></textarea>
              </div>
            </div>

            {/* Donation Summary */}
            {finalAmount > 0 && (
              <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Donation Amount:</span>
                  <span className="text-2xl font-bold text-emerald-600">
                    KES {finalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* M-Pesa Payment Instructions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Instructions</h3>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📱</span>
                <h4 className="text-xl font-semibold text-green-800">M-Pesa Payment</h4>
              </div>
              <p className="text-green-700 mb-4">
                Send your donation directly via M-Pesa to support our mission of healing and recovery.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-600 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">Step 1: Open M-Pesa</h5>
                <p className="text-gray-600">Go to M-Pesa on your phone and select "Send Money"</p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">Step 2: Enter Phone Number</h5>
                <p className="text-gray-600 mb-2">Send to either of our numbers:</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-mono text-lg font-semibold text-emerald-600">0117 684 003</p>
                  <p className="text-sm text-gray-500">or</p>
                  <p className="font-mono text-lg font-semibold text-emerald-600">0735 269 968</p>
                </div>
              </div>

              <div className="border-l-4 border-emerald-600 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">Step 3: Enter Amount</h5>
                <p className="text-gray-600">
                  {finalAmount > 0 
                    ? `Enter KES ${finalAmount.toLocaleString()} as your donation amount`
                    : "Enter your desired donation amount"
                  }
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">Step 4: Complete Transaction</h5>
                <p className="text-gray-600">Enter your M-Pesa PIN and confirm the transaction</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-2">📧 Confirmation</h5>
              <p className="text-blue-800 text-sm">
                After sending your donation, please contact us at{" "}
                <a href="mailto:presbyterianmedcare2025@gmail.com" className="underline">
                  presbyterianmedcare2025@gmail.com
                </a>{" "}
                with your M-Pesa confirmation message to receive a receipt and thank you note.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">KES 1,000</h4>
              <p className="text-gray-600 text-sm">Provides one day of meals for a patient in recovery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">KES 5,000</h4>
              <p className="text-gray-600 text-sm">Funds one therapy session for someone in need</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">KES 25,000</h4>
              <p className="text-gray-600 text-sm">Sponsors one week of residential treatment</p>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <div className="bg-emerald-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Thank You for Your Generosity</h3>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              Your donation directly supports individuals and families on their journey to recovery. 
              Together, we're building a community where healing and hope flourish. Every contribution, 
              no matter the size, makes a meaningful difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
