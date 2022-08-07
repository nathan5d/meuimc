import { ArrowRight } from "phosphor-react";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Number } from "../../components/Input";
import { levels, calculateImc, Level } from "../../helpers/imc";
import { GridItem, ReturnIcon } from "../../components/GridItem";
import { IoLogoGithub } from "react-icons/io";
import "./style.scss";

export default function Home() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateImc = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (height && weight) {
      setToShow(calculateImc(height, weight));
    } else {
      alert("Preencha todos os campos...");
    }
  };

  const handleToBack = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div>
      <Header logo="./src/assets/imc_logo_secondary.svg" />
      <div className="container">
        <div className="row-l">
          <h1 className="title">Calcule seu IMC</h1>
          <p className="description">
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            OMS para calcular o peso ideal de cada pessoa.
          </p>
          <form>
            <Number
              type={"number"}
              placeholder="Em metros. Ex.: 1.80"
              value={height > 0 ? height : ""}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
            <Number
              type={"number"}
              placeholder="Em Kg. Ex.: 75"
              value={weight > 0 ? weight : ""}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <button
              type="submit"
              className="button"
              onClick={handleCalculateImc}
            >
              Calcular <ArrowRight size={24} />
            </button>
          </form>
        </div>
        <div className="row-r">
          {!toShow && (
            <div className="grid">
              <div className="small-items">
                {levels.map((item, key) => (
                  <GridItem key={key} item={item} iconSize={48} />
                ))}
              </div>
            </div>
          )}
          {toShow && (
            <div className="big-item">
              <ReturnIcon item={toShow} onClick={handleToBack} iconSize={38} />
              <GridItem item={toShow} iconSize={48} />
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
        Powered by
        <a
          href="https://github.com/nathan5d/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            marginLeft: 5,
          }}
          target="_blank"
        >
          <IoLogoGithub
            style={{
              borderRadius: "50%",
              color: "#333333",
              marginRight: 5,
            }}
            size={18}
          />
          nathan5d
        </a>
      </footer>
    </div>
  );
}
