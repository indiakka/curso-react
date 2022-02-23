import React from "react";
import PorpTypes from 'prop-types'

const Link = (props) => <a href={props.to}>{props.label}</a>

Link.prototype = {
    to: PorpTypes.string.isRequired,
    label: PorpTypes.string.isRequired,
}

Link.defaultProps = {
    to: 'https://google.com'
}

export default Link