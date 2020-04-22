import * as React from 'react';


export default function Collection(props) {
	console.log(props);
	 return (
		 <p>Welcome to your {props.match.params.name} collection</p>
	 )
}
