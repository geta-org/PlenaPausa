import {
  InfoCard,
  Navbar,
  Form,
  Accordion,
  Card
} from "../components/components";
import {
  Hero,
  InfoGrid,
  Title,
  Subtitle,
  AboutUs,
  SectionHeader,
  TitleContainer,
  SectionTitle,
  SectionDescription,
  ResourcesContainer,
  FormContainer,
  AccordionContainer,
  Bold,
} from "./App.styles";
import MenoLogo from "../assets/logo.svg?react";
import QuestionLogo from "../assets/question.svg?react";
import Monitor from "../assets/img/Agenda para monitoramento da menopausa.pdf";
import Info1 from "../assets/img/Infographic resume.jpeg";
import Info2 from "../assets/img/Infographic symptoms.jpeg";

function App() {
  return (
    <>
      <Navbar />
      <Hero>
        <MenoLogo
          style={{ fill: "var(--background-secondary)" }}
          width={222}
          height={141}
        />
        <TitleContainer>
          <Title>MENOSPAUSA</Title>
          <Subtitle>Maisvida</Subtitle>
        </TitleContainer>
      </Hero>
      <AboutUs id="about-us">
        <SectionHeader>
          <SectionTitle>Sobre Nós</SectionTitle>
          <SectionDescription>
            <p>Este site foi criado com carinho e dedicação pela equipe de pesquisa que investiga o uso do LASER e fitoterapia no manejo dos sintomas da menopausa,</p>
            <p>do Programa Interinstitucional de Pós-Graduação em Ciências Fisiológicas da Universidade Federal de São Carlos e UNESP,</p>
            <p>com apoio do Grupo de Pesquisa de Engenharia e Ciências da Computação do Centro Universitário do Estado do Pará (CESUPA),</p>
            <p>para compartilhar Informações sobre a menopausa com conteúdo educativo sobre saúde da mulher, bem-estar e qualidade de vida.</p>
          </SectionDescription>
        </SectionHeader>
        <hr />
      </AboutUs>
      <FormContainer id="form">
        <SectionHeader>
          <SectionTitle>Avalie seus Sintomas</SectionTitle>
          <SectionDescription>
            <p>Nosso formulário para verificação do estado da Menopausa.</p>
            <p>
              Insira suas informações e descubra mais sobre o que você pode
              passar por, e quem pode ajudar.
            </p>
          </SectionDescription>
          <SectionDescription>
          <p>Caso não esteja sentindo algum dos sintomas, não precisa marcar</p>
          </SectionDescription>
        </SectionHeader>
        <Form />
      </FormContainer>
      <ResourcesContainer id="resources">
        <SectionHeader>
          <SectionTitle>Recursos</SectionTitle>
        </SectionHeader>
        <InfoGrid>
          <InfoCard
            title="Avalie seus sintomas"
            description="Existem diversos sintomas que podem aparecer durante a menopausa. Verifique como você se encontra e entenda melhor como buscar acompanhamento médico"
          />
          <InfoCard
            title="Conhecendo o que é"
            description=" Está em dúvida sobre se você está na menopausa? Não sabe exatamente o que é menopausa e o que acontece com o seu corpo nesse período? Aqui nós explicamos"
          />
          <InfoCard
            title="Bem-estar"
            description="Alimentação com orientações nutricionais. Atividades físicas. Cuidados com a atividade sexual. Tratamentos e terapias. Cuidando da saúde mental"
          />
          <InfoCard
            title="Profissionais"
            description="A menopausa é uma fase natural da vida da mulher. Para garantir uma transição suave e saudável, contar com o apoio de profissionais especializados é fundamental"
          />
          <InfoCard
            title="Material de apoio"
            description="Mitos e verdades. Fitoterápicos para Aliviar os Sintomas da Menopausa. Recursos adicionais: Manuais; Guias; Infográficos; Associações"
          />
        </InfoGrid>
      </ResourcesContainer>
      <AccordionContainer id="questions">
        <SectionHeader>
          <QuestionLogo />
          <SectionTitle>Tem Dúvidas?</SectionTitle>
          <SectionDescription>
            <p>
              Quer saber mais sobre a Menopausa? Não sabe quais os sintomas?
            </p>
            <p>Está procurando mais informações sobre tratamentos?</p>
            <p>Tudo isso e outras perguntas podem ser respondidas aqui.</p>
          </SectionDescription>
        </SectionHeader>
        <Accordion title="O que é menopausa?">
            A menopausa é marcada pela ausência de menstruação por 12 meses consecutivos.
            Antes disso, a mulher passa por uma fase de transição chamada climatério, que pode incluir diversos sintomas. A menopausa ocorre, em média, aos 50 anos.
        </Accordion>
        <Accordion title="O que é climatério?">
            O climatério há uma diminuição das funções ovarianas, fazendo com que os ciclos menstruais se tornem irregulares, até cessarem por completo.
            O climatério inicia antes da menopausa, por volta dos 40 anos, e se estende até depois dela, até os 65 anos.
        </Accordion>
        <Accordion title="Quais são os sintomas mais comuns?">
            <p>Os sintomas mais comuns no climatério são: Menstruação irregular, Ondas de calor, Alteração no sono, Oscilações de humor.</p><br></br>
            <p>Os sintomas mais comuns na menopausa são: Ondas de calor, Alteração no sono, Oscilações de humor, Alterações urogenitais.</p>
        </Accordion>
        <Accordion title="O que acontece com os hormônios?">
            No climatério, os níveis de estrogênio e progesterona, hormônios femininos, diminuem de forma permanente.
            A chegada do climatério provoca irregularidades menstruais, hemorragias ou escassez no fluxo.
        </Accordion>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="types">
        <SectionHeader>
          <SectionTitle>Os Principais Tipos de Menopausa</SectionTitle>
        </SectionHeader>
        <Accordion title="Menopausa Natural">
          <p><Bold>O que é:</Bold> É o tipo mais comum, ocorrendo espontaneamente entre os 45 e 55 anos, devido à depleção natural dos óvulos nos ovários.</p>
          <p><Bold>Causas:</Bold> Envelhecimento fisiológico dos ovários.</p>
        </Accordion>
        <Accordion title="Menopausa Induzida">
          <p><Bold>O que é:</Bold> Ocorre precocemente devido a fatores externos, como cirurgias ou tratamentos médicos.</p>
          <p><Bold>Causas:</Bold></p><br></br>
          <p><Bold>-Cirúrgica:</Bold> remoção dos ovários (ooforectomia) por razões médicas;</p>
          <p><Bold>-Tratamentos:</Bold> quimioterapia, radioterapia, ou outros tratamentos que danificam os ovários.</p>
        </Accordion>
        <Accordion title="Menopausa Precoce">
          <p><Bold>O que é:</Bold> Ocorre antes dos 40 anos, tanto de forma natural quanto induzida.</p>
          <p><Bold>Causas:</Bold></p><br></br>
          <p><Bold>-Genética:</Bold> Mutações genéticas podem levar à falência ovariana precoce.</p>
          <p><Bold>-Autoimunes:</Bold> Doenças autoimunes podem atacar os ovários.</p>
          <p><Bold>-Iatrogênica:</Bold> Causada por tratamentos médicos.</p>
        </Accordion>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="treatments">
        <SectionHeader>
          <SectionTitle>
            Tratamentos: Opções de tratamento médico e complementar
          </SectionTitle>
          <SectionDescription>
            <p>
              Terapia hormonal também conhecida como terapêutica hormonal de
              substituição (THS) e tratamento hormonal da menopausa (THM).
            </p>
            <p>
              É o tratamento que adiciona, bloqueia ou remove hormônios. Na
              menopausa, hormônios são administradas para ajustar níveis
              hormonais baixos e aliviar os fogachos e outros sintomas da
              menopausa.
            </p>
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Terapêutica estrogênica local">
         Quando o tratamento estrogênico é liberado diretamente na vagina. É um tratamento estrogênico local.
         Pode ser na forma de anel, creme ou pessário introduzido na vagina.
        </Accordion>
        <Accordion title="Terapêutica hormonal sistêmica">
         Disponível em comprimido, patch transdérmico, anel, gel ou crèmeneste tratamento doses mais elevadas de estrogênio/progestagênio são absorvidas em todo o corpo.
        </Accordion>
        <Accordion title="Práticas Integrativas e Complementares (PICS)">
         Podem ser uma estratégia de cuidado para ajudar a aliviar os sintomas da menopausa.
         Algumas PICS que podem ser utilizadas para este fim são:
         Acupuntura, Fitoterapia, Hipnose, Aromaterapia, Moxabustão, Yoga, Meditação, Respiração guiada
        </Accordion>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="professionals">
        <SectionHeader>
          <SectionTitle>Profissionais especializados em menopausa</SectionTitle>
          <SectionDescription>
            <p>
              A menopausa é uma fase natural da vida da mulher, marcada por
              diversas mudanças hormonais e físicas.{" "}
            </p>
            Para garantir uma transição suave e saudável, contar com o apoio de
            profissionais especializados é fundamental.
          </SectionDescription>
          <SectionDescription>
            Quais são os principais profissionais que podem te ajudar durante a
            menopausa?
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Ginecologista">
         <p>
           O ginecologista é o primeiro profissional que a maioria das mulheres consulta ao perceber os sintomas da menopausa.
           Ele é o especialista em saúde reprodutiva feminina e pode:
         </p><br></br>
         <p>
           <Bold>Diagnosticar a menopausa:</Bold> Através de exames clínicos e de laboratório,
           o ginecologista confirmará se você está passando pela menopausa e avaliará a intensidade dos sintomas.
         </p><br></br>
         <p>
           <Bold>Prescrever tratamentos:</Bold> Dependendo dos seus sintomas e condições de saúde,
           o ginecologista poderá indicar tratamentos como a terapia de reposição hormonal (TRH),
           medicamentos para aliviar as ondas de calor e outros tratamentos.
         </p><br></br>
         <p><Bold>Acompanhamento:</Bold> O ginecologista realizará acompanhamentos regulares para monitorar sua saúde e ajustar o tratamento, se necessário.</p>
        </Accordion>
        <Accordion title="Endocrinologista">
         <p>O endocrinologista é especialista em hormônios. Ele pode ser consultado em casos mais complexos, como:</p><br></br>
         <p><Bold>Desequilíbrios hormonais:</Bold> O endocrinologista pode ajudar a identificar e tratar desequilíbrios hormonais que podem estar causando sintomas mais intensos.</p><br></br>
         <p><Bold>Tratamento personalizado:</Bold> Ele pode oferecer um tratamento mais personalizado, considerando seus outros problemas de saúde e histórico médico.</p>
        </Accordion>
        <Accordion title="Nutricionista">
         <p>Uma alimentação equilibrada é fundamental para o bem-estar durante a menopausa. O nutricionista pode te ajudar a:</p><br></br>
         <p><Bold>Planejar uma dieta:</Bold> Ele irá elaborar um plano alimentar personalizado, considerando seus gostos e necessidades nutricionais.</p><br></br>
         <p><Bold>Controlar os sintomas:</Bold> Uma dieta adequada pode ajudar a controlar sintomas como ondas de calor, insônia e alterações de humor.</p>
        </Accordion>
        <Accordion title="Fisioterapeuta">
          <p>A fisioterapia pode ser muito benéfica para aliviar os sintomas da menopausa, como:</p><br></br>
          <p>
            <Bold>Fortalecimento muscular:</Bold> A fisioterapia pode ajudar a fortalecer os músculos do assoalho pélvico,
            melhorando a incontinência urinária e o prazer sexual.
          </p><br></br>
          <p><Bold>Alívio de dores:</Bold> A fisioterapia pode aliviar dores nas articulações e nos músculos, comuns na menopausa.</p>
        </Accordion>
        <Accordion title="Fitoterapeuta">
         O fitoterapeuta é um profissional de saúde (ex.: médico, farmacêutico, nutricionista, fisioterapeuta, etc.) especializado no uso de plantas medicinais para tratar, prevenir ou aliviar doenças.
         Por meio de uma avaliação do paciente, considerando seu histórico clínico, sintomas e necessidades,
         ele indica o uso de remédios naturais à base de plantas e ervas medicinais que podem ser utilizadas para ajudar a aliviar os sintomas da menopausa de forma segura e com devido acompanhamento.
        </Accordion>
        <Accordion title="Psicólogo">
         <p>As mudanças hormonais da menopausa podem afetar o humor e o bem-estar emocional. O psicólogo pode te ajudar a:</p><br></br>
         <p><Bold>Lidar com as emoções:</Bold> A terapia pode te ajudar a lidar com as mudanças emocionais e a desenvolver estratégias para lidar com o estresse.</p><br></br>
         <p><Bold>Melhorar a qualidade de vida:</Bold> O psicólogo pode te ensinar técnicas de relaxamento e meditação para melhorar sua qualidade de vida.</p>
        </Accordion>
        <SectionDescription>
          Quando procurar ajuda? Se você está sentindo desconforto ou suas
          atividades diárias estão sendo prejudicadas pelos sintomas da
          menopausa, procure um profissional de saúde. Quanto mais cedo iniciar
          o tratamento, maiores as chances de controlar os sintomas e ter uma
          melhor qualidade de vida.
        </SectionDescription>
        <SectionDescription>
          Lembre-se: A menopausa é uma fase normal da vida, e com o
          acompanhamento adequado, você pode passar por ela de forma tranquila e
          saudável.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="fitoterapics">
        <SectionHeader>
          <SectionTitle>
            Fitoterápicos para aliviar os sintomas da menopausa: Uma abordagem
            natural
          </SectionTitle>
        </SectionHeader>
        <Accordion title="Principais Fitoterápicos Utilizados na Menopausa">
          <p>Diversos fitoterápicos demonstraram potencial para aliviar os sintomas da menopausa. Alguns dos mais utilizados são:</p><br></br>
          <p>
          <Bold>-Copo-de-leite (Actaea racemosa):</Bold> É um dos fitoterápicos mais estudados para o tratamento dos sintomas da menopausa.
          Possui ação semelhante ao estrogênio, ajudando a reduzir fogachos, suores noturnos e irritabilidade.
          </p><br></br>
          <p>
          <Bold>-Soja e seus derivados:</Bold> Rica em isoflavonas, que são um tipo de fitoestrogênio, substâncias com estrutura semelhante ao estrogênio,
          a soja pode ajudar a aliviar os sintomas vasomotores (fogachos e suores) e outros sintomas da menopausa.
          </p><br></br>
          <p><Bold>-Trevo vermelho:</Bold> Também rico em isoflavonas, o trevo vermelho pode ajudar a reduzir a frequência e a intensidade dos fogachos.</p><br></br>
          <p>
            <Bold>-Sálvia:</Bold> Possui propriedades antioxidantes e anti-inflamatórias que podem ajudar a aliviar os sintomas da menopausa,
            como suores noturnos e irritabilidade.
          </p><br></br>
          <p><Bold>-Ginseng:</Bold> Ajuda a reduzir a fadiga e a melhorar a concentração, sintomas comuns na menopausa.</p><br></br>
          <p><Bold>-Crataegus (Espinheiro-alvar):</Bold> Contém fitoestrogênios que podem ajudar a equilibrar os níveis hormonais.</p><br></br>
          <p>
            <Bold>-Cimicifuga (Ervilhas-de-são-cristóvão):</Bold> Também conhecida como Erva-de-são-cristóvão,
            possui fitoestrógenos que podem ajudar a aliviar sintomas da menopausa.
          </p><br></br>
          <p><Bold>-Vitex agnus-castus (Agnus castus):</Bold> Conhecida por seus efeitos equilibradores hormonais.</p><br></br>
          <p><Bold>-Angelica sinensis (Dong Quai):</Bold> Contém fitoestrogênios e é usada tradicionalmente para equilibrar os hormônios.</p><br></br>
          <p><Bold>-Tribulus terrestris (Tribulus):</Bold> Possui fitoestrógenos e é usada em suplementos para a saúde hormonal.</p><br></br>
          <p><Bold>-Brócolis:</Bold> Contém fitoestrogênios que podem ajudar a equilibrar os níveis hormonais.</p><br></br>
          <p><Bold>-Chá verde:</Bold> Também possui fitoestrógenos que podem ter efeitos benéficos na saúde hormonal.</p><br></br>
          <p>
            <Bold>-Amora negra (Morus nigra):</Bold> Popularmente conhecida como amora, é uma planta que pode ser usada para tratar os sintomas da menopausa.
            As folhas da amora são ricas em fitoestrógenos e podem ser consumidas na forma de chá ou tintura.
            Pode ajudar a reduzir as ondas de calor, melhorar a memória e a qualidade do sono.
            </p><br></br>
          <br></br><p>
            Essas plantas podem ser encontradas em forma de medicamentos fitoterápicos, suplementos ou consumidas diretamente por meio de alimentos e chás.
            No entanto, é sempre importante consultar um médico antes de iniciar qualquer suplementação, especialmente se houver
            histórico de câncer de mama ou outras condições hormonais.
          </p><br></br>
          <p>
            Existem alguns adaptógenos que podem ser considerados mais seguros para mulheres na menopausa com histórico de câncer de mama,
            embora sempre seja importante consultar um médico antes de iniciar qualquer suplementação.
          </p><br></br>
          <p>Adaptógenos Seguros</p>
          <p>Alguns adaptógenos que podem ajudar a aliviar os sintomas da menopausa sem efeitos estrogênicos incluem:</p><br></br>
          <p><Bold>-Rhodiola rosea:</Bold> Pode ajudar a reduzir a fadiga e melhorar o humor.</p>
          <p><Bold>-Eleuthero (Ginseng siberiano):</Bold> Pode ajudar a aumentar a resistência ao estresse.</p>
          <p><Bold>-Ashwagandha:</Bold> Conhecida por suas propriedades calmantes e equilibradoras.</p>
          <p><Bold>-Schisandra chinensis:</Bold> Pode ajudar a melhorar a resistência ao estresse e a função cognitiva.</p>
        </Accordion>
        <Accordion title="Como os Fitoterápicos atuam?">
          <p>Os fitoterápicos atuam de diversas formas para aliviar os sintomas da menopausa:</p><br></br>
          <p>
            <Bold>Mimetizando a ação dos hormônios:</Bold> Algumas substâncias presentes nos fitoterápicos possuem estrutura semelhante aos hormônios femininos,
            ajudando a equilibrar os níveis hormonais e a reduzir os sintomas.
          </p><br></br>
          <p>
            <Bold>Aumentando a produção de neurotransmissores:</Bold> Alguns fitoterápicos podem aumentar a produção de neurotransmissores como a serotonina e a dopamina,
            que estão relacionados ao humor e ao sono.
          </p><br></br>
          <p>
            <Bold>Ação antioxidante e anti-inflamatória:</Bold> Muitas plantas medicinais possuem propriedades antioxidantes e anti-inflamatórias,
            que ajudam a combater os radicais livres e a reduzir a inflamação, processos que podem contribuir para o desenvolvimento dos sintomas da menopausa.
          </p>
        </Accordion>
        <Accordion title="Benefícios dos Fitoterápicos">
          <p>
            <Bold>Alívio natural dos sintomas:</Bold> Os fitoterápicos oferecem uma alternativa natural para o tratamento dos sintomas da menopausa,
            com menos efeitos colaterais em comparação com os tratamentos hormonais.
          </p><br></br>
          <p>
            <Bold>Melhora da qualidade de vida:</Bold> Ao aliviar os sintomas,
            os fitoterápicos podem melhorar significativamente a qualidade de vida das mulheres durante a menopausa.
          </p><br></br>
          <p>
            <Bold>Prevenção de doenças crônicas:</Bold> Algumas plantas medicinais possuem propriedades que podem ajudar a prevenir doenças crônicas,
            como doenças cardiovasculares e osteoporose.
          </p>
        </Accordion>
        <Accordion title="Considerações Importantes">
          <p>
            <Bold>Consulta médica:</Bold> É fundamental consultar um médico ou profissional de saúde antes de iniciar qualquer tratamento com fitoterápicos,
            pois eles podem interagir com outros medicamentos e causar efeitos colaterais.
          </p><br></br>
          <p>
            <Bold>Qualidade dos produtos:</Bold> Opte por produtos de marcas confiáveis e com registro na Anvisa,
            garantindo a qualidade e a segurança dos fitoterápicos.
          </p><br></br>
          <p><Bold>Paciência:</Bold> Os resultados do tratamento com fitoterápicos podem levar algumas semanas para serem observados.</p>
        </Accordion>
        <SectionDescription>
          Lembre-se: Os fitoterápicos não substituem o acompanhamento médico e
          devem ser utilizados como complemento ao tratamento convencional.
        </SectionDescription>
        <SectionDescription>
          Isenção de responsabilidade: As informações fornecidas neste texto têm
          caráter informativo e não substituem a consulta médica.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="diseases">
        <SectionHeader>
          <SectionTitle>
            Relação Entre A Menopausa E Aparecimento de Doenças
          </SectionTitle>
        </SectionHeader>
        <Accordion title="Sou diabética?">
          <p>
            A diminuição da produção de estrogênio e progesterona durante a menopausa pode levar a uma maior resistência à insulina.
            Isso acontece porque esses hormônios ajudam a regular o metabolismo e a sensibilidade à insulina.
          </p><br></br>
          <p>Exame mais comum para diagnóstico: glicemia em jejum (sangue).</p><br></br>
          <p>Os valores de referência são:</p><br></br>
          <p>-Normal: inferior a 99 mg/dL</p>
          <p>-Pré-diabetes: entre 100 a 125mg/dL</p>
          <p>-Diabetes: acima de 126 mg/dL</p>
        </Accordion>
        <Accordion title="Como sei se estou obesa?">
          <p>
            A menopausa pode causar uma redução do metabolismo, o que pode levar ao ganho de peso, especialmente na região abdominal.
            A gordura abdominal pode contribuir para a resistência à insulina.
          </p><br></br>
          <p>
            Através da estimativa do Índice de Massa Corporal (IMC). É feito por meio da divisão do peso (em kg) pela altura (em metros) ao quadrado.
            A classificação da obesidade no Brasil é feita com base no Índice de Massa Corporal (IMC), de acordo com o seguinte padrão:
          </p><br></br>
          <p>Fórmula para calcular o índice de massa corporal:  IMC = peso (kg) / (altura (m) x altura (m))</p>
          <p>-Abaixo de 18,5: Abaixo do peso</p>
          <p>-Entre 18,5 e 24,9: Peso normal</p>
          <p>-Entre 25 e 29,9: Sobrepeso</p>
          <p>-Entre 30 e 34,9: Obesidade grau I</p>
          <p>-Entre 35 e 39,9: Obesidade grau II</p>
          <p>-Acima de 40: Obesidade grau III, também conhecida como obesidade mórbida</p>
        </Accordion>
        <Accordion title="Sou hipertensa?">
          <p>
            A menopausa está relacionada com o aumento do risco de hipertensão arterial, pois a diminuição do estrogênio pode dificultar o fluxo sanguíneo.
            Para diagnosticar a hipertensão arterial, é possível medir a pressão arterial no consultório, ou utilizar o MAPA.
          </p><br></br>
          <p>
            Se a medição for feita no consultório, é importante validá-la com medições repetidas em duas ou mais visitas médicas.
            De acordo com o Colégio Brasileiro de Cardiologia (CBC), a classificação da hipertensão arterial sistêmica é a seguinte:
          </p><br></br>
          <p>-PA não-elevada: PAS(máxima) &lt; 120 mmHg e PAD(mínima) &lt; 70 mmHg</p>
          <p>-PA elevada: PAS(máxima) 120-139 mmHg e PAD 70-89 mmHg(mínima)</p>
          <p>-Hipertensão arterial sistêmica: PAS(máxima) ≥ 140 mmHg ou PAD(mínima) ≥ 90 mmHg</p>
        </Accordion>
        <Accordion title="Tenho dislipidemia?">
          <p>
            A dislipidemia é uma condição que se caracteriza por níveis elevados de lipídios, ou seja, gorduras, no sangue.
            A diminuição dos níveis de estrogênio está diretamente ligado a um aumento do colesterol.
            A diminuição da progesterona pode levar a um aumento do colesterol LDL (lipoproteína de baixa densidade), conhecido como colesterol ruim.
            A redução dos níveis de estrogênio também está relacionada a uma diminuição do colesterol HDL (lipoproteína de alta densidade),
            conhecido como colesterol bom.
          </p><br></br>
          <p>
            O diagnóstico é feito por meio de exames de sangue que medem a quantidade de lipídios na corrente sanguínea,
            como o colesterol total, triglicerídeos, HDL-C e LDL-C.
          </p>
        </Accordion>
        <Accordion title="Osteoporose ou osteopenia?">
        A principal diferença entre osteopenia e osteoporose é a quantidade de massa óssea perdida.
        A osteopenia é uma condição pré-osteoporótica, que pode ser revertida ou retardada se detectada cedo.
        A osteoporose, por sua vez, é uma doença sem cura e difícil de reverter.
        </Accordion>
        <Accordion title="Tenho osteoporose?">
          <p>
            A menopausa é marcada por uma diminuição significativa dos níveis de estrogênio,
            um hormônio que estabiliza o metabolismo ósseo e protege os ossos das mulheres.
            Sem o estrogênio, o processo de perda de densidade óssea acelera, tornando os ossos mais frágeis.
          </p><br></br>
          <p>
            A principal diferença entre osteopenia e osteoporose é a quantidade de massa óssea perdida.
            A osteopenia é uma condição pré-osteoporótica, que pode ser revertida ou retardada se detectada cedo.
            A osteoporose, por sua vez, é uma doença sem cura e difícil de reverter.
          </p><br></br>
          <p>O diagnóstico é feito por meio da densitometria óssea (DMO), um exame que avalia a densidade mineral óssea (DMO)</p><br></br>
          <p>-Osteopenia: Até 25% de perda de massa óssea</p>
          <p>-Osteoporose: Mais de 25% de perda de massa óssea</p>
        </Accordion>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="nutrition">
        <SectionHeader>
          <SectionTitle>Alimentação equilibrada para a menopausa</SectionTitle>
          <SectionDescription>
            Segundo a Sociedade Brasileira de Ginecologia e o Instituto
            Internacional de Menopausa, algumas orientações nutricionais são
            especialmente importantes:
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Macronutrientes Essenciais">
          <p>
            <Bold>Cálcio e Vitamina D:</Bold> Essenciais para a saúde óssea, prevenindo a osteoporose, que é mais comum na menopausa.
            Fontes: leite e derivados, vegetais de folhas verdes escuras, leguminosas, peixes gordurosos e a exposição solar.
          </p><br></br>
          <p>
            <Bold>Proteínas:</Bold> Importantes para a manutenção da massa muscular, que tende a diminuir com a idade.
            Fontes: carnes magras, peixes, ovos, leguminosas, grãos integrais e derivados de leite.
          </p><br></br>
          <p><Bold>Carboidratos:</Bold> Fornecem energia e devem ser prioritariamente complexos, presentes em frutas, legumes, verduras e grãos integrais.</p>
        </Accordion>
        <Accordion title="Micronutrientes e Outros Nutrientes">
          <p>
            <Bold>Fitoestrogênios:</Bold> Compostos encontrados em plantas que mimetizam o efeito do estrogênio no organismo,
            podendo aliviar alguns sintomas da menopausa. Fontes: soja, linhaça, grãos integrais, frutas vermelhas e legumes.
          </p><br></br>
          <p>
            <Bold>Ômega-3:</Bold> Ajuda a reduzir a inflamação e o risco de doenças cardiovasculares.
            Fontes: peixes gordurosos (salmão, sardinha), linhaça e chia.
          </p><br></br>
          <p>
            <Bold>Fibras:</Bold> Promovem a saciedade, regulam o intestino e ajudam a controlar os níveis de açúcar no sangue.
            Fontes: frutas, legumes, verduras e grãos integrais.
          </p><br></br>
          <p>
            <Bold>Vitamina B12:</Bold> Importante para a saúde do sistema nervoso.
            Fontes: carnes, peixes, ovos, leite e derivados.
          </p>
        </Accordion>
        <Accordion title="Padrões Alimentares Benéficos">
          <p>
            <Bold>Dieta Mediterrânea:</Bold> Rica em frutas, legumes, verduras, cereais integrais, azeite de oliva, peixes e leguminosas,
            que é considerada uma das mais saudáveis e pode ajudar a prevenir diversas doenças.
          </p><br></br>
          <p>
            <Bold>Alimentação Cardioprotetora:</Bold> Prioriza alimentos que ajudam a reduzir o risco de doenças cardiovasculares,
            como frutas, legumes, verduras, grãos integrais, peixes e aves.
          </p><br></br>
          <p><Bold>Restrição Calórica:</Bold> Manter um peso saudável é fundamental para prevenir diversas doenças, incluindo diabetes e doenças cardiovasculares.</p>
          <br></br>
          <p>
            <Bold>Uso do sal de ervas:</Bold> Para reduzir o consumo do sódio e prevenir hipertensão. Uma receita básica leva
            os seguintes ingredientes: 1/2 xícara de sal marinho grosso, 1/4 xícara de alecrim seco, 1/4 xícara de orégano seco,
            1/4 xícara de manjericão seco.
          </p>
          <p>
            Modo de preparo: Em um processador de alimentos ou liquidificador,
            coloque todos os ingredientes e pulse até que as ervas estejam bem picadas e misturadas ao sal.
            Transfira o sal de ervas para um pote de vidro com tampa e armazene em local fresco e seco.
          </p>
        </Accordion>
        <Accordion title="Outros Cuidados">
          <p><Bold>Hidratação:</Bold> Beber bastante água ao longo do dia é essencial para manter o organismo funcionando corretamente.</p><br></br>
          <p>
            <Bold>Moderação no consumo de alimentos processados e bebidas alcoólicas:</Bold> Esses alimentos são ricos em açúcares,
            sódio e gordura saturada, que podem prejudicar a saúde.
          </p>
        </Accordion>
        <SectionDescription>
          É importante ressaltar que cada mulher é única e as necessidades
          nutricionais podem variar. Por isso, é fundamental consultar um
          nutricionista para elaborar um plano alimentar personalizado e
          adequado às suas necessidades e preferências.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="physical">
        <SectionHeader>
          <SectionTitle>
            Atividades físicas mais recomendadas para mulheres na menopausa
          </SectionTitle>
          <SectionDescription>
            <p>
              A atividade física é um pilar fundamental para a saúde durante a
              menopausa,
            </p>
            <p>
              auxiliando no alívio dos sintomas, na prevenção de doenças e na
              melhoria da qualidade de vida.
            </p>
          </SectionDescription>
          <SectionDescription>
            <p>Mas quais atividades são mais indicadas? Vamos explorar!</p>
            <p>
              A ciência aponta que os seguintes tipos de exercícios são
              especialmente benéficos para as mulheres nessa fase:
            </p>
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Exercícios Aeróbicos">
          <p><Bold>Caminhada:</Bold> Uma das atividades mais acessíveis e eficazes, a caminhada fortalece o coração, ajuda a controlar o peso e melhora a disposição.</p><br></br>
          <p><Bold>Natação:</Bold> De baixo impacto, a natação trabalha todo o corpo, alivia as dores nas articulações e é excelente para a saúde cardiovascular.</p><br></br>
          <p><Bold>Ciclismo:</Bold> Fortalece as pernas, melhora a resistência e pode ser praticado em diferentes intensidades.</p>
        </Accordion>
        <Accordion title="Treinamento de Força">
          <p><Bold>Musculação:</Bold> Essencial para fortalecer os ossos e prevenir a osteoporose, comum na menopausa.</p><br></br>
          <p><Bold>Pilates:</Bold> Combina força, flexibilidade e alongamento, melhorando a postura e a consciência corporal.</p><br></br>
          <p><Bold>Yoga:</Bold> Além de fortalecer os músculos, a yoga promove o relaxamento e o bem-estar mental.</p>
        </Accordion>
        <Accordion title="Atividades de Impacto Moderado">
          <p><Bold>Dança:</Bold> Divertida e eficaz, a dança trabalha diversos grupos musculares e melhora a coordenação.</p><br></br>
          <p><Bold>Hidroginástica:</Bold> De baixo impacto, a hidroginástica é ideal para quem busca um exercício mais suave, mas eficaz.</p>
        </Accordion>
        <Accordion title="Por que essas atividades são tão importantes?">
          <p><Bold>Fortalecimento ósseo:</Bold> Aumenta a densidade mineral óssea, prevenindo a osteoporose.</p><br></br>
          <p><Bold>Melhora da força muscular:</Bold> Aumenta a força e a resistência muscular, prevenindo quedas e fraturas.</p><br></br>
          <p><Bold>Controle do peso:</Bold> Auxilia na perda de peso e na manutenção do peso ideal.</p><br></br>
          <p><Bold>Redução do estresse:</Bold> Libera endorfinas, hormônios que proporcionam bem-estar e reduzem o estresse.</p><br></br>
          <p><Bold>Melhora da qualidade do sono:</Bold> A prática regular de exercícios contribui para um sono mais reparador.</p><br></br>
          <p><Bold>Proteção cardiovascular:</Bold> Reduz o risco de doenças cardiovasculares.</p>
        </Accordion>
        <Accordion title="Recomendações">
          <p>
            <Bold>Inicie de forma gradual:</Bold> Consulte um profissional de educação física para montar um programa de exercícios adequado
            às suas necessidades e condições físicas.
          </p><br></br>
          <p><Bold>Seja consistente:</Bold> Pratique atividades físicas regularmente, pelo menos 30 minutos por dia, na maioria dos dias da semana.</p><br></br>
          <p><Bold>Varie as atividades:</Bold> Alterne os tipos de exercícios para evitar a rotina e manter a motivação.</p><br></br>
          <p><Bold>Ouça seu corpo:</Bold> Respeite seus limites e pare se sentir dor.</p>
        </Accordion>
        <SectionDescription>
          Lembre-se: A atividade física é um investimento na sua saúde e
          qualidade de vida!
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="sexual">
        <SectionHeader>
          <SectionTitle>Cuidados com a saúde sexual</SectionTitle>
          <SectionDescription>
            <p>
              A menopausa traz diversas mudanças no corpo da mulher, e a vida
              sexual é uma das áreas que pode ser afetada.
            </p>
            <p>
              É importante entender que a sexualidade não tem fim com a
              menopausa,
            </p>
            <p>
              mas alguns cuidados especiais podem tornar a experiência mais
              prazerosa.
            </p>
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Principais cuidados">
          <p>
            <Bold>Lubrificação:</Bold> O ressecamento vaginal é um dos sintomas mais comuns da menopausa e pode causar desconforto durante a relação sexual.
            O uso de lubrificantes à base de água é altamente recomendado para reduzir o atrito e aumentar o prazer.
          </p><br></br>
          <p>
            <Bold>Hidratação vaginal:</Bold> Além dos lubrificantes, hidratantes vaginais podem ajudar a manter a umidade da região e aliviar a secura.
            Comunicação: É fundamental conversar com o parceiro sobre as mudanças que estão acontecendo no seu corpo e sobre suas necessidades.
            A comunicação aberta e honesta é a chave para uma vida sexual satisfatória.
          </p><br></br>
          <p>
            <Bold>Exploração:</Bold> A menopausa pode ser um momento para redescobrir a própria sexualidade e explorar novas formas de prazer.
            Experimentar diferentes posições, carícias e brinquedos sexuais pode tornar a relação sexual mais interessante e prazerosa.
          </p><br></br>
          <p><Bold>Cuidados com a higiene:</Bold> Manter a higiene íntima é essencial para prevenir infecções e garantir o conforto durante a relação sexual.</p><br></br>
          <p>
            <Bold>Acompanhamento médico:</Bold> Consulte seu ginecologista para avaliar a necessidade de tratamentos hormonais ou outros recursos que possam auxiliar
            no alívio dos sintomas da menopausa e melhorar a vida sexual.
          </p>
        </Accordion>
        <Accordion title="Outras dicas importantes">
          <p><Bold>Relaxamento:</Bold> Tente criar um ambiente relaxante e propício para o prazer, livre de distrações e preocupações.</p><br></br>
          <p>
            <Bold>Autocuidado:</Bold> Cuide da sua saúde física e mental. Uma boa alimentação, prática de exercícios físicos e sono de qualidade
            contribuem para o bem-estar geral e para uma vida sexual mais satisfatória.
          </p><br></br>
          <p><Bold>Aceitação:</Bold> Aceite as mudanças que ocorrem no seu corpo e não tenha vergonha de buscar ajuda.</p><br></br>
          <p>
            É importante lembrar que a menopausa não é uma doença, mas sim uma fase natural da vida da mulher.
            Com os cuidados adequados, é possível manter uma vida sexual ativa e prazerosa.
          </p><br></br>
          <p>Se você tiver alguma dúvida ou preocupação, não hesite em conversar com seu médico ou um profissional de saúde especializado em sexualidade.</p>
        </Accordion>
        <Accordion title="Possíveis tópicos para explorar">
          <p>Tratamentos hormonais para a menopausa e seus efeitos na sexualidade.</p><br></br>
          <p>Terapias alternativas para aliviar os sintomas da menopausa.</p><br></br>
          <p>Como lidar com a diminuição do desejo sexual na menopausa.</p><br></br>
          <p>A importância do toque e da intimidade na menopausa.</p>
        </Accordion>
        <SectionDescription>
          Lembre-se: a sexualidade é um aspecto importante da qualidade de vida
          e merece ser cuidada em todas as fases da vida.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="mental">
        <SectionHeader>
          <SectionTitle>Cuidando da saúde mental e emocional</SectionTitle>
          <SectionDescription>
            A menopausa, além das mudanças físicas, traz consigo um conjunto de
            desafios emocionais que podem impactar significativamente a
            qualidade de vida da mulher. A Sociedade Brasileira de Psiquiatria
            destaca a importância de cuidar da saúde mental nesse período, e
            oferece algumas orientações:
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Entendendo as Alterações Hormonais e suas Consequências">
          <p>
            <Bold>Oscilações Hormonais:</Bold> As variações nos níveis de hormônios como o estrogênio e a progesterona podem desencadear uma série de sintomas emocionais,
            como irritabilidade, ansiedade, tristeza e dificuldade de concentração.
          </p><br></br>
          <p><Bold>Impacto na Autoestima:</Bold> As mudanças corporais e a sensação de perda da fertilidade podem afetar a autoestima e a autoimagem da mulher.</p>
        </Accordion>
        <Accordion title="Estratégias para Promover o Bem-Estar Emocional">
          <p>
            <Bold>Terapia:</Bold> A psicoterapia pode ser uma ferramenta poderosa para lidar com as emoções,
            desenvolver estratégias de enfrentamento e melhorar a qualidade de vida.
          </p><br></br>
          <p>
            <Bold>Grupos de Apoio:</Bold> Compartilhar experiências com outras mulheres que estão passando pela mesma fase pode ser muito reconfortante
            e oferecer novas perspectivas.
          </p><br></br>
          <p><Bold>Atividades Relaxantes:</Bold> Práticas como yoga, meditação e tai chi podem ajudar a reduzir o estresse e promover o relaxamento.</p><br></br>
          <p><Bold>Exercícios Físicos:</Bold> A atividade física regular libera endorfinas, que são neurotransmissores que promovem o bem-estar e combatem a depressão.</p><br></br>
          <p>
            <Bold>Alimentação Saudável:</Bold> Uma dieta equilibrada fornece os nutrientes necessários para o bom funcionamento do organismo e
            pode contribuir para a melhoria do humor.
          </p><br></br>
          <p>
            <Bold>Higiene do Sono:</Bold> Priorizar o sono é fundamental para a saúde mental.
            Estabeleça horários regulares para dormir e acordar. Crie uma rotina relaxante e um ambiente propício antes de dormir e evite estimulantes, como
            o uso de eletrônicos nas horas que antecedem o sono, cafeína, álcool, e nicotina.
          </p>
        </Accordion>
        <Accordion title="Reconhecendo os Sinais de Alerta">
          <p><Bold>Mudanças de Humor Intensas:</Bold> Sentimentos de tristeza profunda, desânimo e apatia que persistem por longos períodos.</p><br></br>
          <p><Bold>Ansiedade Excessiva:</Bold> Dificuldade em se concentrar, irritabilidade constante, insônia e preocupações excessivas.</p><br></br>
          <p><Bold>Isolamento Social:</Bold> Evitar contato com amigos e familiares, perdendo o interesse em atividades que antes eram prazerosas.</p><br></br>
          <p><Bold>Pensamentos Negativos:</Bold> Dificuldade em encontrar prazer nas coisas, pensamentos pessimistas e ideias de inutilidade.</p>
        </Accordion>
        <Accordion title="Quando Procurar Ajuda Profissional?">
          Se você estiver enfrentando dificuldades para lidar com as emoções,
          sentir-se sobrecarregada ou perceber que os sintomas estão interferindo na sua vida,
          não hesite em procurar ajuda de um profissional de saúde mental.
          Um psiquiatra ou psicólogo poderá oferecer o tratamento adequado e ajudá-la a superar esse momento.
        </Accordion>
        <SectionDescription>
          Lembre-se: A menopausa é uma fase natural da vida, e com as
          estratégias corretas, é possível vivenciá-la de forma mais tranquila e
          saudável.
        </SectionDescription>
        <SectionDescription>
          Para mais informações, consulte um profissional de saúde.
        </SectionDescription>
        <hr />
      </AccordionContainer>
      <AccordionContainer id="myths">
        <SectionHeader>
          <SectionTitle>Mitos vs. verdades</SectionTitle>
          <SectionDescription>
            Mitos sobre a Menopausa e a Verdade por trás deles
          </SectionDescription>
          <SectionDescription>
            <p>A menopausa, um processo natural na vida da mulher,</p>
            <p>
              é cercada por diversos mitos que podem gerar ansiedade e
              desinformação.
            </p>
            <p>
              Vamos desmistificar alguns dos mais comuns e apresentar a visão da
              literatura científica:
            </p>
          </SectionDescription>
        </SectionHeader>
        <Accordion title="Mito 1: A menopausa é uma doença">
          <p><Bold>Verdade:</Bold> A menopausa é uma fase da vida, não uma doença.</p><br></br>
          <p>É a transição natural do período reprodutivo para o não reprodutivo, marcada pela cessação dos ciclos menstruais.</p>
        </Accordion>
        <Accordion title="Mito 2: A menopausa causa envelhecimento precoce">
          <p><Bold>Verdade:</Bold> A menopausa coincide com o processo natural de envelhecimento, mas não o acelera.</p><br></br>
          <p>As mudanças observadas nessa fase estão relacionadas à diminuição dos hormônios sexuais e não à idade em si.</p>
        </Accordion>
        <Accordion title="Mito 3: Todas as mulheres experimentam os mesmos sintomas da menopausa">
          <p><Bold>Verdade:</Bold> Os sintomas da menopausa variam muito de mulher para mulher, e algumas podem não apresentar nenhum sintoma significativo.</p><br></br>
          <p>Os mais comuns incluem ondas de calor, suores noturnos, alterações de humor, dificuldade para dormir e secura vaginal.</p>
        </Accordion>
        <Accordion title="Mito 4: A reposição hormonal é a única solução para os sintomas da menopausa">
          <p><Bold>Verdade:</Bold> A reposição hormonal (RH) pode ser uma opção para aliviar alguns sintomas, mas não é indicada para todas as mulheres e apresenta riscos.</p><br></br>
          <p>Existem outras alternativas, como tratamentos naturais, mudanças no estilo de vida e terapias não hormonais.</p>
        </Accordion>
        <Accordion title="Mito 5: A libido diminui drasticamente na menopausa">
          <p><Bold>Verdade:</Bold> A libido pode diminuir devido a fatores físicos e emocionais, mas não é uma regra.</p><br></br>
          <p>
            A sexualidade é um aspecto multifatorial e pode ser influenciada por diversos fatores,
            como a relação com o parceiro, a autoestima e a saúde em geral.
          </p>
        </Accordion>
        <Accordion title="Mito 6: A menopausa causa depressão">
          <p><Bold>Verdade:</Bold> Embora as alterações hormonais possam contribuir para alterações de humor, a menopausa não causa necessariamente depressão.</p><br></br>
          <p>A depressão é uma doença complexa com diversas causas, e o tratamento deve ser individualizado.</p>
        </Accordion>
        <Accordion title="Mito 7: A menopausa torna as mulheres irritáveis">
          <p><Bold>Verdade:</Bold> As flutuações hormonais podem causar irritabilidade, mas nem todas as mulheres experimentam esse sintoma.</p><br></br>
          <p>É importante lembrar que a irritabilidade pode ter outras causas, como estresse, cansaço e problemas pessoais.</p>
        </Accordion>
        <Accordion title="Como a literatura científica elucida esses mitos?">
          <p>
            A literatura científica sobre a menopausa é vasta e aborda diversos aspectos dessa fase da vida.
            Estudos clínicos, revisões sistemáticas e metanálises ajudam a desmistificar crenças populares e a fornecer informações precisas sobre os sintomas,
            tratamentos e qualidade de vida das mulheres na menopausa.
          </p><br></br>
          <p>
            É importante ressaltar que cada mulher é única e a experiência da menopausa pode variar.
            O acompanhamento médico regular é fundamental para identificar os sintomas,
            avaliar os riscos e benefícios dos tratamentos disponíveis e garantir uma melhor qualidade de vida durante essa fase.
          </p><br></br>
          <p>Para mais informações sobre a menopausa, consulte fontes confiáveis como:</p><br></br>
          <p>Sociedade Brasileira de Ginecologia e Obstetrícia (SOGESP): <a href="http://www.sogesp.org.br">www.sogesp.org.br</a></p>
          <p>Ministério da Saúde: <a href="http://www.saude.gov.br">www.saude.gov.br</a></p>
          <p>Artigos científicos indexados em bases de dados como PubMed e SciELO</p>
        </Accordion>
      </AccordionContainer>
      <ResourcesContainer id="resources">
        <SectionHeader>
          <SectionTitle>Recursos adicionais</SectionTitle>
        </SectionHeader>
        <InfoGrid>
        <Card 
          title={"Agenda para monitoramento"} 
          description={"Uma agenda personalizada pode ser uma ferramenta valiosa para acompanhar as mudanças do corpo durante o climatério e identificar padrões."} 
          fileToDownload={Monitor}
          iconRef={""} 
          buttonLabel={"Faça o download"}
        />
        <Card 
          title={"Infográfico: Entendendo a menopausa"} 
          description={"Infográfico em formato de cartilha para descobrir compartilhar. Contém informações essenciais sobre a menopausa e suas repercussões."} 
          fileToDownload={Info1}
          iconRef={""} 
          buttonLabel={"Faça o download"}
        />
        <Card 
          title={"Infográfico: Sintomas da menopausa"} 
          description={"Impactos Multissêmicos da Menopausa: sintomas e alterações corporais que podem ser acontecer e o que você pode esperar durante a menopausa."} 
          fileToDownload={Info2}
          iconRef={""} 
          buttonLabel={"Faça o download"}
        />
        <Card 
          title={"Farmacopeia Brasileira"} 
          description={"A Farmacopeia Brasileira é o código oficial farmacêutico do país, onde se estabelecem os requisitos mínimos de qualidade para insumos farmacêuticos, medicamentos e produtos para a saúde."} 
          fileToDownload="https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/farmacopeia-brasileira/6a-edicao-volume-2"
          iconRef={""} 
          buttonLabel={"Siga para o site"}
        />
        <Card 
          title={"Manual de Atenção à Mulher"} 
          description={"O Manual Atenção Integral à Saúde da Mulher no Climatério/Menopausa elaborado pela Área Técnica de Saúde da Mulher do Ministério da Saúde para qualificar atenção às mulheres nessa fase da vida."} 
          fileToDownload="https://bvsms.saude.gov.br/bvs/publicacoes/manual_atencao_mulher_climaterio.pdf"
          iconRef={""} 
          buttonLabel={"Siga para o site"}
        />
        <Card 
          title={"Monografia da espécie Morus nigra L."} 
          description={"Serve para reunir e explicar informações sobre essa planta, incluindo suas características, habitat, propriedades nutricionais e medicinais. Auxilia a entender seus benefícios para a saúde e aplicações na alimentação e na medicina."} 
          fileToDownload="https://www.gov.br/saude/pt-br/acesso-a-informacao/participacao-social/consultas-publicas/2017/arquivos/MonografiaMorusnigra.pdf"
          iconRef={""} 
          buttonLabel={"Siga para o site"}
        />
        </InfoGrid>
      </ResourcesContainer>
    </>
  );
}

export default App;
