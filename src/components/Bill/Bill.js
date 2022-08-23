import { burger } from 'assets';

import './style.scss';

function Item({ name, price, details, quantity }) {
  return (
    <div className='bill__item-dish'>
      <img className='bill__item-dish-img' src={burger} alt='' />
      <h3 className='bill__item-dish-name'>{name}</h3>
      <p className='bill__item-dish-details'>{details}</p>
      <div className='bill__item-dish-end'>
        <p>${price}</p>
        <p>Qty: {quantity}</p>
      </div>
    </div>
  );
}

function Bill({ name, price, details, quantity }) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
    <div className='bill'>
      <p className='bill__id'>Order #997</p>
      <p className='bill__date'>{`${year}/${
        month < 10 ? `0${month}` : `${month}`
      }/${date}`}</p>
      <div className='bill__item'>
        <Item name={name} price={price} details={details} quantity={quantity} />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className='line'></div>
      <div className='bill__end'>
        <p>Total: {price * quantity}</p>
        <button>Paid</button>
      </div>
    </div>
  );
}

export default Bill;
