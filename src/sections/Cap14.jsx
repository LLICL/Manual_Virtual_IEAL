import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap14() {
  return (
    <>
      <Tabs ids={["dlenis-deberes","dlenis-servicio"]} initial="dlenis-deberes">
        <div className="section-header">
          <span className="section-num">
            14
          </span>
          <h2 className="section-title">
            DEBERES Y COMPROMISOS DEL ESTUDIANTE LENISTA
          </h2>
        </div>
        <div className="deberes-tabs-bar">
          <TabButton tab="dlenis-deberes" className="deberes-tab-btn">
            Deberes del Estudiante
          </TabButton>
          {" "}
          <TabButton tab="dlenis-servicio" className="deberes-tab-btn tab-blue">
            Servicio Social
          </TabButton>
        </div>
        <TabPanel className="deberes-tab-content" id="dlenis-deberes">
          <p className="sec-main-title">
            DEBERES O COMPROMISOS DEL ESTUDIANTE LENISTA
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                El o La estudiante Lenista, tienen como compromiso, conocer, respetar y acatar, el presente
                {" "}
                <span className="hl-red">
                  MANUAL DE CONVIVENCIA ESCOLAR
                </span>
                , para cumplir con todas las obligaciones Inherentes a su calidad de alumno(a) activo(a) de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                ; mostrando a cabalidad las conductas propias de un y una adolescente maduro(a), respetuoso(a), responsable y digno(a). Siempre resaltando su calidad de estudiante integral y cumpliendo sus deberes tanto cívicos como sociales dentro de nuestra Institución educativa oficial.
              </p>
              <p>
                Siempre sobresaliendo por su ejemplar comportamiento y sus conductas intachables y propias de un educando con inmejorable desempeño, comportamientos y acciones dignificantes, respetuosas y de acuerdo a su edad psicológica y física. Para brindar también cumplimiento a los
                {" "}
                <span className="hl-green">
                  artículos 15, 18, 42 numeral 3, articulo 43 numerales 2 y 3, Articulo 44 numerales 4, 6, 7, 10 de la Ley de Infancia y adolescencia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                .
              </p>
            </li>
            <li className="derecho-num-manual">
              <p>
                El, o La estudiante tienen como compromiso ser conscientes, y asumir la condición de primeros(as) responsables de su propia autoformación, y de su dignidad, de su autodisciplina y su ejemplar comportamiento y actitud, brindando muestras propias de una identidad madura y coherente, única e irrepetible, en todo su accionar y desempeño tanto en lo personal como en lo curricular.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante tiene como compromiso cuidar el buen nombre de nuestra institución. Considerando como propio su Colegio y por lo mismo ser responsables del aseo, la buena presentación en su uniforme de diario, llevándolo con decoro y dignidad, igualmente, propender por el cuidado y el buen uso de los elementos de nuestra Institución educativa oficial, para ello, comprender que mientras porten el uniforme que los distingue como alumnos y alumnas de nuestra institución dentro o fuera de la misma, su comportamiento debe ser digno, ejemplar y de acuerdo a la educación recibida, tanto en Nuestra Institución educativa oficial, como en su hogar, tomando como referente que un individuo es el reflejo del núcleo familiar y de la formación que le brindan sus padres, puesto que nuestro COLEGIO OFICIAL los educa como seres integrales, pero en su casa y a la sombra de sus padres y acudientes, aprenden a ser íntegros e integras.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante tienen como compromiso respetar, las opiniones o puntos de vista de los demás y permitir su libre expresión, teniendo en cuenta el respeto y las buenas costumbres y por sobre todo la dignidad de sus demás compañeros(as) como la suya propia, conscientes que su propio proceder y dignidad son el resultado de la filosofía institucional de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                ; y el ejemplo tomado de sus padres en el seno del hogar, también brindando estricto cumplimiento al
                {" "}
                <span className="hl-green">
                  artículo 18º y artículo 44º numeral 4 de la Ley de Infancia y adolescencia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098º de 2006
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La estudiante tiene como compromiso tratar con respeto y cordialidad a los profesores, compañeros, administrativos y demás personal de servicios varios de nuestra Institución educativa oficial, sin usar términos y palabras soeces del actual léxico juvenil, palabras peyorativas, despectivas o apodos, o ser malintencionados o vulgares con sus compañeros, profesores o demás personal de nuestra institución. Los niños mostrando su dignidad y gallardía, así como las niñas demostrando dignidad y decoro en su lenguaje. Brindando estricto cumplimiento al
                {" "}
                <span className="hl-green">
                  Artículo 18, Articulo 42 numeral 3, articulo 43 numerales 2 y 3, y articulo 44 numerales 5 y 6 de La Ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  {" "}
                  o Ley de Infancia y Adolescencia
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La estudiante tiene como compromiso fomentar actividades de ornato, embellecimiento y aseo de nuestra institución.; incluso a manera de proyectos transversales lúdico – pedagógicos, a voces del
                {" "}
                <span className="hl-green">
                  artículo 20 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                    1620 de 2013
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso guardar compostura, respeto y civismo en los actos públicos y demás actividades comunitarias, así como las diferentes actividades dentro de nuestra institución y mucho más, en las extracurriculares en las cuales representan a nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                , en cualquier actividad, cívica o social, brindando muestras inequívocas de la educación y de los principios adquiridos en la institución y de su disciplina, moral y educación integral. De la misma manera, brindando estricto cumplimiento al
                {" "}
                <span className="hl-green">
                  artículo 15º de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098º de 2006
                  </a>
                  , de infancia y adolescencia
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante, tienen como compromiso informar de carácter inmediato las situaciones anómalas, daños y actos que atenten contra el bienestar de la comunidad y las personas dentro de nuestra institución y cometidas por otros alumnos de la misma o fuera de ella. Brindando estricto cumplimiento al
                {" "}
                <span className="hl-green">
                  artículo 18 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  , de infancia y adolescencia
                </span>
                . Y al
                {" "}
                <span className="hl-green">
                  artículo 25 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código Penal
                  </a>
                  {" "}
                  de 2000 —Ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    599
                  </a>
                  —
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante, tienen como compromiso esperar al
                {" "}
                <span className="hl-red">
                  DOCENTE
                </span>
                {" "}
                dentro del aula de clase.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso, observar buen comportamiento dentro y fuera de nuestra institución, ajustándose a las buenas costumbres, la moral y usos del buen vivir de una persona con carácter, identidad propia, dignidad y buen testimonio de vida como especial y prioritario ejemplo para los y las estudiantes de grados inferiores, que los ven como modelos a seguir e imitar.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso presentar oportunamente al Coordinador y al director de Curso, los permisos, incapacidades y las justificaciones de las ausencias y retardos. El o la alumno(a) podrán justificar su inasistencia a las actividades curriculares dentro de
                {" "}
                <span className="hl-green">
                  24 horas hábiles
                </span>
                {" "}
                siguientes a la ausencia; de no hacerlo, irremediablemente perderán, los logros realizados en esas fechas.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante tienen como compromiso representar dignamente a la Institución en eventos culturales, sociales y deportivos, sin protagonizar escándalos, faltas contra la moral o contra la dignidad de las demás personas. Mostrando así su decoro y educación con alto contenido en valores, disciplina, tolerancia y respeto. incluso, aplica a los espacios virtuales, no presenciales y cibernéticos.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso presentarse a la Institución, con el uniforme completo, usando el uniforme respectivo de acuerdo con las actividades programadas, sin descuidar la presentación personal exigida, sin llegar a convertir el uniforme del colegio en una moda o una imitación estética de cualquier grupo urbano, subcultura o tribu urbana o imitación de modas pasajeras y superficiales. El o La estudiante, tienen como compromiso especial e irrenunciable, obedecer en lo estético, estrictamente al
                {" "}
                <span className="hl-red">
                  MODELO DEL UNIFORME, SUMINISTRADO EL DÍA DE LA MATRÍCULA
                </span>
                , vestir digna y decorosamente, pues el uniforme de nuestro colegio como un símbolo institucional, dentro de la autonomía institucional, ha sido definido como un elemento que
                {" "}
                <span className="hl-red">
                  NO está condicionado o supeditado a modas o iconos de imitación irracional
                </span>
                . Puede imitar y copiar el educando, cualquier moda que desee, siempre y cuando
                {" "}
                <span className="hl-red">
                  NO sea portando el uniforme
                </span>
                {" "}
                que lo distingue como un miembro de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso asistir diaria y oportunamente a las clases y a las actividades de comunidad que programe la institución y presentar oportunamente las evaluaciones correspondientes.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso, propender por la conservación y renovación de los recursos naturales existentes en la región, máxime si están incluidos en proyectos transversales de nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante tiene como compromiso decir solamente la verdad en los descargos, aplicaciones, faltas, etc. Ante los comités y/o personas donde tuviere que presentarlos, firmarlos y hacerlos firmar de sus padres y acudientes, para lograr justicia y equidad en los fallos, sanciones y valoraciones, cumpliendo así a cabalidad con el debido proceso que reposa en el
                {" "}
                <span className="hl-green">
                  Artículo 26º de la Ley de Infancia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098º de 2006
                  </a>
                  {" "}
                  y en el artículo 29º Superior
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso asistir a las clases extras, acordadas que por algún motivo hayan dejado de dictarse, máxime si las clases son valiosas o fundamentales para el éxito del área.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen el compromiso de asistir y participar activamente en las actividades de nivelación y apoyo al mejoramiento de los aprendizajes, siguiendo las orientaciones establecidas por los docentes de aula y la comisión de evaluación y promoción.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso presentar oportunamente los documentos exigidos por la Institución Educativa, para los diferentes procesos de ingreso, matricula, grados, salidas, citaciones, etc.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso reclamar de manera oportuna, según calendario, los planes y horarios de recuperación o de nivelación curricular.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso que, en caso de pertenecer a cualquier credo, debe respetar el credo o inclinación religiosa o espiritual de sus pares y compañeros, así como que respeten el suyo.
              </p>
            </li>
            <li>
              <p>
                El o la Estudiante, tiene el compromiso de no utilizar el teléfono celular durante las horas de clase en presencia del docente, salvo cuando este autorice su uso con fines estrictamente pedagógicos o por una causa justificada. En caso de incumplimiento, el dispositivo podrá ser retenido temporalmente por el docente o coordinador(a) de la institución, con carácter pedagógico y devolutivo, previa autorización del padre, madre o acudiente, y por un período máximo equivalente a una jornada escolar. La devolución del equipo se efectuará en el mismo estado en que fue recibido, una vez finalizado el tiempo establecido o conforme a los acuerdos definidos. En todo momento, el procedimiento deberá observar los principios del debido proceso, el respeto a los derechos del estudiante y la jurisprudencia vigente en materia educativa.
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante, tienen como compromiso
                {" "}
                <span className="hl-red">
                  No participar, mantener, sostener, realizar, ni promover actitudes, comportamientos ni escenas obscenas, eróticas, o sexuales degradantes, explicitas e irrespetuosas
                </span>
                , dentro de las instalaciones de nuestra institución, ni por fuera de la misma, cuando estén portando el uniforme del colegio. Mostrando con ello, su calidad y dignidad humana y sus valores morales y respeto por su cuerpo y por sí mismo. Igualmente velando por la integridad moral en su ejemplo hacia la primera infancia de nuestra institución. El alumno o alumna, mayor de catorce (14º) años de edad, que incurran en el presunto delito de actos sexuales, inmediatamente, se sujeta a la activación de la ruta de atención escolar, y a las exigencias de los
                {" "}
                <span className="hl-green">
                  artículos 11, 12, y 15 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                    1146 de 2007
                  </a>
                  {" "}
                  y artículos 18 literal 4 y 19 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                    1620 de 2013
                  </a>
                </span>
                . Además, internamente, a juicio del consejo directivo, amerita las sanciones coherentes con
                {" "}
                <span className="hl-red">
                  situaciones Tipo III
                </span>
                ; de inmediato queda a discreción del consejo directivo, su accionar y su compromiso con nuestra institución, siguiendo el debido proceso y en cumplimiento al
                {" "}
                <span className="hl-green">
                  Artículo 44º numeral 4 de la Ley de Infancia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                , activando la ruta de atención escolar, e inexcusablemente, su desarrollo sexual, su orientación sexual, serán respetados y sus procesos de madurez y pubertad NO serán vulnerados, sin embargo, la mesura, el respeto, la dignidad y sobre todo la comprensión del hecho indiscutible del respeto por la intimidad para las acciones y comportamientos de índole sexual y erótico – sexual en pareja, son la base de cualquier relación afectuosa sustentada en el respeto y la responsabilidad. Con ello, en ponderación Constitucional, se busca proteger y salvaguardar en nuestra institución la correcta apreciación sexual y erótica de la pareja frente a la primera infancia, como lo solicita el
                {" "}
                <span className="hl-green">
                  artículo 20º numeral 4 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098º de 2006
                  </a>
                  {" "}
                  de infancia y adolescencia
                </span>
                , el interés superior de la Primera Infancia y brindarle estricto acato a la
                {" "}
                <span className="hl-green">
                  ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                    1146º de 2007
                  </a>
                  {" "}
                  y a los artículos 25º; 208; 209 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    código penal
                  </a>
                  {" "}
                  del 2000
                </span>
                , especialmente. Así como el debido respeto y la limitación parcial que contiene el libre desarrollo de la personalidad, bien entendido frente al hecho, que el libre desarrollo de la Personalidad está condicionado a que
                {" "}
                <span className="hl-red">
                  NO vulnere los derechos de terceros
                </span>
                , que para el caso en cita son menores de 14 años.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso observar siempre un comportamiento digno y correcto hacia los vecinos, en la calle, en los medios de transporte y en todos los lugares públicos, que por su cotidianidad deban visitar cuando porte nuestro uniforme del colegio y sin portarlo, como norma de urbanidad y educación que distinguen al educando, al alumno y la alumna de nuestra institución. Los hechos, acciones y situaciones protagonizados por El o La Estudiante, fuera de las instalaciones de nuestra institución pero que se constituyan contrarios a la filosofía, la educación y la identidad recibida en nuestra Institución educativa oficial y portando el uniforme de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                , serán evaluados en consejo directivo para definir, la gravedad de la falta o la
                {" "}
                <span className="hl-red">
                  situación tipo I; II, o III
                </span>
                ; y las sanciones a que haya lugar conforme al debido proceso.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso contribuir al aseo, conservación, mejoramiento y embellecimiento de la planta física y bienes materiales de nuestra institución, preservando y cuidando el medio ambiente escolar y natural.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso hacer un adecuado uso de: Biblioteca, fotocopiadora, sala de informática, laboratorios, tienda escolar y servicios sanitarios.
              </p>
            </li>
            <li>
              <p>
                El o La estudiante, tienen como compromiso tener claridad y comprender que
                {" "}
                <span className="hl-red">
                  no les estará permitido, de ninguna manera, estimular, inducir o constreñir a sus compañeros(as) en torno a faltas o infracciones de ley
                </span>
                . Es decir, participar, promover, inducir, coercitar o ser cómplices, ocultar o dirigir a sus compañeros(as) en torno a faltas o infracciones de ley. Llámese infracciones de ley, fumar, consumir bebidas alcohólicas, portar, traficar, brindar, o consumir sustancias alienantes, psicotrópicas y/o estupefacientes; (
                <span className="hl-green">
                  artículo 381 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    código penal
                  </a>
                </span>
                ) participar en acciones de pandillaje, violencia, asalto, barras bravas que acudan a la violencia o a la delincuencia, el matoneo y acoso escolar en todas sus derivaciones, sustracción o robo, y otros que la institución educativa mediante el consejo directivo determine en acato a la
                {" "}
                <span className="hl-green">
                  ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098º de 2006
                  </a>
                  , de infancia y adolescencia y el Decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39177" target="_blank" style={{ color: "var(--green)" }}>
                    860 de 2010
                  </a>
                  , así como el
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código Penal
                  </a>
                  {" "}
                  del 2000, código de la policía
                </span>
                , y demás normas aplicables a los menores de edad, y que se consideren como (delito) e infracciones de ley. Es decir: a los alumnos y las alumnas de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                ,
                {" "}
                <span className="hl-red">
                  NO les estará permitido de ninguna manera, el consumo de cigarrillo, tampoco vapeadores, o cigarrillo electrónico, alcohol, ni el porte, consumo, expendio, micro tráfico, venta o afines para casos de sustancias alienantes
                </span>
                , es decir: (alucinógenas, estupefacientes y/o psicotrópicas, psiquiátricas, sintéticas NO formuladas o farmacéuticas NO recetadas), dentro de nuestra institución o fuera de ella, portando el uniforme; tampoco les estará permitido, participar de delitos de cualquier índole, escándalos, hechos de violencia, asonadas o pandillas o situaciones punibles; tales conductas serán consideradas como
                {" "}
                <span className="hl-red">
                  presunción de Situación Tipo III
                </span>
                , y el alumno o la alumna, que después de la aplicación del debido proceso y seguido el conducto regular, sea hallado(a) culpable de estos hechos, comportamientos, acciones y actitudes, tipificables como
                {" "}
                <span className="hl-red">
                  situaciones TIPO III
                </span>
                , sujeto al debido proceso, será remitido a la comisaria de familia o a la policía de infancia y adolescencia, quienes en obediencia al
                {" "}
                <span className="hl-green">
                  artículo 19º de la ley de infancia y adolescencia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098º de 2006
                  </a>
                  , y al artículo 25º del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    código penal
                  </a>
                  {" "}
                  del 2000
                </span>
                , remitirán al alumno o alumna a un centro de resocialización y rehabilitación o en su defecto tomarán las medidas del caso, para brindarle prevalecía y cumplimiento al restablecimiento de sus derechos como lo consigna la
                {" "}
                <span className="hl-green">
                  ley de infancia y adolescencia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  , en su artículo 19º
                </span>
                .
              </p>
              <p>
                Del mismo modo, el alumno o alumna que haya sido hallado(a) como culpable de haber cometido estas infracciones de ley, quedará sujeto(a) a lo que estimen las normas legales vigentes, y lo que defina, la jurisprudencia en dichos casos, es decir si es menor de 14 años de edad, responderán jurídica y legalmente en la parte civil o penal, sus padres o acudientes, como primeros garantes del proceder de sus hijos, como apoderados y como representantes legales y como terceros civilmente responsables,
                {" "}
                <span className="hl-green">
                  artículo 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    código civil
                  </a>
                </span>
                . Para el caso de sustancias drogas o adicciones, responderán frente a las instancias de ley, por presunción de porte, tenencia, consumo y por expendio, en los casos donde pueda comprobarse que el alumno o alumna, es culpable de haber inducido a otro(os) alumno(os) al consumo; en todos los casos, responderán jurídico-legalmente sus padres o acudientes; si el alumno es menor de 14 años.
                {" "}
                <span className="hl-green">
                  Artículo 381 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    código penal
                  </a>
                </span>
                . Si, por el contrario, el alumno o alumna infractor(a), es mayor de 14 años, (Eso traduce, que es completamente judicializable a través de restablecimiento de derechos) responderá como lo amerita su falta frente al sistema jurídico penal y legal por su infracción de ley (maltrato infantil, corrupción de menores, e inducción al consumo de drogas en menor de edad;
                {" "}
                <span className="hl-green">
                  artículos 376, 378, 381 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código penal Colombiano
                  </a>
                </span>
                ),
                {" "}
                <span className="hl-green">
                  artículo 139 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                .
              </p>
              <p>
                Sin perjuicio, de la autonomía y discreción de los entes jurídico-legales y policivos, para llamar a cuentas a sus padres o acudientes como corresponsables y garantes, según el
                {" "}
                <span className="hl-green">
                  decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39177" target="_blank" style={{ color: "var(--green)" }}>
                    860º de 2010
                  </a>
                  {" "}
                  y artículo 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    código civil
                  </a>
                </span>
                .
              </p>
              <p>
                En todos los casos sin excepción, los alumnos o alumnas hallados(as) como casos positivos y confirmados como consumidores de sustancias alienantes, mediante la prueba clínica pertinente y después de realizar el conducto regular obedeciendo al debido proceso. Estos alumnos o alumnas, indefectiblemente por orden de la comisaria de familia y/o la policía de infancia o los jueces de infancia y adolescencia, deben ser remitidos a programas ambulatorios o de internado según sea el caso obedeciendo inexcusable e inaplazablemente al
                {" "}
                <span className="hl-green">
                  Artículo 19º de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  , de Infancia y Adolescencia
                </span>
                . Aplica para los vapeadores o cigarrillo electrónico,
                {" "}
                <span className="hl-red">
                  NO estará permitido
                </span>
                .
              </p>
              <p className="estimulo-title-red">
                NOTA:
              </p>
              <p>
                Mientras se les sigue el conducto regular, y el respectivo debido proceso por "presunción en consumo" pueden continuar con sus labores educativas y asistir a clases, respetando su presunción de la inocencia; sin embargo, una vez declarado positivo el caso, o probada su culpabilidad, el alumno o alumna será
                {" "}
                <span className="hl-red">
                  inmediatamente retirado(a) de nuestra institución
                </span>
                , de tal forma que se protege a la comunidad sobre el particular y además se le garantiza al alumno o alumna consumidor(a) o adicto(a), su derecho a la resocialización y rehabilitación como lo consagra el
                {" "}
                <span className="hl-green">
                  artículo 19º de la ley de infancia y adolescencia
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  {" "}
                  y el artículo 44º numerales 4 y 7 de la misma ley de infancia y adolescencia
                </span>
                ; tomando como referente que, en ponderación Constitucional prevalece el Derecho a la Salud, a la Resocialización y Rehabilitación, en conexidad con la salud, por sobre el Derecho a la Educación.
              </p>
              <p className="estimulo-title-red">
                Parágrafo 1:
              </p>
              <p>
                Los padres de familia, acudientes o representantes legales de los alumnos o alumnas hallados(as) como positivos en consumo de sustancias, y que no acaten la norma de remisión de su hijo o hija o hijos a un centro especializado para su tratamiento de resocialización y rehabilitación en su obligación de patria potestad.
              </p>
              <p className="estimulo-title-red">
                Parágrafo 2:
              </p>
              <p>
                Los padres de familia o acudientes, que no acaten el llamado para realizar y proseguir en la colaboración del desarrollo del debido proceso en aras de la protección y bienestar de sus hijos(as) y el restablecimiento de sus derechos al tenor del
                {" "}
                <span className="hl-green">
                  artículo 44 superior y el artículo 11º de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                , y tomando como referente que "cualquier persona" puede invocar la protección y el restablecimiento de los derechos de los menores de 18 años y también, respecto al derecho a la presunción de inocencia que tiene el alumno y la alumna y el derecho a indagar, que tiene la institución educativa, tales ejercicios y acciones como la solicitud de la prueba de sangre o el espectro en los centros clínicos especializados y aceptados por los peritajes de secretaria de salud, tales actuaciones omisivas y cómplices de negarse por parte de los padres de familia o acudientes, a realizar el examen toxicológico al educando para restablecer sus derechos, de manera inmediata quedará a discreción del Consejo Directivo por el presunto proceder de omisión, abandono y trato negligente, de que trata el
                {" "}
                <span className="hl-green">
                  artículo 18 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                , y de omisión respecto de lo que ordena el
                {" "}
                <span className="hl-green">
                  artículo 19 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                , de tal manera que tales alumnos,
                {" "}
                <span className="hl-red">
                  NO podrán de ninguna manera continuar asistiendo a la institución a recibir sus clases normales académicas
                </span>
                , hasta tanto no cumplan con el debido proceso solicitado, en tales casos la institución
                {" "}
                <span className="hl-red">
                  NO está obligada a recibirlos
                </span>
                , hasta que la Comisaria de Familia o el Defensor de Familia, conforme a sus funciones, actúen para restablecimiento de los derechos del educando y en todo caso, en armonía con lo que las instancias de la corte constitucional señalan.
              </p>
              <p className="estimulo-title-red">
                Nota:
              </p>
              <p>
                estas acciones de sanción, se cumplen acatando las normas legales vigentes antes enumeradas, clarificadas y conceptuadas mediante consenso en previa reunión del Consejo Directivo y han sido aprobadas, se socializan, en ASAMBLEA DE PADRES, de tal forma que son inamovibles e irrenunciables, toda vez que la normativa de ley, no se cumple o acata por consenso, sino que es de obligatorio e inaplazable cumplimiento.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso comprender que
                {" "}
                <span className="hl-red">
                  de ninguna manera, está permitido la tenencia y porte de armas de fuego, armas blancas u objetos contundentes o explosivos
                </span>
                {" "}
                en posesión del educando, de hallarse culpable de tales conductas, el alumno o alumna, será de inmediato privado de permanecer en la institución educativa, después de agotado el debido proceso correspondiente, y el conducto regular, en todos los casos estas actuaciones, son consideradas, como
                {" "}
                <span className="hl-red">
                  situación TIPO III
                </span>
                , su consecuencia es la pérdida del cupo y su retiro inmediato de nuestra institución educativa oficial y pública, además de la respectiva denuncia frente a los hechos, con dirección a los entes policivos que corresponden por competencia, a voces del
                {" "}
                <span className="hl-green">
                  artículo 18 numeral 4 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                    1620 de 2013
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso asistir diariamente y con puntualidad al colegio, a todas las clases y actividades académicas, programadas según el horario escolar asignado; de encontrarse, al educando, fuera del salón sin una constancia o permiso escrito del docente, evadiendo así sus clases, de inmediato se citará a los padres o acudientes.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso cumplir, oportunamente con las obligaciones escolares (clases, tareas, trabajos de investigación, talleres, lecturas, evaluaciones, servicio social, etc.) cuidando el orden y la Calidad de dichas obligaciones. Si los (las) estudiantes, no cumplen con sus deberes curriculares, nuestra Institución educativa oficial, se regirá por las normas emanadas de la corte constitucional en ese respecto.
              </p>
              <p className="estimulo-title-red">
                CORTE CONSTITUCIONAL, SENTENCIA T – 478 DE 2015.
              </p>
              <div className="quote-block">
                <p>
                  3.2. A ese respecto, vale indicar que, en reiterada jurisprudencia, esta Corporación ha sostenido que la educación: "tiene la doble naturaleza de derecho deber que implica, tanto para' el educando como para la institución educativa, el cumplimiento de las obligaciones correlativas a las que se han comprometido como parte del proceso educativo. En particular, la Corte ha considerado que los estudiantes, desde el momento de su ingreso al establecimiento, tienen el deber de cumplir con las exigencias impuestas por las normas internas del respectivo centro, y, en particular, por lo dispuesto en el reglamento interno. De esta manera, la jurisprudencia ha considerado que los educandos no pueden invocar la protección de su derecho a la educación para justificar el incumplimiento de las exigencias académicas y administrativas."
                </p>
              </div>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso asistir al colegio con una presentación digna – a juicio de nuestra Institución educativa oficial, adecuada para las obligaciones estéticas y formativas y que no llame la atención ni sea desobligante, mostrando su compromiso de autoestima y dignidad propia, de respeto por su cuerpo y por su propia dignidad y decoro, los padres colaborarán en ese aspecto de manera inexcusable.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso hacer buen uso de patios, pasillos, salones y baños (Incluyendo el
                {" "}
                <span className="hl-red">
                  NO escribir grafitis ni mensajes obscenos o vulgares de ninguna clase en puertas y/o paredes
                </span>
                ; de comprobarse su participación en esa infracción, los padres o acudientes inmediatamente, aportarán el dinero necesario para la pintura y demás materiales pertinentes para subsanar el daño).
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso utilizar correctamente los recursos sanitarios disponibles (agua) y demás elementos que ofrece, la institución en aras de la buena salud y bienestar.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso disfrutar, de las zonas de recreación en actitud de respeto hacia los demás, sin agresiones y usando un lenguaje decente y decoroso conforme a su educación y moral.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso rendir un total respeto a los miembros de la comunidad con problemas o discapacidades de cualquier índole, como muestra de su humildad y disciplina, sencillez y tolerancia y como muestra evidente de su interés por una sana convivencia hacia sus semejantes y como estricto acato al
                {" "}
                <span className="hl-green">
                  artículo 44 literal 5 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso abstenerse de recibir o comprar alimentos y/o artículos ofrecidos por los vendedores ambulantes y/o de sitios comerciales aledaños desconocidos, ello con el fin de protegerles de cualquier intoxicación o acción lesiva. De presentarse alguna intoxicación causada por el incumplimiento a éste numeral, nuestra INSTITUCION OFICIAL, se exonera y exime de cualquier responsabilidad.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso comportarse adecuadamente siguiendo los lineamientos de este manual de convivencia, en todo lugar en el cual estén bajo la tutela de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                ; o en representación del mismo: eventos, o festividades, salidas pedagógicas, convivencias, competencias deportivas, actividades artísticas, salidas dentro y fuera del país, etc.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso enaltecer, los valores culturales, nacionales, institucionales, los símbolos patrios y del colegio, sobre todo la filosofía institucional de valores, la moral y la dignidad.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso, entonar los himnos en los actos comunitarios con la postura correcta demostrando respeto por los símbolos patrios.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso respetar, defender y cuidar el nombre, prestigio y bienes del colegio, procurando expresarse acerca de él con cariño y lealtad, demostrando amor propio y pertenencia con nuestra institución.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso cumplir con los requisitos de evaluación y promoción establecidos por la ley en el
                {" "}
                <span className="hl-green">
                  decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=35954" target="_blank" style={{ color: "var(--green)" }}>
                    1290º de 2009
                  </a>
                </span>
                {" "}
                y el Proyecto Educativo institucional dentro de la planificación y objetivos de nuestra Institución educativa oficial. Nunca acudirá al fraude.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso representar dignamente a la Institución en cualquier evento para el que sean elegidos o seleccionados.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso en caso de inasistencia sin excusa al colegio, presentarse con su acudiente o padre de familia, quien justificará su ausencia en un plazo
                {" "}
                <span className="hl-green">
                  24 horas hábiles
                </span>
                , el día que se incorpora a la institución, del mismo modo, en todos los casos nuestra Institución educativa oficial, se exonera y se exime de cualquier actividad o hecho en el que haya participado o realizado el educando por fuera de nuestra institución durante dicha ausencia.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso en caso de falla justificada, el de solicitar, presentar y sustentar las actividades correspondientes para ser evaluados.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso presentarse a primera hora o en hora de descanso, al coordinador de convivencia, con la respectiva autorización escrita y firmada por los padres de familia o acudientes, para informar o acreditar, situaciones especiales como: salidas del colegio, permiso para asistir a actividades Extra clases, permiso para citas médicas y etc.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso solicitar y presentar autorización escrita para que estén fuera del aula de clase.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso, respetar la palabra y opinión de sus compañeros, profesores y superiores, y demás personas de nuestra institución, sin comentarios de burla, desprecio o discriminación.
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante, tienen como compromiso cuidar sus pertenencias y hacer buen uso de los recursos del colegio.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso abstenerse de portar revistas, dibujos, videos, juegos o cualquier tipo de material pornográfico o utilizar el servicio de Internet del colegio para entrar a páginas no permitidas. Tales actuaciones, son
                {" "}
                <span className="hl-red">
                  situaciones Tipo III
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante tienen como compromiso,
                {" "}
                <span className="hl-red">
                  No interrumpir las clases o el estudio de sus demás compañeros
                </span>
                , con desordenes, gritos o silbidos en cualquier lugar del colegio.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso respetar y cuidar el buen nombre de maestros, directivas y demás funcionarios del colegio a través de un trato respetuoso, y utilizando un lenguaje correcto y libre de calumnias e injurias contra ellos. Recordando que, en algunos hechos y casos, son delitos, la injuria y la calumnia, la discriminación y el hostigamiento, y en algunos casos, también el Matoneo o acoso escolar, o Bullying o ciberbullying. Además, recordando, que son actuaciones, que, para nada reflejan la filosofía, ni la visión, mucho menos la misión de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                ; mucho menos refleja un digno testimonio de educación integral, tampoco es el testimonio fiel de un proceder recto. De incurrir en hechos de matoneo o amenaza, acoso escolar o afines, u otros actos que incluyan amenaza, injuria, calumnia, lesiones personales, hostigamientos, discriminación, amenaza u otras infracciones de ley; se iniciará, el debido proceso siempre bajo el cargo de presunción, pero resaltando que el matoneo y los delitos descritos, se tipifican para el presente manual de convivencia, como
                {" "}
                <span className="hl-red">
                  situaciones Tipo III
                </span>
                .
              </p>
              <p>
                En algunos casos, ameritan incluso hasta la cancelación de la Matricula, de acuerdo a la gravedad de la conducta irregular desplegada. Se aclara taxativo que, los estudiantes que, incurran en
                {" "}
                <span className="hl-red">
                  ACOSO ESCOLAR, MATONEO O BULLYING Y CIBERBULLYING
                </span>
                , en contra de sus pares y después de agotados, el conducto regular y el debido proceso en extenso y respetando su derecho a la defensa y a la presunción de la inocencia, y acorde a sus derechos y libertades (
                <span className="hl-green">
                  artículo 15 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                ) y que, agotadas las instancias, hayan sido hallados culpables de acoso escolar, Bullying, ciberbullying, matoneo, hostigamiento, discriminación, actos sexuales, abusos sexuales, o amenazas e intimidación o conexos, derivados, ligados o afines al matoneo o acoso escolar, sin excusa, sin dilación, sin evasivas, acudirán a indemnizar a la víctima o a las víctimas, entre
                {" "}
                <span className="hl-red">
                  01 y 100 salarios mínimos mensuales vigentes
                </span>
                , dado que, nuestro colegio, en su filosofía, misión, visión, y objetivos, emerge como
                {" "}
                <span className="hl-red">
                  CERO TOLERANTE
                </span>
                , ante hechos de matoneo, acoso escolar y Bullying o ciberbullying, lo anterior, además, aprobado en Consejo Directivo, y aprobado en dos (2) asambleas de padres de familia, y con sustento jurídico en los
                {" "}
                <span className="hl-green">
                  artículos 10, 14, 17, 18, 39, 44 numeral 4 y 5 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  ; y artículos 139 y 142 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  , además de los artículos 2346, 2347 y 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    código civil
                  </a>
                </span>
                , vigente. Será el comité de padres de familia en sus diez (10) miembros seleccionados, quienes estimen y determinen sin dilación, el rubro, la cantidad de salarios mínimos a indemnizar por parte de los padres y acudientes de los de los agresores y acosadores o matoneadores.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso hacer buen uso de los medios de comunicación del colegio y utilizar el portal interactivo de manera exclusiva con fines académicos, empleando un lenguaje apropiado sin apodos ni groserías o mensajes vulgares o desobligantes hacia ningún miembro de la comunidad educativa.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso colaborar activamente con el orden y el aseo de las instalaciones del colegio haciendo buen uso de las canecas destinadas para la basura.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso respetar los bienes ajenos, tanto de los que pertenecen al colegio, como los que pertenecen a otros(as) alumnos(as), profesores y otros empleados de nuestra institución. Por el contrario, de ser sorprendido en una sustracción en flagrancia, se remitirá el caso como presunción de robo, con la respectiva cadena de custodia y debido proceso, en conducto regular, tanto del elemento sustraído como del alumno o la alumna sorprendida en flagrancia a las autoridades pertinentes, especialmente a la policía de infancia y adolescencia, brindando acato al
                {" "}
                <span className="hl-green">
                  Código de la Infancia y la Adolescencia,
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código penal
                  </a>
                  {" "}
                  y Decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39177" target="_blank" style={{ color: "var(--green)" }}>
                    860º
                    {" "}
                  </a>
                  del 2010
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso entregar a los padres de familia las circulares y citaciones enviadas por el colegio. Nunca ocultarlas u olvidar entregarlas.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen el compromiso de tratar con respeto a los demás, colaborando así en la construcción de un clima de convivencia que permita que todas las personas de la comunidad educativa se sientan valoradas de acuerdo a su dignidad intrínseca, de la misma manera demostrando con ello su compromiso con la filosofía de respeto, convivencia y tolerancia de nuestra institución.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso respetar de palabra y de hecho la formación espiritual y los valores institucionales de nuestra institución OFICIAL:
                {" "}
                <span className="hl-green">
                  I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE
                </span>
                , acompañando con una actitud respetuosa y decorosa, manteniendo un adecuado comportamiento en las celebraciones y actividades programadas y demás actividades de convivencia espiritual o religiosa, salvo que se aplique que, el alumno o alumna NO asiste y debe ir a la biblioteca a realizar el trabajo escrito sobre su respectivo credo religioso.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso desde el primer día de clases tener los elementos, útiles escolares y traerlos durante todo el año de acuerdo al horario para su buen desempeño. Salvo acuerdo con los padres y acudientes.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, El (la) estudiante tiene el compromiso de presentar por escrito a la coordinación las excusas debidamente justificadas por inasistencias a clases, cuando estas se deban a incapacidad médica, calamidad doméstica o familiar, o por malestar de salud manifestado durante la jornada escolar en un término de
                {" "}
                <span className="hl-green">
                  24 horas (hábiles)
                </span>
                . Además, una vez se reincorpore a la institución, el estudiante contará con un plazo máximo de tres días para ponerse al día en las actividades académicas no realizadas durante su ausencia. Transcurrido dicho tiempo sin justificación válida, no podrá presentar las estrategias evaluativas pendientes correspondientes al periodo afectado.
              </p>
            </li>
            <li>
              <p>
                El o la estudiante, tienen como compromiso asistir puntualmente a clases durante la jornada escolar en el horario que asigne la coordinación encargada. Cualquier estudiante que acumule
                {" "}
                <span className="hl-red">
                  el 20% o más de inasistencias reprobaran las asignaturas o áreas del plan de estudio
                </span>
                {" "}
                ofrecido por la institución, independientemente de los resultados de los desempeños que acumule al finalizar el año escolar. Sin recurso de poder exigir el derecho a la educación o invocarlo, toda vez que la Jurisprudencia de la corte constitucional aduce:
              </p>
              <p className="estimulo-title-red">
                CORTE CONSTITUCIONAL, SENTENCIA DE TUTELA, T- 478 DE 2015.
              </p>
              <div className="quote-block">
                <p>
                  3.2. A ese respecto, vale indicar que, en reiterada jurisprudencia, esta Corporación ha sostenido que la educación: "tiene la doble naturaleza de derecho deber que implica, tanto para' el educando como para la institución educativa, el cumplimiento de las obligaciones correlativas a las que se han comprometido como parte del proceso educativo. En particular, la Corte ha considerado que los estudiantes, desde el momento de su ingreso al establecimiento, tienen el deber de cumplir con las exigencias impuestas por las normas internas del respectivo centro, y, en particular, por lo dispuesto en el reglamento interno. De esta manera, la jurisprudencia ha considerado que los educandos no pueden invocar la protección de su derecho a la educación para justificar el incumplimiento de las exigencias académicas y administrativas."
                </p>
              </div>
              <div className="quote-block">
                <p>
                  "La Corte Constitucional ha reiterado a lo largo de la jurisprudencia, en el sentido de considerar que quien se matrícula en un Centro Educativo, con el objeto de ejercer el derecho Constitucional fundamental que lo ampara, contrae por ese mismo hecho obligaciones que debe cumplir, de tal manera que
                  {" "}
                  <span className="hl-red">
                    NO puede invocar el mencionado derecho para excusar las infracciones en que incurra
                  </span>
                  .
                  {" "}
                  <span className="hl-green">
                    Corte Constitucional, Sentencia T- 235 de 1997. Negrilla fuera de texto.
                  </span>
                </p>
              </div>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso presentar por escrito excusa a la coordinación por inasistencia a clase debido a incapacidad médica o por calamidad domestica debidamente justificada.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso permanecer en el salón durante las sesiones de clases y asumir una actitud de interés constante, orientado a complementarla, establecer diálogos, comparar, reflexionar, brindar juicios sanos y críticas constructivas basadas en el conocimiento, la zona de desarrollo próximo y el contexto.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso mantener una excelente presentación, aseo e higiene personal, portando cada prenda del uniforme en su lugar y dándole el uso para el cual fue diseñada de acuerdo al clima y a la tarea para la cual la prenda de vestir fue diseñada.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso reparar, los daños que cause a la planta física, el mobiliario o al material didáctico.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso conservar paredes, puertas, jardín, pasillos y demás áreas comunes, así como el parque y canchas deportivas, así como la zona de recreación y otros en perfecto estado.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso conocer y cumplir con las funciones que le sean asignadas como Monitor y/o líder de grupo, al comité al que pertenezca.
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante, tienen como compromiso
                {" "}
                <span className="hl-red">
                  No cometer ningún tipo de fraude
                </span>
                , (entendiéndose como fraude, engaño, maniobra inescrupulosa, suplantación o encubrimiento) tanto en actividades académicas como disciplinarias. El fraude puede incluso llegar a constituir, una
                {" "}
                <span className="hl-red">
                  situación Tipo III
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso,
                {" "}
                <span className="hl-red">
                  No falsificar firmas
                </span>
                {" "}
                en documentos, permisos, citaciones, comunicados de padres de familia, circulares, etc.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso,
                {" "}
                <span className="hl-red">
                  No traer a la Institución iPod, Ipad, mp3, mp4, cámaras fotográficas, juegos de video, artículos eléctricos o electrónicos, patinetas, etc.
                </span>
                {" "}
                (En caso de pérdida de los mismos, la institución se exonera y exime de cualquier responsabilidad). Ver acápite respecto de la
                {" "}
                <span className="hl-green">
                  ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=120033" target="_blank" style={{ color: "var(--green)" }}>
                    2170 de 2021
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso, aceptar que solo podrá traer elementos deportivos o artísticos como producto de una actividad pedagógica previa autorización del docente del área, el cuidado de estos será responsabilidad del estudiante o La Estudiante que lo ingresa.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso cumplir con Calidad y puntualmente con tareas, trabajos, horarios, actividades individuales y colectivas programadas por el colegio.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso respetar el trabajo, la concentración y la participación de los demás compañeros, en las actividades propuestas en clase y utilizar un volumen de voz adecuado.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso conocer y cumplir el reglamento interno de biblioteca, laboratorios, aula de sistemas, tienda escolar, aula múltiple y aulas normales.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso portar diariamente la agenda escolar, carné y documento de la EPS, dando buen uso y manteniéndolos en perfecto estado. En caso de pérdida deben solicitar duplicado en la secretaría académica sufragando el costo estipulado.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso respetar los espacios y tiempos establecidos para el consumo de alimentos.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso abstenerse de ingresar a la sala de profesores, salvo que sea invitado y autorizado o en compañía del docente correspondiente.
              </p>
            </li>
            <li>
              <p>
                El o La Estudiante, tienen como compromiso ser solidarios ante las calamidades, dificultades o accidentes que pueda presentar algún otro miembro de la comunidad, brindar inmediato aviso a los profesores o administrativos.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso ser un ejemplo en cualquier otra acción que a buen criterio de los docentes y/o directivos, se considera que es valiosa o que representa el espíritu y la identidad de un alumno o alumna de nuestra institución, a través de su propia vida y proceder.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso el alejarse y no participar de cualquier otra actividad que se presuma que atenta o transgreda las normas establecidas y la sana convivencia, la moral y las buenas costumbres de la comunidad educativa, teniendo siempre como referente un proceder articulado con la dignidad humana, las normas y las leyes.
              </p>
            </li>
            <li>
              <p>
                El estudiante o La Estudiante, tienen como compromiso siempre estar en la constante búsqueda de una vida y proceder ejemplar y de excelente e inmejorable ejemplo en todos los aspectos de su cotidiano, teniendo como referente que los alumnos, los adolescentes y mayores, son el ejemplo de carácter a imitar por parte de los y las estudiantes más pequeños y la gente del común que les rodea, con la premisa de que su comportamiento se rige de aquello que aprenden en sus hogares, aquello que se inculca con valores y principios, linderos y obligaciones y que imitan de sus padres como referente de una educación integra e integral. Que se explica de manera precisa, clara y conducente, que la violación, desatención y la desobediencia a las anteriores, obligaciones, compromisos, deberes y sujeciones, dará lugar a las
                {" "}
                <span className="hl-red">
                  sanciones en materia de faltas leves, graves y muy graves
                </span>
                , que serán evaluadas en criterio de proporcionalidad, por el primer respondiente y en asesoría y acompañamiento del concepto del comité de convivencia y con la decisión final y el aval de notificación del consejo directivo. Incluso se podrán catalogar e imputar en calidad de
                {" "}
                <span className="hl-red">
                  situaciones Tipo III
                </span>
                , así sean protagonizadas, por menores de 14 años de edad, que
                {" "}
                <span className="hl-red">
                  NO son judicializables
                </span>
                . Sin embargo, para esos casos EXCEPCIONALES, responderán penal y civilmente, sus padres a voces de los
                {" "}
                <span className="hl-green">
                  artículos 10; 14; 18; 19, 20 numeral 1, numeral 4; 39 Y 142 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  ; y a voces de los artículos 2346, 2347 y 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    código civil
                  </a>
                </span>
                .
              </p>
            </li>
          </ol>
        </TabPanel>
        <TabPanel className="deberes-tab-content tab-content-blue" id="dlenis-servicio">
          <p className="sec-main-title sec-main-title--blue">
            SERVICIO SOCIAL
          </p>
          <p>
            El servicio social pretende que el educando se integre a la comunidad, contribuyendo a su mejoramiento social, cultural y económico, colaborando en los proyectos y trabajos que lleva a cabo y desarrollando en él, el valor de solidaridad y el conocimiento frente a su entorno social (
            <span className="hl-green">
              artículo 39 Decreto
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1289" target="_blank" style={{ color: "var(--green)" }}>
                1860 de 1994
              </a>
            </span>
            ). En consonancia con lo expuesto en el
            {" "}
            <span className="hl-green">
              artículo 97 de la Ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            {" "}
            y su
            {" "}
            <span className="hl-green">
              Decreto Reglamentario
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1289" target="_blank" style={{ color: "var(--green)" }}>
                1860 de 1994
              </a>
              {" "}
              y Resolución
              {" "}
              <a href="https://www.mineducacion.gov.co/portal/normativa/Resoluciones/96032:Resolucion-4210-de-Septiembre-12-de-1996" target="_blank" style={{ color: "var(--green)" }}>
                4210 de 1996
              </a>
            </span>
            , que persigue la formación integral del educando, por ello, emerge lo que está enmarcado y definido en el
            {" "}
            <span className="hl-green">
              Proyecto Educativo Institucional (PEI)
            </span>
            {" "}
            y es ejecutado por Nuestra Institución educativa oficial, en forma conjunta y sistemática con entidades gubernamentales y no gubernamentales, especializadas en la atención a las familias y comunidades.
          </p>
          <p>
            El MEN, mediante la
            {" "}
            <span className="hl-green">
              Resolución
              {" "}
              <a href="https://www.mineducacion.gov.co/portal/normativa/Resoluciones/96032:Resolucion-4210-de-Septiembre-12-de-1996" target="_blank" style={{ color: "var(--green)" }}>
                4210 de 1996
              </a>
            </span>
            , estableció las reglas generales para la organización y el funcionamiento del servicio social estudiantil obligatorio, disponiendo en su artículo 3º, los objetivos principales del servicio social:
          </p>
          <p className="subtitle-green">
            OBJETIVOS DEL SERVICIO SOCIAL
          </p>
          <ol className="derechos-list">
            <li>
              Sensibilizar al educando frente a las necesidades, intereses, problemas y potencialidades de la comunidad, para que adquiera y desarrolle compromisos y actitudes en relación con su mejoramiento.
            </li>
            <li>
              Contribuir al desarrollo de la solidaridad, tolerancia, cooperación, respeto a los demás, la responsabilidad y el compromiso con su entorno social.
            </li>
            <li>
              Promover acciones educativas orientadas a la construcción de un espíritu de servicio para el mejoramiento permanente de la comunidad y a la prevención integral de problemas socialmente relevantes.
            </li>
            <li>
              Promover la aplicación de conocimientos y habilidades logrados en áreas obligatorias y optativas definidas en el plan de estudios que favorezcan el desarrollo social y cultural de las comunidades.
            </li>
            <li>
              Fomentar, la práctica del trabajo y del aprovechamiento del tiempo libre, como derechos que permiten la dignificación de la persona y el mejoramiento de su nivel de vida.
            </li>
          </ol>
          <p className="estimulo-title-red">
            Parágrafo:
          </p>
          <p>
            Los educandos, deberán prestar su Servicio Social en el desarrollo de los diferentes proyectos concertados para tal fin, dentro de nuestra Institución educativa oficial, y en los demás proyectos transversales, que se determinen mediante convenios con las diferentes autoridades o entes públicos, previo acuerdo con Nuestra Institución educativa oficial.
          </p>
          <div className="commit-block">
            <p className="estimulo-title-red">
              Nota:
            </p>
            <p>
              Si el educando falta a sus deberes de trabajo social, mediante engaño o inducción mintiendo y, señalando que se encuentra en dichas actividades cuando en verdad se evade y se encuentra en otras actuaciones diferentes, el colegio
              {" "}
              <span className="hl-red">
                NO tendrá responsabilidad alguna, civil, penal, disciplinaria o contractual
              </span>
              . El educando se ha puesto en riesgo a sí mismo, y ha mentido. Será tipificada como
              {" "}
              <span className="hl-red">
                falta grave o muy grave
              </span>
              {" "}
              según criterio de la coordinación de convivencia.
            </p>
          </div>
          <p className="estimulo-title-red">
            Parágrafo 1.
          </p>
          <p>
            El educando desde grado noveno (9), puede desarrollar su servicio social, realizando sus
            {" "}
            <span className="hl-green">
              80 horas
            </span>
            .
          </p>
          <p className="estimulo-title-red">
            Parágrafo 2.
          </p>
          <p>
            La institución educativa Antonio Lenis ofrece a varios frentes donde prestar este servicio social. Internamente en el comité de disciplina estudiantil, comité ambiental, Biblioteca, de la orientación escolar en la elaboración de material de prevención del abuso sexual infantil (
            <span className="hl-green">
              artículo 5 parágrafo de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                2025 de 2020
              </a>
            </span>
            ), elaborando material para prevención del consumo de drogas, material para prevenir el embarazo adolescente, material para prevenir el acoso y matoneo escolar, material para prevenir el suicidio y la depresión; material para el tema de orientación sexual. Entiéndase, material: pdfs, power point, presentaciones animadas, videos, filminutos, canciones, poemas, videografías, cuñas radiales, comerciales, u otro material visual, audiovisual o similar. Que destine y para el cual, requiera las
            {" "}
            <span className="hl-green">
              80 horas de servicio social
            </span>
            , para su elaboración. A través de un proyecto transversal lúdico – pedagógico de aplicación al aula. Externamente con entidades que hacen convenios con la Institución.
          </p>
          <p className="estimulo-title-red">
            Parágrafo 3.
          </p>
          <p>
            La institución presenta alianzas estratégicas con entidades de la región para que los estudiantes puedan prestar su servicio social.
          </p>
        </TabPanel>
      </Tabs>
    </>
  );
}
