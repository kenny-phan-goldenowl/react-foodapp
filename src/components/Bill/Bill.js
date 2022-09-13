import './style.scss';

function Item({
  name,
  price,
  details = 'add later',
  quantity = 'add later',
  img,
}) {
  return (
    <div className='bill__item-dish'>
      <img className='bill__item-dish-img' src={img} alt='' />
      <h3 className='bill__item-dish-name'>{name}</h3>
      <p className='bill__item-dish-details'>{details}</p>
      <div className='bill__item-dish-end'>
        <p>${price}</p>
        <p>Qty: {quantity}</p>
      </div>
    </div>
  );
}

function Bill({ dishesInOrder, dishes }) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const res = dishes.filter((item) => dishesInOrder.includes(item.id));

  console.log(dishes);
  console.log(res);
  console.log(dishesInOrder);

  return (
    <div className='bill'>
      <p className='bill__id'>Order #997</p>
      <p className='bill__date'>{`${year}/${
        month < 10 ? `0${month}` : `${month}`
      }/${date}`}</p>
      <div className='bill__item'>
        {/*filter dishes in each order*/}
        {dishes
          .filter((dish) => dishesInOrder.includes(dish.id))
          .map((item) => (
            <Item
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.img_url}
              details={item.description}
            />
          ))}
      </div>
      <div className='line'></div>
      <div className='bill__end'>
        <p>Total:</p>
        <button>Paid</button>
      </div>
    </div>
  );
}

export default Bill;
