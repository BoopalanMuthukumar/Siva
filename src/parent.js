import React from 'react';
import Child from './child';

const Parent = (props) => {
	const data = "Hello Everyone";
	return (
		<div>
			<Child data={data} />
		</div>
	);
}

export default Parent;

