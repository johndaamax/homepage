import React from 'react'

import classes from './CustomHeading.css'

const customHeading = props => {
	return (
		<div className={classes.CustomHeading}>
			<h1 className={classes.LgHeading}>
				{props.mainHeading}
				<span className={classes.SecondaryName}>{props.secondaryHeading}</span>
			</h1>
			<h2 className={classes.Caption}>{props.caption}</h2>
		</div>
	)
}

export default customHeading