import React from "react";
import CheckBox from "../components/ui/CheckBox";
import Card from '../components/ui/Card';
import './GenerateCards.css';

const GenerateCards = ({ data, selected, handleClick }) => {
  return (
    <>
      <Card>
        <h2 className="heading">{data.card_name}</h2>
        <p>{'Apr:'} <span><strong>{`${data.apr}%`}</strong></span></p>
        <p>{'Balance Transfer Offer Duration:'} <span><strong>{`${data.balance_transfer_offer} months`}</strong></span></p> 
        <p>{'Purchase Offer Duration:'}  <span><strong>{`${data.purchase_offer} months`}</strong></span></p>
        <p>{'Credit Available:'} <span><strong>{`£${data.available_credit}`}</strong></span></p>
        <CheckBox
          name={`card-${data.id}`}
          label=" Select this Card"
          checked={selected}
          onClick={() => handleClick(data)}
        />
      </Card>
    </>
  );
};

export default GenerateCards;
