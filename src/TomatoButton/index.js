
import styled from "styled-components";

import Button from "../Button";



const TomatoButton = styled( Button )`
background-color: ${props => props.theme.main || 'papayawhip'};
border-color: ${props => props.theme.main || 'papayawhip'};

`

export default TomatoButton