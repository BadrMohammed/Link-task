import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.scss';
import { HomeBanner } from '../../assets/icons/HomeBanner';
import { Row, Col } from 'reactstrap';
import {
  dashIconStyle,
  dirRightReverse,
  rightReverse,
} from '../../styles/generalStyle';
import { Carousel } from 'react-responsive-carousel';
import { local } from '../../lang/local';
import { FaPlay } from 'react-icons/fa';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { Rotate } from 'react-custom-animation';
import h1 from '../../assets/images/home/h1.png';
import { DashIcon } from '../../assets/icons/DashIcon';
import { useState } from 'react';
export const HomeView = ({ homeState, loading }: any) => {
  const [repeat, setRepeat] = useState<any>('infinite');
  return (
    <Carousel
      emulateTouch
      showArrows={false}
      showStatus={false}
      showIndicators
      swipeable
      useKeyboardArrows
      showThumbs={false}
      onSwipeStart={() => setRepeat(false)}
      onSwipeEnd={() => setRepeat(true)}
    >
      {homeState.data &&
        homeState.data.map((item: any, index: any) => {
          return (
            <section className='home-section' key={index}>
              <div className='icon-container' style={rightReverse}>
                <Rotate degRange={[0, 360]} duration={5000} repeat={repeat}>
                  <HomeBanner
                    className='home-icon imgFull'
                    fillColor={`#${item.colorCode}`}
                  />
                </Rotate>
              </div>

              <div className='container'>
                <div className='home-main'>
                  <Row>
                    <Col xl={6} lg={6} md={8} sm={12} xs={12}>
                      <Row>
                        <Col
                          className='mt-5'
                          xl={12}
                          lg={12}
                          md={12}
                          sm={12}
                          xs={12}
                        >
                          <h5
                            className='home-category mt-3'
                            style={{
                              color: `#${item.colorCode}`,
                            }}
                          >
                            {item.category}
                          </h5>
                        </Col>
                        <Col className='mt-3 dash-col'>
                          <h1 className='home-title'>{item.title}</h1>
                          <div
                            className='dash-container-icon'
                            style={dashIconStyle}
                          >
                            <DashIcon
                              className='imgFull'
                              fillColor={`#${item.colorCode}`}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          className='mt-3'
                          xl={11}
                          lg={10}
                          md={12}
                          sm={12}
                          xs={12}
                        >
                          <p className='home-desc'>{item.brief}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className='mb-5'>
                          <div className='play-container flex alignItem'>
                            <a
                              href={window.location.href}
                              target="_blank"
                              className='view-all-news-button search-button'
                            >
                              {local.findOut}
                            </a>

                            <div className='play-icon'>
                              <FaPlay color='#fff' />
                            </div>
                            <span className='play-title'>{local.playDemo}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6} lg={6} md={4} sm={12} xs={12}>
                      <div className='fullWH'>
                        <img src={h1} className='imgFull' alt='' />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
          );
        })}
    </Carousel>
  );
};
