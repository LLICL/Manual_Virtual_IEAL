// Estructura del menú lateral con tipado jerárquico por capítulos.
const navigation = [
  {
    "title": "Inicio",
    "collapsible": false,
    "items": [
      {
        "id": "cap-home",
        "label": "Inicio"
      }
    ]
  },
  {
    "title": "Bloque 1: Consensuado, operativo y pedagógico",
    "separator": true,
    "collapsible": false,
    "items": []
  },
  {
    "title": "Capítulo 1: Identificación, identidad, horizonte institucional y perfiles de los actores",
    "collapsible": true,
    "items": [
      {
        "id": "cap-1",
        "label": "Identificación institucional",
        "number": "1.1"
      },
      {
        "id": "cap-resena",
        "label": "Reseña histórica",
        "number": "1.2"
      },
      {
        "id": "cap-2",
        "label": "Símbolos e himno institucional",
        "number": "1.3"
      },
      {
        "id": "cap-horizonte",
        "label": "Horizonte e identidad institucional",
        "number": "1.4",
        "children": [
          {
            "id": "cap-horizonte-principios",
            "label": "Principios institucionales",
            "number": "1.4.1"
          },
          {
            "id": "cap-horizonte-valores",
            "label": "Valores institucionales",
            "number": "1.4.2"
          },
          {
            "id": "cap-horizonte-etico",
            "label": "Horizonte ético del cuidado",
            "number": "1.4.3"
          }
        ]
      },
      {
        "id": "cap-3",
        "label": "Perfiles de los actores",
        "number": "1.5",
        "children": [
          {
            "id": "cap-3-estudiante",
            "label": "Estudiante Lenista",
            "number": "1.5.1"
          },
          {
            "id": "cap-3-personero",
            "label": "Personero o personera estudiantil",
            "number": "1.5.2"
          },
          {
            "id": "cap-3-docente",
            "label": "Docente Lenista",
            "number": "1.5.3"
          },
          {
            "id": "cap-3-acudiente",
            "label": "Padre, madre y/o acudiente",
            "number": "1.5.4"
          },
          {
            "id": "cap-3-egresado",
            "label": "Egresado Lenista",
            "number": "1.5.5"
          }
        ]
      }
    ]
  },
  {
    "title": "Capítulo 2: Gobierno escolar y organización institucional",
    "collapsible": true,
    "items": [
      {
        "id": "cap-organigrama",
        "label": "Organigrama estructural de la institución",
        "number": "2.1"
      },
      {
        "id": "cap-gobierno",
        "label": "Estructura del gobierno escolar",
        "number": "2.2",
        "children": [
          {
            "id": "cap-gobierno-rector",
            "label": "El Rector",
            "number": "2.2.1"
          },
          {
            "id": "cap-gobierno-directivo",
            "label": "El Consejo Directivo",
            "number": "2.2.2"
          },
          {
            "id": "cap-gobierno-academico",
            "label": "El Consejo Académico",
            "number": "2.2.3"
          }
        ]
      },
      {
        "id": "cap-estamentos",
        "label": "Estamentos e instancias de participación y control",
        "number": "2.3",
        "children": [
          {
            "id": "cap-estamentos-consejo-estudiantes",
            "label": "Consejo de Estudiantes y VDI",
            "number": "2.3.1"
          },
          {
            "id": "cap-estamentos-personero",
            "label": "Personero(a) Estudiantil",
            "number": "2.3.2"
          },
          {
            "id": "cap-estamentos-contralor",
            "label": "Contralor(a) Estudiantil",
            "number": "2.3.3"
          },
          {
            "id": "cap-estamentos-ces",
            "label": "Comité Escolar de Convivencia",
            "number": "2.3.4"
          },
          {
            "id": "cap-estamentos-comisiones",
            "label": "Comisiones de Evaluación y Promoción",
            "number": "2.3.5"
          },
          {
            "id": "cap-estamentos-consejo-padres",
            "label": "Consejo de Padres de Familia",
            "number": "2.3.6"
          },
          {
            "id": "cap-estamentos-asociacion-padres",
            "label": "Asociación de Padres de Familia",
            "number": "2.3.7"
          },
          {
            "id": "cap-estamentos-exalumnos",
            "label": "Asociación de exalumnos y sector productivo",
            "number": "2.3.8"
          }
        ]
      },
      {
        "id": "cap-11",
        "label": "Inscripción, admisión y matrícula",
        "number": "a"
      },
      {
        "id": "cap-4",
        "label": "Reglas de presentación",
        "number": "b"
      },
      {
        "id": "cap-5",
        "label": "Uniformes",
        "number": "c"
      },
      {
        "id": "cap-6",
        "label": "Decomisación de bienes",
        "number": "d"
      },
      {
        "id": "cap-7",
        "label": "Enseres escolares",
        "number": "e"
      },
      {
        "id": "cap-8",
        "label": "Horario y asistencia",
        "number": "f"
      }
    ]
  },
  {
    "title": "Capítulo 3: Derechos y deberes de los educandos",
    "collapsible": true,
    "items": [
      {
        "id": "cap-9",
        "label": "Derechos de los educandos",
        "number": "3.1"
      },
      {
        "id": "cap-10",
        "label": "Derechos jurídicos",
        "number": "3.2"
      },
      {
        "id": "cap-12",
        "label": "Orientación sexual e identidad",
        "number": "3.3"
      },
      {
        "id": "cap-13",
        "label": "Deberes académicos y de convivencia",
        "number": "3.4"
      },
      {
        "id": "cap-14",
        "label": "Deberes del estudiante Lenista",
        "number": "3.5"
      },
      {
        "id": "cap-15",
        "label": "Faltas: leves, graves y gravísimas",
        "number": "3.6",
        "className": "nav-item--red"
      }
    ]
  },
  {
    "title": "Capítulo 4: Procedimientos de concertación",
    "collapsible": true,
    "items": [
      {
        "id": "cap-16",
        "label": "Solución de conflictos",
        "number": "4.1"
      },
      {
        "id": "cap-17",
        "label": "Protocolo de atención",
        "number": "4.2"
      },
      {
        "id": "cap-18",
        "label": "Uso de dispositivos móviles",
        "number": "4.3"
      },
      {
        "id": "cap-19",
        "label": "Prevención del abuso sexual",
        "number": "4.4"
      },
      {
        "id": "cap-20",
        "label": "Protocolo de sustancias prohibidas",
        "number": "4.5"
      },
      {
        "id": "cap-21",
        "label": "Comité de convivencia",
        "number": "4.6"
      },
      {
        "id": "cap-22",
        "label": "Rutas de atención",
        "number": "4.7"
      },
      {
        "id": "cap-23",
        "label": "Infracciones administrativas",
        "number": "4.8"
      }
    ]
  },
  {
    "title": "Capítulo 5: Docentes",
    "collapsible": true,
    "items": [
      {
        "id": "cap-24",
        "label": "Derechos de docentes",
        "number": "5.1"
      },
      {
        "id": "cap-25",
        "label": "Deberes de docentes",
        "number": "5.2"
      },
      {
        "id": "cap-26",
        "label": "Deberes del director de grupo",
        "number": "5.3"
      },
      {
        "id": "cap-27",
        "label": "El rector",
        "number": "5.4"
      },
      {
        "id": "cap-28",
        "label": "Coordinador académico",
        "number": "5.5"
      },
      {
        "id": "cap-29",
        "label": "Coordinador de área",
        "number": "5.6"
      },
      {
        "id": "cap-30",
        "label": "Orientador escolar",
        "number": "5.7"
      }
    ]
  },
  {
    "title": "Capítulo 6: Padres de familia",
    "collapsible": true,
    "items": [
      {
        "id": "cap-31",
        "label": "Perfil de padres y acudientes",
        "number": "6.1"
      },
      {
        "id": "cap-32",
        "label": "Derechos de los padres",
        "number": "6.2"
      },
      {
        "id": "cap-33",
        "label": "Deberes de los padres",
        "number": "6.3"
      },
      {
        "id": "cap-34",
        "label": "Escuela de padres",
        "number": "6.4"
      },
      {
        "id": "cap-35",
        "label": "Talleres a padres de familia",
        "number": "6.5"
      },
      {
        "id": "cap-36",
        "label": "Manejo de inasistencias",
        "number": "6.6"
      },
      {
        "id": "cap-37",
        "label": "Procedimientos PQRS",
        "number": "6.7"
      }
    ]
  },
  {
    "title": "Capítulo 7: Personal administrativo",
    "collapsible": true,
    "items": [
      {
        "id": "cap-38",
        "label": "Personal administrativo",
        "number": "7.1"
      }
    ]
  },
  {
    "title": "Capítulo 8: Gobierno escolar y voceros",
    "collapsible": true,
    "items": [
      {
        "id": "cap-39",
        "label": "Información general / gobierno escolar",
        "number": "8.1"
      },
      {
        "id": "cap-40",
        "label": "Consejo académico",
        "number": "8.2"
      },
      {
        "id": "cap-41",
        "label": "Consejo de estudiantes",
        "number": "8.3"
      },
      {
        "id": "cap-42",
        "label": "Consejo de padres de familia",
        "number": "8.4"
      },
      {
        "id": "cap-43",
        "label": "Comisión de evaluación y promoción",
        "number": "8.5"
      },
      {
        "id": "cap-44",
        "label": "Personero estudiantil",
        "number": "8.6"
      },
      {
        "id": "cap-45",
        "label": "Asociación de exalumnos",
        "number": "8.7"
      },
      {
        "id": "cap-46",
        "label": "Contralor estudiantil",
        "number": "8.8"
      }
    ]
  },
  {
    "title": "Capítulo 9: Servicios y evaluación institucional",
    "collapsible": true,
    "items": [
      {
        "id": "cap-47",
        "label": "Servicios para educandos",
        "number": "9.1"
      },
      {
        "id": "cap-48",
        "label": "Normas de conducta",
        "number": "9.2"
      },
      {
        "id": "cap-49",
        "label": "Sistema de evaluación institucional - SIEE",
        "number": "9.3"
      },
      {
        "id": "cap-50",
        "label": "Criterios de evaluación y promoción",
        "number": "9.4"
      },
      {
        "id": "cap-51",
        "label": "Acciones de seguimiento",
        "number": "9.5"
      },
      {
        "id": "cap-52",
        "label": "Estrategias de apoyo",
        "number": "9.6"
      },
      {
        "id": "cap-53",
        "label": "Acciones para procesos educativos",
        "number": "9.7"
      },
      {
        "id": "cap-54",
        "label": "Definiciones de rutas de atención",
        "number": "9.8"
      },
      {
        "id": "cap-55",
        "label": "Directorio telefónico",
        "number": "9.9"
      }
    ]
  }
];

export default navigation;
