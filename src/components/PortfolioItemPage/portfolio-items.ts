import fpgImage1 from '../../assets/fpg/fpg-01.jpg';  
import fpgImage2 from '../../assets/fpg/fpg-02.png';

export interface IPortfolioItem {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageUrl2?: string;
  imageUrl3?: string[];
  content: string;
}

export const portfolioItemsData: IPortfolioItem[] = [
  {
    id: "item1",
    client: "Federação Paulista de Golfe",
    title: "AULAS DE GOLFE COM FPG GOLFCENTER",
    category: "Mídias offline e digitais",
    description: "Descrição detalhada do item 1",
    imageUrl: fpgImage1,
    imageUrl2: fpgImage2,
    content: `  
      Sabe aquela tacada que parecia perfeita, mas acabou indo parar… bem, longe do ideal? A Federação Paulista de Golfe também sabe! 😉
      E para incentivar os frequentadores de seu Golf Center a finalmente conquistar o swing dos sonhos, criamos uma campanha super divertida e que vai direto ao ponto! Reconhecendo que todo golfista, experiente ou não, já vivenciou momentos inusitados, como tacos arremessados e vidros quebrados, optamos por uma abordagem bem-humorada para promover as aulas. 
    `,
  },
  {
    id: "item2",
    client: "Sierra",
    title: "Fretes Aéreos com Sierra Mike",
    category: "MÍDIA DIGITAIS",
    description: "Descrição detalhada do item 2",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item3",
    client: "Amazônia Água de Coco",
    title: "Do Brasil para o mundo com Amazônia Água de Coco",
    category: "3D - Out of Home",
    description: "Descrição detalhada do item 3",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item4",
    client: "Markela Cosméticos",
    title: "Linha de produtos com Markela Cosméticos",
    category: "MÍDIAS OFFLINE E DIGITAIS",
    description: "Descrição detalhada do item 4",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item5",
    client: "Lustres Yamamura",
    title: "TUDO PARA O SEU PROJETO COM LUSTRES YAMAMURA",
    category: "Tv E MÍDIA OFFLINE",
    description: "Descrição detalhada do item 5",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item6",
    client: "Ama Water Ways",
    title: "CRUZEIROS PELO RIO DANÚBIO COM AMA WATER WAYS",
    category: "MÍDIA DIGITAIS",
    description: "Descrição detalhada do item 6",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item7",
    client: "Talk Golf Show",
    title: "VINHETAS PARA PODCAST COM TALK GOLF SHOW",
    category: "MÍDIA DIGITAIS",
    description: "Descrição detalhada do item 7",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item8",
    client: "Prado Chaves",
    title: "QUANDO E ONDE PRECISAR COM PRADO CHAVES",
    category: "MÍDIAS ONLINE E OFFLINE",
    description: "Descrição detalhada do item 8",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item9",
    client: "Artek",
    title: "NOVOS CATÁLOGOS ARTEK",
    category: "MÍDIA DIGITAIS",
    description: "Descrição detalhada do item 9",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item10",
    client: "Renault do Brasil",
    title: "VERÃO DE NORTE A SUL COM RENAULT",
    category: "PDV - MÍDIA OFFLINE",
    description: "Descrição detalhada do item 10",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item11",
    client: "Center Fabril",
    title: "OS FIOS QUE TECEM SUA VIDA COM CENTER FABRIL",
    category: "MÍDIA DIGITAIS",
    description: "Descrição detalhada do item 11",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
  {
    id: "item12",
    client: "Real Green",
    title: "CARRINHOS DE GOLFE NO BRASIL COM REAL GREEN E TORO",
    category: "MÍDIA DIGITAIS",
    description: "Descrição detalhada do item 12",
    imageUrl: "/images/portfolio-item2.jpg",
    imageUrl2: "../../assets/fpg/fpg-02.jpg",
    content: `  
        <p>Conteúdo detalhado sobre o item 2, incluindo informações adicionais, imagens, vídeos, etc.</p>  
        <p>Você pode usar HTML aqui para formatar o conteúdo como desejar.</p>  
      `,
  },
];
