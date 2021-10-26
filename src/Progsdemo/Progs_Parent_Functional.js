import React from 'react'
import Props_Child_Functional from './Progs_Child_Functional'
function Props_Parent_Functional(Progs)
{
    return <div>
        <h1>Props Parent Functional Component</h1>
        <h1>phone:{Progs.phone} </h1>
        <h1>mail:{Progs.mail} </h1>
        <h1>place:{Progs.place} </h1>
        <Props_Child_Functional id = "1234" name="KLU" department="CSE"/>
    </div>
}
export default Props_Parent_Functional