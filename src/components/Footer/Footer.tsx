import { Col, Row } from 'reactstrap';
import './footer.css';

import logo from '../../assets/images/footer/footer-logo.png';
import facebook from '../../assets/images/footer/face.png';
import linkedin from '../../assets/images/footer/linked.png';
import twitter from '../../assets/images/footer/twitter.png';
import whats from '../../assets/images/footer/whats.png';

import { local } from '../../lang/local';
export const Footer = () => {
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
            <p className='mt-4 footer-title'>{local.ZakeEstablished}</p>
            <div className='mt-4 social-wrapper center-footer-item'>
              {[facebook, twitter, whats, linkedin].map((item, index) => {
                return (
                  <div className='social-container'>
                    <img src={item} alt='' className='imgFull' key={index} />
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
              <h4 className='footer-section-title'>{local.Links}</h4>
              {[
                'AboutUs',
                'Products',
                'ShippingTransportation',
                'OurOffices',
              ].map((item, index) => {
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
              <h4 className='footer-section-title'>{local.Address}</h4>
              {['StreetAddress', 'ZipNumber'].map((item, index) => {
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
              <h4 className='footer-section-title'>{local.PhoneMail}</h4>
              {['01254565557', '01124597852', 'ZAK55@gmail.com'].map(
                (item, index) => {
                  return (
                    <div className='footer-section-item mt-4'>
                      <p key={index}>{item}</p>
                    </div>
                  );
                }
              )}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
