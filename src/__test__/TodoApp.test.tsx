import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoItem } from '../../js/todoItem'
import Header from '../../js/header'

const todo = { id: '1', title: 'Buy groceries @shopping @household', completed: false }
const key = '1'
const onToggle = jest.fn()
const onDestroy = jest.fn()
const onEdit = jest.fn()
const editing = false
const onSave = jest.fn()
const onCancel = jest.fn()
const handleNewTodoKeyDown = jest.fn()

describe("Todo App", ()=>{
  it('should display title and tags side by side on todo item label on key down', async () => {
    render(<Header handleNewTodoKeyDown={handleNewTodoKeyDown}/>)
    render(<TodoItem key={key} todo={todo} onCancel={onCancel} onToggle={onToggle} onDestroy={onDestroy} onEdit={onEdit} onSave={onSave} editing={editing} />)
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i)
    const spanElementTitle = screen.getByTestId('title')
    const spanElementLabel = screen.getByTestId('label')

    fireEvent.change(inputElement, { target: { value: todo.title } })
    fireEvent.keyDown(inputElement)
    expect(spanElementTitle.innerHTML).toBe("Buy groceries")
    expect(spanElementLabel.innerHTML).toBe("shopping ,household")
  })

  it('should be able to change input value to empty on key down', async () => {
    render(<Header handleNewTodoKeyDown={handleNewTodoKeyDown}/>)
    render(<TodoItem key={key} todo={todo} onCancel={onCancel} onToggle={onToggle} onDestroy={onDestroy} onEdit={onEdit} onSave={onSave} editing={editing} />)
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i)
    
    fireEvent.change(inputElement, { target: { value: todo.title } })
    fireEvent.keyDown(inputElement)
    expect(inputElement.innerHTML).toBe('')
  })

})
