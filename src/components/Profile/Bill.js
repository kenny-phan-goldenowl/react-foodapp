import "./Bill.scss";

function Item({ name, price, details, quantity }) {
	return (
		<div className='bill__item-dish'>
			{/* eslint-disable  */}
			<img
				className='bill__item-dish-img'
				src={require('./img/burger1.png')}
				alt=''
			/>
			{/* eslint-enable  */}
			<h3 className='bill__item-dish-name'>{name}</h3>
			<p className='bill__item-dish-details'>{details}</p>
			<div className='bill__item-dish-end'>
				<p>${price}</p>
				<p>Qty: {quantity}</p>
			</div>
		</div>
	);
}

function Bill() {
	return (
		<div className='bill'>
			<p className='bill__id'>Order #997</p>
			<p className='bill__date'>23 Feb 2021, 08:28 PM</p>
			<div className='bill__item'>
				<Item
					name='Big Mac'
					price='6.99'
					details='beef patties, Iceberg lettuce, American cheese, pickles ...'
					quantity='2'
				/>
				<Item
					name='Small Mac'
					price='3.99'
					details='Iceberg lettuce,cheese, pickles ...'
					quantity='5'
				/>
				<Item
					name='Normal Mac'
					price='5.99'
					details='beef patties, pickles ...'
					quantity='3'
				/>
			</div>
			<div className='line'></div>
			<div className='bill__end'>
				<p>Total: $25.34</p>
				<button>Paid</button>
			</div>
		</div>
	);
}

export default Bill;
