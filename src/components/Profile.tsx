import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile () {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/FlavioInacio-jf.png" alt="Flávio Inácio"></img>
      <div>
        <strong>Flávio Inácio</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          level {level}
        </p>
      </div>
    </div>
  );
}