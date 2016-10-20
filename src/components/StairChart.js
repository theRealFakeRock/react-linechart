import React, { PropTypes } from 'react';
import LineChart from "../components/LineChart";

export default class StairChart extends React.Component {

	render() {			
		return (
			<LineChart 
				hideYAxis 
				interpolate="linear"
				margins={{right: 100}}
				strokeWidth={15}
				isStair
				yMin={-1}
				hidePoints				
				{...this.props} />
		);
	}
}