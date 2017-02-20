import React from 'react';
import moment from 'moment';
import './style.less';

const data = [];

function generateData(data) {
  let amount = 1000;
  let d = moment();

  for (let i = 0; i < 50; i++) {
    data[i] = [ d.subtract(1, 'days').format('D/M/Y'), 0, 0 ];
  }

  console.log(data);
}

const Panel = () => {
  generateData(data);
  const table = data.map(item => (
      <tr>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
      </tr>
    ));

  return (
    <div className="appPanel">
      <div className="mainContent">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </table>
      </div>
      <div className="sidebar">
        This is a sidebar
      </div>
    </div>
  )
};

export default Panel;
