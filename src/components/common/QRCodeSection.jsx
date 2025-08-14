import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaCopy, FaQrcode } from "react-icons/fa";
import { companyDetails } from "../../content/constant";
import qrCodeImage from "../../assets/images/qr code.jpg";
import toast from "react-hot-toast";

const QRCodeSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyNumber = async () => {
    try {
      // Extract phone number from WhatsApp link
      const phoneNumber =
        companyDetails.whatsappLink.split("=")[1] || companyDetails.phone2;
      await navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true);
      toast.success("Phone number copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy phone number");
    }
  };

  const handleWhatsAppClick = () => {
    window.open(companyDetails.whatsappLink, "_blank");
  };

  return (
    <section
      data-aos="fade-up"
      className="wrapper py-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl my-8"
    >
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaQrcode size={30} className="text-green-600" />
          <h3 className="text2 text-gray-800">Scan & Connect via WhatsApp</h3>
        </div>
        <p className="desc text-gray-600 max-w-2xl mx-auto">
          Scan the QR code below with your WhatsApp app to start a conversation
          with us instantly. Quick, easy, and direct communication for all your
          inquiries.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* QR Code Display */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleWhatsAppClick}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-green-200 hover:scale-105">
            <img
              src={qrCodeImage}
              alt="WhatsApp QR Code"
              className="w-64 h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div
              className={`absolute inset-0 bg-green-600 bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center text-white">
                <IoLogoWhatsapp size={60} className="mx-auto mb-3" />
                <p className="text-lg font-semibold">Click to Chat</p>
                <p className="text-sm opacity-90">Open WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Floating WhatsApp icon */}
          <div className="absolute -top-3 -right-3 bg-green-500 rounded-full p-2 shadow-lg">
            <IoLogoWhatsapp size={24} className="text-white" />
          </div>
        </div>

        {/* Interactive Info Panel */}
        <div className="space-y-6 max-w-md">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <IoLogoWhatsapp className="text-green-500" />
              Quick Connect
            </h4>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">
                  Whatsapp Number:
                </span>
                <span className="text-gray-900 font-semibold">
                  {companyDetails.whatsappNumber}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">
                  Business Hours:
                </span>
                <span className="text-gray-900 font-semibold">
                  24/7 Available
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <IoLogoWhatsapp size={20} />
                Start WhatsApp Chat
              </button>

              <button
                onClick={handleCopyNumber}
                className={`w-full border-2 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isCopied
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700"
                }`}
              >
                <FaCopy size={16} />
                {isCopied ? "Copied!" : "Copy Phone Number"}
              </button>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h5 className="font-semibold text-blue-800 mb-2">💡 Pro Tips:</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Save our number for quick access</li>
              <li>• Send us your project requirements</li>
              <li>• Get instant quotes and consultations</li>
              <li>• Share files and screenshots directly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
