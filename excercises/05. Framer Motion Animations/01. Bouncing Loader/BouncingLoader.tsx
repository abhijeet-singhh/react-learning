import { motion } from 'framer-motion';

const BouncingLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2 h-screen">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-6 h-6 bg-blue-500 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 0.8,
              ease: 'easeInOut',
              delay: index * 0.2,
            },
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;