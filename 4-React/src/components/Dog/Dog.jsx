'use client'

export function Dog({ dog }) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{dog.name}</span>
          <span className="dog-breed">{dog.breed}</span>
        </div>
        <span className="dog-superpower">{dog.superpower}</span>
        <div className="dog-picture">
          <img src={dog.picture} alt="picture of dog" />
        </div>
      </div>
    </div>
  )
}
