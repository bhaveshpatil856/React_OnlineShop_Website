import React from "react";

const Product = (props) => {

    let {datas} = props;
   // console.log(datas);

    const formatCurrency = (value) =>{
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'INR', currencyDisplay:'narrowSymbol'}).format(value);
    }

    const formatDescription = (value) => {
        if(!value){return null;}
        
        //console.log(value.length)
        if(value.length > 60 ) {
            return value.substring(0,60) + "....";
        }
        else {
            return value;
        }     
    }

    return (
        <div className="card" style={{width: "18rem" }}>
            
               <img className="card-img-top" src={datas.image} alt={datas.name} style={{height: '18rem'}} />
            
            <div className="card-body">
                <h4 className="card-title">{datas.name}</h4>
                <p className="card-text">{formatDescription(datas.description)}</p>
                <h5 className="card-text"> {formatCurrency(datas.offerPrice)}</h5>
                <h6 className="card-text"> <del> {formatCurrency(datas.price)}</del> </h6>
            </div>
            <button type="button" 
                    className="btn btn-primary btn-lg" 
                    style={{margin:"5px"}}
                    onClick={()=> props.history.push(`/findProductById/${datas._id}`)}
                    >
                        Check Product
            </button>
            
        </div>
    )
}

export default Product;