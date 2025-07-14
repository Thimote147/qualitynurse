# Quality Nurse - Site Web Moderne

Site web moderne et responsive pour Quality Nurse, service de soins infirmiers et hospitaliers à domicile en Belgique.

## 🏥 À propos

Quality Nurse est une société spécialisée dans les soins infirmiers à domicile, fondée par Jean-Charles Tonnelle. Nous offrons des services professionnels de qualité avec plus de 20 années d'expérience.

## 🚀 Technologies Utilisées

- **React 18** - Framework UI moderne
- **TypeScript** - Typage statique pour plus de sécurité
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool ultra-rapide avec SWC
- **Lucide React** - Icônes modernes et légères

## 📁 Structure du Projet

```
src/
├── components/           # Composants React
│   ├── sections/        # Sections de page
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── QualityNurseWebsite.tsx
├── types/               # Définitions TypeScript
│   └── index.ts
├── data/                # Données statiques
│   └── qualityNurse.ts
├── App.tsx              # Composant principal
└── index.css           # Styles globaux
```

## 🛠️ Installation et Développement

### Prérequis
- Node.js 16+ 
- npm 8+

### Installation
```bash
# Cloner le repository
git clone [url-du-repo]
cd qualitynurse-website

# Installer les dépendances
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:3000
```

### Build de production
```bash
# Générer la version optimisée
npm run build

# Prévisualiser le build
npm run preview
```

## 🎨 Fonctionnalités

### ✨ Design Moderne
- **Responsive** - Optimisé pour mobile, tablette et desktop
- **Animations fluides** - Micro-interactions et transitions
- **Glassmorphism** - Effets de transparence modernes
- **Gradients dynamiques** - Couleurs médicales (emerald/teal/cyan)

### 🏥 Sections Principales
- **Accueil** - Hero avec appel à l'action
- **À propos** - Présentation de l'équipe et philosophie
- **Prestations** - Services avec filtrage par catégorie
- **Services Extra** - Aide à domicile et facturation
- **Secteur** - Zones de couverture géographique
- **Témoignages** - Avis clients avec étoiles
- **FAQ** - Questions fréquentes accordéon
- **Liens Utiles** - Ressources externes categorisées
- **Contact** - Formulaire et informations

### 🚨 Fonctionnalités UX
- **Bouton d'urgence flottant** - Appel direct 24h/24
- **Navigation sticky** - Menu adaptatif au scroll
- **Table des matières** - Navigation flottante (desktop)
- **URLs fragmentées** - Liens directs partageables
- **Scroll fluide** - Navigation entre sections
- **Formulaire de contact** - Validation et état

### 📱 Optimisations
- **Performance** - Code splitting et lazy loading
- **SEO** - Structure HTML sémantique
- **Accessibilité** - ARIA labels et contraste
- **PWA-ready** - Structure pour Progressive Web App

## 🎯 Call-to-Actions

Le site inclut plusieurs CTA stratégiques :
- Bouton d'urgence permanent (rouge pulsant)
- Appel direct depuis le hero
- CTA dans chaque section
- Formulaire de contact optimisé

## 📊 Données et Contenu

Toutes les données sont centralisées dans `src/data/qualityNurse.ts` :
- Services médicaux (11 prestations categorisées)
- Témoignages clients (4 avis 5 étoiles)
- FAQ (6 questions essentielles)
- Liens utiles (6 ressources externes)
- Informations de contact I.N.A.M.I.

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement avec hot reload
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # Vérifier le code
npm run lint:fix     # Corriger automatiquement
npm run type-check   # Vérifier les types TypeScript
npm run format       # Formater le code avec Prettier
npm run clean        # Nettoyer les caches
```

## 🌐 Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour React)
- **Netlify** 
- **GitHub Pages**
- **Serveur web** classique

Build optimisé inclut :
- Minification du code
- Optimisation des images
- Code splitting
- Compression gzip

## 📈 Performance

- **Lighthouse Score** : 90+ sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🤝 Contact

**Quality Nurse**
- 📞 Téléphone : 0484/883.799 (24h/24)
- 📧 Email : info@qualitynurse.be
- 📍 Adresse : rue des Cottages 82, 1180 Uccle
- 🏥 I.N.A.M.I. : 941 741 32 001

## 📄 Licence

© 2025 QualityNurse.be. Tous droits réservés.