import React from 'react';
// import main2 from '../../assets/imgs/main2.png';
import { useHistory } from 'react-router-dom';
import { Navbar, NavLink, Row, Col, NavItem } from 'reactstrap';
import { local } from '../../lang/local';
import { FiMenu } from 'react-icons/fi';
import { Language } from './Language';
// import { useAppDispatch } from '../../redux/hooks';
import logo from '../../assets/images/logo.png';

const Header = ({ handleToggleSidebar }: any) => {
  const history = useHistory();

  // const dispatch = useAppDispatch();

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

  const renderNavItems = () => {
    return [
      { title: 'Products', path: '' },
      { title: 'Photos', path: '' },
      { title: 'TheQuality', path: '' },
      { title: 'OurOffices', path: '' },
      { title: 'ShippingTransportation', path: '' },
      { title: 'AboutUs', path: '/aboutUs' },
      { title: 'ContactUs', path: '' },
    ].map((item, index) => {
      return (
        <NavItem className='center nav-item' key={index}>
          <NavLink className='cursor' onClick={()=>history.push(item.path)}>{local[item.title]}</NavLink>
        </NavItem>
      );
    });
  };
  return (
    <Navbar expand='md' className='app-header'>
      <div className='fullWH'>
        {window.innerWidth > 760 ? (
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
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className='mx-auto center'
              >
                {renderNavItems()}
              </Col>
              <Col xl={2} lg={2} md={2} sm={2} xs={4} >
                <Language />
              </Col>
            </Row>
          </div>
        ) : (
          renderMobileHeader()
        )}
      </div>
    </Navbar>
  );
};
export default Header;
