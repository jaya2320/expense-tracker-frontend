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
        <Box sx={{typography: 'body1'}} position={"relative"} style={{paddingLeft:"200px",marginTop:"-60px"}}>
            {piedata.length>0?
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
                    width={400}
                    height={300}

                />:
                <Box align='center' width={400}
                     height={300}>
                    No Data to show
                </Box>
            }

        </Box>
    );
}
export default Graph;
