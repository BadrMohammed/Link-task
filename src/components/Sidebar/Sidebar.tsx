import './Sidebar.scss';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SidebarHeader,
} from 'react-pro-sidebar';
import { useHistory } from 'react-router-dom';
import { getLanguage, local } from '../../lang/local';
import { _items } from '../../routing/items';
import { BsDot } from 'react-icons/bs';
import logo from '../../assets/images/logo.png';

function Sidebar({ toggled, handleToggleSidebar }: any) {
  const history = useHistory();

  const handleMenuClick = () => {
    handleToggleSidebar();
  };

  return (
    <div className='main-sidebar'>
      <ProSidebar
        rtl={getLanguage() === 'en' ? false : true}
        collapsed={false}
        toggled={toggled}
        breakPoint='lg'
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader className='center'>
          
          <div className='container-logo'><img
            src={logo}
            alt=''
            onClick={(e) => {
              e.preventDefault();
              history.push('/');
            }}
            className='app-logo'
          />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape='circle' >
            {_items.map((item: any, index: any) => {
              return (
                <MenuItem onClick={handleMenuClick} key={index} icon={<BsDot size={20} />}>
                  {item.title}
                </MenuItem>
              );
            })}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
