import React from 'react';
// This form get value by coustom hook
const HookForm = () => {
// we can write any name in the ([])
    const [name, nameonChange]=Hooks('')
    const [email, emailonChange]=Hooks('')

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submit', name, email)
}




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameonChange} defaultValue={name} type="text" placeholder='text'/><br/>
                <input onChange={emailonChange} defaultValue={email} type="email" placeholder='email' /><br/>
                <input type="submit" value='submit'/>
            </form>
        </div>
    );
};

export default HookForm;