import { motion } from "framer-motion"

const AnimatedShape = () => {

    const boxVariants = {
        initial: { scale: 1, rotate: 0, skew: 0 },
        hover: { scale: 1.2, rotate: 15, skew: '10deg', transition: { duration: 0.3 } },
        click: { scale: 0.9, rotate: -15, transition: { duration: 0.3 } },
    }

    return (
        <div className="bg-neutral-900 flex justify-center items-center min-h-screen w-full">
            <motion.div
                className="w-40 h-40 bg-cyan-600 rounded-lg"
                variants={boxVariants}
                initial='initial'
                whileHover={'hover'}
                whileTap={'click'}
            />
        </div>
    )
}

export default AnimatedShape