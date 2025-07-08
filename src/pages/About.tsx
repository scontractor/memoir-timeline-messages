import React from 'react';
import { motion } from 'framer-motion';

interface Friend {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  traits: string[];
}

const About: React.FC = () => {
  const friends: Friend[] = [
    {
      name: "Sharvari",
      role: "The Birthday Girl",
      bio: "A remarkable soul whose kindness and determination inspire everyone around her. Sharvari has always been the rock of our friendship, offering wisdom, support, and endless love. Her journey is a testament to the power of perseverance and the beauty of genuine friendship.",
      imageUrl: "/assets/bio-sharvari.jpg",
      traits: ["Compassionate", "Determined", "Wise", "Supportive"]
    },
    {
      name: "Rajvee",
      role: "The Creative Spirit",
      bio: "A bundle of creativity and laughter, Rajvee brings joy and imagination to every moment. Her artistic soul and infectious energy make every day brighter. She's the one who reminds us to dream big and find beauty in the smallest things.",
      imageUrl: "/assets/bio-rajvee.jpg",
      traits: ["Creative", "Joyful", "Imaginative", "Inspiring"]
    },
    {
      name: "Tanisha",
      role: "The Organizer",
      bio: "The mastermind behind keeping us all together and on track. Tanisha's organizational skills and caring nature make her the perfect friend to rely on. She's the glue that holds our friendship together and the voice of reason when we need it most.",
      imageUrl: "/assets/bio-tanisha.jpg",
      traits: ["Organized", "Caring", "Reliable", "Practical"]
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
            About Our Friendship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the amazing individuals who make this friendship so special. Each of us brings something unique to our bond, creating a beautiful tapestry of love, support, and shared dreams.
          </p>
        </motion.div>

        {/* Friends Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="card text-center group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">👤</div>
                    <div className="text-sm">{friend.name}</div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Name and Role */}
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                {friend.name}
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                {friend.role}
              </p>

              {/* Bio */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {friend.bio}
              </p>

              {/* Traits */}
              <div className="flex flex-wrap justify-center gap-2">
                {friend.traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Friendship Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Our friendship began as a beautiful coincidence, but it has grown into something extraordinary. 
              Through the years, we've celebrated triumphs, supported each other through challenges, and 
              created countless memories that will last a lifetime.
            </p>
            <p className="mb-4">
              Each of us brings something unique to our bond - Sharvari's wisdom and compassion, 
              Rajvee's creativity and joy, and Tanisha's organization and care. Together, we form 
              a perfect triangle of friendship that has stood the test of time.
            </p>
            <p>
              As we celebrate Sharvari's 30th birthday, we're reminded of how far we've come and 
              excited about the adventures that lie ahead. This website is our way of honoring 
              our friendship and looking forward to the future with hope and love.
            </p>
          </div>
        </motion.div>

        {/* Friendship Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Years of Friendship", value: "9+" },
            { label: "Memories Created", value: "Countless" },
            { label: "Laughs Shared", value: "Infinite" },
            { label: "Dreams Ahead", value: "Endless" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Here's to Many More Years!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our friendship is a gift that keeps on giving. Thank you for being part of this incredible journey.
            </p>
            <div className="text-4xl">💝</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 