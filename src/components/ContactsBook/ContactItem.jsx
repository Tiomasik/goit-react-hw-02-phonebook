const ContactItem = ({name, number, id, deleteContact}) => (
    <>
        <p>{ name }: {number}</p>
        <button type="button" onClick={() => deleteContact(id)}>Delete contact</button>
    </>
)

export default ContactItem