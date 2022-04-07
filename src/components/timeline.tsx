import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const items = [{ id: "1", icon: "versia", description: "Test 1", date: "2022", latest: true }, { id: "2", icon: "iot", description: "Test 2", date: "2021", latest: false }, { id: "3", icon: "solvent", description: "Test 3", date: "2020", latest: false }];


export default function TimeLine() {
    return (
        <motion.div initial={{ scale: 0.5, opacity: 0, borderRadius: 25 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }} className="bg-white rounded-sm py-6 pr-6 pl-9">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {items.map((item) => (
                    <Item key={item.id} element={item} />
                ))}
            </ol>
        </motion.div>
    );
}

function Item(element: any) {

    let latest: any;
    if (element.element.latest === true) {
        latest = <Latest />
    } else {
        latest = null;
    }

    return (
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: element.element.id }} className="custom-card  mb-10 ml-6  p-5">
            <span title={element.element.date} className="cursor-help flex absolute -left-3 justify-center items-center w-6 h-6  rounded-full ring-8  dark:ring-black dark:bg-black" >
                <FontAwesomeIcon icon={faCalendar} className="text-white" />
            </span >

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                <img className="h-12 w-22" src={require('./../assets/img/' + element.element.icon + '.png')} alt={element.element.text} />
                {element.element.text}
                {latest}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{element.element.description}</p>

        </motion.li >
    )

}

function Latest() {
    return (
        <span className="bg-black text-white mr-2 px-2.5 py-0.5 rounded" > Latest</span >
    )
}