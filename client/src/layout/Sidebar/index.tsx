import Logo from "../../assets/images/Logo.svg";
import HomeIcon from "../../assets/images/Home Icon.svg";
import DiaomondIcon from "../../assets/images/Diaomond.svg";
import ShopActiveIcon from "../../assets/images/Shop Active Icon.svg";
import ProfileIcon from "../../assets/images/Profile.svg";
import IncomeIcon from "../../assets/images/Income.svg";
import PromoteIcon from "../../assets/images/Promote.svg";
import styled from './sidebar.module.css'
import SidebarItem from "../../components/SidebarItem";
import {FiHelpCircle} from 'react-icons/fi'
import {FiSun} from 'react-icons/fi'
import {HiMiniMoon} from 'react-icons/hi2'

const Sidebar = () => {
  return (
    <div className={styled.sidebar}>
      <div>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="mt-[48px]">
        <ul className={styled.sidebar_links}>
          <SidebarItem to="/home" icon={HomeIcon} label="Home" />
          <SidebarItem to="/products" icon={DiaomondIcon} label="Products" hasDropdown/>
          <SidebarItem to="/customers" icon={ProfileIcon} label="Customers" hasDropdown />
          <SidebarItem to="/" icon={ShopActiveIcon} label="Shop" />
          <SidebarItem to="/income" icon={IncomeIcon} label="Income" hasDropdown />
          <SidebarItem to="/promote" icon={PromoteIcon} label="Promote" />
        </ul>
      </div>
      </div>
      <div className={styled.sidebar_end}>
        <div className="h-[2px] bg-[#272B30] rounded-sm"></div>
        <div className="flex justify-between p-[12px] mt-[16px]">
          <p className="flex gap-2 items-center font-semibold text-[15px]"><FiHelpCircle fontSize={20}/>Help & getting started</p>
          <span>8</span>
        </div>
        <div>
          <label htmlFor="">
            <span><FiSun fontSize={20}/>Light</span>
            <span className={styled.active}><HiMiniMoon fontSize={20}/>Dark</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
