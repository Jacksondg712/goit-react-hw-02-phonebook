import PropTypes from "prop-types"


export const InputNumber = ({
    number, onNumberChange
})  => {
    return(
        <>
        <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onNumberChange}
        />
        </>
)}

InputNumber.prototype={
    number:PropTypes.string.isRequired
}