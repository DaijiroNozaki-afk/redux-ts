import React, { useRef, MouseEvent } from 'react';
import { useAddDispatch } from '../store/store';
import { addPerson } from '../store/features/personSlice';

const Add = () => {
  const name = useRef<string>('');
  const age = useRef<number>(0);
  const dispatch = useAddDispatch();
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // age.currentが空の時、0を代入する
    if (!age.current) {
      age.current = 0;
    }
    dispatch(addPerson({ name: name.current, age: age.current }));
  };
  return (
    <form>
      <div>
        <label htmlFor="">Person Name:</label>
        <input onChange={(e) => (name.current = e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Person Age:</label>
        <input
          type="number"
          placeholder="年齢"
          pattern="^[0-9]+$"
          onChange={(e) => (age.current = parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default Add;
