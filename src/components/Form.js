

const Form = ({ setInputItem, inputItem, items, setItem }) => {

    const handleInput = (e) => {
        setInputItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem([...items, { text: inputItem, id: Math.random() }]);
        setInputItem('');
    }

    return (
        <div>
            <div className="col-item-1">
                <h2>Add Item</h2>
            </div>
            <form className="col-item-2" >
                <input value={inputItem} type="text" className='btn-1' onChange={handleInput} />
                <button onClick={handleSubmit} className='btn-2' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
