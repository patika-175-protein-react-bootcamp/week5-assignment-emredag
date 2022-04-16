import React from "react";
import "../styles/header.css";
import PatikaDevIcon from "../constants/icons/PatikaDevIcon";
import FirstBox from "../constants/icons/firstBox";
import SecondBox from "../constants/icons/secondBox";
import useWindowSize from "../hooks/useWindowSize";

export default function Header({ colorState }) {
  const [width, height] = useWindowSize();

  return (
    <div className="leftSide" id={colorState == true && "grayBackground"}>
      <div className="leftContainer">
        <div className="logo">
          <PatikaDevIcon width={width} height={height} />
        </div>

        <div className="leftTitle">
          <h2 className={colorState == true && "textDarkColor"}>
            YAZILIM PATİKALARI
          </h2>
        </div>

        <div className="textInfo">
          <p className={colorState == true && "textDarkColor"}>
            Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
            eğitim modelidir. Ekibini büyütmek isteyen şirketler bir
            bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış
            ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar.
            Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul
            alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya
            da sektörde başka şirketlere işe yerleşirler.
          </p>
        </div>

        <div className="allBox">
          <FirstBox fill={colorState == true ? "#FFBF5E" : "#444AFF"} />
          <div className="secondBox">
            <SecondBox fill={colorState == true ? "#FFBF5E" : "#444AFF"} />
          </div>
        </div>
      </div>
    </div>
  );
}
