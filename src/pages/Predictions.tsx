import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Envelope from '../components/Envelope';
import CountdownTimer from '../components/CountdownTimer';
import { getPredictions, Prediction } from '../lib/supabase';

const Predictions: React.FC = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);
  const [earliestUnlockDate, setEarliestUnlockDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const data = await getPredictions();
        setPredictions(data);
        
        // Find the earliest unlock date
        if (data.length > 0) {
          const dates = data.map(p => new Date(p.unlock_date));
          const earliest = new Date(Math.min(...dates.map(d => d.getTime())));
          setEarliestUnlockDate(earliest);
        }
      } catch (error) {
        console.error('Error fetching predictions:', error);
        // Fallback to sample data
        setPredictions(samplePredictions);
        setEarliestUnlockDate(new Date('2024-12-31'));
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  // Sample predictions for development
  const samplePredictions: Prediction[] = [
    {
      id: '1',
      sender: 'Rajvee',
      receiver: 'Sharvari',
      content: "Dear Sharvari, I predict that by your 30th birthday, you'll have achieved incredible success in your career while maintaining the beautiful balance of family and personal growth. Your determination and kindness will continue to inspire everyone around you. Here's to many more years of friendship!",
      unlock_date: '2024-12-31',
      created_at: '2024-01-01'
    },
    {
      id: '2',
      sender: 'Tanisha',
      receiver: 'Sharvari',
      content: "Sharvari, my dear friend! I see you becoming a true leader in your field, mentoring others with the same grace and wisdom you've always shown. Your home will be filled with love, laughter, and maybe even a little one running around. You'll continue to be the rock that holds us all together.",
      unlock_date: '2024-12-31',
      created_at: '2024-01-01'
    },
    {
      id: '3',
      sender: 'Sharvari',
      receiver: 'Rajvee',
      content: "Rajvee, you amazing soul! I predict you'll have written that book you've always dreamed of, and it will touch countless lives. Your creativity and passion will lead you to new adventures, and you'll still be the one making us laugh until our sides hurt. Your future is as bright as your smile!",
      unlock_date: '2024-12-31',
      created_at: '2024-01-01'
    },
    {
      id: '4',
      sender: 'Tanisha',
      receiver: 'Rajvee',
      content: "Rajvee, my creative genius! I see you becoming a published author with a loyal following. Your stories will inspire people worldwide, and you'll be traveling to book signings and literary festivals. Your home will be a cozy haven filled with books, art, and the love of your life. Dreams do come true!",
      unlock_date: '2024-12-31',
      created_at: '2024-01-01'
    },
    {
      id: '5',
      sender: 'Sharvari',
      receiver: 'Tanisha',
      content: "Tanisha, my beautiful friend! I predict you'll be running your own successful business, combining your passion for helping others with your incredible organizational skills. You'll have created a space where people feel safe, supported, and empowered. Your impact will be felt far and wide.",
      unlock_date: '2024-12-31',
      created_at: '2024-01-01'
    },
    {
      id: '6',
      sender: 'Rajvee',
      receiver: 'Tanisha',
      content: "Tanisha, the most organized person I know! I see you building an empire of your own, helping others achieve their dreams while living yours. You'll have the perfect work-life balance, traveling the world, and still being the glue that holds our friendship together. You're unstoppable!",
      unlock_date: '2024-12-31',
      created_at: '2024-01-01'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Future Predictions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover what we envision for each other's future. Each envelope contains heartfelt predictions written with love and hope.
          </p>

          {/* Countdown Timer */}
          {earliestUnlockDate && (
            <div className="mb-12">
              <CountdownTimer 
                targetDate={earliestUnlockDate}
                onComplete={() => {
                  // Refresh predictions when countdown completes
                  window.location.reload();
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex justify-center"
            >
              <Envelope
                sender={prediction.sender}
                receiver={prediction.receiver}
                content={prediction.content}
                unlockDate={new Date(prediction.unlock_date)}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {predictions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No predictions yet
            </h3>
            <p className="text-gray-600">
              Predictions will appear here once they're added to the system.
            </p>
          </motion.div>
        )}

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 italic">
              "The best way to predict the future is to create it together. Here's to our shared dreams and the beautiful journey ahead."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Predictions; 