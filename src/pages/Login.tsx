import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import theme from '../data/config.json';
import loginData from '../data/logindata.json';
import { useState } from "react";

interface LoginProps {
    setIsLoggedIn: ( value: boolean ) => void;
}
export default function Login({setIsLoggedIn} : LoginProps) {

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const destination = location.state?.from || "/addhouses-page";
    const handleLogin = () => {
        if (email === loginData.email && password === loginData.password) {
            setIsLoggedIn(true);
            navigate(destination);
        }else{
            setError('Credenciales incorrectas');
        }
    }
    return (
        <section className="flex flex-col justify-center items-center
         h-screen"
            
        >
            <div className="flex flex-col border rounded-2xl p-3 gap-3"
            style={{
                borderColor: theme.secondary
            }}>
                <Input onChange={(e: string) => {setEmail(e)}} type="text" value="" label="Email"/>
                <Input onChange={(e: string) => {setPassword(e)}} type="password" value="" label="Password"/>
                {error && <p className="text-red-500">{error}</p>}
                <Button onClick={ handleLogin }>Enviar</Button>
            </div>
        </section>
    )
}