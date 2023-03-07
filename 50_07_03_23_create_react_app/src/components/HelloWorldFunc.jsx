const HelloWorldFunc = () => {
    const daysInAWeek = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
        <div>
            <h1>Hello world from a functional component</h1>
            <ul>
                {daysInAWeek.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default HelloWorldFunc;