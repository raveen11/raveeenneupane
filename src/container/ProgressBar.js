import React from 'react'
import './Progress.css'


const ProgressBar = ({done}) => {
  
  
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress111">
			<div className="progressdone" style={style}>
				
			</div>
		</div>
	)
}


export default ProgressBar


