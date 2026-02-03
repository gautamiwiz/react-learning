import { useState, useEffect } from 'react';

export default function Input1() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('Input 2 from localStorage');

  const input2Function = (e) => {
    setValue2(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  useEffect(() => {
    const data = localStorage.getItem('name');
    if (data && data.trim() !== '') {
      setValue2(data);
    }
  }, []);

  //runThisFunctionOnLoad();

  return (
    <>
      <input type="text" placeholder="Input 1 placeholder" value={value1} onChange={(e) => setValue1(e.target.value)} />
      <br />
      <input type="text" placeholder="Input 2 placeholder" value={value2} onChange={input2Function} />
    </>
  );
}
