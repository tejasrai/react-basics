import React, { Component } from 'react';
class Counter extends Component {
    // state={

    //     count:this.props.counter.value,
    //    // id:this.props.id
    //   //  tags:["tag1", "tag2", "tag3"]
    // };
    // handleIncrement=()=>{
    //   //  console.log('Increment Clicked',this);
    //   this.setState({count:this.state.count+1});
    // }
    render() { 
      //  let classes = this.getBadgeClasses();

        return (<div>
            {/* {this.props.children} */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)}
         className="btn btn-danger btn-sm m-2">
             Delete</button>

       {/* <ul>    {this.state.tags.map(tag=><li key={tag}> {tag} </li>)}    </ul> */}
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0?'Zero':value;
    }
}
 
export default Counter;