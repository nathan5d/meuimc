import {IconProps, ThumbsDown, ThumbsUp } from "phosphor-react";

export type Level = {
  title: string;
  class: string;
  color: string;
  imc: number[];
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  yourImc?: number;
};
export const levels: Level[] = [
  {
    title: "Magreza",
    class: "info",
    color: "",
    icon: ThumbsDown,
    imc: [0, 18.5],
  },
  {
    title: "Normal",
    class: "success",
    color: "green",
    icon: ThumbsUp,
    imc: [18.6, 24.9],
  },
  {
    title: "Sobrepeso",
    class: "alert",
    color: "orange",
    icon: ThumbsDown,
    imc: [25, 29.9],
  },
  {
    title: "Obesidade",
    class: "danger",
    color: "red",
    icon: ThumbsDown,
    imc: [30, 39.9],
  },
  {
    title: "Obesidade grave",
    class: "danger",
    color: "red",
    icon: ThumbsDown,
    imc: [40, 999],
  },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelsCopy = { ...levels[i] };
      levelsCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelsCopy;
    }
  }
  return null;
};
