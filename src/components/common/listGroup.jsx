import React from 'react';


const ListGroup = props => {
    const { items,
         textProperty, 
         valueProperty, 
         selectedItem,
          onItemSelect } = props;
    
   
        return (
             <ul className="list-group">
            { items.map(item => (
            <li onClick={() =>  onItemSelect(item)}
              key={item[valueProperty]} 
            className={ item === selectedItem ? "list-group-item is active" :  "list-group-item"
            }
            > 
                {item[textProperty]}
            </li>
            ))}
        </ul>
        );
};
 ListGroup.defaultProps = {
     textProperty: "name",
     valueProperty: '-id'
 };
export default ListGroup;