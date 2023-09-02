import React, {Component} from "react";
import { nanoid } from 'nanoid';
import { InputName } from "../InputName/inputName";
import { InputNumber } from "../InputNumber/InputNumber";
import Label from "../label/Label";
import "./ContactForm.css";

export class ContactFrom extends Component{
    state={
        id:"",
        name:"",
        number:""
    };

    setId = () =>{
        let nameInputId = nanoid(6);
        this.setState({
            id:nameInputId,
        })
        console.log(nameInputId);
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.setId();
 
            this.props.onSubmit(this.state);
            this.resetForm();

    };

    handleInputChange = event =>{
        const {name,value}=event.currentTarget
        this.setState({
            [name]:value
        });
        console.log(value);
    };

    resetForm = () =>{
        this.setState({
            name:"",
            number:"",
        });
    };

    render() {
        const {name, number} = this.state;
        const {handleSubmit, handleInputChange} = this;

        return (
            <div className="contContacForm">
            <form className="form" onSubmit={handleSubmit}>
                
                <Label labelTitle={"Name"} className="labelForm1"><InputName name={name} onNameChange={handleInputChange}/></Label>
                <Label labelTitle={"Number"} className="labelForm2"><InputNumber number={number} onNumberChange={handleInputChange}/></Label>
                <button className="buttonForm" type={"submit"}> add contact</button>
                {
                    
                }
            </form>
            </div>
        )
    };
}

export default ContactFrom;