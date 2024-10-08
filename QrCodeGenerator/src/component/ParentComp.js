import React, { Component } from 'react';
// import PureComp from './PureComp';
import RegComp from './RegComp';
class Parentcomp extends Component {
    constructor(props) {
        super(props);
        this.state={
            name1:'suhail'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name1:'suhail'
            })
        },3000)
    }
    render() {
        console.log('parent component');
        return (
            <div>
                i'm the parent component
                <RegComp name={this.state.name1}></RegComp>
                {/* <PureComp name={this.state.name1}></PureComp> */}
            </div>
        );
    }
}

export default Parentcomp;