import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component{
    constructor(props){
        super();
        this.state ={
            collection:SHOP_DATA
        }
    }
    render(){
        const  {collection} = this.state;
        return (
            
            <div className='shop-page'>
                
                {
                    collection.map(({id,...otherColletionProps})=>(
                        <CollectionPreview key={id} {...otherColletionProps}/>
                    ))
                }
            </div>);
        
    }
}

export default ShopPage;