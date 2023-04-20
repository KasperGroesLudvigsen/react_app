/*
This module creates an object containing the user input from the form.

It basically does the same as DataProvider, but where DataProvider provides the 
data that is returned when a query is made to the endpoint, InputProvider provides the
user input data that will make up the query.  
*/ 


import React from "react";

// Create React API context
const UserInputContext = React.createContext();

const UserInputProvider = ({children}) => {

    const [form, setForm] = React.useState({
        firstName: "Jack",
        lastName: "Jones",
        email: "lukejones@asdgargrawr.com"
    })

    

    return (
        <UserInputContext.Provider value={{form}}>
            {children}
        </UserInputContext.Provider>

    )
}

