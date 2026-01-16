import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Hammer,
  Ruler,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import HeroSectionImage from "./assets/hero-home.jpg";
import AboutUsImage from "./assets/about-us-image.avif";
import ExpertiseImage1 from "./assets/expertise-1.avif";
import ExpertiseImage2 from "./assets/expertise-2.avif";
import ExpertiseImage3 from "./assets/expertise-3.avif";
import DrawerProjectImage1 from "./assets/Project-1.jpg";
import DrawerProjectImage2 from "./assets/Project-2.jpg";
import DrawerProjectImage3 from "./assets/Project-3.JPG";
import DrawerProjectImage4 from "./assets/Project-4.jpg";
import DrawerProjectImage5 from "./assets/Project-5.jpg";
import DrawerProjectImage6 from "./assets/Project-6.jpg";
import BespokeKitchen1 from "./assets/BespokeKitchen-1.jpeg";
import BespokeKitchen2 from "./assets/BespokeKitchen-2.jpeg";
import BespokeKitchen3 from "./assets/BespokeKitchen-3.jpeg";
import MediaWall1 from "./assets/MediaWall-1.jpeg";
import MediaWall2 from "./assets/MediaWall-2.jpeg";
import CurvedLibrary1 from "./assets/CurvedLibrary-4.jpeg";
import CurvedLibrary2 from "./assets/CurvedLibrary-3.jpeg";
import CurvedLibrary3 from "./assets/CurvedLibrary-2.jpeg";
import CurvedLibrary4 from "./assets/CurvedLibrary-1.jpeg";
import ServiceKitchen from "./assets/service-kitchen.jpg";
import ServiceJoinery from "./assets/service-joinery.jpg";
import ServiceFlooring from "./assets/service-flooring.jpg";
import ServiceBathroom from "./assets/service-bathroom.jpg";
import ServiceExtension from "./assets/service-extension.jpg";
import ServiceRefurbishment from "./assets/service-refurbishment.jpg";
/* Jnad Install Solutions Ltd
   Theme: Dark Luxury (Slate 950 background with Amber 500 accents)
   Architecture: Single Page App with State-based Routing for Project Details
*/

// --- DATA: Projects ---

