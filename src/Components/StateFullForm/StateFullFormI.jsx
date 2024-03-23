import { useState } from "react";


const StateFullFormI = () => {
    const [name, setName] = useState('MD');
    const [email, setEmail] = useState(null);
    const [password, setPassword]= useState(null);
    const [error, setError] = useState('')
   
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length<6){
            setError('password must be 6 character longer')
        }
        else{
            setError('')
           
        }
        console.log(email, password, name)
       

    }
    const handleNameChange = e=>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value)

    }
    const handlePasswordChange = e=>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} className="w-[300px] h-11  rounded-xl border bg-gray-200" type="text" name="name" placeholder="Enter your name" required /> <br /> <br />
                <input onChange={handleEmailChange} className="w-[300px] h-11  rounded-xl border bg-gray-200" type="email" name="email" placeholder="Enter your email" required /> <br /> <br />
                <input onChange={handlePasswordChange} className="w-[300px] h-11  rounded-xl border bg-gray-200" type="password" name="password" placeholder="Enter your Password" required /> <br /> <br />
                <button className='btn border border-yellow-500 rounded-xl bg-blue-300 w-52 h-10'>Submit</button>
            
            </form>
            {
                error && <p>{error}</p>
            }
            

        </div>
    );
};

export default StateFullFormI;