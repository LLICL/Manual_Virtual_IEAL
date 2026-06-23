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
  function showSection(sectionId) {
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
    
    // Scroll al inicio del contenido
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
