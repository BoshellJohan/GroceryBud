import { useState } from 'react';
import './App.css';
import {Header} from './Header.jsx';
import {ItemList} from './ItemList.jsx';
import {Message} from './Message.jsx';

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [showMessage, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState("");

  const handleShowMessage = (message) => {
    setMsg(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1400);
  };

  const handleInput = (value) => {
    setInput(value);
  };

  const handleAddClick = () => {
    if (input) {
      setItems([...items, input.toLowerCase()]);
      setInput("");
      handleShowMessage("Item has been added");
    } else {
      handleShowMessage("Write something in the input");
    }
  };

  const handleEditClick = () => {
    if (input) {
      const updatedItems = items.map((item) =>
        item === itemToEdit ? input : item
      );
      setItems(updatedItems);
      setInput("");
      setIsEditMode(false);
      handleShowMessage("Item has been edited");
    } else {
      handleShowMessage("Write something in the input");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    handleShowMessage("Item has been removed");
  };

  const handleEditItem = (item) => {
    setIsEditMode(true);
    setInput(item);
    setItemToEdit(item);
  };

  return (
    <div className="main-container">
      <Header
        input={input}
        onInputChange={handleInput}
        onAddClick={handleAddClick}
        onEditClick={handleEditClick}
        isEditMode={isEditMode}
      />
      <Message message={msg} show={showMessage} />
      <ItemList
        items={items}
        onEditItem={handleEditItem}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;