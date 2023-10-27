import React from 'react'
import { type Todo } from '../types'
interface Props {
  onClickFilter: (FilterType: string) => Todo [] | null
}
export const Filters: React.FC<Props> = ({ onClickFilter }) => {
  return (
        <>
    <button onClick={() => { onClickFilter('Completed') }}>Completed</button>
    <button onClick={() => { onClickFilter('All') }}>All</button>
    <button onClick={() => { onClickFilter('Active') }}>Active</button>

        </>
  )
}
