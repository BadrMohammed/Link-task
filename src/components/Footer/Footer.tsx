import { Col, Row } from 'reactstrap';
import './footer.scss';
import logo from '../../assets/images/logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import googleIcon from '../../assets/images/footer/google-icon.png'
import appleIcon from '../../assets/images/footer/apple-icon.png'
import bottomLogo from '../../assets/images/footer/bottom-logo.png'


import { local } from '../../lang/local';
import { CustomButton } from '../CustomButton/CustomButton';
import React from 'react';
import { rightReverse } from '../../styles/generalStyle';
export const Footer = () => {
  const getSocalButtonTitle = (title1: string, title2: string, photo: any) => {
    return (
      <React.Fragment>
        <span className='footer-button-photo-container'>
        <img src={photo} alt="" className='imgFull' />
        </span>
        <span>
          {local[title1]}
          <span style={{display:'block'}}>{local[title2]}</span>
        </span>
      </React.Fragment>
    );
  };
  return (
    <section className='footer'>
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
                  <div className='footer-section-item mt-4' key={index}>
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
                title={getSocalButtonTitle('getIt', 'googlePlay', googleIcon)}
              />
              <CustomButton
                className='social-button'
                title={getSocalButtonTitle('avaliableOn', 'apple', appleIcon)}
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
      <div className='logo-photo-container' style={rightReverse}>
        <img src={bottomLogo} className="imgFull" alt=""/>
      </div>
    </section>
  );
};
