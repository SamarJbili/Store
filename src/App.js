import ListArticles from './components/ListArticles';
import AjoutArticle from './components/AjoutArticle';
import ModifArticle from './components/ModifArticle';
import { CartProvider } from "use-shopping-cart";
import ListArticleCard from './components2/ListArticleCard';
import Menu from './Menu';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './components2/Cart';
import PdfCart from './components2/PdfCart';
import Loginclient from './components/authentificationClient/loginClient';
import Signup from "./components/authentificationClient/Signup";

function App() {
  return(
    <>
     <CartProvider>
     <Router>
      <Menu/>
      <Routes>
        <Route path='/articles' element={<ListArticles/>}/>
        <Route path='/AddArticle' element={<AjoutArticle/>}/>
        <Route path='/editArticle/:id' element={<ModifArticle/>}/>
        
        <Route path='/' element={<ListArticleCard/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='PdfCart' element={<PdfCart/>}/>
        <Route path="/loginclient" exact element={<Loginclient/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
        
      </Routes>
      </Router>
      </CartProvider>
    </>
    
  );

}

export default App;
