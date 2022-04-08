import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const items = [
    {
        id: "1", name: "Angular CRUD", icon: "angular", description: "CRUD with Angular and GraphQL", repo: "https://github.com/ElHombreSinNombre/angular-material-graphql", links: [{ "lumen": "", "docker": "", flutter: "" }]
    },
    {
        id: "2", name: "Flutter App", icon: "flutter", description: "CRUD with Flutter and dockerized Lumen API", repo: "https://github.com/ElHombreSinNombre/flutter-lumen", links: [{ "lumen": "", "docker": "", flutter: "" }]
    },
    {
        id: "3", name: "Laravel CRUD", icon: "laravel", description: "CRUD with dockerized Laravel and Vue", repo: "https://github.com/ElHombreSinNombre/laravel-vue", links: [{ "lumen": "", "docker": "", flutter: "" }]
    },
    {
        id: "4", name: "React portfolio", icon: "react", description: "Portfolio to learn how react works", repo: "https://github.com/ElHombreSinNombre/react-portfolio", links: [{ "lumen": "", "docker": "", flutter: "" }]
    }

];

export default function Projects() {
    return (
        <AnimateSharedLayout>
            <motion.ul className=" rounded-lg bg-white p-6 mb-5" layout initial={{ scale: 0.5, opacity: 0, borderRadius: 25 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                {items.map((item) => (
                    <Item key={item.id} items={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
}

function Item(items: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li className="custom-card list-none cursor-pointer p-5 mb-5" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: items.items.id }} className="flex items-center">
                <motion.img src={require('./../assets/img/' + items.items.icon + '.ico')} layout />
                <strong className="m-2">{items.items.name} </strong>
            </motion.div>
            <AnimatePresence>{isOpen && <Content description={items.items.description} link={items.items.repo} />}</AnimatePresence>
        </motion.li>
    );
}

function Content(items: any) {
    return (
        <motion.div
            layout>
            <div className="row"> <a href={items.link} target="_blank" rel="noopener noreferrer">{items.description}</a></div>
        </motion.div>
    );
}
