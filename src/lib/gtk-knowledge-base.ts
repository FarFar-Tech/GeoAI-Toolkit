// GTK Hakku Data Products Knowledge Base
// Pre-loaded metadata from https://hakku.gtk.fi/en/locations

export const GTK_PRODUCTS = [
  // Mineral Exploration
  { id: "mineral-deposits", name: "Mineral Deposits Database", theme: "Mineral Resources", license: "Free", description: "Comprehensive database of mineral occurrences and deposits in Finland. Contains information on location, commodity, deposit type, geological setting, and resource estimates.", useCases: ["Mineral exploration targeting", "Regional prospectivity assessment", "Resource inventory"], formats: ["WFS", "WMS", "Download"], keywords: ["gold", "copper", "nickel", "zinc", "PGE", "lithium", "cobalt", "REE"] },
  { id: "mineral-prospectivity", name: "Mineral Prospectivity Modelling", theme: "Mineral Resources", license: "Free", description: "Data-driven and knowledge-driven prospectivity maps for various commodities across Finland. Uses weights of evidence, logistic regression, and machine learning methods.", useCases: ["Greenfield exploration", "Target generation", "Exploration risk assessment"], formats: ["WMS", "GeoTIFF"], keywords: ["prospectivity", "favorability", "targeting", "machine learning"] },
  { id: "metallogenic-areas", name: "Metallogenic Areas and Belts", theme: "Mineral Resources", license: "Free", description: "Delineation of metallogenic provinces, belts, and areas in Finland based on geological, geochemical, and geophysical criteria.", useCases: ["Regional exploration planning", "Geological context", "Deposit model comparison"], formats: ["WFS", "WMS"], keywords: ["metallogenic belt", "province", "Kuusamo", "Outokumpu", "Skellefte"] },
  { id: "drill-core-archive", name: "National Drill Core Archive", theme: "Mineral Resources", license: "Free/Fee", description: "Finland's national drill core archive in Loppi. Contains over 900 km of drill core from exploration and mining projects across Finland.", useCases: ["Core logging", "Re-sampling", "Geological verification", "ML training data"], formats: ["Physical cores", "Digital logs"], keywords: ["drill core", "borehole", "logging", "sampling"] },
  { id: "critical-minerals", name: "Critical Raw Materials Data", theme: "Mineral Resources", license: "Free", description: "Datasets related to EU critical raw materials including lithium, cobalt, REE, graphite, PGE occurrences in Finnish bedrock.", useCases: ["CRM exploration", "EU strategic autonomy", "Battery minerals"], formats: ["WFS", "WMS"], keywords: ["lithium", "cobalt", "REE", "graphite", "PGE", "critical minerals"] },

  // Geochemistry
  { id: "till-geochemistry", name: "Regional Till Geochemistry", theme: "Geochemistry", license: "Free", description: "Geochemical data from till (glacial sediment) samples covering most of Finland at various densities. Analyzed for 30+ elements.", useCases: ["Geochemical exploration", "Environmental baseline", "Anomaly detection"], formats: ["WFS", "WMS", "Download"], keywords: ["till", "glacial", "multi-element", "anomaly", "Cu", "Au", "Ni", "Zn"] },
  { id: "stream-sediment", name: "Stream Sediment Geochemistry", theme: "Geochemistry", license: "Free", description: "Geochemical analyses of stream sediment samples from drainage surveys across Finland.", useCases: ["Drainage geochemistry", "Regional exploration", "Water quality context"], formats: ["WFS", "WMS"], keywords: ["stream sediment", "drainage", "water quality"] },
  { id: "rock-geochemistry", name: "Rock Geochemical Database", theme: "Geochemistry", license: "Free", description: "Whole-rock geochemical analyses from bedrock samples across Finland. Major and trace elements.", useCases: ["Petrogenetic studies", "Lithogeochemical classification", "Deposit comparison"], formats: ["WFS", "Download"], keywords: ["whole-rock", "major elements", "trace elements", "lithogeochemistry"] },
  { id: "geochemical-atlas", name: "Geochemical Atlas of Finland", theme: "Geochemistry", license: "Free", description: "Published atlas of geochemical baseline data for Finnish soils, tills, and waters. Includes background concentration maps.", useCases: ["Environmental baseline", "Contamination assessment", "Reference values"], formats: ["PDF", "WMS"], keywords: ["atlas", "baseline", "background levels", "contamination"] },
  { id: "soil-geochemistry", name: "Soil Geochemical Baseline", theme: "Geochemistry", license: "Free", description: "Baseline concentrations of elements in Finnish soils for environmental assessment.", useCases: ["Environmental permits", "Contamination thresholds", "Land use planning"], formats: ["WFS", "WMS"], keywords: ["soil", "baseline", "environmental", "contamination threshold"] },

  // Bedrock & Maps
  { id: "bedrock-1m", name: "Bedrock Map 1:1 000 000", theme: "Bedrock Geology", license: "Free", description: "Seamless digital bedrock geological map of Finland at 1:1M scale. Shows lithological units, major structures, and age relationships.", useCases: ["Regional geological overview", "Education", "Planning"], formats: ["WFS", "WMS", "GeoPackage"], keywords: ["bedrock", "lithology", "geology", "Precambrian", "Fennoscandian Shield"] },
  { id: "bedrock-200k", name: "Bedrock Map 1:200 000", theme: "Bedrock Geology", license: "Free", description: "Medium-scale bedrock geological maps covering Finland. More detailed lithological and structural information.", useCases: ["Exploration planning", "Geological mapping", "Infrastructure"], formats: ["WFS", "WMS"], keywords: ["bedrock", "structural geology", "faults", "folds"] },
  { id: "bedrock-100k", name: "Bedrock Map 1:100 000", theme: "Bedrock Geology", license: "Free", description: "Detailed bedrock geological maps at 1:100 000 scale for selected areas of Finland.", useCases: ["Detailed exploration", "Mine planning", "Research"], formats: ["WFS", "WMS"], keywords: ["detailed geology", "outcrop", "lithological contact"] },

  // Geophysics
  { id: "aeromagnetic", name: "Aeromagnetic Data", theme: "Geophysics", license: "Free", description: "High-resolution aeromagnetic survey data covering all of Finland. Total magnetic intensity and various derivatives.", useCases: ["Structural interpretation", "Lithological mapping", "Depth estimation"], formats: ["GeoTIFF", "WMS"], keywords: ["magnetic", "aeromagnetic", "TMI", "structural interpretation"] },
  { id: "gravity", name: "Gravity Data", theme: "Geophysics", license: "Free", description: "Bouguer gravity anomaly data for Finland from ground-based gravity measurements.", useCases: ["Crustal studies", "Basin delineation", "Density contrasts"], formats: ["GeoTIFF", "WMS"], keywords: ["gravity", "Bouguer anomaly", "density"] },
  { id: "radiometric", name: "Airborne Radiometric Data", theme: "Geophysics", license: "Free", description: "Airborne gamma-ray spectrometric data (K, U, Th, total count) covering Finland.", useCases: ["Lithological discrimination", "Uranium exploration", "Soil mapping"], formats: ["GeoTIFF", "WMS"], keywords: ["radiometric", "gamma-ray", "potassium", "uranium", "thorium"] },
  { id: "electromagnetic", name: "Airborne Electromagnetic Data", theme: "Geophysics", license: "Free", description: "Airborne EM survey data for conductivity mapping of Finnish bedrock and overburden.", useCases: ["Conductor detection", "Sulphide exploration", "Overburden mapping"], formats: ["GeoTIFF", "WMS"], keywords: ["electromagnetic", "EM", "conductivity", "sulphide"] },

  // Environmental
  { id: "acid-sulfate-soils", name: "Acid Sulfate Soils", theme: "Environmental Geology", license: "Free", description: "Mapping and risk assessment of acid sulfate soils in Finnish coastal areas, particularly Ostrobothnia. Includes probability maps and risk zones.", useCases: ["Construction planning", "Water quality protection", "Land use planning", "Agricultural management"], formats: ["WFS", "WMS"], keywords: ["acid sulfate", "coastal", "Ostrobothnia", "water quality", "pH"] },
  { id: "groundwater-vulnerability", name: "Groundwater Vulnerability Assessment", theme: "Environmental Geology", license: "Free", description: "Vulnerability maps for Finnish groundwater areas based on geological, hydrological, and land-use factors.", useCases: ["Water supply protection", "Land use planning", "Environmental permits"], formats: ["WFS", "WMS"], keywords: ["groundwater", "vulnerability", "aquifer", "protection zone"] },
  { id: "groundwater-recharge", name: "Groundwater Recharge Potential", theme: "Environmental Geology", license: "Free", description: "Maps showing groundwater recharge potential based on soil types, topography, and climate data.", useCases: ["Water resource management", "Climate adaptation", "Geothermal planning"], formats: ["WFS", "WMS"], keywords: ["recharge", "infiltration", "water resources"] },
  { id: "peatland-carbon", name: "Peatland Carbon Storage", theme: "Environmental Geology", license: "Free", description: "Estimates of carbon storage in Finnish peatlands based on peat thickness, type, and decomposition degree.", useCases: ["Carbon accounting", "Climate mitigation", "Land use change assessment"], formats: ["WFS", "WMS"], keywords: ["peatland", "carbon", "peat", "climate", "sequestration"] },
  { id: "peatland-fertility", name: "Peatland Fertility Levels", theme: "Environmental Geology", license: "Free", description: "Classification of peatland fertility based on vegetation, peat characteristics, and nutrient content.", useCases: ["Forestry planning", "Restoration priorities", "Biodiversity assessment"], formats: ["WFS", "WMS"], keywords: ["peatland", "fertility", "nutrients", "vegetation"] },
  { id: "clay-areas", name: "Clay Areas and Depths", theme: "Superficial Deposits", license: "Free", description: "Mapping of clay deposit areas and estimated depths in Finland. Important for construction and geotechnical planning.", useCases: ["Geotechnical assessment", "Construction planning", "Infrastructure routing"], formats: ["WFS", "WMS"], keywords: ["clay", "depth", "geotechnical", "soft soil"] },
  { id: "construction-conditions", name: "Construction Conditions of Superficial Deposits", theme: "Superficial Deposits", license: "Free", description: "Assessment of superficial deposit suitability for construction based on soil types, bearing capacity, and drainage.", useCases: ["Site selection", "Foundation design", "Urban planning"], formats: ["WFS", "WMS"], keywords: ["construction", "bearing capacity", "foundation", "soil type"] },
  { id: "superficial-deposits", name: "Superficial Deposits Map", theme: "Superficial Deposits", license: "Free", description: "Digital maps of superficial (Quaternary) deposits covering Finland at various scales.", useCases: ["Geological mapping", "Aggregate resources", "Groundwater assessment"], formats: ["WFS", "WMS", "GeoPackage"], keywords: ["Quaternary", "glacial", "till", "sand", "gravel", "esker"] },

  // Additional
  { id: "geochemical-provinces", name: "Geochemical Provinces", theme: "Geochemistry", license: "Free", description: "Delineation of regional geochemical provinces based on element distribution patterns in Finland.", useCases: ["Regional context", "Anomaly threshold setting", "Background characterization"], formats: ["WFS", "WMS"], keywords: ["province", "background", "threshold", "regional"] },
  { id: "seismic-data", name: "Seismic Survey Data", theme: "Geophysics", license: "Free/Fee", description: "Reflection and refraction seismic survey profiles across Finland for crustal structure studies.", useCases: ["Crustal studies", "Deep targeting", "Basin analysis"], formats: ["SEG-Y", "PDF"], keywords: ["seismic", "reflection", "crustal", "Moho"] },
  { id: "geothermal-potential", name: "Geothermal Energy Potential", theme: "Energy", license: "Free", description: "Assessment of shallow and deep geothermal energy potential across Finland based on thermal conductivity and heat flow data.", useCases: ["Renewable energy planning", "Heat pump siting", "District heating"], formats: ["WFS", "WMS"], keywords: ["geothermal", "heat flow", "thermal conductivity", "energy"] },
];

