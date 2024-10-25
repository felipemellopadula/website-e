import fpgImage1 from '../../assets/fpg/fpg-01.jpg';  
import fpgImage2 from '../../assets/fpg/fpg-04.jpg';
import videoBg from "../../assets/Sierra/Sierra02.mp4";
import amazonia1 from "../../assets/Amazônia/06.jpg";
import amazonia2 from "../../assets/Amazônia/10.jpg";
import amazonia3 from "../../assets/Amazônia/Paris01.jpg";
import amazonia5 from "../../assets/Amazônia/11.jpg";
import amazonia6 from "../../assets/Amazônia/comp1.jpg";
import amazonia7 from "../../assets/Amazônia/12.png";
import amazonia8 from "../../assets/Amazônia/13.png";
import markela1 from "../../assets/Markela/aqua1.png";
import markela2 from "../../assets/Markela/aqua2.png";
import markela4 from "../../assets/Markela/ego1.png";
import markela5 from "../../assets/Markela/ego2.png";
import markela6 from "../../assets/Markela/perfume1.png";
import markela7 from "../../assets/Markela/sense1.png";
import markela8 from "../../assets/Markela/sense2.png";
import yamamura1 from "../../assets/yamamura.png"
import yamamuravideo1 from "../../assets/Yamamura.mp4"


export interface IPortfolioItem {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string[];
  video1?: string;
  video2?: string;
  content: string;
}

export const portfolioItemsData: IPortfolioItem[] = [
  {
    id: "item1",
    client: "Federação Paulista de Golfe",
    title: "AULAS DE GOLFE COM FPG GOLFCENTER",
    category: "Offline e Digitais",
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
    client: "Sierra Mike",
    title: "Fretes Aéreos com Sierra Mike",
    category: "Digitais",
    description: "Descrição detalhada do item 2",
    video1: videoBg,
    content: `  
        Já imaginou viajar com o conforto e a segurança que você sempre sonhou? A Sierra Mike Fretes Aéreos tornou isso realidade, e nós ajudamos a mostrar ao mundo! ✨ O desafio? Comunicar os benefícios exclusivos da Sierra Mike, destacando-se em um mercado competitivo. Nossa solução? Um vídeo de tirar o fôlego! 🎬 Mostramos tudo: a imponência das aeronaves por fora, o conforto e sofisticação por dentro, e a emoção do voo em si! Deu pra sentir a adrenalina? 😉
      `,
  },
  {
    id: "item3",
    client: "Amazônia Água de Coco",
    title: "Do Brasil para o mundo com Amazônia Água de Coco",
    category: "3D - Out of Home",
    description: "Descrição detalhada do item 3",
    imageUrl: amazonia1,
    imageUrl2: amazonia2,
    imageUrl3: [amazonia3, amazonia5, amazonia6, amazonia7, amazonia8],
    content: `  
        A Amazônia Água de Coco deu um refresh incrível em suas embalagens, e nós, aqui na Unity, tivemos a honra de dar vida a essa transformação em um projeto super especial! ✨ O desafio? Apresentar as novas embalagens de forma impactante em quatro países: Brasil, Estados Unidos, França e Emirados Árabes Unidos, tanto no Digital quanto em Out-of-Home. E como fizemos isso? Com a magia do 3D! 🚀 Criamos modelos 3D hiper-realistas das novas embalagens, destacando cada detalhe com um toque de modernidade. Para o Brasil, a missão era ainda mais vibrante: representar a exuberância da nossa terra! Incorporamos ilustrações cheias de cor, natureza, floresta e toda a energia brasileira, transmitindo a essência da Amazônia em cada pixel. 🇧🇷💚
      `,
  },
  {
    id: "item4",
    client: "Markela Cosméticos",
    title: "Linha de produtos com Markela Cosméticos",
    category: "Offline e Digitais",
    description: "Descrição detalhada do item 4",
    imageUrl: markela1,
    imageUrl2: markela2,
    imageUrl3: [markela4, markela5, markela6, markela7, markela8],
    content: `  
       A Markela Cosméticos queria um visual super moderno e bonito para os seus produtos, e adivinha quem foi chamado para ajudar? A gente! 😉 O desafio: dar vida aos produtos, criar embalagens de perfumes sedutores a desodorantes refrescantes, com ilustrações 3D de cair o queixo. E para dar aquele toque especial, splashes de água dignos de comercial de TV! 💦 A solução? Mergulhamos de cabeça em ilustrações 3D hiper-realistas, capturando cada detalhe dos produtos Markela. Os splashes de água? Super refrescantes e vibrantes, dando toda a sensação de limpeza e bem-estar. O resultado foram lindas ilustrações, impactantes, que salta aos olhos e te convida a experimentar cada produto! 😍  
      `,
  },
  {
    id: "item5",
    client: "Lustres Yamamura",
    title: "TUDO PARA O SEU PROJETO COM LUSTRES YAMAMURA",
    category: "Tv, Offline e Digitais",
    description: "Descrição detalhada do item 5",
    imageUrl: yamamura1,
video1: yamamuravideo1,
    content: `  
        A Lustres Yamamura tinha um desafio brilhante: mostrar que é O lugar para encontrar tudo em iluminação. E nós, da Unity, topamos iluminar esse caminho! Afinal, quem melhor do que nós para acender a chama do sucesso? 😉 Com o conceito "Tudo para o Seu Projeto", transformamos a Yamamura num verdadeiro marketplace da luz! 💡 Criamos uma campanha completa, que brilhou forte na TV, com um comercial impactante, e invadiu as ruas com anúncios offline e out-of-home de tirar o fôlego. E claro, as redes sociais e o digital não ficaram de fora! 🚀 Com estratégias personalizadas e conteúdo de arrasar, mostramos para todo mundo que, quando o assunto é iluminação, a Yamamura tem tudo!
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
