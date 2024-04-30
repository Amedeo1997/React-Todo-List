import React, { useState, useEffect } from 'react';
import './ShoppingList.css';
import editIcon from '../pictures/edit-2.svg';
import deleteIcon from '../pictures/erase.svg';

function ShoppingList() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('shoppingItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [input, setInput] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        localStorage.setItem('shoppingItems', JSON.stringify(items));
    }, [items]);

    const addItemOrEditItem = () => {
        if (input && quantity > 0) {
            if (editIndex >= 0) {
                // Editing existing item
                const newItems = items.map((item, index) => {
                    if (index === editIndex) {
                        return { ...item, name: input, quantity };
                    }
                    return item;
                });
                setItems(newItems);
                setEditIndex(-1);
            } else {
                // Adding new item
                const newItem = { name: input, quantity, purchased: false };
                setItems([...items, newItem]);
            }
            setInput('');
            setQuantity(1);
        }
    };

    const toggleEdit = (index) => {
        if (editIndex === index) {
            setEditIndex(-1);
            setInput('');
            setQuantity(1);
        } else {
            setInput(items[index].name);
            setQuantity(items[index].quantity);
            setEditIndex(index);
        }
    };

    const togglePurchased = (index) => {
        const newItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, purchased: !item.purchased };
            }
            return item;
        });
        setItems(newItems);
    };

    const deleteItem = index => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div className="shopping-list-container">
            <h1 className="shopping-title">Shopping List</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="item-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={editIndex >= 0 ? "Edit item name" : "Add a new article"}
                />
                <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    placeholder={editIndex >= 0 ? "Edit quantity" : "Quantity"}
                />
                <button onClick={addItemOrEditItem} className="add-item-button">
                    {editIndex >= 0 ? "Save" : "Add"}
                </button>
            </div>
            <ul className="todo-list">
                {items.map((item, index) => (
                    <li key={index} className={`todo-item ${editIndex === index ? 'editing' : ''}`}>
                        <input
                            type="checkbox"
                            className="todo-checkbox"
                            checked={item.purchased}
                            onChange={() => togglePurchased(index)}
                        />
                        <span style={{ textDecoration: item.purchased ? 'line-through' : 'none' }}>
                            {item.name} : {item.quantity}
                        </span>
                        <div className="icon-container">
                            <button className="icon-button" onClick={() => toggleEdit(index)}>
                                <img src={editIcon} alt="Edit" />
                            </button>
                            {editIndex !== index && (
                                <button className="icon-button" onClick={() => deleteItem(index)}>
                                    <img src={deleteIcon} alt="Delete" />
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
