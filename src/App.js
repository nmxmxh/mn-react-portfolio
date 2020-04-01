import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';

import Menu from './components/menu/menu.component';
import EntryView from './components/entry-view/entry-view.component';
import Projects from './components/projects/projects.component';

const ContentStyle = styled.div`
  margin-left: 7.5%;
  width: 92.5%;

  @media (max-width: 800px) {
    margin-left: 15%;
    width: 85%;
  }
`

const MenuStyle = styled.div`
  position: fixed;
  z-index: 1;
`

function App() {

  return (
    <div className="App">
      <MenuStyle>
        <Menu />
      </MenuStyle>
      <Switch>
          <ContentStyle>
            <Route exact path='/' component={EntryView} />
            <Route exact path='/projects' component={Projects} />
          </ContentStyle>
      </Switch>
    </div>
  );
}

export default App;
