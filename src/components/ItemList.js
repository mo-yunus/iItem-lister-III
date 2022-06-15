import React from 'react'
import Item from './Item'

const ItemList = ({ items, setItem, search }) => {

    let filteredList = items.filter((item) => {
        if (search === '') {
            return item.text;
        } else {
            return item.text.toLowerCase().includes(search);
        }
    })

    return (
        <div>
            <div className="container-2">
                <h2>Items</h2>
            </div>
            <div>
                <ul className="list-group">
                    {filteredList.map((item) => (
                        <Item
                            items={items}
                            setItem={setItem}
                            item={item}
                            key={item.id}
                            text={item.text}

                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ItemList
