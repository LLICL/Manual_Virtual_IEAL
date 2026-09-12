document.addEventListener('DOMContentLoaded', function() {
  
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sectionPanels = document.querySelectorAll('.section-panel');
  const navItems = document.querySelectorAll('.nav-item');
  
  // Abrir sidebar
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  // Cerrar sidebar
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  // Toggle sidebar con botón de menú
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  
  // Cerrar sidebar con overlay
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // Cambiar sección con tabs
  function showSection(sectionId, skipScroll) {
    // Ocultar todas las secciones
    sectionPanels.forEach(panel => {
      panel.classList.remove('active');
    });
    
    // Desactivar todos los tabs
    tabBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Desactivar todos los nav items
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    
    // Activar tab correspondiente
    const targetTab = document.querySelector(`.tab-btn[data-tab="${sectionId}"]`);
    if (targetTab) {
      targetTab.classList.add('active');
    }
    
    // Activar nav item correspondiente
    const targetNav = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
    if (targetNav) {
      targetNav.classList.add('active');
    }
    
    // Cerrar sidebar en móvil
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
    
    // Scroll a la sección activa (descontando header fijo 72px)
    if (targetSection && !skipScroll) {
      var headerH = 72;
      var rect = targetSection.getBoundingClientRect();
      var top = rect.top + window.pageYOffset - headerH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }
  
  // Event listeners para tabs
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-tab');
      showSection(sectionId);
    });
  });
  
  // Event listeners para nav items
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
    });
  });
  
  // Exponer showSection globalmente para búsqueda
  window.showSection = showSection;
  
  // Profile tabs functionality
  const profileTabBtns = document.querySelectorAll('.profile-tab-btn');
  const profileTabContents = document.querySelectorAll('.profile-tab-content');
  
  profileTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      profileTabBtns.forEach(b => b.classList.remove('active'));
      profileTabContents.forEach(c => c.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Process buttons functionality (Inscripcion, Admision, Matricula)
  const processTabBtns = document.querySelectorAll('.process-tab-btn');
  const processTabContents = document.querySelectorAll('.process-tab-content');
  
  processTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      processTabBtns.forEach(b => b.classList.remove('active'));
      processTabContents.forEach(c => c.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Derechos tabs functionality (cap-9)
  const derechosTabBtns = document.querySelectorAll('.derechos-tab-btn');
  const derechosTabContents = document.querySelectorAll('.derechos-tab-content');
  
  derechosTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      derechosTabBtns.forEach(b => b.classList.remove('active'));
      derechosTabContents.forEach(c => c.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Deberes tabs functionality (cap-13, cap-14)
  document.querySelectorAll('.deberes-tabs-bar').forEach(function(bar) {
    const btns = bar.querySelectorAll('.deberes-tab-btn');
    const contents = bar.parentElement.querySelectorAll('.deberes-tab-content');

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        btns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });

  // Faltas tabs functionality (cap-15)
  document.querySelectorAll('.faltas-tabs-bar').forEach(function(bar) {
    const btns = bar.querySelectorAll('.faltas-tab-btn');
    const contents = bar.parentElement.querySelectorAll('.faltas-tab-content');

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        btns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });

  // Etapas del Procedimiento Disciplinario (cap-16 Solución de Conflictos)
  document.querySelectorAll('.etapas-tabs-bar').forEach(function(bar) {
    const btns = bar.querySelectorAll('.etapas-tab-btn');
    const contents = bar.parentElement.querySelectorAll('.etapas-tab-content');

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        btns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });

  // Etapas principales de cap-16 (Etapas del Procedimiento / Etapas del Debido Proceso)
  document.querySelectorAll('.proc-tabs-bar').forEach(function(bar) {
    const btns = bar.querySelectorAll('.proc-tab-btn');
    const contents = bar.parentElement.querySelectorAll('.proc-tab-content');

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        btns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });

  // Protocolos de Atención por Tipo (cap-17)
  document.querySelectorAll('.tipo-tabs-bar').forEach(function(bar) {
    const btns = bar.querySelectorAll('.tipo-tab-btn');
    const contents = bar.parentElement.querySelectorAll('.tipo-tab-content');

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        btns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  });
});

function openModal(type) {
  const modal = document.getElementById('infoModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  if (type === 'higiene') {
    title.textContent = 'Higiene Ambiental';
    body.innerHTML = `<p>Nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; cuenta con el proyecto obligatorio Ambiental, que vela por mantener, las instalaciones físicas, con las adecuadas condiciones higiénicas para el sano desarrollo del personal en general y la planta docente y obviamente de los educandos.</p>`;
  } else if (type === 'epidemiologico') {
    title.textContent = 'Prevención de Riesgo Epidemiológico';
    body.innerHTML = `<p>Teniendo en cuenta, que en toda comunidad existe el riesgo de contagio epidemiológico solicitamos a los padres cumplir con las siguientes medidas:</p>
      <ul style="list-style: none; padding-left: 0; margin-top: 12px;">
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; No podrá ingresar ningún educando con fiebre, sea por la causa que fuere, por lo que el director de Grupo, está en la obligación de reportarlo a la coordinación para que se llame el padre de familia y devolverlo a su hogar, entregándolo a su familiar o acudiente.</li>
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; Enviar al niño(a) sin enfermedades (gripes, alergias, virales y o eruptivas) entre otras, ya que se atenta contra su bienestar y el de los demás, generando un riesgo de epidemia. El niño(a) deberá presentar el alta médica el mismo día que se reintegre a clases. Si su hijo presenta sintomatología gripal déjelo en casa por un lapso mínimo de tres días, esto le permitirá una recuperación completa y evitará el contagio de los demás educandos al interior de la escuela.</li>
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; Recoger, lo más pronto posible al niño o niña, cuando Nuestra Institución educativa oficial, comunique su estado de enfermedad; remitirlo al pediatra y enviar el certificado médico en caso de incapacidad.</li>
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; Toda enfermedad infectocontagiosa, será reportada a la Secretaria de Salud del MUNICIPIO DE SINCELEJO; con el fin de llevar el control epidemiológico.</li>
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; Se realizarán revisiones durante el año escolar con el fin de evitar la pediculosis (piojos) y se realizaran charlas para que el padre o acudiente atienda la situación. Todo caso positivo será reportado al acudiente y aislado hasta que se le brindé el tratamiento adecuado y oportuno.</li>
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; En conjunto con la Secretaria de Salud del MUNICIPIO DE SINCELEJO; se realizarán campañas de vacunación, durante el año escolar, y se exigirá el carné de vacunación a todo educando.</li>
        <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">&bullet; Se solicitará, carné de vacunación a los menores de cinco años dentro del proceso de matrícula</li>
      </ul>`;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

function toggleCorte() {
  const content = document.getElementById('corteContent');
  const arrow = document.getElementById('corteArrow');
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';
  }
}

function toggleSidebarGroup(el) {
  const section = el.closest('.nav-section');
  if (!section) return;
  const items = section.querySelectorAll('.nav-item');
  const icon = el.querySelector('.toggle-icon');
  let hidden = false;
  items.forEach(function(item) {
    if (item.style.display === 'none') {
      item.style.display = '';
      hidden = true;
    } else {
      item.style.display = 'none';
    }
  });
  if (icon) {
    icon.textContent = hidden ? '\u25BC' : '\u25B6';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.toggle-title').forEach(function(title) {
    const section = title.closest('.nav-section');
    if (section) {
      const items = section.querySelectorAll('.nav-item');
      items.forEach(function(item) { item.style.display = 'none'; });
      const icon = title.querySelector('.toggle-icon');
      if (icon) icon.textContent = '\u25B6';
    }
  });
});

