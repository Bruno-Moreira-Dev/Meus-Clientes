import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.scss';
import { Card } from './components/Card/Card';
import { getOrCreateTheme } from './theme';

function App() {
    return <ThemeProvider theme={getOrCreateTheme()}>
        <div className="App">
            <h2 className="AppTitleHeader">Meus Clientes</h2>
            <Card />
        </div>
    </ThemeProvider>
}

export default App;