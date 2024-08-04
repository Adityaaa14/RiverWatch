import React from "react";

import { Table } from "flowbite-react";

export default function LiveData({ sensor }) {
  return (
    <>
      <div className="flex">
        <div
          className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar 
          scrollbar-track-slate-100 scrollbar-thumb-slate-300
           dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'
        >
          <h1>Factors affecting River Quality</h1>
          <Table hoverable className="shadow-md ">
            <Table.Head>
              <Table.HeadCell>Region</Table.HeadCell>
              <Table.HeadCell> River</Table.HeadCell>
              <Table.HeadCell>Dissolved Oxygen(mg/l)</Table.HeadCell>
              <Table.HeadCell> Biochemical Oxygen Demand(mg/l)</Table.HeadCell>
              <Table.HeadCell>
                Total Coliform Organism(MPN/100ml)
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-600 dark:bg-gray-800">
                <Table.Cell>{sensor.regionName}</Table.Cell>
                <Table.Cell>{sensor.riverName}</Table.Cell>
                <Table.Cell>{sensor.sensorData.DO}</Table.Cell>
                <Table.Cell>{sensor.sensorData.BOD}</Table.Cell>
                <Table.Cell>{sensor.sensorData.TCO}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div
          className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar 
          scrollbar-track-slate-100 scrollbar-thumb-slate-300
           dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'
        >
          <h1>River Quality Analysis</h1>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Analysis</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-600 dark:bg-gray-800">
                <Table.Cell>{sensor.sensorData.Category}</Table.Cell>
                <Table.Cell>
                  {sensor.sensorData.Category === "A" && (
                    <>
                      <p>
                        Water source that doesn't undergo the typical processes
                        of conventional treatment, such as coagulation,
                        flocculation, sedimentation, and filtration, but instead
                        is disinfected before being considered safe for
                        drinking.
                      </p>
                    </>
                  )}
                  {sensor.sensorData.Category === "B" && (
                    <>
                      <p>
                        Water source where individuals can engage in
                        recreational bathing activities in natural water bodies,
                        such as rivers, lakes, or beaches, but in a structured
                        or controlled environment.
                      </p>
                    </>
                  )}
                  {sensor.sensorData.Category === "C" && (
                    <>
                      <p>
                        Drinking water source after conventional treatment and
                        disinfection. Water source that has undergone a series
                        of processes to make it safe for human consumption.
                      </p>
                    </>
                  )}
                  {sensor.sensorData.Category === "D" && (
                    <>
                      <p>
                        Water source which can support propagation of wildlife
                        and fisheries but is not safe for drinking.
                      </p>
                    </>
                  )}
                  {sensor.sensorData.Category === "E" && (
                    <>
                      <p>
                        Water source which can be considered for Irrigation,
                        Industrial Cooling and Controlled waste disposal. It is
                        not safe for drinking and does not support life.
                      </p>
                    </>
                  )}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
}
