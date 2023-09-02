import PropTypes from "prop-types"
import ContactItem from "./ContactItem";
import "./Conlist.css";



const ConList = ({onDelateContact, contacts}) => {
return(
    <div>
        <ul>
            {contacts.map(({id, name, number}) => (
                <ContactItem  key={id}>
                    {name}: {number}
                <button className="buttonList" type="button" onClick={() =>{
                    onDelateContact(id);
                }}>
                delete
                </button>
                </ContactItem>
                    ))
            }
        </ul>
    </div>
   
)}
    ConList.propTypes={
    list:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
        })
    ),
    onDelateContact:PropTypes.func.isRequired

}

export default ConList;

