// components/PortfolioItemPage.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioItemPage.module.scss";
import { portfolioItemsData } from "./portfolio-items";
import headImage from "../../assets/head.png";

export const PortfolioItemPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<(typeof portfolioItemsData)[number] | null>(
    null
  );

  useEffect(() => {
    const foundItem = portfolioItemsData.find((i) => i.id === itemId);
    setItem(foundItem || null);
  }, [itemId]);

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
                <img
                  src={image}
                  alt={`${item.title} - Image ${index + 1}`} // Correção de sintaxe
                />
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
