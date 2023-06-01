
const root = ReactDOM.createRoot(document.getElementById('root'));
const {useState} = React;

function App() {
    const [resBody, setResBody] = useState('')
    /* useEffect(() => {}) */
    function sendHTTP(route) {
        fetch(`http://127.0.0.1:5000/${route}`)
            .then(response => response.json())
            .then(body => setResBody(body))
            .catch(err => setResBody('Error on the network'))
    }
    function sendHTTPforHTML() {
        fetch(`http://127.0.0.1:5000/`)
            .then(response => response.text())
            .then(body => setResBody(body))
            .catch(err => setResBody('Error on the network'))
    }
    return (
        <div className = "container">
            <button
                className = "btn"
                onClick = {() => sendHTTP('test')}
            >Send HTTP request to localhost:5000
            </button>
            <button
                className = "btn"
                onClick = {() => sendHTTPforHTML()}
            >Send HTTP request for HTML to /
            </button>
            <div
                className = "response"
            >{resBody}
            </div>
            <div
                className = "image-container"
            >
                <img 
                    src = "https://www.rts.rs/upload//media/2023/4/28/12/32/555/1467526/IMG-287035c57e2fdf40260c608128f6566d-V.jpg"
                >
                </img>
            </div>
        </div>
    )
}

root.render(<App />);