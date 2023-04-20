// AKA MealsProvider.js

import React from "react";

// Create React API context
const MealsContext = React.createContext();



// ES6 function that provides the context and accepts the children value
// which will hold everything in the MealsProvider component
// The children value is returned from the MealProvider
const MealsProvider = ({children}) => {

    function getData(query) {
        
        // This mocks the data that would be retrieved from the endpoint
        const todaysMeals = [
            { name: "Anom2", age: 19, gender: "Male" },
            { name: "Megha2", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
            ];
        
            return todaysMeals
    }
    
    const todaysMeals = getData("some query")

    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext)

export default MealsProvider