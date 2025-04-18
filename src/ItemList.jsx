export const ItemList = ({ items, onEditItem, onRemoveItem }) => {
    return (
      <div className='list-container'>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className='item' key={index}>
              <p className="item-name">{item}</p>
              <div className='button-container'>
                <button onClick={() => onEditItem(item)} className="edit-btn-item">Edit</button>
                <button onClick={() => onRemoveItem(index)} className="remove-btn-item">Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p className='empty-msg'>Add a new Item</p>
        )}
      </div>
    );
  };