const projectsData = [
  {
    id: 1,
    title: "Bespoke Gold Shop Interior Installation",
    location: "Richmond",
    category: "Bespoke Joinery",
    time: "4 weeks",
    description:
      "A premium gold shop interior featuring bespoke display units designed to enhance product presentation and customer experience. This project includes illuminated wall displays, arched feature panels, glass-topped counters, and custom drawer units with elegant brass detailing.All installation work was carried out by our team with precision and attention to detail. While the manufacturing of the units was handled by a third-party company, we provided full professional installation services, ensuring perfect alignment, secure fitting, and a flawless final finish that reflects a high-end retail environment.",
    mainImage: DrawerProjectImage2,
    gallery: [
      DrawerProjectImage1,
      DrawerProjectImage3,
      DrawerProjectImage4,
      DrawerProjectImage5,
      DrawerProjectImage6,
    ],
  },

  {
    id: 2,
    title: "Bespoke Kitchen Installation & Fit-Out",
    location: "Newcastle upon Tyne",
    category: "Bespoke Joinery",
    time: "2 weeks",
    description:
      "A high-end bespoke kitchen installation featuring full-height cabinetry, integrated appliances, and a statement cooking wall with decorative metal wall paneling. The project involved a complete site survey and preparation, followed by precise cabinetry fitting to achieve seamless alignment and a clean, contemporary finish. Custom worktop and wall panel templating were carried out on-site to ensure perfect integration with the bespoke units. All hardware installation, detailing, and final finishing were completed by our team, delivering a refined, modern kitchen space that balances functionality with luxury craftsmanship.",
    mainImage: BespokeKitchen1,
    gallery: [BespokeKitchen2, BespokeKitchen3],
  },

  {
    id: 3,
    title: "Bespoke Media Wall Paneling Installation",
    location: "Newcastle upon Tyne",
    category: "Bespoke Joinery",
    time: "2 weeks",
    description:
      "A sophisticated bespoke media wall installation crafted from dark-stained oak with a vertical grain finish, designed to create a strong architectural focal point within the living space. The project features a recessed media zone, integrated fireplace, and smart storage solutions that blend functionality with refined aesthetics. Precision paneling was installed to ensure seamless alignment, clean edges, and a consistent textured finish throughout. The multi-functional design combines display shelving, concealed storage, and media integration, delivering a contemporary, high-end result with exceptional attention to detail.",
    mainImage: MediaWall1,
    gallery: [MediaWall2],
  },
  {
    id: 8,
    title: "High-End Architectural Joinery – Bespoke Curved Library Shelving",
    location: "Newcastle upon Tyne",
    time: "2 weeks",
    category: "Architectural Joinery",
    description:
      "A high-end bespoke curved library shelving installation showcasing refined architectural joinery and modern classical detailing. This project features precision-crafted curved cabinetry with integrated shelving, classic panel detailing, and soft integrated lighting to enhance depth, warmth, and visual balance. The seamless curvature was executed with exacting accuracy to follow the architectural lines of the space, while the textured timber finish adds subtle character and elegance. Designed to be both functional and decorative, the unit provides generous display storage while acting as a striking focal feature within the interior.",
    mainImage: CurvedLibrary1,
    gallery: [CurvedLibrary2, CurvedLibrary3, CurvedLibrary4],
  },

  // {
  //   id: 1,
  //   title: "Kensington Luxury Kitchen",
  //   location: "Kensington, London",
  //   category: "Kitchen Installation",
  //   description:
  //     "A complete transformation of a Victorian townhouse kitchen. This project involved the installation of bespoke matte-black cabinetry, a Calacatta marble island waterfall, and integrated smart appliances. Our team handled the complex plumbing rerouting and installed ambient under-cabinet lighting to create a warm, inviting atmosphere for evening entertaining.",
  //   mainImage:
  //     "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2700&auto=format&fit=crop",
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Chelsea Walk-in Wardrobe",
  //   location: "Chelsea, London",
  //   category: "Bespoke Joinery",
  //   description:
  //     "Designed for a high-profile client, this walk-in wardrobe maximizes storage without compromising on style. We utilized floor-to-ceiling smoked oak joinery with integrated LED sensor lights. The center island features a velvet-lined jewelry display and additional drawer storage. The installation required precise scribing to uneven period walls.",
  //   mainImage:
  //     "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2700&auto=format&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=2700&auto=format&fit=crop",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Hampstead Living Space",
  //   location: "Hampstead Heath",
  //   category: "Living & Media Units",
  //   description:
  //     "Integration of a modern media wall into a classic living room. The project included building a false chimney breast to house a bio-ethanol fire and a 65-inch recessed TV. Flanking the center are symmetrical floating shelves with hidden fixings, painted in a deep charcoal to contrast with the light oak herringbone flooring we also installed.",
  //   mainImage:
  //     "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2700&auto=format&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1616594039964-40891a90b385?q=80&w=2700&auto=format&fit=crop",
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Battersea Flooring Project",
  //   location: "Battersea Power Station",
  //   category: "Flooring & Tiling",
  //   description:
  //     "Installation of premium engineered European Oak flooring throughout a 2,000 sq ft penthouse. The project involved acoustic soundproofing underlayment required for the apartment block. We also tiled three bathrooms with large-format porcelain slabs, ensuring perfect pattern matching and minimal grout lines.",
  //   mainImage:
  //     "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2700&auto=format&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2700&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?q=80&w=2700&auto=format&fit=crop",
  //   ],
  // },
];

// --- Components ---

