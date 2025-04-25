import { motion } from "framer-motion"


const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    }
  }
}

const childVarients = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const StaggerAnimation = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial='hidden'
      animate='visible'
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          className="box mt-4" key={index}
          variants={childVarients}
        />
      ))}
    </motion.div>
  )
}

export default StaggerAnimation