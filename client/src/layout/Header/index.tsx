import {RiSearch2Line} from 'react-icons/ri'
import {PiPlusBold} from 'react-icons/pi'
import styled from './header.module.css'
import Messageicon from '../../assets/images/Message.svg'
import NotifictaionIcon from '../../assets/images/Notification.svg'
import Avatar from '../../assets/images/Avatar.svg'

const Header = () => {
  return (
    <div className={styled.header}>
        <div className={styled.search}>
          <RiSearch2Line color={"#6F767E"} fontSize={22}/>
          <input type="text" placeholder="Search or type a command" />
          <span>⌘ F</span>
        </div>
        <div className='flex gap-6'>
          <button className={styled.create_btn}><PiPlusBold fontSize={20}/>Create</button>
          <img src={Messageicon} alt="" />
          <img src={NotifictaionIcon} alt="" />
          <img src={Avatar} alt="" />
        </div>
    </div>
  )
}

export default Header