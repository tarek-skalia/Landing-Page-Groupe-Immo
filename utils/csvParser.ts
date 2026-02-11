import { CommuneConfig } from '../types';

// Helper to clean CSV values (remove quotes if present)
const cleanValue = (val: string) => {
  if (!val) return '';
  return val.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
};

export const fetchCommuneData = async (sheetUrl: string): Promise<Record<string, CommuneConfig>> => {
  try {
    // Add timestamp to URL to prevent browser caching (Cache Buster)
    const noCacheUrl = `${sheetUrl}&t=${Date.now()}`;
    console.log("Tentative de chargement des données depuis:", noCacheUrl);

    const response = await fetch(noCacheUrl);
    const text = await response.text();
    
    // Split by lines but handle newlines inside quotes
    const rows = text.split(/\r?\n/);
    const db: Record<string, CommuneConfig> = {};

    // Skip header row (index 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row) continue;

      // Robust splitting fallback
      const parts = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

      if (parts.length >= 2) { // Allow row as long as it has at least a slug and a name
        const slug = cleanValue(parts[0]).toLowerCase();
        
        if (slug) {
            db[slug] = {
              name: cleanValue(parts[1]),
              zip: cleanValue(parts[2]) || '',
              heroTitle: cleanValue(parts[3]) || `Immobilier à ${cleanValue(parts[1])}`,
              heroSubtitle: cleanValue(parts[4]) || '',
              heroImage: cleanValue(parts[5]) || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Fallback image if empty
              localVibe: cleanValue(parts[6]) || `Découvrez les opportunités à ${cleanValue(parts[1])}.`,
            };
        }
      }
    }

    console.log("Données chargées avec succès :", Object.keys(db)); // Debug log to see available slugs
    return db;
  } catch (error) {
    console.error("Erreur lors du chargement du Google Sheet:", error);
    return {};
  }
};