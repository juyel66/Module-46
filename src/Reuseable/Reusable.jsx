

const Reusable = ({formTitle, submitText = 'Submit'}) => {
    const handleSubmit =e=>{
        e.preventDefault();
    }
    return (
        <div >
            <div className="border rounded-full p-3 border-red-500">
            <h2 className="text-3xl mb-5 font-bold">{formTitle}</h2>
             <form onSubmit={handleSubmit}>
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="text" name="name" placeholder="Enter your name" /> <br /> <br />
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="email" name="email" placeholder="Enter your email" /> <br /> <br />
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="phone" name="phone" placeholder="Enter your number" /> <br /> <br />
                <input className='btn border border-yellow-500 rounded-xl bg-red-400 w-52 h-10'  type="submit" value={submitText} />
            </form>
            </div>

            
        </div>
    );
};

export default Reusable;