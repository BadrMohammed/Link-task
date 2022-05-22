import { useHistory } from 'react-router-dom';
import { Navbar, NavLink, Row, Col, NavItem } from 'reactstrap';
import { local } from '../../lang/local';
import { FiMenu } from 'react-icons/fi';
import { Language } from './Language';
import logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = ({ handleToggleSidebar }: any) => {
  const history = useHistory();

  const handleMenuClick = () => {
    handleToggleSidebar();
  };

  const renderMobileHeader = () => {
    return (
      <Row>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className='flex alignItem'
          style={{ justifyContent: 'space-between' }}
        >
          <div className='flex'>
            <button
              className='toggler'
              onClick={handleMenuClick}
              style={{ display: 'block' }}
            >
              <FiMenu color='white' size={25} />
            </button>

            <img
              src={logo}
              alt=''
              onClick={(e) => {
                e.preventDefault();
                history.push('/');
              }}
              className='app-logo'
              style={{ marginInline: '10px' }}
            />
          </div>
          <div>
            <Language />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Navbar expand='md' className='app-header' dark color='dark'>
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

            <Col xl={8} lg={8} md={8} sm={8} xs={10} className='mx-auto center'>
              {[
                { title: 'home', path: '' },
                { title: 'aboutUs', path: '' },
                { title: 'news', path: '' },
                { title: 'contactUs', path: '' },
              ].map((item, index) => {
                return (
                  <NavItem className='center nav-item' key={index}>
                    <NavLink
                      className='cursor'
                      onClick={() => history.push(item.path)}
                    >
                      {local[item.title]}
                    </NavLink>
                  </NavItem>
                );
              })}
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
