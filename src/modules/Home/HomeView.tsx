import './Home.scss';
import { Homeicon } from '../../assets/icons/Homeicon';
import { Row, Col } from 'reactstrap';
import { rightReverse } from '../../styles/generalStyle';
export const HomeView = () => {
  return (
    <section className='home-section'>
      <div className='icon-container' style={rightReverse}>
        <Homeicon
          className='home-icon'
          fillColor='#ef16b4'
          // width='100%'
          // height='100%'
        />
      </div>

      <div className='home-main'>
        <Row><Col>asd </Col></Row>
      </div>
    </section>
  );
};
