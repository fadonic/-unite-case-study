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

describe('TodoItem', () => {
  it('should render TodoItem component without error', async () => {
    render(<TodoItem key={key} todo={todo} onCancel={onCancel} onToggle={onToggle} onDestroy={onDestroy} onEdit={onEdit} onSave={onSave} editing={editing} />)
    const spanElementTitle = screen.getByTestId('title')
    expect(spanElementTitle).toBeInTheDocument()
    const spanElementLabel = screen.getByTestId('label')
    expect(spanElementLabel).toBeInTheDocument()
  })
})

