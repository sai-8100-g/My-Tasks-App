import {Option} from './style'

const Options = props => {
  const {data} = props
  const {displayText, optionId} = data
  return <Option value={optionId}>{displayText}</Option>
}

export default Options
