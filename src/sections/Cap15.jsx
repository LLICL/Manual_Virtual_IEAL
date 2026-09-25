import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap15() {
  return (
    <>
      <Tabs ids={["dconcepto","dlev","dgra","dgravis"]} initial="dconcepto">
        <div className="section-header section-header--red">
          <span className="section-num">
            15
          </span>
          <h2 className="section-title" style={{ color: "var(--red)" }}>
            Faltas
          </h2>
        </div>
        <div className="faltas-tabs-bar">
          <TabButton tab="dconcepto" className="faltas-tab-btn faltas-concepto">
            FALTAS
          </TabButton>
          {" "}
          <TabButton tab="dlev" className="faltas-tab-btn faltas-leve">
            Faltas Leves
          </TabButton>
          {" "}
          <TabButton tab="dgra" className="faltas-tab-btn faltas-grave">
            Faltas Graves
          </TabButton>
          {" "}
          <TabButton tab="dgravis" className="faltas-tab-btn faltas-gravis">
            Faltas Gravisimas
          </TabButton>
        </div>
        <TabPanel className="faltas-tab-content faltas-content-concepto" id="dconcepto">
          <p className="sec-main-title sec-main-title--red">
            CONCEPTO DE FALTA
          </p>
          <p>
            Para nuestro Manual de Convivencia escolar, el concepto de falta, se entiende, como toda violación, desatención, inaplicación y omisión a los deberes taxativos, y exigencias que, reposan, en el acápite de deberes de los estudiantes, lo que,
            {" "}
            <span className="hl-red">
              "constituye una falta al manual de convivencia escolar"
            </span>
            . se definirá y determinará, si es leve, grave o muy grave o excesivamente grave, de acuerdo al criterio de los educadores y del consejo directivo. siguiendo el presente derrotero:
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
          <div className="quote-block">
            <p>
              Página 23. En el marco de estas consideraciones, la Corte ha advertido que, "El derecho a ser sancionada que tiene toda persona menor de edad, como parte del proceso de formación, es un derecho constitucional fundamental. Afrontar esa restricción constituye una medida adecuada que propende por un fin legítimo que es educar a la estudiante; permitirle formarse integralmente […]. Impedirle la consecuencia sancionatoria a esa persona, sería pues, impedirle entender y comprender las dimensiones de sus actos […]. Toda sanción legítima y razonable en el contexto educativo, debe posibilitar el crecimiento y desarrollo como persona de todo individuo." Sentencia T-713 de 2010. M.P. María Victoria Calle Correa.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="faltas-tab-content faltas-content-leve" id="dlev">
          <p className="sec-main-title sec-main-title--red">
            DE LAS FALTAS LEVES.
          </p>
          <p>
            Además de las anteriores citadas como compromisos, deberes, obligaciones y sujeciones que el educando viole, vulnere, desconozca o desatienda; y que el primer respondiente, el comité de convivencia y el consejo directivo de nuestra Institución educativa oficial, a su criterio determinen como faltas leves, se asignará tal concepto a las siguientes, actuaciones disciplinables, que constituyen faltas leves cuando se presenten por primera o única vez:
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                Ausentarse de las actividades pedagógicas, programadas por la Institución, sin causa justificada o sin autorización previa del Coordinación de convivencia o en ausencia de éste, del Coordinador Académico.
              </p>
            </li>
            <li>
              <p>
                La inasistencia intencional a la primera hora de clase y/u hora del énfasis
              </p>
            </li>
            <li>
              <p>
                Asumir actitudes o comportamientos inapropiados durante las clases haciendo que el docente detenga la clase para disciplinar o enviarlo a coordinación
              </p>
            </li>
            <li>
              <p>
                Asistir a clases sin el uniforme correspondiente o portando prendas no propias del mismo (gorras, bufandas, buzos, pañoletas, viseras, corbatas o cualquier accesorio no acorde al uniforme)
              </p>
            </li>
            <li>
              <p>
                Modificar el uniforme institucionale, ya sea: entubando la sudadera. Usando suéter diferentes al permiktido.
              </p>
            </li>
            <li>
              <p>
                Salir del salón sin permiso durante la clase y/o cuando el profesor No ha llegado.
              </p>
            </li>
            <li>
              <p>
                Impuntualidad en la llegada al inicio de la jornada escolar, en los cambios de clase e inicio de clase después de los descansos.
              </p>
            </li>
            <li>
              <p>
                Ingerir alimentos durante la formación y actos de comunidad o durante los períodos de clase.
              </p>
            </li>
            <li>
              <p>
                Inasistencia sin justificación a un período de clases.
              </p>
            </li>
            <li>
              <p>
                Fomentar el desaseo en su salón y demás instalaciones de la institución.
              </p>
            </li>
            <li>
              <p>
                No portar con respeto los elementos didácticos, o el uniforme, en eventos institucionales o cuando se requiere dentro o fuera del aula de clases.
              </p>
            </li>
            <li>
              <p>
                Incumplir con las obligaciones académicas y/o hacer caso omiso de las actividades de aprendizaje
              </p>
            </li>
            <li>
              <p>
                Presentarse a la institución con calzado abierto, chanclas, zapatos crocs, sandalias entre otros, sin la debida solicitud o excusa por escrito ante la coordinación de convivencia.
              </p>
            </li>
            <li>
              <p>
                Organizar y practicar actividades deportivas en los espacios frente a los salones (aula múltiple, tienda escolar, entre otros) mientras se desarrollan las horas de clases
              </p>
            </li>
            <li>
              <p>
                Jugar en los espacios comunes como aula múltiple, zona de tienda escolar entre otros, con balones, frisbee o cualquier otro objeto lanzado que pueda causar daño a algún miembro de la comunidad.
              </p>
            </li>
            <li>
              <p>
                Hacer uso indebido o asumir comportamientos inadecuados en parques o zonas recreativas de carácter públicas.
              </p>
            </li>
            <li>
              <p>
                Utilizar o manipular dispositivos móviles (celular) durante las horas de clase o actividades de comunidad. (este debe permanecer guardado y apagado o modo avión).
                {" "}
                <span className="hl-red">
                  Estos serán decomisados y llevados a coordinación de convivencia.
                </span>
              </p>
            </li>
            <li>
              <p>
                Arrojar basuras a los pisos de las aulas, patios y otras dependencias del plantel.
              </p>
            </li>
            <li>
              <p>
                Tomar el tiempo de la jornada escolar para realizar, dentro o fuera del plantel, actividades no orientadas por la Institución
              </p>
            </li>
            <li>
              <p>
                Modificar el uniforme de la promoción una vez haya sido concertado y aprobado
              </p>
            </li>
            <li>
              <p>
                Ingresar a zonas o dependencias restringidas de la institución, sin la autorización expresa de la persona encargada.
              </p>
            </li>
            <li>
              <p>
                Ingresar a la institución en jornadas diferentes a la cual pertenece sin la debida autorización de un directivo o docente.
              </p>
            </li>
            <li>
              <p>
                Traer o utilizar dentro de la institución elementos como juguetes, juegos de azar, balones que afecten el normal desarrollo de las jornadas escolar
              </p>
            </li>
          </ol>
          <p className="estimulo-title-red">
            SANCIONES PARA LAS FALTAS LEVES
          </p>
          <p>
            Serán sancionadas, con procesos pedagógicos, así:
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                Amonestación verbal en privado.
              </p>
            </li>
            <li>
              <p>
                Amonestación verbal con presencia del padre de familia o acudiente autorizado.
              </p>
            </li>
            <li>
              <p>
                Anotación en el observador del educando, con compromiso de mejoras; de ser falta reiterativa, consecutiva o no, de ser el caso, aplicará, como un primer llamado de atención. Compromiso por escrito en el observador del estudiante.
              </p>
            </li>
            <li>
              <p>
                Un trabajo de dos (2) páginas en manuscrito,
                {" "}
                <span className="hl-red">
                  NO en computador, NO impreso en computador, sino manuscrito
                </span>
                , acerca de reconocer su falta y enmendar su error. A manera de reflexión personal, re direccionando su proceder.
              </p>
            </li>
            <li>
              <p>
                Presentar actividades que le permitan reparar el daño causado o enmendar situaciones que haya afectado en la comunidad educativa (Ej. limpiar las paredes, pedir disculpas)
              </p>
            </li>
            <li>
              <p>
                Reponer las pertenecías o los objetos dañados a sus compañeros o a la institución.
              </p>
            </li>
            <li>
              <p>
                Realizar carteleras y emitir mensajes alusivos a no seguir incumpliendo las normas de la institución o los desempeños sociales en la comunidad.
              </p>
            </li>
            <li>
              <p>
                Ofrecer charlas a sus compañeros en la cual se analice y explique las faltas y el debido proceso de la institución, la importancia del buen comportamiento, el buen rendimiento académico, etc.
              </p>
            </li>
            <li>
              <p>
                Dejársele al cuidado del salón correspondiente durante los descansos hasta por un (1) mes.
              </p>
            </li>
            <li>
              <p>
                Responsabilizarse hasta por un (1) mes del aseo de un espacio de la institución excepto las unidades sanitarias.
              </p>
            </li>
          </ol>
          <div className="commit-block">
            <p className="estimulo-title-red">
              NOTA:
            </p>
            <p>
              Tres (3) faltas leves, consecutivas o no, ameritan de inmediato, el ingreso a una
              {" "}
              <span className="hl-red">
                falta grave
              </span>
              {" "}
              y como tal, será abordada. Se deja constancia del llamado de atención y del compromiso adquirido por el educando, taxativo en el observador del estudiante.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="faltas-tab-content faltas-content-grave" id="dgra">
          <p className="sec-main-title sec-main-title--red">
            DE LAS FALTAS GRAVES.
          </p>
          <p>
            Además de las anteriores citadas como compromisos, deberes, obligaciones y sujeciones que el educando viole, vulnere, desconozca o desatienda; y que el primer respondiente, el comité de convivencia y el consejo directivo de Nuestra Institución educativa oficial, a su criterio puedan determinar cómo faltas graves, se asignará tal concepto a las siguientes, actuaciones disciplinables, que constituyen faltas graves, cuando se presenten por primera o única vez:
          </p>
          <div className="commit-block">
            <p className="estimulo-title-red">
              Nota:
            </p>
            <p>
              La reincidencia en cualquiera de las
              {" "}
              <span className="hl-red">
                faltas leves se convierte en falta grave
              </span>
              .
            </p>
          </div>
          <p>
            a) Que se presenten de manera repetida o sistemática.
          </p>
          <p>
            Para contribuir, al logro de los objetivos del PEI y la buena marcha del plantel educativo, a los estudiantes del Colegio, les está prohibido y se consideran faltas graves como se contempla en el
            {" "}
            <span className="hl-green">
              artículo 87 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                115 de 1994
              </a>
            </span>
            :
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                Presentarse constantemente a la Institución en forma inadecuada en lo que respecta al porte del uniforme e higiene personal.
              </p>
            </li>
            <li>
              <p>
                No comunicar a los padres de familia las citaciones.
              </p>
            </li>
            <li>
              <p>
                Impedir o perturbar el normal desarrollo de las clases.
              </p>
            </li>
            <li>
              <p>
                Asistir con el uniforme de Nuestra Institución educativa oficial a juegos de azar, casas de lenocinio, sitios de juegos electrónicos, discotecas u otros establecimientos de dudosa reputación.
              </p>
            </li>
            <li>
              <p>
                Utilizar juegos de azar, celulares, audífonos, Ipod u otros elementos para interrumpir el normal desarrollo de las actividades académicas.
              </p>
            </li>
            <li>
              <p>
                Realizar o hacer negocios al interior del colegio. Instalar ventas o negocios dentro de la institución sin la autorización del Consejo Directivo
              </p>
            </li>
            <li>
              <p>
                Jugar en el salón y pasillos con balones, transitar en patines o bicicleta en los mismos, gritar, correr o formar corrillos que entorpezcan el desarrollo del trabajo docente.
              </p>
            </li>
            <li>
              <p>
                Mostrar indiferencia a los llamados de atención y desacatar, las sugerencias hechas para su mejoramiento.
              </p>
            </li>
            <li>
              <p>
                No asistir a los actos de comunidad por negligencia.
              </p>
            </li>
            <li>
              <p>
                Utilizar la biblioteca o cualquier otro sitio para evadirse de clase.
              </p>
            </li>
            <li>
              <p>
                Fraude comprobado en las evaluaciones y trabajos. Hacer fraude académico o deshonestidad académica, por cualquier medio físico, digital o virtual; como la apropiación de documentos, textos o materiales que no le pertenecen (plagio), el hacer trampas en los exámenes a través de apuntes escondidos, mirar sobre el hombro de compañeros o cualquier intercambio de información gestual o escrita y la suplantación en cualquiera de sus formas. Además del uso de la IA (inteligencia artificial) para presentar trabajos propios.
              </p>
            </li>
            <li>
              <p>
                Propiciar escándalos públicos.
              </p>
            </li>
            <li>
              <p>
                Apropiarse o esconder objetos de la institución o de sus compañeros, sin el permiso del dueño o de la persona que tenga dichos objetos bajo su responsabilidad.
              </p>
            </li>
            <li>
              <p>
                Traer a la institución una persona que se haga pasar por su acudiente, padre o madre de familia o tutor legal sin la autorización por escrito de la persona que firmo la matricula.
              </p>
            </li>
            <li>
              <p>
                Faltar al respeto a cualquier miembro de la comunidad educativa o de las familias vecinas.
              </p>
            </li>
            <li>
              <p>
                Emplear objetos de trabajo como elemento de agresión
              </p>
            </li>
            <li>
              <p>
                Ingresar o salir del Plantel por lugares diferentes a la entrada principal.
              </p>
            </li>
            <li>
              <p>
                Llegar tarde al Plantel en repetidas ocasiones.
              </p>
            </li>
            <li>
              <p>
                Utilizar o manipular Tablet, portátiles, lectores de archivos, bafle parlante, equipos de audio y video u otro tipo de equipo u objeto que perturbe el normal desarrollo de la cualquier actividad institucional, incluidos los descansos.
                {" "}
                <span className="hl-red">
                  Estos serán decomisados y llevados a coordinación de convivencia
                </span>
              </p>
            </li>
            <li>
              <p>
                Manifestaciones exageradas y erótico sexuales de amor en las relaciones de pareja dentro y fuera de nuestra institución, portando el uniforme.
              </p>
            </li>
            <li>
              <p>
                Permitir el ingreso de amigos o personas ajenas a las instalaciones de la institución con el ánimo de entorpecer el desarrollo de las actividades Institucionales.
              </p>
            </li>
            <li>
              <p>
                Hacer mal uso de los muebles y enseres de las aulas, del comedor escolar y de bienes y enseres de nuestra institución en general.
              </p>
            </li>
            <li>
              <p>
                Dañar, rayar, manchar o escribir las paredes de la Institución, como también hacer uso de los tableros o carteleras para escribir o fijar avisos que atenten contra la integridad moral o profesional de la Institución o cualquier miembro de la Comunidad Educativa.
              </p>
            </li>
            <li>
              <p>
                Recolectar dinero de la Comunidad sin autorización previa de la Rectoría o Consejo Directivo.
              </p>
            </li>
            <li>
              <p>
                Confabularse o ponerse de acuerdo con uno o más personas (miembros de la comunidad o personas externas) para amenazar, constreñir, intimidar, hostigar, insultar, burlarse, amedrantar o causar lesiones personales físicas o psicológicas a cualquier miembro de la comunidad educativa, por cualquier medio presencial o virtual.
              </p>
            </li>
            <li>
              <p>
                Portar, consumir o inducir al consumo de cigarrillo o cigarrillo electrónico (vapers) dentro de la institución o sus alrededores
              </p>
            </li>
            <li>
              <p>
                Traer a la institución o hacer circular dentro de la misma, cualquier tipo de material pornográfico físico o virtual
              </p>
            </li>
            <li>
              <p>
                Portar armas blancas, neumáticas de aire, de fogueo, de letalidad reducida o sprays, rociadores, aspersores o aerosoles de pimienta o cualquier elemento que se asimile a armas de fuego u objeto corto punzante los cuales pongan en riesgo la integridad de la comunidad Lenista
              </p>
            </li>
            <li>
              <p>
                Portar elementos cortantes, punzantes o semejantes, o sustancias peligrosas (Corrosivas, acidas, tóxicas, radioactivas), dentro del plantel y sus alrededores.
              </p>
            </li>
            <li>
              <p>
                Portar, distribuir, comercializar o usar artículos pirotécnicos, fuegos artificiales o pólvora que atenten contra la seguridad de las personas y de sí mismo dentro y fuera de la institución.
              </p>
            </li>
            <li>
              <p>
                Participar, invitar o jugar cualquier tipo de juegos de suerte o azar dentro de la institución educativa
              </p>
            </li>
            <li>
              <p>
                Cualquier tipo de maltrato, agresión física o verbal, humillación, discriminación o burla a algún miembro de la Comunidad Educativa o de las familias vecinas, ya sea por motivos de etnia, sexo, identidad de género (LGBTIQ+), color, creencias religiosas o cualquier otro motivo.
              </p>
            </li>
            <li>
              <p>
                Lanzar objetos que puedan causar daño o sustancias peligrosas a cualquier persona dentro o fuera de la institución.
              </p>
            </li>
            <li>
              <p>
                Amenazar con causar un daño físico, por cualquier medio, a algún miembro de la comunidad educativa
              </p>
            </li>
            <li>
              <p>
                Llamar la atención o dirigirse a sus pares utilizando lenguaje verbal o gestual ofensivo, vulgar o salido de tono
              </p>
            </li>
            <li>
              <p>
                Utilizar el uniforme de diario, de educación física o de promoción en establecimientos comerciales, de diversión o destinados a la práctica de actividades de carácter socialmente reservadas.
              </p>
            </li>
            <li>
              <p>
                Utilizar cualquiera el uniforme institucionale para grabar videos de tipo obscenos, bailes eróticos sexuales o de cualquier índole que atenten contra la moral y las buenas costumbres, y estos se publiquen en cualquier red social dañando el buen nombre y la imagen de la institución.
              </p>
            </li>
            <li>
              <p>
                Fugarse de la institución durante la jornada escolar
              </p>
            </li>
            <li>
              <p>
                Causar daños a la planta física, mobiliario, bienes, vehículos o recursos de la Institución o de propiedad de particular.
              </p>
            </li>
            <li>
              <p>
                Publicar imágenes desagradables por cualquier medio (físico o virtual) de fotos, textos o videos que atenten contra la integridad de compañeros y docentes
              </p>
            </li>
            <li>
              <p>
                Hacer uno de la IA (inteligencia artificial) para generar imágenes (obscenas, de desnudos, burlescas, denigrantes) que atenten contra la integridad y el buen nombre de cualquier miembro de la comunidad educativa.
              </p>
            </li>
            <li>
              <p>
                Organizar o promover retos virales online en redes sociales como TikTok, Instagram, Twitter, Facebook u otras, "challenges" o retos presenciales que atenten contra la vida o integridad de cualquier miembro de la comunidad educativa.
              </p>
            </li>
          </ol>
          <p className="estimulo-title-red">
            SANCIONES PARA LAS FALTAS GRAVES.
          </p>
          <p>
            Serán sancionadas, con procesos pedagógicos, así:
          </p>
          <div className="commit-block">
            <p>
              En todos los casos se hace Citación al padre de familia de carácter inmediato. Si
              {" "}
              <span className="hl-red">
                NO asiste, copia de denuncia formal por abandono
              </span>
              ,
              {" "}
              <span className="hl-green">
                artículo 20 numeral 1 de ley
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  1098 de 2006
                </a>
              </span>
              , violación al deber de cuidado,
              {" "}
              <span className="hl-green">
                artículo 2347 del
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                  código civil
                </a>
              </span>
              , violación a la patria potestad artículo 288 del
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                código civil
              </a>
              , y maltrato infantil en descuido, omisión y trato negligente.
            </p>
          </div>
          <ol className="derechos-list">
            <li>
              <p>
                Realizar una cartelera sobre los valores, y en prevención de las faltas en el orden que la haya cometido el educando. Es decir, una cartelera, en el mismo tema en el que incurrió el educando para trasgredir, las normas del presente Manual de Convivencia. No traduce escarnio, sino acción restaurativa pedagógica y redireccionante, para reparar el daño.
              </p>
            </li>
            <li>
              <p>
                Anotación en el observador del educando, con compromiso de mejoras; de ser falta reiterativa, consecutiva o no, de ser el caso, ingreso a una matrícula en observación.
              </p>
            </li>
            <li>
              <p>
                Tres (3) faltas graves, consecutivas o no, ameritan de inmediato, el ingreso a una matrícula en observación, y según la gravedad de la falta, el debido proceso, el concepto del comité de convivencia, y la decisión del consejo directivo, amerita incluso para casos reiterativos en la misma falta grave, la
                {" "}
                <span className="hl-red">
                  cancelación de la matrícula de manera unilateral
                </span>
                .
                {" "}
                <span className="hl-green">
                  Artículos 87 y 96 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                    115 de 1994
                  </a>
                  .
                </span>
              </p>
            </li>
            <li>
              <p>
                Elaboración de un trabajo escrito, tomando como referente la falta que motivó la sanción, con sustentación de las causas y efectos nocivos de la misma y socializarlo entre los grupos que le sean señalados con sentido de prevención.
              </p>
            </li>
            <li>
              <p>
                Responsabilizarse hasta por un (1) mes del aseo de un espacio de la institución excepto las unidades sanitarias.
              </p>
            </li>
            <li>
              <p>
                Retiro hasta por un (1) mes de los equipos deportivos en los cuales participe con motivo de los juegos intercursos, intercolegiados o interligas, con sus respectivas acciones pedagógicas.
              </p>
            </li>
            <li>
              <p>
                Reponer o restituir el daño causado a quien haya sido afectado con su comportamiento, si el daño es material debe hacer su respectivo pago.
              </p>
            </li>
            <li>
              <p>
                Conciliación y concertación de acuerdos que permitan una vez solucionado el conflicto, pedir disculpas de manera pública o privada y volver las cosas a la normalidad con la parte afectada.
              </p>
            </li>
            <li>
              <p>
                Notificar con tiempo el riesgo de no participar de las ceremonias de graduación y demás actos protocolarios propios de la institución educativa en la vida institucional.
              </p>
            </li>
            <li>
              <p>
                Firmar el acta de compromiso académico o de convivencia
              </p>
            </li>
          </ol>
          <div className="commit-block">
            <p className="estimulo-title-red">
              NOTA:
            </p>
            <p>
              Cada situación de amonestación, deberá ser informada al director de grupo, para hacer reportar por escrito en el observador del estudiante y reportarse en la plataforma institucional
            </p>
          </div>
        </TabPanel>
        <TabPanel className="faltas-tab-content faltas-content-gravis" id="dgravis">
          <p className="sec-main-title sec-main-title--red">
            DE LAS FALTAS GRAVÍSIMAS O MUY GRAVES.
          </p>
          <p>
            Corresponden a este tipo, las faltas excesivamente graves, en materia de agresión escolar que sean constitutivas de actuaciones en términos de disciplina, que alteran de manera bastante evidente, el manejo de la convivencia escolar en el área de la disciplina.
          </p>
          <p>
            Aclaramos, que, las faltas disciplinarias, excesivamente graves, o gravísimas, cometidas por los menores de catorce (14) años de edad, en lo atinente a reparación del daño en lo penal, civil o de reparación de daños y perjuicios, serán asumidas por los padres o acudientes, a voces del
            {" "}
            <span className="hl-green">
              artículo 2348 del
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                código civil colombiano
              </a>
            </span>
            , y
            {" "}
            <span className="hl-green">
              artículos 10, 14, 17, 18, 39 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                1098 de 2006
              </a>
            </span>
            .
          </p>
          <p>
            Aclaramos, que, las faltas excesivamente graves o muy graves o gravísimas, cometidas por mayores de 14 años de edad, hacen responsable al educando en primera persona y en conexidad a sus padres de familia o acudientes, a voces del
            {" "}
            <span className="hl-green">
              artículo 2348 del
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                código civil
              </a>
              {" "}
              vigente
            </span>
            , y en conexidad estricta con los
            {" "}
            <span className="hl-green">
              artículos 10, 14, 17, 18, 19, 39, y 44 literal 4 y literal 5 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                1098 de 2006
              </a>
            </span>
            . Cuando se conviertan en
            {" "}
            <span className="hl-red">
              Situaciones Tipo III
            </span>
            , se aplicará el protocolo para situaciones Tipo III. Y se procederá a denunciar el hecho, ante las autoridades pertinentes y competentes. Para el presente MANUAL DE CONVIVENCIA ESCOLAR, se consideran como Faltas especialmente graves o gravísimas; entre otras:
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                Todas aquellas actuaciones u omisiones que constituyan un delito o una acción punible, como infracciones de ley cometidas por educandos mayores de catorce (14) años de edad, serán cobijadas por la responsabilidad penal adolescente, que enumera el
                {" "}
                <span className="hl-green">
                  artículo 139º de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                , y además de ser faltas; algunas, según sea el caso, serán consideradas como
                {" "}
                <span className="hl-red">
                  situación TIPO III
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Participar, propiciar, apoyar, o protagonizar, actos sexuales abusivos con menores de 14 años de edad, o en la presencia de menores de 14 años de edad.
              </p>
            </li>
            <li>
              <p>
                Utilizar un lenguaje soez e irrespetuoso con actitud morbosa o términos descomedidos contra sus compañeros y/o superiores dentro y fuera del Plantel, acompañados o no de una agresión física o verbal que sea dirigida en contra de cualquier integrante de la Comunidad Educativa.
              </p>
            </li>
            <li>
              <p>
                Evadirse de Nuestra Institución educativa oficial durante la jornada escolar, o Ingresar en contra jornada a la sede de nuestra institución en horarios y actividades que no han sido acordados por las directivas de nuestra Institución oficial y publica.
              </p>
            </li>
            <li>
              <p>
                Porte, uso, promoción y distribución de material pornográfico (revistas, videos, etc.), fotos de sus compañeros o compañeras en situaciones sexuales inapropiadas, erótico sexuales o desnudos o semidesnudos o en poses y actuaciones consideradas pornográficas.
              </p>
            </li>
            <li>
              <p>
                Porte, consumo, trafico, microtráfico o suministro a menores de 18 años de edad, de sustancias alienantes, sustancias prohibidas, narcóticos, estupefacientes, drogas sintéticas, drogas inhalantes, drogas psiquiátricas no formuladas, y cualquier tipo de sustancia o droga que genere adicción, se incluyen los vapeadores o cigarrillos electrónicos.
              </p>
            </li>
            <li>
              <p>
                Suplantar firmas, adulterar o falsificar documentos o certificados propios de nuestra institución, o presentar documentos adulterados externos para adelantar trámites ante la Institución, lo que se tipifica como falsedad documental.
              </p>
            </li>
            <li>
              <p>
                Sustraer bienes de propiedad de otros o de nuestra institución, lo que tipifica una sustracción o robo de elementos.
              </p>
            </li>
            <li>
              <p>
                Intimidación, soborno o intento del mismo dentro y fuera del Colegio, lo que tipifica extorsión, cohecho o amenaza.
              </p>
            </li>
            <li>
              <p>
                Consumir bebidas embriagantes, induciendo a otros a hacerlo, o presentarse a nuestra Institución educativa oficial, en estado de embriaguez o ingerir bebidas alcohólicas delante o en presencia de menores de 14 años, consumir o expender alucinógenos o fumar dentro o fuera del Plantel e inducir a otros educandos a hacerlo.
                {" "}
                <span className="hl-green">
                  Decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38680" target="_blank" style={{ color: "var(--green)" }}>
                    120 de 2010
                  </a>
                </span>
                . Ver
                {" "}
                <span className="hl-green">
                  artículo 381 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código Penal
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Violación o ingreso NO autorizado, a cualquiera de las oficinas o dependencias de nuestra Institución, en horarios NO académicos, lo que constituye el delito de violación de morada o daño en bien ajeno.
              </p>
            </li>
            <li>
              <p>
                Acudir a dañar deliberada e intencionalmente uniformes, pupitres, útiles o cualquier pertenencia de algún miembro de la Comunidad Educativa, o causar daño a las instalaciones del plantel, que represente el delito de asonada o daño en bien ajeno.
              </p>
            </li>
            <li>
              <p>
                Escribir frases vulgares, pasquines, pintar figuras obscenas o escribir leyendas en la ropa, tableros, sillas, pupitres, muros o demás sitios dentro o fuera del Establecimiento, que constituyen daño al bien ajeno.
              </p>
            </li>
            <li>
              <p>
                Incitar a la violencia en contra de la integridad humana, que constituye una tentativa de lesiones personales. protagonizar, peleas, agresiones o amenazas; serán faltas muy graves, a menos, que constituyan el delito de amenaza o de lesiones personales.
              </p>
            </li>
            <li>
              <p>
                Utilizar, las redes sociales para fijar fotos eróticas, sexuales, morbosas, inapropiadas o que inciten a la pornografía, la sexualidad irresponsable o la prostitución infantil, poniéndose en riesgo propio, usando el uniforme del colegio o incitando a sus compañeros o pares a hacerlo, con o sin el uniforme del plantel.
              </p>
            </li>
            <li>
              <p>
                Suplantación de identidad y/o uso inadecuado del carné estudiantil propio o de algún compañero, que constituye falsedad documental.
              </p>
            </li>
            <li>
              <p>
                Uso inadecuado del uniforme en cualquier espacio interno o externo a nuestra Institución, para usarlo en la participación en infracciones de ley, delitos, o ingresar a sitios de lenocinio o de dudosa reputación, así como utilizar el uniforme del colegio, para utilizarlo en fotos obscenas, morbosas, erótico – sexuales inapropiadas o en videos obscenos, morbosos, sexuales o inapropiados, vulnerando la imagen de nuestra Institución educativa oficial ante la sociedad en pleno.
              </p>
            </li>
            <li>
              <p>
                Amenazar, coaccionar, inducir o propiciar, el consumo de sustancias prohibidas, en sus demás compañeros o compañeras. Encubrir hechos o anomalías que constituyan una infracción de ley, y que perjudiquen el normal desarrollo del proceso educativo dentro o alrededor de nuestra institución. Que se tipifica como complicidad por acción o por omisión según corresponda.
              </p>
            </li>
            <li>
              <p>
                Dañar o romper la silletería de los buses que prestan el servicio de transporte escolar, o fomentar el desorden dentro de los mismos, para incitar a otros a causar daños, lo que constituye daño a bien ajeno.
              </p>
            </li>
            <li>
              <p>
                Practicar ritos satánicos, espiritismo, y otros actos que atenten contra la dignidad humana y la salud mental, y realizarlos dentro de las instalaciones de nuestro colegio oficial o por fuera portando el uniforme del colegio; incluye los cortes en la piel, denominado Cutting; ideaciones suicidas o tentativas de suicidio o actuaciones afines que atentan contra la integridad personal.
              </p>
            </li>
            <li>
              <p>
                Violentar o desconocer, las reglas de salud pública que preserven el bienestar de la comunidad educativa y la conservación individual de la salud. Ningún estudiante podrá ingresar, ingerir o incitar a otros a consumir bebidas alcohólicas, en la Institución o fuera de ella, en sitio público, portando el uniforme, aun siendo mayor de edad o teniendo autorización de los padres.
                {" "}
                <span className="hl-green">
                  Artículo 381 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    código penal
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Conforme a la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
                  constitución política
                </a>
                {" "}
                de Colombia, en su artículo 11º: "el derecho a la vida es inviolable", por tal motivo, está prohibido que los educandos de nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE, que, sometan a sus compañeros o compañeras, a agresión física, verbal o psicológica, mucho menos a los profesores y otras personas dentro y fuera del Colegio. Portar, usar y/o comercializar cualquier clase de arma de fuego, corto punzante, o de cualquier tipo, que ponga en peligro la vida o integridad personal del portador, o de cualquier miembro de la Comunidad Educativa o el uso de elementos que no siendo tales, se les asemejen y puedan ser usados para intimidar o lesionar, agredir o atentar contra la vida, la integridad y la salud de los educandos, pares o docentes.
              </p>
            </li>
            <li>
              <p>
                Por tal motivo, se considera una falta gravísima, cuando cualquier educando, acude a amenazar, la vida o la integridad, la salud o la dignidad, de cualquiera de los miembros de la comunidad educativa, o acción intimidante que coarte o vulnere, en otros el asumir las normas o directrices de nuestra institución. Lo que se tipifica como amenaza. Implicarse en acciones de amenazas, intimidación, a través de medio escrito, cibernético, telemático, digital, web, verbal mediante terceros o de cualquier otra índole, conocido como matoneo, Bullying, ciberbullying o acoso y/o ciberacoso escolar, impidiendo una sana convivencia, y que empuje a alguno de los miembros de la comunidad al suicidio o a atentar contra su propia vida, o que sea objeto de lesiones personales agravadas o tentativa de homicidio o de homicidio en cualquiera de sus modalidades.
              </p>
            </li>
            <li>
              <p>
                Propiciar o participar en actividades contra la integridad física o moral de compañeros o cualquier miembro de la comunidad educativa, dentro o fuera del Colegio. Máxime cuando constituyan lesiones personales, agresiones o amenazas.
              </p>
            </li>
            <li>
              <p>
                Se considera como una falta especialmente grave, el acudir a difundir a través de Internet o medios electrónicos, propaganda contraría a los valores institucionales o mensajes en contra de personas o instituciones. Reviste especial gravedad la difusión de material pornográfico, fotos obscenas o sexuales o de pornografía infantil, portando el uniforme de nuestra Institución educativa oficial, o induciendo a sus pares o compañeros a hacerlo sin el uso del uniforme; y que constituya delito o que atente contra la integridad, vida, intimidad, dignidad o buen nombre; de los funcionarios de nuestra institución. No es atenuante ni emerge como excusa eximente, el hecho de que estas imágenes, fotos o videos, sean difundidas de manera externa en horario no académico, pues el agravante, se materializa, al realizarlas, portando el uniforme de nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Ingerir y/o distribuir bebidas alcohólicas, sustancias psicoactivas y/o sustancias psicotrópicas dentro o fuera de nuestra institución y/o en actividades escolares o extraescolares, tales como convivencias, salidas pedagógicas, retiros, servicio social, celebraciones y otras.
              </p>
            </li>
            <li>
              <p>
                Crear falsas alarmas tendientes a conseguir el pánico colectivo, tales como: estallar fulminantes, provocar quemas de basura, enrarecer el ambiente con sustancias de olor desagradable, portar o percutir armas de fuego o de gas comprimido; lo cual atenta contra la salud e integridad de sus demás compañeros y compañeras.
              </p>
            </li>
            <li>
              <p>
                Se considera falta gravísima, el hecho de no presentarse al colegio a cumplir con sus obligaciones escolares, e inducir a otros a hacerlo, para desplazarse a sitios desconocidos y diferentes, en los cuales cometan infracciones de ley, se pone en riesgo el educando y pone en riesgo la salud y la integridad de sus compañeros, además de poner en tela de juicio, la buena imagen y el buen nombre de Nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Utilizar, las redes sociales y en general la internet, para atentar contra el buen nombre de nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE.
              </p>
            </li>
            <li>
              <p>
                Cometer fraude en cualquiera de sus formas, tales como suplantar a padres de familia o docentes con la firma o con observaciones puestas sobre cualquier documento. Dar testimonios falsos, realizar copia en evaluaciones y/o trabajos. Reviste especial gravedad la adulteración del observador del estudiante, el registro inadecuado de observaciones, así como el daño y/o pérdida del mismo o el cambio de evaluaciones o valoraciones o notas en los boletines de notas escolares.
              </p>
            </li>
            <li>
              <p>
                Actuar deliberadamente participando y/o apropiándose de cualquier clase de objeto (útiles escolares, dinero, loncheras, comestibles, documentos, prendas de uniforme, etc.) de cualquiera de los miembros de la comunidad educativa o de un tercero. Agravado cuando el hecho se realice en contra de un educando de grado inferior.
              </p>
            </li>
            <li>
              <p>
                Se tiene por falta especialmente grave, el acudir a interferir con el normal desarrollo de la clase, a través de consignas, arengas, abucheos, aplausos continuos, guerra de papeles, lanzando objetos, o cualquier otra acción que implique desafío a la autoridad, tentativa o actuación de asonada, irrespeto, desafío hacia sus compañeros o hacia cualquier figura de autoridad.
              </p>
            </li>
            <li>
              <p>
                Se tiene por falta gravísima, el realizar, acciones para perforarse y/o atentar contra su integridad física o perforar a sus compañeros o compañeras, con objetos tales como: agujas, ganchos, punzones, tijeras de punta, clips, o cualquier elemento corto punzante. No representa un atenuante que sea autorizado por el menor de edad que permite el desarrollo de su perforación, y tampoco exime de responsabilidad penal, el hacerlo en horario no académico, puesto que la actuación de infracción de ley, constituye lesiones personales agravadas por tratarse de un menor de 18 años de edad, en falta de asepsia o de idoneidad clínica.
              </p>
            </li>
            <li>
              <p>
                Responderán penal y civilmente, los acudientes de los infractores o agresores, como terceros civilmente responsables de las lesiones personales que ocasionen a los menores de edad involucrados.
                {" "}
                <span className="hl-green">
                  Artículos 2346 y 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    Código Civil
                  </a>
                </span>
                . Y
                {" "}
                <span className="hl-green">
                  artículo 142 de ley
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
                Se entiende como falta gravísima e incluso como una infracción de ley, el utilizar sustancias químicas como: polvos pica pica, ácidos, hidróxidos u otra clase de sustancias o químicos, que atenten contra la salud e integridad física de sus compañeros o compañeras o amenacen con daños a su integridad. Responderán penal y civilmente, los acudientes de los infractores o agresores, como terceros civilmente responsables de las lesiones personales que causen sus hijos o acudidos o hijas o acudidas, frente a los educandos agredidos o victimizados. Ver lesiones personales en el
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                  código penal
                </a>
                , y ver
                {" "}
                <span className="hl-green">
                  artículo 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    Código Civil
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Será falta muy grave o gravísima, apropiarse de los medicamentos personales de los compañeros, o compañeras, para hacer uso de los mismos, o venderlos, de forma irresponsable. El agravante será que sean medicamentos formulados a pacientes psiquiátricos medicados, que sean educandos. La sanción será severa, incluso hasta la
                {" "}
                <span className="hl-red">
                  cancelación de la matrícula
                </span>
                , por acudir a poner en peligro, la vida, salud e integridad personal de sus compañeros y compañeras.
              </p>
            </li>
            <li>
              <p>
                Compartir imágenes, videos degradantes (pornográficos o de burla), en redes sociales o hacer comentarios desagradables en los grupos de WhatsApp creados para fines académicos
              </p>
            </li>
            <li>
              <p>
                Cualquier tipo de maltrato, agresión, humillación, discriminación o burla a través de medios tecnológicos hacia cualquier miembro de la comunidad educativa
              </p>
            </li>
            <li>
              <p>
                Amenazar por cualquier medio tecnológico a algún miembro de la comunidad educativa
              </p>
            </li>
            <li>
              <p>
                El Ciberacoso escolar (ciberbullying) como forma de intimidación con uso deliberado de tecnologías de información (Internet, redes sociales virtuales, telefonía móvil y video juegos online) para ejercer maltrato psicológico a algún miembro de la comunidad educativa
              </p>
            </li>
            <li>
              <p>
                Inducción a la prostitución.
              </p>
            </li>
            <li>
              <p>
                Constreñimiento a la prostitución.
              </p>
            </li>
            <li>
              <p>
                Incurrir en actos de corrupción de menores, dentro o fuera de la Institución.
              </p>
            </li>
            <li>
              <p>
                Incurrir o inducir a compañeros en la práctica de la prostitución, el acoso, el abuso o la agresión sexual u otras acciones similares, dentro o fuera de la Institución, que atenten contra la moral, las buenas costumbres y el debido respeto a cualquier miembro de la comunidad educativa o de las familias vecinas a la institución.
              </p>
            </li>
            <li>
              <p>
                Realizar actos como caricias, besos inapropiados, masturbaciones mutuas y toques en sus genitales dentro de las instalaciones de la institución o por fuera portando el uniforme institucional. En este sentido se reitera la normatividad vigente sobre el inducir, coercitar, promover y/o estimular acciones o comportamientos de carácter erótico-sexual que agredan la integridad, física, psíquica y moral o la dignidad de los o las estudiantes menores de 14 años de edad dentro de la institución educativa, en estricto acato y obedeciendo al
                {" "}
                <span className="hl-green">
                  artículo 20 numeral 4 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                , al
                {" "}
                <span className="hl-green">
                  artículo 44 numeral 4 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                {" "}
                y
                {" "}
                <span className="hl-green">
                  artículos 12 y 15º de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                    1146º de 2007
                  </a>
                </span>
                {" "}
                y
                {" "}
                <span className="hl-green">
                  artículo 209º del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código Penal
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Crear falsas alarmas o incurrir en acciones de terrorismo psicológico para generar pánico individual o colectivo dentro de la Institución.
              </p>
            </li>
            <li>
              <p>
                Realizar actos atentatorios contra la disciplina y el buen ambiente escolar tales como sabotajes en clase o en actividades organizadas por la institución, o promover desórdenes con modales incorrectos, insultos, gritos, alaridos, silbidos, frases injuriosas, vocablos soeces, o lanzando objetos indebidamente.
              </p>
            </li>
            <li>
              <p>
                Participar en actos vandálicos para causar daños sobre bienes materiales o alterar el orden público o institucional.
              </p>
            </li>
            <li>
              <p>
                Encubrir una falta o delito que por su carácter afecte a la comunidad educativa o a las familias vecinas a la institución.
              </p>
            </li>
            <li>
              <p>
                Utilizar el chantaje, el soborno o la extorsión para obtener beneficios personales o grupales.
              </p>
            </li>
            <li>
              <p>
                Promover o participar en riñas, reyertas o peleas dentro o fuera de la institución.
              </p>
            </li>
            <li>
              <p>
                Participar o protagonizar actos delictivos, acarreando su involucramiento en procesos judiciales.
              </p>
            </li>
            <li>
              <p>
                Ingresar a la institución educativa cualquier tipo de ciclomotor, motocicleta, motocarro, o automóvil que atente contra la integridad física de cualquier miembro de la comunidad educativa.
              </p>
            </li>
            <li>
              <p>
                Es importante resaltar, que es físicamente imposible el acudir a enumerar todos y cada uno de los elementos o actuaciones constitutivas de faltas leves, graves o muy graves, así como enumerar de manera taxativa todas y cada una de las acciones u omisiones, que se constituyen como faltas y a la vez, como situaciones Tipo III, y describirles de manera inequívoca y especifica dentro del presente MANUAL DE CONVIVENCIA ESCOLAR.
              </p>
            </li>
          </ol>
          <div className="commit-block">
            <p>
              Sin embargo, consideraremos, como
              {" "}
              <span className="hl-red">
                falta gravísima o muy grave, e incluso situación Tipo III
              </span>
              , para el presente MANUAL DE CONVIVENCIA ESCOLAR, el incurrir, en cualquier otra conducta que constituya contravención o infracción penal, según la Legislación Colombiana vigente. Y como
              {" "}
              <span className="hl-red">
                faltas NO convencionales
              </span>
              , las que el Consejo Directivo, a su pertinencia y conducencia estime necesario.
            </p>
          </div>
          <p className="estimulo-title-red">
            SANCIONES PARA FALTAS GRAVISIMAS O ESPECIALMENTE GRAVES.
          </p>
          <p>
            Se tendrá como figura conexa a las faltas graves o especialmente graves, la matrícula en observación y en su defecto, previo conducto regular y acato al debido proceso, la cancelación unilateral de la matrícula, cuando se trate de actuaciones disciplinables, reiterativas, reincidentes o delictuales e infracciónales que constituyan además de faltas graves; una situación tipo III.
          </p>
          <ol className="derechos-list">
            <li>
              <p>
                Toda falta grave o especialmente grave; amerita el ingreso a una
                {" "}
                <span className="hl-red">
                  matrícula en observación
                </span>
                , y citación inmediata de los acudientes o padres del educando.
              </p>
            </li>
            <li>
              <p>
                Toda falta grave o especialmente grave, amerita de inmediato, el ingreso a una matrícula en observación, y según la gravedad de la falta, la actuación repetitiva o reiterativa o reincidente, acorde estrictamente a la sujeción del debido proceso y la decisión del consejo directivo, previa consulta al comité de convivencia escolar, amerita incluso, para casos de infracción de ley, la
                {" "}
                <span className="hl-red">
                  cancelación de la matrícula de manera unilateral
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Toda falta grave o especialmente grave, amerita, la activación de la
                {" "}
                <span className="hl-red">
                  ruta de atención escolar
                </span>
                , tanto para el agresor o agresores, como para los agredidos o victimados, y requiere el acompañamiento del área psicosocial y multidisciplinar de Nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Si la falta grave o especialmente grave, desarrolla una instancia policiva, de restablecimiento de derechos para el educando, nuestro Consejo Directivo, será, la instancia pertinente, para evaluar, analizar, y decidir en plenaria, acerca de la cancelación unilateral de la matrícula del educando, en ese proceso, se debe seguir estricta obediencia al debido proceso, y a las garantías del derecho a la defensa y la imparcialidad y publicidad; además, deben tenerse en cuenta: el comportamiento académico, el comportamiento disciplinario, la conducta del agresor, frente a sus compañeros y su actitud frente a las autoridades educativas y docentes, además de lo conceptuado por el comité de convivencia escolar de Nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Si NO se cancela la matricula unilateralmente, la sanción correspondiente a falta grave o especialmente grave; será incluso dependiendo a los criterios de gravedad de la falta, atenuantes y agravantes, hasta de
                {" "}
                <span className="hl-red">
                  cinco (5) días hábiles curriculares de trabajo en casa
                </span>
                , y el desarrollo de un trabajo manuscrito (entiéndase hecho a mano, cursiva) de
                {" "}
                <span className="hl-red">
                  veinte (20) hojas
                </span>
                , acerca del tema de la falta grave o especialmente grave en que incurre; y adicional a ello, una cartelera para prevenir ese tipo de faltas graves, que socializará a manera de acción restaurativa, frente a sus compañeros y pares de su salón y del salón o grado del agredido o agredidos.
              </p>
            </li>
            <li>
              <p>
                Se explica de manera precisa, clara y conducente, que la violación, desatención y la desobediencia a las anteriores, obligaciones, compromisos, deberes y sujeciones, dará lugar a las sanciones en materia de faltas leves, graves y muy graves, que serán evaluadas en criterio de proporcionalidad, por el primer respondiente y en asesoría y acompañamiento del concepto del comité de convivencia y con la decisión final y el aval de notificación del consejo directivo.
              </p>
            </li>
            <li>
              <p>
                Incluso del abordaje de las faltas muy graves, que se tornan en
                {" "}
                <span className="hl-red">
                  situaciones Tipo III
                </span>
                , así sean protagonizadas, por menores de 14 años de edad, que
                {" "}
                <span className="hl-red">
                  NO son judicializables
                </span>
                , sin embargo, responderán penal y civilmente, sus padres a voces de los
                {" "}
                <span className="hl-green">
                  artículos 10; 14; 18; 19, 20 numeral 1, numeral 4; 39 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                </span>
                ; y a voces de los
                {" "}
                <span className="hl-green">
                  artículos 2347 y 2348 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=275" target="_blank" style={{ color: "var(--green)" }}>
                    código civil
                  </a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Ahora, bien; es importante resaltar, que las normas, las directrices, las pautas de asistencia, de cumplimiento, de entrega de trabajos, tareas, ejercicios; procesos y dinámicas, que se hayan ajustado a una educación flexible NO presencial, virtual, ciber digital, telemática, televisiva, radial o Ciber virtual,
                {" "}
                <span className="hl-red">
                  NO desvirtúan, no menguan, no minimizan, no exoneran, y NO liberan al educando
                </span>
                {" "}
                de seguir cumpliendo a cabalidad con su rol académico, cognitivo y curricular; como corresponde a sus deberes y compromisos, citados en el presente texto de manual de convivencia escolar.
              </p>
            </li>
          </ol>
        </TabPanel>
      </Tabs>
    </>
  );
}
