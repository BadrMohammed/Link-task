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
import { CustomBadge } from '../../components/CustomBadge/CustomBadge';
import logo from '../../assets/images/news/logo.png';
import { rightReverse } from '../../styles/generalStyle';
import { useHistory } from 'react-router-dom';
import { getDefaultItem } from '../../utils/get-default-item';
import { Share } from '../../components/Share/Share';
export const NewsView = ({
  newsState,
  fetchNews,
  dispatch,
  loading,
  setLoading,
  getNew,
  addToFavourite,
}: any) => {
  const [view, setView] = useState<Number>(5);
  const history = useHistory();
  const toggleView = (e: any, value: any) => setView(value);
  const handleClick = (e: any, param: any) => {
    fetchNews(dispatch, param, setLoading);
  };

  const openDetails = (e: any, item: any) => {
    dispatch(getNew(item));
    history.push('/new-details');
  };

  const handleFavourite = (e: any, item: any) => {
    let newArry = [...newsState.favourite_list];
    if (newArry.find((f: any) => f.id === item.id)) {
      newArry = newArry.filter((it: any) => it.id !== item.id);
    } else {
      newArry.push(item);
    }
    dispatch(addToFavourite(newArry));
  };
  return (
    <section className='news-section'>
      <div className='logo-photo-container' style={rightReverse}>
        <img src={logo} className='imgFull' alt='' />
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
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className='mx-auto text-center mt-3'
          >
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
                            className='center mt-4 text-start'
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
                                <CardText onClick={(e) => openDetails(e, item)}>
                                  {item.title}
                                </CardText>
                                <div className='date-wrapper'>
                                  <RiCalendar2Fill className='date-icon' />
                                  <p className='date-text'>
                                    {item.publishedDate}
                                  </p>
                                </div>

                                <div className='card-options center'>
                                  <CustomBadge
                                    className='news-card-badge'
                                    title={getDefaultItem(
                                      item.categoryID,
                                      newsState.categories,
                                      'name'
                                    )}
                                  />
                                  <span className='flex alignItem'>
                                    <FaRegHeart
                                      color={
                                        newsState.favourite_list.find(
                                          (f: any) => f.id === item.id
                                        )
                                          ? 'red'
                                          : '#13BEFF'
                                      }
                                      className='icon'
                                      onClick={(e) => handleFavourite(e, item)}
                                    />
                                    <Share />
                                  </span>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        );
                      }
                    })}
                </Row>
                {+newsState.active_category === 0 ? (
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
                ) : null}
              </React.Fragment>
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
};
