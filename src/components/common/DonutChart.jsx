import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Use dynamic import from Next.js
import { Card, CardHeader, Col } from 'reactstrap';
import getChartColorsArray from './ChartsDynamicColor';

// Dynamically import ReactApexChart and disable SSR
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChat = ({ dataColors, name, seriesData, categories }) => {
    const [isClient, setIsClient] = useState(false);

    // Check if it's rendering on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    const areachartColors = getChartColorsArray(dataColors);

    const options = {
        chart: {
            type: 'donut',
            height: 341,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                }
            },
        },
        labels: categories, // Add the categories for the legend
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            fontWeight: 500,
            offsetX: 0,
            offsetY: -14,
            itemMargin: {
                horizontal: 8,
                vertical: 0,
            },
            markers: {
                width: 12,
                height: 12,
                radius: 12,
            },
            labels: {
                colors: '#333',
                useSeriesColors: false,
            },
        },
        colors: areachartColors, // Use dynamically generated colors
        fill: {
            opacity: 1,
        },
        dataLabels: {
            enabled: true,
            formatter: function (value, { seriesIndex, dataPointIndex, w }) {
                // Return the raw value instead of percentage
                return w.config.series[seriesIndex];
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value;
                },
            },
        },
    };

    // Render the chart only if we are on the client side
    return (
        <React.Fragment>
            <Col xxl={6} md={6}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">{name}</h4>
                    </CardHeader>
                    <div className="card-body pb-0">
                        <div id="donut-chart" className="apex-charts">
                            {isClient && (
                                <ReactApexChart
                                    options={options}
                                    series={seriesData} // Pass in the series data directly
                                    type="donut"
                                    height={341} // Fixed height for the donut chart
                                    className="apex-charts"
                                />
                            )}
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default DonutChat;
