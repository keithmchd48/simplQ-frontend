import React from 'react';
import { CreateQButton, JoinQButton } from '../../common/Button';
import Header from '../../common/Header';
import styles from '../../../styles/homePage.module.scss';
import { CreatorSlider, JoinerSlider } from '../../common/slider';

export const Banner = () => (
  <div>
    <Header className={styles['main-header']} text="SimplQ" />
    <h3 className={styles.center}>A long overdue alternative to physical Queues</h3>
  </div>
);

export const ButtonGroup = (props) => (
  <div className={styles['button-group']}>
    <div>
      <CreateQButton onClick={() => props.history.push('/create')} />
    </div>
    <div>
      <JoinQButton onClick={() => props.history.push('/join/')} />
    </div>
  </div>
);

export const BenefitsInfo = () => (
  <div className={styles['benefits-info']}>
    <div>
      <img src="/images/minimize_crowding.svg" alt="mimimze crowding" />
      <p>Minimize crowding by keeping your queue virtual</p>
    </div>
    <div>
      <img src="/images/enforce_social_dist.svg" alt="Enforce social distancing" />
      <p>Enforce social distancing effectively</p>
    </div>
    <div>
      <img src="/images/check_status.svg " alt="Check your current status" />
      <p>Check your current status in the queue</p>
    </div>
  </div>
);

export const HowToCreate = () => (
  <div className={styles.slider}>
    <h2>Create a Queue at the click of a button</h2>
    <CreatorSlider />
  </div>
);

export const HowToJoin = () => (
  <div className={styles.slider}>
    <h2>Join a queue without being there</h2>
    <JoinerSlider />
  </div>
);

export const ExtraInfo = () => (
  <div className={styles['extra-info']}>
    <div>
      {/* <img></img> */}
      <p>Always free</p>
    </div>
    <div>
      {/* <img></img> */}
      <p>Data security</p>
    </div>
    <div>
      {/* <img></img> */}
      <p>Easy to use</p>
    </div>
  </div>
);
