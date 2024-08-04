import React, { useEffect, useState } from "react";

import { Table } from "flowbite-react";

export default function OverallData({ sensors }) {
    const [sensorCounts, setSensorCounts] = useState({});
    const [uniqueRegions, setUniqueRegions] = useState(0);
    const [uniqueRivers, setUniqueRivers] = useState(0);
    const [totalSensors, setTotalSensors] = useState(0);
    useEffect(()=>{
        const counts = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
          };
          let totalSensors = 0
          const regionsSet = new Set();
          const riverSet = new Set();
          sensors.forEach(sensor => {
            totalSensors++
            counts[sensor.sensorData.Category]++;
            regionsSet.add(sensor.regionName)
            riverSet.add(sensor.riverName)
            
          });
          setSensorCounts(counts);
          setUniqueRegions(regionsSet.size)
          setUniqueRivers(riverSet.size)
          setTotalSensors(totalSensors)
    },[sensors])

    
  return (
    <>
      <div className="flex">
        <div
          className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar 
          scrollbar-track-slate-100 scrollbar-thumb-slate-300
           dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'
        >
          <h1>Overall Data</h1>
          <Table hoverable className="shadow-md ">
            <Table.Head>
              <Table.HeadCell>Number of sensors</Table.HeadCell>
              <Table.HeadCell> Number of rivers</Table.HeadCell>
              <Table.HeadCell>Number of regions</Table.HeadCell>
              <Table.HeadCell>'A' category sensors</Table.HeadCell>
              <Table.HeadCell>'B' category sensors</Table.HeadCell>
              <Table.HeadCell>'C' category sensors</Table.HeadCell>
              <Table.HeadCell>'D' category sensors</Table.HeadCell>
              <Table.HeadCell>'E' category sensors</Table.HeadCell>
              
            </Table.Head>

            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-600 dark:bg-gray-800">
                <Table.Cell>{totalSensors}</Table.Cell>
                <Table.Cell>{uniqueRivers}</Table.Cell>
                <Table.Cell>{uniqueRegions}</Table.Cell>
                <Table.Cell>{sensorCounts.A}</Table.Cell>
                <Table.Cell>{sensorCounts.B}</Table.Cell>
                <Table.Cell>{sensorCounts.C}</Table.Cell>
                <Table.Cell>{sensorCounts.D}</Table.Cell>
                <Table.Cell>{sensorCounts.E}</Table.Cell>
                
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

      </div>
    </>
  );
}
