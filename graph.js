const data = {
    nodes: [
        // Level 0 (Foundational)
        { id: "7.1", label: "Balancing Equations", level: 0 },

        // Level 1 (Core Concepts)
        { id: "7.2a", label: "Precipitation/Gas Reactions", level: 1 },
        { id: "7.2b", label: "Redox Reactions", level: 1 },
        { id: "7.2c", label: "Neutralization Reactions", level: 1 },
        { id: "7.3", label: "Stoichiometry", level: 1 },
        { id: "8.1", label: "Pressure", level: 1 },
        { id: "8.2", label: "Ideal Gas Law", level: 1 },
        { id: "9.1", label: "Thermodynamics Intro", level: 1 },
        { id: "10.1", label: "Intermolecular Forces", level: 1 },

        // Level 2 (Applications/Specializations)
        { id: "7.4", label: "Limiting Reactant", level: 2 },
        { id: "7.5a", label: "Titrations", level: 2 },
        { id: "7.5b", label: "Gravimetric Analysis", level: 2 },
        { id: "7.5c", label: "Combustion Analysis", level: 2 },
        { id: "8.3", label: "Mixed Gases", level: 2 },
        { id: "8.4", label: "Kinetic Molecular Theory", level: 2 },
        { id: "9.2", label: "Heat Capacities", level: 2 },
        { id: "9.3", label: "Heat and Work", level: 2 },
        { id: "9.4a", label: "Enthalpy (Calorimetry)", level: 2 },
        { id: "9.4b", label: "Enthalpy Part 2", level: 2 },
        { id: "10.2", label: "Liquid Properties", level: 2 },
        { id: "10.3", label: "Phase Transitions", level: 2 },
        { id: "10.4", label: "Phase Diagrams", level: 2 },
        { id: "10.5", label: "Solid Structure", level: 2 },
        { id: "11.1", label: "Solutions", level: 2 },
        { id: "11.2", label: "Solution Types", level: 2 },
        { id: "11.3", label: "Solution Concentrations", level: 2 },
        { id: "11.4", label: "Colligative Properties", level: 2 },
        { id: "11.5", label: "Colloids", level: 2 },
        { id: "12.1", label: "Entropy", level: 2 },
        { id: "12.2", label: "Gibbs Free Energy", level: 2 }
    ],
    links: [
        // From Level 0 (7.1)
        { source: "7.1", target: "7.2a" }, // Balancing → Precipitation
        { source: "7.1", target: "7.2b" }, // Balancing → Redox
        { source: "7.1", target: "7.2c" }, // Balancing → Neutralization
        { source: "7.1", target: "7.3" },  // Balancing → Stoichiometry

        // From Stoichiometry (7.3)
        { source: "7.3", target: "7.4" },  // → Limiting Reactant
        { source: "7.3", target: "7.5a" }, // → Titrations
        { source: "7.3", target: "7.5b" }, // → Gravimetric
        { source: "7.3", target: "7.5c" }, // → Combustion Analysis
        { source: "7.3", target: "8.2" },  // → Ideal Gas Law (moles)
        { source: "7.3", target: "9.4a" }, // → Calorimetry (enthalpy/mole)
        { source: "7.3", target: "11.3" }, // → Solution Concentrations

        // Reaction Types (7.2a-c)
        { source: "7.2a", target: "7.5b" }, // Precipitation → Gravimetric
        { source: "7.2b", target: "7.5a" }, // Redox → Titrations
        { source: "7.2b", target: "7.5c" }, // Redox → Combustion
        { source: "7.2c", target: "7.5a" }, // Neutralization → Titrations

        // Gases (8.x)
        { source: "8.1", target: "8.2" },  // Pressure → Ideal Gas Law
        { source: "8.2", target: "8.3" },  // Ideal → Mixed Gases
        { source: "8.2", target: "8.4" },  // Ideal → Kinetic Theory
        { source: "8.2", target: "9.3" },  // Ideal Gas → Heat/Work (expansion)

        // Thermodynamics (9.x)
        { source: "9.1", target: "9.2" },  // Intro → Heat Capacities
        { source: "9.1", target: "9.3" },  // Intro → Heat/Work
        { source: "9.1", target: "9.4a" }, // Intro → Enthalpy
        { source: "9.1", target: "12.1" }, // Intro → Entropy
        { source: "9.4a", target: "9.4b" }, // Enthalpy Part 1 → Part 2
        { source: "9.4b", target: "12.2" }, // Enthalpy → Gibbs

        // Intermolecular Forces (10.1)
        { source: "10.1", target: "10.2" }, // → Liquid Properties
        { source: "10.1", target: "10.3" }, // → Phase Transitions
        { source: "10.1", target: "10.4" }, // → Phase Diagrams
        { source: "10.1", target: "10.5" }, // → Solid Structure
        { source: "10.1", target: "11.1" }, // → Solutions

        // Solutions (11.x)
        { source: "11.1", target: "11.2" }, // → Solution Types
        { source: "11.1", target: "11.5" }, // → Colloids
        { source: "7.2b", target: "11.5" }, // → Colloids
        { source: "11.3", target: "11.4" }, // Concentrations → Colligative Props

        // Entropy/Gibbs (12.x)
        { source: "12.1", target: "12.2" }  // Entropy → Gibbs
    ]
};