import React from 'react'

const MenuBar = ({ handleSearch, search }) => {

    const submmitted = (e) => {
        e.preventDefault();
    }

    return (
        <div className='row'>
            <div className="col-1">
                <h1>Item Lister</h1>
            </div>
            <form className='col-2' onSubmit={submmitted}>
                <input onKeyUp={handleSearch} id='item' type="text" placeholder="Search items..." />
            </form>
        </div>
    )
}

export default MenuBar
