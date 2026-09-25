import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap17() {
  return (
    <>
      <Tabs ids={["tipo-I","tipo-II","tipo-III"]} initial="tipo-I">
        <div className="section-header">
          <span className="section-num">
            17
          </span>
          <h2 className="section-title">
            Protocolo de Atención
          </h2>
        </div>
        <p className="subtitle-green">
          Protocolos de Atención en Establecimientos Educativos
        </p>
        <p>
          Atendiendo a lo estipulado en el
          {" "}
          <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537" target="_blank" style={{ color: "var(--green)" }}>
            decreto 1965 de 2013
          </a>
          , articulo 41, de los Protocolos de Atención en Establecimientos Educativos. Los protocolos de los establecimientos educativos, finalidad, contenido y aplicación. Los protocolos de los establecimientos educativos estarán orientados a fijar los procedimientos necesarios para asistir oportunamente a la comunidad educativa frente a las situaciones que afectan la convivencia escolar y el ejercicio de los Derechos Humanos, sexuales y reproductivos.
        </p>
        <p>
          Estos protocolos deberán definir, como mínimo los siguientes aspectos:
        </p>
        <ol className="derechos-list">
          <li>
            La forma de iniciación, recepción y radicación de las quejas o informaciones sobre situaciones que afectan la convivencia escolar y el ejercicio de los Derechos Humanos, sexuales y reproductivos.
          </li>
          <li>
            Los mecanismos para garantizar el derecho a la intimidad y a la confidencialidad de los documentos en medio físico o electrónico, así como de las informaciones suministradas por las personas que intervengan en las actuaciones y de toda la información que se genere dentro de las mismas, en los términos establecidos en la Constitución Política, los tratados internacionales, en la
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
              Ley 1098 de 2006
            </a>
            , en la Ley Estatutaria 1581 de 2012, en el Decreto 1377 de 2013 y demás normas aplicables a la materia.
          </li>
          <li>
            Los mecanismos mediante los cuales se proteja a quien informe sobre la ocurrencia de situaciones que afecten la convivencia escolar y el ejercicio de los Derechos Humanos, sexuales y reproductivos, de posibles acciones en su contra.
          </li>
          <li>
            Las estrategias y alternativas de solución, incluyendo entre ellas los mecanismos pedagógicos para tomar estas situaciones como oportunidades para el aprendizaje y la práctica de competencias ciudadanas de la comunidad educativa.
          </li>
          <li>
            Las consecuencias aplicables, las cuales deben obedecer al principio de proporcionalidad entre la situación y las medidas adoptadas, y deben estar en concordancia con la Constitución, los tratados internacionales y la ley.
          </li>
          <li>
            Las formas de seguimiento de los casos y de las medidas adoptadas, a fin de verificar si la solución fue efectiva.
          </li>
          <li>
            Un directorio que contenga los números telefónicos actualizados de las siguientes entidades y personas: Policía Nacional, del responsable de seguridad de la Secretaría de Gobierno Municipal, distrital o departamental, Fiscalía General de la Nación Unidad de Infancia y Adolescencia, Policía de Infancia y Adolescencia, Defensoría de Familia, Comisaría de Familia, Inspector de Policía, ICBF – Instituto Colombiano de Bienestar Familiar, del puesto de salud u Hospital más cercano, Bomberos, Cruz Roja, Defensa Civil, Medicina Legal, de las entidades que integran el Sistema Nacional de Convivencia Escolar, de los padres de familia o acudientes de los niños, niñas y adolescentes matriculados en el establecimiento educativo.
          </li>
        </ol>
        <div className="tipo-tabs-bar">
          <TabButton tab="tipo-I" className="tipo-tab-btn">
            Situaciones Tipo I
          </TabButton>
          {" "}
          <TabButton tab="tipo-II" className="tipo-tab-btn">
            Situaciones Tipo II
          </TabButton>
          {" "}
          <TabButton tab="tipo-III" className="tipo-tab-btn">
            Situaciones Tipo III
          </TabButton>
        </div>
        <TabPanel className="tipo-tab-content" id="tipo-I">
          <div className="tipo-card-head tipo1">
            PROTOCOLO PARA SITUACIONES TIPO I
          </div>
          <p>
            Reconociendo que la sana convivencia, es básica para el orden social y para obtener un aprendizaje óptimo, es esencial para el colegio que los estudiantes observen un buen comportamiento psicosocial, emocional, disciplinario, conductual y sobre todo armónico en el respeto mutuo. Acorde a ello, tenemos que desarrollar, un manejo para las faltas consideradas como leves, que, para el presente manual de convivencia escolar, generamos, así:
          </p>
          <ol className="derechos-list">
            <li>
              Recibir, documentar, en el observador del estudiante, la actuación reprochable del presunto educando infractor, y someter el escrito o nota de precedente, a un análisis lógico, reflexivo y de coherencia que dirija al educando a no reincidir en esa falta, y considerar un llamado de atención leve, como un apoyo especial para la mejora de su proceder en comunidad.
            </li>
            <li>
              Establecer un diálogo reflexivo, entre el director de grupo, Docente y/o Directivo que presencia o conoce de los hechos, o del hecho, y que logre cautivar al educando infractor, para lograr, aclarar la situación presentada, generando un compromiso verbal de parte del educando, para que no se repita el incidente que se ha tipificado como situación Tipo I o leve.
            </li>
            <li>
              En caso de que el educando incumpla el llamado de atención verbal que lo conmina a no reincidir en el hecho leve o Situación Tipo I, el Docente, director de grupo y/o Directivo, conocedor del caso, citará de inmediato, al Padre de Familia y/o acudiente por escrito (Formato de citación a padres de familia) para notificarle, acerca de la reincidencia de su hijo o hija, frente a la situación Tipo I. En dicha reunión con los acudientes, y el educando, se registrará en el observador del alumno o ficha de seguimiento, los acuerdos y los compromisos que se adquieran y que se necesite establecer de acuerdo a cada caso.
            </li>
            <li>
              Si el educando, presenta una nueva y segunda reincidencia o reiteración en la misma situación u otra, así NO sean consecutivas, demostrando con su proceder, que no desea corregir su comportamiento, el caso, se remitirá a Coordinación de Convivencia y formación, en donde se debe realizar, un trabajo de asistencia pedagógica como medida formativa, en la cual, inexcusablemente, debe participar, educando y acudiente o acudientes.
            </li>
          </ol>
          <div className="tipo-para">
            <p>
              <strong>
                Parágrafo 1:
              </strong>
              {" "}
              se garantizará el derecho a la intimidad y a la confidencialidad de las personas involucradas en la situación y de los documentos en medio físico o electrónico, así como de las informaciones suministradas por las personas que intervengan en las actuaciones y de toda la información que se genere dentro de las mismas, en los términos establecidos en la Constitución Política, los tratados internacionales, en la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                Ley 1098 de 2006
              </a>
              , en la Ley Estatutaria 1581 de 2012, en el Decreto 1377 de 2013 y demás normas aplicables a la materia.
            </p>
          </div>
          <div className="tipo-sanciones">
            <h4>
              Sanciones para situaciones Tipo I
            </h4>
            <ol className="derechos-list">
              <li>
                Trabajo manuscrito de dos hojas, en el tema de la infracción cometida. A manera de reflexión y redireccionamiento de la conducta nociva.
              </li>
              <li>
                Anotación de los hechos en el observador del alumno o ficha de seguimiento
              </li>
              <li>
                Llamado de atención conductual y reflexivo.
              </li>
              <li>
                Compromiso de NO reincidencia, escrito con copia al observador del estudiante.
              </li>
            </ol>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content" id="tipo-II">
          <div className="tipo-card-head tipo2">
            PROTOCOLO PARA SITUACIONES TIPO II
          </div>
          <p>
            Para brindarle un manejo adecuado, asertivo e integral, que se sujete al debido proceso en situaciones TIPO II, acudiremos como, institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; a reforzar, nuestras actuaciones para situaciones TIPO II, con el siguiente protocolo:
          </p>
          <ol className="derechos-list">
            <li>
              Debe reunirse a los educandos implicados, testigos o protagonistas de los hechos a analizar, ello, con el propósito de reunir y unificar, la mayor cantidad de información, acerca de la situación Tipo II, verificando y evaluando, los descargos por escrito de los educandos, y nunca realizando entrevistas, ni individuales, ni grupales, mucho menos, realizando interrogatorios, pues los educadores NO fungen como policía judicial, sino únicamente, recibiendo por escrito, los descargos de cada uno de los presuntos implicados, sin realizarles preguntas. (
              <span className="hl-green">
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 150 de ley 1098 de 2006
                </a>
              </span>
              ). Determinando con ello, los elementos de modo, tiempo y lugar, y determinando en calidad de presunción para llegar a la certeza de quienes son los presuntos agresores o infractores, y cuales las presuntas víctimas o agredidos.
            </li>
          </ol>
          <div className="tipo-note">
            <p>
              <strong>
                Nota:
              </strong>
              {" "}
              En caso de presentarse una agresión física, un daño al cuerpo o a la salud del educando agredido o agresor, debe en primer lugar, garantizarse a ambos, una atención en salud, de carácter inmediato, verificando si es una situación Tipo II, ósea que NO causa incapacidad médica, o si pertenece al ámbito de una Situación TIPO III, es decir que SI deja como consecuencia una incapacidad médica. Si se determina que es una situación Tipo III, debe brindarse y garantizársele al educando agredido, su pertinente remisión a las entidades competentes en salud, dejando un acta especial de debido proceso como constancia de dicha actuación. Y la remisión del agresor, ante la Policía de Infancia y Adolescencia, o la Comisaria de Familia, y dando aviso inmediato a los padres o acudientes para que garanticen los derechos de su hijo o hija; en restablecimiento de derechos.
            </p>
          </div>
          <ol className="derechos-list" start="2">
            <li>
              Luego de recibir por escrito, los descargos de versión libre a los implicados, y haciendo que ellos, escriban el acta de sus descargos, con puño y letra; de ser necesario, amparados por el personero escolar, quien garantizará que, la versión sea libre, espontánea y sin ser inducida o bajo presión, se procederá a elaborar, el acta de debido proceso, en la cual, el educando plasma por escrito su versión de los hechos, sin acudir para ello, al fraude, engaño, mentira, o encubrimiento. En caso de que la situación Tipo II, se complique y se dirija al ámbito de Situación TIPO III, o penal o delictual.
            </li>
            <li>
              De carácter inmediato, si la situación Tipo II, supera tal condición y se eleva a Situación Tipo III; debe desarrollarse, el protocolo respectivo para garantizar, las medidas de restablecimiento de derechos, remitiendo el caso a las autoridades competentes para conocer del caso y desarrollando el acta especial de debido proceso, con los elementos de modo, tiempo y lugar de los hechos. Dejando así la constancia escrita de dicha actuación.
            </li>
            <li>
              Debe analizarse con especial cuidado la situación del agredido o víctima y desarrollar, un proceso de reflexión, orientación y recapacitación con el agresor o victimario para que interiorice su responsabilidad, y asuma, las consecuencias de sus hechos. En esa tarea se debe involucrar al Personero o Personera Estudiantil y al o la Psico orientador(a), como garantes de sus derechos.
            </li>
            <li>
              Debe, acudirse a llamar a los padres o acudientes, para que se informen de manera eficaz, certera y especifica de los hechos, para no dar espacios a que los educandos –especialmente los agresores- formen su propia y personalísima versión de los hechos, para exculparse o para hacerse ver como inocentes cuando son culpables. La llamada informativa será realizada exclusivamente por el Coordinador de convivencia o Disciplina o en su ausencia, la realizará el Director de Grupo del educando -presunto- agresor. De la llamada, debe quedar registro por escrito a manera de acta informativa del hecho.
            </li>
            <li>
              De llegar a ser procedente, si el caso o situación TIPO II, lo permite, se brindará el espacio, para que, en reunión con los padres o acudientes de los implicados, se realice un proceso de "conciliación" y de concertación de perdón, olvido y resarcimiento a los agredidos o víctimas, de acuerdo a los descargos por escrito, que cada uno de los implicados ofrezca a los directivos y docentes delante de sus padres o acudientes. De esta actuación, se garantizará, que la información se mantendrá estrictamente confidencial.
            </li>
            <li>
              Al finalizar, la reunión con los padres de los implicados, se establecerá mediante acta escrita, de debido proceso, cuáles serán las acciones y actuaciones dirigidas garantizar, la reparación del daño, las acciones restaurativas para reparar los daños causados y el restablecimiento de los derechos, a través de la conciliación y reconciliación, a través del perdón y olvido y compromiso de no reincidencia en la misma situación. Nunca se acudirá a conciliar situaciones Tipo III, como quiera que resulte en una extralimitación de funciones.
            </li>
            <li>
              Debe establecerse una sanción pedagógica, que garantice, que los implicados acudan a hacerse responsables de las consecuencias de sus actuaciones agresoras y disociativas, y que encause a la minimización del ambiente escolar hostil, determinando por escrito, los compromisos y las consecuencias para quienes promovieron, contribuyeron o participaron en la situación reportada como tipo II.
            </li>
            <li>
              El presidente del Comité Escolar de Convivencia, informará a los implicados y a sus padres o acudientes, sobre lo ocurrido y las medidas adoptadas, por el Comité de Convivencia, respecto de la situación en análisis y en abordaje a través de la ruta de atención escolar.
            </li>
            <li>
              El Comité Escolar de Convivencia, debe garantizar, que se realice, el análisis y seguimiento a la situación presentada para verificar, la efectividad de la solución brindada o acudir a la activación del protocolo de atención, para Situaciones tipo II, en caso de ser necesario, intervendrá el consejo directivo excepcionalmente.
            </li>
            <li>
              El Comité Escolar de Convivencia, respecto de la situación Tipo II, debe desarrollar, el debido proceso de manera acuciosa, y dejar constancia de la actuación, a través de un acta especial de debido proceso por escrito, que determine en grado de certeza, el desarrollo de la intervención realizada ante la situación y su manejo armonioso, acorde a la ruta de atención escolar, especificando los elementos de modo, tiempo y lugar de los hechos.
            </li>
            <li>
              El presidente del Comité Escolar de Convivencia, (Rector), inaplazablemente, debe reportar el caso o situación tipo II, a través del Sistema de Información Unificada de Convivencia Escolar, que debe ejecutarse y proceder ante la secretaria de Educación.
            </li>
          </ol>
          <div className="tipo-para">
            <p>
              <strong>
                Parágrafo 1:
              </strong>
              {" "}
              se garantizará el derecho a la intimidad y a la confidencialidad de las personas involucradas en la situación y de los documentos en medio físico o electrónico, así como de las informaciones suministradas por las personas que intervengan en las actuaciones y de toda la información que se genere dentro de las mismas, en los términos establecidos en la Constitución Política, los tratados internacionales, en la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                Ley 1098 de 2006
              </a>
              , en la Ley Estatutaria 1581 de 2012, en el Decreto 1377 de 2013 y demás normas aplicables a la materia.
            </p>
          </div>
          <div className="tipo-sanciones">
            <h4>
              Sanciones para situaciones Tipo II
            </h4>
            <ol className="derechos-list">
              <li>
                Trabajo manuscrito de cinco (5) hojas, en el tema de la infracción cometida. A manera de reflexión y redireccionamiento de la conducta nociva.
              </li>
              <li>
                Anotación de los hechos en el observador del alumno.
              </li>
              <li>
                Llamado de atención conductual y reflexivo.
              </li>
              <li>
                Compromiso de NO reincidencia, escrito con copia al observador del estudiante.
              </li>
              <li>
                Trabajo de cartelera, o de power point u otro, para ser compartido y socializado, ante sus compañeros de clase y con ello, generar prevención, reflexión y orientación en sus pares del mismo salón.
              </li>
              <li>
                Llamado de atención formal, con citación a los padres de familia o acudientes. En caso de NO asistir, se oficiará a comisaria de familia, o ante personería municipal, por los presuntos de omisión, descuido y trato negligente,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 18 de ley 1098 de 2006
                </a>
                ; y el presunto de abandono,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 20 literal 1 de ley 1098 de 2006
                </a>
                .
              </li>
            </ol>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content" id="tipo-III">
          <div className="tipo-card-head tipo3">
            PROTOCOLO PARA SITUACIONES TIPO III
          </div>
          <p>
            <span className="hl-green">
              <strong>
                Artículo 44 decreto
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537" target="_blank" style={{ color: "var(--green)" }}>
                  1965 de 2013
                </a>
                .
              </strong>
            </span>
          </p>
          <p>
            Para brindarle un manejo adecuado, asertivo e integral, que se sujete al debido proceso en situaciones TIPO III, acudiremos como COLEGIO: I.E. ANTONIO LENIS; MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; a reforzar, nuestras actuaciones para situaciones TIPO III, con el siguiente protocolo:
          </p>
          <p>
            Presuntos delitos contra la libertad, integridad y formación sexual, referidos en el Título IV del Libro 11 de la
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
              Ley 599 de 2000
            </a>
            , o que constituyen cualquier otro delito establecido en la ley penal colombiana vigente. Son aquellas faltas que por su magnitud y trascendencia afectan los derechos fundamentales de los demás educandos, perjudicando la marcha institucional del ámbito escolar; además lesionan y perjudican física, emocionalmente, y/o psicológicamente a los demás miembros de la Comunidad Educativa, dejando como secuelas, incapacidad para alguno de los involucrados. Además, afectando negativamente su participación en las actividades institucionales o perjudicando su convivencia y rendimiento académico y/o disciplina.
          </p>
          <p>
            Se consideran como faltas gravísimas, todas aquellas faltas disciplinables, que son constitutivas de infracción de ley o delitos cometidos por educandos mayores de catorce (14) años de edad; además de las constitutivas de delitos o infracciones de ley, que sean cometidas por educandos mayores de catorce (14) años de edad portando el uniforme de nuestra Institución educativa oficial, y son objeto de la corresponsalía como terceros civilmente responsables a sus padres y/o acudientes.
          </p>
          <p>
            En el caso de situaciones que sean constitutivas de presuntos delitos o infracciones de ley, cometidos por educandos mayores de catorce (14) años de edad, al cometer el hecho, y por ser absolutamente judicializables, se debe desarrollar, un protocolo minucioso y específico:
          </p>
          <ol className="derechos-list">
            <li>
              Debe recibirse por escrito y materializar taxativamente, los descargos a los educandos implicados, y JAMAS SE DEBE INTERROGAR A LOS EDUCANDOS, porque no es función de los docentes, pues escapa a sus deberes y a sus funciones, el interrogatorio con un menor de 18 años de edad, únicamente lo puede desarrollar, un fiscal de infancia y adolescencia, un defensor de familia, un comisario o comisaria de familia, o un investigador de policía judicial de infancia y adolescencia; o un psicólogo perito forense entrenado en cámara de Gesell, por tratarse de un delito o infracción de ley; por lo tanto, se prohíbe a los educadores, el realizar, interrogatorios a los educandos. El educando, presentará sus descargos por escrito, sin ningún tipo de coerción o amenaza, aplica para educandos involucrados en una situación Tipo III, en lo posible, deben ser firmados por: rector(a); coordinador(a) de convivencia, orientador, director de grupo, conocedor del caso o primer respondiente; sin que, a los educandos, se les pregunte nada, simplemente se recibirán sus descargos en versión libre de su puño y letra; de manera libre, abierta y espontánea.
            </li>
            <li>
              Si la situación Tipo III, corresponde a unas lesiones personales o agresión física, que afecte la salud e integridad física del agredido o víctima, de carácter inmediato, se debe remitir el educando agredido ante el servicio de salud con el que cuenta en su EPS, seguridad social, o seguro de atención en salud; para que se sirvan atender el caso e incluso a manera de urgencias de ser necesario.
              {" "}
              <span className="hl-green">
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 47 de ley 1098 de 2006
                </a>
              </span>
              .
            </li>
            <li>
              De inmediato y de manera inaplazable e ineludible, el director de grupo, docente conocedor del caso y coordinador de convivencia y disciplina, orientadora, redactarán, en acta especial de debido proceso, que determine en Calidad de certeza, los elementos de modo, tiempo y lugar de los hechos que se tipifican como situación Tipo III; el Coordinador de Convivencia y Disciplina, llamará telefónicamente a los acudientes de los agresores y de los agredidos, para que se apersonen de la situación, y para que conozcan acerca de las medidas que serán tomadas para casos o situaciones Tipo III, como denunciar el hecho, ante la autoridad competente, para que se tomen, las medidas jurídico – legales pertinentes a sus derechos en patria potestad.
              {" "}
              <span className="hl-green">
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                  Artículos 2347 y 2348 del código civil
                </a>
              </span>
              .
            </li>
            <li>
              Nuestro COLEGIO OFICIAL: I.E. ANTONIO LENIS; MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; garantizará, el acceso al debido proceso, la activación de la ruta de atención escolar, (RAE), para brindar, amparo absoluto ante los derechos de los educandos implicados en la situación Tipo III, ya sea como agresores, o como agredidos. De toda actuación se dejará constancia por escrito, en las actas especiales de debido proceso.
            </li>
            <li>
              Inmediatamente acudan al llamado, las autoridades competentes, se les brindará verbalmente un contexto de la situación, y un reporte por escrito, de los hechos que describen los implicados. A ello, se le suma la entrega en cadena de custodia, de los elementos que hagan parte del material probatorio, acompañados de una aplicación estricta de la cadena de custodia de los elementos, y finalmente, copias idénticas, de las actas especiales de debido proceso, que determinan en Calidad de presunción, para llegar a la certeza, de los elementos de modo, tiempo y lugar de los hechos, así como se les hará entrega del cd que contiene el audio o video de los descargos de los educandos implicados, debidamente sellado en un sobre transparente y con cinta para garantizar su custodia y que no sea alterado como prueba, cuando EXCEPCIONALMENTE, muy excepcionalmente, se trate de menores de primera infancia a quienes se graba en audio o video sin exhibir su rostro, a voces de los
              {" "}
              <span className="hl-green">
                artículos 44 numerales 4 y 5 de ley 1098 de 2006; artículo 18 de ley 1098 de 2006 y artículo 20 numeral 1 de ley 1098 de 2006 y artículo 26 de ley 1098 de 2006 y artículo 2347 del código civil
              </span>
              . Se exigirá a la autoridad pertinente y competente, según sea el caso, que firme un acta de recibido de los elementos, de los audios o video o fotos y en caso de flagrancia del hecho, de que se hacen responsables de la integridad, seguridad y vida del educando que se entrega en custodia ante las autoridades pertinentes.
            </li>
          </ol>
          <div className="tipo-note">
            <p>
              <strong>
                Nota:
              </strong>
              {" "}
              de inmediato, se debe reportar el caso, ante la secretaria de Educación o Jefatura de Núcleo, para que quede registro del hecho y se verifique que se respetó el debido proceso y las garantías y derechos procesales al educando. Dejando claridad, de que se reportó el caso al Sistema de Información Unificado (Otros entes institucionales a cargo).
            </p>
            <p>
              <span className="hl-green">
                Artículo 18 numeral 4 de ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                  1620 de 2013
                </a>
                . Artículo 25 del código penal. Artículos 12 y 15 de ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                  1146 de 2007
                </a>
                . Articulo 44 numeral 9 de ley 1098 de 2006. Artículo 417 del código penal.
              </span>
            </p>
          </div>
          <div className="tipo-para">
            <p>
              <strong>
                Parágrafo 1:
              </strong>
              {" "}
              se garantizará el derecho a la intimidad y a la confidencialidad de las personas involucradas en la situación y de los documentos en medio físico o electrónico, así como de las informaciones suministradas por las personas que intervengan en las actuaciones y de toda la información que se genere dentro de las mismas, en los términos establecidos en la Constitución Política, los tratados internacionales, en la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                Ley 1098 de 2006
              </a>
              , en la Ley Estatutaria 1581 de 2012, en el Decreto 1377 de 2013 y demás normas aplicables a la materia.
            </p>
          </div>
          <div className="tipo-legal-ref">
            <p>
              <span className="hl-green">
                <strong>
                  Código Civil Colombiano. ARTICULO 262. VIGILANCIA, CORRECCIÓN Y SANCIÓN.
                </strong>
              </span>
              {" "}
              Los padres o la persona encargada del cuidado personal de los hijos, tendrán la facultad de vigilar su conducta, corregirlos y sancionarlos moderadamente.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  Código Civil Colombiano. ARTICULO 2346. RESPONSABILIDAD POR DAÑOS CAUSADOS POR DEMENTES E IMPÚBERES.
                </strong>
              </span>
              {" "}
              Los menores de diez años y los dementes no son capaces de cometer delito o culpa; pero de los daños por ellos causados serán responsables las personas a cuyo cargo estén dichos menores o dementes, si a tales personas pudieren imputárseles negligencia.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  Decreto 1965 de 2013. Artículo 47. Informes o quejas.
                </strong>
              </span>
              {" "}
              Cualquiera de las partes involucradas en una situación que afecte la convivencia escolar, o los padres o madres de familia o acudientes, o cualquier otra persona, pueden informar o presentar queja ante la secretaría de educación municipal o Distrital o departamental, a la que pertenezca el establecimiento educativo donde se generó la situación; sobre los casos en los cuales las autoridades educativas o los funcionarios responsables no adelanten las acciones pertinentes, no adopten las medidas necesarias o estas sean desproporcionadas, o apliquen el protocolo equivocado respecto de situaciones que afecten la convivencia escolar y el ejercicio de los derechos humanos, sexuales y reproductivos. Recibida la información o la queja la entidad adelantará las acciones a que hubiere lugar e informará a las autoridades que se requieran a fin de verificar y solucionar de fondo la situación informada.
            </p>
            <p>
              <span className="hl-green">
                <strong>
                  Decreto 1965 de 2013. Artículo 48. Acciones del componente de seguimiento.
                </strong>
              </span>
              {" "}
              El componente de seguimiento se centrará en el registro y seguimiento de las situaciones de tipo II y III de que trata el artículo 40 del presente decreto
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537" target="_blank" style={{ color: "var(--green)" }}>
                1965 de 2013
              </a>
              {" "}
              a través del Sistema de Información Unificado de Convivencia Escolar. Sin perjuicio de lo anterior, los Comités Escolares de Convivencia harán seguimiento y evaluación de las acciones para la promoción y fortalecimiento de la formación para la ciudadanía y el ejercicio de los derechos humanos, sexuales y reproductivos; para la prevención y mitigación de la violencia escolar y el embarazo en la adolescencia; y para la atención de las situaciones que afectan la convivencia escolar, los derechos humanos, sexuales y reproductivos.
            </p>
          </div>
          <div className="tipo-sanciones">
            <h4>
              Sanciones para situaciones Tipo III
            </h4>
            <ol className="derechos-list">
              <li>
                Trabajo manuscrito de diez (10) hojas, en el tema de la infracción cometida. A manera de reflexión y redireccionamiento de la conducta nociva.
              </li>
              <li>
                Anotación de los hechos en el observador del estudiante.
              </li>
              <li>
                Llamado de atención conductual y reflexivo.
              </li>
              <li>
                Compromiso de NO reincidencia, escrito con copia al observador del estudiante.
              </li>
              <li>
                Trabajo de cartelera, o de PowerPoint u otro, para ser compartido y socializado, ante sus compañeros de clase y con ello, generar prevención, reflexión y orientación en sus pares del mismo salón.
              </li>
              <li>
                Llamado de atención formal, con citación a los padres de familia o acudientes. En caso de NO asistir, se oficiará a comisaria de familia, o ante personería municipal, por los presuntos de omisión, descuido y trato negligente,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 18 de ley 1098 de 2006
                </a>
                ; y el presunto de abandono,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 20 literal 1 de ley 1098 de 2006
                </a>
                .
              </li>
              <li>
                Denuncia formal de los hechos, ante las autoridades competentes y pertinentes, a voces de los
                {" "}
                <span className="hl-green">
                  artículos 44 literal 4 de ley 1098 de 2006; artículos 18 literal 4 y 19 de ley 1620 de 2013; artículos 11, 12 y 15 de ley 1146 de 2007
                </span>
                , según aplique a cada caso en particular.
              </li>
              <li>
                Imposición de matrícula en observación.
              </li>
              <li>
                Cancelación unilateral de la matrícula.
              </li>
              <li>
                Remisión del caso a las autoridades del caso,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 19 de ley 1098 de 2006
                </a>
                , para situaciones tipo III, de consumo de drogas o estupefacientes o afines. Ideación suicida, intentos de suicidio, cortes o mutilaciones u otros vejámenes autoinfligidos o pornografía y afines.
              </li>
              <li>
                Cancelación del cupo escolar, para el año siguiente.
              </li>
              <li>
                Solicitud de seguimiento del caso, dirigida a comisaria de familia, personería municipal y el I.C.B.F.
              </li>
            </ol>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
