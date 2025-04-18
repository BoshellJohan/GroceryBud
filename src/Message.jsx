export const Message = ({ message, show }) => {
    return show ? <p className='msg-container'>{message}</p> : null;
  };