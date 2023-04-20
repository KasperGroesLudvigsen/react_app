/* 
AKA Table.js
This module is a context consumer.
It consumes the context provided by DataProvider.js
Specifically, DavaProvider.js creates a table displaying the values in the object meals 
The meals object is provided by DataProvider.js
The meals object mocks the data that would be retrieved by the endpoint
*/
import { useMealsListContext } from "./DataProvider";



const MealsList = () => {

	const { meals } = useMealsListContext();

	return (
		<div className="Table">
		<table>
			<tr>
			<th>Name</th>
			<th>Age</th>
			<th>Gender</th>
			</tr>
			{meals.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.gender}</td>
                    </tr>
                )
			})}
		</table>
		</div>
	);

}

export default MealsList