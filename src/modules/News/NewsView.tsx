import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { local } from '../../lang/local';
import './News.scss';
export const NewsView = ({ newsState, fetchNews, dispatch }: any) => {
  const [view, setView] = useState<Number>(5);

  const toggleView = (e: any, value: any) => setView(value);
  const handleClick = (e: any, param: any) => {
    fetchNews(dispatch, param);
  };
  return (
    <section className='news-section'>
      <div className='container'>
        <h5 className='text-center first-title'>{local.media}</h5>
        <h1 className='text-center second-title mt-4'>{local.topNews}</h1>

        <Row className='mt-4'>
          <Col xl={10} lg={10} md={12} sm={12} xs={12} className='mx-auto'>
            <Row>
              <Col className='center categories-column mt-3'>
                <CustomButton
                  title='allNews'
                  onClick={(e: any) => handleClick(e, null)}
                  id={0}
                />
              </Col>
              {newsState.categories.map((item: any, index: any) => {
                return (
                  <Col className='center categories-column mt-3'>
                    <CustomButton
                      key={index}
                      title={item.name}
                      onClick={handleClick}
                      param={item.id}
                    />
                  </Col>
                );
              })}
            </Row>

            <Row>
              {newsState.news &&
                newsState.news.map((item: any, index: any) => {
                  if (index <= view) {
                    return (
                      <Col
                        xl={4}
                        lg={4}
                        md={4}
                        sm={6}
                        xs={12}
                        className='center mt-4'
                        key={index}
                      >
                        <Card className='news-card'>
                          <CardImg
                            alt='Card image cap'
                            src='https://picsum.photos/318/180'
                            top
                            width='100%'
                          />
                          <CardBody>
                            <CardText>{item.title}</CardText>
                            <CustomButton className='news-card-badge' />
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  }
                })}
            </Row>
            <Row>
              <Col className='mx-auto center mt-3'>
                <CustomButton
                  param={newsState.news ? newsState.news.length - 1 : 5}
                  onClick={toggleView}
                  className=''
                  title='viewAllNews'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