export const FINNISH_BACKGROUND_LEVELS = {
  till: {
    Cu: { median: 22, p90: 55, p95: 80, unit: "ppm", description: "Copper in glacial till" },
    Au: { median: 0.4, p90: 2.5, p95: 5.0, unit: "ppb", description: "Gold in glacial till" },
    Ni: { median: 18, p90: 45, p95: 70, unit: "ppm", description: "Nickel in glacial till" },
    Zn: { median: 40, p90: 85, p95: 120, unit: "ppm", description: "Zinc in glacial till" },
    Cr: { median: 35, p90: 90, p95: 140, unit: "ppm", description: "Chromium in glacial till" },
    Co: { median: 8, p90: 20, p95: 30, unit: "ppm", description: "Cobalt in glacial till" },
    As: { median: 2, p90: 8, p95: 15, unit: "ppm", description: "Arsenic in glacial till" },
    Pb: { median: 8, p90: 18, p95: 25, unit: "ppm", description: "Lead in glacial till" },
    Li: { median: 12, p90: 30, p95: 45, unit: "ppm", description: "Lithium in glacial till" },
    Mo: { median: 0.5, p90: 1.5, p95: 2.5, unit: "ppm", description: "Molybdenum in glacial till" },
  },
  streamSediment: {
    Cu: { median: 18, p90: 45, p95: 65, unit: "ppm", description: "Copper in stream sediment" },
    Au: { median: 0.2, p90: 1.5, p95: 3.0, unit: "ppb", description: "Gold in stream sediment" },
    Ni: { median: 15, p90: 38, p95: 55, unit: "ppm", description: "Nickel in stream sediment" },
    Zn: { median: 55, p90: 110, p95: 160, unit: "ppm", description: "Zinc in stream sediment" },
  },
  bedrock: {
    Cu: { median: 30, p90: 100, p95: 200, unit: "ppm", description: "Copper in bedrock" },
    Au: { median: 1.0, p90: 10, p95: 50, unit: "ppb", description: "Gold in bedrock" },
    Ni: { median: 25, p90: 100, p95: 300, unit: "ppm", description: "Nickel in bedrock" },
    Zn: { median: 65, p90: 150, p95: 300, unit: "ppm", description: "Zinc in bedrock" },
    Cr: { median: 50, p90: 200, p95: 500, unit: "ppm", description: "Chromium in bedrock" },
  },
};

