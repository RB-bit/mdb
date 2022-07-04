import React from 'react'
import Contact from './Contact'

const Persons = ({persons, searchTerm}) => {
    return (
    <>
    <ul>
        {persons.filter((val) => {
        if(searchTerm === ""){
            return val
        } else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
        }
        }).map( person => <Contact key={person.id} person={person}/>
        )}
        </ul>
    </>
    )
}

export default Persons