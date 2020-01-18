import React from 'react';
import delivery from '../../src/images/f-delivery.png';
import coin from '../../src/images/coin.png';
import chat from '../../src/images/chat.png';

export function Guarantee() {
    
const data = [{
    image: `${delivery}`,
    title: "Free Shipping",
    description:"Fast and reliable delivery from our storage to your home, your products are under guarantee through all delivery process."
    },

    {
    image: `${coin}`,
    title: "100% Money Back",
    description:"Fast and reliable delivery from our storage to your home, your products are under guarantee through all delivery process."
    },

    {
    image: `${chat}`,
    title: "Online Support 24/7",
    description:"Fast and reliable delivery from our storage to your home, your products are under guarantee through all delivery process."
    }
];

return(
    <div className="guarantee-cont">
{data.map((item, i)=>
<div className='guarantee'>
<h2 className="title" key={i}>{item.title}</h2>
<img className="img" alt="pngs" key={i} src={item.image}/>
<p className="para" key={i} >{item.description}</p>
</div>
)}
</div>
)};
