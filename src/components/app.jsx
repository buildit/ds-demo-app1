import React from 'react';
import { Header, Footer } from '@buildit/ds-demo-lib';
import './styles.less';
import Panel from './panel';

const data = [

]

const App = () => {
  return (
    <div className="app1">
      <Header>This is the Header for App 1</Header>
      <Panel />
      <Footer>The footer for App 1</Footer>
    </div>
  )
};

export default App;
