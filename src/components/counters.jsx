import React , {Component} from "react";
import Counter from "./counter";

class  Counters extends Component{

    state ={
        counters: [
            {id:1 , value :5},
            {id:2 , value :15},
            {id:3 , value :25},
            {id:4 , value :35},
        ]
    }
    constructor(){
        super();
    }

    render(){

        return(
            <React.Fragment>
                {this.state.counters.map(counter => <Counter key = {counter.id} id ={counter.id} value = {counter.value}/>)}
            </React.Fragment>
        );
    }
}

export default Counters;