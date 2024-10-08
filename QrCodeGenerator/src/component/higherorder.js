import React from "react";
const updatecom=Originalcom=>{
    class newcomp extends React.Component{
        render(){
            return <Originalcom name='The user' />;
        }
    }
    return newcomp;
}
export default updatecom;