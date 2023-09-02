import propTypes from "prop-types"
import "./Conlist.css"

const ContactItem = ({
    children
}) => {
    return(
        <li className="conList">
        {children}
        </li>
        )
}

ContactItem.propTypes={
    children:propTypes.node
    
}

export default ContactItem;