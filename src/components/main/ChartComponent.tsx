import * as React from 'react';
import Chart from "chart.js";

export interface IChartProps {
}

export interface IChartState {
    chartRef: any;
    myChart: any;
}


export default class ChartComponent extends React.Component<IChartProps, IChartState> {
    constructor(props: IChartProps) {
        super(props);

        this.state = {
            chartRef: React.createRef(),
            myChart: undefined
        }
    }

    componentDidMount() {
        console.log("My component mounted!!");
    }

    componentDidUpdate() {
        console.log("My component updated!!");
    }

    componentWillUnmount() {
        console.log("My component unmounted!!");
    }

    public render() {
        return (
            <React.Fragment>
                <canvas
                    id="myChart"
                    ref={this.state.chartRef}
                />
            </React.Fragment>
        );
    }
    
}
