import { motion } from 'framer-motion'
const images = [
    {
        src: 'https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg',
        caption: 'Caption for image 1'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2022/12/30/15/04/anime-7687170_1280.jpg',
        caption: 'Caption for image 1'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2022/12/24/11/42/home-7675773_1280.jpg',
        caption: 'Caption for image 1'
    }
]
const ImageGallery = () => {
    return (
        <div className='w-[80%] flex'>
            {images.map(({ src, caption }, index) => (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className='relative m-[1rem] rounded-lg overflow-hidden shadow-lg'>
                    <img src={src} alt={caption} className='w-full h-auto' />
                    <div className='absolute inset-0 flex items-center jsutify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-60 transition-opacity duration-300 cursor-pointer'
                    >
                        <motion.p
                            whileHover={{ opacity: 1 }}
                            className='text-lg mx-auto'>{caption}</motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
export default ImageGallery