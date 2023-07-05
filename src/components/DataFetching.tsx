import React, { useContext, useEffect } from 'react';
import { DronesContext } from '../context/dronesContext';
import { client } from '../lib';
import { IDroneProperties } from '../models/app';
import { dronesQuery } from '../queries';

export const DataFetching = () => {
  const { drones, addDrones } = useContext(DronesContext);
  useEffect(() => {
    async function loadDrones() {
      const newDrones: IDroneProperties[] = await client.fetch(dronesQuery);
      addDrones(newDrones);
    }
    if (drones.length === 0) {
      loadDrones();
    }
  }, [addDrones, drones.length]);

  return <></>;
};
