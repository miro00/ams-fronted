import './ModuleOptions.scss'
import OptionButton from '../controls/buttons/OptionButton/OptionButton'

export default function ModuleOptions(props) {
  return (
    <div className="ModuleOptions">
      Опции
      {/* <Sorting /> */}
      <div className="buttons">
        {props.buttonsData.map(button => (
          <OptionButton key={button.button_id} title={button.button_title} icon={button.button_icon} />
        ))}
      </div>
    </div>
  )
}