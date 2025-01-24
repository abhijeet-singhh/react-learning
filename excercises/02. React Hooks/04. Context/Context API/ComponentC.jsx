import { Data, Data1 } from "../App"

const ComponentC = () => {
    return (
        <Data.Consumer>
            {(name) => {
                return (
                    <Data1.Consumer>
                        {(age) => {
                            return <h2>My name is: {name} and I'm {age} years old.</h2>
                        }}
                    </Data1.Consumer>
                )
            }}
        </Data.Consumer>
    )
}

export default ComponentC