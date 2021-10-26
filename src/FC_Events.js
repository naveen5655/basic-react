import React from 'react'
function FC_Events()
{
    function buttondemo()
    {
        alert("Button Clicked...!")
    }
    function inputtextdemo()
    {
        alert("On Change Event...!")
    }
    return <div>
    <h1><u> Event Handling in Functional Component</u></h1>
    <button onClick={buttondemo}>click Here  </button><br/><br/>
    <input type="text" name="username" placeholder="EnterUserName" onChange={inputtextdemo}></input>
    </div>
}
export default FC_Events