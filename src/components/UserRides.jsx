import RideOffered from './RideOffered';
import travelsMock from '../mocks/travelsMock.json';
import AcceptanceRide from './AcceptanceRide';
import ClosedRide from './ClosedRide';
import {useState} from 'react';

const MyRides = () => {
	const [rerender, setRerender] = useState(false);

	return (
		<div className="container">
			<ul className="list-group">
				{travelsMock.map((travel, index) => {
					return travel.open ? (
						<AcceptanceRide
							id={travel.id}
							date={travel.date + ' ' + travel.hour}
							from={travel.from}
							to={travel.to}
							by={travel.driver}
							cost={travel.costRide}
							bids={travel.bids}
							activeTime={travel.hoursActive}
							rerender={rerender}
							setRerender={setRerender}
						/>
					) : (
						<ClosedRide bids={travel.bids} />
					);
				})}
			</ul>
		</div>
	);
};

export default MyRides;
