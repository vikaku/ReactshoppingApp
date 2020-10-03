import React,{useState} from 'react';
import { item } from '../constant/item';
import ItemList from '../component/ItemList'


const App = () => {
  const [items,SetSelectedItem] = useState([]);
  const [shopMode,setShopMode] = useState(false);

  const handleClick = key =>{
    if(items.includes(key)){

    }else{
      SetSelectedItem([...items,key].sort((a,b) => a-b))
    }
    
  };

  const toggleButton =(e) => {
    e.preventDefault();
    setShopMode(!shopMode)
  }
  const selectedValue = items.map(i => "-" + item[i]).join("\n");

  const handleCopy = (e) =>{
    e.target.select();
    document.execCommand("copy")
  }
  return (
    <div className="App">
      <div className="Header">
            React Shopping Helper
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          {shopMode ? <textarea  readOnly={true} className="form-control" value ={selectedValue} onClick ={handleCopy}/>
            
            
            : <ItemList item={item}
                                        selectedItem={handleClick}
                                        SetSelectedItem={SetSelectedItem}
                                        />
          }
            
          </div>
          <button type="button" 
          class={"btn btn-primary" + (shopMode ? " active" : "")}
           onClick = {toggleButton}
           >
           Start Shopping</button>
        </div>
      </div>


    </div>
  );
}

export default App;
