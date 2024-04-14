import {Box, Button, Container, Grid} from "@mui/material";
import ExpenseTable from "./expenseTable";
import {useState} from "react";

const Form = () => {
    const [tableData, setTableData] = useState([])

    const tableHeadings = ["date", "title", "description", "amount"]

    const addNewExpense = (event) => {
        event.preventDefault();

        const newTableData = [...tableData, {
            date: event.target.elements.date.value,
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            amount: event.target.elements.amount.value
        }]

        setTableData(newTableData)
        event.target.reset()
    }

    return (
        <div data-testid="form" style={{marginTop: '40px'}}>
            <Container sx={{flexGrow: 1}} sx={{border: '2px solid grey'}} align={"center"}>
                <form onSubmit={addNewExpense}>
                    <Grid container columns={{xl: 2}} spacing={10}>
                        <Grid item key="0">

                            <p>Date</p>
                            <input placeholder="pick a date" required type='date' name="date" />
                        </Grid>
                        <Grid item key="1">

                            <p>Title</p>
                            <input placeholder="Write your title here" required name="title" />

                        </Grid>
                        <Grid item key="2">
                            <p>Description</p>
                            <textarea id="description" name="description" maxLength="200"
                                      style={{height: "100px"}} name="description" />


                        </Grid>
                        <Grid item key="3">
                            <p>Amount</p>
                            <input placeholder="Expense Amount" required type="number" name="amount" />

                        </Grid>

                    </Grid>
                    <Button type="submit" style={{backgroundColor: "#7070c7", color: "white"}}>Add
                        Expense</Button>
                </form>
            </Container>


            {/*//TODO:- add input field to add tag*/}
            {/*<p>Tag</p>*/}
            {/*<input placeholder="Write your name here" required/>*/}
            <ExpenseTable tableHeadings={tableHeadings} tableData={tableData}/>
        </div>

    )
}

export default Form