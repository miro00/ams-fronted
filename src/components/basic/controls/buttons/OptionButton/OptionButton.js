import './OptionButton.scss'

export default function OptionButton(props) {
  return (
    <button type="button" className="OptionButton">
      {props.icon !== undefined &&
        <img src={`/images/${props.icon}`} alt="" className="button-icon"/>
      }
      <span className="button-title">{props.title}</span>
    </button>
  )
}