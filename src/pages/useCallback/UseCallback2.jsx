import { useCallback, useEffect, useState } from 'react';

export default function UseCallback2() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  //use callback in just like usememo, only diff is insread of value it momoizes the function
  //if the name doesnt change, the function will not get recreated and in use effect it will
  // not get called but if the name changes then the function will get recreated and in use effect it will get called

  const printName = useCallback(() => {
    console.log('name is : ', name);
  }, [name]);

  useEffect(() => {
    console.log('in effect');
    printName();
  }, [printName]);

  return (
    <>
      <label>
        Name : <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age : <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      </label>
    </>
  );
}
