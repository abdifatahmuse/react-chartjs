import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "Hargeisa",
                    "Gabilay",
                    "Boorama",
                    "Barbara",
                    "Sheekh",
                    "Abaarso",
                ],
                datasets: [
                    {
                        label: "Monthly",
                        data: [1523, 845, 321, 122, 325, 351],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.6)",
                            "rgba(54, 162, 235, 0.6)",
                            "rgba(255, 206, 86, 0.6)",
                        ],
                    },
                ],
            },
            chartLineData: {
                labels: [
                    "Hargeisa",
                    "Gabilay",
                    "Boorama",
                    "Barbara",
                    "Sheekh",
                    "Abaarso",
                ],
                datasets: [
                    {
                        label: "Monthly",

                        data: [1523, 845, 321, 122, 325, 351],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.6)",
                            "rgba(54, 162, 235, 0.6)",
                            "rgba(255, 206, 86, 0.6)",
                            "rgba(255, 99, 132, 0.6)",
                            "rgba(54, 162, 235, 0.6)",
                            "rgba(255, 206, 86, 0.6)",
                        ],
                        fill: true,
                        borderWidth: 5,
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div className="App">
                <Bar
                    data={this.state.chartLineData}
                    options={{
                        title: {
                            display: true,
                            text: "Monthly Reports",
                            fontSize: 25,
                        },

                        legend: {
                            display: true,
                            position: "bottom",
                        },
                    }}
                />

                <br />
                <br />
                <Line
                    data={this.state.chartLineData}
                    options={{
                        title: {
                            display: true,
                            text: "Monthly Reports",
                            fontSize: 25,
                        },

                        legend: {
                            display: true,
                            position: "bottom",
                        },
                    }}
                />

                <br />
                <br />
                <Pie data={this.state.chartData} />
            </div>
        );
    }
}

export default Chart;
