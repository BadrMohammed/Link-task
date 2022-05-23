import { useHistory } from 'react-router-dom';
import { Navbar, NavLink, Row, Col, NavItem } from 'reactstrap';
import { local } from '../../lang/local';
import { FiMenu } from 'react-icons/fi';
import { Language } from './Language';
import logo from '../../assets/images/logo.png';
import './Header.scss';
import { CustomButton } from '../CustomButton/CustomButton';
import { dirRightReverse } from '../../styles/generalStyle';

const Header = ({ handleToggleSidebar }: any) => {
  const history = useHistory();

  const handleMenuClick = () => {
    handleToggleSidebar();
  };

  const renderNavItem = (title: any, path: any, index: any) => {
    return (
      <NavItem className='center nav-item' key={index}>
        <NavLink
          style={{ color: 'white' }}
          className='cursor'
          onClick={() => history.push(path)}
        >
          {local[title]}
        </NavLink>
      </NavItem>
    );
  };

  return (
    <Navbar expand='md' className='app-header'>
      <div className='fullWH'>
        {/* {window.innerWidth > 760 ? ( */}
        <div className='container'>
          <Row className='alignItem'>
            <Col xl={2} lg={2} md={2} sm={2} xs={2}>
              <img
                src={logo}
                alt=''
                onClick={(e) => {
                  e.preventDefault();
                  history.push('/');
                }}
                className='app-logo'
              />
            </Col>

            <Col
              xl={10}
              lg={10}
              md={10}
              sm={10}
              xs={10}
              className='flex'
              style={dirRightReverse}
            >
              {window.innerWidth < 760 ? (
                <div className='mobile-menu'>
                  <button
                    className='toggler'
                    onClick={handleMenuClick}
                    style={{ display: 'block' }}
                  >
                    <FiMenu color='white' size={25} />
                  </button>
                </div>
              ) : (
                <div className='flex header-web-items'>
                  <Language />
                  <CustomButton title='signUp' className='sign-button' />
                  {[
                    { title: 'signIn', path: '' },
                    { title: 'contactUs', path: '' },
                    { title: 'news', path: '' },
                    { title: 'aboutUs', path: '' },
                    { title: 'home', path: '' },
                  ].map((item, index) => {
                    return renderNavItem(item.title, item.path, index);
                  })}
                </div>
              )}
            </Col>
          </Row>
        </div>
        {/* ) : (
          renderMobileHeader()
        )} */}
      </div>
    </Navbar>
  );
};
export default Header;
