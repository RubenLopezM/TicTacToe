import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Tictac = props => {
	const [Element, SetElement] = useState("");

	return (
		<div
			className="square"
			onClick={() => {
				if (Element == "" && props.Finish == false) {
					SetElement(props.Element);
					props.Click(props.Position);
				}
			}}>
			<span>{Element}</span>
		</div>
	);
};

Tictac.propTypes = {
	Element: PropTypes.string,
	Position: PropTypes.number,
	Click: PropTypes.func,
	Finish: PropTypes.bool
};

export default Tictac;
