import React from 'react';
import { PlaceModel } from '../models/PlaceModel';
import { Table } from 'react-bootstrap';

export const PlacesComponent = (attributes: { place: PlaceModel }) => {
  return (
    <>
      <h1>{attributes.place.name}</h1>
      <p>{attributes.place.address}</p>
      <Table responsive>
        <tbody>
          {attributes.place.openingHours.map((openingHour, key) => (
            <tr key={key}>
              <td>{openingHour.days}</td>
              <td>
                {openingHour.value.map((value, keykey) => (
                  <p key={keykey}>{value}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
