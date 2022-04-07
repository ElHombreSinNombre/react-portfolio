import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function Header() {

    const navigation = [
        { icon: <FontAwesomeIcon icon={faAddressCard} />, href: '/' },
        { icon: <FontAwesomeIcon icon={faCalendar} />, href: '/timeline' },
        { icon: <FontAwesomeIcon icon={faCode} />, href: '/projects' },
    ]

    return (
        <div className="bg-transparent hidden sm:block m-3" >
            {navigation.map((item, index) => (
                <a key={index} href={item.href} className='text-white p-4'>
                    {item.icon}
                </a>
            ))}
        </div>
    )
}

export default Header;
