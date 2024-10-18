// PortfolioItemPage/index.tsx
import styles from "./PortfolioItemPage.module.scss";
import { useParams } from "react-router-dom";
import headImage from "../../assets/head.png";
import { portfolioItemsData } from "./portfolio-items"; // Ajuste este caminho conforme necessário

export const PortfolioItemPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const item = portfolioItemsData.find((i) => i.id === itemId);

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={headImage} alt="Header" className={styles.headerImage} />
        <h1 className={styles.headerTitle}>{item.title}</h1>
        <p className={styles.headerDescription}>{item.description}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={item.imageUrl} alt={item.title} />
          </div>
          <div className={styles.secondaryImages}>
            {item.secondaryImages?.map((image, index) => (
              <div key={index} className={styles.imageItem}>
                <img src={image} alt={`${item.title} - Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.textContent}>
          <p className={styles.category}>{item.category}</p>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      </div>
    </div>
  );
};
