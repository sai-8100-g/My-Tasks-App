import {Li, Button} from './style'

const ButtonList = props => {
  const {data, getCategoryToFilter} = props
  const {displayText, optionId} = data
  const onClickToSelectCategory = () => {
    getCategoryToFilter(optionId)
  }
  return (
    <Li>
      <Button type="button" onClick={onClickToSelectCategory}>
        {displayText}
      </Button>
    </Li>
  )
}

export default ButtonList
