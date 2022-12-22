import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contacts from "../../resources/Contacts";
import './styles.css'

const ContactsColumn = () => {
  return (
    <div className="contacts">
      {contacts.map((item) => (
        <a key={item.key} href={item.url} className="contactIcon">
          <FontAwesomeIcon icon={item.icon} className="icon" size="3x" />
        </a>
      ))}
    </div>
  );
};

export default ContactsColumn;