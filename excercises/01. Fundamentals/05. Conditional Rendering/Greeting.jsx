const Greeting = ({ timeOfDay }) => {
    return (
        timeOfDay === "morning" ? (
            <h2>Good morning!</h2>
        ) : timeOfDay === "afternoon" ? (
            <h2>Good afternoon!</h2>
        ) : (
            <h2>Good evening!</h2>
        )
    );
};

export default Greeting;