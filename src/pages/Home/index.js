import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/MainButton';
import Footer from '../../components/Footer';

import './styles.css';

let concepts = [
  {
    id: 1,
    title: 'História',
    text: [
      { 
        text: 'A história do povoamento indígena no Brasil é, antes de tudo, uma história de despovoamento, já que é possível considerar que o total de nativos que habitavam o atual território brasileiro em 1500 estava na casa dos milhões de pessoas e hoje mal ultrapassa os 300 mil indivíduos.',
        type: 'text'
      },
      { 
        text: 'Despovoamento, portanto! Eis o primeiro grande traço da história indígena no Brasil, como, de fato, ocorreu nas Américas em proporções gigantescas.',
        type: 'text'
      },
      { 
        text: 'O conhecimento sobre os nativos da terra foi possível graças aos registros produzidos por viajantes de várias nacionalidades que aqui aportaram desde o século XVI, aos relatórios dos colonizadores e outros estrangeiros, à correspondência dos jesuítas e às gramáticas da "língua geral" e de outras línguas.',
        type: 'text'
      },
      {
        text: 'A origem dos índios',
        type: 'title'
      },
      {
        text: 'No Período Colonial, houve muita discussão sobre a origem dos índios: uns acreditavam que eram descendentes das tribos perdidas de Israel, outros duvidavam até de que fossem humanos. Em 1537, o papa Paulo III proclamou a humanidade dos índios na Bula Veritas Ipsa.',
        type: 'text'
      },
      {
        text: 'Hoje já se conhece mais sobre as origens do povoamento da América: supõe-se que os povos ameríndios foram provenientes da Ásia, entre 14 mil e 12 mil anos atrás. Teriam chegado por via terrestre através de um "subcontinente" chamado Beríngia, localizado na região do estreito de Bhering, no extremo nordeste da Ásia.',
        type: 'text'
      },
      {
        text: 'Os números da população indígena',
        type: 'title'
      },
      {
        text: 'De uma estimativa de mais de 2.000.000 índios para o século XVI, chegou-se em 1998 a um total de 302.888 índios, considerando as pessoas que vivem nas Terras Indígenas.',
        type: 'text'
      },
      {
        text: 'Nomes e classificação dos índios',
        type: 'title'
      },
      {
        text: 'Para identificar melhor os índios, os colonizadores os classificaram em Tupi (ou Tupinambá) e Tapuia.',
        type: 'text'
      },
      {
        text: 'Portanto, nunca houve um grupo cultural ou linguístico "tapuia". Este é um vocábulo tupi utilizado para designar os povos de outros troncos ou famílias linguísticas.',
        type: 'text'
      },
      {
        text: 'Essa classificação foi muito importante para o registro das informações sobre os índios produzidas pelos portugueses, franceses e outros europeus. Sem os relatórios dos colonizadores, as crônicas dos viajantes, a correspondência dos jesuítas e as gramáticas da "língua geral" e de outras línguas, quase nada se poderia saber sobre os nativos, sua cultura e sua história.',
        type: 'text'
      },
      {
        text: 'Modos de vida dos Tupinambá ou Tupis',
        type: 'title'
      },
      {
        text: 'Modos de vida dos Tupinambá ou TupisOs costumes dos tupis ou tupinambás são mais conhecidos por causa dos registros que deles fizeram os jesuítas e os viajantes estrangeiros durante o Período Colonial. O mesmo, entretanto, não ocorreu com os tapuias, considerados pelos colonizadores o exemplo máximo da barbárie e selvageria.',
        type: 'text'
      },
      {
        text: 'Os tupinambás moravam em malocas. Cada grupo local ou "tribo" tupinambá se compunha de cerca de 6 a 8 malocas. A população dessas tribos girava em torno de 200 indivíduos, mas podia atingir até 600.',
        type: 'text'
      },
      {
        text: 'Viviam da caça, coleta, pesca, além de praticarem a agricultura, sobretudo de tubérculos, como a mandioca e a horticultura.',
        type: 'text'
      },
      {
        text: 'A divisão de trabalho era por sexo, cabendo aos homens as primeiras atividades e às mulheres o trabalho agrícola, exceto a abertura das clareiras para plantar, feita à base da "queimada", tarefa essencialmente masculina. O plantio e a colheita, o preparo das comidas e o artesanato (confecção de vasos de argila, redes, etc) eram trabalhos femininos. Instrumentos de guerra - arcos e flechas, maças, lanças - eram feitos pelos homens. Os artefatos de guerra ou de trabalho eram de madeira e pedra, e desta última eram inclusive os machados com que cortavam madeira para vários fins.',
        type: 'text'
      },
      {
        text: 'Entre os tupis, o matrimônio avuncular (tio materno com sobrinha), ou entre primos cruzados, era o mais desejado.',
        type: 'text'
      },
      {
        text: 'Mas, para casar, o jovem devia passar por certos testes, o principal deles consistindo em fazer um cativo de guerra para o sacrifício.',
        type: 'text'
      },
      {
        text: 'A vida dos grupos locais ou mesmo de "nações" Tupi girava em torno da guerra, da qual faziam parte os rituais antropofágicos. Guerreavam contra grupos locais da mesma nação, entre "nações" e contra os "tapuias".',
        type: 'text'
      },
      {
        text: 'A guerra e os banquetes antropofágicos reforçavam a unidade da tribo: por meio da guerra era praticada a vingança dos parentes mortos, enquanto o ritual antropofágico significava para todos, homens, mulheres e crianças, a lembrança de seus bravos. O dia da execução era uma grande festa.',
        type: 'text'
      },
      {
        text: 'Nos banquetes antropofágicos, o prisioneiro era imoblizado por meio de cordas. Mesmo assim, para mostrar seu espírito guerreiro, devia enfrentar com bravura os seus inimigos, debatendo-se e prometendo que os seus logo reparariam a sua morte.',
        type: 'text'
      },
      {
        text: 'Relações entre nativos e colonizadores',
        type: 'title'
      },
      {
        text: 'Os índios reagiram de formas diversas à presença dos colonizadores e à chegada de invasores, como os holandeses e franceses. O apoio indígena foi decisivo para o triunfo da colonização portuguesa.',
        type: 'text'
      },
      {
        text: 'Com este apoio, entretanto, as lideranças indígenas tinham seus próprios objetivos: lutar contra seus inimigos tradicionais, que, por sua vez, também se aliavam aos inimigos dos portugueses (franceses e holandeses) por idênticas razões.',
        type: 'text'
      },
      {
        text: 'Alguns grupos moveram inúmeros ataques aos núcleos de povoamento portugueses. Dentre estes, os Aymoré, posteriormente chamados de Botocudos, foram um permanente flagelo para os colonizadores durante o século XVI, na Bahia.',
        type: 'text'
      },
      {
        text: 'Terras indígenas',
        type: 'title'
      },
      {
        text: 'As terras indígenas são legalmente destinadas à posse permanente das comunidades que as ocupam. São criadas pela FUNAI (Fundação Nacional do Índio) e a ocupação se dá com intuito de preservar o habitat e garantir a sobrevivência físico-cultural dos grupos indígenas.',
        type: 'text'
      },
      {
        text: 'As terras indígenas ocupam cerca de 11,6% do território nacional (http://www.funai.gov.br/)',
        type: 'text'
      },
      {
        text: 'O Brasil tem uma extensão territorial de cerca de 851 milhões de ha, ou, mais especificamente, 8.547.403,5 km2. As terras indígenas do Brasil ocupam uma área de 991.498 km2 de extensão, maior do que o território da França ( 543.965 km2) e da Inglaterra (130.423 km2) juntos.',
        type: 'text'
      },
    ],
  },
  {
    id: 2,
    title: 'Vídeos',
    text: [
      {
        text: 'Mokoi Tekoá Petei Jeguatá - Duas Aldeias, uma caminhada',
        type: 'title'
      },
      {
        text: 'Sem matas para caçar e sem terras para plantar, os Mbya-Guarani dependem da venda do seu artesanato para sobreviver. Três jovens realizadores Guarani acompanham o dia-a-dia de duas comunidades unidas pela mesma história, do primeiro contato com os europeus até o intenso convívio com os brancos de hoje.',
        type: 'text'
      },
      { 
        text: 'https://www.youtube.com/embed/R45trSTOPbQ',
        type: 'video'
      },
      {
        text: 'Bicicletas de Nhanderú',
        type: 'title'
      },
      {
        text: 'Uma imersão na espiritualidade presente no cotidiano dos Mbya-Guarani da aldeia Koenju, em São Miguel das Missões no Rio Grande do Sul.',
        type: 'text'
      },
      { 
        text: 'https://www.youtube.com/embed/edKtJmY65wM',
        type: 'video'
      },
      {
        text: 'Arte indígena | Nossa História: Hábitos e Cultura',
        type: 'title'
      },
      {
        text: 'Na cultura indígena, os objetos quase sempre têm prioritariamente uma função, além da beleza e de significados. Utensílios simples também podem ser considerados uma forma de arte.',
        type: 'text'
      },
      { 
        text: 'https://www.youtube.com/embed/ky7afsv9bCk',
        type: 'video'
      },
      {
        text: 'Kangwaá - Cantando para Nhanderú - Índios Tupi Guarani',
        type: 'title'
      },
      {
        text: 'Projeto desenvolvido junto aos indígenas Tupi-Guarani das aldeias Bananal, Nhamandu Mirim e Piaçaguera do Litoral Sul e São Paulo.',
        type: 'text'
      },
      { 
        text: 'https://www.youtube.com/embed/6poEuFqAe8E',
        type: 'video'
      },
      {
        text: 'As tribos de índios isoladas do Brasil (Profissão Repórter)',
        type: 'title'
      },
      { 
        text: 'https://www.youtube.com/embed/WaIPRb-McBs',
        type: 'video'
      },
      
    ]
  },
  {
    id: 3,
    title: 'Arte',
    text: [
      {
        text: 'Cerâmica Indígena',
        type: 'title'
      },
      {
        text: 'A cerâmica é um exemplo de arte que não está presente em todas as tribos indígenas, sendo ausente entre os Xavantes, por exemplo. É possível notar os costumes diversos dos povos indígenas através da observação desse tipo de arte.',
        type: 'text'
      },
      {
        text: 'https://static.todamateria.com.br/upload/ce/ra/ceramicaindigena.jpg',
        type: 'image'
      },
      {
        text: 'Peça de cerâmica da etnia Assurini, Xingu – PA',
        type: 'text'
      },
      {
        text: 'Máscaras Indígenas',
        type: 'title'
      },
      {
        text: 'As máscaras indígenas apresentam um simbolismo sobrenatural. Elas são feitas de cascas de árvores ou outros materiais como palha e cabaças e podem ser enfeitadas com plumagem.',
        type: 'text'
      },
      {
        text: 'Normalmente, são utilizadas em ritos cerimoniais. Um exemplo é a tribo dos Karajá, que se serve das máscaras durante a dança do Aruanã com o objetivo de representar heróis que conservam a ordem mundial.',
        type: 'text'
      },
      {
        text: 'https://static.todamateria.com.br/upload/ma/sc/mascarasindigenas.jpg',
        type: 'image'
      },
      {
        text: 'Máscara indígena que faz parte do acervo do Museu de Arte Indígena (MAI), inaugurado em 2016 em São Paulo',
        type: 'text'
      },
      {
        text: 'Pintura Corporal Indígena',
        type: 'title'
      },
      {
        text: 'A pintura corporal é usada em certos rituais e de acordo com o gênero e a idade. Sua finalidade é indicar os grupos sociais ou a função de cada indivíduo na tribo.',
        type: 'text'
      },
      {
        text: 'https://static.todamateria.com.br/upload/pi/nt/pinturacorporalindios.jpg',
        type: 'image'
      },
      {
        text: 'Pintura corporal em mulheres da etnia Kayapó',
        type: 'text'
      },
      {
        text: 'Cestaria Indígena',
        type: 'title'
      },
      {
        text: 'Os cestos são utilizados para uso doméstico, na manutenção e transporte de alimentos. É mais confeccionado pelas mulheres, que desenvolvem variadas formas de trançados em diferentes formatos.',
        type: 'text'
      },
      {
        text: 'https://static.todamateria.com.br/upload/ce/st/cestariaindigena-cke.jpg',
        type: 'image'
      },
      {
        text: 'Exemplos de cestaria indígena',
        type: 'text'
      },
      {
        text: 'Arte Plumária Indígena',
        type: 'title'
      },
      {
        text: 'As plumas são utilizadas nos rituais e coladas diretamente no próprio corpo. Elas servem também para ornamentar máscaras, colares, braçadeiras, brincos, pulseiras e cocares, os quais são feitos de penas e de caudas de aves.',
        type: 'text'
      },
      {
        text: 'https://static.todamateria.com.br/upload/ar/te/arteplumaria-cke.jpg',
        type: 'image'
      },
      {
        text: 'Exemplo de cocar indígena - ornamento decorativo para ser usado na cabeça',
        type: 'text'
      },
    ]
  },
  {
    id: 4,
    title: 'Referências',
    text: [
      {
        link: 'http://www.freepik.com',
        text: 'http://www.freepik.com',
        type: 'link'
      },
      {
        link: 'https://www.todamateria.com.br/arte-indigena-brasileira/',
        text: 'www.todamateria.com.br/arte-indigena-brasileira',
        type: 'link'
      },
      {
        link: 'https://brasil500anos.ibge.gov.br/territorio-brasileiro-e-povoamento/historia-indigena.html',
        text: 'www.brasil500anos.ibge.gov.br/territorio-brasileiro-e-povoamento/historia-indigena',
        type: 'link'
      },
      
    ]
  },
]

export default function Home() {
  return (
    <div className="container">
      <Header title="Cultura Indígena" />
      <div className="buttons">
        {concepts.map(concept => {
          return <MainButton concept={concept} />
        })}
      </div>
      <Footer className="container-footer" />
    </div>
  )
} 