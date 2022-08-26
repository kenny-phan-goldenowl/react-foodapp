import { useState } from 'react';

import { dish1 } from 'assets';

import './style.scss';

function CartItem({
  img = dish1,
  name = "Home made pizza 12'",
  description = 'beef patties, Iceberg lettuce, American cheese, pickles, ...',
  userName = 'you',
  price = 10,
  qty = 1,
  onRemove,
  id,
}) {
  const [count, setCount] = useState(qty);
  const onMinus = (data) => {
    setCount((prev) => prev - 1);
    if (count === 1) onRemove(data);
  };

  return (
    <div className='cart-item'>
      <div className='cart-item__details'>
        <img className='cart-item__details-img' src={img} alt='food img' />
        <div className='cart-item__details-info'>
          <div>
            <p className='name'>{name}</p>
            <p className='des'>{description}</p>
          </div>
          <p className='user'>Added by {userName}</p>
        </div>
      </div>
      <div className='cart-item__add'>
        <p className='cart-item__total-price'>${Math.floor(price * count)}</p>
        <div className='cart-item__add-adjust'>
          <div className='cart-item__add-adjust-qty'>
            <i onClick={() => onMinus(id)} className='bx bx-minus'></i>
            {count}
            <i
              onClick={() => setCount((prev) => prev + 1)}
              className='bx bx-plus'
            ></i>
          </div>
          <button onClick={() => onRemove(id)}>Remove Item</button>
        </div>
        <p className='cart-item__price'>${price}</p>
      </div>
    </div>
  );
}

export default CartItem;
