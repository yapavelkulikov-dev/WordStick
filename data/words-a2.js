// WordStick — A2 Vocabulary (stub / template)
// Target: ~750 NEW words (cumulative total 1500)
// Status: placeholder — expand after A1 is complete
//
// A2 themes to cover:
//   - Extended professional vocabulary (project management, procurement)
//   - Intermediate verbs (negotiate, clarify, schedule, prioritize)
//   - Common phrasal verbs (follow up, look into, bring up, wrap up)
//   - Engineer: GD&T basics, material specs, QA/QC terminology
//   - Social: banking deeper, healthcare deeper, housing
//   - Numbers: fractions, percentages, larger numbers
//
// Format: same as WORDS_A1 in data/words.js

const WORDS_A2 = [
  { id:'negotiate', en:'negotiate', ru:'переговоры вести', image:null, emoji:'🤝', level:'A2', category:'work-meetings',
    forms:{ type:'verb-regular', thirdPerson:'negotiates', past:'negotiated', ingForm:'negotiating' },
    examples:['Negotiate the contract.','We negotiated a better price.','Negotiating delivery terms.'] },

  { id:'clarify', en:'clarify', ru:'уточнить / прояснить', image:null, emoji:'💡', level:'A2', category:'work-meetings',
    forms:{ type:'verb-regular', thirdPerson:'clarifies', past:'clarified', ingForm:'clarifying' },
    examples:['Can you clarify that?','Clarify the requirements.','Let me clarify.'] },

  { id:'prioritize', en:'prioritize', ru:'расставлять приоритеты', image:null, emoji:'📊', level:'A2', category:'engineer-management',
    forms:{ type:'verb-regular', thirdPerson:'prioritizes', past:'prioritized', ingForm:'prioritizing' },
    examples:['Prioritize safety.','We need to prioritize this.','How do we prioritize?'] },

  { id:'delegate', en:'delegate', ru:'делегировать', image:null, emoji:'👥', level:'A2', category:'engineer-management',
    forms:{ type:'verb-regular', thirdPerson:'delegates', past:'delegated', ingForm:'delegating' },
    examples:['Delegate the task.','He delegated it.','Delegate to the team.'] },

  { id:'prototype', en:'prototype', ru:'прототип', image:null, emoji:'🔬', level:'A2', category:'engineer-cad',
    forms:{ type:'noun', plural:'prototypes' },
    examples:['Build a prototype.','Test the prototype.','First prototype done.'] },

  { id:'milestone', en:'milestone', ru:'веха / ключевой этап', image:null, emoji:'🏁', level:'A2', category:'engineer-management',
    forms:{ type:'noun', plural:'milestones' },
    examples:['Hit the milestone.','Project milestone.','Next milestone is April.'] },

  { id:'gdt', en:'GD&T', ru:'допуски формы и расположения', image:null, emoji:'📐', level:'A2', category:'engineer-drawings',
    forms:{ type:'other' },
    examples:['GD&T callout.','GD&T training.','Apply GD&T to the drawing.'] },

  { id:'flatness', en:'flatness', ru:'плоскостность', image:null, emoji:'▬', level:'A2', category:'engineer-drawings',
    forms:{ type:'noun', plural:null },
    examples:['Flatness 0.05mm.','Check flatness.','Flatness callout.'] },

  { id:'concentricity', en:'concentricity', ru:'соосность', image:null, emoji:'◎', level:'A2', category:'engineer-drawings',
    forms:{ type:'noun', plural:null },
    examples:['Concentricity tolerance.','Check concentricity.','Concentricity is out.'] },

  { id:'procurement', en:'procurement', ru:'снабжение / закупки', image:null, emoji:'🛒', level:'A2', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Procurement department.','Go through procurement.','Procurement delay.'] },

  // ... (add ~740 more words following same format)
];

if (typeof module !== 'undefined') module.exports = { WORDS_A2 };
