import { motion } from 'framer-motion';
import { useState } from 'react';

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: -180 },
  };

  return (
    <div
      className="w-52 h-64 cursor-pointer rounded-md"
      style={{ perspective: 2000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        variants={cardVariants}
        animate={isFlipped ? 'back' : 'front'}
        transition={{
          duration: 0.7,
          scale: { type: 'spring', stiffness: 300 }
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center text-xl rounded-md"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(1px)' // Maintains depth
          }}
        >
          Front
        </div>
        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center text-xl rounded-md"
          style={{
            transform: 'rotateY(180deg) translateZ(1px)',
            backfaceVisibility: 'hidden'
          }}
        >
          Back
        </div>
      </motion.div>
    </div>
  );
};

export default FlippingCard;

