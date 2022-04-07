import { motion } from "framer-motion";


function About() {
    return (
        <motion.div initial={{ scale: 0.5, opacity: 0, borderRadius: 25 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }} className="custom-card bg-white rounded-sm py-6 pr-6 pl-9">
            <div className="text-center">Asier Lara</div>
            <hr></hr>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat eveniet est corrupti, non ullam voluptatibus harum quis? Autem voluptas earum ullam atque tempora asperiores reiciendis odio distinctio reprehenderit harum?
        </motion.div>
    );
}

export default About;
