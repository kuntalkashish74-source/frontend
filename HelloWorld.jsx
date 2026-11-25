
import './HelloWorld.css';

function HelloWorld() {

    const name = "Kashish";
    const age = 20;

    return (
        <div>
            <h1>Hello World!</h1>

            <h2>Welcome, {name}</h2>

            <p>Your age is: {age}</p>

            <p>Next year your age will be: {age + 1}</p>

            <p>Today is: {new Date().toDateString()}</p>
        </div>
    );
}

export default HelloWorld;