/**
 * Système de navigation fluide optimisé
 * Évite la page blanche lors des clics sur les liens de navigation
 * Garde toutes les animations au scroll intactes
 */

export class SmoothNavigation {
  private isTransitioning = false;
  private readonly transitionDuration = 200; // ms

  constructor() {
    this.init();
  }

  private init(): void {
    // Attendre que le DOM et les fonts soient chargés
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  private async setup(): Promise<void> {
    // Attendre que les fonts soient chargées pour éviter les sauts
    await document.fonts.ready;

    // Précharger les styles critiques
    this.preloadStyles();

    // Intercepter tous les clics sur les liens de navigation
    this.setupNavigationLinks();
  }

  private preloadStyles(): void {
    // Forcer le navigateur à calculer les styles des sections animées
    const animatedElements = document.querySelectorAll(
      '[class*="slide-in"], [class*="fade-in"], [class*="scale-up"]'
    );
    
    animatedElements.forEach((element) => {
      // Force un reflow pour précharger les styles
      window.getComputedStyle(element).opacity;
    });
  }

  private setupNavigationLinks(): void {
    // Sélectionner tous les liens internes
    const links = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
    
    links.forEach((link) => {
      link.addEventListener('click', (e) => this.handleNavigation(e));
    });
  }

  private async handleNavigation(e: Event): Promise<void> {
    if (this.isTransitioning) return;

    const link = e.currentTarget as HTMLAnchorElement;
    const href = link.getAttribute('href');
    
    if (!href) return;

    // Extraire l'ID de la cible (supporte # et /#)
    const targetId = href.replace(/^\/?#/, '#');
    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    // Empêcher le comportement par défaut
    e.preventDefault();
    this.isTransitioning = true;

    try {
      await this.smoothTransition(targetElement);
    } finally {
      this.isTransitioning = false;
    }
  }

  private async smoothTransition(targetElement: Element): Promise<void> {
    const mainContent = document.querySelector('main') || document.body;

    // Phase 1 : Fade out rapide
    mainContent.style.transition = `opacity ${this.transitionDuration}ms ease-out`;
    mainContent.style.opacity = '0.3';

    // Attendre la fin du fade out
    await this.wait(this.transitionDuration);

    // Phase 2 : Scroll instantané pendant que c'est fade
    targetElement.scrollIntoView({
      behavior: 'instant',
      block: 'start'
    });

    // Petit délai pour laisser le DOM se stabiliser
    await this.wait(50);

    // Phase 3 : Fade in
    mainContent.style.opacity = '1';

    // Attendre la fin du fade in
    await this.wait(this.transitionDuration);

    // Nettoyer les styles inline
    mainContent.style.transition = '';
    mainContent.style.opacity = '';
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Méthode publique pour naviguer programmatiquement
   */
  public async navigateTo(targetId: string): Promise<void> {
    if (this.isTransitioning) return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    this.isTransitioning = true;
    try {
      await this.smoothTransition(targetElement);
    } finally {
      this.isTransitioning = false;
    }
  }
}

// Instance singleton
let navigationInstance: SmoothNavigation | null = null;

/**
 * Initialiser le système de navigation fluide
 */
export function initSmoothNavigation(): SmoothNavigation {
  if (!navigationInstance) {
    navigationInstance = new SmoothNavigation();
  }
  return navigationInstance;
}

/**
 * Obtenir l'instance de navigation
 */
export function getNavigationInstance(): SmoothNavigation | null {
  return navigationInstance;
}
