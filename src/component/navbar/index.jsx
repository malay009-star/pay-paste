import { useState } from 'react';
import { menuItems } from '../../constant/helpers'
import { Menu, Drawer } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FiMenu } from "react-icons/fi";
import '../navbar/navbar.css';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='px-4 flex items-center bg-primary h-16'>
      <div className='container flex items-center justify-between'>
        <div>
          <button onClick={showDrawer}>
            <FiMenu className='text-2xl text-white' />
          </button>
          <Drawer
            closable={false}
            onClose={onClose}
            open={open}
          >
            <Menu mode="vertical" className="h-full" defaultSelectedKeys={['/home']}>
              {menuItems.map((item) => (
                <Menu.Item key={item.link}>
                  <NavLink
                    className="text-sm md:text-base font-medium !text-secondary"
                    activeClassName="font-light"
                    to={item.link}
                  >
                    {item.label}
                  </NavLink>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </div>
        <div className=''><Link to='/'><img className='w-48 sm:w-52 mb-4 bg-primary' src={Logo} alt="TIERS Limited" /></Link></div>
        <div className=''>

        </div>
      </div>
    </div >
  );
};

export default Navbar;
