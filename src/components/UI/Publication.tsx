import './styles.css';
import { Publication as PublicationProps } from "../../resources/CV";

const Publication: React.FC<PublicationProps> = ({
  title,
  journal,
  volume,
  pages,
  year,
  issn,
  doi,
  url,
  authors,
  keywords,
}) => {
  return (
    <div className="publication">
      <h4 className='paper-title'>{title}</h4>
      <p>
        <i>
          {authors.join(", ")}
        </i> <br />
      {journal + " " + year} <br />
      [<a href={doi}>DOI</a>]
      </p>
    </div>
  );
};

export default Publication;
