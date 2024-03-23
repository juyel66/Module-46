import useInputState from "../../Hooks/useInputState";


const HookFrom = () => {
    const [name, handleEmailChange] = useInputState('MD J');

    const handleSubmit = e=>{
        e.preventDefault()
        console.log('from data', name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleEmailChange} className="w-[300px] h-11  rounded-xl border bg-gray-200" type="text" name="name" placeholder="Enter your name" /> <br /> <br />
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="email" name="email" placeholder="Enter your email" /> <br /> <br />
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="phone" name="phone" placeholder="Enter your number" /> <br /> <br />
                <button className='btn border border-yellow-500 rounded-xl bg-red-300 w-52 h-10'>Submit</button>
            </form>


            
        </div>
    );
};

export default HookFrom;