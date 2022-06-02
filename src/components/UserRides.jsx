import travelsMock from '../mocks/travelsMock.json';
import AcceptanceRideUser from './AcceptanceRideUser';
import ClosedRideUser from './ClosedRideUser';
import {useState} from 'react';

const MyRides = () => {
	const [rerender, setRerender] = useState(false);

	return (
		<div className="container">
			<ul className="list-group">
				{travelsMock.map((travel, index) => {
					return travel.open ? (
						<AcceptanceRideUser
							id={travel.id}
							date={travel.date + ' ' + travel.hour}
							from={travel.froml}
							to={travel.to}
							by={travel.driver}
							cost={travel.costRide}
							rerender={rerender}
							setRerender={setRerender}
						/>
					) : (
						<ClosedRideUser bids={travel.bids} />
					);
				})}
			</ul>
		</div>
	);
};

export default MyRides;
