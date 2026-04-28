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
});