// 1. Reveal Animation Wrapper
const Reveal = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 2. Button Component (Shadcn-like)
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2";
  const variants = {
    primary:
      "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
    outline:
      "border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-100",
    ghost: "hover:bg-slate-800 text-slate-300 hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// 3. Card Component
const Card = ({ title, description, icon: Icon, image }) => (
  <div className="group relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/10">
    {image && (
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
            <Icon size={24} />
          </div>
        )}
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      </div>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// 4. Project Detail View Component
const ProjectDetailView = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-24">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Projects
        </button>

        {/* Project Header */}
        <Reveal className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between mb-6">
            <div>
              <span className="text-amber-500 text-sm font-bold tracking-widest uppercase block mb-2">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>
              <p className="flex items-center gap-2 text-slate-400 mt-4">
                <MapPin size={18} className="text-amber-500" />{" "}
                {project.location}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Description & Main Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Reveal className="order-2 lg:order-1">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Project Overview
              </h3>
              <p className="text-slate-400 leading-8 text-lg">
                {project.description}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs uppercase text-slate-500 tracking-wider">
                      Services
                    </span>
                    <span className="block text-slate-200 mt-1">
                      Installation, Joinery
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-500 tracking-wider">
                      Timeline
                    </span>
                    <span className="block text-slate-200 mt-1">
                      {project.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 h-96 lg:h-auto overflow-hidden rounded-xl">
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <Reveal>
          <h3 className="text-2xl font-bold mb-8 text-white">
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg border border-slate-800 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : "h-64"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} view ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 text-center">
          <Button onClick={onBack} variant="outline" className="min-w-[200px]">
            View Other Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null); // State for handling "Pages"
  const [openService, setOpenService] = useState(null);
  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const services = [
    {
      id: "kitchen",
      title: "Kitchen Installation",
      description:
        "We supply and fit high-quality kitchens with precision. Our team handles the plumbing, electrical integration, and cabinetry assembly to give you a functional, stylish space that stands up to daily life.",
      image: ServiceKitchen,
    },
    {
      id: "joinery",
      title: "Bespoke Joinery",
      description:
        "Custom wardrobes, shelving units, and storage solutions tailored specifically to fit your space and lifestyle. Every piece is crafted with attention to detail and premium materials.",
      image: ServiceJoinery,
    },
    {
      id: "flooring",
      title: "Flooring & Tiling",
      description:
        "High-end flooring installation including hardwood, laminate, and luxury tiling for kitchens and bathrooms. We ensure perfect finishes that last for years.",
      image: ServiceFlooring,
    },
    {
      id: "bathroom",
      title: "Bathroom Fitting",
      description:
        "Complete bathroom transformations from design to installation. We handle plumbing, tiling, and fixtures to create your perfect sanctuary.",
      image: ServiceBathroom,
    },
    {
      id: "extension",
      title: "Home Extensions",
      description:
        "Need more space? We build high-quality extensions that blend seamlessly with your existing house. Perfect for creating a larger kitchen, dining area, or a new family room.",
      image: ServiceExtension,
    },
    {
      id: "refurbishment",
      title: "Full Refurbishments",
      description:
        "If your home feels tired or outdated, we can strip it back and start fresh. We update everything—walls, floors, windows, and layouts—to make your old house feel like a brand new home.",
      image: ServiceRefurbishment,
    },
  ];
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };
  const handleNavigation = (id) => {
    setIsMobileMenuOpen(false);

    // If we are on a project page, go back to home first
    if (activeProject) {
      setActiveProject(null);
      // Wait a tick for render then scroll
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Normal scroll
      const element = document.querySelector(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectSelect = (project) => {
    setActiveProject(project);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden">
      {/* --- Navigation --- */}

      {/* --- Navigation --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex flex-col leading-none cursor-pointer"
            onClick={() => handleNavigation("#home")}
          >
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-100 tracking-tighter">
                J
              </span>
              <span className="text-2xl font-bold text-slate-100 tracking-widest">
                NAD
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-medium ml-1">
              Install Solutions Ltd
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => handleNavigation("#contact")}>
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-left text-lg font-medium text-slate-300 hover:text-amber-500"
              >
                {link.name}
              </button>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => handleNavigation("#contact")}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>
      {/* <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex flex-col leading-none cursor-pointer"
            onClick={() => handleNavigation("#home")}
          >
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground tracking-tighter">
                J
              </span>
              <span className="text-2xl font-bold text-foreground tracking-widest">
                NAD
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium ml-1">
              Install Solutions Ltd
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => handleNavigation("#contact")}>
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-card border-b border-border overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-left text-lg font-medium text-muted-foreground hover:text-accent"
              >
                {link.name}
              </button>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => handleNavigation("#contact")}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </nav> */}

      {/* --- Hero Section --- */}

      {/* --- ROUTING LOGIC: Either show Project Detail OR Home Page --- */}
      {activeProject ? (
        <ProjectDetailView
          project={activeProject}
          onBack={() => setActiveProject(null)}
        />
      ) : (
        <>
          {/* --- Hero Section --- */}
          {/* <section
            id="home"
            className="relative min-h-screen flex items-center pt-20"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={HeroSectionImage}
                alt="Luxury Kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <Reveal className="space-y-8">
                <div className="inline-block px-3 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 backdrop-blur-sm">
                  <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                    Premium Craftsmanship
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Crafting Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    Dream Space
                  </span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Expert installation services for bespoke kitchens, wardrobes,
                  and luxury interiors. We transform houses into homes with
                  precision and elegance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => handleNavigation("#portfolio")}
                    className="h-12 px-8 text-base"
                  >
                    View Our Work
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleNavigation("#services")}
                    className="h-12 px-8 text-base"
                  >
                    Our Services
                  </Button>
                </div>
              </Reveal>
            </div>
          </section> */}

          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={HeroSectionImage}
                alt="Luxury Home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/60"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-wide mb-8">
                <span className="text-accent">Design</span>
                <span className="text-muted-foreground mx-4 md:mx-6">|</span>
                <span>Build</span>
                <span className="text-muted-foreground mx-4 md:mx-6">|</span>
                <span>Transform</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                High-end construction, refurbishments, and bespoke living spaces
                crafted with precision, quality and trust.
              </p>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation("#contact")}
                className="px-10 py-6 text-sm uppercase tracking-widest font-medium border-accent/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Start Project
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <div className="w-px h-16 bg-linear-to-b from-[#FE9A00] via-accent/50 to-transparent animate-pulse"></div>
            </div>
          </section>

          {/* --- About / Intro Section --- */}
          <section id="about" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <Reveal>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-amber-500/20 rounded-xl blur-lg"></div>
                    <img
                      src={AboutUsImage}
                      alt="Craftsman at work"
                      className="relative rounded-xl shadow-2xl border border-slate-800"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl hidden md:block">
                      <p className="text-4xl font-bold text-amber-500">10+</p>
                      <p className="text-sm text-slate-400 uppercase tracking-wide">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="delay-200">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Precision in Every Detail
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    At{" "}
                    <span className="text-amber-500 font-semibold">
                      Jnad Install Solutions Ltd
                    </span>
                    , we believe that true luxury lies in the details. Whether
                    it's a bespoke kitchen installation or custom joinery, our
                    team brings passion and precision to every project.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Fully Insured & Licensed",
                      "Bespoke Design Consultation",
                      "Premium Materials Only",
                      "On-Time Project Completion",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <CheckCircle size={20} className="text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="pl-0 gap-2 text-amber-500 hover:text-amber-400"
                  >
                    Learn More About Us <ChevronRight size={16} />
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>

          {/* --- Services Section --- */}
          {/* <section id="services" className="py-24 bg-slate-900 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
              <Reveal className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">
                  What We Do
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Expertise
                </h2>
                <p className="text-slate-400">
                  From concept to completion, we handle all aspects of interior
                  installation with unmatched quality.
                </p>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-8">
                <Reveal className="delay-0">
                  <Card
                    title="Kitchen Installation"
                    icon={Hammer}
                    image={ExpertiseImage1}
                    description="Complete kitchen fitting services including plumbing, electrical integration, and cabinetry assembly for a seamless finish."
                  />
                </Reveal>
                <Reveal className="delay-100">
                  <Card
                    title="Bespoke Joinery"
                    icon={Ruler}
                    image={ExpertiseImage2}
                    description="Custom wardrobes, shelving units, and storage solutions tailored specifically to fit your space and lifestyle."
                  />
                </Reveal>
                <Reveal className="delay-200">
                  <Card
                    title="Flooring & Tiling"
                    icon={MapPin} // Placeholder for flooring
                    image={ExpertiseImage3}
                    description="High-end flooring installation including hardwood, laminate, and luxury tiling for kitchens and bathrooms."
                  />
                </Reveal>
              </div>
            </div>
          </section> */}
          <section id="services" className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <div className="text-center mb-16">
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-5xl font-light text-expertise-foreground mb-6 italic">
                  Comprehensive Solutions for
                  <br />
                  Exquisite Living
                </h2>
                <p className="text-expertise-muted text-lg italic max-w-2xl mx-auto">
                  From visionary design to meticulous construction, we deliver
                  excellence at every stage.
                </p>
              </div>

              {/* Services Accordion */}
              <div className="max-w-4xl mx-auto">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="border-b border-expertise-border"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <h3
                        className={`text-xl md:text-2xl font-medium transition-colors ${
                          openService === service.id
                            ? "text-accent"
                            : "text-expertise-foreground group-hover:text-accent"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <ChevronDown
                        size={24}
                        className={`text-expertise-muted transition-transform duration-300 ${
                          openService === service.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openService === service.id
                          ? "max-h-[500px] opacity-100 pb-8"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <p className="text-expertise-muted leading-relaxed">
                          {service.description}
                        </p>
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* --- Portfolio / Gallery Section --- */}
          <section id="portfolio" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
              <Reveal className="flex justify-between items-end mb-12">
                <div>
                  <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">
                    Our Work
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Recent Projects
                  </h2>
                  <p className="text-slate-400 mt-2">
                    Click on a project to view details and gallery.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                  <Reveal
                    key={project.id}
                    className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                      index === 0
                        ? "lg:col-span-2 lg:row-span-2 min-h-[400px]"
                        : "min-h-[300px]"
                    }`}
                  >
                    <div
                      onClick={() => handleProjectSelect(project)}
                      className="w-full h-full absolute inset-0 z-10"
                    ></div>
                    <img
                      src={project.mainImage}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <p className="text-amber-500 font-bold uppercase text-xs tracking-wider mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex items-center text-amber-500 text-sm font-bold">
                        View Project <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* --- CTA / Banner --- */}
          <section className="py-20 bg-amber-500">
            <div className="container mx-auto px-6 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Ready to Transform Your Home?
                </h2>
                <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
                  Our calendar fills up quickly. Contact us today to schedule
                  your free consultation and quote.
                </p>
                <Button
                  className="bg-slate-900 text-white hover:bg-slate-800 border-none shadow-xl"
                  onClick={() => handleNavigation("#contact")}
                >
                  Book Consultation
                </Button>
              </Reveal>
            </div>
          </section>

          {/* --- Contact Section --- */}
          <section
            id="contact"
            className="py-24 bg-slate-950 relative overflow-hidden"
          >
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6">
              <Reveal className="text-center mb-16">
                <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <Reveal className="space-y-8">
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-slate-800 p-3 rounded-lg text-amber-500">
                          <Phone size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase font-bold tracking-wide">
                            Phone
                          </p>
                          <p className="text-lg">+44 7944972464</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-slate-800 p-3 rounded-lg text-amber-500">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase font-bold tracking-wide">
                            Email
                          </p>
                          <p className="text-lg">info.junaid@jnad.co.uk</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-slate-800 p-3 rounded-lg text-amber-500">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase font-bold tracking-wide">
                            Serving
                          </p>
                          <p className="text-lg">
                            Greater London & Surrounding Areas
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800">
                      <p className="text-slate-400 mb-4">
                        Follow us on social media for latest updates.
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="p-3 bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors"
                        >
                          <Instagram size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Form */}
                <Reveal className="delay-200">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Service Interest
                      </label>
                      <select className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-100 focus:outline-none focus:border-amber-500 transition-colors">
                        <option>Kitchen Installation</option>
                        <option>Wardrobes / Joinery</option>
                        <option>Flooring</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <Button className="w-full h-12 text-base font-bold">
                      Send Message
                    </Button>
                  </form>
                </Reveal>
              </div>
            </div>
          </section>
        </>
      )}

      {/* --- Footer --- */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="text-2xl font-bold text-slate-100 tracking-tighter">
              J
            </span>
            <span className="text-xl font-bold text-slate-100 tracking-widest">
              NAD
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            © {new Date().getFullYear()} Jnad Install Solutions Ltd. All rights
            reserved. <br />
            Registered in England & Wales.
          </p>
          <div className="flex justify-center gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
