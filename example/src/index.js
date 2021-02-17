import Graph from "@future-demand/react-graph-vis";
// import Graph from "../../lib";

// import Graph from 'react-graph-vis'

import React from "react";
import { render } from "react-dom";

const graph = {
  nodes: [
    { id: 1, label: "Node 1", color: "#e04141" },
    { id: 2, label: "Node 2", color: "#e09c41" },
    { id: 3, label: "Node 3", color: "#e0df41" },
    { id: 4, label: "Node 4", color: "#7be041" },
    { id: 5, label: "Node 5", color: "#41e0c9" }
  ]
};

const options = {
  autoResize: true,
      height: '100%',
      width: '100%',
      nodes: {
        label: '<b>3306</b>\n3307\n3308',
        margin: 10,
        fixed: false,
        // size: 100,
        // selectedWidth: 82,
        widthConstraint: {
          minimum: 72,
          maximum: 72
        },
        borderWidth: 1,
        shape: 'circle',
        size: 45,
        color: {
          background: '#FFF',
          border: '#FF7474',
          highlight: {
            background: '#FF7474',
            border: '#FF7474'
          }
        },
        font: {
          color: '#222',
          // size: 18,
          // face: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
          // background: 'red',
          // strokeWidth: 1,
          // strokeColor: 'blue',
          multi: true
        }
      },
      physics: {
        stabilization: {
          enabled: false
        },
        maxVelocity: 10,
        minVelocity: 0,
        solver: 'repulsion',
        repulsion: {
          nodeDistance: 52,
          centralGravity: 0.065,
          springLength: 100,
          springConstant: 0.08,
          damping: 0.05
        }
      },
      interaction: {
        multiselect: false,
        zoomView: false,
        dragNodes: false,
        dragView: false
      }
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};

render(
  <div>
    <h1>React graph vis</h1>
    <p>
      <a href="https://github.com/crubier/react-graph-vis">Github</a> -{" "}
      <a href="https://www.npmjs.com/package/react-graph-vis">NPM</a>
    </p>
    <p>
      <a href="https://github.com/crubier/react-graph-vis/tree/master/example">Source of this page</a>
    </p>
    <p>A React component to display beautiful network graphs using vis.js</p>
    <p>
      Make sure to visit <a href="http://visjs.org">visjs.org</a> for more info.
    </p>
    <p>This package allows to render network graphs using vis.js.</p>
    <p>Rendered graphs are scrollable, zoomable, retina ready, dynamic, and switch layout on double click.</p>

    <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
  </div>,
  document.getElementById("root")
);
