import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Options from './options'
import ButtonList from './buttonsList'
import TaskList from './taskList'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    selectInput: tagsList[0].displayText,
    taskList: [],
    filteredTasks: [],
  }

  onSubmitTasks = event => {
    event.preventDefault()
    const {searchInput, selectInput} = this.state
    const text = tagsList.filter(eachObj => eachObj.optionId === selectInput)
    console.log(text[0].displayText)
    if (searchInput !== '') {
      const newTaskObj = {
        id: uuidv4(),
        task: searchInput,
        displayText: text[0].displayText,
        category: selectInput,
      }
      this.setState(prevState => ({
        taskList: [...prevState.taskList, newTaskObj],
        filteredTasks: [...prevState.taskList, newTaskObj],
        searchInput: '',
        selectInput: tagsList[0].optionId,
      }))
    }
  }

  onClickToAllTasks = () => {
    const {taskList} = this.state
    this.setState({filteredTasks: taskList})
  }

  getCategoryToFilter = id => {
    const {taskList} = this.state
    const selectedFilteredTasks = taskList.filter(
      eachObj => eachObj.category === id,
    )
    this.setState({
      filteredTasks: selectedFilteredTasks,
    })
  }

  onChangeUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeSelectInput = event => {
    this.setState({selectInput: event.target.value})
  }

  onClickToRemoveAllTasks = () => {
    this.setState({taskList: [], filteredTasks: []})
  }

  render() {
    const {searchInput, selectInput, filteredTasks} = this.state
    const showTaskList = filteredTasks.length === 0
    console.log(showTaskList)
    return (
      <div className="main-container">
        <div className="firstContainer">
          <h1 className="firstContainerHeading">Create a task!</h1>
          <form className="form-container" onSubmit={this.onSubmitTasks}>
            <label htmlFor="task" className="user-labels">
              Task
            </label>
            <input
              value={searchInput}
              className="user-inputs"
              id="task"
              onChange={this.onChangeUserInput}
              placeholder="Enter the task here"
            />
            <label htmlFor="tags" className="user-labels">
              Tags
            </label>
            <select
              id="tags"
              value={selectInput}
              className="user-inputs"
              onChange={this.onChangeSelectInput}
            >
              {tagsList.map(eachObj => (
                <Options data={eachObj} key={eachObj.optionId} />
              ))}
            </select>
            <button className="add-task-button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="secondContainer">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h1 className="secondContainerHeading">Tags</h1>
            <button
              type="button"
              onClick={this.onClickToRemoveAllTasks}
              className="show-all-button"
            >
              Remove All
            </button>
          </div>
          <ul className="buttonsUl">
            {tagsList.map(eachObj => (
              <ButtonList
                data={eachObj}
                key={eachObj.optionId}
                getCategoryToFilter={this.getCategoryToFilter}
              />
            ))}
          </ul>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h1 className="secondContainerHeading">Tasks</h1>
            <button
              className="show-all-button"
              type="button"
              onClick={this.onClickToAllTasks}
            >
              Show All
            </button>
          </div>
          {showTaskList ? (
            <div className="noTaskContainer">
              <p>No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="tasksUl">
              {filteredTasks.map(eachObj => (
                <TaskList data={eachObj} key={eachObj.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
