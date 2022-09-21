import React, {useState} from 'react';

const FirstFormComponentExample = () => {

    // ----------------ПЕРЕВЕДЕННЯ СТАНУ НЕКОНТРОЛЬОВАНОЇ ФОРМИ У СТАН КОНТРОЛЬОВАНОЇ ЧЕРЕЗ USESTATE---------------

//     const [login,setLogin] = useState('');
//
//     const [password,setPassword] = useState('');
//
//     function onSubmit(e) {
//
//         e.preventDefault()
//
//         console.log(e.target.login.value)
//         console.log(e.target.password.value)
//
//     }
//
//     function onLoginChange(e) {
//
//         setLogin(e.target.value)
//
//     }
//
//     function onPasswordChange(e) {
//
//         setPassword(e.target.value)
//
//     }
//
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type="text" name={'login'} value={login} onChange={onLoginChange}/>
//                 <input type="text" name={'password'} value={password} onChange={onPasswordChange}/>
//                 <button>Send data</button>
//             </form>
//         </div>
//     );
// };



    // -------------------------------------ДРУГИЙ ВАРІАНТ-----------------------------------------------------------------------------

    const [formState,setFormState] = useState({login: '', password: ''});

    function onSubmit(e) {

        e.preventDefault()

        console.log(e.target.login.value)
        console.log(e.target.password.value)

        console.log(formState)


        // send info to api
    }


    function onChange(e) {

       setFormState({...formState,[e.target.name]:e.target.value})

    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
                <button>Send data</button>
            </form>
        </div>
    );
};

export default FirstFormComponentExample;