const VALORES = [
  'Identidad propia',
  'Buen ciudadano',
  'Disciplinado',
  'Ético',
  'Comunicativo',
  'Participativo',
  'Solidario',
  'Productivo',
  'Ambientalista',
  'Analítico',
];

export default function Cap3Estudiante() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          1.5.1
        </span>
        <h2 className="section-title">
          Perfil del estudiante Lenista
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          1.5.1
        </span>
        <h3 className="hz-head-title">
          Perfil del estudiante Lenista
        </h3>
      </div>

      <p className="hz-p">
        El educando Lenista, en su proceso de formación, se caracteriza por desarrollar de manera
        equilibrada valores sociales como los siguientes:
      </p>

      <div className="hz-chips">
        {VALORES.map((v) => (
          <span className="hz-chip" key={v}>
            {v}
          </span>
        ))}
      </div>

      <p className="hz-p">
        Asimismo, se define por las siguientes cualidades esenciales:
      </p>

      <ul className="hz-list">
        <li>Comprometido con la identidad institucional, demostrando respeto, disciplina, dignidad y amistad fraterna.</li>
        <li>Líder dinamizador de su comunidad y grupo social, buscando la cooperación, la concertación y el desarrollo de iniciativas.</li>
        <li>Autónomo en lo intelectual y moral, capaz de administrar su aprendizaje con responsabilidad y asumir las consecuencias de sus actos.</li>
        <li>Introspectivo e íntegro, empleando su autoconocimiento en beneficio de la transformación de su entorno social.</li>
        <li>Comunitario, capaz de amar, compartir y construir democracia y ciudadanía con sus pares.</li>
        <li>Buscador constante de la verdad, la superación y el crecimiento integral.</li>
        <li>Creativo, innovador, investigativo y transformador de su realidad.</li>
        <li>Único e irrepetible, alejado de la imitación irracional, de las modas vacías e inmaduras, y coherente con su edad y sus saberes.</li>
      </ul>
    </>
  );
}
