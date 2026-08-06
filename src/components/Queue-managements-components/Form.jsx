import React from 'react';
import {FcAssistant} from 'react-icons/fc';
import {useState} from 'react';

function Form({onAdd}) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //validations
    if (!name.trim() || !service.trim()) {
      console.log('values are empty');
      return;
    }
    onAdd({name, service});
    setName('');
    setService('');
  };

  return (
    <form className="queue-form" onSubmit={handleSubmit}>
      <h2 style={{margin: '0', marginBottom: '1rem'}}>Add to queue</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <select value="service" onChange={(e) => setService(e.target.value)}>
          <option value="">Select service</option>
          <option value="Consultation">Consultation</option>
          <option value="Payment">Payment</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <button type="submit">
        <FcAssistant /> Add Customer
      </button>
    </form>
  );
}

export default Form;
