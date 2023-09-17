import {Link} from 'react-router-dom'
import {BsPlusCircle} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'

interface SidebarItemProps {
    to: string;
    icon: string;
    label: string;
    hasDropdown?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label, hasDropdown }) => {
  return (
    <li>
     <Link to={to} className={`flex justify-between ${hasDropdown ? 'with-dropdown' : ''}`}>
      <div className="flex gap-3">
        <img src={icon} alt="" />
        <p>{label}</p>
      </div>
      {hasDropdown && (
        <div className="flex gap-2 items-center">
          {to === "/products" && <BsPlusCircle fontSize={20} />}
          <IoIosArrowDown fontSize={20} />
        </div>
      )}
    </Link>
  </li>
  )
}

export default SidebarItem