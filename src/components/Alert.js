import React, {Component} from 'react'; 

class Alert extends Component {
    render(){
        return(
        <div className={"alert alert-" + this.props.type}>
            <h4 className="text-center">{this.props.header}</h4>  
            {this.props.children}  
        </div>
        );
    }
}

export default Alert;