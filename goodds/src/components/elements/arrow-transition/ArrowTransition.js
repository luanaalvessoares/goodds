import styles from './ArrowTransition.module.css'
import ArrowRightCircleLine from 'remixicon-react/ArrowRightCircleLineIcon'

function ArrowTransition({ href, text }) {
  return (
    <div className={styles.arrowContainer}>
      <a href={href}>
        <span className={styles.btnContent}>{text}</span>
        <span className={styles.btnIcon}>
          <ArrowRightCircleLine />
        </span>
      </a>
    </div>
  );  
}

export default ArrowTransition;