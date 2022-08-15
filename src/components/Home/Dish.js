import "./Dish.scss";

function Dish() {
	return (
		<div className='dish__container'>
			<div className='dish__discount'>50%</div>
			<div className='dish__img'>
				{/* eslint-disable  */}
				<img src={require('./img/dish1.png')} alt='pizza img' />
				{/* eslint-enable  */}
			</div>
			<div className='dish__details'>
				<div className='dish__details-top'>
					<p className='dish__details-name'>Home made pizza</p>
					<p className='dish__details-price'>$19</p>
				</div>
				<div className='dish__details-bottom'>
					<div className='dish__details-rating'>
						<i className='bx bxs-star'></i> 4.7
					</div>
					<div className='dish__details-time'>50-79 min</div>
					<div className='dish__details-add'>
						<i className='bx bx-plus'></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dish;
