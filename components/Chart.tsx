import React, { Component } from "react";
import dynamic from "next/dynamic";
const NoSSRChart = dynamic(() => import("react-apexcharts"), { ssr: false });

class IndexChart extends Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "area",
          height: 100,
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
          stroke: {
            curve: "straight",
          },
        },
        colors: ["#0021f5"],
        fill: {
          opacity: 0.3,
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        grid: {
          padding: {
            top: "16",
            bottom: "",
          },
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
          // custom: function ({}) {
          //   return (
          //     '<div class="arrow_box">' +
          //     "<span>" +
          //     "here" +
          //     ": " +
          //     "there" +
          //     "</span>" +
          //     "</div>"
          //   );
          // },
        },
        yaxis: {
          min: 0,
        },
        // yaxis: {
        //   labels: {
        //     formatter: function (value: number) {
        //       return "$" + value;
        //     },
        //   },
        // },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
      },
      series: [
        {
          name: "Price",
          data: [
            30, 10, 45, 50, 40, 32, 96, 20, 30, 10, 45, 50, 40, 32, 96, 20,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div id="chart" style={{ width: "100%", minHeight: 100 }}>
        <NoSSRChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="100%"
        />
      </div>
    );
  }
}

export default IndexChart;
