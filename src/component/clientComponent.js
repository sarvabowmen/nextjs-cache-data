'use client'
import React, { useContext } from 'react';
import { TimeContext } from '../app/provider'; // Assuming your context is in context.js

const ClientComponent = () => {
  const { timeData, setTimeData } = useContext(TimeContext);

  return (
    <div>
      <h1>Client Component</h1>
      <p>Shared data: {JSON.stringify(timeData.datetime)}</p>
    </div>
  );
};

export default ClientComponent;