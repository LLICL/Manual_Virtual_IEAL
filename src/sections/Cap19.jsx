import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap19() {
  return (
    <>
      <Tabs ids={["prev-cap1","prev-cap2","prev-cap3","prev-cap4","prev-delitos","prev-maltrato"]} initial="prev-cap1">
        <div className="section-header">
          <span className="section-num">
            19
          </span>
          <h2 className="section-title">
            Prevención del Abuso Sexual
          </h2>
        </div>
        <p className="subtitle-green">
          Normas legales vigentes que obligan a denunciar
        </p>
        <div className="tipo-tabs-bar mini">
          <TabButton tab="prev-cap1" className="tipo-tab-btn">
            Capítulo I. De la violación
          </TabButton>
          {" "}
          <TabButton tab="prev-cap2" className="tipo-tab-btn">
            Capítulo II. De los actos sexuales abusivos
          </TabButton>
          {" "}
          <TabButton tab="prev-cap3" className="tipo-tab-btn">
            Capítulo III. Disposiciones comunes a los capítulos anteriores
          </TabButton>
          {" "}
          <TabButton tab="prev-cap4" className="tipo-tab-btn">
            Capítulo IV. De la explotación sexual
          </TabButton>
          {" "}
          <TabButton tab="prev-delitos" className="tipo-tab-btn">
            Delitos Sexuales (Código Penal)
          </TabButton>
          {" "}
          <TabButton tab="prev-maltrato" className="tipo-tab-btn">
            Maltrato Infantil (ICBF)
          </TabButton>
        </div>
        <TabPanel className="tipo-tab-content mini" id="prev-cap1">
          <p className="estimulo-title">
            Capítulo I. De la violación
          </p>
          <div className="quote-block">
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 205. ACCESO CARNAL VIOLENTO.
                </strong>
              </span>
              {" "}
              El que realice acceso carnal con otra persona mediante violencia, incurrirá en prisión de doce (12) a veinte (20) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 206. ACTO SEXUAL VIOLENTO.
                </strong>
              </span>
              {" "}
              El que realice en otra persona acto sexual diverso al acceso carnal mediante violencia, incurrirá en prisión de ocho (8) a dieciséis (16) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 207. ACCESO CARNAL O ACTO SEXUAL EN PERSONA PUESTA EN INCAPACIDAD DE RESISTIR.
                </strong>
              </span>
              {" "}
              El que realice acceso carnal con persona a la cual haya puesto en incapacidad de resistir o en estado de inconsciencia, o en condiciones de inferioridad síquica que le impidan comprender la relación sexual o dar su consentimiento, incurrirá en prisión de doce (12) a veinte (20) años. Si se ejecuta acto sexual diverso del acceso carnal, la pena será de ocho (8) a dieciséis (16) años.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="prev-cap2">
          <p className="estimulo-title">
            Capítulo II. De los actos sexuales abusivos
          </p>
          <div className="quote-block">
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 208. ACCESO CARNAL ABUSIVO CON MENOR DE CATORCE AÑOS.
                </strong>
              </span>
              {" "}
              El que acceda carnalmente a persona menor de catorce (14) años, incurrirá en prisión de doce (12) a veinte (20) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 209. ACTOS SEXUALES CON MENOR DE CATORCE AÑOS.
                </strong>
              </span>
              {" "}
              El que realizare actos sexuales diversos del acceso carnal con persona menor de catorce (14) años o en su presencia, o la induzca a prácticas sexuales, incurrirá en prisión de nueve (9) a trece (13) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 210. ACCESO CARNAL O ACTO SEXUAL ABUSIVOS CON INCAPAZ DE RESISTIR.
                </strong>
              </span>
              {" "}
              El que acceda carnalmente a persona en estado de inconsciencia, o que padezca trastorno mental o que esté en incapacidad de resistir, incurrirá en prisión de doce (12) a veinte (20) años. Si no se realizare el acceso, sino actos sexuales diversos de él, la pena será de ocho (8) a dieciséis (16) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 210-A. ACOSO SEXUAL.
                </strong>
              </span>
              {" "}
              El que en beneficio suyo o de un tercero y valiéndose de su superioridad manifiesta o relaciones de autoridad o de poder, edad, sexo, posición laboral, social, familiar o económica, acose, persiga, hostigue o asedie física o verbalmente, con fines sexuales no consentidos, a otra persona, incurrirá en prisión de uno (1) a tres (3) años.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="prev-cap3">
          <p className="estimulo-title">
            Capítulo III. Disposiciones comunes a los capítulos anteriores
          </p>
          <div className="quote-block">
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 211. CIRCUNSTANCIAS DE AGRAVACION PUNITIVA.
                </strong>
              </span>
              {" "}
              Las penas para los delitos descritos en los artículos anteriores, se aumentarán de una tercera parte a la mitad, cuando:
            </p>
            <ol className="derechos-list">
              <li>
                La conducta se cometiere con el concurso de otra u otras personas.
              </li>
              <li>
                El responsable tuviere cualquier carácter, posición o cargo que le dé particular autoridad sobre la víctima o la impulse a depositar en él su confianza.
              </li>
              <li>
                Se produjere contaminación de enfermedad de transmisión sexual.
              </li>
              <li>
                Se realizare sobre persona menor de catorce (14) años.
              </li>
              <li>
                La conducta se realizare sobre pariente hasta cuarto grado de consanguinidad, cuarto de afinidad o primero civil, sobre cónyuge o compañera o compañero permanente, o contra cualquier persona que de manera permanente se hallare integrada a la unidad doméstica, o aprovechando la confianza depositada por la víctima en el autor o en alguno o algunos de los partícipes. Para los efectos previstos en este artículo, la afinidad será derivada de cualquier forma de matrimonio o de unión libre.
              </li>
              <li>
                Se produjere embarazo.
              </li>
              <li>
                Si se cometiere sobre personas en situación de vulnerabilidad en razón de su edad, etnia, discapacidad física, psíquica o sensorial, ocupación u oficio.
              </li>
              <li>
                Si el hecho se cometiere con la intención de generar control social, temor u obediencia en la comunidad.
              </li>
            </ol>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 212. ACCESO CARNAL.
                </strong>
              </span>
              {" "}
              Para los efectos de las conductas descritas en los capítulos anteriores, se entenderá por acceso carnal la penetración del miembro viril por vía anal, vaginal u oral, así como la penetración vaginal o anal de cualquier otra parte del cuerpo humano u otro objeto.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 212A. VIOLENCIA.
                </strong>
              </span>
              {" "}
              Para los efectos de las conductas descritas en los capítulos anteriores, se entenderá por violencia: el uso de la fuerza; la amenaza del uso de la fuerza; la coacción física o psicológica, como la causada por el temor a la violencia, la intimidación; la detención ilegal; la opresión psicológica; el abuso de poder; la utilización de entornos de coacción y circunstancias similares que impidan a la víctima dar su libre consentimiento.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="prev-cap4">
          <p className="estimulo-title">
            Capítulo IV. De la explotación sexual
          </p>
          <div className="quote-block">
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 213. INDUCCION A LA PROSTITUCIÓN.
                </strong>
              </span>
              {" "}
              El que con ánimo de lucrarse o para satisfacer los deseos de otro, induzca al comercio carnal o a la prostitución a otra persona, incurrirá en prisión de diez (10) a veintidós (22) años y multa de sesenta y seis (66) a setecientos cincuenta (750) salarios mínimos legales mensuales vigentes.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 213-A. PROXENETISMO CON MENOR DE EDAD.
                </strong>
              </span>
              {" "}
              El que con ánimo de lucro para sí o para un tercero o para satisfacer los deseos sexuales de otro, organice, facilite o participe de cualquier forma en el comercio carnal o la explotación sexual de otra persona menor de 18 años, incurrirá en prisión de catorce (14) a veinticinco (25) años y multa de sesenta y siete (67) a setecientos cincuenta (750) salarios mínimos legales mensuales vigentes.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 214. CONSTREÑIMIENTO A LA PROSTITUCIÓN.
                </strong>
              </span>
              {" "}
              El que con ánimo de lucrarse o para satisfacer los deseos de otro, constriña a cualquier persona al comercio carnal o a la prostitución, incurrirá en prisión de nueve (9) a trece (13) años y multa de sesenta y seis (66) a setecientos cincuenta (750) salarios mínimos legales mensuales vigentes.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 216. CIRCUNSTANCIAS DE AGRAVACION PUNITIVA.
                </strong>
              </span>
              {" "}
              Las penas para los delitos descritos en los artículos anteriores, se aumentarán de una tercera parte a la mitad, cuando la conducta:
            </p>
            <ol className="derechos-list">
              <li>
                Se realizare en persona menor de catorce (14) años.
              </li>
              <li>
                Se realizare con el fin de llevar la víctima al extranjero.
              </li>
              <li>
                Se realizare respecto de pariente hasta cuarto grado de consanguinidad, cuarto de afinidad o primero civil, sobre cónyuge o compañera o compañero permanente, o contra cualquier persona que de manera permanente se hallare integrada a la unidad doméstica, o aprovechando la confianza depositada por la víctima en el autor o en alguno o algunos de los partícipes. Para los efectos previstos en este artículo, la afinidad será derivada de cualquier forma de matrimonio o de unión libre.
              </li>
              <li>
                Se cometiere sobre personas en situación de vulnerabilidad en razón de su edad, etnia, discapacidad física, psíquica o sensorial, ocupación u oficio.
              </li>
              <li>
                La conducta se cometiere como forma de retaliación, represión o silenciamiento de personas que forman parte de organizaciones sociales, comunitarias o políticas o que se desempeñan como líderes o defensoras de Derechos Humanos.
              </li>
            </ol>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 217. ESTIMULO A LA PROSTITUCIÓN DE MENORES.
                </strong>
              </span>
              {" "}
              El que destine, arriende, mantenga, administre o financie casa o establecimiento para la práctica de actos sexuales en que participen menores de edad, incurrirá en prisión de diez (10) a catorce (14) años y multa de sesenta y seis (66) a setecientos cincuenta (750) salarios mínimos legales mensuales vigentes. La pena se aumentará de una tercera parte a la mitad cuando el responsable sea integrante de la familia de la víctima.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 217-A. DEMANDA DE EXPLOTACIÓN SEXUAL COMERCIAL DE PERSONA MENOR DE 18 AÑOS DE EDAD.
                </strong>
              </span>
              {" "}
              El que directamente o a través de tercera persona, solicite o demande realizar acceso carnal o actos sexuales con persona menor de 18 años, mediante pago o promesa de pago en dinero, especie o retribución de cualquier naturaleza, incurrirá por este sólo hecho, en pena de prisión de catorce (14) a veinticinco (25) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  PARÁGRAFO.
                </strong>
              </span>
              {" "}
              El consentimiento dado por la víctima menor de 18 años, no constituirá causal de exoneración de la responsabilidad penal.
            </p>
            <p>
              La pena se agravará de una tercera parte a la mitad:
            </p>
            <ol className="derechos-list">
              <li>
                Si la conducta se ejecuta por un turista o viajero nacional o extranjero.
              </li>
              <li>
                Si la conducta constituyere matrimonio o convivencia, servil o forzado.
              </li>
              <li>
                Si la conducta es cometida por un miembro de un grupo armado organizado al margen de la ley.
              </li>
              <li>
                Si la conducta se comete sobre persona menor de catorce (14) años de edad.
              </li>
              <li>
                El responsable sea integrante de la familia de la víctima.
              </li>
            </ol>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 218. PORNOGRAFÍA CON PERSONAS MENORES DE 18 AÑOS.
                </strong>
              </span>
              {" "}
              El que fotografíe, filme, grabe, produzca, divulgue, ofrezca, venda, compre, posea, porte, almacene, trasmita o exhiba, por cualquier medio, para uso personal o intercambio, representaciones reales de actividad sexual que involucre persona menor de 18 años de edad, incurrirá en prisión de 10 a 20 años y multa de 150 a 1.500 salarios mínimos legales mensuales vigentes. Igual pena se aplicará a quien alimente con pornografía infantil bases de datos de Internet, con o sin fines de lucro. La pena se aumentará de una tercera parte a la mitad cuando el responsable sea integrante de la familia de la víctima.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 219. TURISMO SEXUAL.
                </strong>
              </span>
              {" "}
              El que dirija, organice o promueva actividades turísticas que incluyan la utilización sexual de menores de edad incurrirá en prisión de cuatro (4) a ocho (8) años. La pena se aumentará en la mitad cuando la conducta se realizare con menor de doce (12) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 219-A. UTILIZACIÓN O FACILITACIÓN DE MEDIOS DE COMUNICACIÓN PARA OFRECER ACTIVIDADES SEXUALES CON PERSONAS MENORES DE 18 AÑOS.
                </strong>
              </span>
              {" "}
              El que utilice o facilite el correo tradicional, las redes globales de información, telefonía o cualquier medio de comunicación, para obtener, solicitar, ofrecer o facilitar contacto o actividad con fines sexuales con personas menores de 18 años de edad, incurrirá en pena de prisión de diez (10) a catorce (14) años y multa de sesenta y siete (67) a (750) salarios mínimos legales mensuales vigentes. Las penas señaladas en el inciso anterior se aumentarán hasta en la mitad (1/2) cuando las conductas se realizaren con menores de catorce (14) años.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 219-B. OMISIÓN DE DENUNCIA.
                </strong>
              </span>
              {" "}
              El que, por razón de su oficio, cargo, o actividad, tuviere conocimiento de la utilización de menores para la realización de cualquiera de las conductas previstas en el presente capítulo y omitiere informar a las autoridades administrativas o judiciales competentes sobre tales hechos, teniendo el deber legal de hacerlo, incurrirá en multa de trece punto treinta y tres (13.33) a setenta y cinco (75) salarios mínimos legales mensuales vigentes. Si la conducta se realizare por servidor público, se impondrá, además, la pérdida del empleo.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="prev-delitos">
          <Tabs ids={["prev-normas","prev-testimonios","prev-buen-nombre","prev-actos-urgentes","prev-deber-cuidado","delitos-complementarias"]} initial="prev-normas">
            <p className="subtitle-green">
              Código Penal,
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                Ley 599 de 2000
              </a>
            </p>
            <div className="etapas-tabs-bar">
              <TabButton tab="prev-normas" className="etapas-tab-btn">
                Normas que Obligan a Denunciar
              </TabButton>
              {" "}
              <TabButton tab="prev-testimonios" className="etapas-tab-btn">
                Práctica de Testimonios y Deber de Denunciar
              </TabButton>
              {" "}
              <TabButton tab="prev-buen-nombre" className="etapas-tab-btn">
                Buen Nombre y Habeas Data
              </TabButton>
              {" "}
              <TabButton tab="prev-actos-urgentes" className="etapas-tab-btn">
                Protocolo de Actos Urgentes
              </TabButton>
              {" "}
              <TabButton tab="prev-deber-cuidado" className="etapas-tab-btn">
                Deber de Cuidado
              </TabButton>
              {" "}
              <TabButton tab="delitos-complementarias" className="etapas-tab-btn">
                Normas complementarias
              </TabButton>
            </div>
            <TabPanel className="etapas-tab-content" id="prev-normas">
              <p>
                Sea de resaltar que, emergen normas que obligan y exigen del acato estricto y la celeridad o inmediatez del caso, normas legales vigentes que, obligan y exigen, a los educadores y administrativos, acudir a poner de conocimiento, las respectivas denuncias de indicios o hechos presuntos de abuso sexual infantil, o actos sexuales abusivos u otros, que vulneran la libertad, integridad y formación sexuales de menores de 18 años de edad. Es de hecho, una obligación, inexcusable, dar a conocer, los presuntos indicios o hechos a las autoridades, y que son normas legales vigentes a saber:
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Código penal. ARTICULO 25. ACCION Y OMISIÓN.
                    </strong>
                  </span>
                  {" "}
                  La conducta punible puede ser realizada por acción o por omisión.
                </p>
                <p>
                  Quien tuviere el deber jurídico de impedir un resultado perteneciente a una descripción típica y no lo llevare a cabo, estando en posibilidad de hacerlo, quedará sujeto a la pena contemplada en la respectiva norma penal. A tal efecto, se requiere que el agente tenga a su cargo la protección en concreto del bien jurídico protegido, o que se le haya encomendado como garante la vigilancia de una determinada fuente de riesgo, conforme a la Constitución o a la ley. Son constitutivas de posiciones de garantía las siguientes situaciones:
                </p>
                <ol className="derechos-list">
                  <li>
                    Cuando se asuma voluntariamente la protección real de una persona o de una fuente de riesgo, dentro del propio ámbito de dominio.
                  </li>
                  <li>
                    Cuando exista una estrecha comunidad de vida entre personas.
                  </li>
                  <li>
                    Cuando se emprenda la realización de una actividad riesgosa por varias personas.
                  </li>
                  <li>
                    Cuando se haya creado precedentemente una situación antijurídica de riesgo próximo para el bien jurídico correspondiente.
                  </li>
                </ol>
                <p>
                  <span className="hl-green">
                    PARAGRAFO.
                  </span>
                  {" "}
                  Los numerales 1, 2, 3 y 4 sólo se tendrán en cuenta en relación con las conductas punibles delictuales que atenten contra la vida e integridad personal, la libertad individual, y la libertad y formación sexuales.
                </p>
              </div>
              <p className="estimulo-title">
                Ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  1098 de 2006
                </a>
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 44. Obligaciones complementarias de las instituciones educativas.
                    </strong>
                  </span>
                  {" "}
                  Los directivos y docentes de los establecimientos académicos y la comunidad educativa en general pondrán en marcha mecanismos para:
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    4.
                  </strong>
                  {" "}
                  Garantizar a los niños, niñas y adolescentes el pleno respeto a su dignidad, vida, integridad física y moral dentro de la convivencia escolar.
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    9.
                  </strong>
                  {" "}
                  Reportar, a las autoridades competentes, las situaciones de abuso, maltrato o peores formas de trabajo infantil detectadas en niños, niñas y adolescentes.
                </p>
              </div>
              <p className="estimulo-title">
                Ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                  1620 de 2013
                </a>
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 18º. Responsabilidades del director o rector del establecimiento educativo en el Sistema Nacional de Convivencia Escolar y Formación para los Derechos Humanos, la educación para la sexualidad y la prevención y de la violencia escolar.
                    </strong>
                  </span>
                  {" "}
                  Además de las que establece normatividad vigente y que le son propias, tendrá las siguientes responsabilidades:
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    4.
                  </strong>
                  {" "}
                  Reportar aquellos casos de acoso y violencia escolar y vulneración de derechos sexuales y reproductivos de los niños, niñas y adolescentes del establecimiento educativo, en su calidad de presidente del comité escolar de convivencia, acorde con la normatividad vigente y los protocolos definidos en la Ruta de Atención Integral y hacer seguimiento a dichos casos.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 19º. Responsabilidades de los docentes en el Sistema Nacional de Convivencia Escolar y Formación para los Derechos Humanos, la Educación para la Sexualidad y la Prevención y Mitigación de la Violencia Escolar.
                    </strong>
                  </span>
                  {" "}
                  Además de las que establece la normatividad vigente y que le son propias, tendrá las siguientes responsabilidades:
                </p>
                <ol className="derechos-list">
                  <li>
                    Identificar, reportar y realizar el seguimiento a los casos de acoso escolar, violencia escolar y vulneración de derechos sexuales y reproductivos que afecten a estudiantes del establecimiento educativo, acorde con los artículos 11 y 12 de la
                    {" "}
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                      Ley 1146 de 2007
                    </a>
                    {" "}
                    y demás normatividad vigente, con el manual de convivencia y con los protocolos definidos en la Ruta de Atención Integral para la Convivencia Escolar.
                  </li>
                </ol>
                <p>
                  Si la situación de intimidación de la que tienen conocimiento se hace a través de medios electrónicos, igualmente deberá reportar al comité de convivencia para activar el protocolo respectivo.
                </p>
              </div>
              <p className="estimulo-title">
                Ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                  1146 de 2007
                </a>
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 11. Identificación temprana en aula.
                    </strong>
                  </span>
                  {" "}
                  Los establecimientos educativos oficiales y privados, que ofrezcan educación formal en los niveles de básica y media, deberán incluir elementos que contribuyan a la identificación temprana, prevención, autoprotección, detección y denuncia del abuso sexual de que puedan ser víctima, los educandos, dentro y fuera de los establecimientos educativos.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 12. Obligación de denunciar.
                    </strong>
                  </span>
                  {" "}
                  El docente está obligado a denunciar, ante las autoridades administrativas y judiciales competentes, toda conducta o indicio de violencia o abuso sexual contra niños, niñas y adolescentes del que tenga conocimiento.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 15. Deber de denunciar.
                    </strong>
                  </span>
                  {" "}
                  En ejercicio del deber constitucional de protección de los niños, niñas y adolescentes, el Estado y la sociedad tienen el deber de denunciar oportunamente a las autoridades competentes cualquier indicio o caso de abuso sexual contra niños, niñas y adolescentes dentro de las 24 horas siguientes al conocimiento del hecho.
                </p>
              </div>
              <p>
                Por todo lo anterior, en estricto cumplimiento de las normas legales vigentes; es que, los educadores y administrativos y demás personal, mayores de 18 años de edad, deben proceder, a presentar ante las autoridades educativas, penales y del caso: fiscalía general de la Nación, --CAIVAS—Sijin -Unidad de delitos sexuales – Policía de Infancia y Adolescencia; ICBF, e incluso comisaria de familia. Los indicios y presuntos hechos, en la inmediatez y celeridad que, se exige, es decir 24 horas, a voces de la
                {" "}
                <span className="hl-green">
                  ley 1146 de 2007, artículo 15
                </span>
                .
              </p>
              <p>
                Lo anterior, ligado al
                {" "}
                <span className="hl-green">
                  artículo 18 numeral 4 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                    1620 de 2013
                  </a>
                </span>
                , para los rectores; y ligado en conexidad del
                {" "}
                <span className="hl-green">
                  artículo 19 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                    1620 de 2013
                  </a>
                </span>
                , para los educadores.
              </p>
              <p>
                De tal manera que, se desarrollen, las actuaciones de carácter OFICIOSO PROPIAS DE CADA CASO y se llegue a la verdad de cada caso en particular. Cumpliendo también con el
                {" "}
                <span className="hl-green">
                  artículo 44 superior constitucional
                </span>
                {" "}
                y el
                {" "}
                <span className="hl-green">
                  artículo 08 de la
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    ley 1098 de 2006
                  </a>
                </span>
                .
              </p>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="prev-testimonios">
              <p>
                Se debe realizar un breve, pero detallado, relato de los hechos y, sobre todo, NO interrogar, a los menores de edad, sino que ellos, o ellas, desarrollen una versión libre en descargos. Sin llegar a interrogarlos o revictimizarles.
              </p>
              <p className="estimulo-title">
                Ver artículo 150 de
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  ley 1098 de 2006
                </a>
                :
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Ley 1098 de 2006. Artículo 150. Práctica de testimonios.
                    </strong>
                  </span>
                  {" "}
                  Los niños, las niñas y los adolescentes podrán ser citados como testigos en los procesos penales que se adelanten contra los adultos. Sus declaraciones solo las podrá tomar el Defensor de Familia con cuestionario enviado previamente por el fiscal o el juez. El defensor sólo formulará las preguntas que no sean contrarias a su interés superior. Excepcionalmente, el juez podrá intervenir en el interrogatorio del niño, la niña o el adolescente para conseguir que este responda a la pregunta que se le ha formulado o que lo haga de manera clara y precisa. Dicho interrogatorio se llevará a cabo fuera del recinto de la audiencia y en presencia del Defensor de Familia, siempre respetando sus derechos prevalentes.
                </p>
                <p>
                  El mismo procedimiento se adoptará para las declaraciones y entrevistas que deban ser rendidas ante la Policía Judicial y la Fiscalía durante las etapas de indagación o investigación. A discreción del juez, los testimonios podrán practicarse a través de comunicación de audio video, caso en el cual no será necesaria la presencia física del niño, la niña o el adolescente.
                </p>
              </div>
              <p>
                El desconocimiento de la ley, NO es causal de exención, señala el
                {" "}
                <span className="hl-green">
                  artículo 09 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    código civil colombiano
                  </a>
                </span>
                .
              </p>
              <p>
                De tal manera que, así los educadores, directivos y padres de familia, no sean expertos en el tema, y mucho menos, expertos en derecho penal, igualmente, les OBLIGA LA NORMA LEGISLADA VIGENTE, de tal forma que, aunque desconozcan, si se trata o no de una vulneración a la libertad, integridad y formación sexual, de los menores de 18 años de edad, de su ámbito de dominio, igualmente, por sentido común y lógica, si pueden apreciar, cuales actuaciones son presuntos delitos de índole sexual contra menores de edad. Lo relevante, es que, usted tenga claro, que existe el inaplazable, inexcusable e indelegable deber de denunciar, en las 24 horas, siguientes al conocimiento de los hechos:
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Ley 1146 de 2007. Artículo 15. Deber de denunciar.
                    </strong>
                  </span>
                  {" "}
                  En ejercicio del deber constitucional de protección de los niños, niñas y adolescentes, el Estado y la sociedad tienen el deber de denunciar oportunamente a las autoridades competentes cualquier indicio o caso de abuso sexual contra niños, niñas y adolescentes dentro de las 24 horas siguientes al conocimiento del hecho.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Ley 1146 de 2007. Artículo 12. Obligación de denunciar.
                    </strong>
                  </span>
                  {" "}
                  El docente está obligado a denunciar ante las autoridades administrativas y judiciales competentes, toda conducta o indicio de violencia o abuso sexual contra niños, niñas y adolescentes del que tenga conocimiento.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Ley 1620 de 2013. Artículo 18º. Responsabilidades del director o rector del establecimiento educativo en el Sistema Nacional de Convivencia Escolar y Formación para los Derechos Humanos, la educación para la sexualidad y la prevención y de la violencia escolar.
                    </strong>
                  </span>
                  {" "}
                  Además de las que establece normatividad vigente y que le son propias, tendrá las siguientes responsabilidades:
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    4.
                  </strong>
                  {" "}
                  Reportar aquellos casos de acoso y violencia escolar y vulneración de derechos sexuales y reproductivos de los niños, niñas y adolescentes del establecimiento educativo, en su calidad de presidente del comité escolar de convivencia, acorde con la normatividad vigente y los protocolos definidos en la Ruta de Atención Integral y hacer seguimiento a dichos casos.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Ley 1620 de 2013. Artículo 19º. Responsabilidades de los docentes en el Sistema Nacional de Convivencia Escolar y Formación para los Derechos Humanos, la Educación para la Sexualidad y la Prevención y Mitigación de la Violencia Escolar.
                    </strong>
                  </span>
                  {" "}
                  Además de las que establece la normatividad vigente y que le son propias, tendrá las siguientes responsabilidades:
                </p>
                <ol className="derechos-list">
                  <li>
                    Identificar, reportar y realizar el seguimiento a los casos de acoso escolar, violencia escolar y vulneración de derechos sexuales y reproductivos que afecten a estudiantes del establecimiento educativo, acorde con los artículos 11 y 12 de la
                    {" "}
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                      Ley 1146 de 2007
                    </a>
                    {" "}
                    y demás normatividad vigente, con el manual de convivencia y con los protocolos definidos en la Ruta de Atención Integral para la Convivencia Escolar.
                  </li>
                </ol>
              </div>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="prev-buen-nombre">
              <p>
                En ese orden de ideas, sabemos que se está, presuntamente, ante delitos de INDOLE SEXUAL, vulneración al buen nombre, la dignidad humana y la imagen de menor de edad, por ello, con absoluto respeto por la autonomía del funcionario asignado, o fiscal asignado, se deben elaborar las actas de conducto regular y acordes al debido proceso. Con el objeto de que, al tenor Constitucional del derecho al buen nombre, a la dignidad humana, y derecho a la libertad, integridad y formación sexuales, y derecho conexo a la integridad y salvaguarda de la familia, a la intimidad de las personas y terceros, en conexidad con el derecho al buen nombre institucional y personal. Obrando en plena armonía, con lo consagrado por la Honorable Corte Constitucional Colombiana, cuando se pronuncia en ése especifico aspecto, señalando:
              </p>
              <div className="tipo-legal-ref">
                <p>
                  “Además se establece para el Estado, el deber ineludible e inaplazable de respetar el buen nombre y la dignidad humana. La consagración constitucional de estos derechos encuentra múltiples correlatos al nivel de los instrumentos internacionales de derechos humanos que vinculan al país, en particular la Declaración Americana de Derechos y Deberes del Hombre (artículo 5º), la Declaración Universal de los Derechos Humanos (artículo 12º) el Pacto Internacional de Derechos Civiles y Políticos (artículo 17º) y la Convención Americana sobre Derechos Humanos (artículo 11º y artículo 14º), que consagran el derecho de las personas, a recibir la protección de las autoridades frente a los ataques contra su honra y su reputación. Se trata de un derecho que, como ha reconocido la jurisprudencia constitucional, “por estar ligado al respeto de la dignidad humana, principio fundamental del Estado Social de Derecho (art. 2º Superior C.P.), y valor fundamental de la Comunidad internacional, es objeto de protección constitucional expresa”. El derecho al buen nombre ha sido definido como “la buena opinión o fama adquirida por un individuo en razón a la virtud y al mérito, como consecuencia necesaria de las acciones protagonizadas por él”. Como se expresó en la sentencia T-494 de 2002, M.P. Jaime Triviño: “este derecho está atado a todos los actos o hechos que una persona realice y por las cuales la sociedad hace un juicio de valor sobre sus virtudes y defectos”. Igualmente, la Corte Constitucional elaboró sobre esta definición en la sentencia C-489 de 2002, en los siguientes términos: “El buen nombre ha sido entendido por la jurisprudencia y por la doctrina como la reputación, o el concepto que de una persona tienen los demás y que se configura como derecho frente al detrimento que pueda sufrir como producto de expresiones ofensivas o injuriosas o informaciones falsas o tendenciosas.
                </p>
                <p>
                  Este derecho de la personalidad es uno de los más valiosos elementos del patrimonio moral y social y un factor intrínseco de la dignidad humana que a cada persona debe ser reconocida tanto por el Estado, como por la sociedad”. Por otra parte, la jurisprudencia constitucional ha establecido que sólo se entiende lesionado el derecho fundamental al buen nombre en casos como el que nos ocupa, cuando quiera que se difunden afirmaciones, informaciones o imputaciones falsas o erróneas respecto de las personas, que no tienen fundamento en su propia conducta pública y que afectan su renombre e imagen ante la sociedad: “el derecho al buen nombre, como expresión de la reputación o la fama que tiene una persona. Se lesiona por las informaciones falsas o erróneas que se difundan sin fundamento y que distorsionan el concepto público que se tiene del individuo”.
                </p>
                <p>
                  <span className="hl-green">
                    <strong>
                      LA SENTENCIA T-494 DE 2002 (M.P. Jaime Triviño)
                    </strong>
                  </span>
                  , reiteró esta regla al establecer que “son atentados al derecho al buen nombre todas aquellas informaciones contrarias a la verdad, que, sin justificación alguna, distorsionen el prestigio social que tiene una persona”. (Subraya fuera de texto).
                </p>
                <p>
                  En el mismo sentido, la
                  {" "}
                  <span className="hl-green">
                    <strong>
                      SENTENCIA T-228 DE 1994 (M.P. José Gregorio Hernández Galindo)
                    </strong>
                  </span>
                  {" "}
                  precisó que “se atenta contra este derecho cuando, sin justificación ni causa cierta y real, es decir, sin fundamento, se propagan entre el público -bien en forma directa y personal, ya a través de los medios de comunicación de masas- informaciones falsas o erróneas o especies que distorsionan el concepto público que se tiene del individuo y que, por lo tanto, tienden a socavar el prestigio y la confianza de los que disfruta en el entorno social, en cuyo medio actúa, o cuando en cualquier forma se manipula la opinión general para desdibujar su imagen”. Subraya y negrilla mías.
                </p>
              </div>
              <p className="estimulo-title">
                Corte Constitucional, Sentencia T-277 del 12 de mayo de 2015
              </p>
              <div className="tipo-legal-ref">
                <p>
                  <span className="hl-green">
                    <strong>
                      DERECHO A LA HONRA Y AL BUEN NOMBRE-Protección por tutela.
                    </strong>
                  </span>
                  {" "}
                  La jurisprudencia de esta Corporación ha sido consistente en declarar la procedencia de acciones de tutela presentadas para proteger los derechos fundamentales a la honra y al buen nombre, cuando estos resultan afectados por la publicación de información en medios masivos de comunicación.
                </p>
                <p>
                  <span className="hl-green">
                    <strong>
                      DERECHO A LA HONRA Y AL BUEN NOMBRE-Concepto.
                    </strong>
                  </span>
                  {" "}
                  Esta Corporación no ha hecho una separación categórica del significado y contenido de los derechos a la honra y al buen nombre, pues los mismos se encuentran en una relación estrecha y la afectación de uno de ellos, por lo general, acarrea una lesión al otro. Bajo este entendido, se ha manifestado que el derecho al buen nombre cobija la reputación, mientras que la honra se estructuraría en torno a la consideración que toda persona merece por su condición de miembro de la especie humana. De otra parte, se ha vinculado el derecho al buen nombre a las actividades desplegadas de forma pública por alguien. Sosteniéndose que el mismo integraría la valoración que el grupo social hace de sus comportamientos públicos. En cambio, el derecho a la honra se ha utilizado para referirse a aspectos más relacionados con la vida privada de las personas y a su valor intrínseco.
                </p>
              </div>
              <p className="estimulo-title">
                Corte Constitucional, Sentencia C-748 de 2011
              </p>
              <div className="tipo-legal-ref">
                <p>
                  La Corte Constitucional, acertadamente distinguió las tres líneas de interpretación que la jurisprudencia constitucional había hecho del derecho al habeas data. Así las cosas, precisó que en un primer momento dicho derecho constitucional fue interpretado “como una garantía del derecho a la intimidad, de allí que se hablara de la protección de los datos que pertenecen a la vida privada y familiar, entendida como la esfera individual impenetrable en la que cada cual puede realizar su proyecto de vida y en la que ni el Estado ni otros particulares pueden interferir”. (Negrilla en el texto original).
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    3.4.1.3.
                  </strong>
                  {" "}
                  Posteriormente, el fallo aludido determinó que “desde los primeros años de la nueva Carta, también surgió al interior de la Corte una segunda línea interpretativa que consideraba el habeas data, como una manifestación del libre desarrollo de la personalidad. Según esta línea, el habeas data tiene su fundamento último “(…) en el ámbito de autodeterminación y libertad que el ordenamiento jurídico reconoce al sujeto como condición indispensable para el libre desarrollo de la personalidad y en homenaje justiciero a su dignidad”. (Negrilla en el texto original).
                </p>
                <p>
                  <strong>
                    3.4.1.4.
                  </strong>
                  {" "}
                  Así mismo, la sentencia en mención dejó claro que “a partir de 1995, surge una tercera línea interpretativa que apunta al habeas data como un derecho autónomo y que es la que ha prevalecido desde entonces. Así, según la sentencia SU-082 de 1995, el núcleo del derecho al habeas data está compuesto por la autodeterminación informática y la libertad –incluida la libertad económica.
                </p>
                <p>
                  Además, este derecho comprende al menos las siguientes prerrogativas: “a) El derecho a conocer las informaciones que a ella se refieren; b) El derecho a actualizar tales informaciones, es decir, a ponerlas al día, agregándoles los hechos nuevos; c) El derecho a rectificar las informaciones que no correspondan a la verdad.”, e incluye el derecho a la caducidad del dato negativo”. (Negrilla en el texto original).
                </p>
              </div>
              <p>
                Se aprecia en extenso y cristalino, que la misma jurisprudencia aplicable a cada caso, ha indicado de marras, la obligación del estado, de proteger, la honra, dignidad y buen nombre de los ciudadanos como un derecho fundamental, máxime cuando se trata de menores de edad y de cada caso en particular, cuando, los presuntos sindicados, acuden a violentar, la honra buen nombre y la imagen de menores de edad y la nuestra como institución educativa. Por lo anterior, además, podemos estar, ante los presuntos, de:
              </p>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="prev-actos-urgentes">
              <p className="subtitle-green">
                Buscar cumplir un protocolo de actos urgentes, es algo relevante y crucial:
              </p>
              <ol className="derechos-list">
                <li>
                  Escuchar en descargos y versión libre a la presunta víctima. Realizar el acta de los actos urgentes.
                </li>
                <li>
                  Llamar de inmediato a policía de infancia y adolescencia. Para casos de situaciones TIPO III. Mayores de 14 años de edad.
                </li>
                <li>
                  Llamar de inmediato a I.C.B.F., o comisaria de familia, en casos de situaciones irregulares o para casos de situaciones TIPO III. Menores de 14 años de edad.
                </li>
                <li>
                  Llamar a notificar a los padres y acudientes de los involucrados, salvo que el padre o la madre, sean el presunto agresor sexual.
                </li>
                <li>
                  Convocar a sesión extraordinaria de consejo directivo y consejo de padres, conjunta, así sea Virtual.
                </li>
                <li>
                  Manifestarles, a consejo directivo y consejo de padres, la situación irregular.
                </li>
                <li>
                  Guardar y preservar, la prueba material, documental o virtual.
                </li>
                <li>
                  Determinar con consejo directivo y consejo de padres, la gravedad del asunto.
                </li>
                <li>
                  Dejar acta por escrito de la reunión. Y copia del vídeo de la reunión virtual.
                </li>
                <li>
                  Convocar a descargos a los educadores y primeros respondientes.
                </li>
                <li>
                  Realizar el acta de situación TIPO III.
                </li>
              </ol>
              <div className="tipo-para">
                <p>
                  Siempre acogerse al acato estricto del:
                  {" "}
                  <span className="hl-green">
                    <strong>
                      DEBER DE CUIDADO
                    </strong>
                  </span>
                  .
                </p>
              </div>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="prev-deber-cuidado">
              <div className="tipo-legal-ref">
                <p>
                  <span className="hl-green">
                    <strong>
                      ESTABLECIMIENTO EDUCATIVO - Responsabilidad frente a los alumnos / CENTRO EDUCATIVO - Deber de custodia de los alumnos / RESPONSABILIDAD DEL ESTADO - Calidad de los educandos / OBLIGACION DE CUIDADO - Centro educativo
                    </strong>
                  </span>
                  {" "}
                  Sobre las instituciones educativas recae la responsabilidad por los daños que sus alumnos sufran u ocasionen a terceros cuando se encuentran bajo la tutela de las directivas y docentes del establecimiento educativo, bien sea en sus propias instalaciones o por fuera de las mismas; pero al mismo tiempo, considera necesario resaltar que la justificación para la existencia de esta responsabilidad, se halla en el hecho de que en los establecimientos educativos escolares, normalmente se forman y educan personas menores de edad, quienes por esta sola circunstancia se encuentran expuestas a muchos riesgos, toda vez que carecen de la madurez y buen criterio necesarios para regir sus actos y, en consecuencia, pueden incurrir en actuaciones temerarias, imprudentes, de las que se pueden derivar daños para sí mismos o para terceros; es por eso que el
                  {" "}
                  <span className="hl-green">
                    artículo 2347 del
                    {" "}
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                      Código Civil
                    </a>
                  </span>
                  {" "}
                  establece que “… los directores de colegios y escuelas responden del hecho de los discípulos mientras están bajo su cuidado (…)”, situación que sólo puede predicarse, precisamente, de quienes efectivamente requieran de ese cuidado.
                </p>
                <p>
                  El análisis de la responsabilidad de los establecimientos e instituciones educativas debe hacerse teniendo en cuenta la calidad de los educandos que hacen parte de los mismos, toda vez que no puede ser igual la relación de dependencia y subordinación que existe entre profesores adultos y alumnos menores de edad, que la existente entre personas todas mayores de edad, que se encuentran en ese proceso de aprendizaje, a nivel escolar o superior.
                  {" "}
                  <span className="hl-green">
                    FUENTE FORMAL:
                    {" "}
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                      CODIGO CIVIL - ARTICULO 2347
                    </a>
                    {" "}
                    NOTA DE RELATORIA:
                  </span>
                  {" "}
                  Responsabilidad de los centros educativos, Consejo de Estado, Sección Tercera, sentencias del 7 de septiembre de 2004, exp. 14869, C.P. Nora Cecilia Gómez Molina y del 18 de febrero de 2010, exps. 17533 y 17732, C.P. Mauricio Fajardo Gómez.
                </p>
              </div>
              <p>
                Frente al deber de cuidado: La custodia ejercida por los establecimientos educativos debe mantenerse no solo durante el tiempo que el alumno pasa en sus instalaciones, sino también durante la realización de otras actividades educativas o de recreación, como paseos, excursiones, viajes y demás eventos tendientes al desarrollo de programas escolares.
              </p>
              <p>
                De acuerdo con el Consejo de Estado, el deber de cuidado surge de la relación de subordinación entre el docente y el alumno, pues el primero, debido a la posición dominante que ostenta, tiene no solo el compromiso, sino la responsabilidad de impedir que el segundo actúe de una forma imprudente.
              </p>
              <p>
                Así lo advirtió el alto tribunal, al condenar al Municipio de Florida - blanca (DPTO DE STDER) a pagar más de 650 millones de pesos por los daños ocasionados a una menor de siete años de edad en las instalaciones de un COLEGIO OFICIAL Y PÚBLICO, donde fue víctima de abuso por parte de dos de sus compañeros, en 1998.
              </p>
              <p>
                La Sección Tercera, declaró la responsabilidad de la administración municipal, porque se vulneró un bien convencional y constitucional, como la protección del interés superior del niño, cuya seguridad debe ser garantizada en los establecimientos encargados de su cuidado. Entre las órdenes impartidas, el Municipio de Florida – Blanca, deberá, elaborar un diagnóstico sicológico de la víctima, hoy mayor de edad, para determinar si existen secuelas síquicas derivadas del trauma sufrido cuando era una niña, y, si es necesario, suministrar el tratamiento sicológico correspondiente para superar tales secuelas.
              </p>
              <p>
                La Sala pudo verificar que la menor fue lesionada mientras se encontraba en el colegio, lo que significa que la vigilancia de la que disponía la institución no tuvo la eficacia suficiente para garantizar su seguridad. A su juicio, el comportamiento de las directivas del colegio infringió normas internacionales como la Convención Americana sobre Derechos Humanos. “Los establecimientos educativos deben tener las normas de seguridad necesarias para impedir que la integridad corporal y psíquica de los niños sea vulnerada”. Y es evidente que en el caso sub judice dichas normas de seguridad no fueron implementadas o resultaron ineficaces; toda vez que una menor impúber fue agredida mientras estaba en el colegio público al que concurría cotidianamente”, señala la sentencia. El Consejo revocó la decisión del Tribunal Administrativo del DPTO DE S/TDER, por estimar que hizo una valoración indebida de las pruebas, ya que, en estos casos, aunque no exista una prueba directa de cómo ocurrieron los hechos, no se pueden desconocer las reglas de la experiencia, según las cuales, cuando se dan este tipo de agresiones, quienes las acometen obran encubiertos y ocultos de otras personas que los puedan delatar. (Consejo de Estado, Sección Tercera, Sentencia 68001231500019990261701, Consejero Ponente Jaime Orlando Santofimio).
              </p>
              <p className="estimulo-title">
                Ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  1098 de 2006
                </a>
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      Artículo 44. Obligaciones complementarias de las instituciones educativas.
                    </strong>
                  </span>
                  {" "}
                  Los directivos y docentes de los establecimientos académicos y la comunidad educativa en general pondrán en marcha mecanismos para:
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    2.
                  </strong>
                  {" "}
                  Establecer la detección oportuna y el apoyo y la orientación en casos de malnutrición, maltrato, abandono, abuso sexual, violencia intrafamiliar, y explotación económica y laboral, las formas contemporáneas de servidumbre y esclavitud, incluidas las peores formas de trabajo infantil.
                </p>
                <p>
                  (…)
                </p>
                <p>
                  <strong>
                    4.
                  </strong>
                  {" "}
                  Garantizar a los niños, niñas y adolescentes el pleno respeto a su dignidad, vida, integridad física y moral dentro de la convivencia escolar.
                </p>
              </div>
              <p className="estimulo-title">
                Obligaciones penales de los servidores y posiciones de garantía
              </p>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      CÓDIGO PENAL. ARTICULO 25. ACCIÓN Y OMISIÓN.
                    </strong>
                  </span>
                  {" "}
                  La conducta punible puede ser realizada por acción o por omisión. Quien tuviere el deber jurídico de impedir un resultado perteneciente a una descripción típica y no lo llevare a cabo, estando en posibilidad de hacerlo, quedara sujeto a la pena contemplada en la respectiva norma penal. A tal efecto, se requiere que el agente tenga a su cargo la protección en concreto del bien jurídico protegido, o que se le haya encomendado como garante la vigilancia de una determinada fuente de riesgo, conforme a la Constitución o a la ley.
                </p>
                <p>
                  Son constitutivas de posiciones de garantía, las siguientes situaciones:
                </p>
                <ol className="derechos-list">
                  <li>
                    Cuando se asuma voluntariamente la protección real de una persona o de una fuente de riesgo, dentro del propio ámbito de dominio.
                  </li>
                  <li>
                    Cuando exista una estrecha comunidad de vida entre personas.
                  </li>
                  <li>
                    Cuando se emprenda la realización de una actividad riesgosa por varias personas.
                  </li>
                  <li>
                    Cuando se haya creado precedentemente una situación antijuridica de riesgo próximo para el bien jurídico correspondiente.
                  </li>
                </ol>
                <p>
                  <span className="hl-green">
                    <strong>
                      Parágrafo.
                    </strong>
                  </span>
                  {" "}
                  Los numerales 1, 2, 3 y 4 solo se tendrán en cuenta en relación con las conductas punibles delictuales que atenten contra la vida e integridad personal, la libertad individual, y la libertad y formación sexuales.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      ARTÍCULO 219-B. OMISIÓN DE DENUNCIA.
                    </strong>
                  </span>
                  {" "}
                  El que, por razón de su oficio, cargo, o actividad, tuviere conocimiento de la utilización de menores para la realización de cualquiera de las conductas previstas en el presente capítulo y omitiere informar a las autoridades administrativas o judiciales competentes sobre tales hechos, teniendo el deber legal de hacerlo, incurrirá en multa de trece punto treinta y tres (13.33) a setenta y cinco (75) salarios mínimos legales mensuales vigentes. Si la conducta se realizare por servidor público, se impondrá, además, la pérdida del empleo.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      CÓDIGO PENAL. ARTÍCULO 417. ABUSO DE AUTORIDAD POR OMISIÓN DE DENUNCIA.
                    </strong>
                  </span>
                  {" "}
                  El servidor público que teniendo conocimiento de la comisión de una conducta punible cuya averiguación deba adelantarse de oficio, no dé cuenta a la autoridad, incurrirá en multa y pérdida del empleo o cargo público. La pena será de dos (2) a cuatro (4) años de prisión si la conducta punible que se omitiere denunciar sea de las contempladas en el delito de omisión de denuncia de particular.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      CÓDIGO PENAL. ARTÍCULO 414. PREVARICATO POR OMISIÓN.
                    </strong>
                  </span>
                  {" "}
                  El servidor público que omita, retarde, rehuse o deniegue un acto propio de sus funciones, incurrirá en prisión de treinta y dos (32) a noventa (90) meses, multa de trece punto treinta y tres (13.33) a setenta y cinco (75) salarios mínimos legales mensuales vigentes, e inhabilitación para el ejercicio de derechos y funciones públicas por ochenta (80) meses.
                </p>
              </div>
              <div className="quote-block">
                <p>
                  <span className="hl-green">
                    <strong>
                      LEY 1098 DE 2006. ARTÍCULO 139. SISTEMA DE RESPONSABILIDAD PENAL PARA ADOLESCENTES.
                    </strong>
                  </span>
                  {" "}
                  El sistema de responsabilidad penal para adolescentes es el conjunto de principios, normas, procedimientos, autoridades judiciales especializadas y entes administrativos que rigen o intervienen en la investigación y juzgamiento de delitos cometidos por personas que tengan entre catorce (14) y dieciocho (18) años al momento de cometer el hecho punible.
                </p>
              </div>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="delitos-complementarias">
              <p className="estimulo-title">
                Normas complementarias
              </p>
              <div className="quote-block">
                <p>
                  De otro lado, emerge inexcusable, inaplazable e indelegable, el acato y obediencia estricta ante el
                  {" "}
                  <span className="hl-green">
                    artículo 05 parágrafo, de la
                    {" "}
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                      ley 2025 de 2020
                    </a>
                  </span>
                  .
                </p>
                <p>
                  Que viene ligado al
                  {" "}
                  <span className="hl-green">
                    artículo 29 y artículo 30 de
                    {" "}
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                      ley 1620 de 2013
                    </a>
                  </span>
                  , en términos de los componentes de promoción y prevención, de la ruta de atención escolar.
                </p>
                <p>
                  <span className="hl-green">
                    <strong>
                      Parágrafo.
                    </strong>
                  </span>
                  {" "}
                  En todo caso, en desarrollo de los literales: C), E), G) y J), el diseño y definición de la estructura de la escuela de padres, madres y cuidadores de la que habla el presente artículo, deberá contar con un taller exclusivo que permita prevenir y atender la violencia sexual contra niños, niñas y adolescentes desde el interior de las familias.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="prev-maltrato">
          <p>
            De tal manera, que NO podemos incurrir en maltrato infantil, por descuido, omisión o trato negligente, y debemos estricto acato al
            {" "}
            <span className="hl-green">
              <strong>
                Concepto 152 del 28 de diciembre de 2017, del ICBF
              </strong>
            </span>
            ; que taxativamente, señala:
          </p>
          <div className="tipo-legal-ref">
            <p>
              <span className="hl-green">
                <strong>
                  ii) Definición de maltrato infantil según la UNICEF, Organización Mundial de la salud y categorías de maltrato según la Corte Constitucional:
                </strong>
              </span>
            </p>
            <p>
              La UNICEF define al maltrato infantil como: "niños que sufren ocasional o habitualmente actos de violencia física, sexual o emocional, sea en el grupo familiar, o en el entorno social. El maltrato puede ser ejecutado por omisión, supresión o transgresión dé los derechos individuales y colectivos e incluye el abandono completo y parcial.
            </p>
            <p>
              La Organización Mundial de la Salud -OMS, señala que el maltrato infantil se define “… como los abusos y la desatención de que son objeto los menores de 18 años, e incluye todos los tipos de maltrato físico o psicológico, abuso sexual, desatención, negligencia y explotación comercial o de otro tipo que causen o puedan causar un daño a la salud, desarrollo o dignidad del niño o poner en peligro su supervivencia, en el contexto de una relación de responsabilidad, confianza o poder;
            </p>
            <p>
              La exposición a la violencia de pareja también se incluye a veces entre las formas de maltrato infantil. La Corte Constitucional, al concluir que no existe limitación sobre quienes pueden ser los responsables perpetradores del maltrato infantil, puntualiza la definición del maltrato infantil; “…como toda conducta que tenga por resultado la afectación en cualquier sentido de la integridad física; psicológica o moral de los (as) menores de dieciocho (18) años por parte de cualquier persona.
            </p>
            <p>
              De otra parte, en la
              {" "}
              <span className="hl-green">
                <strong>
                  sentencia C-397 de 2010
                </strong>
              </span>
              , la Corte Constitucional señaló de manera general las categorías de maltrato infantil, así “…dentro de los estudios relacionados con el maltrato infantil se han establecido tres tipos. En primer lugar, el maltrato físico que estaría relacionado con las lesiones personales o el daño en el cuerpo del niño; en segundo término, el maltrato psicológico o emocional, relacionado con conductas como las amenazas constantes, las burlas y ofensas que afecten al niño mental y moralmente y, por último, el maltrato omisivo que se daría cuando al niño se le deja, en situación de abandono o descuido que puede afectar su vida o su salud.
              {" "}
              <span className="hl-green">
                Concepto del ICBF, No 152 del 28 de diciembre de 2017
              </span>
              .
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
