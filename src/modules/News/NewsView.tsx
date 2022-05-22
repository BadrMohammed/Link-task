import { Col, Row } from 'reactstrap';
import { local } from '../../lang/local';
import './News.scss';
export const NewsView = () => {
    
  return (
    <section className='news-section'>
      <div className='container'>
        <h5 className='text-center first-title'>{local.media}</h5>
        <h1 className='text-center second-title mt-4'>{local.topNews}</h1>

        <Row className='mt-4'>
          <Col xl={10} lg={10} md={12} sm={12} xs={12} className='mx-auto'>
            {/* 
          <Row className='mt-4'>
            <Col xl={10} lg={10} md={12} sm={12} xs={12} className='mx-auto'>
              <Row>
                {[
                  { type: 'text', title: 'FullName' },
                  { type: 'text', title: 'Email' },
                  { type: 'text', title: 'Mobile' },
                  { type: 'text', title: 'City' },
                ].map((item, index) => {
                  return (
                    <Col
                      xl={5}
                      lg={5}
                      md={5}
                      sm={12}
                      xs={12}
                      key={index}
                      className='mx-auto mt-4'
                    >
                      <CustomInput type={item.type} title={item.title} />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col
                  xl={11}
                  lg={11}
                  md={11}
                  sm={12}
                  xs={12}
                  className='mx-auto mt-4'
                > 
                  <CustomTextArea title='Inquiry' placeholder='WriteQuery' />
                </Col>
              </Row>
              <Row>
                <Col
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className='mx-auto center mt-4'
                >
                  <CustomButton label={local.Send}/>
                </Col>
              </Row>
            </Col>
          </Row>
     */}
          </Col>
        </Row>
      </div>
    </section>
  );
};
