import {Component} from 'react'

export class PersonCard extends Component {
    render() {
    console.log(this.props);
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <>
                <h1>{lastName}, {firstName}</h1>
                <p>age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </>
        )
    }
}