import React from 'react';
import CardName from './cardName/CardName.js';
import CardSubTextContainer from './cardSubTextContainer/CardSubTextContainer.js';


const CardTextContainerTop = props => {

	let divider;
	let jobTitle;
	let companyName;

	const line = props.job.length + props.company.length + 3;

	if (!props.job || !props.company || line > 31) {
		divider = '';
	} else {
		divider = <p className="card__text--divider">|</p>;
	}

	jobTitle = (!props.job) ? '' : <p className="card__job-title">{props.job}</p>;
	companyName = (!props.company) ? '' : <p className="card__company-name">{props.company}</p>;


	return (
		<div className="card__text-container--top">
			<CardName name={props.name} />
			<CardSubTextContainer job={props.job} company={props.company} />
		</div>
	);
}

export  default CardTextContainerTop