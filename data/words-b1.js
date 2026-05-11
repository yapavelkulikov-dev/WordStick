// WordStick — B1 Vocabulary (stub / template)
// Target: ~1000 NEW words (cumulative total 2500)
// Status: placeholder — expand after A2 is complete
//
// B1 themes to cover:
//   - Complex professional communication (presentations, negotiations)
//   - Advanced engineering: FEA basics, simulation, failure analysis
//   - Idioms and collocations used in American workplace
//   - Legal/HR basics (contract, liability, compliance)
//   - Technical writing vocabulary
//
// Format: same as WORDS_A1 in data/words.js

const WORDS_B1 = [
  { id:'liability', en:'liability', ru:'ответственность / обязательство', image:null, emoji:'⚖️', level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'liabilities' },
    examples:['Product liability.','Limit liability.','Liability waiver.'] },

  { id:'compliance', en:'compliance', ru:'соответствие / соблюдение', image:null, emoji:'✅', level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:null },
    examples:['In compliance with OSHA.','Compliance audit.','Meet compliance standards.'] },

  { id:'finite-element', en:'finite element analysis', ru:'метод конечных элементов', image:null, emoji:'🔬', level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Run FEA on the bracket.','FEA results.','FEA shows stress concentration.'] },

  { id:'yield-strength', en:'yield strength', ru:'предел текучести', image:null, emoji:'💪', level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Exceeds yield strength.','Below yield strength.','Yield strength of steel.'] },

  { id:'fatigue', en:'fatigue', ru:'усталость (материала)', image:null, emoji:'⚠️', level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Metal fatigue.','Fatigue failure.','Fatigue testing.'] },

  // ... (add ~995 more words following same format)
];

if (typeof module !== 'undefined') module.exports = { WORDS_B1 };
