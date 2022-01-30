import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../../js/header'

const handleNewTodoKeyDown = jest.fn()

describe('Header', () => {
  it('should render header component without any error', async () => {
    render(<Header handleNewTodoKeyDown={handleNewTodoKeyDown}/>)
    const headingElement = screen.getByText(/todos/i)
    expect(headingElement).toBeInTheDocument()
  })
})


