import { useState } from 'react';

import NavBar from 'components/Navbar/NavBar';
import CartItem from 'components/CartItem/CartItem';
import { background, dish2, dish3, dish8, visa } from 'assets';

import './style.scss';

function Payment() {
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(0);
  const [check, setCheck] = useState(1);

  return (
    <div>
      <NavBar icon1='bx bx-search' icon2='bx bx-shopping-bag' />
      <div className='home__top-menu'>
        <div className='home__top-menu-left'>
          <div>
            <p>
							Authentic local <br />
							food in Tbay
            </p>
            <p>
							TbayEAT is a courier serivce in which authentic home cook <br />
							food is delivered to a customer
            </p>
          </div>
          <div className='home__top-menu-left-search'>
            <input type='text' placeholder='Search food you love' />
            <button>Search</button>
          </div>
        </div>
        <div className='home__top-menu-right'>
          <img src={background} alt='dude cooking' />
        </div>
      </div>
      <div className='payment'>
        <div className='payment__current-page'>
          <p>Home / Trending /&nbsp; </p>
          <p style={{ color: 'black' }}>Famous Tandoor</p>
        </div>
        <div className='payment__details'>
          <p>PRODUCT</p>
          <p className='payment__details-price'>PRICE</p>
          <p className='payment__details-qty'>QTY</p>
          <p className='payment__details-unit'>
						UNIT <br /> PRICE
          </p>
        </div>
        <div className='payment__items'>
          <CartItem />
          <CartItem
            img={dish2}
            name='Chicken'
            userName='Kenny'
            price='30'
            qty='10'
          />
          <CartItem img={dish3} name='Meat' price='20' qty='23' />
          <CartItem img={dish8} name='Sauce' price='50' qty='4' />
        </div>
        <div className='payment__line'></div>
        <div className='payment__total'>
          <div className='payment__total-voucher'>
            <input type='text' placeholder='Voucher code' />
            <button>Redeem</button>
          </div>
          <div className='payment__total-result'>
            <div className='payment__total-result-sub'>
              <p>Subtotal</p>
              <p>$998</p>
            </div>
            <div className='payment__total-result-ship'>
              <p>Shipping fee</p>
              <p>$20</p>
            </div>
            <div className='payment__total-result-coupon'>
              <p>Coupon</p>
              <p>No</p>
            </div>
            <div className='payment__total-result-total'>
              <p>TOTAL</p>
              <p>$118</p>
            </div>
            <button
              onClick={() => {
                setToggle(true);
                setCurrent(1);
              }}
              className='payment__total-result-btn1'
            >
							Pay your Portion: $20
            </button>
            <button
              onClick={() => {
                setToggle(true);
                setCurrent(1);
              }}
              className='payment__total-result-btn2'
            >
							Pay All: $118
            </button>
          </div>
        </div>
      </div>
      <div>
        <NavBar icon1='bx bxl-facebook-square' icon2='bx bxl-instagram' />
        <div className='profile__copyright'>
          <div></div>
          <p>Copyright @2022 TBayEAT</p>
        </div>
      </div>
      <div
        className='payment__charge'
        style={{ visibility: toggle ? 'visible' : 'hidden' }}
      >
        <div className='payment__charge-form'>
          <div className='payment__charge-form-icon'>
            <i
              onClick={() => {
                setCurrent((prev) => prev - 1);
                if (current === 1) setToggle(false);
              }}
              className='bx bx-left-arrow-alt'
            ></i>
            <i
              onClick={() => {
                setToggle(false);
                setCurrent(0);
              }}
              className='bx bx-x'
            ></i>
          </div>
          <h1 className='payment__charge-form-title'>Make Payment</h1>
          <div className='payment__charge-form-current'>
            <div className='payment__charge-form-current-page'>
              <p
                className='page'
                style={{ background: current >= 1 ? '#1AC073' : '#DFDEDE' }}
                onClick={() => setCurrent(1)}
              >
								1
              </p>
              <div className='line'></div>
              <p
                style={{ background: current >= 2 ? '#1AC073' : '#DFDEDE' }}
                className='page'
                onClick={() => setCurrent(2)}
              >
								2
              </p>
              <div className='line'></div>
              <p
                style={{ background: current >= 3 ? '#1AC073' : '#DFDEDE' }}
                className='page'
                onClick={() => setCurrent(3)}
              >
								3
              </p>
            </div>
          </div>
          {/*--------------------------Page 1--------------------------*/}
          <div
            style={{ visibility: current === 1 ? 'visible' : 'hidden' }}
            className='payment__charge-form-info'
          >
            <div className='payment__charge-form-info-left'>
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Email Address' />
              <h2>Select Method Of Payment</h2>
              <div>
                <div
                  style={{ backgroundColor: check === 1 ? '#F0FAF7' : 'white' }}
                  className='item'
                >
                  <label>
                    {' '}
                    <span>
                      <i className='bx bxs-credit-card'></i>
                    </span>{' '}
										Credit Card Or Debit
                  </label>
                  <input
                    checked={check === 1}
                    onChange={() => setCheck(1)}
                    type='checkbox'
                  />
                </div>
                <div
                  style={{ backgroundColor: check === 2 ? '#F0FAF7' : 'white' }}
                  className='item'
                >
                  <label>
                    {' '}
                    <span>
                      <i className='bx bxl-paypal'></i>
                    </span>{' '}
										Paypal
                  </label>
                  <input
                    checked={check === 2}
                    onChange={() => setCheck(2)}
                    type='checkbox'
                  />
                </div>
                <div
                  style={{ backgroundColor: check === 3 ? '#F0FAF7' : 'white' }}
                  className='item'
                >
                  <label>
                    {' '}
                    <span>
                      <i className='bx bxs-bank'></i>
                    </span>{' '}
										Bank Transfer
                  </label>
                  <input
                    checked={check === 3}
                    onChange={() => setCheck(3)}
                    type='checkbox'
                  />
                </div>
              </div>
            </div>
            <div className='payment__charge-form-info-right'>
              <input type='text' placeholder='Last Name' />
              <input
                className='payment__charge-form-info-right-address'
                type='text'
                placeholder='Address for Delivery'
              />
              <input
                className='payment__charge-form-info-right-phone'
                type='text'
                placeholder='Mobile Phone'
              />
            </div>
          </div>
          {/*--------------------------Page 2--------------------------*/}
          <div
            style={{ visibility: current === 2 ? 'visible' : 'hidden' }}
            className='payment__charge-form-visa'
          >
            <div className='payment__charge-form-visa-img'>
              <img src={visa} alt='visa img' />
            </div>
            <form className='payment__charge-form-visa-info'>
              <input type='text' placeholder='Card Number' />
              <div className='expire'>
                <input className='item' type='text' placeholder='Expiry' />
                <input className='item' type='text' placeholder='CVV' />
              </div>
              <input type='text' placeholder='Holder Number' />
              <div className='confirm'>
                <input type='checkbox' />
                <p>Save this credit card</p>
              </div>
            </form>
          </div>
          {/*--------------------------Page 3--------------------------*/}
          <div
            style={{ visibility: current === 3 ? 'visible' : 'hidden' }}
            className='payment__charge-form-success'
          >
            <div>
              <i className='bx bx-check'></i>
            </div>
            <p>Success</p>
          </div>
          <div className='payment__charge-form-info-button'>
            <button
              onClick={() => {
                setCurrent((prev) => prev + 1);
                if (current === 3) setToggle(false);
              }}
            >
							Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