// Búsqueda en portada
(function() {
  var searchInput = document.getElementById('homeSearchInput');
  var resultsContainer = document.getElementById('homeSearchResults');
  if (!searchInput || !resultsContainer) return;

  // Normaliza texto: quita tildes y minúsculas, para búsqueda sin acentos
  function normalize(str) {
    return (str || '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Pestañas internas que puede contener una sección
  var TAB_CONTENT_SEL = '.profile-tab-content, .process-tab-content, .derechos-tab-content, ' +
    '.deberes-tab-content, .faltas-tab-content, .etapas-tab-content, .proc-tab-content';
  var TAB_BTN_SEL = '.profile-tab-btn, .process-tab-btn, .derechos-tab-btn, ' +
    '.deberes-tab-btn, .faltas-tab-btn, .etapas-tab-btn, .proc-tab-btn, .tipo-tab-btn';
  var TAB_BAR_SEL = '.profile-tabs-bar, .process-tabs-bar, .derechos-tabs-bar, ' +
    '.deberes-tabs-bar, .faltas-tabs-bar, .etapas-tabs-bar, .proc-tabs-bar, .tipo-tabs-bar';

  // Etiqueta de la pestaña contenedora de un bloque
  function getTabLabel(block) {
    var tabContent = block.closest(TAB_CONTENT_SEL);
    if (!tabContent) return '';
    var btn = tabContent.parentElement.querySelector('[data-tab="' + tabContent.id + '"]');
    return btn ? btn.textContent.trim() : '';
  }

  // Activa la pestaña interna (si existe) que contiene un bloque
  function activateTab(block) {
    var tabContent = block.closest(TAB_CONTENT_SEL);
    if (!tabContent) return;
    var panel = tabContent.closest('.section-panel');
    var btn = panel ? panel.querySelector('[data-tab="' + tabContent.id + '"]') : null;
    if (btn) {
      var bar = btn.closest(TAB_BAR_SEL);
      if (bar) bar.querySelectorAll(TAB_BTN_SEL).forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    }
    var parent = tabContent.parentElement;
    parent.querySelectorAll(TAB_CONTENT_SEL).forEach(function(c) { c.classList.remove('active'); });
    tabContent.classList.add('active');
  }

  // Limpia resaltados previos, restaurando los nodos de texto
  function clearHighlights() {
    document.querySelectorAll('mark.search-highlight').forEach(function(mark) {
      var parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  // Resalta todas las apariciones (sin acentos) de `query` dentro de section
  function highlightIn(section, query) {
    var normalizedQuery = normalize(query);
    if (!normalizedQuery) return;

    var walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node) {
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var collected = [];
    while (walker.nextNode()) {
      var node = walker.currentNode;
      // No volver a entrar en un mark ya creado
      if (node.parentNode && node.parentNode.classList && node.parentNode.classList.contains('search-highlight')) {
        continue;
      }
      var data = buildIndexMap(node.nodeValue);
      var pos = 0;
      while (true) {
        var found = data.text.indexOf(normalizedQuery, pos);
        if (found === -1) break;
        var startOrig = data.map[found];
        var endOrig = found + normalizedQuery.length - 1 < data.map.length ?
          data.map[found + normalizedQuery.length - 1] + 1 : node.nodeValue.length;
        if (startOrig < endOrig) {
          collected.push({ node: node, start: startOrig, end: endOrig });
        }
        pos = found + normalizedQuery.length;
      }
    }

    // Agrupa los matches por nodo (Map por identidad) para construir el reemplazo con todas las marcas a la vez
    var byNode = new Map();
    collected.forEach(function(match) {
      var arr = byNode.get(match.node);
      if (!arr) { arr = []; byNode.set(match.node, arr); }
      arr.push(match);
    });

    byNode.forEach(function(ranges, node) {
      var text = node.nodeValue;
      ranges.sort(function(a, b) { return a.start - b.start; });

      // Fusiona rangos solapados/adyacentes
      var merged = [];
      ranges.forEach(function(m) {
        var last = merged[merged.length - 1];
        if (last && m.start <= last.end) {
          last.end = Math.max(last.end, m.end);
        } else {
          merged.push({ start: m.start, end: m.end });
        }
      });

      var fragment = document.createDocumentFragment();
      var cursor = 0;
      merged.forEach(function(m) {
        if (m.start > cursor) fragment.appendChild(document.createTextNode(text.substring(cursor, m.start)));
        var mark = document.createElement('mark');
        mark.className = 'search-highlight';
        mark.textContent = text.substring(m.start, m.end);
        fragment.appendChild(mark);
        cursor = m.end;
      });
      if (cursor < text.length) fragment.appendChild(document.createTextNode(text.substring(cursor)));

      if (node.parentNode) {
        node.parentNode.replaceChild(fragment, node);
        node.parentNode.normalize();
      }
    });
  }

  // Mapea posición normalizada -> posición original del texto
  function buildIndexMap(str) {
    var normalized = '';
    var map = [];
    for (var i = 0; i < str.length; i++) {
      var n = str[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (n.length === 0) {
        map.push(null);
      } else {
        normalized += n.toLowerCase();
        map.push(i);
      }
    }
    return { text: normalized, map: map };
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Fragmento alrededor de la primera aparición (sin acentos)
  function snippetAround(text, query) {
    var normText = normalize(text);
    var normQuery = normalize(query);
    var idx = normText.indexOf(normQuery);
    if (idx === -1) idx = 0;
    var start = Math.max(0, idx - 50);
    var end = Math.min(text.length, idx + query.length + 50);
    return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
  }

  // Construye el índice de búsqueda: un resultado potencial por bloque de texto
  var blockData = [];
  document.querySelectorAll('.section-panel').forEach(function(sec) {
    if (sec.id === 'cap-home') return;
    var titleEl = sec.querySelector('.section-title');
    var sectionName = titleEl ? titleEl.textContent.trim() : sec.id;

    // Bloques de hoja: elementos de texto que no contienen otros bloques
    sec.querySelectorAll('p, li, blockquote, td, th').forEach(function(block) {
      if (block.closest('select, option, button')) return;
      if (block.querySelector('p, li, blockquote, table, td, th, button')) return;
      var text = block.textContent.replace(/\s+/g, ' ').trim();
      if (!text) return;
      blockData.push({ block: block, sectionId: sec.id, sectionName: sectionName, text: text });
    });
  });

  searchInput.addEventListener('input', function() {
    var query = this.value.trim();
    if (query.length < 3) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }
    var normalizedQuery = normalize(query);

    // Recolecta todas las apariciones
    var matches = [];
    blockData.forEach(function(d) {
      if (normalize(d.text).indexOf(normalizedQuery) !== -1) {
        matches.push(d);
      }
    });

    // Agrupa: máximo 6 por sección y 40 en total, en orden DOM
    var perSection = {};
    var finalResults = [];
    matches.forEach(function(d) {
      if (finalResults.length >= 40) return;
      var count = perSection[d.sectionId] || 0;
      if (count >= 6) return;
      perSection[d.sectionId] = count + 1;
      finalResults.push(d);
    });

    if (finalResults.length === 0) {
      resultsContainer.innerHTML = '<div class="home-search-no-results">No se encontraron resultados para "' +
        escapeHtml(query) + '"</div>';
    } else {
      var html = '';
      finalResults.forEach(function(r) {
        var label = r.sectionName;
        var tabLabel = getTabLabel(r.block);
        if (tabLabel) label += ' · ' + tabLabel;
        html += '<a class="home-search-result-item" href="#" data-section="' + r.sectionId + '">';
        html += '<span class="home-search-result-section">' + escapeHtml(label) + '</span>';
        html += escapeHtml(snippetAround(r.text, query));
        html += '</a>';
      });
      resultsContainer.innerHTML = html;
      // Guarda la referencia al bloque de cada resultado en el propio elemento
      var anchors = resultsContainer.querySelectorAll('.home-search-result-item');
      finalResults.forEach(function(r, i) {
        if (anchors[i]) anchors[i]._blockRef = r.block;
      });
    }
    resultsContainer.style.display = 'block';
  });

  resultsContainer.addEventListener('click', function(e) {
    var item = e.target.closest('.home-search-result-item');
    if (!item) return;
    e.preventDefault();
    var sectionId = item.getAttribute('data-section');
    var block = item._blockRef;
    var query = searchInput.value.trim();

    // Navega a la sección sin scroll (lo haremos al resaltado)
    showSection(sectionId, true);

    // Activa la pestaña interna correcta
    if (block) activateTab(block);

    // Resalta y hace scroll al primer match
    clearHighlights();
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
      highlightIn(targetSection, query);
      var firstMark = targetSection.querySelector('mark.search-highlight');
      if (firstMark) {
        firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    searchInput.value = '';
    resultsContainer.style.display = 'none';
    resultsContainer.innerHTML = '';
  });

  document.querySelectorAll('.home-card[data-nav], .home-directory-btn[data-nav]').forEach(function(card) {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      var sectionId = this.getAttribute('data-nav');
      showSection(sectionId);
    });
  });
})();

// Botón flotante volver al inicio
(function() {
  var fab = document.getElementById('homeFab');
  if (!fab) return;

  fab.addEventListener('click', function() {
    showSection('cap-home');
  });

  var observer = new MutationObserver(function() {
    var homeSection = document.getElementById('cap-home');
    if (homeSection && homeSection.classList.contains('active')) {
      fab.classList.remove('visible');
    } else {
      fab.classList.add('visible');
    }
  });

  var homeSection = document.getElementById('cap-home');
  if (homeSection) {
    observer.observe(homeSection, { attributes: true, attributeFilter: ['class'] });
  }
})();
