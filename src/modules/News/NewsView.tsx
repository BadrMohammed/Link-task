import './News.scss';
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Row,
  Spinner,
} from 'reactstrap';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { local } from '../../lang/local';
import { RiCalendar2Fill } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { BsFillShareFill } from 'react-icons/bs';
import { CustomBadge } from '../../components/CustomBadge/CustomBadge';
import logo from '../../assets/images/news/logo.png'
import { rightReverse } from '../../styles/generalStyle';
export const NewsView = ({ newsState, fetchNews, dispatch, loading ,setLoading}: any) => {
  const [view, setView] = useState<Number>(5);

  const toggleView = (e: any, value: any) => setView(value);
  const handleClick = (e: any, param: any) => {
    fetchNews(dispatch, param,setLoading);
  };

  const getDefaultItem = (id: any) => {
    if (newsState.categories) {
      let entry = newsState.categories.find((e: any) => e.id === +id);

      if (entry) {
        return entry.name;
      }
    }
    return '';
  };
  return (
    <section className='news-section'>

      <div className='logo-photo-container' style={rightReverse}>
        <img src={logo} className="imgFull" alt=""/>
      </div>
      <div className='container'>
        <h4 className='text-center first-title'>{local.media}</h4>
        <h1 className='text-center second-title mt-4'>{local.topNews}</h1>

        <Row className='mt-4'>
          <Col xl={9} lg={10} md={10} sm={12} xs={12} className='mx-auto'>
            <Row>
              <Col className='center categories-column mt-3' xl={2}>
                <CustomButton
                  title='allNews'
                  className={
                    +newsState.active_category === 0
                      ? 'news-button-active news-button'
                      : 'news-button'
                  }
                  onClick={(e: any) => handleClick(e, null)}
                  id={0}
                />
              </Col>

              {newsState.categories.map((item: any, index: any) => {
                return (
                  <Col className='center categories-column mt-3' key={index}>
                    <CustomButton
                      className={
                        +newsState.active_category === item.id
                          ? 'news-button-active news-button'
                          : 'news-button'
                      }
                      title={item.name}
                      onClick={handleClick}
                      param={item.id}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xl={10} lg={12} md={12} sm={12} xs={12} className='mx-auto text-center'>
          {loading ? (
              <Spinner color='primary' className='mt-5' />
            ) : (
              <React.Fragment>
                <Row>
                  {newsState.news &&
                    newsState.news.map((item: any, index: any) => {
                      if (index <= view) {
                        return (
                          <Col
                            xl={4}
                            lg={4}
                            md={6}
                            sm={12}
                            xs={12}
                            className='center mt-4'
                            key={index}
                          >
                            <Card className='news-card'>
                              <CardImg
                                alt=''
                                src={item.urlToImage}
                                top
                                className='new-card-image'
                                width='100%'
                              />
                              <CardBody>
                                <CardText>{item.title}</CardText>
                                <div className='date-wrapper'>
                                  <RiCalendar2Fill className='date-icon' />
                                  <p className='date-text'>
                                    {item.publishedDate}
                                  </p>
                                </div>

                                <div className='card-options center'>
                                  <CustomBadge
                                    className='news-card-badge'
                                    title={getDefaultItem(item.categoryID)}
                                  />
                                  <span>
                                    <FaRegHeart
                                      color='#13BEFF'
                                      className='icon'
                                    />
                                    <BsFillShareFill
                                      color='#13BEFF'
                                      className='icon'
                                    />
                                  </span>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        );
                      }
                    })}
                </Row>
                <Row>
                  <Col className='mx-auto center mt-5'>
                    <CustomButton
                      param={newsState.news ? newsState.news.length - 1 : 5}
                      onClick={toggleView}
                      className='view-all-news-button'
                      title='viewAllNews'
                    />
                  </Col>
                </Row>
              </React.Fragment>
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
};
