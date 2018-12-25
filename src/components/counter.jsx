import React, {Component} from "react";

class Counter extends Component {
    state = {
        counter: this.props.value,
        tags: ["tag1", "tag2", "tag3"]
    };
    style = {
        fontSize: 18,
        fontWeight: "bold"
    };

    // constructor() {
    //     super();
    //     console.log(this.state.counter);
    // }

    render() {
        console.log(this.props);

        return (
            <React.Fragment>
                <span style={this.style} className={this.getBadge()}>{this.formateCount()}</span>
                <button className="btn btn-secondary btn-sm"
                        onClick={()=>this.handlingIncrementEvent({id:this.props.id})}>Increment
                </button>
            </React.Fragment>
        );
    }

    formateCount() {
        const {counter} = this.state;
        if (counter === 0) {
            return "zero"
        } else {
            return counter;
        }

        // return counter === 0 ?  "Zero" : counter;
    }

    handlingIncrementEvent = (couterID) => {

        this.setState({counter: this.state.counter + 1});
        console.log(this.state.counter);
        console.log(couterID);
    }


    getBadge() {
        let classes = "badge badge-";
        return classes += this.state.counter === 0 ? "warning" : "primary"
    }
}

export default Counter;