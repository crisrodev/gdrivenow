import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

const render = () =>{
    const Main = require('./components/main').Main;
    ReactDOM.render(<AppContainer>
                        <Main/>
                    </AppContainer>,
                    document.getElementById('app'));
}

render();

if(module.hot) {
    module.hot.accept(render);
}