import React from 'react'
import './App.css';

import TomatoButton from './TomatoButton';
import { ThemeProvider } from 'styled-components'
import Text from './Text'

const theme = {
  main: 'tomato'
}
 
const App = () =>
{
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TomatoButton>Tomato button</TomatoButton>
        <Text>Hola!</Text>
      </ThemeProvider>
    </div>  
    )
}


export default App;
