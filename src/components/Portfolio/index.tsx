import styles from "./styles.module.scss";
import imgItem1 from "../../assets/peca-carro01.jpg";
import imgItem2 from "../../assets/embrase-backlight.jpg";
import imgItem3 from "../../assets/amazonia.jpg";
import imgItem4 from "../../assets/markela.jpg";
import imgItem5 from "../../assets/lustres.jpg";
import imgItem6 from "../../assets/embrase2.jpg";
import imgItem7 from "../../assets/prado-chaves.jpg";
import imgItem8 from "../../assets/sadokin.jpg";
import imgItem9 from "../../assets/artek.jpg";
import imgItem10 from "../../assets/renault.jpg";
import imgItem11 from "../../assets/center-fabril.jpg";
import imgItem12 from "../../assets/grabsec.jpg";

interface PortfolioItem {
  id: string;
  gridArea: string;
  category: string;
  title: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "item1",
    gridArea: "item1",
    category: "MÍDIAS DIGITAIS E OFFLINE",
    title: "AULAS DE GOLFE COM A FPG GOLFCENTER",
    imageUrl: imgItem1,
  },
  {
    id: "item2",
    gridArea: "item2",
    category: "OUT OF HOME",
    title: "EMBRASE",
    imageUrl: imgItem2,
  },
  {
    id: "item3",
    gridArea: "item3",
    category: "3D - OUT OF HOME",
    title: "AMAZÔNIA",
    imageUrl: imgItem3,
  },
  {
    id: "item4",
    gridArea: "item4",
    category: "MÍDIAS ONLINE E OFFLINE",
    title: "MARKELA COSMÉTICOS",
    imageUrl: imgItem4,
  },
  {
    id: "item5",
    gridArea: "item5",
    category: "TV E MÍDIA IMPRESSA",
    title: "LUSTRES YAMAMURA",
    imageUrl: imgItem5,
  },
  {
    id: "item6",
    gridArea: "item6",
    category: "MÍDIAS ONLINE E OFFLINE",
    title: "EMBRASE",
    imageUrl: imgItem6,
  },
  {
    id: "item7",
    gridArea: "item7",
    category: "MÍDIAS ONLINE E OFFLINE",
    title: "PRADO CHAVES",
    imageUrl: imgItem7,
  },
  {
    id: "item8",
    gridArea: "item8",
    category: "STATIONERY",
    title: "SADOKIN",
    imageUrl: imgItem8,
  },
  {
    id: "item9",
    gridArea: "item9",
    category: "STATIONERY",
    title: "ARTEK",
    imageUrl: imgItem9,
  },
  {
    id: "item10",
    gridArea: "item10",
    category: "PDV - MÍDIA OFFLINE",
    title: "RENAULT",
    imageUrl: imgItem10,
  },
  {
    id: "item11",
    gridArea: "item11",
    category: "MÍDIA OFFLINE",
    title: "CENTER FABRIL",
    imageUrl: imgItem11,
  },
  {
    id: "item12",
    gridArea: "item12",
    category: "MÍDIA OFFLINE",
    title: "GRABSEC",
    imageUrl: imgItem12,
  },
];

export const Portfolio = () => {
  return (
    <div className={styles.container}>
      {portfolioItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.portfolioItem} ${styles[item.id]}`}
          style={{
            gridArea: item.gridArea,
            backgroundImage: `url(${item.imageUrl})`,
          }}
        >
          <div className={styles.content}>
            <div className={styles.category}>{item.category}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
