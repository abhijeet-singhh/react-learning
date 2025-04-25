import { motion } from "framer-motion";
import { useState } from "react";

type Image = {
    src: string;
    caption: string;
};

const images: Image[] = [
    {
        src: 'https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg',
        caption: 'Backpacker in the mountains',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2022/12/01/04/43/girl-7628308_1280.jpg',
        caption: 'Girl enjoying nature',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg',
        caption: 'Anime-inspired artwork',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750176_1280.jpg',
        caption: 'AI-generated futuristic scene',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2022/12/24/11/42/home-7675773_1280.jpg',
        caption: 'Cozy home in the snow',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2023/01/28/11/31/mountains-7750722_1280.jpg',
        caption: 'Majestic mountain landscape',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750168_1280.jpg',
        caption: 'AI-generated abstract art',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750163_1280.jpg',
        caption: 'AI-generated futuristic city',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2023/02/20/20/44/ai-generated-7803074_1280.jpg',
        caption: 'AI-generated portrait',
    },
    {
        src: 'https://cdn.pixabay.com/photo/2023/04/27/13/19/ai-generated-7954616_1280.png',
        caption: 'AI-generated surreal artwork',
    },
];

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const AnimatedGallery = () => {
    const [showImages, setShowImages] = useState(false);

    const handleClick = () => {
        setShowImages((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={handleClick}
                className="bg-amber-700 px-4 py-2 rounded-md shadow-md font-semibold hover:bg-amber-800 transition-colors mt-10 cursor-pointer"
                aria-label={showImages ? "Hide Images" : "Show Images"}
            >
                {showImages ? "Hide Images" : "Show Images"}
            </button>

            <motion.div
                className="flex flex-wrap gap-5 px-20 md:px-28 mt-10"
                variants={parentVariants}
                initial="hidden"
                animate={showImages ? "visible" : "hidden"}
            >
                {images.map(({ src, caption }, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={caption || "Image"}
                        className="w-60 rounded object-cover"
                        variants={childVariants}
                        whileHover={{
                            rotate: -2,
                            scale: 1.02,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedGallery;