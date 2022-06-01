import {useEffect, useState} from 'react';

const ClosedRide = ({bids}) => {
	const [highestBid, setHighestBid] = useState(0);

	useEffect(() => {
		setHighestBid(Math.max(...bids.map(o => o.amount)));
	}, []);

	return <div></div>;
};

export default ClosedRide;
