import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap9() {
  return (
    <>
      <Tabs ids={["dtab-derechos","dtab-estimulos","dtab-salidas"]} initial="dtab-derechos">
        <div className="section-header">
          <span className="section-num">
            09
          </span>
          <h2 className="section-title">
            Derecho de los educandos
          </h2>
        </div>
        <div className="derechos-tabs-bar">
          <TabButton tab="dtab-derechos" className="derechos-tab-btn">
            Derecho de los educandos
          </TabButton>
          {" "}
          <TabButton tab="dtab-estimulos" className="derechos-tab-btn">
            Estímulos a los y las estudiantes
          </TabButton>
          {" "}
          <TabButton tab="dtab-salidas" className="derechos-tab-btn">
            Salidas pedagógicas y días conmemorativos
          </TabButton>
        </div>
        <TabPanel className="derechos-tab-content" id="dtab-derechos">
          <p style={{ marginBottom: "16px" }}>
            Los derechos de los educandos, están reconocidos dentro del ámbito Constitucional, fundamentalmente en su preámbulo y en los derechos fundamentales, sociales, culturales, económicos y psicológicos, además de los ecológicos, cuyos principios se fundamenten en el respeto a la dignidad humana.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Resaltando, que nuestra Institución oficial, NO cuenta con estudiantes, que tengan supra – derechos o que tengan más derechos que los demás, nosotros rendimos culto al artículo 13 de la
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
              carta política
            </a>
            , y todos somos iguales ante la ley. Lo que traduce que, todos los estudiantes tienen los mismos derechos, pero también, los mismos deberes, prevalecerá, el interés general por encima de un particular.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Cuando el educando se matricula en nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; al firmar y legalizar el contrato de matrícula, a voces del artículo 87 de la ley
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
              115 de 1994
            </a>
            ; adquiere los siguientes derechos:
          </p>
          <p className="subtitle-green">
            Derechos de los educandos
          </p>
          <ol className="derechos-list">
            <li>
              Obtener, el día mismo de la matrícula, y al iniciar el año escolar, copia digital y total y precisa información acerca del contenido del presente Manual de Convivencia escolar, para que lo asuma como la carta de navegación indispensable. artículo 2.3.4.2. decreto
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913" target="_blank" style={{ color: "var(--green)" }}>
                1075 de 2015
              </a>
              .
            </li>
            <li>
              Ser respetado en su integridad y dignidad personal.
            </li>
            <li>
              No ser discriminado por limitaciones físicas, raza o religión o identidad u orientación o diversidad sexual.
            </li>
            <li>
              Ser valorado, escuchado, orientado y protegido como persona.
            </li>
            <li>
              Recibir formación ciudadana y formación en educación sexual.
            </li>
            <li>
              Seguir el conducto regular y ser objeto de la aplicación del debido proceso establecido por nuestro reglamento, para la solución de cualquier conflicto o dificultad de orden académico, disciplinario o administrativo.
            </li>
            <li>
              Conocer oportunamente los objetivos, la metodología y el sistema evaluativo de cada asignatura. Artículo 2.3.4.2 del decreto
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913" target="_blank" style={{ color: "var(--green)" }}>
                1075 de 2015
              </a>
              .
            </li>
            <li>
              Ser evaluado cuantitativa, cualitativa y permanentemente según sus intereses, capacidades, esfuerzos, dedicación en el logro de las competencias con principios de equidad, rectitud y justicia y de acuerdo a lo dispuesto en la Resolución Rectoral que, introduce ajustes y reglamenta dentro de Nuestra Institución educativa oficial, el Sistema Institucional de Evaluación.
            </li>
            <li>
              Participar activamente en el proceso enseñanza-aprendizaje y solicitar aclaraciones y refuerzos cuando los temas no hayan quedado suficientemente claros.
            </li>
            <li>
              Participar oportuna y directamente, en la organización y evaluación Institucional de nuestra Institución.
            </li>
            <li>
              Elegir y ser elegido(a) en la organización del Gobierno Escolar.
            </li>
            <li>
              Desarrollar su creatividad social, científica, artística y deportiva para enriquecer y renovar su cultura personal y representar a nuestra Institución, en cualquiera de estos ámbitos.
            </li>
            <li>
              Disfrutar de momentos de descanso y actividades de recreación y entretenimiento.
            </li>
            <li>
              No ser obligado a presentar más de dos evaluaciones y trabajos escritos en un mismo día.
            </li>
            <li>
              Conocer el observador y los registros a que hubiere lugar en los mismos.
            </li>
            <li>
              Conocer dentro de los cinco (5) días hábiles siguientes a su presentación los resultados de las evaluaciones y trabajos escritos.
            </li>
            <li>
              Conocer los resultados de su rendimiento académico al finalizar cada período antes de ser reportados por el profesor a la plataforma virtual de la Institución para su procesamiento.
            </li>
            <li>
              Conocer, al iniciar el año lectivo, los logros previstos en cada área del grado que curse.
            </li>
            <li>
              Recibir las explicaciones del caso cuando no se cumplan las horas de clases establecidas en el horario.
            </li>
            <li>
              Solicitar segundo evaluador del aspecto cognitivo de conformidad con lo establecido por el Sistema Institucional de Evaluación y Promoción.
            </li>
            <li>
              Utilizar los recursos de la Institución de acuerdo con los reglamentos establecidos para complementar su proceso educativo.
            </li>
            <li>
              Gozar de un horario técnicamente elaborado
            </li>
            <li>
              Gozar del buen trato y consideración de acuerdo a su edad.
            </li>
            <li>
              Ser llamado por su nombre o apellidos y en ningún momento por su número de lista, apodos u otro tipo impersonal y deshumanizante.
            </li>
            <li>
              Gozar de la amistad de sus maestros dentro del respeto y las debidas distancias de moral y de ética, cero intimidades.
            </li>
          </ol>
        </TabPanel>
        <TabPanel className="derechos-tab-content" id="dtab-estimulos">
          <p style={{ marginBottom: "16px" }}>
            El mayor de los estímulos, será la satisfacción propia del cumplimiento de sus propios deberes, para convertirse en iconos y ejemplo de la identidad Institucional, frente a la comunidad en general, que ve en el alumno y la alumna, el presente y el futuro de toda una nación y una sociedad que espera verdaderos líderes y reales ciudadanos(as) de bien, que sean testimonio de una vida integral de fruto y de carácter positivista y constructivista, en todos sus aspectos. La institución, otorgará estímulos y distinciones a los educandos que se destaquen por su identidad y promoción de los valores y en su excelente comportamiento curricular, tales como el rendimiento académico, excelente comportamiento y cumplimiento estricto y ejemplar del presente Manual de Convivencia Escolar, así como los educandos, que representen con gallardía y orgullo nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; en las diferentes actividades, sociales, lúdicas y recreativas-deportivas; dentro de esos estímulos, resaltan, los siguientes:
          </p>
          <p className="estimulo-title">
            MATRÍCULA DE HONOR
          </p>
          <p style={{ marginBottom: "16px" }}>
            La matrícula de honor podrá otorgarse a los estudiantes de primero (1º) a décimo (10º) grado que cumplan los siguientes requisitos:
          </p>
          <ol className="derechos-list">
            <li>
              Su desempeño académico en cada uno de los períodos del año lectivo haya sido ALTO o SUPERIOR.
            </li>
            <li>
              Distinguido por la correspondiente Comisión de Evaluación y Promoción como un estudiante respetuoso, colaborador y responsable de sus obligaciones.
            </li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            La matrícula de honor se conferirá a los estudiantes de 1º a 10º grado a través de las respectivas Comisiones de Evaluación Promoción; la entrega de esta distinción, representada en diploma, se hará en la sesión de clausura del respectivo año lectivo y constará en el correspondiente folio del libro de registro Escolar de Valoración, en los certificados que de ese año le sean extendidos al estudiante que la obtuvo y en el cuadro de honor que para tal fin habilitará la Institución.
          </p>
          <p className="estimulo-title">
            RECONOCIMIENTO PÚBLICO
          </p>
          <p style={{ marginBottom: "16px" }}>
            Con imposición de medallas, diplomas o entrega de trofeos a los estudiantes que, en representación de la Institución, del Municipio, del Departamento o de la Nación se distingan por el logro de éxitos en certámenes de carácter académico, científicos, culturales o deportivos.
          </p>
          <p style={{ marginBottom: "16px" }}>
            El Reconocimiento a la investigación se otorgará cuando el trabajo cumpla con los siguientes requisitos:
          </p>
          <ol className="derechos-list-letters">
            <li>
              El tema de investigación sea de actualidad o de interés para la Comunidad Educativa.
            </li>
            <li>
              Que constituya una innovación.
            </li>
            <li>
              Estén orientados a plantear soluciones a problemas específicos o a la verificación de alguna teoría o a la aplicación de conocimientos.
            </li>
            <li>
              Que la metodología empleada sea clara.
            </li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            El acto de reconocimiento a la Investigación se hará mediante resolución interna y el (los) autor(es) del trabajo recibirá(n) atención especial de parte de la institución para continuar en esta línea de formación además del apoyo necesario para la publicación de los trabajos adelantados.
          </p>
          <p style={{ marginBottom: "16px" }}>
            El Consejo Directivo evaluará los trabajos de investigación aspirantes al reconocimiento o podrá delegar tal función si así lo estima conveniente.
          </p>
          <p className="estimulo-title">
            PREMIO AL RESULTADO
          </p>
          <p style={{ marginBottom: "16px" }}>
            Se otorgará, en la ceremonia de graduación, a los estudiantes de UNDÉCIMO GRADO en cada uno de los siguientes casos:
          </p>
          <ol className="derechos-list">
            <li>
              Mayor puntaje sobre 70 en cualquiera de las pruebas del núcleo común de los exámenes de Estado (PRUEBAS SABER 11).
            </li>
            <li>
              Ser clasificado por el ICFES, con base en los resultados de las pruebas SABER 11, entre los cinco (5) primeros puestos.
            </li>
            <li>
              Mayor promedio, por encima de CINCUENTA (50), calculado entre los puntajes obtenidos en las áreas del núcleo común de las pruebas SABER 11.
            </li>
            <li>
              Mejor bachiller por jornada; otorgado a quien obtenga el mayor promedio, por encima de TRES PUNTO NUEVE (3.9) en los resultados finales de cada año lectivo durante los seis (6) años del bachillerato.
            </li>
            <li>
              Concursos de estudiantes de Grado Undécimo: según reglamentación expedida por el Consejo Directivo.
            </li>
            <li>
              Nivel Competitivo: Reconocido a los estudiantes que obtengan distinciones significativas en competencias de carácter académicas, científicas, culturales o deportivas en las cuales participe llevando la representación de la Institución.
            </li>
          </ol>
          <p className="estimulo-title">
            IZAR LA BANDERA NACIONAL
          </p>
          <p style={{ marginBottom: "16px" }}>
            IZAR LA BANDERA NACIONAL, del Departamento, del municipio o de la Institución cuando se destaque durante el período por su rendimiento académico y buen comportamiento.
          </p>
          <p className="estimulo-title">
            RECONOCIMIENTO AL ESFUERZO
          </p>
          <p style={{ marginBottom: "16px" }}>
            Se otorgará en dos (2) clasificaciones al terminar cada período académico incluido el resultado final, así:
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>
              A. POR PUESTO INDIVIDUAL:
            </strong>
            {" "}
            Corresponderá a los tres (3) primeros puestos por curso, grado, jornada, sede e institución de conformidad con los requerimientos establecidos para asignación de puestos.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>
              B. POR PUESTO GRUPAL:
            </strong>
            {" "}
            A un (1) curso del ciclo de básica secundaria o nivel de media de la Institución que alcance los siguientes resultados:
          </p>
          <ol className="derechos-list-letters">
            <li>
              Por lo menos el 80% de sus estudiantes aprueban TODAS las áreas sin que se presenten, en ningún caso, vacíos de notas.
            </li>
            <li>
              Mínimo el 95% de los estudiantes del grupo demuestran prácticas de excelente conducta y disciplina.
            </li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            Si más de un grupo obtuviera estos resultados, el curso acreedor al correspondiente estímulo será el que presente mayor promedio, calculado entre las notas obtenidas en todas las áreas obligatorias y optativas del plan de estudio. Si se presentara empate, éste se resolverá atendiendo, en estricto orden, al mayor promedio en Matemáticas, Lengua Castellana y Ciencias Sociales; de persistir el empate se recurrirá a la menor desviación estándar.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Los estudiantes que obtengan primero, segundo y tercer puesto en cada período, incluido el resultado final, se les otorgará un diploma de reconocimiento al rendimiento académico que les será entregado en la correspondiente sesión de entrega de informes a los padres y madres de familia y cuidadores. Además, los nombres de estos estudiantes se harán figurar en el cuadro de honor que la institución dispondrá para tales fines.
          </p>
          <p style={{ marginBottom: "16px" }}>
            El grupo de básica primaria conformado por los estudiantes que obtengan el primer puesto por curso, disfrutará de una jornada deportiva y cultural o de la visita a sitios históricos, culturales y/o recreativos. Además, tal distinción figurará en el cuadro de honor de la institución.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Para el ciclo de secundaria y el nivel de media, el grupo que obtenga primer puesto recibirá como estímulo adecuaciones físicas requeridas en la respectiva aula o en su defecto la instalación de una ayuda educativa o podrá disfrutar de una jornada deportiva y cultural o de la visita a sitios históricos, culturales y/o recreativos. Además, tal distinción figurará en el cuadro de honor de la institución
          </p>
          <p className="estimulo-title">
            ASIGNACIÓN DE BECAS
          </p>
          <p style={{ marginBottom: "16px" }}>
            De conformidad con la reglamentación expedida por el Consejo Directivo en cada caso.
          </p>
          <div style={{ background: "#f3f3f3", border: "1px solid #d8d8d8", borderRadius: "8px", padding: "12px 16px", marginBottom: "16px", boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)" }}>
            <details style={{ marginBottom: "0" }}>
              <summary style={{ cursor: "pointer", fontWeight: "700", color: "var(--red)" }}>
                PARÁGRAFO
              </summary>
              <p style={{ padding: "12px 0 0 0", marginBottom: "0" }}>
                Para efectos de asegurar el cumplimiento de la política de estímulos a los estudiantes por parte de la Institución, la Coordinación Académica de la sede Bachillerato y las Coordinaciones de las sedes de Preescolar y Básica Primaria, con el apoyo de las respectivas Comisiones de Evaluación y Promoción, llevarán un estricto seguimiento al desempeño de los educandos, tanto desde lo individual como de lo grupal, en concordancia con lo dispuesto por el Acuerdo 087 del 21 de Octubre de 2009 y lo establecido en el presente artículo, e informará al Consejo Directivo acerca de los estudiantes y/o grupos de estudiantes que se hagan acreedores a los estímulos correspondientes.
              </p>
            </details>
          </div>
        </TabPanel>
        <TabPanel className="derechos-tab-content" id="dtab-salidas">
          <p style={{ marginBottom: "16px" }}>
            Teniendo en cuenta que las Salidas Pedagógicas propician aprendizajes significativos y generan actitudes dinámicas y críticas en los educandos, se podrán programar cada año lectivo frente a la Coordinación de Convivencia en conjunto con la Coordinación Académica, salidas pedagógicas o convivenciales con el objetivo de reforzar las temáticas académicas, de culturizar en diferentes aspectos según las opciones encontradas, de fortalecer el vínculo, la identidad institucional y la armonía entre los grupos.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Acorde con los lineamientos de la Directiva Ministerial 55 del 18 de diciembre de 2014, nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; cumple las siguientes directrices, con el fin de garantizar, la seguridad e integridad de las personas que participan en las salidas pedagógicas:
          </p>
          <p className="estimulo-title">
            PLANEACIÓN
          </p>
          <p style={{ marginBottom: "16px" }}>
            Para cada Salida Pedagógica se determinará el número de acompañantes adultos de acuerdo a la edad y número de educandos. A todas las salidas pedagógicas, asistirá un representante de la Coordinación de Convivencia, y los acudientes que lo deseen, según sea el caso.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Toda salida pedagógica en conjunto, deberá contener por escrito, con su objetivo, destino, cronograma, teléfonos de contacto, implementos mínimos a llevar por parte del educando, puntos de salida y regreso, será comunicada con la debida antelación (mínimo 8 días) a los padres de familia por medio del formato diseñado para éste fin.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Cada padre deberá autorizar, la salida pedagógica, diligenciando el formato para este fin, y reportar las condiciones especiales de cuidado (enfermedades, alergias, medicamentos, etc.) de su hijo(a).
          </p>
        </TabPanel>
      </Tabs>
    </>
  );
}
