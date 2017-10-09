import React from 'react'
import * as d3 from 'd3-3'

class ForceGraph extends React.Component {
  constructor(props) {
    super(props)
    this.createForceGraph = this
      .createForceGraph
      .bind(this)
  }
  componentDidMount() {
    this.createForceGraph()
  }
  componentDidUpdate() {
    this.createForceGraph()
  }
  createForceGraph() {
    const body = this.body
    var width = 1000;
    var height = 500;

    var links = [
      {
        source: 'bar',
        target: 'stack'
      }, {
        source: 'stack',
        target: 'chart'
      }, {
        source: 'chart',
        target: 'bar'
      }
    ]
    // create empty nodes array
    var nodes = {};

    // compute nodes from links data
    links.forEach(function (link) {
      link.source = nodes[link.source] || (nodes[link.source] = {
        name: link.source
      });
      link.target = nodes[link.target] || (nodes[link.target] = {
        name: link.target
      });
    });

    // add a SVG to the body for our viz
    var svg = d3
      .select(body)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // use the force
    var force = d3
      .layout
      .force() //build the layout
      .size([width, height]) //specified earlier
      .nodes(d3.values(nodes)) //add nodes
      .links(links) //add links
      .on("tick", tick) //what to do
      .linkDistance(300) //set for proper svg size
      .start(); //kick the party off!

    // add the links
    var link = svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link');

    // add the nodes
    var node = svg
      .selectAll('.node')
      .data(force.nodes()) //add
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', width * 0.03); //radius of circle

    function tick(e) {

      node
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        })
        .call(force.drag);

      link.attr('x1', function (d) {
        return d.source.x;
      })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });

    }
  }
  render() {
    return <svg ref={body => this.body = body}  width={1000} height={500}></svg>
  }
}

export default ForceGraph;
