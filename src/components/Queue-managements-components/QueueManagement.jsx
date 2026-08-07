import Form from './Form';
import List from './List';

import {useState} from 'react';

function QueueManagement() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    console.log('add to queue passed');
    setQueue([
      ...queue,
      {
        ...customer,
        id: Date.now(),
        status: 'waiting',
      },
    ]);
    console.log(queue);
  };

  const updateStatus = (id, newStatus) => {
    //add to queue
    setQueue(
      queue.map((customer) =>
        customer.id === id ? {...customer, status: newStatus} : customer,
      ),
    );
  };

  const removeFromQueue = (id) => {
    //remove data from queue
    setQueue(queue.filter((customer) => customer.id !== id));
  };
  return (
    <div className="queueManagementApp">
      <Form onAdd={addToQueue} />
      <List
        queue={queue}
        onUpdateStatus={updateStatus}
        onRemoveStatus={removeFromQueue}
      />
    </div>
  );
}

export default QueueManagement;
