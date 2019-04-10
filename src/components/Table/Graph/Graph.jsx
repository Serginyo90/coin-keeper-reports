import React from 'react';
import PropTypes from 'prop-types';

import {
  LineChart,
  CartesianGrid,
  Line,
  Legend,
  Tooltip,
  YAxis,
  XAxis
} from 'recharts';

class Graph extends React.Component {
  render() {
    const { width, height, data } = this.props;
    console.log('__data__', { data });
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <LineChart width={width} height={height} data={data}
                   margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="sum" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sum" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

Graph.defaultProps = {
  width: 1200,
  height: 500,
};

Graph.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  animDuration: PropTypes.number
};

export default Graph;