import PropTypes from "prop-types";
import "./Label.css";


const Label = ({ labelTitle, children}) => {
    return(
        
        <label className="ContainerLabel">
            <span className="titleName">{labelTitle}</span>
            {children}
        </label>
        
        
    )
};

Label.propTypes ={
    labelTitle:PropTypes.string,
    children:PropTypes.node
};

export default Label;
