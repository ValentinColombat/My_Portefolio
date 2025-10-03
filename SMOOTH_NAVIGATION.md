# Système de Navigation Fluide

## 🎯 Objectif
Éviter la page blanche lors des clics sur les liens de navigation tout en conservant toutes les animations au scroll.

## ✨ Fonctionnalités

### Navigation au scroll (comportement normal)
- ✅ Toutes vos animations Intersection Observer fonctionnent normalement
- ✅ Image glisse de gauche, texte de droite, fade-in, scale-up, etc.
- ✅ Aucun changement dans le comportement

### Navigation par clic sur lien
1. **Fade out rapide** (200ms) - l'écran devient légèrement transparent
2. **Scroll instantané** vers la section cible
3. **Fade in rapide** (200ms) - retour à l'opacité normale
4. **Déclenchement des animations** - les animations Intersection Observer se lancent normalement

## 🔧 Configuration

### Durée de transition
Par défaut : **200ms** (rapide et fluide)

Pour modifier, éditez `src/utils/smoothNavigation.ts` :
```typescript
private readonly transitionDuration = 200; // Changez cette valeur
```

### Liens supportés
Le système intercepte automatiquement :
- `href="#section"` - liens internes standards
- `href="/#section"` - liens depuis d'autres pages

### Utilisation programmatique
```typescript
import { getNavigationInstance } from './utils/smoothNavigation';

// Naviguer vers une section
const nav = getNavigationInstance();
nav?.navigateTo('#about');
```

## 📊 Performance

- **Préchargement** : Les styles sont préchargés au démarrage
- **Fonts ready** : Attend que les fonts soient chargées
- **Optimisé** : Utilise `behavior: 'instant'` pendant le fade
- **Léger** : ~3KB minifié

## 🎨 Compatibilité

- ✅ React Router
- ✅ Intersection Observer API
- ✅ Toutes les animations CSS existantes
- ✅ Navigation par hash (#)
- ✅ Responsive

## 🐛 Debug

Si les animations ne se déclenchent pas après navigation :
1. Vérifiez que les sections ont les bonnes classes d'animation
2. Vérifiez que les hooks `useIntersectionObserver` sont bien initialisés
3. Augmentez le délai dans `smoothTransition` (ligne `await this.wait(50)`)

## 📝 Notes

- Le système est un singleton - une seule instance pour toute l'app
- Les transitions sont bloquées si une transition est déjà en cours
- Compatible avec `prefers-reduced-motion`
