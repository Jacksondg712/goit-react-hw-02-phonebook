import propTypes from "prop-types"


const Notification =({
    Message
}) => {
    return(
        <>
        <p>{Message}</p>
        </>
    )
};

Notification.propTypes ={
    Message:propTypes.string,
}

export default Notification;
