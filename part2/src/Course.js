import React from 'react'

export const Course = ({course}) => {

  return (
    <>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <TotalExercises parts={course.parts}/>
    </>
  )
}


const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map((part) =>{
        return <Parts key={part.id} name={part.name} exercises={part.exercises}/>
      })}
    </ul>
  )
}

const Parts = ({name, exercises}) => {
  return (
    <li>
    <h6>{name}</h6>
    <small>{exercises}</small>
    </li>
  )
}

const TotalExercises = ({parts}) => {

  console.log('totalExercises props', parts)

  return (
    <div>Total exercises{" "}
      {
      parts.reduce((sum, p)=>{
        return sum + p.exercises;
      }, 0)
      }
    </div>
  )
}


