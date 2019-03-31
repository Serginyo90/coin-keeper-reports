import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from "d3";
import { withFauxDOM } from 'react-faux-dom';
import moment from 'moment';

class Graph extends React.Component {

  // scaleColor = d3.scaleSequential(d3.interpolateViridis);
  scaleHeight = d3.scaleLinear();
  scaleWidth = d3.scaleTime();

  componentDidMount() {
    console.log('____', {
      data: this.props.data,
      height: this.props.height,
      width: this.props.width,
    });
    this.updateChart();
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.updateChart();
    }
  }

  updateChart() {
    this.updateScales();

    const { data } = this.props;
    const faux = this.props.connectFauxDOM("g", "chart");

    const bars = d3.select(faux)
      .selectAll(".bar")
      .data(data);
    // bars.exit()
    //   .transition().duration(animDuration)
    //   .attr("y", height)
    //   .attr("height", 0)
    //   .style("fill-opacity", 0)
    //   .remove();

    bars.enter()
      // .append("rect")
      // .attr("class", "bar")
      // .attr("y", height)
      // .attr("x", width )
      // .attr("width", 0)
      // .attr("height", 0)
      // .attr("rx", 5 ).attr("ry", 5 )
      // .merge(bars)
      // .transition().duration(animDuration)
      // .attr("y", (d) => ( this.scaleHeight(d.count) ))
      // .attr("height", (d) => (height - this.scaleHeight(d.count)) )
      // .attr("x", (d, i) => ( this.scaleWidth(d.item) ) )
      // .attr("width", this.scaleWidth.bandwidth() )
      // .style("fill",  (d, i) => ( this.scaleColor(i) ));

    var valueline = d3.line()
      .x(function(d) { return this.scaleWidth(moment(d.Data, "MM/DD/YYYY").unix()); })
      .y(function(d) { return this.scaleHeight(d.Amount); });

    // Add the valueline path.
    bars.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);
    this.props.animateFauxDOM(800);
  }

  updateScales() {
    const { data, width, height } = this.props;
    // this.scaleColor.domain([0, data.length]);
    this.scaleWidth
      .domain(data.map((d) => (moment(d.Data, "MM/DD/YYYY").unix())))
      .range([0, width]);
    this.scaleHeight
      .domain(d3.extent(data, (d) => (d.Amount)))
      .range([height - 20, 0]);
  }

  render() {
    const { width, height } = this.props;
    return (
      <svg width={width} height={height} >
        { this.props.chart }
      </svg>
    );
  }
}

Graph.defaultProps = {
  animDuration: 600,
  data: [{
    item: 1,
    count: 1000,
  }, {
    item: 2,
    count: 900,
  },{
    item: 3,
    count: 500,
  },{
    item: 4,
    count: 200,
  }],
  width: 800,
  height: 400,
};

Graph.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  animDuration: PropTypes.number
};

export default withFauxDOM(Graph);