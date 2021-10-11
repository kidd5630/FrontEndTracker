
const Home = ({userToken, myUsername}) => {
    return (
        <>
        <div className="home">
            {userToken ?
            <div className="loggedInMessage">
                Welcome To FitnessTracker {myUsername} Lets Get To Work!
            </div>:
            <>
            <div className="loggedOutMessage">
            <h1>Welcome To Fitness Tracker</h1>
            <p>Everything you need to create and track the perfect workouts!</p>
            </div>
            </>
            }
        </div>
        </>
    )
}
export default Home; 