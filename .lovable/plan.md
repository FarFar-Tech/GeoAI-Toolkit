

# GTK GeoAI Toolkit — Multi-Tool Dashboard

A professional AI-powered web application that demonstrates how Generative AI can transform GTK's geological and geospatial datasets into actionable insights for mineral exploration and environmental management.

---

## Architecture Overview

The app uses a **sidebar dashboard layout** with multiple AI-powered tools, each targeting a specific GTK use case. A pre-loaded knowledge base containing GTK's product catalog, geological terminology, Finnish bedrock/geochemistry metadata, and domain expertise powers all AI interactions via RAG.

Backend: **Lovable Cloud** edge functions + **Lovable AI Gateway** for LLM calls.

---

## Dashboard Layout

- **Left sidebar**: Navigation between tools, GTK branding, user context
- **Main area**: Active tool with chat interface and data visualization
- **Color scheme**: Professional geological theme — deep blues (#1a365d), earth tones, clean whites

---

## Tool 1: Mineral Prospectivity AI Assistant

**Purpose**: Chat-based tool that answers questions about mineral exploration potential using GTK's mineral deposits, geochemistry, prospectivity modelling, and bedrock data.

**Features**:
- Conversational AI chat where users ask questions like:
  - *"What critical minerals have been identified in the Kuusamo schist belt?"*
  - *"Compare the geochemical signatures of Cu-Au deposits in Pohjanmaa vs. Lapland"*
  - *"Which GTK datasets should I combine for greenfield gold exploration in central Finland?"*
- Pre-loaded knowledge base covering: Mineral deposits database, Mineral prospectivity modelling, Metallogenic areas, Rock geochemical data, Till geochemistry, Bedrock maps, Drill core archive
- Suggested questions panel for quick start
- AI responses cite specific GTK data products and recommend datasets
- Markdown-rendered responses with structured tables

---

## Tool 2: Environmental Risk Screener

**Purpose**: AI tool for environmental management — assessing acid sulfate soils, groundwater vulnerability, peatland carbon, and construction suitability.

**Features**:
- Chat interface for environmental queries:
  - *"What environmental risks should be assessed before construction in coastal Ostrobothnia?"*
  - *"How do acid sulfate soils in this region affect water quality?"*
  - *"Estimate peatland carbon storage implications for a wind farm in Kainuu"*
- Knowledge base covers: Acid sulfate soils, Groundwater vulnerability, Groundwater recharge potential, Peatland carbon storage, Peatland fertility levels, Clay areas and depths, Construction conditions of superficial deposits
- Risk assessment summaries with severity indicators
- Recommended GTK datasets for each risk factor

---

## Tool 3: Geological Map Interpreter (VLM Demo)

**Purpose**: Upload a geological map image (or select from GTK sample maps) and use a Vision-Language Model to interpret lithology, structures, and geological features.

**Features**:
- Image upload zone for geological map images
- Pre-loaded sample GTK map thumbnails (bedrock maps at various scales)
- VLM-powered analysis that identifies:
  - Rock types and lithological units
  - Structural features (faults, folds, lineaments)
  - Potential mineralization indicators
- Side-by-side view: map image + AI interpretation panel
- References to PEACE/GeoMap-Agent methodology (showing research awareness)

---

## Tool 4: GTK Data Product Recommender

**Purpose**: Describe your project goals in natural language and get AI-recommended GTK datasets with justification.

**Features**:
- Input: Free-text project description (e.g., *"I'm planning a geothermal energy feasibility study in southern Finland"*)
- Output: Ranked list of relevant GTK products with:
  - Product name and description
  - Relevance score and justification
  - License type (Free/Fee-based)
  - Data format and access method
- Covers all 122 GTK Hakku products in the knowledge base
- Cross-references between related products

---

## Tool 5: Geochemical Anomaly Explainer

**Purpose**: Input geochemical element concentrations and get AI-powered interpretation of what they mean geologically.

**Features**:
- Input form for element concentrations (Cu, Au, Ni, Zn, Cr, etc.)
- Context selector: sample type (till, stream sediment, bedrock)
- AI explains:
  - Whether values are anomalous relative to Finnish background levels
  - Possible geological sources
  - Recommended follow-up analyses
  - Relevant GTK geochemical datasets for comparison
- Knowledge base includes: Geochemical atlas of Finland, Geochemical provinces, Regional till/stream sediment geochemistry, Soil geochemical baselines

---

## Pre-loaded Knowledge Base Content

The RAG system will be populated with structured knowledge extracted from:
1. **All 122 GTK Hakku product descriptions** — names, themes, licenses, use cases
2. **Finnish geological domain knowledge** — Fennoscandian Shield geology, common rock types, mineralization styles
3. **GTK data access patterns** — WMS/WFS endpoints, API availability, pricing tiers
4. **Environmental regulations context** — Finnish environmental assessment requirements
5. **Geochemical reference ranges** — Background levels for Finnish soils and tills

---

## Technical Highlights (for hiring managers)

Each tool will display a small "Powered by" badge showing the GenAI techniques used:
- **RAG** (Retrieval-Augmented Generation) with domain-specific geological knowledge
- **Multimodal LLM** for geological map interpretation
- **Structured output** via tool-calling for data product recommendations
- **Domain-specific prompt engineering** for geoscientific accuracy

---

## Landing Page

A clean hero section explaining: *"GTK GeoAI Toolkit — Transforming geological data into actionable insights with Generative AI"* with cards linking to each tool and a brief explanation of the GenAI approach used.

