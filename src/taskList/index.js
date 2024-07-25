import {Li, Para, Button} from './style'

const TaskList = props => {
  const {data} = props
  const {task, displayText} = data
  return (
    <Li>
      <Para>{task}</Para>
      <Button as="p" type="button">{displayText}</Button>
    </Li>
  )
}

export default TaskList
