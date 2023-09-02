import PropTypes from "prop-types";


export const InputName = ({name, onNameChange}) => {
    return (
        
        <input
        type="text"
        name="name"
        title="name may contain only letters, apostrophe, dash and space. For example Adrian, Jacob Mercer charl"
        required
        placeholder="Enter name"
        value={name}
        onChange={onNameChange}
/>
        
    )
}

InputName.propTypes = {
    name:PropTypes.string.isRequired,
}
