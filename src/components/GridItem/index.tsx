import { ArrowLeft, IconProps, ThumbsDown, ThumbsUp } from "phosphor-react";
import React, { ButtonHTMLAttributes } from "react";
import { Level } from "../../helpers/imc";

export type Props = {
  item: Level;
  iconSize?: number;
};
export function GridItem({ item, iconSize }: Props) {
  return (
    <div className={`grid-item ${item.class}`}>
      <div className="gridIcon">
        {item.icon === ThumbsUp ? (
          <ThumbsUp size={iconSize} />
        ) : (
          <ThumbsDown size={iconSize} />
        )}
      </div>

      {item.yourImc && (
        <div className="gridYourImc">Seu IMC é {item.yourImc} Kg/m²</div>
      )}
      <div className="gridTitle">{item.title}</div>
      <div className="gridInfo">
        <>
          {item.imc[0] > 39.9 ? (
             <div style={{textAlign:"center"}}>IMC está maior que <strong>{item.imc[0]}</strong> (Kg/m²)</div>
          ) : (
           <div style={{textAlign:"center"}}>
             IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong> (Kg/m²)
           </div>
          )}
        </>
      </div>
    </div>
  );
}

export function ReturnIcon({ item, onClick, iconSize }: Props & IconProps) {
  return (
    <button className="return-icon">
      <div className={`icon ${item.class}`}>
        <ArrowLeft onClick={onClick} size={iconSize} color="#ffffff" />
      </div>
    </button>
  );
}
