import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  date: string;
  caption: string;
  imageUrl: string;
}

const Timeline: React.FC = () => {
  // Sample timeline data - replace with actual data
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: "2015",
      caption: "The beginning of our friendship journey",
      imageUrl: "/assets/timeline-photo-1.jpg"
    },
    {
      id: 2,
      date: "2017",
      caption: "First road trip together",
      imageUrl: "/assets/timeline-photo-2.jpg"
    },
    {
      id: 3,
      date: "2019",
      caption: "Graduation celebrations",
      imageUrl: "/assets/timeline-photo-3.jpg"
    },
    {
      id: 4,
      date: "2021",
      caption: "Supporting each other through challenges",
      imageUrl: "/assets/timeline-photo-4.jpg"
    },
    {
      id: 5,
      date: "2023",
      caption: "Celebrating milestones together",
      imageUrl: "/assets/timeline-photo-5.jpg"
    },
    {
      id: 6,
      date: "2024",
      caption: "Looking forward to the future",
      imageUrl: "/assets/timeline-photo-6.jpg"
    }
  ];

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
            Our Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through the years, filled with laughter, tears, and unforgettable moments.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 to-secondary-200 transform -translate-y-1/2" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 to-secondary-200" />

          {/* Timeline Items */}
          <div className="md:flex md:overflow-x-auto md:pb-8 md:space-x-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="md:flex-shrink-0 md:w-80 mb-12 md:mb-0"
              >
                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                      >
                        <div className="text-2xl font-bold text-primary-600 mb-2">
                          {item.date}
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {item.caption}
                        </p>
                      </motion.div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg" />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-lg overflow-hidden shadow-lg"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📸</div>
                            <div className="text-sm">Photo {item.id}</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex">
                  {/* Timeline Dot */}
                  <div className="relative mr-6">
                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-4"
                    >
                      <div className="text-xl font-bold text-primary-600 mb-2">
                        {item.date}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {item.caption}
                      </p>
                      
                      {/* Mobile Image */}
                      <div className="w-full h-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="text-2xl mb-1">📸</div>
                          <div className="text-xs">Photo {item.id}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator for Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden md:block text-center mt-8"
        >
          <div className="text-sm text-gray-500 mb-2">
            Scroll horizontally to explore more
          </div>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline; 