import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap23() {
  return (
    <>
      <Tabs ids={["infa-herramientas","infa-sanciones"]} initial="infa-herramientas">
        <div className="section-header">
          <span className="section-num">
            23
          </span>
          <h2 className="section-title">
            Infracciones Administrativas
          </h2>
        </div>
        <div className="tipo-tabs-bar mini">
          <TabButton tab="infa-herramientas" className="tipo-tab-btn">
            Otras Herramientas Institucionales
          </TabButton>
          {" "}
          <TabButton tab="infa-sanciones" className="tipo-tab-btn">
            Artículo 35. Sanciones
          </TabButton>
        </div>
        <TabPanel className="tipo-tab-content mini" id="infa-herramientas">
          <p>
            <span className="hl-green">
              <strong>
                OTRAS HERRAMIENTAS INSTITUCIONALES PARA HACER FRENTE AL MATONEO O ACOSO ESCOLAR, son:
              </strong>
            </span>
          </p>
          <div className="tipo-para">
            <p>
              Protocolo sugerido por los autores del presente Manual de convivencia, y aprobado por el Consejo Directivo, para abordar los casos de matoneo o acoso escolar:
            </p>
          </div>
          <p>
            Es procedente señalar, que todo el proceso de acompañamiento a los docentes, padres de familia y a los agresores y agredidos o víctimas y victimarios, es un conjunto de acciones conjuntas entre el colegio y su dinámica formativa y el núcleo familiar como fuente de la educación y formación integral en valores, moral, principios, respeto y dignidad, es decir, que cada uno de los protagonistas del entorno escolar asuma su rol de una manera específica y precisa, sin dejar vacíos que logren filtrar la reiteración de las conductas. Lo que se busca como finalidad principal, es que exista un cambio radical en las actuaciones de los agresores y su posterior acompañamiento psicológico para que se desprendan de esas acciones nocivas, y obviamente el acompañamiento de las víctimas y de su familia, para que se restablezcan sus derechos y se brinden las herramientas que optimicen la carga positiva de su autoestima y puedan superar el hecho de violencia, sea psicológico, físico, moral, subjetivo u objetivo.
          </p>
          <p>
            Debe abordarse con especial atención, el proceso mediante el cual se inicia de manera
            {" "}
            <em>
              –inmediata-
            </em>
            {" "}
            por parte de nuestra institución, de los docentes y de los padres de familia (tanto del agresor como del agredido), que conlleve al restablecimiento de derechos del agredido. También actuaciones y acciones, que deriven en la búsqueda pedagógica de cambio del agresor, de tal manera que se le acompañe también de manera directa y de acompañamiento psicológico, y se le brinden espacios de reflexión, mejora y cambios positivos. Si es del caso, remitiendo el alumno agresor a un centro especializado.
          </p>
          <p>
            Brindando, armonía con el texto del manual de convivencia y abordando los casos, en que el agresor es otro menor de edad, se debe reportar el caso (
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
              artículo 44 numeral 9 de ley 1098 de 2006
            </a>
            ,
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
              artículo 25 del Código Penal
            </a>
            ,
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
              Ley 1146 de 2007
            </a>
            ) de tal manera que la Policía de Infancia y Adolescencia, o el Defensor de Familia o Juez de Adolescencia, determine a través de su condición de autoridades judiciales especializadas para que aborden la actuación punible e impongan el restablecimiento de derechos, y/o las medidas y sanciones a tono del proceder del menor infractor. Debe tenerse especial atención en cuanto al debido proceso, ligado al manual de convivencia, que debe estar obviamente
            {" "}
            <em>
              –actualizado a la normativa legal y jurídica-
            </em>
            {" "}
            vigente al momento de los hechos, y en estricta armonía con la ruta de atención.
          </p>
          <p>
            Igualmente, debe recordarse que se otorga expresa competencia en prevalencia para la
            {" "}
            <span className="hl-green">
              <strong>
                Procuraduría General de la Nación
              </strong>
            </span>
            , quien se ocupará de investigar disciplinariamente a los funcionarios públicos, (Rectores, coordinadores, docentes, orientadores) frente a las actuaciones de omisión o de acción donde se vulnere a los menores de edad.
          </p>
          <p>
            El protocolo que sugerimos como institución educativa, obedece a procesos ya asimilados por otras instituciones educativas que los han puesto en práctica, arrojando excelentes resultados, razón por la cual, se define el protocolo así:
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                <span className="hl-green">
                  <strong>
                    Profesores y directivos
                  </strong>
                </span>
                {" "}
                deben tener dentro de sus funciones la detección de los casos de matoneo y acoso escolar, microtráfico y consumo de sustancias, y abuso sexual especialmente, para lo cual, deben ser previamente orientados y capacitados por personal idóneo en el tema y que les brinde pautas a seguir, para detectar a los agresores y a los agredidos.
              </p>
            </li>
            <li>
              <p>
                Detectado el caso de matoneo, acoso escolar o cyberbullying, o abuso sexual, el proceso a seguir es
                {" "}
                <span className="hl-green">
                  <strong>
                    recopilar las versiones y los testimonios de los menores
                  </strong>
                </span>
                , en presencia del Psicólogo – Psicoorientador o quien haga sus veces dentro del establecimiento educativo.
              </p>
              <p>
                Esta persona hará las veces de acompañamiento psicológico y le brindará la legalidad requerida al debido proceso. Deben estar presentes el Director o Directora de grupo y los coordinadores de disciplina a cargo.
                {" "}
                <span className="hl-red">
                  <strong>
                    JAMAS, se debe interrogar a los educandos
                  </strong>
                </span>
                , solamente se debe recibir sus descargos o su testimonio en versión libre y espontánea, lo cual quedará por escrito en el acta de debido proceso de puño y letra del alumno agredido.
              </p>
            </li>
            <li>
              <p>
                Acto seguido, ponderado el problema, y evaluados los antecedentes de los hechos y la gravedad de la conducta, se prosigue a
                {" "}
                <span className="hl-green">
                  <strong>
                    citar a los padres de los intervinientes
                  </strong>
                </span>
                {" "}
                (Agresor y Agredido) para que asistan al colegio, de tal manera que se les socialice la situación.
              </p>
            </li>
            <li>
              <p>
                De comprobarse que las actuaciones corresponden a un hecho delictivo o punible, se le pondrá de conocimiento a las
                {" "}
                <span className="hl-green">
                  <strong>
                    autoridades especializadas
                  </strong>
                </span>
                {" "}
                a saber, para que ellos le brinden continuidad al debido proceso y establezcan las sanciones o medidas a tomarse en cada caso concreto.
              </p>
            </li>
            <li>
              <p>
                Definida la situación y la sanción, los agresores, deben asumir su sanción y su responsabilidad y además
                {" "}
                <span className="hl-green">
                  <strong>
                    ofrecer disculpas en público
                  </strong>
                </span>
                , a su grupo de compañeros en el salón, como reparación del daño causado y como restitución del mismo, y restablecimiento de los derechos del alumno o alumna agredido(a).
              </p>
            </li>
            <li>
              <p>
                De la misma manera, debe desarrollar un trabajo con el tema de prevención del matoneo, de mínimo
                {" "}
                <span className="hl-green">
                  <strong>
                    quince (15) hojas manuscrito
                  </strong>
                </span>
                , con una cartelera o Power Point, y exponerlo ante sus compañeros en la hora de dirección de grupo, humanidades o español y literatura, según defina el Gobierno escolar en la sanción. Donde se hará especial énfasis en repudiar el matoneo o acoso escolar.
              </p>
            </li>
            <li>
              <p>
                Se brindará por igual, acompañamiento y seguimiento de orientación psicológica, tanto al agresor como al agredido. Tal acompañamiento,
                {" "}
                <span className="hl-red">
                  <strong>
                    NO será inferior nunca a cinco (5) sesiones de cuarenta y cinco minutos
                  </strong>
                </span>
                {" "}
                con cada actor.
              </p>
            </li>
            <li>
              <p>
                Se establecerán unos
                {" "}
                <span className="hl-green">
                  <strong>
                    acuerdos de conciliación y sanción entre los padres
                  </strong>
                </span>
                {" "}
                de los educandos involucrados en el hecho. De tal manera, que los padres acudan a reparar el daño que realizó su hijo, de una manera pedagógica y asertiva y, para ello, deben pedir disculpas a la Asamblea de Padres de manera pública, por las actuaciones negativas e indecorosas de sus hijos, en la siguiente reunión de padres, sin excusa y sin dilación.
              </p>
            </li>
            <li>
              <p>
                Se realizará un
                {" "}
                <span className="hl-green">
                  <strong>
                    seguimiento de las relaciones interpares
                  </strong>
                </span>
                {" "}
                entre las partes involucradas para que NO se reincida en el acoso o matoneo y para que no se involucren terceros que disipen o entorpezcan la dinámica de reconciliación y restablecimiento de derechos.
              </p>
            </li>
            <li>
              <p>
                Se citará a los padres de familia (asamblea general) a un
                {" "}
                <span className="hl-green">
                  <strong>
                    taller escuela de padres
                  </strong>
                </span>
                , y a la semana de la dignidad, con el único objeto de orientarlos, capacitarlos y formarlos en el tema de la prevención del matoneo y acoso escolar o el cyberbullying. Esta reunión de padres de familia; será de carácter ineludible, inaplazable y, especialmente obligatoria y tendrá tres sesiones durante todo el transcurso del año.
              </p>
            </li>
            <li>
              <p>
                Se desarrollarán
                {" "}
                <span className="hl-green">
                  <strong>
                    jornadas de sensibilización
                  </strong>
                </span>
                {" "}
                y de recordación de los principios del orden y la disciplina, donde se hará especial énfasis, en la prevención del matoneo, como el ejercicio del auto-respeto, del respeto mutuo, de la tolerancia a la diferencia, de la aceptación de las diferentes posiciones y discursos y sobre todo, el respeto por los más pequeños y el abordaje del ejemplo desde lo cotidiano. Igualmente, que se tome la cultura de la denuncia y del señalamiento ante actuaciones de carácter negativo donde se vean vulnerados los educandos, con miras a romper "la ley del silencio" para así lograr cambios y soluciones reales y prontas.
              </p>
            </li>
            <li>
              <p>
                <span className="hl-green">
                  <strong>
                    Exigir a las directivas del Colegio
                  </strong>
                </span>
                , que el manual de convivencia, esté acompasado y debidamente actualizado a la normativa jurídico – legal vigente, de tal forma que se respeten las formas del debido proceso en todos los casos.
              </p>
            </li>
          </ol>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="infa-sanciones">
          <div className="tipo-legal-ref">
            <p>
              <span className="hl-green">
                <strong>
                  ARTICULO 35. SANCIONES.
                </strong>
              </span>
            </p>
            <p>
              Las conductas de los actores del sistema en relación con la omisión, incumplimiento o retraso en la implementación de la Ruta o en el funcionamiento de los niveles de la estructura del Sistema se sancionarán de acuerdo con lo establecido en el
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=14787" target="_blank" style={{ color: "var(--green)" }}>
                Código General y de Procedimiento Penal
              </a>
              , el
              {" "}
              <span className="hl-green">
                <strong>
                  Código Único Disciplinario
                </strong>
              </span>
              {" "}
              y el
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                Código de la Infancia y la Adolescencia
              </a>
              .
            </p>
          </div>
          <div className="tipo-legal-ref">
            <p>
              <span className="hl-green">
                <strong>
                  ARTÍCULO 38º. DE LAS FALTAS DISCIPLINARIAS DE LOS DOCENTES Y DIRECTIVOS DOCENTES OFICIALES.
                </strong>
              </span>
            </p>
            <p>
              En las instituciones educativas de carácter oficial, los docentes y directivos docentes en el marco de las funciones asignadas a su respectivo cargo, serán responsables por hacer efectiva la implementación del Sistema al interior de las mismas.
              {" "}
              <span className="hl-red">
                <strong>
                  La omisión o el incumplimiento de este deber constituyen una falta disciplinaria
                </strong>
              </span>
              {" "}
              y dará lugar a las sanciones previstas por la ley para estos servidores.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
