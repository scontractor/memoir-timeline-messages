import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeProps {
  sender: string;
  receiver: string;
  content: string;
  unlockDate: Date;
}

const Envelope: React.FC<EnvelopeProps> = ({ sender, receiver, content, unlockDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isLocked = new Date() < unlockDate;

  const handleClick = () => {
    if (!isLocked) {
      setIsOpen(!isOpen);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Envelope Container */}
      <div className="relative w-64 h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg shadow-lg overflow-hidden">
        {/* Envelope Flap */}
        <motion.div
          animate={{
            rotateX: isOpen ? -180 : 0,
            transformOrigin: "bottom"
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-primary-300 to-primary-400 transform origin-bottom"
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)"
          }}
        />

        {/* Envelope Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
          {/* Sender and Receiver */}
          <div className="absolute top-4 left-4 right-4 text-center">
            <div className="text-sm text-gray-600">From: {sender}</div>
            <div className="text-lg font-semibold text-gray-800 mt-1">To: {receiver}</div>
          </div>

          {/* Lock Icon or Open Icon */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            {isLocked ? (
              <motion.div
                animate={{ scale: isHovered ? 1.2 : 1 }}
                className="text-2xl"
              >
                🔒
              </motion.div>
            ) : (
              <motion.div
                animate={{ scale: isHovered ? 1.2 : 1 }}
                className="text-2xl"
              >
                {isOpen ? "📖" : "✉️"}
              </motion.div>
            )}
          </div>
        </div>

        {/* Locked Overlay */}
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center"
          >
            <div className="text-center text-white p-4">
              <div className="text-lg font-semibold mb-2">Sealed until</div>
              <div className="text-sm">{formatDate(unlockDate)}</div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Content Modal */}
      <AnimatePresence>
        {isOpen && !isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  From {sender} to {receiver}
                </h3>
                <div className="text-sm text-gray-500">
                  {formatDate(unlockDate)}
                </div>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {content}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Envelope; 