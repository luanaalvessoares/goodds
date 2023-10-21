import './ArrowTransition.css'
import ArrowRightCircleLine from 'remixicon-react/ArrowRightCircleLineIcon'

function ArrowTransition({ href, text }) {
  return (
    <div className="arrowContainer">
      <a href={href}>
        <span className="btnContent">{text}</span>
        <span className="btnIcon">
          <ArrowRightCircleLine />
        </span>
      </a>
    </div>
  );  
}

export default ArrowTransition;