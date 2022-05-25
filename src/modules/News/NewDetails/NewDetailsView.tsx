import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Col, Row, Table } from 'reactstrap';
import { local } from '../../../lang/local';
import { getDefaultItem } from '../../../utils/get-default-item';
export const NewDetailsView = ({ detailsItem, categories }: any) => {
  const history = useHistory();
  useEffect(() => {
    if (Object.values(detailsItem).length === 0) {
      history.push('/');
    }
  }, []);
  console.log(detailsItem);
  return (
    <section className='new-details-section'>
      <div className='main center'>
        <Row>
          <Col xl={7} lg={10} md={12} sm={12} xs={12} className='mx-auto'>
            <Card className='news-card new-card-details center'>
              <img
                src={detailsItem.urlToImage}
                className='new-img-details'
                width='180'
                height='180'
                alt=''
              />

              <Table responsive striped className='mt-3'>
                <tbody>
                  <tr>
                    <th scope='row'>{local.title}</th>
                    <td>{detailsItem.title}</td>
                  </tr>
                  <tr>
                    <th scope='row'>{local.publishedDate}</th>
                    <td>{detailsItem.publishedDate}</td>
                  </tr>
                  <tr>
                    <th scope='row'>{local.description}</th>
                    <td>{detailsItem.description}</td>
                  </tr>

                  <tr>
                    <th scope='row'>{local.content}</th>
                    <td>{detailsItem.content}</td>
                  </tr>

                  <tr>
                    <th scope='row'>{local.category}</th>
                    <td>
                      {getDefaultItem(
                        detailsItem.categoryID,
                        categories,
                        'name'
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
