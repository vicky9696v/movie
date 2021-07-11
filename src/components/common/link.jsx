import React from 'react';


const Link = props => {
    const { items,
         textProperty, 
         valueProperty, 
         selectedItem,
          onItemSelect } = props;
        return (
             <ul className="link">
            { items.map(item => (
            <li onClick={() =>  onItemSelect(item)}
              key={item[valueProperty]} 
            className={ item === selectedItem ? "link-item is active" :  "link-item"
            }
            > 
                {item[textProperty]}
            </li>
            ))}
        </ul>
        );
};
 Link.defaultProps = {
     textProperty: "name",
     valueProperty: '-id'
 };
export default Link;