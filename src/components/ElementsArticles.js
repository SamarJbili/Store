import { Link } from "react-router-dom";

function ElementsArticle(props) {
  return (
    <div className="container">
      <div className="row">
        {props.articles.map((article) => {
          return (
            <div key={article.id} className="col-sm-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={article.imageartpetitf}
                  className="card-img-top"
                  alt={article.designation}
                  style={{ height: "200px" }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{article.designation}</h5>
                  <p className="card-text">{article.marque}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {article.prixVente} TND
                  </li>
                </ul>
                <div className="card-body">
                <Link exact to={`/editArticle/${article.id}`} className="btn btn-primary" >
                <i className="fas fa-pencil" />
                </Link>
                <span style={{ margin: "60px" }}></span>
                <button onClick={() => { props.deleteProd(article.id);}} className="btn btn-danger">
                <i className="fas fa-trash" />
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ElementsArticle;
