import { Col, Row } from 'reactstrap';
import './footer.scss';
import logo from '../../assets/images/logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaApple,
} from 'react-icons/fa';
import { local } from '../../lang/local';
import { CustomButton } from '../CustomButton/CustomButton';
import React from 'react';
export const Footer = () => {
  const getSocalButtonTitle = (title1: string, title2: string, Icon: any) => {
    return (
      <React.Fragment>
        <Icon size={20} color='#fff' />
        <p className='mt-4 ml-2 mr-2'>
          {local[title1]}
          <p>{local[title2]}</p>
        </p>
      </React.Fragment>
    );
  };
  return (
    <section className='footer'>
      {/* <div className='right-theme-box' style={rightReverse}/> */}
      <div className='container'>
        <Row>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className='mx-auto mt-4 footer-section-column'
          >
            <div className='center-footer-item'>
              <div className='logo-container'>
                <img src={logo} alt='' className='imgFull center-footer-item' />
              </div>
            </div>
            <p className='mt-4 footer-title'>
              We make technology produce productive, adaptable and sustainable
              business experiences.
            </p>
            {/* <div className='mt-4 social-wrapper center-footer-item'>
              {[facebook, twitter, whats, linkedin].map((item, index) => {
                return (
                  <div className='social-container'>
                    <img src={item} alt='' className='imgFull' key={index} />
                  </div>
                );
              })}
            </div> */}
          </Col>

          <Col
            xl={2}
            lg={2}
            md={2}
            sm={12}
            xs={12}
            className='mx-auto mt-4 footer-section-column'
          >
            <div>
              <h2 className='footer-section-title'>{local.Company}</h2>
              {['About', 'Careers', 'Mobile'].map((item, index) => {
                return (
                  <div className='footer-section-item mt-4'>
                    <p key={index}>{local[item]}</p>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col
            xl={2}
            lg={2}
            md={2}
            sm={12}
            xs={12}
            className='mx-auto mt-4 footer-section-column'
          >
            <div>
              <h2 className='footer-section-title'>{local.Contact}</h2>
              {['Help', 'Affilates'].map((item, index) => {
                return (
                  <div className='footer-section-item mt-4'>
                    <p key={index}>{local[item]}</p>
                  </div>
                );
              })}
            </div>
          </Col>

          <Col
            xl={2}
            lg={2}
            md={2}
            sm={12}
            xs={12}
            className='mx-auto mt-4 footer-section-column'
          >
            <div>
              <h2 className='footer-section-title'>{local.Media}</h2>
              {['News', 'Photo', 'Video'].map((item, index) => {
                return (
                  <div className='footer-section-item mt-4'>
                    <p key={index}>{item}</p>
                  </div>
                );
              })}
            </div>
          </Col>

          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className='mx-auto mt-4 footer-section-column'
          >
            <div className='social-wrapper center-footer-item'>
              {[FaFacebookF, FaTwitter, FaInstagram].map((Item, index) => {
                return (
                  <div className='social-container' key={index}>
                    <Item />
                  </div>
                );
              })}
            </div>
            <div className='discover-text mt-3'>
              <h3>{local.DiscoverApps}</h3>
            </div>
            <div className='flex'>
              <CustomButton
                className='social-button'
                title={getSocalButtonTitle('getIt', 'googlePlay', FaGooglePlay)}
              />
              <CustomButton
                className='social-button'
                title={getSocalButtonTitle('avaliableOn', 'apple', FaApple)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='mx-auto center mt-5 rights-text'>
            <p>{local.rights}</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};
