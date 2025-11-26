import React from 'react'
import { Dog } from '../Dog'

export function DogList(props) {
  const dogsArray = props.dogsArray

  return (
    <>
      {dogsArray.map((dog) => (
        <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} />
      ))}
    </>
  )
}
