import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import { useHistory } from 'react-router-dom';
import { getLanguage, local } from '../../lang/local';
import './Sidebar.css';
function Sidebar({ toggled, handleToggleSidebar }: any) {
  const history = useHistory();

  const goToPage = (e: React.MouseEvent<HTMLElement>, page: string) => {
    e.preventDefault();
    handleToggleSidebar();
    history.push(page);
  };

  const renderMenuItem = (title: any, path: any) => {
    return (
      <MenuItem
        onClick={(e) => (path ? goToPage(e, path) : null)}

        // icon={route.Icon}
      >
        {title}
      </MenuItem>
    );
  };

  return  (
      <div className='main-sidebar'>
      <ProSidebar
        rtl={getLanguage() === 'en' ? false : true}
        collapsed={false}
        toggled={toggled}
        breakPoint='md'
        onToggle={handleToggleSidebar}
      >
        <SidebarContent>
          <Menu iconShape='circle'>
            {renderMenuItem(local.Home, '/')}
            {renderMenuItem(local.FreeTrail, null)}
            
           
         
            {renderMenuItem(local.LogIn, '/signin')}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
