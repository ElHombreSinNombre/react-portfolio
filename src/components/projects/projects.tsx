import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.scss";


const items = [{ name: "Project 1", icon: "angular" }, { name: "Project 2", icon: "vue" }, { name: "Project 3", icon: "laravel" }];


export default function Projects() {
    return (
        <AnimateSharedLayout>
            <motion.ul layout initial={{ scale: 0.5, opacity: 0, borderRadius: 25 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                {items.map((item, index) => (
                    <Item key={index} element={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
}

function Item(element: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li className="list-none" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.img src={require('./../../assets/img/' + element.element.icon + '.ico')} layout />
            Test
            <AnimatePresence>{isOpen && <Content name={element.element.name} />}</AnimatePresence>
        </motion.li>
    );
}

function Content(name: any) {
    return (
        <motion.div
            layout>
            <div className="row">{name.name}</div>
        </motion.div>
    );
}
