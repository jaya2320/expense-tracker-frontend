import {Box, Button, Container, Grid, TextField} from "@mui/material";
import ExpenseTable from "./expenseTable";
import {useState} from "react";
import Graph from "./graph";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Form = () => {
    const [tableData, setTableData] = useState([])
    const [helperText,setHelperText]=useState()

    const tableHeadings = ["Date", "Title", "Description", "Amount","Edit","Delete"]

    const addNewExpense = (event) => {
        event.preventDefault();
        if(event.target.elements.description.value.length>200){
            setHelperText("Description should have max 200 characters")
        }else{

            const newTableData = [...tableData, {
                date: event.target.elements.date.value,
                title: event.target.elements.title.value,
                description: event.target.elements.description.value,
                amount: event.target.elements.amount.value
            }]

            setTableData(newTableData)
        }
        event.target.reset()
    }

    return (
        <div data-testid="form"  align={"center"} >
            <Container style={{backgroundColor:"rgb(216 217 236)",margin: '100px'}}>
                <form onSubmit={addNewExpense}>
                    <Grid container  direction="row" alignItems="center" columns={{xl:4}}  spacing={10}>
                        <Grid item key="0">

                            <TextField
                                type="date"
                                required
                                id="outlined-required"
                                name="date"
                            />
                        </Grid>
                        <Grid item key="1">

                            <TextField
                                required
                                id="outlined-required"
                                label="Title"
                                name="title"
                                placeholder="Write your title here"
                            />

                        </Grid>

                        <Grid item key="2">
                            <TextField
                                required
                                id="outlined-required"
                                label="Expense Amount"
                                name="amount"
                                placeholder="Expense Spent"
                                type="number"
                            />

                        </Grid>
                        <Grid item key="3" sx={{
                            width: 1000,
                            maxWidth: '100%',
                        }}
                        >

                            <TextField
                                required
                                id="outlined-required"
                                label="Description"
                                name="description"
                                fullWidth
                                maxLength="20"
                                helperText={helperText}
                                error={helperText}
                                placeholder="Write your description here"
                            />
                        </Grid>

                    </Grid>
                    <Button type="submit" style={{backgroundColor: "#7070c7", color: "white" ,margin:"40px"}}>Add
                        Expense</Button>
                </form>
            </Container>


            {/*//TODO:- add input field to add tag*/}
            {/*<p>Tag</p>*/}
            {/*<input placeholder="Write your name here" required/>*/}
            <Container >
                <Grid columns={{xl: 2}} style={{display:"flex"}} >
                    <ExpenseTable tableHeadings={tableHeadings} tableData={tableData}/>
                    <Graph tableData={tableData} />
                </Grid>
            </Container>


        </div>

    )
}

export default Form