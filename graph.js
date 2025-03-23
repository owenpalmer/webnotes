const data = {
    nodes: [
        { id: "numbers", label: "Numbers & Counting", level: 0 },
        { id: "operations", label: "Basic Operations", level: 0 },
        { id: "patterns", label: "Patterns & Relations", level: 0 },
        { id: "algebra", label: "Algebra", level: 1 },
        { id: "geometry", label: "Geometry", level: 1 },
        { id: "analysis", label: "Analysis", level: 1 },
        { id: "topology", label: "Topology", level: 2 },
        { id: "logic", label: "Logic & Foundations", level: 2 },
        { id: "probability", label: "Probability & Statistics", level: 2 },
        { id: "numberTheory", label: "Number Theory", level: 2 },
        { id: "dataScience", label: "Data Science", level: 2 },
        { id: "cryptography", label: "Cryptography", level: 2 },
        { id: "quantum", label: "Quantum Computing", level: 2 },
    ],
    links: [
        // Foundation connections
        { source: "numbers", target: "algebra" },
        { source: "numbers", target: "numberTheory" },
        { source: "operations", target: "algebra" },
        { source: "operations", target: "analysis" },
        { source: "patterns", target: "algebra" },
        { source: "patterns", target: "analysis" },

        // Core branch connections
        { source: "algebra", target: "topology" },
        { source: "algebra", target: "analysis" },
        { source: "algebra", target: "cryptography" },
        { source: "geometry", target: "topology" },
        { source: "geometry", target: "analysis" },
        { source: "analysis", target: "topology" },
        { source: "analysis", target: "probability" },

        // Advanced topic connections
        { source: "probability", target: "dataScience" },
        { source: "numberTheory", target: "cryptography" },
        { source: "topology", target: "quantum" },
        { source: "analysis", target: "quantum" }
    ]
};