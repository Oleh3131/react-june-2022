import React, {useRef} from 'react';

const SecondFormComponentExample = () => {


    // ----------------ВІДОБРАЖЕННЯ НЕКОНТРОЛЬОВАНОЇ КОМПОНЕНТИ(РЕАКТ ПРОСТО РОБИТЬ НА НЕЇ РЕФЕРЕНСИ)---------------

    const login = useRef();

    const password = useRef();


    function onSubmit(e) {

        e.preventDefault()

        console.log(login.current.value)
        console.log(password.current.value)

        // create obj and send to API
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} ref={login}/>
                <input type="text" name={'password'} ref={password}/>
                <button>Send data</button>
            </form>
        </div>
    );
};

export default SecondFormComponentExample;