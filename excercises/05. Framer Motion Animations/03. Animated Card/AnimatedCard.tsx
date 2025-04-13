import { motion } from 'framer-motion'

const AnimatedCard = () => {
    return (
        <motion.div
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            drag
            dragConstraints={{
                top: -100,
                left: -50,
                right: 50,
                bottom: 50,
            }}
            className='max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer'>
            <img className='w-full h-48 object-cover' src="https://cdn.pixabay.com/photo/2024/01/19/18/03/ai-generated-8519540_1280.jpg" alt="Card Image" />

            <div className="py-2 px-4">
                <h2 className='text-xl font-semibold mb-2'>Card Title</h2>
                <p className='text-gray-700 mb-2'>This is a simple card made with usign framer motion and tailwind css.</p>
                <button className='bg-teal-600 px-2 py-1 rounded text-white'>Learn more</button>
            </div>
        </motion.div>
    )
}

export default AnimatedCard