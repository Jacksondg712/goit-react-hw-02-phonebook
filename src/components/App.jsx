import React, {Component} from "react";
import swal from'sweetalert2';
import { ContactFrom } from "./phonebook/ContactForm/ContactForm";
import Notification from "./Notification/Notification";
import { Filter } from "./phonebook/Filter/Filter";
import ConList from "./phonebook/ContactList/ConList";


class AppPhonebook extends Component{ 
    state={
        contacts:[],
        filter:""
    };

    formSubmitHandler = data => {
        

        if(this.state.contacts.find(contact =>contact.name===data.name)){
            this.setState({
            filter:""
            });
            return swal.fire(`${data.name} is already in contact`);
        }

        // if(contacts.find(contact => contact.number === data.number)){
        //     this.setState({
        //         filter:""
        //     });
        //     return swal.fire(`${data.number} is ready in one contact`)
        // }
        this.setState(prevState => ({
            contacts: [...prevState.contacts, data],
            filter:"",
            
        }));
        
    }

    handleFilterChange = event =>{
        const {name, value} =  event.currentTarget
        this.setState({
            [name]: value,
        });
        console.log(value)
    };


    delateContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id!==contactId),
        }))
    };

    SearchFilter = (contactName) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.name===contactName),
        }))
    };

    



    render() {

        const {contacts, filter} = this.state;
        
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
              );


        return(
            <>
                <section>
                <ContactFrom onSubmit={this.formSubmitHandler}/>
               
                </section>

                <section className="containerPhone">
                <Filter name={filter} onFilterChange={this.handleFilterChange}/> 
                    {contacts.length >0?(
                        <ConList   
                          contacts={filteredContacts}
                          onDelateContact={this.delateContact}
                        />
                        ) : (
                            <Notification Message={"There are  not contacts yet"}/>
                        )    
                    }
                </section>
            
            </>
        )
    }
}

export default AppPhonebook;