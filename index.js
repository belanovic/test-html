
const root = ReactDOM.createRoot(document.getElementById('root'));
const {useState} = React;

function App() {
    const [resBody, setResBody] = useState('');
    const [name, setName] = useState('');

    async function sendHTTP(route) {
        try {  
            const options = {
                headers: {
                    'x-auth-token': localStorage.getItem('x-auth-token')
                }
            }
            const response = await fetch(`http://127.0.0.1:5000/${route}`, options);
            const body = await response.json();
            setResBody(body);
        } catch(err) {
            setResBody('Error on the network');
        }
    }
    /* function sendHTTPforHTML() {
        fetch(`http://127.0.0.1:5000/`)
            .then(response => response.text())
            .then(body => setResBody(body))
            .catch(err => setResBody('Error on the network'))
    } */
    async function register() {
            try {
                    const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify({
                        name: name
                    }) 
                }
                const response = await fetch(`http://127.0.0.1:5000/register`, options);
                const body = await response.json();
                setResBody(body);
            } catch (err) {
                setResBody('Error on the networkkkk');
            }
        }
    async function getToken() {
            try {
                const options = {
                    method: 'POST',
                    body: JSON.stringify({name: name})
                }
                const response = await fetch(`http://127.0.0.1:5000/get_token`, options);
                const token = response.headers.get('x-auth-token');
                const body = await response.json();
                setResBody(body);
                localStorage.setItem('x-auth-token', token);
            } catch (err) {
                setResBody('Error on the networkkkk');
            }
    }
    return (
        <div className = "container">
            <div
                className = "login"
            >
                <button
                    className = "btn"
                    onClick = {() => getToken()}
                >get token
                </button>
                <input 
                    className = "name-input"
                    type = "text"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    onKeyDown = {(e) => {
                        e.code === "Enter" || e.code === "NumpadEnter"? 
                            getToken() : ''
                    }}
                >
                </input>
                <button
                    className = "btn"
                    onClick = {() => register()}
                >register
                </button>
                <button
                    className = "btn"
                    onClick = {() => localStorage.removeItem('x-auth-token')}
                >remove token
                </button>
            </div>
            <button
                className = "btn"
                onClick = {() => sendHTTP('test')}
            >Send HTTP request to localhost:5000
            </button>

            {/* <button
                className = "btn"
                onClick = {() => sendHTTPforHTML()}
            >Send HTTP request for HTML to /
            </button> */}
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