import ContactItem from './ContactItem'
import { List, Item } from './ContactList.styled'

const ContactList = ({ contacts, deleteContact }) => (
    <List>
        {contacts.map(({ id, name, number }) =>
            <Item key={id}>
                <ContactItem name={name}
                    number={number}
                    id={id}
                    deleteContact={deleteContact} />
            </Item>)}
    </List>
)

export default ContactList