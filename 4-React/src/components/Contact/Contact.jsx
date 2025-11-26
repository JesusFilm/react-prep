export function Contact() {
  return (
    <>
      {/* 
        1. Add a closing tag for the <Contact /> component
        2. Add the `key` prop when using map
       */}
      {array.map((person, index) => (
        <Contact
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
        />
      ))}
    </>
  )
}
