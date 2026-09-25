import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap16() {
  return (
    <>
      <Tabs ids={["proc-etapas-procedimiento","proc-etapas-proceso"]} initial="proc-etapas-procedimiento">
        <div className="section-header">
          <span className="section-num">
            16
          </span>
          <h2 className="section-title">
            Solución de Conflictos
          </h2>
        </div>
        <p className="section-intro">
          De acuerdo a la naturaleza del conflicto, el debido proceso se implementará, en primer lugar, de manera directa y concertada con el propósito de una solución inmediata que satisfaga los intereses de las partes. En segundo lugar, si la naturaleza del conflicto lo amerita, se acude al procedimiento legalmente establecido, especialmente frente a las
          {" "}
          <span className="hl-red">
            Situaciones Tipo III
          </span>
          , que constituyan delito o infracción de ley.
        </p>
        <p>
          Para ello, acudiremos como Institución Educativa, a un protocolo de salvaguarda y de amparo de los derechos y del debido proceso, como ordena la jurisprudencia, así:
        </p>
        <p>
          Corolario de lo anterior; se tiene como acreditación del conducto regular, lo siguiente:
        </p>
        <ol className="derechos-list">
          <li>
            Notificación del hecho; acompañado de indicios y pruebas pertinentes.
          </li>
          <li>
            Garantía y materialización del derecho de defensa y contradicción a la parte afectada.
          </li>
          <li>
            Descargos en versión libre, abierta y espontanea de los implicados, acerca de los hechos a estudiar, analizar y establecer como verdad. El educando, lo escribirá de su puño y letra y el docente jamás escribirá, tampoco acudirá a hacer preguntas o interrogar, so pena de cometer un delito de extralimitación de funciones, pues el educador NO es un policía judicial, defensor de familia, personero, comisario de familia, o juez o fiscal, es un educador y ya. Ver
            {" "}
            <span className="hl-green">
              artículo 150 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                1098 de 2006
              </a>
            </span>
            .
          </li>
        </ol>
        <p>
          Cuando se trate de un menor de primera infancia,
          {" "}
          <span className="hl-red">
            EXCEPCIONALMENTE
          </span>
          , absolutamente excepcional, se podrá grabar en audio, con base en el
          {" "}
          <span className="hl-green">
            artículo 44 numeral 4 y artículo 18, ambos de ley
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
              1098 de 2006
            </a>
          </span>
          . Sin grabar su rostro, para No violentar su intimidad,
          {" "}
          <span className="hl-green">
            artículo 33 de ley
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
              1098 de 2006
            </a>
          </span>
          .
        </p>
        <ol className="derechos-list" start="4">
          <li>
            Análisis del conflicto con intervención de las partes.
          </li>
          <li>
            Decisión final dictada por las autoridades de nuestra institución Educativa.
          </li>
          <li>
            Derecho a la defensa, igualdad en armas y lealtad procesal.
          </li>
          <li>
            Recurso de Reposición en tres (3) días, hábiles.
          </li>
          <li>
            Recurso de Apelación en cinco (5) días, hábiles.
          </li>
        </ol>
        <p>
          Si el educando o sus acudientes, NO presentan recurso de reposición, en absoluta garantía del interés superior, procederá, el recurso de apelación, para evitar, cualquier violación al conducto regular y al debido proceso.
        </p>
        <p>
          Todo conflicto debe ser respondido, en la primera instancia, en el término de cinco (5) días hábiles y debe dejarse en constancia por escrito a las partes, a través de actas especiales de debido proceso. Armonizando con lo anterior, los registros de los hechos se consignarán en el observador del estudiante y/o acta de compromiso. De puño y letra del educando y su firma.
        </p>
        <p>
          De no acudir el educando a relatar sus descargos de su puño y letra, o abstenerse de relatar, los hechos, firmarán: primer respondiente o primer conocedor del caso; director de grupo; coordinador de convivencia, orientador, rector. Manifestando que se le garantizó el debido proceso y derecho a la defensa al educando, y que éste, acudió a su legítimo derecho a guardar silencio y su derecho a NO auto incriminarse.
        </p>
        <p className="subtitle-green">
          Conducto regular en la mediación de conflictos
        </p>
        <p>
          El marco antropológico para la solución de conflictos se circunscribe a los procesos de mediación, diálogo, participación y atención a los conflictos dentro de los principios de equidad y justicia, sin acudir a conciliar jamás,
          {" "}
          <span className="hl-red">
            situaciones Tipo III
          </span>
          . El conducto regular en la mediación de conflictos y según su gravedad es el siguiente:
        </p>
        <ol className="derechos-list">
          <li>
            Profesor conocedor de la situación
          </li>
          <li>
            Director(a) de grado
          </li>
          <li>
            Coordinación (convivencia y/o académico según sea el caso en la principal)
          </li>
          <li>
            Orientación escolar
          </li>
          <li>
            Comité de Convivencia institucional y solución de conflictos
          </li>
          <li>
            Consejo Directivo
          </li>
          <li>
            Rector
          </li>
        </ol>
        <p>
          De acuerdo con este seguimiento se evaluará, la actuación u omisión del educando de cara a la falta disciplinable, atendiendo a la naturaleza de la falta y a lo dispuesto en el presente MANUAL DE CONVIVENCIA ESCOLAR.
        </p>
        <div className="proc-tabs-bar">
          <TabButton tab="proc-etapas-procedimiento" className="proc-tab-btn">
            Etapas del Procedimiento Disciplinario
          </TabButton>
          {" "}
          <TabButton tab="proc-etapas-proceso" className="proc-tab-btn">
            Etapas del Debido Proceso
          </TabButton>
        </div>
        <TabPanel className="proc-tab-content" id="proc-etapas-procedimiento">
          <div className="proc-blocks">
            <div className="commit-block">
              <p className="estimulo-title">
                CORTE CONSTITUCIONAL — T - 004 DE 2024.
              </p>
              <p>
                <strong>
                  72.
                </strong>
                {" "}
                En diferentes pronunciamientos, la Corte Constitucional, ha determinado que, como mínimo, la reglamentación disciplinaria de las instituciones educativas debe contener, lo siguiente:
              </p>
              <ol className="derechos-list">
                <li>
                  La notificación formal mediante la cual la institución da apertura al proceso disciplinario a la persona a quien se imputan las conductas susceptibles de ser sancionadas.
                </li>
                <li>
                  La formulación clara y precisa de las conductas que dieron origen al proceso disciplinario y las faltas disciplinarias a que darían lugar (con la indicación de las normas reglamentarias que consagran las faltas), así como la calificación provisional de las conductas como faltas disciplinarias.
                </li>
                <li>
                  El traslado al acusado de las pruebas que fundamentan los cargos formulados, para permitir el ejercicio de su derecho de defensa.
                </li>
                <li>
                  La indicación de un término durante el cual el acusado pueda formular sus descargos por escrito o verbalmente, controvertir las pruebas con las que cuente la institución en su contra y allegar las que considere necesarias para sustentar su justificación.
                </li>
                <li>
                  Un acto motivado y con un pronunciamiento de fondo que contenga la decisión definitiva por parte de la institución.
                </li>
                <li>
                  La imposición de una sanción proporcional a los hechos que la motivaron.
                </li>
                <li>
                  La posibilidad de que el acusado pueda cuestionar las decisiones de las autoridades competentes.
                </li>
              </ol>
              <p>
                <strong>
                  73.
                </strong>
                {" "}
                El incumplimiento de cualquiera de los anteriores requisitos implica una violación del derecho fundamental al debido proceso por la institución educativa y puede llevar al juez a inaplicar la reglamentación disciplinaria, en determinados casos, por inconstitucional. También implica la consecuente obligación a cargo de los colegios de ajustar las disposiciones contrarias a esta garantía constitucional. La sujeción al debido proceso incluye asimismo la observancia de las reglas de procedimiento previamente establecidas en los manuales de convivencia de los colegios, una expresión del principio de legalidad que se deriva del
                {" "}
                <span className="hl-green">
                  artículo 29 de la
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
                    Constitución
                  </a>
                </span>
                .
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="proc-tab-content" id="proc-etapas-proceso">
          <Tabs ids={["etapa-informativa","etapa-analitica","etapa-decisoria","etapa-amonestaciones"]} initial="etapa-informativa">
            <div className="etapas-tabs-bar">
              <TabButton tab="etapa-informativa" className="etapas-tab-btn">
                Etapa Informativa
              </TabButton>
              {" "}
              <TabButton tab="etapa-analitica" className="etapas-tab-btn">
                Etapa Analítica
              </TabButton>
              {" "}
              <TabButton tab="etapa-decisoria" className="etapas-tab-btn">
                Etapa Decisoria
              </TabButton>
              {" "}
              <TabButton tab="etapa-amonestaciones" className="etapas-tab-btn">
                Amonestaciones
              </TabButton>
            </div>
            <TabPanel className="etapas-tab-content" id="etapa-informativa">
              <p className="subtitle-green">
                1. ETAPA INFORMATIVA
              </p>
              <p>
                Es el conocimiento de la falta por parte de la instancia competente para adelantar el procedimiento. El o la director(a) de grado, el orientador, el coordinador o la autoridad educativa que tenga conocimiento del caso, corroborará los hechos de la falta disciplinaria catalogada como leve, grave o gravísima. Luego de verificar lo ocurrido con las personas involucradas, comunicarán el caso, al funcionario competente o en su defecto, según la gravedad de la falta, con dirección al Consejo Directivo, que notificará de la actuación disciplinable al Comité de Convivencia y Solución de Conflictos, quien dispondrá de cinco (5) días hábiles académicos, para brindar informe correspondiente, sobre el concepto que emite el órgano consultor que representa el comité de convivencia escolar, sobre la sugerencia que hace al consejo directivo, respecto de la determinación a tomar.
              </p>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="etapa-analitica">
              <p className="subtitle-green">
                2. ETAPA ANALÍTICA
              </p>
              <p>
                Una vez llevado a cabo lo anterior, se evaluará la falta disciplinable, o el tipo de situación, tipo I, tipo II, tipo III; se identificará a los presuntos responsables, las implicaciones de la falta o faltas o si trata de una situación tipo I, tipo II, o tipo III. Se dispondrá de un término de tres (3) días hábiles académicos para que el estudiante (o estudiantes) rinda(n) sus descargos con las debidas pruebas. El padre (o padres) de familia o acudiente(s) del (los) alumno(s) implicado(s) en la falta será(n) citado(s) para hacerle(s) conocer, acerca de la decisión del consejo directivo, dentro de los siguientes cinco (5) días hábiles académicos.
              </p>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="etapa-decisoria">
              <p className="subtitle-green">
                3. ETAPA DECISORIA
              </p>
              <p>
                Con base en la decisión anterior, se aplica la sanción correspondiente que deberá guardar relación con los términos establecidos en este manual de convivencia. Cumplida esta etapa, el Consejo Directivo notificará, la medida pedagógica o sanción al (los) alumno(s) y a su(s) padre(s) o acudiente(s), previo cumplimiento del proceso antes anotado, (debido proceso). Tendrán, los recursos de reposición y apelación a su favor.
              </p>
            </TabPanel>
            <TabPanel className="etapas-tab-content" id="etapa-amonestaciones">
              <p className="subtitle-green">
                AMONESTACIONES
              </p>
              <p>
                <strong>
                  Amonestación Verbal:
                </strong>
                {" "}
                El docente o directivo que observa la falta, amonestará, al educando infractor, en forma personal y directa, en el lugar y momento en que se tiene conocimiento de ésta, previniendo al educando, que la reincidencia en esta conducta o cualquier otra que contravenga el manual de convivencia, dará lugar a una sanción mayor.
              </p>
              <ol className="derechos-list">
                <li>
                  Esta amonestación o llamado de atención verbal, implica una anotación en el observador del educando, que NO requiere de su firma, porque NO obedece a criterio de sanción, sino a un precedente disciplinario que se allega como agravante futuro a una posible sanción. Se invita al educando, a moderar y cambiar su proceder. Cuando el comportamiento, afecta solo el desarrollo de alguna actividad, está relacionado como falta leve, la reincidencia en más de tres ocasiones, consecutivas o no, será tipificada como falta grave.
                </li>
                <li>
                  <strong>
                    Amonestación escrita:
                  </strong>
                  {" "}
                  cuando el educando reincide en la actuación disciplinable, se consigna en el observador del estudiante una descripción de la falta, la cual debe ser, firmada por el conocedor directo de la falta, el director o directora de grado, el coordinador de convivencia y por el alumno implicado. Cuando el comportamiento es reincidente y/o es determinante en la perturbación al desarrollo de algunas actividades, hay reincidencia en una falta grave, o la falta es considerada como repetitiva, en más de tres (3) ocasiones, será gravísima o muy grave.
                </li>
                <li>
                  <strong>
                    Acta de Compromiso:
                  </strong>
                  {" "}
                  Para buscar un cambio de actitud y comportamiento de parte del educando, o estudiante, frente a la manera como asume sus responsabilidades académicas o su actitud en los diferentes ámbitos disciplinarios de nuestra institución, se puede acudir al acta de compromiso. Es un documento que contiene un compromiso que el estudiante adquiere en la Institución y lleva consigo un proceso de reconocimiento y de reflexión de aspectos para mejorar. El compromiso que se incluye en este documento puede referirse a un cambio claro y drástico del alumno(a) en relación con su nivel académico, actitudinal o disciplinario suscrito por el educando. Firmado por sus padres, el director o directora de grado, orientador, coordinador y Rector(a). El acta de compromiso, condiciona la permanencia de un educando durante un período limitado de tiempo que no puede extenderse por más de un año lectivo. El acta de compromiso se realiza cuando la falta es grave, si el educando, reincide y no cumple el compromiso, se convertirá, en una falta gravísima.
                </li>
                <li>
                  <strong>
                    Pérdida del Derecho a Representar a la Institución:
                  </strong>
                  {" "}
                  Cuando hay amonestación escrita como grave, el estudiante implicado no puede ser representante de nuestra institución en ningún evento cultural, deportivo, social, etc. Tampoco ser postulante a cargos del gobierno escolar. Y si ya es representante o funge en el gobierno escolar, deberá dimitir y renunciar de inmediato.
                </li>
                <li>
                  <strong>
                    Interrupción Académica Temporal:
                  </strong>
                  {" "}
                  Cuando una falta grave sea reincidente o escale a una situación tipo III, el estudiante deberá realizar actividades pedagógicas de reparación, tanto transversales como disciplinares, orientadas a reflexionar sobre las consecuencias de sus actos y a resarcir los daños ocasionados. Estas actividades se desarrollarán durante un periodo de hasta cinco (5) días hábiles curriculares, durante toda la jornada escolar institucional. La suspensión se realizará mediante resolución Rectoral, una vez haya fallado el Consejo Directivo con base en el análisis y sugerencias del Comité de Convivencia y Solución de Conflictos.
                </li>
                <li>
                  El estudiante, acompañado de su padre, madre o acudiente, deberá presentarse ante la coordinación académica o de convivencia para recibir las orientaciones sobre las actividades formativas que realizará durante el periodo de aplicación de la medida pedagógica. Estas actividades tendrán un carácter restaurativo y reflexivo, orientadas a fortalecer la convivencia, el compromiso institucional y el reconocimiento de la falta cometida. El estudiante desarrollará dichas actividades en las instalaciones de la institución, preferiblemente en la biblioteca escolar, en horario regular, garantizando su derecho a la educación y su participación en los procesos pedagógicos. El trabajo para realizar tendrá un enfoque constructivo y educativo, podrá incluir ejercicios de lectura, escritura, reflexión personal o actividades de apoyo social y académico, según la orientación del Comité de Convivencia Escolar y el Consejo Directivo, y será supervisado por el coordinador de convivencia o la orientadora escolar. El propósito de esta medida es promover procesos restaurativos de reparación simbólica y formativa, no el castigo, asegurando que el estudiante continúe su proceso educativo dentro del marco del respeto, la responsabilidad y la mejora personal. Contra esta decisión procede el recurso de reposición ante el Consejo Directivo dentro de los tres (3) días hábiles siguientes a la notificación, y en subsidio el recurso de apelación ante el Rector, dentro de los cinco (5) días hábiles posteriores. Si el estudiante o sus acudientes no hacen uso de los recursos establecidos, la decisión adquirirá el carácter de cosa juzgada, conforme a la normativa institucional vigente.
                </li>
                <li>
                  <strong>
                    Cancelación de la Matrícula:
                  </strong>
                  {" "}
                  La cancelación de la matrícula procederá únicamente cuando la falta o la situación disciplinaria lo amerite, una vez se hayan agotado todas las etapas del procedimiento establecido, el conducto regular, la activación de la Ruta de Atención Integral Escolar, y se haya garantizado plenamente el derecho al debido proceso y a la defensa del estudiante. Si, a pesar de las medidas pedagógicas, formativas y restaurativas implementadas, el estudiante persiste en la infracción de los principios, deberes y normas contenidas en el Manual de Convivencia, el Rector podrá expedir la Resolución Rectoral motivada mediante la cual se dispone la cancelación de la matrícula. Dicha decisión se adoptará previa valoración y recomendación del Comité de Convivencia Escolar, y posterior determinación del Consejo Directivo, órgano competente para emitir concepto final sobre la aplicación de esta medida. La resolución que ordene la cancelación de la matrícula deberá ser debidamente motivada, notificada al estudiante y a su acudiente, e incluir las vías y términos para interponer los recursos de reposición y apelación, conforme a lo dispuesto en la normatividad vigente. En todo caso, la medida no implicará la pérdida del derecho fundamental a la educación, por lo que la institución educativa, en coordinación con la Secretaría de Educación Municipal, garantizará la continuidad del proceso educativo del estudiante en otro establecimiento oficial. Contra la decisión de cancelación de matrícula procede el recurso de reposición ante el Consejo Directivo dentro de los tres (3) días hábiles siguientes a la notificación del acto administrativo. En subsidio, podrá interponerse el recurso de apelación ante el Rector, dentro de los cinco (5) días hábiles posteriores a la fecha de notificación. En caso de no presentarse el recurso de reposición, el estudiante o su acudiente conservarán el derecho a interponer directamente el recurso de apelación, con el fin de garantizar el derecho fundamental a la defensa y el respeto al debido proceso.
                </li>
              </ol>
              <div className="commit-block">
                <p className="estimulo-title">
                  PARÁGRAFO
                </p>
                <p>
                  El Consejo Directivo evaluará la conveniencia de la eventual readmisión del estudiante cuya matrícula haya sido cancelada, pudiendo autorizar su ingreso para el año lectivo siguiente, de acuerdo con los criterios pedagógicos, convivenciales y normativos establecidos. Dicha determinación deberá notificarse por escrito a los padres de familia o acudientes con la debida antelación. En todo caso, para la interpretación y aplicación de las disposiciones contenidas en este Manual de Convivencia Escolar, prevalecerá la jurisprudencia emitida por la Corte Constitucional y las normas vigentes que desarrollan los derechos fundamentales de los niños, niñas y adolescentes, en especial el derecho a la educación, al debido proceso y a la dignidad humana.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <div className="commit-block">
          <p className="estimulo-title">
            DECRETO
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913" target="_blank" style={{ color: "var(--green)" }}>
              1075 DE 2015
            </a>
            {" "}
            — ARTÍCULO 2.3.5.4.2.6. Clasificación de las situaciones
          </p>
          <p>
            Las situaciones que afectan la convivencia escolar y el ejercicio de los derechos humanos, sexuales y reproductivos, se clasifican en tres tipos:
          </p>
          <ol className="derechos-list">
            <li>
              <strong>
                <span className="hl-green">
                  Situaciones Tipo I.
                </span>
              </strong>
              {" "}
              Corresponden a este tipo los conflictos manejados inadecuadamente y aquellas situaciones esporádicas que inciden negativamente en el clima escolar, y que en ningún caso generan daños al cuerpo o a la salud.
            </li>
            <li>
              <strong>
                <span className="hl-green">
                  Situaciones Tipo II.
                </span>
              </strong>
              {" "}
              Corresponden a este tipo las situaciones de agresión escolar, acoso escolar (Bullying) y ciberacoso (Ciberbullying), que no revistan las características de la comisión de un delito y que cumplan con cualquiera de las siguientes características:
              <ol className="derechos-list" type="a">
                <li>
                  Que se presenten de manera repetida o sistemática;
                </li>
                <li>
                  Que causen daños al cuerpo o a la salud sin generar incapacidad alguna para cualquiera de los involucrados.
                </li>
              </ol>
            </li>
            <li>
              <strong>
                <span className="hl-red">
                  Situaciones Tipo III.
                </span>
              </strong>
              {" "}
              Corresponden a este tipo las situaciones de agresión escolar que sean constitutivas de presuntos delitos contra la libertad, integridad y formación sexual, referidos en el Título IV del Libro II de la
              {" "}
              <span className="hl-green">
                Ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                  599 de 2000
                </a>
              </span>
              , o cuando constituyen cualquier otro delito establecido en la ley penal colombiana vigente. (
              <span className="hl-green">
                Decreto
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537" target="_blank" style={{ color: "var(--green)" }}>
                  1965 de 2013
                </a>
                , artículo 40
              </span>
              ).
            </li>
          </ol>
        </div>
      </Tabs>
    </>
  );
}
