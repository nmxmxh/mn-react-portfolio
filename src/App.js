import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Menu from './components/menu/menu.component';
import Spinner from './components/with-spinner/spinner/spinner.component';

const EntryView = lazy(() => import('./components/entry-view/entry-view.component'));
const Projects = lazy(() => import('./components/projects/projects.component'));
const Blog = lazy(() => import('./components/blog/blog.component'));
const ProjectPage = lazy(() => import('./components/project-page/project-page.component'));


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
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <ContentStyle>
            <Route exact path='/' component={EntryView} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/projects/:linkUrl' component={ProjectPage} />
          </ContentStyle>
        </Suspense>
      </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
