import React from "react";
import * as d3 from "d3";

const App = () => {
  const ref = React.createRef();
  React.useEffect(() => {
    console.log("My ref", ref);
    let svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%");
    let group = svg.append("g");
    group
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 100)
      .attr("y", 400)
      .style("width", 120)
      .style("height", 120)
      .style("fill", "#e07110");

    group
      .append("text")
      .attr("x", 120)
      .attr("y", 535)
      .attr("font-size", 14)
      .text("k8s source");

    //
    group
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 1300)
      .attr("y", 200)
      .style("width", 120)
      .style("height", 120)
      .style("fill", "#50942e");

    group
      .append("text")
      .attr("x", 1320)
      .attr("y", 335)
      .attr("font-size", 14)
      .text("event store");

    const eventFlowGroup = svg.append("g");
    eventFlowGroup
      .append("rect")
      .attr("rx", 10) //To round the corners
      .attr("ry", 10) //To round the corners
      .attr("width", "50%")
      .attr("height", "80%")
      .attr("x", 350)
      .attr("y", 100)
      .style("stroke", "#dfdfdf")
      .style("stroke-width", "1px")
      .style("fill", "#e5f5fd");

    // Main container
    eventFlowGroup
      .append("text")
      .attr("x", 360)
      .attr("y", 120)
      .attr("font-size", 14)
      .text("Event Flows");

    eventFlowGroup
      .append("rect")
      .attr("rx", 10) //To round the corners
      .attr("ry", 10) //To round the corners
      .attr("width", "10%")
      .attr("height", "70%")
      .attr("x", 370)
      .attr("y", 170)
      .style("stroke", "#dfdfdf")
      .style("stroke-width", "1px")
      .style("fill", "#eaf3e7");

    // Left Side of => Event Workers
    eventFlowGroup
      .append("text")
      .attr("x", 375)
      .attr("y", 190)
      .attr("font-size", 14)
      .text("Event Workers");

    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 375)
      .attr("y", 195)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e07110");
    eventFlowGroup
      .append("text")
      .attr("x", 415)
      .attr("y", 330)
      .attr("font-size", 14)
      .text("worker1");

    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 375)
      .attr("y", 400)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e07110");
    eventFlowGroup
      .append("text")
      .attr("x", 415)
      .attr("y", 535)
      .attr("font-size", 14)
      .text("worker2");

    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 375)
      .attr("y", 600)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e07110");
    eventFlowGroup
      .append("text")
      .attr("x", 415)
      .attr("y", 735)
      .attr("font-size", 14)
      .text("worker3");

    // Mid Section
    eventFlowGroup
      .append("text")
      .attr("x", 730)
      .attr("y", 500)
      .attr("font-size", 14)
      .text("event queue");
    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 700)
      .attr("y", 360)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e03675");

    eventFlowGroup
      .append("rect")
      .attr("rx", 10) //To round the corners
      .attr("ry", 10) //To round the corners
      .attr("width", "10%")
      .attr("height", "70%")
      .attr("x", 1010)
      .attr("y", 170)
      .style("stroke", "#dfdfdf")
      .style("stroke-width", "1px")
      .style("fill", "#eaf3e7");

    // Right Side of => Processing
    eventFlowGroup
      .append("text")
      .attr("x", 1015)
      .attr("y", 190)
      .attr("font-size", 14)
      .text("Processing");

    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 1015)
      .attr("y", 195)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e07110");
    eventFlowGroup
      .append("text")
      .attr("x", 1080)
      .attr("y", 330)
      .attr("font-size", 14)
      .text("proc1");

    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 1015)
      .attr("y", 400)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e07110");
    eventFlowGroup
      .append("text")
      .attr("x", 1080)
      .attr("y", 535)
      .attr("font-size", 14)
      .text("proc2");

    eventFlowGroup
      .append("rect")
      .attr("rx", "30") //To round the corners
      .attr("ry", "30") //To round the corners
      .attr("x", 1015)
      .attr("y", 600)
      .style("width", "9%")
      .style("height", 120)
      .style("fill", "#e07110");
    eventFlowGroup
      .append("text")
      .attr("x", 1080)
      .attr("y", 735)
      .attr("font-size", 14)
      .text("proc3");
  });
  return <div className="row h-100" ref={ref}></div>;
};
export default App;
