import { CommuneConfig } from '../types';

// Helper to clean CSV values (remove quotes if present)
const cleanValue = (val: string) => {
  if (!val) return '';
  return val.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
};

export const fetchCommuneData = async (sheetUrl: string): Promise<Record<string, CommuneConfig>> => {
  try {
    const response = await fetch(sheetUrl);
    const text = await response.text();
    
    // Split by lines but handle newlines inside quotes
    const rows = text.split(/\r?\n/);
    const db: Record<string, CommuneConfig> = {};

    // Skip header row (index 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row) continue;

      // Regex to split by comma ONLY if not inside quotes
      const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      
      // We expect columns: slug, name, zip, heroTitle, heroSubtitle, localVibe, heroImage
      // Note: This is a basic parser. For complex CSVs, libraries like PapaParse are better, 
      // but this works for standard Google Sheet exports.
      
      // Robust splitting fallback if regex misses (simple CSV)
      const parts = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

      if (parts.length >= 7) {
        const slug = cleanValue(parts[0]).toLowerCase();
        
        if (slug) {
            db[slug] = {
              name: cleanValue(parts[1]),
              zip: cleanValue(parts[2]),
              heroTitle: cleanValue(parts[3]),
              heroSubtitle: cleanValue(parts[4]),
              localVibe: cleanValue(parts[6]), // Column G
              heroImage: cleanValue(parts[5]), // Column F
            };
        }
      }
    }
    return db;
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    return {};
  }
};