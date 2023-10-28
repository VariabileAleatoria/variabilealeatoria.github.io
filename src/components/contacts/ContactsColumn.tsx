import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contacts from "../../resources/Contacts";
import './styles.css'

const Contacts = () => {
  return (
    <div className="contacts">
      {contacts.map((item) => (
        <a key={item.key} href={item.url} className="contactIcon">
          <FontAwesomeIcon icon={item.icon} className="icon" />
        </a>
      ))}
    </div>
  );
};

export default Contacts;