import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap33() {
  return (
    <>
      <Tabs ids={["padres-deberes","padres-sanciones"]} initial="padres-deberes">
        <div className="section-header">
          <span className="section-num">
            33
          </span>
          <h2 className="section-title">
            Deberes de los Padres
          </h2>
        </div>
        <div className="tipo-tabs-bar mini">
          <TabButton tab="padres-deberes" className="tipo-tab-btn">
            Deberes de los Padres de Familia
          </TabButton>
          {" "}
          <TabButton tab="padres-sanciones" className="tipo-tab-btn">
            Las Sanciones por Inasistencia
          </TabButton>
        </div>
        <TabPanel className="tipo-tab-content mini" id="padres-deberes">
          <p className="subtitle-green">
            DEBERES DE LOS PADRES DE FAMILIA.
          </p>
          <div className="tipo-para">
            <p>
              La vinculación directa de la familia a la Institución es indispensable para lograr la educación y formación integral de los hijos, por consiguiente, los padres deben cumplir las siguientes obligaciones:
            </p>
          </div>
          <div className="tipo-legal-ref">
            <p>
              <span className="hl-green">
                <strong>
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913" target="_blank" style={{ color: "var(--green)" }}>
                    Decreto 1075 de 2015
                  </a>
                  . Artículo 2.3.4.3. Deberes de los padres de familia.
                </strong>
              </span>
              {" "}
              Con el fin de asegurar el cumplimiento de los compromisos adquiridos con la educación de sus hijos, corresponden a los padres de familia los siguientes deberes:
            </p>
          </div>
          <ol className="derechos-list-letters">
            <li>
              <p>
                Matricular oportunamente a sus hijos en establecimientos educativos debidamente reconocidos por el Estado y asegurar su permanencia durante su edad escolar obligatoria;
              </p>
            </li>
            <li>
              <p>
                Contribuir para que el servicio educativo sea armónico con el ejercicio del derecho a la educación y en cumplimiento de sus fines sociales y legales;
              </p>
            </li>
            <li>
              <p>
                Cumplir con las obligaciones contraídas en el acto de matrícula y en el manual de convivencia, para facilitar el proceso de educativo;
              </p>
            </li>
            <li>
              <p>
                Contribuir en la construcción de un clima de respeto, tolerancia y responsabilidad mutua que favorezca la educación de los hijos y la mejor relación entre los miembros de la comunidad educativa;
              </p>
            </li>
            <li>
              <p>
                Comunicar oportunamente, y en primer lugar a las autoridades del establecimiento educativo, las irregularidades de que tengan conocimiento, entre otras, en relación con el maltrato infantil, abuso sexual, tráfico o consumo de drogas ilícitas. En caso de no recibir pronta respuesta, acudir a las autoridades competentes;
              </p>
            </li>
            <li>
              <p>
                Apoyar al establecimiento en el desarrollo de las acciones que conduzcan al mejoramiento del servicio educativo y que eleven la calidad de los aprendizajes, especialmente en la formulación y desarrollo de los planes de mejoramiento institucional;
              </p>
            </li>
            <li>
              <p>
                Acompañar el proceso educativo en cumplimiento de su responsabilidad como primeros educadores de sus hijos, para mejorar la orientación personal y el desarrollo de valores ciudadanos;
              </p>
            </li>
            <li>
              <p>
                Participar en el proceso de autoevaluación anual del establecimiento educativo. (Decreto 1286 de 2005, artículo 3)
              </p>
            </li>
          </ol>
          <div className="tipo-para">
            <p>
              Además, de las obligaciones de ley, nuestra comunidad educativa, considera que estas también, son obligaciones o deberes de los acudientes y padres de familia de los educandos.
            </p>
          </div>
          <ol className="derechos-list">
            <li>
              <p>
                Conocer, acatar e inexcusablemente respetar el debido proceso y la ruta de atención que se debe aplicar a los educandos. En primer lugar y especialmente conocer de las actas de debido proceso, acatando lo pertinente a la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  ley 1098 de 2006
                </a>
                ,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25669" target="_blank" style={{ color: "var(--green)" }}>
                  ley 1146 de 2007
                </a>
                ,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 25 del Código Penal
                </a>
                ,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36878" target="_blank" style={{ color: "var(--green)" }}>
                  ley 1335 de 2009
                </a>
                ,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39177" target="_blank" style={{ color: "var(--green)" }}>
                  decreto 860 de 2010
                </a>
                , y demás normativa aplicable a los menores de edad.
              </p>
            </li>
            <li>
              <p>
                Conocer, acatar e inexcusablemente respetar el debido proceso y la ruta de atención que se debe aplicar a los educandos. En primer lugar y especialmente conocer y brindar acato a lo ordenado en la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                  ley 1620 de 2013
                </a>
                , en su artículo 22º.
              </p>
            </li>
            <li>
              <p>
                Adquirir la póliza contra accidente estudiantil anualmente, que permita atender de manera inmediata cualquier tipo de accidente escolar dentro de la institución.
              </p>
            </li>
            <li>
              <p>
                La asistencia y puntualidad a los talleres, reuniones y citaciones es obligatoria. La inasistencia ocasiona la respectiva anotación en el observador (plataforma institucional) por parte del director de grupo o coordinación.
              </p>
            </li>
            <li>
              <p>
                En caso de inasistencia a la citación o reunión, el padre de familia deberá presentarse ante el director Grupo o coordinación en la fecha que le sea comunicada; de continuar el incumplimiento, ante la coordinación respectiva. Art, 1 numeral c decreto No 1286 del 27 mayo 2005.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 42 numeral 5 de ley 1098 de 2006
                </a>
                {" "}
                de Infancia y Adolescencia.
              </p>
            </li>
            <li>
              <p>
                Asumir responsablemente la tarea de ser los primeros educadores de sus hijos en concordancia con los lineamientos establecidos por la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125" target="_blank" style={{ color: "var(--green)" }}>
                  Constitución Política de Colombia
                </a>
                ,
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                  artículo 17 de la Ley 115
                </a>
                , Código de la Infancia y la Adolescencia (
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Ley 1098 del 2006
                </a>
                ). Derechos Fundamentales de los Niños y por el presente Manual de Convivencia. Artículos 288 y 2347 y 2348 del código civil como su derrotero y obligación inexcusables.
              </p>
            </li>
            <li>
              <p>
                Conocer y analizar con sus hijos el presente manual de convivencia. pues se advierte que, al matricularles en Nuestra Institución educativa oficial, y firmada la matrícula, entra en vigencia el contrato civil contractual, y se asumen aceptadas todas las normas, directrices y cánones, taxativos y clarificados dentro del presente texto y que sean armoniosas con la filosofía de nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Conocer e interiorizar la filosofía Institucional y acatar el presente Manual de Convivencia en su total integridad.
              </p>
            </li>
            <li>
              <p>
                La asistencia y puntualidad a los talleres, las reuniones y citaciones será de carácter obligatoria. La inasistencia ocasiona la respectiva anotación en la plataforma y el observador por parte del director o directora de grupo o coordinador.
              </p>
            </li>
            <li>
              <p>
                En caso de inasistencia a la citación o reunión, el padre de familia deberá presentarse ante el director de Grupo en los tres días hábiles siguientes; de continuar el incumplimiento, deberá presentarse ante la coordinación de convivencia respectiva. Artículo 1º, numeral c decreto No 1286 del 27 de mayo 2005. Ver, además, la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                  ley 2025 de 2020
                </a>
                , en el tema de los talleres escuela de padres de carácter obligatorios en asunto de asistencia.
              </p>
            </li>
            <li>
              <p>
                Plantear reclamos en forma objetiva, cordial, oportuna y siguiendo el conducto regular, tanto en lo académico como en casos de disciplina. Evitando hacer amonestaciones agresivas o desobligantes a los estudiantes, amenazas o agresiones dentro o fuera de nuestra institución; o por intermedio de terceros.
              </p>
            </li>
            <li>
              <p>
                Los padres de familia son los primeros y principales educadores, este deber es impostergable y no termina cuando los hijos(as) concurren a la Institución Educativa.
              </p>
            </li>
            <li>
              <p>
                Mantener comunicación continua con los directivos y profesores en los horarios establecidos.
              </p>
            </li>
            <li>
              <p>
                Dotar de manera oportuna a sus hijos(as) del uniforme reglamentario según el modelo taxativamente establecido por el Consejo Directivo de nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                También proveer a sus hijos(as) de los útiles e implementos escolares para atender las necesidades curriculares.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 39 numeral 8 de ley 1098 de 2006
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Apoyar las salidas educativas programadas por la Institución.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 39 numeral 8 ley 1098 de 2006
                </a>
              </p>
            </li>
            <li>
              <p>
                Colaborar con la buena presentación personal, modales y buen comportamiento de sus hijos(as) y ser ejemplo de trato respetuoso para los demás.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Articulo 39 numeral 8 ley 1098 de 2006
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Ayudar al cuidado y conservación de los espacios internos y circundantes de nuestra Institución.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 7 de la ley General de Educación, 115 de 1994
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Responder económicamente por daños ocasionados por sus hijos(as) en la institución. La reparación o reposición debe hacerse en un tiempo máximo de diez (10) días hábiles.
              </p>
            </li>
            <li>
              <p>
                Presentar las excusas cuando su hijo(a) no asista a clases, ante la coordinación; en el momento del reintegro del educando. Asistir personalmente en los horarios establecidos por la coordinación.
              </p>
            </li>
            <li>
              <p>
                Solicitar con anterioridad y por escrito, autorización para retirar el educando de nuestra institución, ante la Coordinación.
              </p>
            </li>
            <li>
              <p>
                Estar atento a los tiempos de entrada y salida de sus hijos según el horario establecido y evitar dejarlos esperando más del tiempo indicado
              </p>
            </li>
            <li>
              <p>
                Brindar un trato comedido y respetuoso al personal de nuestra institución, directivos, docentes, educandos, celadores y personal de servicios generales. Artículo 2 numeral d del decreto 1286 del 27 mayo 2005.
              </p>
            </li>
            <li>
              <p>
                Asistir con puntualidad a los talleres de orientación planeados por la institución, realizando compromisos de crecimiento integral de la familia.
              </p>
            </li>
            <li>
              <p>
                Estar pendiente de la salud de sus hijos, no enviarlos enfermos a la Institución llevarlos al médico cuando se requiera y retirarlo de nuestra institución tan pronto como sea informado de la enfermedad o accidente de su hijo(a).
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 39, numerales 5 y 7 de ley 1098 de 2006
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Velar por el cumplimiento de las obligaciones escolares de sus hijos, dentro y fuera de nuestra institución, como también por la vivencia de valores y respeto en su cotidiano trasegar educativo.
              </p>
            </li>
            <li>
              <p>
                Firmar circulares, excusas y boletines en el tiempo correspondiente.
              </p>
            </li>
            <li>
              <p>
                Respaldar la autoridad de nuestra institución, corrigiendo amorosa y oportunamente a sus hijos.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 39 numeral 9 de ley 1098 de 2006
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Enviar oportunamente a sus hijos a clases, respetando los horarios establecidos e igualmente retirarlos una vez termine la jornada escolar.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículo 39 numeral 3 de ley 1098 de 2006
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Vigilar la llegada oportuna a su residencia o en caso contrario indagar las causas de la llegada tarde. Controlar el uso adecuado del tiempo libre de los educandos.
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  Artículos 12 y 13 de ley 1098 de 2006
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                Todas las obligaciones que la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
                  ley 1620 de marzo 15 de 2013
                </a>
                {" "}
                le confiere en su artículo 22 referente a la participación de la familia en los procesos de convivencia escolar.
              </p>
            </li>
            <li>
              <p>
                Consultar frecuentemente la página web, grupos oficiales o comunidad de WhatsApp para las circulares e informaciones que Nuestra Institución educativa oficial, publique.
              </p>
            </li>
            <li>
              <p>
                Proveer a sus hijos del uniforme, textos, útiles e implementos sugeridos por la institución para el desarrollo normal de la actividad escolar y controlar para que no se apropien de elementos que no le pertenezcan.
              </p>
            </li>
            <li>
              <p>
                Cuidar y fomentar el buen nombre de nuestra institución y la imagen corporativa.
              </p>
            </li>
            <li>
              <p>
                Asistir responsable y puntualmente a las reuniones y demás citaciones especiales que haga la institución, la no asistencia a dos o más citaciones dará derecho a la pérdida del cupo para el año siguiente.
              </p>
            </li>
            <li>
              <p>
                Mantener buenas relaciones con las directivas, profesores y demás miembros de nuestra institución.
              </p>
            </li>
            <li>
              <p>
                Evitar a toda costa el maltrato físico o moral, el abandono, el descuido, el abuso sexual, explotación o ingesta de licor o sustancias que perjudiquen su integridad personal.
              </p>
            </li>
            <li>
              <p>
                Orientar y controlar la buena presentación personal de sus hijos, como también las mínimas normas de aseo y buenas costumbres.
              </p>
            </li>
            <li>
              <p>
                Informarse oportunamente del rendimiento escolar de sus hijos, así como de sus avances y/o dificultades.
              </p>
            </li>
            <li>
              <p>
                Colaborar con nuestra institución con los correctivos que sean necesarios para el asertivo progreso académico y/o disciplinario del educando.
              </p>
            </li>
            <li>
              <p>
                Estar a paz y salvo con nuestra institución por todo concepto al finalizar el año lectivo.
              </p>
            </li>
            <li>
              <p>
                Responsabilizarse de la formación y educación de sus hijos en concordancia con los lineamientos establecidos por las leyes vigentes y el presente manual de convivencia.
              </p>
            </li>
            <li>
              <p>
                Asistir y controlar en forma permanente a sus hijos e hijas con el fin de garantizar su desarrollo armónico integral.
              </p>
            </li>
            <li>
              <p>
                Asistir a reuniones periódicas para recibir, los respectivos informes académicos y a las demás citaciones emanadas por el Colegio. En caso de no poder asistir el día y hora señalados, deberá presentarse el día laboral siguiente.
              </p>
            </li>
            <li>
              <p>
                Velar por la buena presentación personal de sus hijos e hijas, acorde con las normas estéticas exigidas por modelo del uniforme, que definió el Consejo Directivo de la Institución y que aceptan al matricularse en Nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Orientar y apoyar a sus hijos en los deberes y aspiraciones que tienen como personas y como estudiantes.
              </p>
            </li>
            <li>
              <p>
                Brindar a sus hijos una educación moral y espiritual coherente con la educación impartida en Nuestra Institución educativa oficial.
              </p>
            </li>
            <li>
              <p>
                Proporcionar, a sus hijos, una alimentación balanceada, vestido, salud, habitación, recreación y lo necesario para cumplir con el trabajo escolar.
              </p>
            </li>
            <li>
              <p>
                Exigir a las autoridades competentes el cumplimiento de la responsabilidad que tiene el Estado con la educación.
              </p>
            </li>
            <li>
              <p>
                Integrar y asistir a la Escuela de Padres buscando su mejoramiento personal que redunde en el bien de la familia.
              </p>
            </li>
            <li>
              <p>
                Dirigirse respetuosamente a los docentes, directivos y demás personal de nuestra institución en cualquier momento y circunstancia, siguiendo el conducto regular.
              </p>
            </li>
            <li>
              <p>
                Evitar comentarios falsos o tendenciosos que atenten contra la dignidad de la Comunidad Educativa.
              </p>
            </li>
            <li>
              <p>
                Verificar y confirmar, hechos y acciones que los educandos, les expongan, antes de acudir a realizar y efectuar las reclamaciones correspondientes.
              </p>
            </li>
            <li>
              <p>
                Revisar constantemente las actividades escolares de sus hijos que permitan una mayor integración en la familia y el éxito del proceso de aprendizaje y formativo de éstos.
              </p>
            </li>
            <li>
              <p>
                Velar por el respeto, el amor y su relación familiar para que sus hijos depositen en ella cariño y confianza.
              </p>
            </li>
            <li>
              <p>
                Inculcar en sus hijos el sentido de pertenencia con nuestra institución.
              </p>
            </li>
            <li>
              <p>
                Inculcar en sus hijos la responsabilidad en el cumplimiento de sus deberes y el respeto hacia sus docentes y compañeros, pues de ello depende su crecimiento personal e intelectual.
              </p>
            </li>
            <li>
              <p>
                Respetar los horarios de clase y atención a padres de familia establecidos por la Institución, con el fin de evitar la interrupción de las actividades programadas de clase.
              </p>
            </li>
            <li>
              <p>
                Adquirir para sus hijos un seguro estudiantil por cada año en que se matricule.
              </p>
            </li>
            <li>
              <p>
                Conocer y aplicar la Ley de Infancia y Adolescencia (
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                  1098 de noviembre de 2006
                </a>
                ) para mejorar su función y cumplir sus deberes como padres.
              </p>
            </li>
            <li>
              <p>
                Presentar oportunamente y por escrito al coordinador y al Director o Directora de curso, los permisos, incapacidades y las respectivas justificaciones de las ausencias o retardos de sus hijos dentro de los tres días hábiles siguientes a la ausencia.
              </p>
            </li>
            <li>
              <p>
                Asistir puntualmente a la hora de entrada y salida de los estudiantes en el grado de transición.
              </p>
            </li>
            <li>
              <p>
                Asistir a todos y cada uno de los talleres escuela de padres de familia programados por la institución educativa. Acatando lo normado en la
                {" "}
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                  ley 2025 del 23 de julio de 2020
                </a>
                .
              </p>
            </li>
          </ol>
          <div className="tipo-para">
            <p>
              Si NO asiste, tendrá como sanción pedagógica, elaborar un
              {" "}
              <span className="hl-red">
                <strong>
                  TRABAJO MANUSCRITO DE 10 PÁGINAS
                </strong>
              </span>
              , no impreso, no a computador, manuscrito, hecho a mano, con el tema de la responsabilidad parental, patria potestad y deber de cuidado.
            </p>
            <p>
              Si NO asiste a un segundo Taller de padres, la sanción pedagógica, además del
              {" "}
              <span className="hl-red">
                <strong>
                  trabajo manuscrito de 20 hojas
                </strong>
              </span>
              , será la
              {" "}
              <span className="hl-red">
                <strong>
                  elaboración de una cartilla para prevención del abuso sexual, de mínimo seis (6) hojas
                </strong>
              </span>
              . Para que se socialice en clase de su hijo o hija.
            </p>
            <p>
              Si NO asiste a un tercer taller,
              {" "}
              <span className="hl-red">
                <strong>
                  NO podrá matricular a su hijo o hija, para el año lectivo siguiente
                </strong>
              </span>
              {" "}
              y será denunciado su proceder en abandono, a voces del artículo 18 y 20 numeral 1 de la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                ley 1098 de 2006
              </a>
              , ante comisaria de familia.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="padres-sanciones">
          <p className="subtitle-green">
            LAS SANCIONES POR INASISTENCIA.
          </p>
          <div className="tipo-para">
            <p>
              Aplican con inasistencia, justificada o NO justificada, en ningún caso, se eximirá el padre o acudiente de las sanciones pedagógicas, por el hecho de excusarse.
            </p>
          </div>
          <div className="tipo-para">
            <p>
              <span className="hl-green">
                <strong>
                  PARÁGRAFO 1.
                </strong>
              </span>
              {" "}
              Si ante un requerimiento de nuestra Institución para informar o solucionar algún problema de un educando, el padre de familia no se hace presente, después de tres citaciones, Nuestra Institución educativa oficial a través de su Rectoría, informará a la autoridad competente según sea el caso: Instituto Colombiano de Bienestar Familiar (ICBF), Comisaría de Familia, Policía de Infancia y Adolescencia, Secretaría de Educación municipal o Distrital entre otras, por el presunto delito de abandono, como lo señala la
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                ley 1098 de 2006
              </a>
              {" "}
              en sus artículos 18, articulo 20 numeral 1.
            </p>
          </div>
          <div className="tipo-para">
            <p>
              <span className="hl-green">
                <strong>
                  PARÁGRAFO 2.
                </strong>
              </span>
              {" "}
              Si el acudiente o un familiar del educando, agrede verbal, física, psicológica o emocionalmente, en agresión física, virtual o cibernética, será causal INMEDIATA de cancelación del contrato de matrícula, y se cerrará toda posibilidad de renovación de matrícula para el siguiente año lectivo. Sin perjuicio de las acciones penales, civiles y contractuales en daños y perjuicios.
            </p>
          </div>
          <div className="tipo-para">
            <p>
              <span className="hl-green">
                <strong>
                  PARAGRAFO 3.
                </strong>
              </span>
              {" "}
              Si el acudiente o familiar hasta tercer grado de uno de los educandos, agrede, vulnera, o violenta la dignidad, buen nombre, o agrede física, emocional, psicológica o usa expresiones discriminatorias, contra un miembro de nuestra comunidad educativa; ipso facto, el educando a través de resolución de rectoría y aval del consejo directivo, se acudirá a activar la ruta de atención escolar, y el debido proceso así como el conducto regular, y probados los hechos o actuaciones lesivas, se procederá a excluir del plantel al educando, sin perjuicio de las actuaciones penales o civiles por injuria, calumnia o por lesiones personales, como delitos autónomos del código penal colombiano.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
