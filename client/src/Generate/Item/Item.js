import React from 'react'
import uuid from "uuid";

const ItemTd = ({student}) => {
    return (
        <React.Fragment>
            <td>{student['Student Name']}</td>
            <td>{student['Gender']}</td>
            <td>{student['Class Level']}</td>
            <td>{student['Home State']}</td>
            <td>{student['Major']}</td>
            <td>{student['Extracurricular Activity']}</td>
        </React.Fragment>
    )
}

export default ItemTd

//Using fragments: https://reactjs.org/docs/fragments.html
// keys https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js/43892905#43892905