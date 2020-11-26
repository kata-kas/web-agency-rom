import React from 'react'
import '../styles/Pricing.scss'

function CardDescription({ title, description }) {	
	return (
		<div className="card-description">
			<h2>{ title }</h2>
			<p>{ description }</p>
		</div>
	);
};

function CardBilling({ price, recurrency }) {
	return (
		<div className="card-billing">
			<p>
				<strong className="price"> { price }</strong>RON
			</p>
			
		</div>
	);
};

function CardFeatures({ data }) {	
	return (
		<div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction({ clickMe }) {
	return (
		<div className="card-action">
			<button onClick={clickMe}>Contactează-ne</button>
		</div>
	);
};

function PricingCard(props) {	
	const { 
    type,
    title,
    description,
    price,
    mostPopular,
    data,
    clickMe
  } = props;
	
	return (
        <div className={`card pricing-card ${type}`}>
      { (mostPopular) ? <span className="most-popular">Cel mai popular</span> : null }
			<CardDescription title={title} description={description} />
			<CardBilling price={price} />
			<CardFeatures data={data} />
			<CardAction clickMe={clickMe} />
		</div>
	);
};

export default function Pricing() {
  function handleClick() {
    console.log('Button clicked!');
  };
  
	return (
        <div>
        <div style={{alignText:'right', padding:'10%', backgroundColor:'transparent'}}>
        <h3>
        ⚡  Toate Paginile Web create de noi sunt de la zero, pe comandă,<br/>
        ✂️ Special croite pentru necesitățile afacerii tale

</h3>
		</div>
        <div className="app-wrapper">
      {
        cardsData.map(props => {                              
          return (
            <PricingCard
              {...props}
              key={props.id}
              clickMe={handleClick} 
            />
          )
        })
      }
		</div></div>
	);
};

const cardsData = [
  {
    id: 1,
    type: 'medium',
    title: 'Site Web de prezentare',
    description: '',
    price: 400,
    mostPopular: true,
    data: ['HTML, CSS si JavaScript', 'Maxim 5 pagini (pagini suplimentare: 50RON/pagina)', 'Găzduire website(optional): 10RON/lună', 'Integrare Social Media (Open Graph)']
  },
  {
    id: 2,
    type: 'basic',
    title: 'Magazin Online',
    description: 'E-commerce',
    price: 1000,
    mostPopular: false,
    data: ['Javascript, PHP si/sau Python', 'Maxim 20 de pagini (pagini suplimentare: 75RON/pagina)', 'Găzduire website(optional): 50RON/lună', 'Integrare Social Media (Open Graph)' ]
  },
  {
    id: 3,
    type: 'free',
    title: 'Aplicație IOS/Android',
    description: 'Aplicație/Joc',
    price: '2500*',
    mostPopular: false,
    data: ['Swift, Objective-C, C++, C#, Klondike', '*Se negociaza in functie de marimea si complexitatea aplicatiei', 'Găzduire(optional): de la 50RON/lună','Publicare in AppStore/GooglePlay']
  },

];