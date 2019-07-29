import React from 'react';

const Table = ({ type, history }) => {
  return (
    <table className="table table-bordered">
      <caption> {type} device stocks for France</caption>
      <tbody>
        <tr className="thead-dark">
          <th scope="col">Month</th>
          <th scope="col">Stock (in unit)</th>
        </tr>
        {history.map(data => {
          return (
            <tr key={data.month}>
              <td>{data.month}</td>
              <td>{data.stock}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
