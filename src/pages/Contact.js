import React from "react";
import Form from "../components/Form";

function ListItem(props) {
  return <li className="{props.key}">{props.value}</li>;
};

class Contact extends React.Component {
    constructor(props){
        super(props);
        const number=[1,2,3,4,5,6,7,8,9,10];

        this.listItem=number.map((number =>
            <ListItem key={number.toString()} value={number} />
        ));
    }
    render() {
        return(
            <div className="Contact">
                Votre message : 
                <Form/>
                <div>
                    <ul>{this.listItem}</ul>
                </div>
            </div>
        );
    }
}

export default Contact;