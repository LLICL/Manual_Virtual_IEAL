const REGLAS = [
  {
    term: 'Maquillaje y estética personal',
    text: 'Sí se permite el uso de maquillaje, bajo criterios estrictos de moderación, decoro y sobriedad, acordes con la naturaleza formativa y pedagógica del entorno escolar.',
  },
  {
    term: 'Accesorios y prevención de accidentes',
    text: 'Por motivos de seguridad, prevención de riesgos y protección de la integridad física de los estudiantes, no se permite el uso de aretes largos, colgantes o extravagantes que puedan generar enganches, desgarros o lesiones durante las actividades pedagógicas y lúdicas. Asimismo, queda prohibido el porte de pulseras o aditamentos cortopunzantes, metálicos con puntas, clavos o bordes afilados. En concordancia con los colores y el diseño institucional, los accesorios permitidos deberán armonizar con la escala cromática del uniforme oficial.',
  },
  {
    term: 'Corporalidad y modificaciones estéticas',
    text: 'En observancia de los fines de cohesión, disciplina e identidad comunitaria, se exhorta a minimizar en lo posible la exhibición ostentosa o llamativa de tatuajes, perforaciones, esmaltes o tinturas capilares de tonos estridentes que desfiguren el carácter igualitario e institucional del uniforme escolar.',
  },
  {
    term: 'Presentación masculina',
    text: 'Preferiblemente portarán y usarán el cabello corto, clásico. Sí se permite el cabello largo en su extensión, siempre que se lleve debidamente peinado y recogido de manera decorosa, aseado y digno, y sujeto a la mesura, el decoro y la urbanidad.',
  },
  {
    term: 'Simbología de grupos o tribus',
    text: 'Se prohíbe el porte de símbolos, insignias o prendas asociadas a grupos radicales, tribus urbanas, ciber-tribus o barras bravas que atenten contra el clima de convivencia y la seguridad colectiva.',
  },
];

export default function Cap4Presentacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.2.2
        </span>
        <h2 className="section-title">
          Marco de autonomía y presentación personal
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.2.2
        </span>
        <h3 className="hz-head-title">
          Marco de autonomía y presentación personal
        </h3>
      </div>

      <p className="hz-p">
        La Institución Educativa Antonio Lenis reconoce y respeta el derecho fundamental al libre
        desarrollo de la personalidad. En el entorno escolar y durante el porte del uniforme oficial
        único, este derecho se armoniza con el deber de orden, disciplina, higiene y la protección
        especial reforzada a los estudiantes menores de 14 años. Las manifestaciones de la estética
        personal se permiten sujetas a la mesura, la urbanidad y el decoro, y queda prohibido su uso
        como herramientas de coerción, inducción, constreñimiento o desorientación sobre la población
        infantil del plantel.
      </p>

      <ul className="hz-list">
        {REGLAS.map((r) => (
          <li key={r.term}>
            <span className="hz-term">{r.term}</span> — {r.text}
          </li>
        ))}
      </ul>

      <p className="hz-note">
        <strong>Parágrafo.</strong> No está permitido el uso de accesorios diferentes a los fijados
        por nuestra Institución Educativa dentro del presente Manual de Convivencia. En este caso no
        se realizará decomiso; sin embargo, en la segunda ocasión se hará reconvención y llamado al
        orden al estudiante y en la tercera se citará al acudiente.
      </p>
    </>
  );
}
