import { useState,useEffect  } from 'react';

import axios from 'axios';

import { useNavigate , useParams} from 'react-router-dom';

function ModifArticle() {

    const navigate=useNavigate();

    const [reference, setReference] = useState("");
    const [designation, setDesignation] = useState("");
    const [marque, setMarque] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [imageartpetitf, setImageartpetitf] = useState("");
    
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3001/produits/'+id).then(res => {
          setReference(res.data.reference);
          setDesignation(res.data.designation);
          setMarque(res.data.marque);
          setPrixAchat(res.data.prixAchat);
          setPrixVente(res.data.prixVente);
          setQtestock(res.data.qtestock);
          setImageartpetitf(res.data.imageartpetitf);
      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        id:id,
        reference,
        designation,
        marque,
        prixAchat, 
        prixVente, 
        qtestock, 
        imageartpetitf
      };
    
   axios.put("http://localhost:3001/produits/"+id,newProduct)
  .then(res => {  
  console.log(res);
  navigate("/articles")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
        <h2>Modification d'un produit </h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Référence"
          type="text"
          value={reference}
          onChange={e => setReference(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Désignation"
          name="designation"
          type="text"
          value={designation}
          onChange={e => setDesignation(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Marque"
          type="text"
          value={marque}
          onChange={e => setMarque(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Prix Achat"
          type="number"
          value={prixAchat}
          onChange={e => setPrixAchat(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Prix Vente"
          name="prixVente"
          type="number"
          value={prixVente}
          onChange={e => setPrixVente(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Quantité"
          type="number"
          value={qtestock}
          onChange={e => setQtestock(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control"
          placeholder="Image"
          type="text"
          value={imageartpetitf}
          onChange={e => setImageartpetitf(e.target.value)}
          />
    </div>    
    <div>{imageartpetitf ?<img src={"/"+imageartpetitf} alt={imageartpetitf} width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>
  </>
     );
}

export default ModifArticle;
