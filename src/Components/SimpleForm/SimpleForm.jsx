

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('form submitted');

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="text" name="name" placeholder="Enter your name" /> <br /> <br />
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="email" name="email" placeholder="Enter your email" /> <br /> <br />
                <input className="w-[300px] h-11  rounded-xl border bg-gray-200" type="phone" name="phone" placeholder="Enter your number" /> <br /> <br />
                <button className='btn border border-yellow-500 rounded-xl bg-red-300 w-52 h-10'>Submit</button>
            </form>


        </div>
    );
};

export default SimpleForm;