import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate();
    function LoginHandler(event){
        event.preventDefault();
        const checkLogin=true;
        if(checkLogin){
            navigate('/dashboard');
        }
    }
    return (
        <div>
            <form onSubmit={LoginHandler}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}