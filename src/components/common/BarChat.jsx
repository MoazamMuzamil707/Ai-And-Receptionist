// BarChat.js
import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, Col } from 'reactstrap';
import getChartColorsArray from './ChartsDynamicColor';

// Dynamically import ReactApexChart only on the client side
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChat = ({ dataColors, name, series, length, categories }) => {
    const areachartActiveInactiveColors = getChartColorsArray(dataColors);

    const options = {
        series: series, // Use series from props
        chart: {
            type: 'bar',
            height: 341,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
            },
        },
        stroke: {
            show: true,
            width: 5,
            colors: ['transparent'],
        },
        xaxis: {
            categories: categories,
            title: {
                text: 'Active / Inactive Chats',
                offsetX: 0,
                offsetY: -10,
                style: {
                    color: '#78909C',
                    fontSize: '12px',
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value;
                },
            },
            tickAmount: 4,
            min: 0,
        },
        fill: {
            opacity: 1,
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            fontWeight: 500,
            itemMargin: {
                horizontal: 8,
                vertical: 0,
            },
            markers: {
                width: 10,
                height: 10,
            },
        },
        colors: areachartActiveInactiveColors,
    };

    return (
        <Col xxl={length} md={6}>
            <Card>
                <CardHeader className="align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">{name}</h4>
                </CardHeader>
                <div className="card-body pb-0">
                    <div className="apex-charts">
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="bar"
                            height={341}
                        />
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default BarChat;
