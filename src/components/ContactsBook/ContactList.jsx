
const ContactList = ({contacts, deleteContact}) => (
    <ul>
        {contacts.map(({ name, number, id }) =>
            <li key={id}>
                <p>Name: { name }</p>
                <p>Number: {number}</p>
                <button type="button" onClick={() => deleteContact(id)}>Delete contact</button>
            </li>)}
    </ul>
)

export default ContactList