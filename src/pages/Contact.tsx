import React from 'react';
import { Mail, Phone, MapPin, CreditCard, IndianRupee } from 'lucide-react';

export const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-purple-600">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Payment Options</h1>
          <p className="text-xl max-w-2xl">
            Secure and convenient payment methods for our services
          </p>
        </div>
      </section>

      {/* Contact and Payment Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Contact Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Vijayawada, AP.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Phone Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +91 7799 2121 99
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      27dstudio@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Payment Methods
              </h2>

              <div className="space-y-8">
                {/* Bank Transfer */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <CreditCard className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bank Transfer</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p><span className="font-medium">Account Name:</span> Dream Studio</p>
                    <p><span className="font-medium">Bank Name:</span> IDFC BANK</p>
                    <p><span className="font-medium">Account Number:</span> 100 7895 1010</p>
                    <p><span className="font-medium">IFSC Code:</span> IDFB0080392</p>
                    <p><span className="font-medium">Branch:</span> Vijayawada Gayatri Nagar Branch</p>
                  </div>
                </div>

                {/* UPI Payment */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <IndianRupee className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SCAN QR CODE</h3>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://lctech.in/dreamstudio/qrcode.jpg" 
                      alt="UPI QR Code"
                      className="w-full max-w-[300px] h-auto"
                    />
                  </div>
                </div>

                {/* Payment Note */}
                <div className="text-sm text-gray-500 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Important Note:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Please include your name and service in the payment description</li>
                    <li>Send payment confirmation to our email or WhatsApp</li>
                    <li>For large transactions, please contact us before making the payment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};