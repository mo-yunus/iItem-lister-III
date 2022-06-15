import React from 'react'

export default function Item({ text, item, setItem, items }) {

    const handleDelete = () => {
        setItem(items.filter((el) => el.id !== item.id))
    }

    return (
        <div>
            <li className="list-group-item">
                {text}<button onClick={handleDelete} className='btn-2 delete' >X</button>
            </li>
        </div>
    )
}
