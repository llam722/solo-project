import React from 'react';
import { useState } from 'react';
import PartDesign from './shared/PartDesign.jsx';
import Button from './shared/Button.jsx';

function PartsForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '') {

    }
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <PartDesign>
      <form>
        <h2>Part Name:</h2>
        {/* @todo - rating select component? */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Add a part..."
            value={text}
          ></input>
          {/* css style for button, default primary */}
          <Button type="submit" isDisabled={btnDisabled}>
            {' '}
            Submit{' '}
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </PartDesign>
  );
}
export default PartsForm;
