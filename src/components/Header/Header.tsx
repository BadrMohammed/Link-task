import { useHistory } from 'react-router-dom';
import { Navbar, NavLink, Row, Col, NavItem } from 'reactstrap';
import { local } from '../../lang/local';
import { FiMenu } from 'react-icons/fi';
import { Language } from './Language';
import logo from '../../assets/images/logo.png';
import './Header.scss';
import { CustomButton } from '../CustomButton/CustomButton';
import { dirRightReverse } from '../../styles/generalStyle';
import { _items } from '../../routing/items';

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
              <div className='mobile-menu'>
                <button onClick={handleMenuClick}>
                  <FiMenu size={30} />
                </button>
                <Language />
              </div>

              <div className='flex header-web-items'>
                <Language />
                <CustomButton title='signUp' className='sign-button' />
                {_items.map((item:any, index:any) => {
                  return renderNavItem(item.title, item.path, index);
                })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Navbar>
  );
};
export default Header;
