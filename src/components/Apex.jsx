import React from "react";
import ReactApex from "react-apexcharts";

class Apex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Price",
          data: props.dates,
        },
      ],
      options: {
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Price Movement",
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val.toFixed(2);
            },
          },
          title: {
            text: "Price",
          },
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val.toFixed(2);
            },
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dates !== this.props.dates) {
      this.setState({
        series: [
          {
            name: "Price",
            data: this.props.dates,
          },
        ],
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApex
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={600}
            width={1000}
          />
        </div>
      </div>
    );
  }
}

export default Apex;
