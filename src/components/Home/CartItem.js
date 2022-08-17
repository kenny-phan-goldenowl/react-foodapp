import "./CartItem.scss";
import { dish1 } from ".";
import { useState } from "react";

function CartItem({
	img = dish1,
	name = "Home made pizza 12'",
	description = "beef patties, Iceberg lettuce, American cheese, pickles, ...",
	userName = "you",
	price = 10,
	qty = 2,
}) {
	const [count, setCount] = useState(qty);

	return (
		<div className='cart-item'>
			<img className='cart-item__img' src={img} alt='food img' />
			<div className='cart-item__details'>
				<p className='name'>{name}</p>
				<p className='des'>{description}</p>
				<p className='user'>Added by {userName}</p>
			</div>
			<p className='cart-item__total-price'>${price * count}</p>
			<div className='cart-item__add'>
				<div className='cart-item__add-adjust'>
					<i
						onClick={() => setCount((prev) => prev - 1)}
						className='bx bx-minus'
					></i>
					{count}
					<i
						onClick={() => setCount((prev) => prev + 1)}
						className='bx bx-plus'
					></i>
				</div>
				<button>Remove Item</button>
			</div>
			<p className='cart-item__price'>${price}</p>
		</div>
	);
}

export default CartItem;
