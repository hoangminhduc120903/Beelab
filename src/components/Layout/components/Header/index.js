import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Container fluid>
          <Row className={cx('container-navbar')}>
            <Col>
              <a className={cx('navbar-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('navbar-item')} href="">
                VỀ CHÚNG TÔI
              </a>
            </Col>
            <Col className={cx('logo')}>
              <a className={cx('navbar-item')} href="">
                BEELAB
              </a>
            </Col>
            <Col>
              <a className={cx('navbar-item')} href="">
                BẢNG SIZE
              </a>
            </Col>
            <Col>
              <a className={cx('navbar-item')} href="">
                CHÍNH SÁCH ĐỔI TRẢ
              </a>
            </Col>
          </Row>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px', marginBottom: '15px' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
          </div>
          <Row className={cx('container-navbar')}>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
            <Col>
              <a className={cx('product-item')} href="">
                TRANG CHỦ
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
