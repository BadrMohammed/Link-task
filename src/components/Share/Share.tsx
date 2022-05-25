import './Share.scss'
import {
  FaFacebookF,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from 'react-share';
import {
  Col,
  Row,
  UncontrolledPopover,
  PopoverBody,
} from 'reactstrap';
import { BsFillShareFill } from 'react-icons/bs';

export const Share = () => {
  return (
    <div>
      <BsFillShareFill
        id='UncontrolledPopover'
        color='#13BEFF'
        className='icon'
      />

      <UncontrolledPopover  target='UncontrolledPopover' className='share-popover dropdown_header'>
        <PopoverBody>
          <Row className='mt-4'>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className='center'
              style={{ justifyContent: 'space-evenly' }}
            >
              <FacebookShareButton
                url={window.location.href}
                // quote={window.location.href}
                className='share_icon'
              >
                <FaFacebookF size={22} color='#4267B2' />
              </FacebookShareButton>
              {/* <FacebookMessengerShareButton
                url={window.location.href}
                // quote={window.location.href}
                className='share_icon'
              >
                <FaFacebookMessenger
                  size={22}
                  color='#00C6FF'
                  className='share_icon'
                />
              </FacebookMessengerShareButton> */}
              <TwitterShareButton
                url={window.location.href}
                // quote={window.location.href}
                className='share_icon'
              >
                <FaTwitter size={22} color='#00acee' />
              </TwitterShareButton>

              <WhatsappShareButton
                url={window.location.href}
                // quote={window.location.href}
                className='share_icon'
              >
                <FaWhatsapp size={22} color='#25D366' />
              </WhatsappShareButton>

              <TelegramShareButton
                url={window.location.href}
                // quote={window.location.href}
                className='share_icon'
              >
                <FaTelegram size={22} color='#0088cc' />
              </TelegramShareButton>

              <LinkedinShareButton
                url={window.location.href}
                // quote={window.location.href}
                className='share_icon'
              >
                <FaLinkedin size={22} color='#0077b5' />
              </LinkedinShareButton>

             
            </Col>
          </Row>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};
