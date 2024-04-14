import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {PieChart} from '@mui/x-charts/PieChart';
import {BarChart, LineChart} from "@mui/x-charts";
import {Container} from "@mui/material";

const Graph = ({tableData}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const graphData = {}
    tableData.forEach(item => {
        const {date, amount} = item;
        if (graphData[date]) {
            graphData[date] += parseInt(amount)
        } else {
            graphData[date] = parseInt(amount)
        }
    })

    const piedata = []
    Object.keys(graphData).map(item => {
        piedata.push({
            id: item, value: graphData[item], label: item
        })
    })


    return (
        <Container sx={{typography: 'body1'}} position={"relative"}>
            <PieChart
                series={[
                    {
                        data: piedata,
                        innerRadius: 3,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 180,
                        cx: 150,
                        cy: 150,
                    },
                ]}
                width={500}
                height={300}

            />
        </Container>
    );
}
export default Graph;
