import React from 'react'
import { IComment } from './Main'


interface IProps {
  props: IComment
}
export default function Article({ props }: IProps) {

  return (
    <div>{props.description}</div>
  )
}