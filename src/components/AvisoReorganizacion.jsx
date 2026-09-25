import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'ieal_aviso_reorg_no_mostrar';

function leeNoMostrar() {
  try {
    return window.localStorage?.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function guardaNoMostrar() {
  try {
    window.localStorage?.setItem(STORAGE_KEY, '1');
  } catch {
    /* WebView sin storage: solo oculta la sesión */
  }
}

export default function AvisoReorganizacion() {
  const [visible, setVisible] = useState(false);
  const cerrarRef = useRef(null);

  useEffect(() => {
    if (leeNoMostrar()) return;
    const t = window.setTimeout(() => setVisible(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const reabrir = () => setVisible(true);
    window.addEventListener('ieal:mostrar-aviso', reabrir);
    return () => window.removeEventListener('ieal:mostrar-aviso', reabrir);
  }, []);

  useEffect(() => {
    if (!visible) return;
    cerrarRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setVisible(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible ]);

  if (!visible) return null;

  const cerrar = () => setVisible(false);
  const noMostrar = () => {
    guardaNoMostrar();
    setVisible(false);
  };

  return (
    <div
      className="aviso-burbuja"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de reorganización estructural"
    >
      <button
        ref={cerrarRef}
        className="aviso-burbuja__cerrar"
        type="button"
        title="Cerrar aviso"
        aria-label="Cerrar aviso"
        onClick={cerrar}
      >
        ×
      </button>
      <p className="aviso-burbuja__titulo">Aviso de reorganización estructural</p>
      <div className="aviso-burbuja__texto">
        <p>
          El presente documento constituye la versión oficial completa y reestructurada del Manual de
          Convivencia de la Institución Educativa Antonio Lenis para el período 2026-2027. En
          cumplimiento de los acuerdos institucionales, se ha dividido el contenido en dos grandes
          bloques:
        </p>
        <p>
          <strong>BLOQUE 1:</strong> el documento principal consensuado, operativo y pedagógico
          (Capítulos I a VIII), que contiene todas las normas cotidianas, derechos, deberes, gobierno
          escolar, convivencialidad y SIEE; y <strong>BLOQUE 2:</strong> el anexo normativo y
          jurisprudencial (Secciones A, B y C), donde se compila la totalidad de los soportes
          constitucionales, legales, sentencias de la Corte Constitucional, Corte Suprema y formatos
          jurídicos que respaldan la autonomía institucional.
        </p>
        <p>
          Por tanto el presente Manual y el Contrato de Matrícula se fundamentan en el exordio
          Constitucional sobre Autonomía Escolar (
          <a
            className="aviso-burbuja__articulo"
            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292"
            target="_blank"
            rel="noreferrer"
            title="Ver Ley 115 de 1994 - Artículo 77 (fuente oficial)"
          >
            Art. 77 Ley 115/94
          </a>
          {' '}y{' '}
          <a
            className="aviso-burbuja__articulo"
            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125"
            target="_blank"
            rel="noreferrer"
            title="Ver Constitución Política - Artículo 68 (fuente oficial)"
          >
            Art. 68 C.P.
          </a>
          ), cuyo texto taxativo y alegato jurídico ante autoridades judiciales reposa en la Sección
          A.1 del Bloque 2.
        </p>
      </div>
      <div className="aviso-burbuja__acciones">
        <button className="aviso-burbuja__btn" type="button" onClick={cerrar}>
          Entendido
        </button>
        <button className="aviso-burbuja__link" type="button" onClick={noMostrar}>
          No mostrar de nuevo
        </button>
      </div>
    </div>
  );
}
