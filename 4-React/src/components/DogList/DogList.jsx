import React from 'react'
import Dog from '../Dog'

export function DogList(props) {
  const { dogs } = props

  return (
    <>
      {dogs.map((dog, index) => (
        <Dog
          key={index}
          name={dog.name}
          breed={dog.breed}
          superpower={dog.superpower}
        />
      ))}
    </>
  )
}
