import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap13() {
  return (
    <>
      <Tabs ids={["dtab-deberes","dtab-convivencia"]} initial="dtab-deberes">
        <div className="section-header">
          <span className="section-num">
            13
          </span>
          <h2 className="section-title">
            Deberes Académicos y de Convivencia
          </h2>
        </div>
        <div className="deberes-tabs-bar">
          <TabButton tab="dtab-deberes" className="deberes-tab-btn">
            Deberes Académicos
          </TabButton>
          {" "}
          <TabButton tab="dtab-convivencia" className="deberes-tab-btn">
            Deberes de Convivencia
          </TabButton>
        </div>
        <TabPanel className="deberes-tab-content" id="dtab-deberes">
          <p className="sec-main-title">
            DEBERES ACADÉMICOS DEL O LA ESTUDIANTE
          </p>
          <p>
            Así como los educandos tienen derechos, los cuales han sido reconocidos en el presente Manual de Convivencia, correlativamente tienen obligaciones o deberes. En este sentido, directivas, docentes y padres de familia, desean inculcar a los educandos, la importancia de su cumplimiento, soportados en valores como el respeto, la honestidad, la afectividad, la responsabilidad y la lealtad a la institución.
            {" "}
            <span className="hl-green">
              Artículo 87 de la ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
              .
            </span>
          </p>
          <p>
            Es menester, aclarar que, el presente Manual de Convivencia, rinde estricto acato a las normas y a las leyes, a lo legislado y a lo reglado por la
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
              constitución
            </a>
            {" "}
            y las leyes, y al apego por la jurisprudencia, de las altas cortes y que, para el presente manual de convivencia, se entiende en estricto acato al
            {" "}
            <span className="hl-green">
              artículo 87 de la ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            , que es el origen y la concepción de los deberes del educando, que va ligado en conexidad con el
            {" "}
            <span className="hl-green">
              artículo 96 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            {" "}
            y que materializa la potestad y autonomía escolar, para definir bajo qué criterios se cancela una matrícula o se sanciona al educando, es manifiesto que para nuestro manual, la interpretación equivocada, y por cierto ilícita, de que, las faltas han desaparecido de los manuales de convivencia,
            {" "}
            <span className="hl-red">
              NO tiene un soporte o asidero jurídico
            </span>
            .
          </p>
          <p>
            Puesto que los
            {" "}
            <span className="hl-green">
              artículos 87 y 96 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
              , artículo 139 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                1098 de 2006
              </a>
            </span>
            {" "}
            y
            {" "}
            <span className="hl-green">
              artículos 25 y 414 del
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                código penal colombiano
              </a>
            </span>
            , y
            {" "}
            <span className="hl-green">
              artículos 2346 y 2348 del
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                código civil
              </a>
            </span>
            , siguen absoluta, total y completamente,
            {" "}
            <span className="hl-green">
              vigentes
            </span>
            .
          </p>
          <div className="commit-block">
            <p>
              De otro lado, esa interpretación errada y bizarra, que, -presuntamente- describe que el
              {" "}
              <span className="hl-green">
                artículo 40 del decreto
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537" target="_blank" style={{ color: "var(--green)" }}>
                  1965 de 2013
                </a>
              </span>
              , ha
              {" "}
              <span className="hl-red">
                "derogado"
              </span>
              {" "}
              la aplicación de las faltas, viola el derecho sancionador, viola el debido proceso, viola el principio de legalidad, viola la igualdad en armas, viola la lealtad procesal, viola el derecho a la defensa del educando, viola el principio de taxatividad de las normas, viola el principio de tipicidad de las faltas y de las sanciones, y desatiende los deberes y compromisos, obligaciones y sujeciones que ordena el
              {" "}
              <span className="hl-green">
                artículo 87 de la ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                  115 de 1994
                </a>
              </span>
              {" "}
              que, sigue vigente y por el contrario, esa afirmación bizarra de desaparecer, las faltas del texto del manual de convivencia, viola la autonomía escolar para sancionar, o para cancelar una matrícula, que emerge del
              {" "}
              <span className="hl-green">
                artículo 96 de ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                  115 de 1994
                </a>
              </span>
              {" "}
              que sigue vigente; desconoce el conducto regular y violenta gravemente, el principio de taxatividad de las normas. Viola, además, la tipicidad de las faltas que, señalan las
              {" "}
              <span className="hl-red">
                Sentencias T – 565 de 2013; T - 478 de 2015; la sentencia T – 240 DE 2018 y Sentencia T – 106 de 2019
              </span>
              .
            </p>
          </div>
          <p>
            Se debe clarificar y aclarar que, para el presente manual de nuestra Institución, a voces del derecho sancionador, el debido proceso, el principio de legalidad, la taxatividad y tipicidad de las faltas, y el derecho a la defensa del educando, y en estricto acato a los
            {" "}
            <span className="hl-green">
              artículos 87 y 96 de la ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            ;
            {" "}
            <span className="hl-red">
              las faltas leves, graves y muy graves, siguen siendo parte de nuestro Manual de Convivencia escolar
            </span>
            , hasta que emerja taxativa y precisa una norma legislada, o sentencia de efecto erga omnes, que nos ordene o ratifique lo contrario; y para nuestro manual de convivencia, coexisten las faltas con las situaciones. Dado que
            {" "}
            <span className="hl-green">
              las faltas son disciplinarias y las situaciones son conductuales o de conducta
            </span>
            .
          </p>
          <p>
            Lo anterior, como quiera que dentro de las obligaciones que los educandos se encuentra que, deben acatar, obedecer y cumplir, con todos sus compromisos y deberes que, disciplinariamente, los someten y que, deben cumplir en estricto apego a las normas, y que constituyen el consenso de la comunidad educativa; para fijar de manera taxativa y en legalidad: los deberes y los compromisos de los educandos, deberes y compromisos, obligaciones y sujeciones, cuya vulneración, desconocimiento y omisión, determinan la materialización y existencia de los conceptos de las faltas al interior taxativo del manual de convivencia, existen normas y compromisos, que los educandos deben cumplir, a voces del
            {" "}
            <span className="hl-green">
              artículo 87 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            ; y que al NO ser acatadas y respetadas, según la gravedad de la falta; nos facultan incluso para materializar,
            {" "}
            <span className="hl-red">
              la exclusión del educando. Art 96 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            . Siguiendo en apego al debido proceso,
            {" "}
            <span className="hl-red">
              Sentencia T – 240 de 2018
            </span>
            . En materia de que, emerge bizarro, inconstitucional, ilegal y absurdo, declarar al derecho a la educación, como si acaso, ostentara, la calidad de derecho absoluto. Cuando se ha decantado de marras, que es un
            {" "}
            <span className="hl-green">
              derecho condicionado o supeditado al deber
            </span>
            ; que emerge existente como derecho, si se sujeta al cumplimiento de deberes y compromisos, a menos que el acudiente o autoridad pertinente, suministre una norma legislada o constitucional, que indique que el derecho a la educación, es un derecho:
            {" "}
            <span className="hl-red">
              absoluto
            </span>
            .
          </p>
          <p>
            <span className="hl-green">
              Mientras ello no ocurra,
            </span>
            {" "}
            para el presente Manual de Convivencia, nos regiremos por los
            {" "}
            <span className="hl-green">
              artículos 87 y 96 de la ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            . Deberes y obligaciones taxativas, que debe cumplir el educando, al tenor de la misma jurisprudencia, así:
          </p>
          <p className="estimulo-title-red">
            SENTENCIA DE CORTE CONSTITUCIONAL T – 565 DE 2013.
          </p>
          <div className="quote-block">
            <p>
              Los manuales de convivencia deben ser respetuosos de los principios de legalidad y tipicidad de las faltas y las sanciones. En consecuencia, los estudiantes solo deben ser investigados y sancionados por faltas que hayan sido previstas con anterioridad a la comisión de la conducta y, de ser ello procedente, la sanción imponible también debió haber estado provista en el ordenamiento de la Institución educativa. Estos principios implican, de suyo, la obligatoriedad que el manual de convivencia sea puesto a disposición para el conocimiento de los estamentos que conforman la comunidad educativa. El ejercicio de la potestad disciplinaria debe basarse en los principios de contradicción y defensa, así como de presunción de inocencia.
            </p>
            <p>
              El estudiante tiene derecho a que le sea comunicado el pliego de cargos relativo a las faltas que se le imputan, con el fin que pueda formular los descargos correspondientes, así como presentar las pruebas que considere pertinentes. Del mismo modo, las autoridades de Nuestra Institución educativa oficial tienen el deber de demostrar suficientemente la comisión de la conducta, a partir del material probatorio, como condición necesaria para la imposición de la sanción. Finalmente, el estudiante sancionado debe contar con recursos para la revisión de las decisiones adoptadas.
            </p>
            <p>
              La Sala advierte que la jurisprudencia constitucional es unívoca en afirmar que el ejercicio de la potestad disciplinaria por parte de las autoridades de los establecimientos educativos debe: (i) cumplir con los estándares mínimos del derecho sancionador; y (ii) actuar de forma armónica y coordinada con los propósitos formativos del servicio público educativo, por lo que no puede desligarse de un objetivo pedagógico definido.
            </p>
          </div>
          <p className="estimulo-title-red">
            CORTE CONSTITUCIONAL, SENTENCIA DE TUTELA: T- 240 DEL 26 DE JUNIO DE 2018.
          </p>
          <p className="subtitle-green">
            4. Los manuales de convivencia y el derecho al debido proceso en los procedimientos disciplinarios adelantados por las instituciones educativas. Reiteración de jurisprudencia.
          </p>
          <div className="quote-block">
            <p>
              4.1. El derecho a la educación contempla la garantía de que el debido proceso debe ser guardado en los trámites disciplinarios en instituciones educativas. Desde el inicio de su jurisprudencia y a lo largo de la misma, la Corte Constitucional ha reconocido el carácter fundamental del derecho a la educación, su estrecha relación con el debido proceso a propósito de los trámites que se adelanten en dicho contexto –en especial, si se trata de procesos sancionatorios– y la posibilidad de que la protección del goce efectivo del mismo pueda lograrse mediante la acción de tutela. Entre los elementos esenciales del derecho al debido proceso, aplicables en materia educativa, se encuentran, entre otros, el derecho a la defensa, el derecho a un proceso público y el derecho a la independencia e imparcialidad de quien toma la decisión.
            </p>
            <p>
              4.2. En reiteradas oportunidades, la Corte Constitucional ha señalado que los manuales de convivencia de los establecimientos de educación tienen tres dimensiones. Así, en la
              {" "}
              <span className="hl-green">
                Sentencia T-859 de 2002
              </span>
              {" "}
              la Sala Séptima de Revisión sostuvo que, primero, estos documentos ostentan las características propias de un contrato de adhesión; segundo, representan las reglas mínimas de convivencia escolar y, tercero, son la expresión formal de los valores, ideas y deseos de la comunidad educativa conformada por las directivas de nuestra institución, sus empleados, los estudiantes y sus padres de familia. También, esta condición está reconocida expresamente por la ley general de educación en su
              {" "}
              <span className="hl-green">
                artículo 87
              </span>
              . Sin embargo, la misma norma señala que para que dichos manuales sean oponibles y exigibles, los mismos deben ser conocidos y aceptados expresamente por los padres de familia y los estudiantes.
            </p>
          </div>
          <p className="subtitle-green">
            Corolario de lo anterior,
          </p>
          <p className="estimulo-title-red">
            TUTELA CORTE CONSTITUCIONAL T – 478 DE 2015.
          </p>
          <div className="quote-block">
            <p>
              Los procedimientos disciplinarios de las instituciones educativas, deben garantizar, el derecho a la defensa del estudiante, a quien se le impute, la comisión de una determinada falta, razón por la cual, los manuales de convivencia escolar, deben contener como mínimo: (i) la determinación de las faltas disciplinarias y de las sanciones respectivas; y (ii) el procedimiento a seguir, previo a la imposición de cualquier sanción. Con respecto a lo primero, es decir, a la determinación de las faltas, y de las sanciones, este tribunal, (Corte Constitucional), ha establecido que la garantía del debido proceso, exige que los manuales de convivencia escolar, describan con precisión razonable, los elementos generales de la falta, distingan claramente su calificación. (esto es, si se trata de una falta grave o leve) y determinen también con claridad la sanción que se desprende de la misma.
            </p>
          </div>
          <p className="estimulo-title-red">
            CORTE CONSTITUCIONAL, SENTENCIA T-713 DE 2010
          </p>
          <div className="quote-block">
            <p>
              El derecho a ser sancionada que tiene toda persona menor de edad, como parte del proceso de la formación, es un derecho constitucional fundamental. Afrontar esa restricción constituye una medida adecuada que propende por un fin legítimo que es educar a la estudiante; permitirle formarse integralmente, para que, en un futuro, la sociedad no le impida acceder a cargos de dirección pública, ya no en el contexto educativo, sino profesional y político. Impedirle la consecuencia sancionatoria a esa persona, sería pues, impedirle entender y comprender las dimensiones de sus actos y propiciar que, en el futuro, se insiste, sea una persona excluida de la posibilidad de acceder a más altas dignidades. Toda sanción legítima y razonable en el contexto educativo, debe posibilitar el crecimiento y desarrollo como persona de todo individuo.
              {" "}
              <span className="hl-green">
                M.P. Dra. MARÍA VICTORIA CALLE CORREA. Bogotá, D.C., ocho (08) de septiembre de dos mil diez (2010).
              </span>
            </p>
          </div>
          <p className="estimulo-title-red">
            CORTE CONSTITUCIONAL, SENTENCIA T-076 DE 2023
          </p>
          <p>
            <span className="hl-green">
              Página 23.
            </span>
            {" "}
            En el marco de estas consideraciones, la Corte ha advertido que,
          </p>
          <div className="quote-block">
            <p>
              "El derecho a ser sancionada que tiene toda persona menor de edad, como parte del proceso de formación, es un derecho constitucional fundamental. Afrontar esa restricción constituye una medida adecuada que propende por un fin legítimo que es educar a la estudiante; permitirle formarse integralmente […]. Impedirle la consecuencia sancionatoria a esa persona, sería pues, impedirle entender y comprender las dimensiones de sus actos […]. Toda sanción legítima y razonable en el contexto educativo, debe posibilitar el crecimiento y desarrollo como persona de todo individuo."
              {" "}
              <span className="hl-green">
                Sentencia T-713 de 2010. M.P. María Victoria Calle Correa.
              </span>
            </p>
          </div>
          <p>
            Nuestro manual de convivencia escolar,
            {" "}
            <span className="hl-red">
              NO acepta y NO tiene de recibo
            </span>
            , sugerencias, recomendaciones o inducciones al error, que manifiesten que
            {" "}
            <span className="hl-red">
              las faltas, han desaparecido del texto taxativo del manual de convivencia
            </span>
            . Ver
            {" "}
            <span className="hl-green">
              artículos 182, 183 y 184 del
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                Código Penal Colombiano
              </a>
            </span>
            . De manera especial, en consenso educativo, y de nuestra comunidad escolar, se fijan los siguientes deberes, compromisos, obligaciones y sujeciones a los educandos, armoniosos con el
            {" "}
            <span className="hl-green">
              artículo 87 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            , absolutamente, vigente:
          </p>
          <ol className="derechos-list">
            <li>
              Cumplir oportunamente en la entrega de trabajos, presentación de tareas, actividades de refuerzo y suficiencia, en las fechas programadas, salvo en inasistencia justificada.
            </li>
            <li>
              Contar con sus propios libros, útiles y demás elementos necesarios para el buen desempeño escolar.
            </li>
            <li>
              Participar en las clases de forma activa.
            </li>
            <li>
              Escuchar con atención las explicaciones del profesor y participaciones de los compañeros o compañeras con respeto.
            </li>
            <li>
              Asistir puntualmente a clase y demás actividades programadas por la institución.
            </li>
            <li>
              Preparar adecuadamente las evaluaciones según los criterios a evaluar en cada área.
            </li>
            <li>
              Tomar apuntes y llevar los cuadernos en forma clara y organizada.
            </li>
            <li>
              Cuidar el material didáctico suministrado por la institución, o facilitado por el docente y/o compañeros.
            </li>
            <li>
              Respetar, las notas y observaciones que se consignan en sus cuadernos de trabajo, talleres, plantillas de Calificaciones, evaluaciones o cualquier otro documento que pertenezca al personal docente y al archivo de nuestra institución.
            </li>
            <li>
              No sabotear, suplantar a compañeros o compañeras, ni ser sorprendidos en fraude de trabajos y evaluaciones.
            </li>
            <li>
              Participar activamente en las diferentes actividades académicas y proyectos pedagógicos programados en las diferentes áreas del conocimiento.
            </li>
          </ol>
        </TabPanel>
        <TabPanel className="deberes-tab-content" id="dtab-convivencia">
          <p className="sec-main-title">
            DEBERES DE CONVIVENCIA DEL O LA ESTUDIANTE
          </p>
          <p>
            El o La estudiante tienen como obligación principal y compromiso conocer y acatar, los artículos de la
            {" "}
            <span className="hl-green">
              ley de infancia y adolescencia,
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                1098 de 2006
              </a>
            </span>
            ,
            {" "}
            <span className="hl-green">
              Decreto
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39177" target="_blank" style={{ color: "var(--green)" }}>
                860º de 2010
              </a>
            </span>
            ,
            {" "}
            <span className="hl-green">
              Ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                1146º de 2007
              </a>
            </span>
            {" "}
            y especialmente lo consagrado en
            {" "}
            <span className="hl-green">
              La Ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                1620º de 2013
              </a>
              {" "}
              y su Decreto Reglamentario
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537" target="_blank" style={{ color: "var(--green)" }}>
                1965º de 2013
              </a>
            </span>
            , además de lo que exige el nuevo
            {" "}
            <span className="hl-green">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=80538" target="_blank" style={{ color: "var(--green)" }}>
                Código Nacional de Policía
              </a>
            </span>
            , en sus artículos: Art. 7º; 8º; 10º; 19º; 26º; 27º; 33º; 34º; 35º; 36º; 37º; 38º; 39º; 40º, 43º; 73º; 84º; 92º; 140º; 146º; 155º; 159º; 162º; 174º; 175º; 180º; 181º. Y la
            {" "}
            <span className="hl-green">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=159547" target="_blank" style={{ color: "var(--green)" }}>
                ley 2000
              </a>
              {" "}
              del 14 de noviembre de 2019, ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                2025 de 2020
              </a>
              , y decreto
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913" target="_blank" style={{ color: "var(--green)" }}>
                1075 de 2015
              </a>
            </span>
            .
          </p>
          <p>
            Normas, que regulan su proceder, dentro de la sana convivencia en comunidad, y máxime cuando su desempeño en el ámbito escolar, lo comparte con
            {" "}
            <span className="hl-green">
              la primera infancia
            </span>
            {" "}
            de Nuestra Institución educativa oficial; que puede llegar a ser vulnerada, estimulada, inducida o coercitada a imitar, las conductas de los adolescentes más grandes que ellos; de igual forma, el o la estudiante, tienen el compromiso de acatar y obedecer, los pronunciamientos referentes a los fragmentos de las sentencias de la corte y los fallos de tutela, comprendiendo que su
            {" "}
            <span className="hl-green">
              libre desarrollo de la personalidad está limitado o condicionado
            </span>
            {" "}
            a que
            {" "}
            <span className="hl-red">
              no vulnere, agreda o afecte a los demás educandos, menores de 14 años de edad y en especial a la primera infancia
            </span>
            .
          </p>
          <p>
            Toda vez que de ninguna manera
            {" "}
            <span className="hl-red">
              sus derechos son absolutos
            </span>
            ; y mucho menos puede pretender un educando particular, que es el único educando, dentro del plantel educativo, que se constituye como depositario de derechos, sino que, por el contrario, los demás educandos y las demás personas, también son depositarios y beneficiarios de los mismos derechos, como exige el
            {" "}
            <span className="hl-green">
              artículo 13 de la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
                constitución
              </a>
            </span>
            {" "}
            cuando indica que, frente a la ley,
            {" "}
            <span className="hl-green">
              todos somos iguales
            </span>
            .
          </p>
          <p>
            De manera, que ningún estudiante o educando de nuestra INSTITUCION OFICIAL Y PÚBLICA, ostenta
            {" "}
            <span className="hl-red">
              derechos absolutos o primacía o supra derechos sobre los demás
            </span>
            , el manual de convivencia es el mismo, para todos.
          </p>
          <p>
            Respeto que, se exige y se invoca, especialmente, frente a
            {" "}
            <span className="hl-green">
              la primera infancia
            </span>
            , prevaleciendo siempre los derechos de la comunidad sobre los derechos de un particular como lo consagra el
            {" "}
            <span className="hl-green">
              artículo 01º de la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
                Constitución Nacional
              </a>
            </span>
            , en todos los casos. También atendiendo a los fragmentos de las sentencias de la Corte Constitucional que se pronuncian al respecto así:
          </p>
          <div className="quote-block">
            <p>
              "La educación como derecho fundamental conlleva deberes del estudiante, uno de los cuales es someterse y cumplir el reglamento o las normas de comportamiento establecidas por el plantel educativo a que está vinculado. Su inobservancia permite a las autoridades escolares tomar las decisiones que correspondan, siempre que se observe y respete el debido proceso del estudiante, para corregir situaciones que estén por fuera de la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
                Constitución
              </a>
              , de la ley y del ordenamiento interno del ente educativo (…) El deber de los estudiantes radica, desde el punto de vista disciplinario, en respetar el reglamento y las buenas costumbres, y en el caso particular se destaca la obligación de mantener las normas de presentación establecidas por el Colegio, así como los horarios de entrada, de clases, de recreo y de salida, y el debido comportamiento y respeto por sus profesores y compañeros. El hecho de que el menor haya tenido un aceptable rendimiento académico no lo exime del cumplimiento de sus deberes de alumno.
              {" "}
              <span className="hl-green">
                Corte Constitucional, Sentencia T-569 de 1994. Subraya y negrilla fuera del texto.
              </span>
            </p>
          </div>
          <p className="estimulo-title-red">
            CORTE CONSTITUCIONAL, TUTELA T – 101 DE 2016.
          </p>
          <div className="quote-block">
            <p>
              Al respecto, en la
              {" "}
              <span className="hl-green">
                sentencia SU-642 de 1998
              </span>
              , MP. Eduardo Cifuentes Muñoz, se dijo que "Para la Sala, no existe duda alguna de que todo colombiano, sin distingo alguno de edad, es titular del derecho fundamental al libre desarrollo de la personalidad, el cual, como lo ha manifestado la Corte, constituye emanación directa y principal del principio de dignidad humana. Sin embargo, el hecho de que el libre desarrollo de la personalidad sea uno de los derechos personalísimos más importantes del individuo, no implica que su alcance y efectividad no puedan ser ponderados frente a otros bienes y derechos constitucionales o que existan ámbitos en los cuales este derecho fundamental ostente una eficacia más reducida que en otros." Y en
              {" "}
              <span className="hl-green">
                sentencia C-481 de 1998
              </span>
              , M.P. Alejandro Martínez Caballero, la Sala Plena indicó que "del reconocimiento del derecho al libre desarrollo de la personalidad, se desprende un verdadero derecho a la identidad personal, que, en estrecha relación con la autonomía, identifica a la persona como un ser que se auto determina, se auto posee, se autogobierna, es decir que es dueña de sí, de sus actos y de su entorno".
            </p>
          </div>
          <p className="estimulo-title-red">
            SENTENCIA T – 435 DE 2002. DERECHO AL LIBRE DESARROLLO DE LA PERSONALIDAD- NO ES ABSOLUTO.
          </p>
          <div className="quote-block">
            <p>
              El derecho al libre desarrollo de la personalidad
              {" "}
              <span className="hl-red">
                no es absoluto
              </span>
              , pues debe armonizarse con el normal funcionamiento de las instituciones y con el ejercicio pacífico de las libertades. Ciertamente, esta Corporación ha sostenido que la escogencia de la opción de vida no puede ser entendida como un mecanismo para eludir las obligaciones sociales o de solidaridad colectiva, pues esto constituiría un abuso de los derechos propios. Se trata más bien de una potestad que permite al individuo desarrollar las alternativas propias de su identidad, la cual debe ser respetada y tolerada por la sociedad. La Educación, sólo es posible cuando se da la convivencia y si la disciplina afecta gravemente a ésta última, ha de prevalecer el interés general y se puede respetando el debido proceso, separar a la persona del establecimiento Educativo.
            </p>
          </div>
          <div className="quote-block">
            <p>
              Además, la permanencia de la persona en el sistema educativo está condicionada por su concurso activo en la labor formativa; la falta de rendimiento intelectual también puede llegar a tener suficiente entidad como para que la persona sea retirada del establecimiento donde debía aprender y no lo logra por su propia causa.
              {" "}
              <span className="hl-green">
                Corte Constitucional, Sentencia T- 316 de 1994.
              </span>
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
