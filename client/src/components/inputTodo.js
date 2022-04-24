import React from 'react';

const InputTodo = () => {
    const [description, setDescription] = React.useState('')




    const onSubmitForm = async (e) => {
        e.preventDefault()
        try{
            const body = { description }
            const response = await fetch('/todos',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = '/'
        } catch(error) {
            console.error('Exception ' + error);
            window.open('https://stackoverflow.com/search?q=[js]' + error.message, '_blank');
        }
    }

    return(
    <>
        <h1 className='text-center mt-5'>Pern Todo List</h1>
        <form className='d-flex mt-5'>
            <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}></input>
            <button className='btn btn-success' onClick={e => onSubmitForm(e)}>Add</button>
        </form>
    </>
    )
}

export default InputTodo