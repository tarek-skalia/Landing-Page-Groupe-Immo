import React from 'react';
import { MapPin, TrendingUp, Users, Target, Award, Clock, Gift } from 'lucide-react';
import { Stat, Property, CommuneConfig, Review } from './types';

export const AGENCY_NAME = "Group Immo";
export const MAIN_SITE_URL = "https://groupimmo.be/";

// --- GOOGLE SHEET CONFIGURATION ---
// REPLACE THIS URL WITH YOUR PUBLISHED CSV LINK
export const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vStHc9RCQAqKa6LUQ72PobqugqqGoK07kofyG8XOq-0MUyRLiwiQseRjf4f-O49P3Q4oNULsVPYavUM/pub?gid=0&single=true&output=csv"; 
// Note: The URL above is a placeholder. You must create your sheet and publish it.

// --- 1. GLOBAL DATA (Static content for all pages) ---

export const GLOBAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Marc & Sophie D.",
    location: "Vente Maison",
    text: "Nous avions peur que notre maison reste des mois sur le marché. L'équipe a fait une estimation très juste et nous avons eu une offre au prix en seulement 2 semaines.",
    rating: 5,
    date: "Il y a 1 mois"
  },
  {
    id: 2,
    name: "Jean-Pierre L.",
    location: "Vente Immeuble de rapport",
    text: "J'ai apprécié la franchise de l'agent. Pas de promesses en l'air, mais des résultats. Les photos ont vraiment mis mon bien en valeur.",
    rating: 5,
    date: "Il y a 3 mois"
  },
  {
    id: 3,
    name: "Isabelle M.",
    location: "Vente Appartement",
    text: "Service clé en main. Je n'habite plus dans la région et ils ont tout géré (visites, certificat PEB, notaire).",
    rating: 4,
    date: "Il y a 2 semaines"
  }
];

export const STATS: Stat[] = [
  { id: 1, value: "4.9/5", label: "Satisfaction Clients", icon: <Award className="w-6 h-6" /> },
  { id: 2, value: "+450", label: "Biens vendus", icon: <Target className="w-6 h-6" /> },
  { id: 3, value: "10 Ans", label: "D'expertise", icon: <Clock className="w-6 h-6" /> },
  { id: 4, value: "Offerts", label: <>PEB, Contrôle Électrique<br/>& Photos Pro<br/><span className="text-xs opacity-90">(Mandat Exclusif)</span></>, icon: <Gift className="w-6 h-6" /> },
];

export const FEATURES = [
  {
    title: "Estimation immobilière précise",
    description: "Nous analysons les données réelles du marché, les ventes récentes et les caractéristiques de votre bien pour déterminer un prix juste. Une estimation fiable permet d’attirer les bons acheteurs et de vendre plus rapidement.",
    icon: <TrendingUp /> 
  },
  {
    title: "Stratégie marketing performante",
    description: "Nous mettons en valeur votre bien grâce à des photos professionnelles, des visites virtuelles et une diffusion ciblée sur les meilleurs portails immobiliers afin d’atteindre un maximum d’acheteurs qualifiés.",
    icon: <Users /> 
  },
  {
    title: "Accompagnement complet jusqu’à la vente",
    description: "De la mise en vente jusqu’à la signature chez le notaire, notre équipe vous accompagne à chaque étape pour simplifier toutes les démarches et sécuriser votre transaction.",
    icon: <MapPin /> 
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Belle Maison",
    price: "VENDU",
    location: "Liège",
    beds: 5,
    baths: 2,
    area: "145 m²",
    image: "https://cdn.prod.website-files.com/68f96b71387d3d720da45ca8/69b0bce1c0c32a06f0851a97_fb1a9c1e503c568bec647458699b7b48_a7f5c142c9_1600-original.jpg",
    badge: "VENDU en 10 jours"
  },
  {
    id: 2,
    title: "Appartement Lumineux",
    price: "VENDU",
    location: "Herstal Centre",
    beds: 2,
    baths: 1,
    area: "90 m²",
    image: "https://picsum.photos/800/600?random=11",
    badge: "VENDU au prix"
  },
  {
    id: 3,
    title: "Villa 4 Façades",
    price: "VENDU",
    location: "Chaudfontaine",
    beds: 4,
    baths: 2,
    area: "210 m²",
    image: "https://picsum.photos/800/600?random=12",
    badge: "VENDU"
  }
];

// --- FALLBACK DATA (Used while loading or if Sheet fails) ---
export const FALLBACK_COMMUNE: CommuneConfig = {
    name: "LIÈGE",
    zip: "4000",
    heroImage: "https://cdn.prod.website-files.com/68f96b71387d3d720da45ca8/698cae94e1b2a78832009e30_te%CC%81le%CC%81chargement.jpeg",
    heroTitle: "Vendez votre bien à LIÈGE au meilleur prix",
    heroSubtitle: "Estimation précise, marketing premium et fichier d'acheteurs qualifiés sur le code postal 4000. Découvrez la valeur de votre bien en 48h.",
    localVibe: "Le marché immobilier à Liège est en pleine ébullition. Profitez de la forte demande actuelle pour vendre au meilleur prix.",
};
