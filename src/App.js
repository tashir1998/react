import React from "react";
import Expenses from "./component/Expenses/Expenses";
 const App=()=>{
 let expense = [
     {
         id:"e1",
         title:"school fee",
         date:new Date(2021,4,22),
         amount:230
     },
     {
        id:"e2",
        title:"class fee",
        date:new Date(2021,5,3),
        amount:330
    },
    {
        id:"e3",
        title:"teison fee",
        date:new Date(2021,11,4),
        amount:330
    },
    {
        id:"e3",
        title:"Bus fee",
        date:new Date(2021,11,4),
        amount:30
    },
    {
        id:"e5",
        title:"food fee",
        date:new Date(2021,3,17),
        amount:400
    },
    {
        id:'e6',
        title:"dis fee",
        date:new Date(2018,9,24),
        amount:30
    }
 ];

    return(
        <div>
            <h2>Let'S go Start:-</h2>
            <Expenses item={expense} />
        </div>
    );
}
export default App;