export const TOOL_DESCRIPTIONS = {
  mineralProspectivity: {
    name: "Mineral Prospectivity AI",
    shortDesc: "Explore mineral potential using GTK datasets",
    genAI: "RAG + Domain Prompting",
    icon: "gem",
  },
  environmentalRisk: {
    name: "Environmental Risk Screener",
    shortDesc: "Assess environmental risks for construction & planning",
    genAI: "RAG + Risk Classification",
    icon: "shield",
  },
  mapInterpreter: {
    name: "Geological Map Interpreter",
    shortDesc: "Upload maps for VLM-powered interpretation",
    genAI: "Vision-Language Model (VLM)",
    icon: "map",
  },
  dataRecommender: {
    name: "GTK Data Recommender",
    shortDesc: "Find the right GTK datasets for your project",
    genAI: "Structured Output + Tool Calling",
    icon: "database",
  },
  geochemicalExplainer: {
    name: "Geochemical Anomaly Explainer",
    shortDesc: "Interpret element concentrations in geological context",
    genAI: "RAG + Quantitative Analysis",
    icon: "flask",
  },
};

export function getProductsByTheme(theme: string) {
  return GTK_PRODUCTS.filter(p => p.theme.toLowerCase().includes(theme.toLowerCase()));
}

export function getProductById(id: string) {
  return GTK_PRODUCTS.find(p => p.id === id);
}

export function searchProducts(query: string) {
  const q = query.toLowerCase();
  return GTK_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.keywords.some(k => k.toLowerCase().includes(q))
  );
}
