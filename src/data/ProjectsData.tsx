import projet1 from '../images/projects/projet1.png';
import projet3 from '../images/projects/projet3.jpg';
import projet4 from '../images/projects/projet4.png';
import projet5 from '../images/projects/projet5.png';
import projet6 from '../images/projects/projet-reseau.jpg';
import projet7 from '../images/projects/projet-mongo.png';
import projet8 from '../images/projects/projet-mtc.png';

export const projects = [
    {
        id: 1,
        title: "Génération et Résolution de Labyrinthe en C",
        image: projet1,
        description: "Développement d'un algorithme de génération et de résolution de labyrinthe en C.",
        technologies: ["C"],
        skills: ["realiser", "optimiser"],
        details: `
          Ce projet a été réalisé dans le cadre de mes études. L'objectif était de développer un programme en <strong style="color: #D32F2F;">langage C</strong> capable de générer des labyrinthes parfaits aléatoires et de les résoudre avec des algorithmes optimisés. 
          
          <h3 style="color: #D32F2F;">Compétence : Réaliser</h3>
          Pour la génération du labyrinthe, nous avons conçu un algorithme basé sur la <strong>fusion aléatoire des chemins</strong>. Chaque cellule se voit attribuer une valeur unique, et à chaque étape, un mur est sélectionné aléatoirement pour être ouvert. L'ouverture de ce mur relie deux cellules voisines, permettant ainsi de créer un chemin unique. L'algorithme vérifie systématiquement que les cellules reliées appartiennent à des chemins distincts afin de garantir l'absence de cycles, produisant ainsi un labyrinthe parfait.
      
          <h3 style="color: #F57C00;">Compétence : Optimiser</h3>
          Pour améliorer la performance, nous avons optimisé la recherche et l'union des ensembles représentant les chemins à l'aide de la structure <strong>Union-Find avec Path Compression</strong>. Cette technique a permis de réduire significativement la complexité des opérations, assurant une génération rapide même pour des labyrinthes de grande taille.
      
          <h3>Résultats et Bilan</h3>
          Le projet a abouti à un programme capable de générer des labyrinthes parfaits de différentes tailles et de les résoudre efficacement. Nous avons produit des captures d'écran démontrant la construction progressive du labyrinthe et les chemins trouvés par l'algorithme de résolution. Ce travail m'a permis de renforcer mes compétences en <strong style="color: #D32F2F;">développement algorithmique</strong> et en <strong style="color: #F57C00;">optimisation de code</strong> dans un contexte de résolution de problèmes complexes. De plus, la collaboration m'a appris à mieux organiser le travail en binôme et à communiquer efficacement pour atteindre un objectif commun.
      
          <h3>Langages Utilisés :</h3>
          <ul>
            <strong style="color: #D32F2F;">C</strong>
          </ul>
        `
    },

    {
        id: 2,
        title: "Jeu de Territoire en Python",
        image: projet3,
        description: "Développement d'un jeu de territoire en Python avec la bibliothèque locale Upemtk.",
        technologies: ["Python", "Upemtk"],
        skills: ["realiser", "optimiser", "collaborer"],
        details: `
          Ce projet a été réalisé en <strong style="color: #212121;">autonomie</strong> dans le cadre de mes études. L'objectif était de créer un jeu de territoire à deux joueurs en <strong style="color: #D32F2F;">Python</strong>, en utilisant la bibliothèque locale <strong style="color: #D32F2F;">Upemtk</strong>, inspirée de Tkinter, pour la gestion des interfaces graphiques. 
      
          <h3 style="color: #D32F2F;">Compétence : Réaliser</h3>
          Pour concevoir le jeu, j'ai structuré le projet en plusieurs modules afin de séparer la logique du jeu, la gestion des collisions et l'affichage graphique. La mécanique de base repose sur des <strong>zones de territoire</strong> représentées par des cercles colorés, où les joueurs tentent d'étendre leur territoire en plaçant des boules sur le terrain.
      
          <h3 style="color: #F57C00;">Compétence : Optimiser</h3>
          Un des défis principaux a été d'optimiser les détections de collision entre les boules et de gérer efficacement les interactions entre les joueurs. J'ai implémenté des structures de données adaptées pour améliorer les performances, réduisant ainsi le temps de calcul lors des vérifications de chevauchements.
      
          <h3 style="color: #212121;">Compétence : Collaborer</h3>
          Même si ce projet a été réalisé en autonomie, j'ai eu l'occasion d'échanger avec mes pairs pour tester les différentes mécaniques et recueillir des retours. Cela m'a permis d'affiner le gameplay et de corriger certains comportements inattendus.
      
          <h3>Fonctionnalités principales :</h3>
          <ul>
            <li>Deux joueurs s'affrontent pour contrôler le plus de territoire en plaçant des boules colorées.</li>
            <li>Si un joueur clique à l'intérieur d'une boule adverse, celle-ci se divise en deux boules plus petites.</li>
            <li>Différents modes de jeu : IA simple, obstacles sur le terrain, et variantes stratégiques.</li>
            <li>À la fin, le joueur ayant la plus grande surface colorée l'emporte.</li>
          </ul>
      
          <h3>Résultats et Bilan</h3>
          Le projet a abouti à un jeu fonctionnel et amusant, avec plusieurs modes de jeu et des mécaniques bien équilibrées. J'ai pu améliorer mes compétences en <strong style="color: #D32F2F;">développement Python</strong>, en <strong style="color: #F57C00;">gestion des collisions</strong> et en <strong style="color: #212121;">conception de jeux</strong>. De plus, j'ai appris à créer des interfaces utilisateur intuitives avec Upemtk, et à rendre le jeu accessible même pour des joueurs novices.
      
          <h3>Langages et Bibliothèques Utilisés :</h3>
          <ul>
            <strong style="color: #D32F2F;">Python</strong>
            <strong style="color: #D32F2F;">Upemtk</strong>
          </ul>
        `
    },
      
    {
        id: 3,
        title: "BackPack Hero en Java",
        image: projet4,
        description: "Développement d'un jeu 'BackPack Hero' en Java avec la bibliothèque Zen5.",
        technologies: ["Java", "Zen5"],
        skills: ["realiser", "optimiser", "collaborer"],
        details: `
          Ce projet a été réalisé en <strong style="color: #212121;">binôme</strong> dans le cadre de mes études. L'objectif était de développer un jeu solo en <strong style="color: #D32F2F;">Java</strong>, en utilisant la bibliothèque graphique <strong style="color: #D32F2F;">Zen5</strong> et en structurant le code selon le modèle <strong style="color: #F57C00;">Modèle-Vue-Contrôleur (MVC)</strong>.
      
          <h3 style="color: #D32F2F;">Compétence : Réaliser</h3>
          Nous avons conçu un jeu inspiré de "BackPack Hero", où le joueur incarne un héros qui explore un donjon rempli de monstres et de trésors. Le joueur doit gérer ses ressources, en particulier son sac à dos, pour progresser dans le jeu. L'un des défis majeurs a été la création d'un système de placement dynamique des tuiles, interagissant avec le héros et l'environnement du jeu. Le projet a été développé en respectant le modèle MVC pour séparer clairement la logique du jeu, l'affichage et la gestion des actions.
      
          <h3 style="color: #F57C00;">Compétence : Optimiser</h3>
          L'optimisation a été essentielle pour garantir une expérience fluide malgré la gestion de nombreuses entités interactives dans le jeu. Nous avons utilisé des techniques d'optimisation des ressources graphiques et de gestion de la mémoire pour s'assurer que le jeu fonctionne de manière efficace, même avec un grand nombre de tuiles et d'objets à l'écran.
      
          <h3 style="color: #212121;">Compétence : Collaborer</h3>
          La collaboration en binôme a été un aspect clé du projet. Nous avons travaillé ensemble sur la conception du système de jeu, en répartissant les tâches selon nos compétences. Mon binôme s'est concentré sur l'implémentation de la logique du jeu, tandis que je me suis chargé de l'intégration de l'interface graphique et du système de contrôle. Cette répartition nous a permis de travailler efficacement et d'intégrer rapidement nos contributions.
      
          <h3>Fonctionnalités principales :</h3>
          <ul>
            <li>Exploration d'un donjon avec des monstres et des trésors à découvrir.</li>
            <li>Gestion des ressources via le sac à dos du héros.</li>
            <li>Interaction dynamique des tuiles du terrain avec le joueur et son environnement.</li>
            <li>Développement basé sur le modèle MVC pour structurer le code et faciliter la maintenance.</li>
          </ul>
      
          <h3>Résultats et Bilan</h3>
          Le projet a abouti à un jeu fonctionnel et plaisant à jouer, respectant le concept du genre "rogue-like". Nous avons créé un environnement interactif avec une gestion complexe des ressources, ce qui a permis de renforcer mes compétences en <strong style="color: #D32F2F;">développement Java</strong>, en <strong style="color: #F57C00;">optimisation graphique</strong> et en <strong style="color: #212121;">modélisation de jeux</strong> en utilisant le modèle MVC. Ce projet m'a également appris à mieux travailler en équipe pour atteindre un objectif commun.
      
          <h3>Langages et Bibliothèques Utilisés :</h3>
          <ul>
            <strong style="color: #D32F2F;">Java</strong>
            <strong style="color: #D32F2F;">Zen5</strong>
          </ul>
        `
    },

    {
        id: 4,
        title: "Jeu Web et Mobile",
        image: projet5,
        description: "Réalisation d'une interface web et d'une application mobile contenant un jeu basé sur les chaînes de mots.",
        technologies: ["HTML", "CSS", "PHP", "JavaScript", "Java", "C"],
        skills: ["realiser", "optimiser", "collaborer"],
        details: `
          Ce projet a été réalisé en équipe en suivant un cahier des charges précis. L'objectif était de développer une application conviviale et responsive, accessible via une interface web et une application mobile, permettant de jouer à un jeu impliquant des chaînes de mots et leur similarité sémantique et orthographique, inspiré du jeu Cémantix.
      
          <h3 style="color: #D32F2F;">Compétence : Réaliser</h3>
          Nous avons créé une application complète, accessible à la fois sur le web et sur mobile. La partie web a été développée avec <strong style="color: #D32F2F;">HTML</strong> pour la structure, <strong style="color: #D32F2F;">CSS</strong> pour le style, et <strong style="color: #D32F2F;">JavaScript</strong> pour l'interactivité côté client. De plus, la logique côté serveur a été gérée avec <strong style="color: #F57C00;">PHP</strong>, et la base de données a été intégrée pour gérer les sessions de jeu.
      
          Pour la version mobile, l'application a été développée en <strong style="color: #212121;">Java</strong> à l'aide d'<strong style="color: #212121;">Android Studio</strong>, avec l'objectif d'offrir une expérience de jeu optimale. Le jeu lui-même a été conçu en <strong style="color: #F57C00;">C</strong>, en tirant parti de ses bibliothèques pour optimiser les performances et la gestion de la logique du jeu.
      
          <h3 style="color: #F57C00;">Compétence : Optimiser</h3>
          L'un des défis majeurs a été d'assurer la performance du jeu à la fois sur le web et sur mobile. Nous avons optimisé le code pour garantir une expérience fluide sur différents appareils, en particulier pour la gestion des ressources côté mobile. En C, nous avons utilisé des algorithmes efficaces pour garantir des réponses rapides et une bonne gestion des chaînes de mots.
      
          <h3 style="color: #212121;">Compétence : Collaborer</h3>
          Le travail d'équipe a été essentiel pour réussir ce projet. Nous avons réparti les tâches selon nos compétences, avec certains membres se concentrant sur l'interface utilisateur, d'autres sur le développement du jeu, et d'autres encore sur la gestion de la logique côté serveur. La communication constante et la gestion de projet agile nous ont permis de livrer une application fonctionnelle et robuste à la fin.
      
          <h3>Fonctionnalités principales :</h3>
          <ul>
            <li>Jeu basé sur des chaînes de mots avec une similarité sémantique et orthographique.</li>
            <li>Interface responsive accessible sur le web et via une application mobile.</li>
            <li>Développement du jeu en C pour de meilleures performances.</li>
            <li>Gestion des sessions de jeu et des données via PHP et base de données.</li>
          </ul>
      
          <h3>Résultats et Bilan</h3>
          Ce projet m'a permis de renforcer mes compétences en développement web et mobile, ainsi qu'en optimisation de jeux. La mise en place d'une application responsive et l'intégration de différents langages m'ont permis de développer une expérience utilisateur cohérente entre le web et le mobile. Le travail en équipe m'a appris à mieux organiser les tâches et à collaborer efficacement pour créer une application fonctionnelle et agréable à utiliser.
      
          <h3>Langages et Technologies Utilisés :</h3>
          <ul>
            <strong style="color: #D32F2F;">HTML</strong>
            <strong style="color: #D32F2F;">CSS</strong>
            <strong style="color: #F57C00;">PHP</strong>
            <strong style="color: #212121;">JavaScript</strong>
            <strong style="color: #D32F2F;">Java</strong>
            <strong style="color: #F57C00;">C</strong>
          </ul>
        `
    },   

    {
      id: 5,
      title: "Serveur Réseau avec Machines Virtuelles",
      image: projet6,
      description: "Construction d'un serveur réseau avec des machines virtuelles interconnectées pour la communication réseau.",
      technologies: ["Linux", "VirtualBox", "Networking", "Wireshark", "TCP/IP"],
      skills: ["administrer", "optimiser"],
      details: `
        Ce projet consistait à construire et configurer un serveur réseau en utilisant des machines virtuelles (VM) pour simuler un environnement réseau. L'objectif principal était de permettre à plusieurs machines virtuelles de communiquer entre elles en configurant un serveur central et en utilisant des protocoles réseau standard.
    
        <h3 style="color: #FBC02D;">Compétence : Administrer</h3>
        Le projet a impliqué la mise en place d'un environnement réseau complexe avec plusieurs machines virtuelles interconnectées. Chaque machine virtuelle a été configurée sous un système d'exploitation Linux, et le réseau a été configuré pour permettre la communication entre les VMs via des interfaces réseau virtuelles. Nous avons utilisé <strong style="color: #FBC02D;">VirtualBox</strong> pour la création et la gestion des machines virtuelles.
    
        La configuration du serveur central a permis d'assurer une communication fluide entre les VMs en utilisant des protocoles <strong style="color: #FBC02D;">TCP/IP</strong>, notamment la configuration des adresses IP statiques et des routes réseau. Le serveur central a été configuré pour gérer la communication réseau et distribuer des services à chaque machine virtuelle.
    
        <h3 style="color: #F57C00;">Compétence : Optimiser</h3>
        L'optimisation du réseau a été un aspect crucial de ce projet. Nous avons optimisé la bande passante et réduit les latences de communication entre les machines virtuelles en ajustant les paramètres de la carte réseau virtuelle dans VirtualBox. L'optimisation a également impliqué une gestion fine des ressources allouées aux VMs pour assurer une performance optimale.
        
        Le partage des tâches a permis de diviser le travail de manière fluide, en nous concentrant chacun sur des aspects spécifiques du projet (configuration des VMs, gestion du serveur, optimisation du réseau, analyse du trafic). La collaboration a également été facilitée par l'utilisation d'outils de gestion de versions pour partager nos configurations et scripts.
    
        <h3>Fonctionnalités principales :</h3>
        <ul>
          <li>Création de machines virtuelles et configuration des réseaux virtuels.</li>
          <li>Communication réseau entre les VMs via des protocoles TCP/IP.</li>
          <li>Utilisation de Wireshark pour analyser et diagnostiquer les paquets réseau.</li>
          <li>Configuration d'un serveur central pour la gestion du réseau et des services.</li>
          <li>Optimisation des performances réseau et réduction des latences.</li>
          <li>Gestion de la sécurité du réseau avec des pare-feu et des règles de filtrage.</li>
        </ul>
    
        <h3>Résultats et Bilan</h3>
        Le projet a abouti à la création d'un serveur réseau fonctionnel où plusieurs machines virtuelles étaient capables de communiquer entre elles de manière fluide. Ce projet m'a permis de renforcer mes compétences en gestion de réseaux, en configuration de serveurs, et en gestion de machines virtuelles. Il m'a également donné une meilleure compréhension des défis liés à l'optimisation des performances réseau dans un environnement simulé, et de l'importance de la sécurité et de la gestion des accès dans un réseau distribué.
    
        <h3>Langages et Technologies Utilisés :</h3>
        <ul>
          <li><strong style="color: #FBC02D;">Linux</strong> (Administration du système)</li>
          <li><strong style="color: #FBC02D;">VirtualBox</strong> (Gestion des machines virtuelles)</li>
          <li><strong style="color: #F57C00;">Wireshark</strong> (Analyse du trafic réseau)</li>
          <li><strong style="color: #212121;">TCP/IP</strong> (Protocoles réseau)</li>
        </ul>
      `
    },

    {
      id: 6,
      title: "Interface de Réservation de Billet de Train avec MongoDB",
      image: projet7,
      description: "Développement d'une interface de réservation de billets de train en utilisant MongoDB dans un environnement agile.",
      technologies: ["MongoDB", "JavaScript", "Node.js", "HTML", "CSS", "Agile"],
      skills: ["conduire", "collaborer", "realiser"],
      details: `
        Ce projet a consisté à développer une interface de réservation de billets de train en utilisant une base de données **NoSQL MongoDB**. L'objectif était de permettre aux utilisateurs de réserver des billets de train en ligne, tout en suivant une méthodologie **agile** au sein d'une équipe de 3 personnes. La gestion des données de réservation était réalisée à l'aide de MongoDB, un système de gestion de base de données NoSQL, permettant une flexibilité maximale dans la gestion des données non structurées.
    
        <h3 style="color: #1976D2;">Compétence : Conduire</h3>
        En tant que chef de projet, j'ai dirigé l'équipe en suivant la <strong style="color: #1976D2;">méthodologie agile</strong>. Nous avons organisé des sprints de 2 semaines, avec des réunions quotidiennes pour discuter de l'avancement, des obstacles et des tâches à venir. J'ai également facilité la gestion des tâches en utilisant un <strong style="color: #1976D2;">tableau Kanban</strong>, ce qui a permis à l'équipe de rester concentrée sur les priorités et de livrer des versions incrémentales de l'interface à chaque fin de sprint.
    
        L'approche agile nous a permis de nous adapter rapidement aux besoins des utilisateurs et d'améliorer continuellement l'interface en fonction des retours. J'ai aussi mis en place une communication fluide et un environnement collaboratif, où chaque membre de l'équipe pouvait exprimer ses idées et ses suggestions.
    
        <h3 style="color: #D32F2F;">Compétence : Réaliser</h3>
        Le développement de l'interface a été effectué en utilisant <strong style="color: #D32F2F;">MongoDB</strong> pour stocker les informations des réservations (horaires, prix, utilisateurs, etc.), et <strong style="color: #D32F2F;">Node.js</strong> pour gérer le serveur côté backend. L'interface web a été réalisée en **HTML** et **CSS**, permettant aux utilisateurs de visualiser les trains disponibles et de réserver leur place facilement. Chaque réservation a été associée à un utilisateur dans la base de données, et un système de gestion des réservations a été développé pour vérifier la disponibilité des sièges.
    
        <h3 style="color: #212121;">Compétence : Collaborer</h3>
        Ce projet a été réalisé en collaboration étroite au sein de l'équipe de 3 personnes. Nous avons divisé les tâches de manière claire : l'un de nous était responsable du développement du backend avec MongoDB et Node.js, un autre s'occupait du développement de l'interface frontend (HTML, CSS), et je m'occupais de la gestion de projet ainsi que de l'intégration des fonctionnalités backend et frontend.
    
        Nous avons utilisé des outils de gestion de version comme **Git** pour collaborer sur le code, en veillant à ce que tout le monde puisse travailler sur des parties différentes du projet sans risquer des conflits. La collaboration constante et la transparence des tâches ont permis de garantir que nous respections les délais de livraison des versions et que nous puissions rapidement résoudre les bugs et les problèmes rencontrés.
    
        <h3>Fonctionnalités principales :</h3>
        <ul>
          <li>Système de réservation de billets de train avec MongoDB comme base de données NoSQL.</li>
          <li>Affichage en temps réel des trains disponibles avec des informations détaillées (horaires, prix, places disponibles).</li>
          <li>Interface utilisateur permettant de réserver un billet, avec un système de gestion des réservations backend.</li>
          <li>Application de la méthode agile avec des sprints réguliers et des révisions de projet.</li>
          <li>Suivi du projet avec un tableau Kanban et des réunions quotidiennes de suivi de l'avancement.</li>
        </ul>
    
        <h3>Résultats et Bilan</h3>
        Ce projet a permis de livrer une interface de réservation de billets de train fonctionnelle et bien structurée. Nous avons pu tester l'application de manière itérative et l'améliorer en fonction des retours des utilisateurs et des tests effectués lors de chaque sprint. J'ai particulièrement apprécié la gestion du projet en mode agile, qui a facilité la communication et l'adaptabilité de notre équipe. Ce projet m'a permis de renforcer mes compétences en gestion de projet agile et en coordination d'équipe, ainsi qu'en développement d'applications web et en gestion de bases de données NoSQL.
    
        <h3>Langages et Technologies Utilisés :</h3>
        <ul>
          <li><strong style="color: #D32F2F;">MongoDB</strong> (Base de données NoSQL)</li>
          <li><strong style="color: #D32F2F;">Node.js</strong> (Backend)</li>
          <li><strong style="color: #388E3C;">HTML, CSS</strong> (Frontend)</li>
          <li><strong style="color: #388E3C;">JavaScript</strong> (Interactivité et logique)</li>
        </ul>
      `
    },

    {
      id: 7,
      title: "Make The Cub - Application de Réservation d'Espaces de Coworking",
      image: projet8,
      description: "Développement d'une application de réservation d'espaces de coworking à partir de conteneurs réaménagés.",
      technologies: ["Django", "Django REST Framework", "React", "TypeScript", "PostgreSQL", "JWT", "Axios", "three.js"],
      skills: ["gerer", "realiser", "collaborer"],
      details: `
        Le projet **Make The Cub** a consisté à développer une application permettant de réserver des espaces de coworking créés à partir de conteneurs réaménagés. Ce projet a été réalisé en collaboration avec des porteurs de projets qui ont fourni un cahier des charges détaillé, et nous avons utilisé une méthodologie agile pour avancer en fonction de leurs retours et des besoins spécifiques exprimés.
    
        <h3 style="color: #388E3C;">Compétence : Gérer</h3>
        En tant que membre clé de l'équipe, j'ai contribué activement à la gestion du projet. Bien que je n'aie pas été le chef de projet, j'ai pris part à l'organisation des réunions avec les porteurs de projets pour m'assurer que leurs exigences étaient bien comprises et suivies. Nous avons utilisé une approche agile, avec des sprints de 2 semaines, où j'ai collaboré à l'organisation des priorités et des tâches de l'équipe afin de respecter les objectifs du cahier des charges.
    
        Lors des réunions de suivi avec les porteurs de projets, j'ai participé à l'analyse de leurs retours, ce qui a permis d'ajuster les fonctionnalités en temps réel pour répondre à leurs attentes. Mon rôle a aussi impliqué de coordonner la communication entre les différentes parties de l'équipe (frontend, backend, gestion des utilisateurs et des réservations).
    
        <h3 style="color: #D32F2F;">Compétence : Réaliser</h3>
        Le backend a été développé avec **Django** et **Django REST Framework**, ce qui nous a permis de créer une API RESTful robuste pour gérer les utilisateurs, les réservations, les conteneurs et les notifications. Nous avons utilisé **PostgreSQL** comme base de données pour stocker les informations de manière sécurisée et structurée. 
    
        Le frontend a été réalisé avec **React** et **TypeScript**, permettant une interface réactive et moderne, avec un système de gestion de l'authentification sécurisé par **JWT**. Les utilisateurs peuvent ainsi réserver des espaces, consulter les événements disponibles, et recevoir des notifications en temps réel.
    
        <h3 style="color: #212121;">Compétence : Collaborer</h3>
        Ce projet a été mené en équipe, et la collaboration a été essentielle pour garantir que l'ensemble des fonctionnalités du projet répondent aux attentes des porteurs de projets. Nous avons utilisé **Git** pour gérer les versions du code et garantir la fluidité du travail collaboratif. Grâce aux réunions régulières et à un suivi constant, nous avons pu ajuster l'application en fonction des besoins changeants des porteurs de projets et des retours des utilisateurs.
    
        <h3>Fonctionnalités principales :</h3>
        <ul>
          <li>Gestion des utilisateurs : Inscription, connexion, réinitialisation de mot de passe.</li>
          <li>Réservation d'espaces : Formulaires de réservation et calendrier dynamique.</li>
          <li>Gestion des événements : Création d'événements et possibilité de participation.</li>
          <li>Interface d’administration : Gestion des utilisateurs, des conteneurs et des réservations.</li>
          <li>Concepteur 3D : Visualisation et aménagement des espaces de coworking avec **three.js**.</li>
        </ul>
    
        <h3>Résultats et Bilan</h3>
        Le projet a abouti à une application de réservation d'espaces de coworking complète et fonctionnelle, respectant les besoins et attentes des porteurs de projets. Les réunions régulières ont permis d'ajuster le projet de manière réactive et de livrer une application qui correspond exactement aux spécifications du cahier des charges. Cette expérience m'a permis de développer mes compétences en gestion de projet agile, en coordination au sein d'une équipe et en interaction avec des parties prenantes externes.
    
        <h3>Langages Utilisés :</h3>
        <ul>
          <li><strong style="color: #D32F2F;">Django</strong></li>
          <li><strong style="color: #D32F2F;">Django REST Framework</strong></li>
          <li><strong style="color: #D32F2F;">React</strong></li>
          <li><strong style="color: #D32F2F;">TypeScript</strong></li>
          <li><strong style="color: #D32F2F;">PostgreSQL</strong></li>
          <li><strong style="color: #D32F2F;">JWT</strong></li>
          <li><strong style="color: #D32F2F;">Axios</strong></li>
          <li><strong style="color: #D32F2F;">three.js</strong></li>
        </ul>
      `
    }    
];