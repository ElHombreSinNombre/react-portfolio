import { motion } from "framer-motion";


function Project() {
    return (
        <motion.div initial={{ scale: 0.5, opacity: 0, borderRadius: 25 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }} className="custom-card bg-white rounded-sm py-6 pr-6 pl-9">
            <div className="text-center">React</div>
        </motion.div>
    );
}

export default Project;