import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Introduction from './introduction/introduction.component';
import Objective from './objective/objective.component';
import Skills from './skills/skills.component';
import Misc from './misc/misc.component';

import './entry-view.styles.scss';

const EntryView = () => (
  <div className="section-container">
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="500%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel">
            <Introduction className="panel"/>
          </section>
          <Tween
            from={{ x: '100%', opacity: '0' }}
            to={{ x: '0%', opacity: '1' }}
          >
            <section className="panel">
              <Objective />
            </section>
          </Tween>
          <Tween
            from={{ x: '100%', opacity: '0' }}
            to={{ x: '0%', opacity: '1' }}
          >
            <section className="panel">
              <Skills />
            </section>
          </Tween>
          <Tween
            from={{ x: '100%', opacity: '0' }}
            to={{ x: '0%', opacity: '1' }}
          >
            <section className="panel">
              <Misc />
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </div>
);

export default EntryView;