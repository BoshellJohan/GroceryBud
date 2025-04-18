export const Header = ({ input, onInputChange, onAddClick, onEditClick, isEditMode }) => {
    return (
      <div className='header-container'>
        <p className='title'>Grocery Bud</p>
        <input
          type="text"
          placeholder='e.g. egg'
          onChange={(e) => onInputChange(e.target.value)}
          className='input-grocery'
          value={input}
        />
        {isEditMode ? (
          <button className='btn-edit' onClick={onEditClick}>Edit</button>
        ) : (
          <button className='btn-submit' onClick={onAddClick}>Submit</button>
        )}
      </div>
    );
  };