import React from 'react';
import ReqForm from '../src/components/reqFom';
import { Columns } from 'react-bulma-components'
import './App.sass';

function App() {
  return (
    <div className="container">
      <Columns>
        <Columns.Column className="sidebar" size={'one-third'} >
          <p>Sidebar</p>
        </Columns.Column>
        <Columns.Column className="content" size={'two-thirds'}>
          <ReqForm></ReqForm>
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default App;
