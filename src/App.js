import React from 'react';
import ReqForm from '../src/components/reqFom';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Responsives from 'react-bulma-components/lib/modifiers/responsives';
import './App.sass';

function App() {
  return (
    <Container className="container">
      <Columns>
        <Columns.Column className="sidebar" size={'one-quarter'} >
          <p>Sidebar</p>
        </Columns.Column>
        <Columns.Column className="content" size={'three-quarters'}>
          <Columns>
            <Columns.Column size={'half'} >
              <ReqForm></ReqForm>
            </Columns.Column>
            <Columns.Column size={'half'} >
              <p>Comments</p>
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </Container>
  );
}

export default App;
