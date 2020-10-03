import React from 'react'

const ItemList =({item,SetSelectedItem,selectedItem}) => {
    return (
        <div>

                        <ul className="list-group">

                            { item.map((item,key) =>{

                                return (
                                    <li className={
                                        "list-group-item list-group-item-action" +
                                            (typeof SetSelectedItem === "string" && SetSelectedItem.includes(key) ? " active" : "")
                                        }
                                        key ={key}
                                        onClick={e => {
                                            e.preventDefault();
                                            selectedItem(key);
                                        }} >
                            {item}
                        </li>
                                )
                                        
                                    }
                                  )           
                                }
                        </ul> 
                   
             
        </div>

        
       

    )
} 

export default ItemList;
