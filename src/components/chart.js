import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

//should this be a class based componend or a function based component? 
export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}
//we dont need to make any use of state inside of our chart at all its gonna be some props come in 
//we render a component, thats it, no extra fancy stuff going at all.