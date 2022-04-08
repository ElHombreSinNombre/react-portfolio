import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';


function Header() {

    const navigation = [
        { id: "1", icon: <FontAwesomeIcon icon={faAddressCard} />, href: '/' },
        { id: "2", icon: <FontAwesomeIcon icon={faCalendar} />, href: '/timeline' },
        { id: "3", icon: <FontAwesomeIcon icon={faCode} />, href: '/projects' },
    ]

    return (
        <div className="bg-transparent hidden sm:block m-3" >
            {navigation.map((item) => (
                <NavLink key={item.id} to={item.href} className={(navData) => navData.isActive ? "bg-gray-900 text-white p-4" : "text-white p-4 hover:bg-gray-700"}>
                    {item.icon}
                </NavLink>
            ))}
        </div>
    )
}

export default Header;
