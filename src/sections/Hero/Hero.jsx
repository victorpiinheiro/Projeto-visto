
import styles from './Hero.module.css';

import LeftPanel from './LeftPanel';
import RigthPanel from './RigthPanel'

export default function Hero() {
  return (
    <div className={styles['section01-container']}>

      <div className={styles['left-panel']}>
        <LeftPanel />
      </div>

      <div className={styles['rigth-panel']}>
        <RigthPanel />
      </div>

    </div>
  )
}