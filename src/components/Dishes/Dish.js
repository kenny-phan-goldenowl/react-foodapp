import { dish1 } from 'assets';

import './style.scss';

function Dish({
  img = dish1,
  name = 'Chicken',
  price = '3.5',
  rating = '5',
  duration = '20',
  discount,
  dishId,
  onAdd,
}) {
  return (
    <div className='dish'>
      <div
        style={{ visibility: discount ? 'visible' : 'hidden' }}
        className='dish__discount'
      >
        {discount}%
      </div>
      <div className='dish__img'>
        <img src={img} alt='pizza img' />
      </div>
      <div className='dish__details'>
        <div className='dish__details-top'>
          <p className='dish__details-name'>{name}</p>
          <p className='dish__details-price'>${price}</p>
        </div>
        <div className='dish__details-bottom'>
          <div className='dish__details-bottom-rating'>
            <div className='dish__details-bottom-rating-start'>
              <i className='bx bxs-star'></i> {rating}
            </div>
            <div className='dish__details-bottom-rating-time'>{duration}m</div>
          </div>
          <div className='dish__details-bottom-add'>
            <i onClick={() => onAdd(dishId)} className='bx bx-plus'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
