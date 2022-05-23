import './ThingsWeDo.scss';
import { Card, Col, Row } from 'reactstrap';
import { dirRightReverse } from '../../styles/generalStyle';
import React from 'react';

export const ThingsWeDoView = ({ thingsState }: any) => {
  let newTitle = thingsState.things.title
    ? thingsState.things.title.split('  ')
    : null;

  const renderCardContent = () => {
    return (
      <Card className='things-content-card' style={dirRightReverse}>
        <Row className='fullWidth'>
          <Col>
            <h1 className='title'>{newTitle && newTitle[0]}</h1>
          </Col>
        </Row>
        <Row className='fullWidth'>
          <Col className='mx-auto'>
            <h1 className='title'>{newTitle && newTitle[1]}</h1>
          </Col>
        </Row>
        <Row className='fullWidth'>
          <Col xl={10} lg={10} md={12} sm={12} xs={12}>
            <p className='desc'>{thingsState.things.desc}</p>
          </Col>
        </Row>
      </Card>
    );
  };

  const renderImages = (min: Number, max: Number) => {
    if (thingsState.things && thingsState.things.items) {
      let items = thingsState.things.items.filter(
        (entry: any, index: any) => index >= min && index <= max
      );
      return items.map((item: any, index: any) => {
        return (
          <div
            className='photo-container center'
            key={index}
            style={{ backgroundImage: `url(${item.photo})` }}
          >
            <div style={{ zIndex: 100 }}>
              <h2 className='mt-5'>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <div className='brightness-wrapper' />
          </div>
        );
      });
    }
  };

  const renderMobile = () => {
    <React.Fragment>
      <Row>
        <Col>
          <div className='thing-item-card-wrapper'>{renderCardContent()}</div>
        </Col>
      </Row>
    </React.Fragment>;
  };
  return (
    <section className='things-section center'>
      <div
        className='thing-item-container-1-photo-container'
        style={dirRightReverse}
      >
        {renderImages(4, 5)}
      </div>
      <div
        className='thing-item-container-2-photo-container'
        style={dirRightReverse}
      >
        {renderImages(2, 3)}
      </div>
      <div className='thing-item-container-3 flex'>
        <div className='thing-item-container-3-photo-container'>
          {renderImages(0, 1)}
        </div>
        <div className='thing-item-card-wrapper'>{renderCardContent()}</div>
      </div>
    </section>
  );
};
