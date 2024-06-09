// import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-lightBlue h-44 flex-center">
      <div className="container">
        <div className='w-40'>
          {/* <img src={Logo} alt="" /> */}
          <h2 className='md-heading text-secondary'>paypaste</h2>
          <ul className='list-disc text-secondary text-md ps-4 py-3'>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Term &  Conditions</Link></li>
          </ul>
          <div className='flex gap-4'>
            <Link className='social-icon'><AiOutlineTwitter className='text-xl text-white' /></Link>
            <Link className='social-icon'><IoMailOutline className='text-xl text-white' /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
