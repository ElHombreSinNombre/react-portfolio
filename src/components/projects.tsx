import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const items = [{ id: "1", name: "Project 1", icon: "angular", description: "Description 1" }, { id: "2", name: "Project 2", icon: "vue", description: "Description 2" }, { id: "3", name: "Project 3", icon: "laravel", description: "Description 3" }];

export default function Projects() {
    return (
        <AnimateSharedLayout>
            <motion.ul className=" rounded-lg bg-white p-6 mb-5" layout initial={{ scale: 0.5, opacity: 0, borderRadius: 25 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                {items.map((item) => (
                    <Item key={item.id} element={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
}

function Item(element: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li className="custom-card list-nonecursor-pointer p-5 mb-5" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: element.element.id }} className="flex items-center ">
                <motion.img src={require('./../assets/img/' + element.element.icon + '.ico')} layout />
                <strong>Test</strong>
            </motion.div>
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
