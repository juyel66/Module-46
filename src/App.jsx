
import './App.css'
import HookFrom from './Components/HookForm/HookFrom'
import StateFullFormI from './Components/StateFullForm/StateFullFormI'
import Reusable from './Reuseable/Reusable'
// import SimpleForm from './Components/SimpleForm/SimpleForm'



function App() {
  

  return (
    <>

      <h1 className='text-4xl font-bold text-green-500'>Vite + React</h1> <br />
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullFormI></StateFullFormI> */}
      {/* <HookFrom></HookFrom> */}
      <Reusable formTitle={'Sign up'}></Reusable> <br />
      <Reusable formTitle={'Update'} submitText='Update'></Reusable> <br />
      <Reusable formTitle={'Login'} submitText='login'></Reusable>

      
      
 

      
    
      
      

    </>
  )
}

export default App
