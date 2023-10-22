import { AnimatePresence, motion } from 'framer-motion'

const BorderLight = () => {
  return (
    <AnimatePresence>
            {Y >= offset && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 0, transition: { duration: 1.5 } }}
                className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-[#ff2773] via-[#ff00bb] to-[#a600ff] opacity-75 blur-xl"
              ></motion.div>
            )}
          </AnimatePresence>
  )
}

export default BorderLight