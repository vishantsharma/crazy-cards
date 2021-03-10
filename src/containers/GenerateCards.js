import React from "react";
import CheckBox from "../components/ui/CheckBox";
import Card from '../components/ui/Card';

const GenerateCards = ({ data, selected, handleClick }) => {
  return (
      <>
    <Card>
        <h5 className="card-title">{data.card_name}</h5>
            <span>Balance Transfer offer duration</span>
            <h6>{data.card_details.key_facts.value}</h6>
            <span>Purchase offer duration</span>
            <h6>{data.card_details.key_facts.value}</h6>
            <span>APR %</span>
            <h6>{data.card_details.key_facts.value}</h6>
            <span>Credit Available</span>
            <h6>£{data.credit_score}</h6>
        <div className="row">
          <div className="col">
            <CheckBox
              name={`card-${data.id}`}
              label="Select this Card"
              checked={selected}
            //   onClick={()}
              onClick={() => handleClick(data)}
            />
          </div>
        </div>
    </Card>
    </>
  );
};

export default GenerateCards;
