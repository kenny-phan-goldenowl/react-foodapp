import "./Dish.scss";

function Dish({ name, price, rating, duration, discount }) {
	return (
		<div className='dish__container'>
			<div
				style={{ visibility: discount ? "visible" : "hidden" }}
				className='dish__discount'
			>
				{discount}%
			</div>
			<div className='dish__img'>
				{/* eslint-disable  */}
				<img src={require('./img/dish4.png')} alt='pizza img' />
				{/* eslint-enable  */}
			</div>
			<div className='dish__details'>
				<div className='dish__details-top'>
					<p className='dish__details-name'>{name}</p>
					<p className='dish__details-price'>${price}</p>
				</div>
				<div className='dish__details-bottom'>
					<div className='dish__details-rating'>
						<i className='bx bxs-star'></i> {rating}
					</div>
					<div className='dish__details-time'>{duration} min</div>
					<div className='dish__details-add'>
						<i className='bx bx-plus'></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dish;
