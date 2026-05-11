// WordStick — B1 Vocabulary
// 1000 NEW words (cumulative total A1+A2+B1 = 2500)
// Topics: complex professional communication, advanced engineering, idioms, legal/HR basics, technical writing

const WORDS_B1 = [
  // ─── Advanced Engineering — Stress & Mechanics ────────────────────────────
  { id:'stress', en:'stress (mechanical)', ru:'напряжение (механическое)', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Tensile stress.','Shear stress.','Bending stress.','Stress concentration.'] },
  { id:'strain', en:'strain', ru:'деформация (относительная)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Strain gauge.','Elastic strain.','Plastic strain.','Strain measurement.'] },
  { id:'modulus', en:'elastic modulus (Young's modulus)', ru:'модуль упругости (Юнга)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'moduli' },
    examples:['Steel modulus 200 GPa.','Young's modulus.','Modulus of elasticity.','Calculate modulus.'] },
  { id:'poisson', en:'Poisson's ratio', ru:'коэффициент Пуассона', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Poisson's ratio 0.3.','Lateral strain.','Calculate Poisson's ratio.','Incompressible material.'] },
  { id:'buckling', en:'buckling', ru:'потеря устойчивости / выпучивание', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Column buckling.','Buckling load.','Buckling analysis.','Prevent buckling.'] },
  { id:'creep', en:'creep (materials)', ru:'ползучесть (материала)', image:null, emoji:'⏳', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['High-temperature creep.','Creep rate.','Creep rupture.','Creep resistant.'] },
  { id:'fracture', en:'fracture', ru:'разрушение / трещина', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'fractures' },
    examples:['Brittle fracture.','Fracture mechanics.','Fracture toughness.','Fatigue fracture.'] },
  { id:'toughness', en:'fracture toughness', ru:'вязкость разрушения', image:null, emoji:'💪', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['KIC toughness.','High toughness.','Fracture toughness test.','Toughness value.'] },
  { id:'stress-concentration', en:'stress concentration factor', ru:'коэффициент концентрации напряжений', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Kt = 2.5.','Stress concentration.','Reduce Kt.','Fillet reduces concentration.'] },
  { id:'endurance-limit', en:'endurance limit', ru:'предел выносливости', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Below endurance limit.','Endurance limit of steel.','S-N curve.','Infinite life.'] },

  // ─── FEA & Simulation ─────────────────────────────────────────────────────
  { id:'fea', en:'finite element analysis (FEA)', ru:'метод конечных элементов (МКЭ)', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Run FEA.','FEA mesh.','FEA results.','FEA stress map.'] },
  { id:'mesh', en:'mesh (FEA)', ru:'сетка конечных элементов', image:null, emoji:'🔲', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'meshes' },
    examples:['Mesh the model.','Fine mesh.','Mesh quality.','Refine the mesh.'] },
  { id:'boundary-condition', en:'boundary condition', ru:'граничное условие', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'boundary conditions' },
    examples:['Apply boundary conditions.','Fixed boundary.','Symmetric BC.','Boundary condition error.'] },
  { id:'load-case', en:'load case', ru:'случай нагружения', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'load cases' },
    examples:['Define load cases.','Worst load case.','Multiple load cases.','Load case combination.'] },
  { id:'convergence', en:'convergence (FEA)', ru:'сходимость (в МКЭ)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Solution converged.','Convergence check.','Mesh convergence.','Did not converge.'] },
  { id:'modal-analysis', en:'modal analysis', ru:'модальный анализ', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Modal analysis.','Natural frequencies.','Mode shapes.','Modal FEA.'] },
  { id:'thermal-analysis', en:'thermal analysis', ru:'тепловой анализ', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Thermal FEA.','Temperature distribution.','Thermal gradient.','Thermal analysis results.'] },
  { id:'safety-factor', en:'factor of safety (FoS)', ru:'коэффициент запаса прочности', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['FoS = 2.0.','Safety factor of 3.','Minimum factor of safety.','Check FoS.'] },
  { id:'von-mises', en:'von Mises stress', ru:'напряжение по Мизесу', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Von Mises stress.','Equivalent stress.','Compare to yield.','Von Mises contour.'] },
  { id:'deflection', en:'deflection', ru:'прогиб / отклонение', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'deflections' },
    examples:['Max deflection 2mm.','Beam deflection.','Limit deflection.','Calculate deflection.'] },

  // ─── Advanced Manufacturing ───────────────────────────────────────────────
  { id:'gcode', en:'G-code', ru:'программа ЧПУ (Г-код)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Write G-code.','G-code program.','G01 linear move.','Edit G-code.'] },
  { id:'spindle', en:'spindle', ru:'шпиндель', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'spindles' },
    examples:['Spindle speed.','Spindle load.','Spindle motor.','Change spindle.'] },
  { id:'feed-rate', en:'feed rate', ru:'подача (скорость перемещения)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Feed rate mm/rev.','Reduce feed rate.','Optimal feed rate.','Feed rate override.'] },
  { id:'chip-load', en:'chip load', ru:'толщина стружки', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Chip load per tooth.','Calculate chip load.','Increase chip load.','Chip load 0.002 in.'] },
  { id:'tool-wear', en:'tool wear', ru:'износ инструмента', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Monitor tool wear.','Excessive tool wear.','Tool life.','Replace worn tool.'] },
  { id:'coolant', en:'coolant', ru:'охлаждающая жидкость / СОЖ', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Apply coolant.','Coolant flow.','Coolant concentration.','Through-spindle coolant.'] },
  { id:'fixture', en:'fixture (machining)', ru:'приспособление / оснастка', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'fixtures' },
    examples:['Design fixture.','Fixture drawing.','Clamp in fixture.','Modular fixture.'] },
  { id:'workholding', en:'workholding', ru:'закрепление заготовки', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Workholding solution.','Chuck workholding.','Vacuum workholding.','Design workholding.'] },
  { id:'tolerance-analysis', en:'tolerance analysis', ru:'анализ допусков', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'other' },
    examples:['Tolerance analysis.','Worst-case analysis.','RSS tolerance.','Perform tolerance analysis.'] },
  { id:'inspection-plan', en:'inspection plan', ru:'план контроля', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'inspection plans' },
    examples:['Create inspection plan.','100% inspection.','Sampling inspection plan.','Control plan.'] },

  // ─── Technical Writing ────────────────────────────────────────────────────
  { id:'executive-summary', en:'executive summary', ru:'краткое резюме для руководства', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'executive summaries' },
    examples:['Write an executive summary.','One-page executive summary.','Executive summary of the report.','Lead with executive summary.'] },
  { id:'abstract-doc', en:'abstract (document)', ru:'аннотация / реферат', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'abstracts' },
    examples:['Write the abstract.','200-word abstract.','Technical paper abstract.','Abstract summarizes findings.'] },
  { id:'technical-report', en:'technical report', ru:'технический отчёт', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'technical reports' },
    examples:['Write a technical report.','Formal technical report.','Submit the report.','Technical report format.'] },
  { id:'white-paper', en:'white paper', ru:'технический документ / белая книга', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'white papers' },
    examples:['Publish a white paper.','Industry white paper.','Read the white paper.','Company white paper.'] },
  { id:'footnote', en:'footnote', ru:'сноска', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'footnotes' },
    examples:['See footnote 3.','Add a footnote.','Footnote references.','Footnote on the page.'] },
  { id:'citation', en:'citation', ru:'ссылка / цитата (в документе)', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'citations' },
    examples:['Add citation.','IEEE citation.','Cite the standard.','Missing citation.'] },
  { id:'plagiarism', en:'plagiarism', ru:'плагиат', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:null },
    examples:['Avoid plagiarism.','Plagiarism check.','Academic plagiarism.','Original work, no plagiarism.'] },
  { id:'passive-voice', en:'passive voice', ru:'пассивный залог', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Written in passive voice.','The part was inspected.','Use passive in reports.','Passive in technical writing.'] },
  { id:'concise', en:'concise', ru:'лаконичный / краткий', image:null, emoji:'✂️', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'other' },
    examples:['Be concise.','Concise writing.','Concise summary.','Keep it concise.'] },
  { id:'coherent', en:'coherent', ru:'связный / логичный', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'other' },
    examples:['Coherent argument.','Coherent report.','Write coherently.','Logical and coherent.'] },

  // ─── Presentations & Public Speaking ──────────────────────────────────────
  { id:'slide-presentation', en:'slide presentation', ru:'презентация слайдов', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'slide presentations' },
    examples:['Give a presentation.','PowerPoint slide.','Slide deck.','Engineering slide presentation.'] },
  { id:'audience', en:'audience', ru:'аудитория / слушатели', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'audiences' },
    examples:['Know your audience.','Large audience.','Technical audience.','Engage the audience.'] },
  { id:'opening-statement', en:'opening statement', ru:'вступительное слово', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'opening statements' },
    examples:['Strong opening statement.','Begin with an opening.','Opening statement clear.','Draft opening statement.'] },
  { id:'transition', en:'transition', ru:'переход (в речи / презентации)', image:null, emoji:'➡️', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'transitions' },
    examples:['Smooth transition.','Transition to next slide.','Use transitions.','Transition phrase.'] },
  { id:'q-a', en:'Q&A session', ru:'сессия вопросов и ответов', image:null, emoji:'❓', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'Q&A sessions' },
    examples:['Open Q&A.','Q&A at the end.','Handle Q&A.','Tough Q&A question.'] },
  { id:'handout', en:'handout', ru:'раздаточный материал', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'handouts' },
    examples:['Prepare handouts.','Distribute handout.','One-page handout.','Reference handout.'] },
  { id:'podium', en:'podium', ru:'трибуна / кафедра', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'podiums' },
    examples:['Stand at podium.','Step to the podium.','Present from podium.','Podium microphone.'] },
  { id:'impromptu', en:'impromptu (speech)', ru:'экспромт / речь без подготовки', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'other' },
    examples:['Impromptu remarks.','Speak impromptu.','Impromptu question.','Handle impromptu well.'] },
  { id:'persuade', en:'to persuade', ru:'убеждать', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'persuaded' },
    examples:['Persuade management.','Persuaded the team.','Hard to persuade.','Persuade with data.'] },
  { id:'facilitate-debate', en:'to moderate (discussion)', ru:'модерировать / вести дискуссию', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'verb', v3:'moderated' },
    examples:['Moderate the discussion.','Moderated the Q&A.','Moderate fairly.','Skilled moderator.'] },

  // ─── Negotiation & Contracts ──────────────────────────────────────────────
  { id:'counterproposal', en:'counterproposal', ru:'встречное предложение', image:null, emoji:'↔️', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'counterproposals' },
    examples:['Submit a counterproposal.','Their counterproposal.','Accept counterproposal.','Negotiate counterproposal.'] },
  { id:'concession', en:'concession', ru:'уступка (в переговорах)', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'concessions' },
    examples:['Make a concession.','Trade concessions.','No concessions.','Concession on price.'] },
  { id:'leverage', en:'leverage', ru:'рычаг влияния / преимущество', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:null },
    examples:['Negotiation leverage.','Use your leverage.','Lose leverage.','Create leverage.'] },
  { id:'walkaway', en:'walkaway point', ru:'точка выхода из переговоров', image:null, emoji:'🚶', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'walkaway points' },
    examples:['Know your walkaway.','Walkaway point $500k.','Below walkaway.','Set walkaway price.'] },
  { id:'best-alternative', en:'BATNA', ru:'лучшая альтернатива переговорному соглашению', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'other' },
    examples:['Know your BATNA.','Strong BATNA.','Improve your BATNA.','BATNA leverage.'] },
  { id:'indemnification', en:'indemnification', ru:'возмещение ущерба / ответственность', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:null },
    examples:['Indemnification clause.','Mutual indemnification.','Indemnify the losses.','Indemnification limits.'] },
  { id:'force-majeure', en:'force majeure', ru:'форс-мажор', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['Force majeure clause.','Invoke force majeure.','Force majeure event.','COVID force majeure.'] },
  { id:'breach', en:'breach of contract', ru:'нарушение договора', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'breaches' },
    examples:['Breach of contract.','Material breach.','Remedy the breach.','Sue for breach.'] },
  { id:'arbitration', en:'arbitration', ru:'арбитраж', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:null },
    examples:['Arbitration clause.','Go to arbitration.','Binding arbitration.','Arbitration award.'] },
  { id:'liquidated-damages', en:'liquidated damages', ru:'заранее оговорённые убытки', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:null },
    examples:['Liquidated damages clause.','LD per day.','Cap on LDs.','Trigger liquidated damages.'] },

  // ─── HR & Workplace Law ───────────────────────────────────────────────────
  { id:'equal-opportunity', en:'equal opportunity employer', ru:'работодатель с равными возможностями', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['EOE statement.','Equal opportunity policy.','Comply with EOE.','Discrimination-free.'] },
  { id:'harassment', en:'harassment', ru:'преследование / домогательство', image:null, emoji:'🚫', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['No harassment policy.','Report harassment.','Sexual harassment training.','Workplace harassment.'] },
  { id:'grievance', en:'grievance', ru:'жалоба / претензия (трудовая)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'grievances' },
    examples:['File a grievance.','Grievance procedure.','Formal grievance.','Resolve grievance.'] },
  { id:'union', en:'labor union', ru:'профсоюз', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'labor unions' },
    examples:['Union contract.','Union member.','Collective bargaining.','UAW union.'] },
  { id:'severance', en:'severance pay', ru:'выходное пособие', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Severance package.','Two weeks severance.','Severance agreement.','Negotiate severance.'] },
  { id:'termination', en:'termination', ru:'увольнение / расторжение договора', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'terminations' },
    examples:['Termination letter.','At-will termination.','Termination for cause.','Wrongful termination.'] },
  { id:'at-will', en:'at-will employment', ru:'трудоустройство по желанию (без гарантий)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['At-will state.','At-will employer.','At-will termination.','At-will agreement.'] },
  { id:'non-compete', en:'non-compete clause', ru:'оговорка о неконкуренции', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'non-compete clauses' },
    examples:['Sign non-compete.','Non-compete violation.','Non-compete period.','Enforce non-compete.'] },
  { id:'background-check', en:'background check', ru:'проверка биографических данных', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'background checks' },
    examples:['Pass background check.','Criminal background check.','Background check required.','Background check cleared.'] },
  { id:'i9', en:'I-9 form', ru:'форма I-9 (подтверждение права на работу в США)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['Complete I-9.','I-9 verification.','I-9 documents.','E-verify I-9.'] },

  // ─── Advanced Communication Idioms ────────────────────────────────────────
  { id:'cut-to-chase', en:'cut to the chase', ru:'перейти к делу', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'cut to the chase' },
    examples:['Let me cut to the chase.','Cut to the chase please.','No time, cut to chase.','Cut to the chase: we failed.'] },
  { id:'move-needle', en:'move the needle', ru:'сдвинуть с мёртвой точки / добиться результата', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'moved the needle' },
    examples:['Did it move the needle?','Nothing moves the needle.','Move the needle on quality.','Hard to move the needle.'] },
  { id:'low-hanging-fruit', en:'low-hanging fruit', ru:'лёгкий результат / то, что легко сделать', image:null, emoji:'🍎', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Start with low-hanging fruit.','Easy wins first.','Low-hanging fruit identified.','Pick the low-hanging fruit.'] },
  { id:'boil-ocean', en:'boil the ocean', ru:'пытаться сделать невозможное / тратить время впустую', image:null, emoji:'🌊', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'boiled the ocean' },
    examples:['Don't boil the ocean.','That's boiling the ocean.','Scope too large, boiling ocean.','Avoid boiling the ocean.'] },
  { id:'elephant-room', en:'elephant in the room', ru:'очевидная проблема, о которой все молчат', image:null, emoji:'🐘', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Address the elephant.','Elephant in the room.','The real elephant.','Name the elephant.'] },
  { id:'circle-back', en:'to circle back', ru:'вернуться к вопросу позже', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'circled back' },
    examples:['Circle back later.','Circle back after lunch.','Let us circle back.','Circled back on that.'] },
  { id:'ping-v', en:'to ping (someone)', ru:'написать / дать знать кому-то', image:null, emoji:'📧', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'pinged' },
    examples:['Ping me later.','I pinged the manager.','Ping me on Slack.','Ping me when ready.'] },
  { id:'deep-dive', en:'deep dive', ru:'детальный анализ / углублённое изучение', image:null, emoji:'🤿', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'deep dives' },
    examples:['Do a deep dive.','Deep dive meeting.','Deep dive into data.','Schedule a deep dive.'] },
  { id:'flag-issue', en:'to flag an issue', ru:'отметить / обратить внимание на проблему', image:null, emoji:'🚩', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'flagged' },
    examples:['Flag the issue.','I flagged the risk.','Flag early.','Flag for review.'] },
  { id:'keep-informed', en:'to keep (someone) in the loop', ru:'держать в курсе', image:null, emoji:'🔁', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'kept in the loop' },
    examples:['Keep me in the loop.','She kept us informed.','Keep all in the loop.','Loop everyone in.'] },

  // ─── Advanced Grammar / Discourse ─────────────────────────────────────────
  { id:'insofar', en:'insofar as', ru:'поскольку / насколько', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Insofar as we know.','Insofar as possible.','Valid insofar as tested.','Insofar as costs allow.'] },
  { id:'inasmuch', en:'inasmuch as', ru:'в той мере, в которой / поскольку', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Inasmuch as we agreed.','Inasmuch as practical.','Inasmuch as this applies.','Inasmuch as required.'] },
  { id:'given-that', en:'given that', ru:'учитывая что / принимая во внимание', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Given that the test passed.','Given that resources are limited.','Given that timeline changed.','Given that spec requires.'] },
  { id:'contingent-on', en:'contingent on', ru:'при условии / зависит от', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Contingent on approval.','Contingent on funding.','Results contingent on process.','Contingent on test.'] },
  { id:'by-extension', en:'by extension', ru:'по аналогии / следовательно', image:null, emoji:'➡️', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['By extension, the same applies.','By extension, costs rise.','By extension, all parts.','By extension, the design.'] },
  { id:'in-lieu-of', en:'in lieu of', ru:'вместо / в замену', image:null, emoji:'↔️', imageEligible:false, level:'B1', category:'prepositions',
    forms:{ type:'other' },
    examples:['In lieu of cash.','In lieu of approval.','In lieu of testing.','In lieu of the original.'] },
  { id:'notwithstanding-b1', en:'notwithstanding the foregoing', ru:'несмотря на вышесказанное', image:null, emoji:'↔️', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Notwithstanding the foregoing.','Notwithstanding above.','Clause notwithstanding foregoing.','Notwithstanding all of the above.'] },
  { id:'to-wit', en:'to wit', ru:'а именно / то есть', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['To wit, three issues.','To wit: cost and time.','The problem, to wit.','To wit, the following.'] },
  { id:'viz', en:'viz. (namely)', ru:'а именно (лат. videlicet)', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Three options, viz. A, B, C.','Viz., the first case.','Use viz. in legal docs.','Viz. as listed.'] },
  { id:'ergo', en:'ergo', ru:'следовательно / итак', image:null, emoji:'➡️', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Test failed, ergo redesign.','No data, ergo no approval.','Ergo, we proceed.','Ergo the conclusion.'] },

  // ─── Engineering Leadership & Management ─────────────────────────────────
  { id:'design-authority', en:'design authority', ru:'конструкторский орган / ответственный за конструкцию', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'design authorities' },
    examples:['Design authority approval.','Technical design authority.','Act as design authority.','Designated DA.'] },
  { id:'chief-engineer', en:'chief engineer', ru:'главный инженер', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'chief engineers' },
    examples:['Report to chief engineer.','Chief engineer decision.','Become chief engineer.','Chief engineer review.'] },
  { id:'systems-engineering', en:'systems engineering', ru:'системная инженерия', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Systems engineering approach.','SE process.','Systems engineer role.','Integrated systems engineering.'] },
  { id:'mbse', en:'MBSE (model-based systems engineering)', ru:'системная инженерия на основе моделей', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Use MBSE tools.','MBSE approach.','SysML for MBSE.','MBSE model.'] },
  { id:'trade-study', en:'trade study', ru:'технико-экономическое сравнение (выбор варианта)', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'trade studies' },
    examples:['Conduct a trade study.','Trade study results.','Material trade study.','Trade study matrix.'] },
  { id:'design-margin', en:'design margin', ru:'конструктивный запас', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'design margins' },
    examples:['Positive design margin.','Margin of 30%.','Erode design margin.','Track design margin.'] },
  { id:'icds', en:'interface control document (ICD)', ru:'интерфейсный документ управления', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['Write the ICD.','Review ICD.','ICD defines interfaces.','Update the ICD.'] },
  { id:'pdr', en:'PDR (preliminary design review)', ru:'предварительный конструктивный анализ', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Pass the PDR.','PDR action items.','PDR scheduled.','Prepare for PDR.'] },
  { id:'cdr', en:'CDR (critical design review)', ru:'критический конструктивный анализ', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['CDR complete.','CDR findings.','Pass CDR.','CDR action items.'] },
  { id:'readiness-review', en:'production readiness review (PRR)', ru:'анализ готовности к производству', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['PRR complete.','Production readiness review.','PRR checklist.','Pass PRR.'] },

  // ─── Advanced Engineering Processes ──────────────────────────────────────
  { id:'dvp', en:'DVP&R (design verification plan)', ru:'план верификации конструкции', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Create DVP&R.','DVP test matrix.','DVP results.','Update DVP.'] },
  { id:'fmea', en:'FMEA (failure mode and effects analysis)', ru:'анализ видов и последствий отказов', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Conduct FMEA.','FMEA severity.','FMEA risk priority.','DFMEA and PFMEA.'] },
  { id:'rpn', en:'RPN (risk priority number)', ru:'приоритетное число риска', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['RPN = S × O × D.','High RPN.','Reduce RPN.','RPN threshold.'] },
  { id:'control-plan', en:'control plan', ru:'план управления', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'control plans' },
    examples:['Develop control plan.','Control plan requirements.','Update control plan.','Control plan rev B.'] },
  { id:'validation-v', en:'validation (engineering)', ru:'валидация (инженерная)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Design validation.','Validation test plan.','Validation passed.','V&V process.'] },
  { id:'verification', en:'verification (engineering)', ru:'верификация (инженерная)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Design verification.','Verify against requirements.','Verification complete.','V&V process.'] },
  { id:'qualification', en:'qualification (engineering)', ru:'аттестация / квалификация (технического изделия)', image:null, emoji:'📜', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Qualification testing.','Product qualification.','Qualify the process.','Qualified status.'] },
  { id:'derating', en:'derating', ru:'снижение номинальных характеристик (для надёжности)', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Electrical derating.','Derate the capacitor.','Derating factor.','Apply derating.'] },
  { id:'wearout', en:'wear-out failure', ru:'отказ по износу', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Wear-out mechanism.','Wear-out failure mode.','End of life wear-out.','Predict wear-out.'] },
  { id:'mtbf', en:'MTBF (mean time between failures)', ru:'средняя наработка до отказа', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['MTBF 10,000 hours.','Calculate MTBF.','Improve MTBF.','MTBF prediction.'] },

  // ─── Advanced Materials ───────────────────────────────────────────────────
  { id:'phase-diagram', en:'phase diagram', ru:'фазовая диаграмма', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'phase diagrams' },
    examples:['Iron-carbon phase diagram.','Read phase diagram.','Phase diagram shows.','Eutectic point.'] },
  { id:'austenite', en:'austenite', ru:'аустенит', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Austenitic stainless.','Austenite phase.','Austenitic microstructure.','Transform to austenite.'] },
  { id:'martensite', en:'martensite', ru:'мартенсит', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Martensitic steel.','Martensite hardness.','Form martensite.','Martensite transformation.'] },
  { id:'annealing', en:'annealing', ru:'отжиг', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Full annealing.','Stress relief anneal.','Anneal the part.','Annealing temperature.'] },
  { id:'quenching', en:'quenching', ru:'закалка (в жидкости)', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Oil quench.','Water quench.','Quenching rate.','Quench and temper.'] },
  { id:'tempering', en:'tempering', ru:'отпуск (после закалки)', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Temper at 200°C.','Temper after quench.','Tempering reduces brittleness.','Temper time.'] },
  { id:'nitriding', en:'nitriding', ru:'азотирование', image:null, emoji:'💎', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Gas nitriding.','Nitrided surface.','Nitriding depth.','Ion nitriding.'] },
  { id:'carburizing', en:'carburizing', ru:'цементация', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Pack carburizing.','Gas carburizing.','Carburize the gear.','Case depth from carburizing.'] },
  { id:'microstructure', en:'microstructure', ru:'микроструктура', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'microstructures' },
    examples:['Examine microstructure.','Grain microstructure.','Etched microstructure.','Microstructure analysis.'] },
  { id:'grain-size', en:'grain size', ru:'размер зерна', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Fine grain size.','ASTM grain size.','Grain size measurement.','Coarse grain.'] },

  // ─── Dynamics & Vibration ─────────────────────────────────────────────────
  { id:'natural-frequency', en:'natural frequency', ru:'собственная частота', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'natural frequencies' },
    examples:['Natural frequency 50 Hz.','Avoid natural frequency.','Shift natural frequency.','Mode natural frequency.'] },
  { id:'resonance', en:'resonance', ru:'резонанс', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Avoid resonance.','Resonance frequency.','Resonance failure.','Dampen resonance.'] },
  { id:'damping', en:'damping', ru:'демпфирование / затухание', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Damping ratio.','Add damping.','Viscous damping.','Critical damping.'] },
  { id:'harmonics', en:'harmonics', ru:'гармоники', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Harmonic vibration.','Third harmonic.','Suppress harmonics.','Electrical harmonics.'] },
  { id:'rotordynamics', en:'rotordynamics', ru:'динамика роторов', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Rotordynamic analysis.','Critical speed.','Rotor whirl.','Rotordynamics model.'] },
  { id:'balancing', en:'balancing (rotor)', ru:'балансировка (ротора)', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Dynamic balancing.','Balance the rotor.','ISO balancing grade.','Imbalance.'] },
  { id:'shock', en:'shock load', ru:'ударная нагрузка', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'shock loads' },
    examples:['Shock load 10g.','Withstand shock.','Drop shock test.','Shock and vibration.'] },
  { id:'g-force', en:'g-force', ru:'перегрузка / ускорение силы тяжести', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'g-forces' },
    examples:['3g force.','Spec to 5g.','G-force test.','Survive g-force.'] },
  { id:'power-spectral', en:'power spectral density (PSD)', ru:'спектральная плотность мощности (СПМ)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['PSD profile.','Random vibration PSD.','Apply PSD input.','PSD test.'] },
  { id:'transmissibility', en:'transmissibility', ru:'передаточное отношение (по вибрации)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Transmissibility curve.','Reduce transmissibility.','Peak transmissibility.','Transmissibility ratio.'] },

  // ─── Thermodynamics & Heat Transfer ──────────────────────────────────────
  { id:'thermal-conductivity', en:'thermal conductivity', ru:'теплопроводность', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['High thermal conductivity.','Conductivity of aluminum.','Low k material.','Thermal conductivity W/mK.'] },
  { id:'convection', en:'convection', ru:'конвекция', image:null, emoji:'🌬️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Natural convection.','Forced convection.','Convection coefficient.','Convective cooling.'] },
  { id:'radiation-heat', en:'thermal radiation', ru:'тепловое излучение', image:null, emoji:'☀️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Thermal radiation.','Radiation heat transfer.','Stefan-Boltzmann.','Emissivity.'] },
  { id:'heat-flux', en:'heat flux', ru:'тепловой поток', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Heat flux W/m².','Measure heat flux.','Heat flux sensor.','High heat flux.'] },
  { id:'thermal-resistance', en:'thermal resistance', ru:'тепловое сопротивление', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Thermal resistance °C/W.','Calculate thermal resistance.','Reduce thermal resistance.','Junction thermal resistance.'] },
  { id:'heat-sink', en:'heat sink', ru:'радиатор (охладитель)', image:'heat-sink', emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'heat sinks' },
    examples:['Aluminum heat sink.','Heat sink for CPU.','Heat sink fin.','Attach heat sink.'] },
  { id:'thermal-interface', en:'thermal interface material', ru:'теплоинтерфейсный материал / термопаста', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:null },
    examples:['Apply TIM.','Thermal grease.','TIM conductivity.','Thermal interface material.'] },
  { id:'entropy', en:'entropy', ru:'энтропия', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Increase entropy.','Entropy change.','Thermodynamic entropy.','Entropy cycle.'] },
  { id:'enthalpy', en:'enthalpy', ru:'энтальпия', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Enthalpy change.','Heat of fusion.','Enthalpy of reaction.','Specific enthalpy.'] },
  { id:'thermodynamic-cycle', en:'thermodynamic cycle', ru:'термодинамический цикл', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'thermodynamic cycles' },
    examples:['Rankine cycle.','Brayton cycle.','Carnot cycle.','Refrigeration cycle.'] },

  // ─── Fluid Mechanics ─────────────────────────────────────────────────────
  { id:'reynolds-number', en:'Reynolds number', ru:'число Рейнольдса', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Re = 4000 turbulent.','Low Reynolds number.','Calculate Reynolds.','Transition Re.'] },
  { id:'laminar', en:'laminar flow', ru:'ламинарное течение', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Laminar flow.','Smooth laminar.','Laminar to turbulent.','Laminar boundary layer.'] },
  { id:'turbulent', en:'turbulent flow', ru:'турбулентное течение', image:null, emoji:'🌀', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Turbulent flow.','Turbulent mixing.','Turbulent pipe flow.','Avoid turbulence.'] },
  { id:'pressure-drop', en:'pressure drop', ru:'перепад давления / потеря давления', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'pressure drops' },
    examples:['Pressure drop 2 psi.','Minimize pressure drop.','Measure pressure drop.','Pressure drop calculation.'] },
  { id:'flow-rate', en:'flow rate', ru:'расход', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'flow rates' },
    examples:['Flow rate 10 L/min.','Volumetric flow rate.','Measure flow rate.','Control flow rate.'] },
  { id:'viscosity', en:'viscosity', ru:'вязкость', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'viscosities' },
    examples:['Dynamic viscosity.','Oil viscosity.','High viscosity fluid.','Viscosity measurement.'] },
  { id:'bernoulli', en:'Bernoulli's equation', ru:'уравнение Бернулли', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Apply Bernoulli.','Bernoulli principle.','Bernoulli equation.','Venturi uses Bernoulli.'] },
  { id:'head-loss', en:'head loss', ru:'потери напора', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Major head loss.','Minor head loss.','Darcy-Weisbach head loss.','Calculate head loss.'] },
  { id:'cavitation', en:'cavitation', ru:'кавитация', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Pump cavitation.','Avoid cavitation.','Cavitation damage.','NPSH cavitation.'] },
  { id:'npsh', en:'NPSH (net positive suction head)', ru:'кавитационный запас насоса', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Check NPSH.','NPSHa > NPSHr.','Calculate NPSH.','Insufficient NPSH.'] },

  // ─── Control Systems ──────────────────────────────────────────────────────
  { id:'pid', en:'PID controller', ru:'ПИД-регулятор', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Tune PID.','PID gains.','PID temperature control.','Proportional-Integral-Derivative.'] },
  { id:'setpoint', en:'setpoint', ru:'уставка / заданное значение', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'setpoints' },
    examples:['Temperature setpoint.','Change setpoint.','Reach setpoint.','Setpoint deviation.'] },
  { id:'feedback-loop', en:'feedback loop', ru:'контур обратной связи', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'feedback loops' },
    examples:['Closed feedback loop.','Open loop.','Negative feedback.','Positive feedback loop.'] },
  { id:'transient', en:'transient response', ru:'переходный процесс / переходная характеристика', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'transient responses' },
    examples:['Transient response.','Fast transient.','Overshoot in transient.','Transient analysis.'] },
  { id:'steady-state', en:'steady-state', ru:'установившийся режим', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Steady-state error.','Reach steady state.','Steady-state operation.','Steady-state temperature.'] },
  { id:'overshoot', en:'overshoot', ru:'перерегулирование / выброс', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['10% overshoot.','Reduce overshoot.','Overshoot in step response.','Acceptable overshoot.'] },
  { id:'gain', en:'gain (control)', ru:'коэффициент усиления', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'gains' },
    examples:['Proportional gain.','Increase gain.','Gain tuning.','High gain instability.'] },
  { id:'actuator-ctrl', en:'actuator (control)', ru:'исполнительный механизм', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'actuators' },
    examples:['Linear actuator.','Pneumatic actuator.','Servo actuator.','Actuator response.'] },
  { id:'sensor-ctrl', en:'sensor', ru:'датчик', image:'sensor-ctrl', emoji:'📡', imageEligible:true, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'sensors' },
    examples:['Temperature sensor.','Pressure sensor.','Install sensor.','Sensor calibration.'] },
  { id:'plc-ctrl', en:'PLC programming', ru:'программирование ПЛК', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Ladder logic PLC.','PLC program.','Download to PLC.','Debug PLC code.'] },

  // ─── Advanced CAD & PLM ───────────────────────────────────────────────────
  { id:'parametric', en:'parametric modeling', ru:'параметрическое моделирование', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Parametric design.','Driven by parameters.','Parametric feature.','Change parameter.'] },
  { id:'solid-body', en:'solid body', ru:'тело (в САПР)', image:null, emoji:'🔷', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'solid bodies' },
    examples:['Extrude solid body.','Boolean solid body.','Multi-body part.','Solid body mass.'] },
  { id:'surface-model', en:'surface modeling', ru:'поверхностное моделирование', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Surface model.','NURBS surface.','Thicken surface.','Surface finish model.'] },
  { id:'pdm', en:'PDM (product data management)', ru:'управление данными изделия', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['PDM system.','Check out in PDM.','PDM vault.','PDM workflow.'] },
  { id:'plm', en:'PLM (product lifecycle management)', ru:'управление жизненным циклом изделия', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['PLM system.','PLM data.','Windchill PLM.','PLM integration.'] },
  { id:'cad-api', en:'CAD API', ru:'API для САПР', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['CAD API automation.','Script via API.','CAD macro.','API automation.'] },
  { id:'skeleton-model', en:'skeleton model', ru:'скелетная модель (в САПР)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'skeleton models' },
    examples:['Skeleton model approach.','Top-down via skeleton.','Publish skeleton.','Skeleton constraints.'] },
  { id:'design-table', en:'design table', ru:'таблица параметров (в САПР)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'design tables' },
    examples:['Excel design table.','Configuration design table.','Driven by design table.','Update design table.'] },
  { id:'rendering', en:'rendering (CAD)', ru:'визуализация / рендеринг', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Photorealistic rendering.','Render the model.','Keyshot rendering.','Rendering for marketing.'] },
  { id:'exploded-view', en:'exploded view', ru:'сборочный чертёж в разобранном виде', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'exploded views' },
    examples:['Exploded view drawing.','Create exploded view.','Exploded view for manual.','Isometric exploded view.'] },

  // ─── Environmental & Regulatory ───────────────────────────────────────────
  { id:'rohs', en:'RoHS compliance', ru:'соответствие директиве RoHS (ограничение вредных веществ)', image:null, emoji:'♻️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['RoHS compliant.','RoHS restriction.','RoHS certificate.','EU RoHS.'] },
  { id:'reach', en:'REACH regulation', ru:'регламент REACH (управление химическими веществами)', image:null, emoji:'🧪', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['REACH compliance.','SVHC substance.','REACH restriction.','EU REACH.'] },
  { id:'ul-approval', en:'UL listing/approval', ru:'сертификация UL', image:null, emoji:'🔌', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['UL listed.','UL approval.','UL certification.','Require UL listing.'] },
  { id:'ce-marking', en:'CE marking', ru:'маркировка CE', image:null, emoji:'🇪🇺', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['CE marking required.','CE certification.','Apply CE mark.','EU CE compliance.'] },
  { id:'itar', en:'ITAR', ru:'международные правила торговли оружием США', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['ITAR controlled.','ITAR compliance.','Export ITAR.','ITAR restriction.'] },
  { id:'ear', en:'EAR (export administration regulations)', ru:'экспортный контроль США', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['EAR classification.','Export license EAR.','Dual-use EAR.','EAR compliance.'] },
  { id:'iso-9001', en:'ISO 9001', ru:'стандарт ISO 9001 (система менеджмента качества)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['ISO 9001 certified.','ISO 9001 audit.','ISO 9001 QMS.','Maintain ISO 9001.'] },
  { id:'iso-14001', en:'ISO 14001', ru:'стандарт ISO 14001 (экологический менеджмент)', image:null, emoji:'♻️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['ISO 14001 EMS.','Environmental standard.','ISO 14001 audit.','Certify ISO 14001.'] },
  { id:'as9100', en:'AS9100', ru:'стандарт AS9100 (аэрокосмическая промышленность)', image:null, emoji:'✈️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['AS9100 rev D.','Aerospace AS9100.','AS9100 audit.','AS9100 certified.'] },
  { id:'iatf', en:'IATF 16949', ru:'стандарт IATF 16949 (автомобильная промышленность)', image:null, emoji:'🚗', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['IATF 16949 certified.','Automotive quality IATF.','IATF audit.','IATF supplier.'] },

  // ─── American Professional Culture (B1) ──────────────────────────────────
  { id:'networking', en:'professional networking', ru:'профессиональное нетворкинг / налаживание связей', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:null },
    examples:['LinkedIn networking.','Networking event.','Professional network.','Build your network.'] },
  { id:'elevator-pitch', en:'elevator pitch', ru:'краткая презентация себя / идеи (за 30 секунд)', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'elevator pitches' },
    examples:['Practice elevator pitch.','30-second pitch.','Elevator pitch at conference.','Refine your pitch.'] },
  { id:'mentor-n', en:'mentor', ru:'наставник / ментор', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'mentors' },
    examples:['Find a mentor.','Mentor program.','Mentoring relationship.','Act as mentor.'] },
  { id:'mentee', en:'mentee', ru:'подопечный / обучаемый', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'mentees' },
    examples:['Mentor the mentee.','Mentee progress.','Junior mentee.','Mentoring mentee.'] },
  { id:'professional-dev', en:'professional development', ru:'профессиональное развитие', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['PD budget.','Professional development plan.','Invest in development.','PD conference.'] },
  { id:'continuing-ed', en:'continuing education', ru:'повышение квалификации / непрерывное образование', image:null, emoji:'🎓', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Continuing education credit.','CEU required.','Online continuing ed.','Engineering continuing education.'] },
  { id:'pe-license', en:'PE license (Professional Engineer)', ru:'лицензия дипломированного инженера', image:null, emoji:'📜', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['Get PE license.','PE stamp required.','Pass PE exam.','Licensed PE.'] },
  { id:'pmp', en:'PMP (Project Management Professional)', ru:'сертификат PMP (управление проектами)', image:null, emoji:'📜', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['PMP certified.','Get PMP.','PMP exam.','PMP credential.'] },
  { id:'six-sigma', en:'Six Sigma', ru:'Шесть сигм (методология качества)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Six Sigma project.','Green Belt Six Sigma.','DMAIC Six Sigma.','Six Sigma training.'] },
  { id:'dmaic', en:'DMAIC', ru:'ДМАИК (методология улучшения процессов)', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['DMAIC project.','Define, Measure, Analyze, Improve, Control.','Run DMAIC.','DMAIC tollgate.'] },

  // ─── B1 Verbs — Advanced Usage ────────────────────────────────────────────
  { id:'substantiate', en:'to substantiate', ru:'подтверждать / обосновывать', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'substantiated' },
    examples:['Substantiate the claim.','Substantiated by data.','Cannot substantiate.','Substantiate the design.'] },
  { id:'mitigate', en:'to mitigate', ru:'снижать / смягчать (риск)', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'mitigated' },
    examples:['Mitigate the risk.','Mitigation plan.','Mitigated by design.','Mitigate failure.'] },
  { id:'extrapolate', en:'to extrapolate', ru:'экстраполировать', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'extrapolated' },
    examples:['Extrapolate the data.','Extrapolated trend.','Extrapolate to 1000 cycles.','Do not extrapolate.'] },
  { id:'interpolate', en:'to interpolate', ru:'интерполировать', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'interpolated' },
    examples:['Interpolate between points.','Interpolated value.','Linear interpolation.','Interpolate from table.'] },
  { id:'formulate', en:'to formulate', ru:'формулировать / разрабатывать', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'formulated' },
    examples:['Formulate the strategy.','Formulated the requirement.','Formulate a hypothesis.','Formulate the approach.'] },
  { id:'iterate-b1', en:'to iterate (engineering)', ru:'проводить итерации (в проектировании)', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'iterated' },
    examples:['Iterate on the design.','Iterated 3 times.','Rapid iteration.','Iterate until optimized.'] },
  { id:'benchmark-b1', en:'to benchmark against', ru:'сравнивать с отраслевым стандартом', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'benchmarked' },
    examples:['Benchmark against competitors.','Benchmarked performance.','Benchmark the process.','Benchmark results.'] },
  { id:'characterize', en:'to characterize', ru:'характеризовать / описывать свойства', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'characterized' },
    examples:['Characterize the material.','Characterized by tests.','Characterize behavior.','Fully characterized.'] },
  { id:'quantify', en:'to quantify', ru:'количественно оценивать', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'quantified' },
    examples:['Quantify the risk.','Quantify the savings.','Quantified improvement.','Hard to quantify.'] },
  { id:'derive', en:'to derive', ru:'выводить / получать (формулу/результат)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'derived' },
    examples:['Derive the equation.','Derived from first principles.','Derive the load.','Derive requirements.'] },

  // ─── B1 Nouns — Advanced Engineering ─────────────────────────────────────
  { id:'weld-procedure', en:'welding procedure specification (WPS)', ru:'производственная инструкция по сварке (ПИС)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'welding procedure specifications' },
    examples:['WPS required.','Follow the WPS.','Qualify the WPS.','Write WPS.'] },
  { id:'pqr', en:'PQR (procedure qualification record)', ru:'отчёт об аттестации технологии сварки', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['PQR test.','Qualify WPS with PQR.','PQR documentation.','Acceptable PQR.'] },
  { id:'cwi', en:'CWI (certified welding inspector)', ru:'сертифицированный инспектор по сварке', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['CWI required.','Hire a CWI.','CWI inspection.','AWS CWI.'] },
  { id:'stress-relief', en:'stress relief (heat treatment)', ru:'снятие напряжений (термическая обработка)', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Post-weld stress relief.','Stress relief anneal.','Stress relief required.','Vibratory stress relief.'] },
  { id:'distortion', en:'distortion (welding)', ru:'деформация / коробление (при сварке)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Weld distortion.','Minimize distortion.','Distortion control.','Measure distortion.'] },
  { id:'heat-input', en:'heat input (welding)', ru:'погонная энергия сварки', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Control heat input.','High heat input.','Calculate heat input.','Heat input kJ/mm.'] },
  { id:'interpass-temp', en:'interpass temperature', ru:'температура между проходами сварки', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Max interpass 250°C.','Check interpass temp.','Interpass temperature limit.','Interpass cooling.'] },
  { id:'joint-design', en:'weld joint design', ru:'конструкция сварного соединения', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'weld joint designs' },
    examples:['Joint design drawing.','V-groove joint.','T-joint design.','Joint preparation.'] },
  { id:'nonconformance-report', en:'nonconformance report (NCR)', ru:'акт о несоответствии', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'nonconformance reports' },
    examples:['Write NCR.','NCR number.','Close NCR.','NCR investigation.'] },
  { id:'material-review', en:'material review board (MRB)', ru:'комиссия по рассмотрению материалов/несоответствий', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['MRB decision.','Present to MRB.','MRB disposition.','MRB meeting.'] },

  // ─── B1 — Supply Chain & Operations ──────────────────────────────────────
  { id:'kanban', en:'Kanban', ru:'Канбан (система управления производством)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Kanban board.','Kanban card.','Kanban system.','Pull with Kanban.'] },
  { id:'jit', en:'JIT (just-in-time)', ru:'точно в срок (принцип производства)', image:null, emoji:'⏱️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['JIT delivery.','JIT manufacturing.','JIT reduces inventory.','Implement JIT.'] },
  { id:'pull-system', en:'pull system', ru:'тянущая система (производство)', image:null, emoji:'⬅️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'pull systems' },
    examples:['Pull system Kanban.','Implement pull.','Pull vs push.','Pull system benefits.'] },
  { id:'vmm', en:'vendor-managed inventory (VMI)', ru:'управляемые поставщиком запасы', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'other' },
    examples:['VMI agreement.','Vendor-managed inventory.','VMI benefits.','Consignment VMI.'] },
  { id:'eoq', en:'EOQ (economic order quantity)', ru:'оптимальный размер заказа', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'other' },
    examples:['Calculate EOQ.','EOQ model.','Minimize total cost EOQ.','EOQ formula.'] },
  { id:'safety-stock', en:'safety stock', ru:'страховой запас', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Calculate safety stock.','Safety stock level.','Buffer safety stock.','Reduce safety stock.'] },
  { id:'abc-analysis', en:'ABC analysis (inventory)', ru:'ABC-анализ запасов', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'other' },
    examples:['ABC classification.','A items critical.','Run ABC analysis.','ABC inventory.'] },
  { id:'demand-forecast', en:'demand forecasting', ru:'прогнозирование спроса', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Demand forecast.','Forecast accuracy.','Demand planning.','Demand signal.'] },
  { id:'lead-time-var', en:'lead time variability', ru:'вариабельность времени выполнения заказа', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Reduce lead time variation.','High lead time variability.','Control variability.','Variability impact.'] },
  { id:'supplier-scorecard', en:'supplier scorecard', ru:'оценочная карта поставщика', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:'supplier scorecards' },
    examples:['Review scorecard.','Supplier scorecard metrics.','Quarterly scorecard.','Poor scorecard score.'] },

  // ─── B1 — Finance & Business English ─────────────────────────────────────
  { id:'roi', en:'ROI (return on investment)', ru:'окупаемость инвестиций', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Calculate ROI.','High ROI project.','ROI analysis.','Positive ROI.'] },
  { id:'npv', en:'NPV (net present value)', ru:'чистая приведённая стоимость', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Calculate NPV.','Positive NPV.','NPV analysis.','Discount rate NPV.'] },
  { id:'irr', en:'IRR (internal rate of return)', ru:'внутренняя норма доходности', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['IRR calculation.','High IRR.','Compare IRR.','IRR exceeds hurdle rate.'] },
  { id:'payback-period', en:'payback period', ru:'срок окупаемости', image:null, emoji:'⏳', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'payback periods' },
    examples:['3-year payback.','Short payback period.','Calculate payback.','Payback analysis.'] },
  { id:'depreciation', en:'depreciation', ru:'амортизация', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Asset depreciation.','Straight-line depreciation.','Depreciation schedule.','Fully depreciated.'] },
  { id:'capex', en:'CAPEX (capital expenditure)', ru:'капитальные затраты', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['CAPEX budget.','Capital expenditure.','CAPEX request.','Approve CAPEX.'] },
  { id:'opex', en:'OPEX (operational expenditure)', ru:'операционные затраты', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['OPEX reduction.','Operational cost.','OPEX vs CAPEX.','Control OPEX.'] },
  { id:'cost-benefit', en:'cost-benefit analysis', ru:'анализ затрат и выгод', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Cost-benefit analysis.','Run CBA.','Positive cost-benefit.','CBA result.'] },
  { id:'business-case', en:'business case', ru:'обоснование бизнеса / бизнес-обоснование', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'business cases' },
    examples:['Write a business case.','Business case approved.','Strong business case.','Present business case.'] },
  { id:'break-even', en:'break-even point', ru:'точка безубыточности', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'break-even points' },
    examples:['Break-even at 500 units.','Calculate break-even.','Reach break-even.','Break-even analysis.'] },

  // ─── B1 — Advanced Soft Skills ────────────────────────────────────────────
  { id:'active-listening', en:'active listening', ru:'активное слушание', image:null, emoji:'👂', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:null },
    examples:['Practice active listening.','Active listening technique.','Show you are listening.','Reflect back.'] },
  { id:'empathy', en:'empathy', ru:'эмпатия / сопереживание', image:null, emoji:'❤️', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:null },
    examples:['Show empathy.','Empathy in leadership.','Express empathy.','Empathy at work.'] },
  { id:'constructive', en:'constructive criticism', ru:'конструктивная критика', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'other' },
    examples:['Give constructive feedback.','Constructive criticism.','Accept critique constructively.','Constructive review.'] },
  { id:'accountability', en:'accountability', ru:'ответственность / подотчётность', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Hold accountable.','Accountability culture.','Personal accountability.','Team accountability.'] },
  { id:'ownership', en:'ownership (mindset)', ru:'ответственное отношение / «владение» задачей', image:null, emoji:'🏆', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Take ownership.','Ownership mentality.','Drive ownership.','Show ownership.'] },
  { id:'initiative', en:'initiative', ru:'инициатива', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'initiatives' },
    examples:['Take initiative.','Show initiative.','Strategic initiative.','Initiative rewarded.'] },
  { id:'resilience', en:'resilience', ru:'стрессоустойчивость / жизнестойкость', image:null, emoji:'💪', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Build resilience.','Team resilience.','Resilience under pressure.','Show resilience.'] },
  { id:'adaptability', en:'adaptability', ru:'адаптивность / гибкость', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['High adaptability.','Demonstrate adaptability.','Adaptability to change.','Adaptable team.'] },
  { id:'time-management', en:'time management', ru:'управление временем', image:null, emoji:'⏰', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Good time management.','Time management skill.','Improve time management.','Time management tool.'] },
  { id:'critical-thinking', en:'critical thinking', ru:'критическое мышление', image:null, emoji:'🧠', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Apply critical thinking.','Critical thinking skill.','Think critically.','Critical thinking in engineering.'] },

  // ─── B1 — American Culture / Idioms ──────────────────────────────────────
  { id:'hometown', en:'hometown', ru:'родной город', image:null, emoji:'🏠', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'hometowns' },
    examples:['Where are you from?','My hometown.','Visit hometown.','Small hometown.'] },
  { id:'alma-mater', en:'alma mater', ru:'альма матер / университет который окончил', image:null, emoji:'🎓', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'alma maters' },
    examples:['MIT alma mater.','Go back to alma mater.','Alma mater pride.','Donate to alma mater.'] },
  { id:'tailgating-traffic', en:'tailgating (driving)', ru:'езда вплотную к впереди идущей машине', image:null, emoji:'🚗', imageEligible:false, level:'B1', category:'transport-travel',
    forms:{ type:'noun', plural:null },
    examples:['Avoid tailgating.','Tailgating is dangerous.','He was tailgating.','No tailgating.'] },
  { id:'right-of-way', en:'right of way', ru:'приоритет проезда (на дороге)', image:null, emoji:'🚦', imageEligible:false, level:'B1', category:'transport-travel',
    forms:{ type:'noun', plural:null },
    examples:['Yield right of way.','Who has right of way?','Right of way rules.','Pedestrian right of way.'] },
  { id:'homeowners', en:'homeowners insurance', ru:'страховка дома', image:null, emoji:'🏠', imageEligible:false, level:'B1', category:'home-basic',
    forms:{ type:'other' },
    examples:['Homeowners insurance required.','File a claim.','Premium payment.','Homeowners coverage.'] },
  { id:'condo', en:'condominium (condo)', ru:'кондоминиум / квартира в собственности', image:null, emoji:'🏢', imageEligible:false, level:'B1', category:'home-basic',
    forms:{ type:'noun', plural:'condos' },
    examples:['Buy a condo.','Condo association.','Condo fees.','Downtown condo.'] },
  { id:'escrow', en:'escrow', ru:'счёт эскроу / условный депозит', image:null, emoji:'🏦', imageEligible:false, level:'B1', category:'money-banking',
    forms:{ type:'noun', plural:null },
    examples:['Escrow account.','Held in escrow.','Escrow closing.','Escrow for taxes.'] },
  { id:'closing-costs', en:'closing costs', ru:'расходы при закрытии сделки (покупка жилья)', image:null, emoji:'🏠', imageEligible:false, level:'B1', category:'money-banking',
    forms:{ type:'noun', plural:null },
    examples:['Pay closing costs.','3% closing costs.','Roll closing costs.','Calculate closing costs.'] },
  { id:'refinance', en:'to refinance', ru:'рефинансировать (ипотеку)', image:null, emoji:'🏦', imageEligible:false, level:'B1', category:'money-banking',
    forms:{ type:'verb', v3:'refinanced' },
    examples:['Refinance the mortgage.','Refinanced at lower rate.','Should I refinance?','Cash-out refinance.'] },
  { id:'hoa-meeting', en:'HOA meeting', ru:'собрание ТСЖ', image:null, emoji:'🏘️', imageEligible:false, level:'B1', category:'home-basic',
    forms:{ type:'noun', plural:'HOA meetings' },
    examples:['Attend HOA meeting.','HOA annual meeting.','Vote at HOA.','HOA board meeting.'] },


  { id:'wbs', en:'WBS (work breakdown structure)', ru:'структура декомпозиции работ (WBS)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Create WBS.','WBS level 3.','Decompose in WBS.','WBS dictionary.'] },

  { id:'earned-value', en:'earned value management', ru:'управление освоенным объёмом (EVM)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['EVM metrics.','CPI and SPI.','Earned value analysis.','Track EVM.'] },

  { id:'cpi', en:'CPI (cost performance index)', ru:'индекс выполнения стоимости', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['CPI = EV/AC.','CPI above 1.','CPI below 1 is over budget.','Track CPI.'] },

  { id:'spi', en:'SPI (schedule performance index)', ru:'индекс выполнения расписания', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['SPI = EV/PV.','SPI below 1 delayed.','Monitor SPI.','Improve SPI.'] },

  { id:'eac', en:'EAC (estimate at completion)', ru:'оценка по завершении', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Calculate EAC.','EAC exceeds budget.','Update EAC monthly.','EAC forecast.'] },

  { id:'scope-creep', en:'scope creep', ru:'расползание рамок / несанкционированное расширение объёма', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Avoid scope creep.','Scope creep warning.','Control scope creep.','Scope creep costs.'] },

  { id:'change-control', en:'change control', ru:'управление изменениями', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Change control process.','Submit change control.','Change control board.','Formal change control.'] },

  { id:'configuration-mgmt', en:'configuration management', ru:'управление конфигурацией', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Configuration management plan.','CM system.','Configuration baseline.','CM audit.'] },

  { id:'risk-mitigation', en:'risk mitigation', ru:'снижение рисков', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Risk mitigation plan.','Mitigate risks.','Risk mitigation action.','Residual risk.'] },

  { id:'risk-appetite', en:'risk appetite', ru:'склонность к риску / допустимый уровень риска', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Define risk appetite.','Low risk appetite.','Risk appetite statement.','Acceptable risk appetite.'] },

  // ─── B1 — Advanced Inspection & Metrology ────────────────────────────────

  { id:'cmm-b1', en:'CMM (coordinate measuring machine)', ru:'координатно-измерительная машина (КИМ)', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Program CMM.','CMM inspection.','CMM report.','Renishaw CMM.'] },

  { id:'profilometer', en:'profilometer', ru:'профилометр (для измерения шероховатости)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-tools',
    forms:{ type:'noun', plural:'profilometers' },
    examples:['Measure Ra with profilometer.','Contact profilometer.','Profilometer reading.','Optical profilometer.'] },

  { id:'laser-scanner', en:'laser scanner (metrology)', ru:'лазерный сканер (для измерений)', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-tools',
    forms:{ type:'noun', plural:'laser scanners' },
    examples:['Laser scan the part.','3D laser scanner.','Scanner point cloud.','Metrology laser scanner.'] },

  { id:'point-cloud', en:'point cloud', ru:'облако точек', image:null, emoji:'🔵', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'point clouds' },
    examples:['Point cloud scan.','Process point cloud.','Compare to CAD.','Point cloud deviation.'] },

  { id:'gage-block', en:'gauge block', ru:'концевая мера длины (плитка)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-tools',
    forms:{ type:'noun', plural:'gauge blocks' },
    examples:['Stack gauge blocks.','Jo block.','Gauge block set.','Calibrate with gauge blocks.'] },

  { id:'optical-comparator', en:'optical comparator', ru:'оптический компаратор (профилоскоп)', image:'optical-comparator', emoji:'🔬', imageEligible:true, level:'B1', category:'engineer-tools',
    forms:{ type:'noun', plural:'optical comparators' },
    examples:['Check profile on comparator.','Optical comparator overlay.','Comparator chart.','10x magnification comparator.'] },

  { id:'bore-gauge', en:'bore gauge', ru:'нутромер', image:'bore-gauge', emoji:'📏', imageEligible:true, level:'B1', category:'engineer-tools',
    forms:{ type:'noun', plural:'bore gauges' },
    examples:['Measure bore with gauge.','Telescoping bore gauge.','Digital bore gauge.','Bore gauge reading.'] },

  { id:'traceability', en:'traceability (metrology)', ru:'прослеживаемость (к национальным стандартам)', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['NIST traceability.','Calibration traceability.','Traceable measurement.','Traceability certificate.'] },

  { id:'measurement-uncertainty', en:'measurement uncertainty', ru:'неопределённость измерений', image:null, emoji:'±', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Uncertainty ±0.002mm.','Calculate uncertainty.','GUM uncertainty.','Expanded uncertainty.'] },

  { id:'gage-linearity', en:'gauge linearity', ru:'линейность средства измерения', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Gauge linearity study.','Check linearity.','Linearity error.','Bias and linearity.'] },

  // ─── B1 — Advanced Communication at Work ─────────────────────────────────

  { id:'project-charter', en:'project charter', ru:'устав проекта', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'project charters' },
    examples:['Write project charter.','Charter approved.','Project charter signed.','Update charter.'] },

  { id:'stakeholder-matrix', en:'stakeholder matrix', ru:'матрица заинтересованных сторон', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'stakeholder matrices' },
    examples:['Build stakeholder matrix.','Influence vs interest.','Map stakeholders.','Stakeholder register.'] },

  { id:'communication-plan', en:'communication plan', ru:'план коммуникаций', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'communication plans' },
    examples:['Communication plan.','Who needs to know.','Communication frequency.','Draft comm plan.'] },

  { id:'escalation-path', en:'escalation path', ru:'путь эскалации', image:null, emoji:'⬆️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'escalation paths' },
    examples:['Define escalation path.','Escalation to VP.','Follow escalation path.','Escalation matrix.'] },

  { id:'tollgate', en:'tollgate review', ru:'контрольная точка (проверка готовности)', image:null, emoji:'🚦', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'tollgate reviews' },
    examples:['Pass tollgate.','Tollgate 2 review.','Gate approval.','Tollgate checklist.'] },

  { id:'lessons-database', en:'lessons learned database', ru:'база данных извлечённых уроков', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'lessons learned databases' },
    examples:['Check the database.','Add to LL database.','Search lessons learned.','Update database.'] },

  { id:'best-practice', en:'best practice', ru:'наилучшая практика', image:null, emoji:'⭐', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'best practices' },
    examples:['Industry best practice.','Apply best practices.','Document best practice.','Share best practices.'] },

  { id:'post-mortem', en:'post-mortem analysis', ru:'анализ после завершения (провала)', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'post-mortems' },
    examples:['Run post-mortem.','Post-mortem findings.','No-blame post-mortem.','Project post-mortem.'] },

  { id:'war-room', en:'war room', ru:'оперативный штаб / кризисная комната', image:null, emoji:'🏢', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'war rooms' },
    examples:['Set up war room.','War room for launch.','Crisis war room.','Work in war room.'] },

  { id:'tiger-team', en:'tiger team', ru:'специальная команда для решения проблемы', image:null, emoji:'🐯', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'tiger teams' },
    examples:['Form tiger team.','Tiger team solution.','Deploy tiger team.','Crisis tiger team.'] },

  // ─── B1 — Manufacturing Technology ───────────────────────────────────────

  { id:'poka-yoke', en:'poka-yoke (mistake-proofing)', ru:'пока-ёкэ (защита от ошибок)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Apply poka-yoke.','Poka-yoke device.','Error-proof the process.','Poka-yoke solution.'] },

  { id:'andon', en:'andon (signal system)', ru:'андон (система световых сигналов)', image:null, emoji:'🚦', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Pull andon cord.','Andon light.','Andon system.','Red andon = stop.'] },

  { id:'heijunka', en:'heijunka (production leveling)', ru:'хейдзунка (выравнивание производства)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Heijunka box.','Level production.','Heijunka schedule.','Implement heijunka.'] },

  { id:'gemba-walk', en:'gemba walk', ru:'гемба (выход в цех / производство)', image:null, emoji:'🚶', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'gemba walks' },
    examples:['Go to gemba.','Gemba walk daily.','See the actual.','Gemba observation.'] },

  { id:'oee', en:'OEE (overall equipment effectiveness)', ru:'совокупная эффективность оборудования', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['OEE 85%.','Calculate OEE.','Improve OEE.','World-class OEE.'] },

  { id:'tpm', en:'TPM (total productive maintenance)', ru:'всеобщее обслуживание оборудования', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['TPM program.','Autonomous TPM.','TPM pillar.','Implement TPM.'] },

  { id:'single-piece-flow', en:'single-piece flow', ru:'поштучный поток', image:null, emoji:'➡️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Single-piece flow.','One-piece flow cell.','Reduce batch to one.','Implement single-piece.'] },

  { id:'line-balancing', en:'line balancing', ru:'балансировка производственной линии', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Line balancing study.','Balance the workstations.','Cycle time balance.','Line balancing tool.'] },

  { id:'standard-work', en:'standard work', ru:'стандартизированная работа', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Standard work document.','Follow standard work.','Create standard work.','Update standard work.'] },

  { id:'work-cell', en:'work cell', ru:'производственная ячейка', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'work cells' },
    examples:['Design work cell.','U-shaped cell.','Work cell layout.','Efficient work cell.'] },

  // ─── B1 — Advanced Electrical Engineering ────────────────────────────────

  { id:'power-factor', en:'power factor', ru:'коэффициент мощности', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Power factor 0.95.','Improve power factor.','Unity power factor.','Power factor correction.'] },

  { id:'harmonic-distortion', en:'total harmonic distortion (THD)', ru:'коэффициент гармонических искажений', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['THD 5%.','Reduce THD.','Measure THD.','THD limit.'] },

  { id:'short-circuit', en:'short circuit', ru:'короткое замыкание', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'short circuits' },
    examples:['Short circuit fault.','Short circuit current.','Protect against short.','Short circuit test.'] },

  { id:'ground-fault', en:'ground fault', ru:'замыкание на землю', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'ground faults' },
    examples:['Ground fault circuit.','GFCI protection.','Ground fault detection.','Clear ground fault.'] },

  { id:'overload', en:'overload protection', ru:'защита от перегрузки', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Overload protection.','Set overload relay.','Motor overload.','Overload trip.'] },

  { id:'electrical-isolation', en:'electrical isolation', ru:'электрическая изоляция', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Isolation transformer.','Galvanic isolation.','Measure isolation.','Isolation requirement.'] },

  { id:'dielectric', en:'dielectric strength', ru:'электрическая прочность', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Dielectric strength test.','Hipot test.','Dielectric breakdown.','Dielectric constant.'] },

  { id:'crimp', en:'crimping (wiring)', ru:'обжатие (контакта)', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Crimp the terminal.','Crimp tool.','Proper crimp.','Pull-test crimp.'] },

  { id:'wire-gauge', en:'wire gauge (AWG)', ru:'сечение провода (AWG)', image:null, emoji:'🔌', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['AWG 14 wire.','Wire gauge size.','Select wire gauge.','Current capacity AWG.'] },

  { id:'conduit', en:'conduit', ru:'кабельный канал / трубопровод', image:null, emoji:'🔌', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'conduits' },
    examples:['PVC conduit.','Run wires in conduit.','Metal conduit.','Conduit fill.'] },

  // ─── B1 — Robotics & Automation ───────────────────────────────────────────

  { id:'robot-programming', en:'robot programming', ru:'программирование робота', image:null, emoji:'🤖', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Robot program.','Teach robot path.','Offline programming.','Robot code.'] },

  { id:'teach-pendant', en:'teach pendant', ru:'пульт обучения (робота)', image:'teach-pendant', emoji:'🤖', imageEligible:true, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'teach pendants' },
    examples:['Use teach pendant.','Jog with pendant.','Pendant controls.','Fanuc pendant.'] },

  { id:'end-effector', en:'end effector', ru:'рабочий орган (робота)', image:null, emoji:'🤖', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'end effectors' },
    examples:['Gripper end effector.','Design end effector.','Weld end effector.','Change end effector.'] },

  { id:'collaborative-robot', en:'collaborative robot (cobot)', ru:'коллаборативный робот (кобот)', image:'collaborative-robot', emoji:'🤖', imageEligible:true, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'collaborative robots' },
    examples:['Cobot deployment.','UR cobot.','Safe cobot operation.','Cobot programming.'] },

  { id:'machine-vision', en:'machine vision', ru:'машинное зрение', image:null, emoji:'👁️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Machine vision inspection.','Camera machine vision.','Vision system.','Pass/fail vision.'] },

  { id:'path-planning', en:'path planning (robot)', ru:'планирование траектории робота', image:null, emoji:'🤖', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Path planning algorithm.','Optimize robot path.','Collision-free path.','Path planning software.'] },

  { id:'degrees-of-freedom', en:'degrees of freedom (DOF)', ru:'степени свободы', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['6 DOF robot.','Degrees of freedom.','Constrain DOF.','DOF analysis.'] },

  { id:'servo', en:'servo drive', ru:'сервопривод', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'servo drives' },
    examples:['Servo drive control.','Tune servo.','Servo feedback.','Servo motor.'] },

  { id:'encoder', en:'encoder', ru:'датчик положения / энкодер', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'encoders' },
    examples:['Rotary encoder.','Encoder feedback.','Quadrature encoder.','Encoder resolution.'] },

  { id:'scada', en:'SCADA system', ru:'система диспетчерского управления и сбора данных', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['SCADA monitoring.','SCADA alarm.','SCADA display.','SCADA historian.'] },

  // ─── B1 — Advanced Thermodynamics ────────────────────────────────────────

  { id:'specific-heat', en:'specific heat capacity', ru:'удельная теплоёмкость', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Specific heat 0.9 J/gK.','Water specific heat.','Calculate heat capacity.','Specific heat measurement.'] },

  { id:'latent-heat', en:'latent heat', ru:'скрытая теплота', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Latent heat of fusion.','Latent heat vaporization.','Phase change latent heat.','Absorb latent heat.'] },

  { id:'thermal-expansion', en:'thermal expansion', ru:'тепловое расширение', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Thermal expansion gap.','CTE mismatch.','Expansion joint.','Calculate thermal expansion.'] },

  { id:'cte', en:'CTE (coefficient of thermal expansion)', ru:'коэффициент теплового расширения', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['CTE aluminum 23 ppm.','Match CTE.','CTE mismatch stress.','CTE value.'] },

  { id:'thermal-shock', en:'thermal shock', ru:'термоудар', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Thermal shock failure.','Thermal shock test.','Prevent thermal shock.','Ceramic thermal shock.'] },

  { id:'emissivity', en:'emissivity', ru:'степень черноты / излучательная способность', image:null, emoji:'☀️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Emissivity 0.9.','Blackbody emissivity.','Emissivity measurement.','Surface emissivity.'] },

  { id:'fouling', en:'fouling (heat exchanger)', ru:'загрязнение / обрастание (теплообменника)', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Fouling factor.','Prevent fouling.','Fouling reduces efficiency.','Clean fouling.'] },

  { id:'effectiveness-hx', en:'heat exchanger effectiveness', ru:'эффективность теплообменника', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['HX effectiveness 80%.','NTU method.','Effectiveness-NTU.','Counterflow effectiveness.'] },

  { id:'heat-exchanger', en:'heat exchanger', ru:'теплообменник', image:'heat-exchanger', emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'heat exchangers' },
    examples:['Shell-tube heat exchanger.','Plate heat exchanger.','Design heat exchanger.','Clean heat exchanger.'] },

  { id:'chiller', en:'chiller (industrial)', ru:'чиллер / холодильная машина', image:null, emoji:'❄️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'chillers' },
    examples:['Water chiller.','Chiller system.','Chiller efficiency.','Process chiller.'] },

  // ─── B1 — Advanced Business English ──────────────────────────────────────

  { id:'due-diligence', en:'due diligence', ru:'должная осмотрительность', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:null },
    examples:['Perform due diligence.','Due diligence period.','Technical due diligence.','Due diligence report.'] },

  { id:'synergy', en:'synergy', ru:'синергия', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'synergies' },
    examples:['Achieve synergy.','Identify synergies.','Merger synergies.','Team synergy.'] },

  { id:'paradigm', en:'paradigm', ru:'парадигма / подход', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'paradigms' },
    examples:['Paradigm shift.','New paradigm.','Engineering paradigm.','Outdated paradigm.'] },

  { id:'disruptive', en:'disruptive technology', ru:'разрушительная / подрывная технология', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Disruptive technology.','Disruptive innovation.','Market disruption.','Disruptive startup.'] },

  { id:'competitive-advantage', en:'competitive advantage', ru:'конкурентное преимущество', image:null, emoji:'🏆', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'competitive advantages' },
    examples:['Build competitive advantage.','Sustain advantage.','Cost advantage.','Technology advantage.'] },

  { id:'value-proposition', en:'value proposition', ru:'ценностное предложение', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'value propositions' },
    examples:['Clear value proposition.','Customer value prop.','Define value proposition.','Unique value proposition.'] },

  { id:'go-to-market', en:'go-to-market strategy', ru:'стратегия выхода на рынок', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'go-to-market strategies' },
    examples:['GTM strategy.','Go-to-market plan.','Define GTM.','Execute GTM.'] },

  { id:'market-share', en:'market share', ru:'доля рынка', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Gain market share.','Market share 30%.','Protect market share.','Market share analysis.'] },

  { id:'total-addressable', en:'total addressable market (TAM)', ru:'общий доступный рынок', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['TAM analysis.','$5B TAM.','Define TAM.','Capture TAM.'] },

  { id:'minimum-viable', en:'minimum viable product (MVP)', ru:'минимально жизнеспособный продукт', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Build MVP.','Launch MVP.','MVP feedback.','Iterate from MVP.'] },

  // ─── B1 — Advanced Phrases & Expressions (Work) ──────────────────────────

  { id:'raise-bar', en:'raise the bar', ru:'поднять планку / повысить стандарты', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'raised the bar' },
    examples:['Raise the bar.','We raised the bar.','Set a higher bar.','Bar raised by the client.'] },

  { id:'think-outside-box', en:'think outside the box', ru:'мыслить нестандартно', image:null, emoji:'🧠', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Think outside the box.','Out-of-the-box solution.','Creative thinking.','Outside-the-box approach.'] },

  { id:'hit-ground-running', en:'hit the ground running', ru:'сразу включиться в работу', image:null, emoji:'🏃', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'hit the ground running' },
    examples:['Hit the ground running.','She hit the ground running.','New hire hit ground running.','Ready to hit ground running.'] },

  { id:'push-envelope', en:'push the envelope', ru:'расширять границы возможного', image:null, emoji:'✈️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'pushed the envelope' },
    examples:['Push the envelope.','They push limits.','Innovative, push envelope.','Pushing the envelope.'] },

  { id:'skin-in-game', en:'skin in the game', ru:'личная заинтересованность / ставки', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Have skin in game.','Everyone has skin in game.','No skin in game.','Aligns incentives.'] },

  { id:'bear-fruit', en:'bear fruit', ru:'дать результаты / принести плоды', image:null, emoji:'🍎', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'bore fruit' },
    examples:['Efforts bore fruit.','Will it bear fruit?','Investment bore fruit.','Research bearing fruit.'] },

  { id:'put-pedal', en:'put the pedal to the metal', ru:'ускориться / поддать газу', image:null, emoji:'🚗', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Pedal to the metal.','Time to accelerate.','Push hard now.','All in, pedal to metal.'] },

  { id:'in-trenches', en:'in the trenches', ru:'в окопах / на передовой (работать вплотную)', image:null, emoji:'⚔️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Working in the trenches.','Time in the trenches.','Learn from trenches.','Engineer in the trenches.'] },

  { id:'par-for-course', en:'par for the course', ru:'само собой разумеется / ожидаемый результат', image:null, emoji:'⛳', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['That is par for the course.','Expected outcome.','Par for the course delay.','Normal — par for course.'] },

  { id:'ballpark-b1', en:'in the ballpark (quantity)', ru:'примерно / в нужном диапазоне', image:null, emoji:'⚾', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Are we in the ballpark?','Ballpark of $100k.','In the right ballpark.','Way out of ballpark.'] },

  // ─── B1 — Grammar & Academic Language ────────────────────────────────────

  { id:'modal-would', en:'would (conditional)', ru:'бы (условное наклонение)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['I would recommend.','It would be better.','Would you agree?','Would that work?'] },

  { id:'modal-might', en:'might (possibility)', ru:'возможно / мог бы', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['It might fail.','Might be a defect.','This might work.','Might need redesign.'] },

  { id:'modal-ought', en:'ought to', ru:'следует / должен (моральный)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['You ought to check.','Ought to calibrate.','We ought to document.','Ought to be tested.'] },

  { id:'cleft-sentence', en:'cleft sentence', ru:'расщеплённое предложение (It is X that...)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['It is the cost that matters.','It was the seal that failed.','It is quality that defines.','It is the team that decides.'] },

  { id:'relative-clause', en:'relative clause', ru:'определительное придаточное предложение', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['The part that failed.','The engineer who designed.','The drawing which shows.','The test where we found.'] },

  { id:'inversion', en:'inversion (formal)', ru:'инверсия (в формальной речи)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['Not only did we test.','Rarely have we seen.','Had we known.','Should you need help.'] },

  { id:'ellipsis', en:'ellipsis (grammar)', ru:'эллипсис (пропуск слов)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['Some like steel, others aluminum.','Did you test it? Yes, I did.','Will you help? I hope so.','We can and should.'] },

  { id:'reported-speech', en:'reported speech', ru:'косвенная речь', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['She said it failed.','He reported that costs rose.','They confirmed the spec.','Reported speech in writing.'] },

  { id:'conditional-type2', en:'second conditional', ru:'второй тип условного предложения (нереальное)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['If we had more time, we would test.','If the part were stronger.','What would you do if?','If I were the engineer.'] },

  { id:'conditional-type3', en:'third conditional', ru:'третий тип условного (прошлое нереальное)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'other' },
    examples:['If we had tested, it would not have failed.','Had we known.','If the seal had held.','Would have prevented failure.'] },

  // ─── B1 — Engineering Design Principles ──────────────────────────────────

  { id:'design-for-manufacturing', en:'design for manufacturing (DFM)', ru:'проектирование для производства (DFM)', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Apply DFM.','DFM review.','DFM guideline.','DFM improves cost.'] },

  { id:'dfx', en:'DFx (design for X)', ru:'проектирование с учётом конкретных требований', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['DFA, DFM, DFR.','DFx approach.','DFx analysis.','DFx checklist.'] },

  { id:'design-for-assembly', en:'design for assembly (DFA)', ru:'проектирование для сборки (DFA)', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['DFA analysis.','Reduce part count DFA.','DFA guideline.','DFA score.'] },

  { id:'design-for-reliability', en:'design for reliability (DFR)', ru:'проектирование на надёжность', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['DFR process.','Reliability design.','DFR checklist.','Reliability-driven design.'] },

  { id:'modular-design', en:'modular design', ru:'модульная конструкция', image:null, emoji:'🔷', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['Modular design approach.','Swap modules.','Modular product.','Platform modular design.'] },

  { id:'platform-architecture', en:'platform architecture', ru:'платформенная архитектура', image:null, emoji:'🏗️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'platform architectures' },
    examples:['Common platform.','Platform architecture strategy.','Shared platform.','Platform derivatives.'] },

  { id:'common-components', en:'part commonality', ru:'унификация деталей', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Increase commonality.','Common part across products.','Commonality study.','Part reuse.'] },

  { id:'standardization', en:'standardization', ru:'стандартизация', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Standardize fasteners.','Standardization benefits.','Apply standardization.','Industry standardization.'] },

  { id:'design-intent', en:'design intent', ru:'замысел конструктора / проектный замысел', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Capture design intent.','Understand design intent.','Design intent in CAD.','Preserve design intent.'] },

  { id:'functional-requirement', en:'functional requirement', ru:'функциональное требование', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'functional requirements' },
    examples:['Functional requirements.','Satisfy functional req.','FR allocation.','Write functional requirements.'] },

  // ─── B1 — Regulatory & Compliance ────────────────────────────────────────

  { id:'corrective-prev-action', en:'CAPA effectiveness check', ru:'проверка эффективности КПДП', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['CAPA effectiveness.','Verify CAPA closed.','Effectiveness review.','CAPA verification.'] },

  { id:'design-history', en:'design history file (DHF)', ru:'историческое досье конструкции', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['DHF required.','Maintain DHF.','Medical device DHF.','DHF audit.'] },

  { id:'device-master', en:'device master record (DMR)', ru:'основная запись об изделии', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['DMR document.','Maintain DMR.','DMR requirements.','Medical device DMR.'] },

  { id:'audit-trail', en:'audit trail', ru:'контрольный след / история изменений', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'audit trails' },
    examples:['Maintain audit trail.','Electronic audit trail.','Audit trail required.','21 CFR audit trail.'] },

  { id:'electronic-records', en:'electronic records (21 CFR Part 11)', ru:'электронные записи (правило 21 CFR Part 11)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['21 CFR Part 11.','Electronic records.','Validated system.','E-signature compliance.'] },

  { id:'process-validation', en:'process validation', ru:'валидация процесса', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['IQ OQ PQ validation.','Process validation protocol.','Validated process.','Validation report.'] },

  { id:'iq-oq-pq', en:'IQ/OQ/PQ (installation/operational/performance qualification)', ru:'ИК/ОК/ПК — квалификация оборудования', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['IQ complete.','OQ passed.','PQ acceptable.','Conduct IQ/OQ/PQ.'] },

  { id:'gmp', en:'GMP (good manufacturing practice)', ru:'надлежащая производственная практика', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['GMP compliance.','FDA GMP.','GMP audit.','cGMP.'] },

  { id:'510k', en:'510(k) clearance', ru:'уведомление 510(k) (FDA)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['510k clearance.','Submit 510k.','FDA 510k.','Predicate device.'] },

  { id:'iso-13485', en:'ISO 13485 (medical devices)', ru:'ISO 13485 (медицинские изделия)', image:null, emoji:'⚕️', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['ISO 13485 certified.','Medical device QMS.','ISO 13485 audit.','13485 compliance.'] },



  { id:'asme-y145', en:'ASME Y14.5', ru:'стандарт ASME Y14.5 (GD&T)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'other' },
    examples:['ASME Y14.5 standard.','Per ASME Y14.5.','Y14.5 symbol.','Y14.5 interpretation.'] },

  { id:'maximum-material', en:'maximum material condition (MMC)', ru:'условие максимального металла (ММС)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'other' },
    examples:['MMC modifier.','At MMC.','Bonus tolerance MMC.','MMC vs LMC.'] },

  { id:'least-material', en:'least material condition (LMC)', ru:'условие минимального металла (ЛМС)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'other' },
    examples:['LMC condition.','At LMC.','LMC modifier.','LMC application.'] },

  { id:'regardless-feature', en:'regardless of feature size (RFS)', ru:'независимо от размера элемента', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'other' },
    examples:['RFS condition.','Applied RFS.','RFS default.','No bonus at RFS.'] },

  { id:'true-position-bonus', en:'bonus tolerance', ru:'дополнительный допуск (при ММС)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:null },
    examples:['Calculate bonus tolerance.','Bonus tolerance at MMC.','Additional tolerance.','Bonus 0.02mm.'] },

  { id:'datum-reference-frame', en:'datum reference frame (DRF)', ru:'система баз (СКБ)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'datum reference frames' },
    examples:['Establish DRF.','Datum reference frame.','Primary datum.','DRF A-B-C.'] },

  { id:'feature-of-size', en:'feature of size', ru:'размерный элемент', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'features of size' },
    examples:['Feature of size.','Actual mating size.','Internal feature.','External feature of size.'] },

  { id:'virtual-condition', en:'virtual condition', ru:'виртуальный предел / условие', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'virtual conditions' },
    examples:['Calculate virtual condition.','Virtual condition boundary.','VC at MMC.','Assembly clearance.'] },

  { id:'projected-tolerance', en:'projected tolerance zone', ru:'проецируемый допуск', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'projected tolerance zones' },
    examples:['Projected tolerance.','P modifier.','Fastener projection.','Use projected zone.'] },

  { id:'symmetry-gdt', en:'symmetry (GD&T)', ru:'симметричность (ГДТ)', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:null },
    examples:['Symmetry tolerance.','Check symmetry.','GD&T symmetry.','Symmetry callout.'] },

  // ─── B1 — Advanced Problem Solving ───────────────────────────────────────

  { id:'5-whys', en:'5 Whys analysis', ru:'метод «5 почему»', image:null, emoji:'❓', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Use 5 Whys.','5 Why analysis.','Root cause via 5 Whys.','Document 5 Whys.'] },

  { id:'fishbone', en:'fishbone diagram (Ishikawa)', ru:'диаграмма Исикавы / причинно-следственная', image:null, emoji:'🐟', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'fishbone diagrams' },
    examples:['Fishbone diagram.','Ishikawa chart.','6M fishbone.','Root cause fishbone.'] },

  { id:'cause-effect', en:'cause and effect analysis', ru:'анализ причинно-следственных связей', image:null, emoji:'↔️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Cause and effect.','C&E diagram.','Analyze causes.','Effect on quality.'] },

  { id:'brainstorming', en:'brainstorming', ru:'мозговой штурм', image:null, emoji:'🧠', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:null },
    examples:['Brainstorm solutions.','Brainstorming session.','No bad ideas in brainstorm.','Brainstorm freely.'] },

  { id:'nominal-group', en:'nominal group technique', ru:'метод номинальных групп', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'other' },
    examples:['NGT session.','Nominal group technique.','Rank ideas.','Facilitate NGT.'] },

  { id:'affinity-diagram', en:'affinity diagram', ru:'диаграмма сходства (KJ-диаграмма)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'affinity diagrams' },
    examples:['Build affinity diagram.','Group ideas.','Affinity mapping.','KJ method.'] },

  { id:'pareto-chart', en:'Pareto chart', ru:'диаграмма Парето', image:'pareto-chart', emoji:'📊', imageEligible:true, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'Pareto charts' },
    examples:['Pareto chart shows top defects.','80/20 Pareto.','Plot Pareto.','Pareto analysis.'] },

  { id:'control-chart', en:'control chart', ru:'контрольная карта', image:'control-chart', emoji:'📊', imageEligible:true, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'control charts' },
    examples:['Xbar-R chart.','Control chart limits.','Out of control.','SPC control chart.'] },

  { id:'run-chart', en:'run chart', ru:'карта выбега (временной ряд)', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'run charts' },
    examples:['Run chart trend.','Plot run chart.','Identify trend in run chart.','Run chart analysis.'] },

  { id:'hypothesis-test', en:'hypothesis testing', ru:'проверка гипотез', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Hypothesis test.','Null hypothesis.','P-value < 0.05.','Reject null hypothesis.'] },

  // ─── B1 — Supply Chain Strategy ───────────────────────────────────────────

  { id:'single-sourcing', en:'single sourcing', ru:'единственный источник поставки', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Single source risk.','Single sourcing strategy.','Qualify second source.','Single source supplier.'] },

  { id:'dual-sourcing', en:'dual sourcing', ru:'двойной источник поставки', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Dual source strategy.','Qualify two suppliers.','Dual sourcing reduces risk.','Implement dual source.'] },

  { id:'make-or-buy', en:'make-or-buy decision', ru:'решение «производить или закупать»', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'make-or-buy decisions' },
    examples:['Make or buy analysis.','Outsource vs in-house.','Make-or-buy criteria.','Make-or-buy matrix.'] },

  { id:'outsourcing', en:'outsourcing', ru:'аутсорсинг', image:null, emoji:'🌐', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Outsource manufacturing.','Outsourcing decision.','Outsource risk.','Strategic outsourcing.'] },

  { id:'offshoring', en:'offshoring', ru:'офшоринг / перенос производства за рубеж', image:null, emoji:'🌍', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Offshore production.','Offshoring to Asia.','Offshoring risk.','Reshoring from offshoring.'] },

  { id:'reshoring', en:'reshoring', ru:'возврат производства (обратно в страну)', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Reshore production.','Reshoring trend.','US reshoring.','Reshore strategy.'] },

  { id:'supply-chain-risk', en:'supply chain risk', ru:'риски цепочки поставок', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Supply chain risk.','Assess risk.','Mitigate supply risk.','Supply disruption.'] },

  { id:'supply-disruption', en:'supply disruption', ru:'перебой в поставках', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:'supply disruptions' },
    examples:['Supply disruption event.','Handle disruption.','COVID supply disruption.','Recover from disruption.'] },

  { id:'buffer-stock', en:'buffer stock', ru:'буферный запас', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Maintain buffer stock.','Buffer stock level.','12-week buffer.','Reduce buffer stock.'] },

  { id:'supply-chain-visibility', en:'supply chain visibility', ru:'прозрачность цепочки поставок', image:null, emoji:'👁️', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Supply chain visibility tool.','Real-time visibility.','Improve visibility.','Track and trace.'] },

  // ─── B1 — Structures & Civil/Construction ─────────────────────────────────

  { id:'structural-load', en:'structural load', ru:'строительная нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'structural loads' },
    examples:['Dead load.','Live load.','Wind load.','Seismic load.'] },

  { id:'dead-load', en:'dead load', ru:'постоянная нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'dead loads' },
    examples:['Dead load of structure.','Self-weight dead load.','Dead load calculation.','Include dead load.'] },

  { id:'live-load', en:'live load', ru:'временная нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'live loads' },
    examples:['Occupancy live load.','Live load 50 psf.','Design for live load.','Live load factor.'] },

  { id:'beam-bending', en:'bending moment', ru:'изгибающий момент', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'bending moments' },
    examples:['Maximum bending moment.','Bending moment diagram.','Calculate moment.','Bending moment at support.'] },

  { id:'shear-force', en:'shear force', ru:'поперечная / срезывающая сила', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'shear forces' },
    examples:['Shear force diagram.','Maximum shear.','Shear force at support.','Shear calculation.'] },

  { id:'moment-of-inertia', en:'moment of inertia', ru:'момент инерции', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'moments of inertia' },
    examples:['Area moment of inertia.','I-beam moment.','Calculate I.','Second moment of area.'] },

  { id:'section-modulus', en:'section modulus', ru:'момент сопротивления сечения', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'section moduli' },
    examples:['Section modulus S.','Calculate section modulus.','Larger section modulus.','S = I/c.'] },

  { id:'reaction-force', en:'reaction force', ru:'реакция опоры', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'reaction forces' },
    examples:['Calculate reaction.','Support reaction.','Beam reactions.','Free body diagram reactions.'] },

  { id:'free-body-diagram', en:'free body diagram (FBD)', ru:'диаграмма свободного тела (расчётная схема)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'free body diagrams' },
    examples:['Draw FBD.','Free body diagram.','Isolate the body.','FBD analysis.'] },

  { id:'statically-determinate', en:'statically determinate', ru:'статически определимая (система)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Statically determinate beam.','Solve reactions.','Determinate structure.','Indeterminate vs determinate.'] },

  // ─── B1 — Industry 4.0 & Digital Manufacturing ───────────────────────────

  { id:'digital-twin', en:'digital twin', ru:'цифровой двойник', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'digital twins' },
    examples:['Digital twin model.','Build digital twin.','Simulate with twin.','Digital twin platform.'] },

  { id:'iiot', en:'IIoT (industrial internet of things)', ru:'промышленный интернет вещей', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['IIoT sensors.','IIoT platform.','Connect via IIoT.','IIoT data collection.'] },

  { id:'big-data', en:'big data (manufacturing)', ru:'большие данные', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Big data analytics.','Manufacturing big data.','Process big data.','Insights from big data.'] },

  { id:'machine-learning', en:'machine learning (manufacturing)', ru:'машинное обучение', image:null, emoji:'🤖', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['ML for quality.','Machine learning model.','Predictive maintenance ML.','Train ML model.'] },

  { id:'predictive-maintenance', en:'predictive maintenance', ru:'прогностическое техническое обслуживание', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['PdM system.','Predictive maintenance.','Condition monitoring.','Predict failure.'] },

  { id:'condition-monitoring', en:'condition monitoring', ru:'мониторинг технического состояния', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Vibration monitoring.','Condition monitoring sensor.','CM data.','Online monitoring.'] },

  { id:'cloud-manufacturing', en:'cloud manufacturing', ru:'облачное производство', image:null, emoji:'☁️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Cloud manufacturing platform.','Distributed manufacturing.','Cloud CNC.','Manufacturing as a service.'] },

  { id:'cybersecurity-ot', en:'OT cybersecurity', ru:'кибербезопасность операционных технологий', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['OT security.','Protect SCADA.','IT/OT convergence.','OT firewall.'] },

  { id:'smart-manufacturing', en:'smart manufacturing', ru:'умное производство', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Smart factory.','Smart manufacturing.','Connected machines.','Smart sensor network.'] },

  { id:'augmented-reality-mfg', en:'augmented reality (manufacturing)', ru:'дополненная реальность (в производстве)', image:null, emoji:'🥽', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['AR guided assembly.','AR inspection.','AR work instructions.','AR headset.'] },

  // ─── B1 — Engineering Ethics & Professionalism ────────────────────────────

  { id:'engineering-ethics', en:'engineering ethics', ru:'инженерная этика', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Engineering ethics code.','Ethical obligation.','NSPE ethics.','Ethics violation.'] },

  { id:'whistleblower', en:'whistleblower', ru:'разоблачитель / информатор', image:null, emoji:'🗣️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'whistleblowers' },
    examples:['Whistleblower protection.','Report safety issue.','Whistleblower policy.','Retaliation is illegal.'] },

  { id:'conflict-of-interest', en:'conflict of interest', ru:'конфликт интересов', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'conflicts of interest' },
    examples:['Declare conflict.','Conflict of interest form.','Avoid conflict.','Disclose conflict.'] },

  { id:'professional-obligation', en:'professional obligation', ru:'профессиональный долг / обязательство', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'professional obligations' },
    examples:['Professional obligation.','Duty to public safety.','Obligation as PE.','Ethical obligation.'] },

  { id:'peer-review', en:'peer review', ru:'рецензирование / экспертная оценка', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'peer reviews' },
    examples:['Peer review the design.','Peer review findings.','Technical peer review.','Conduct peer review.'] },

  { id:'independent-check', en:'independent check', ru:'независимая проверка', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'independent checks' },
    examples:['Independent check required.','Checker verifies design.','Two-person check.','Independent review.'] },

  { id:'checker-stamp', en:'checker / approval stamp', ru:'штамп проверяющего / утверждающего', image:null, emoji:'✍️', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'checker stamps' },
    examples:['Checker signature.','Drawing stamp.','Approved by.','Signature block.'] },

  { id:'redline-drawing', en:'redline drawing', ru:'чертёж с пометками (для исправления)', image:null, emoji:'🔴', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'redline drawings' },
    examples:['Issue redlines.','Redline the drawing.','Incorporate redlines.','As-built redline.'] },

  { id:'markup', en:'drawing markup', ru:'разметка / пометки на чертеже', image:null, emoji:'✏️', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'drawing markups' },
    examples:['Markup the drawing.','PDF markup.','Review markup.','Accept markup.'] },

  { id:'as-built', en:'as-built drawing', ru:'исполнительный чертёж', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:'as-built drawings' },
    examples:['As-built drawing.','Update as-built.','Record as-built.','As-built survey.'] },

  // ─── B1 — Advanced Verbs (Technical) ─────────────────────────────────────

  { id:'correlate', en:'to correlate', ru:'соотносить / коррелировать', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'correlated' },
    examples:['Correlate test data.','Correlated with failure.','Correlate FEA to test.','Strong correlation.'] },

  { id:'rectify', en:'to rectify', ru:'исправлять / устранять', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'rectified' },
    examples:['Rectify the defect.','Rectified the issue.','Rectify nonconformance.','Rectify the error.'] },

  { id:'supersede', en:'to supersede', ru:'заменять / вытеснять', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'superseded' },
    examples:['Rev B supersedes Rev A.','Superseded drawing.','This document supersedes.','New standard supersedes.'] },

  { id:'obsolete-v', en:'to obsolete', ru:'выводить из употребления / делать устаревшим', image:null, emoji:'🗑️', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'obsoleted' },
    examples:['Obsolete the part.','Part was obsoleted.','Obsolete the drawing.','Mark as obsoleted.'] },

  { id:'expedite-b1', en:'to expedite (manufacturing)', ru:'ускорять (производство/поставку)', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'expedited' },
    examples:['Expedite the order.','Expedited build.','Expedite delivery.','Hot job expedited.'] },

  { id:'disposition-v', en:'to disposition (quality)', ru:'принимать решение по браку', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'dispositioned' },
    examples:['Disposition the NCR.','Dispositioned as rework.','MRB dispositioned.','Disposition the lot.'] },

  { id:'iterate-design', en:'to iterate a design', ru:'пересматривать/улучшать конструкцию', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'iterated' },
    examples:['Iterate the design.','Design iterated 3x.','Rapid design iteration.','Iterate and improve.'] },

  { id:'leverage-v', en:'to leverage', ru:'использовать с выгодой / задействовать', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'leveraged' },
    examples:['Leverage existing tools.','Leveraged experience.','Leverage the platform.','Leverage data.'] },

  { id:'streamline', en:'to streamline', ru:'оптимизировать / упрощать', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'streamlined' },
    examples:['Streamline the process.','Streamlined workflow.','Streamline inspection.','Streamline reporting.'] },

  { id:'spearhead', en:'to spearhead', ru:'возглавлять / быть первопроходцем', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'spearheaded' },
    examples:['Spearhead the project.','Spearheaded the initiative.','Spearhead the effort.','Spearhead change.'] },

  // ─── B1 — Life in USA (Advanced) ─────────────────────────────────────────

  { id:'healthcare-plan', en:'healthcare plan', ru:'план медицинского страхования', image:null, emoji:'🏥', imageEligible:false, level:'B1', category:'doctor',
    forms:{ type:'noun', plural:'healthcare plans' },
    examples:['Choose healthcare plan.','HMO healthcare plan.','PPO plan.','Enroll in plan.'] },

  { id:'hmo', en:'HMO (health maintenance organization)', ru:'организация по поддержанию здоровья', image:null, emoji:'🏥', imageEligible:false, level:'B1', category:'doctor',
    forms:{ type:'other' },
    examples:['HMO plan.','HMO requires referral.','In-network HMO.','Switch to HMO.'] },

  { id:'ppo', en:'PPO (preferred provider organization)', ru:'организация предпочтительных поставщиков', image:null, emoji:'🏥', imageEligible:false, level:'B1', category:'doctor',
    forms:{ type:'other' },
    examples:['PPO plan.','PPO out-of-network.','PPO flexibility.','Prefer PPO.'] },

  { id:'open-enrollment', en:'open enrollment', ru:'открытая запись (в страховку)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'doctor',
    forms:{ type:'noun', plural:null },
    examples:['Open enrollment period.','Annual open enrollment.','Change plan at enrollment.','Miss enrollment.'] },

  { id:'beneficiary', en:'beneficiary', ru:'бенефициар / получатель', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'money-banking',
    forms:{ type:'noun', plural:'beneficiaries' },
    examples:['Add beneficiary.','Primary beneficiary.','Beneficiary form.','Life insurance beneficiary.'] },

  { id:'power-of-attorney', en:'power of attorney', ru:'доверенность', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'powers of attorney' },
    examples:['Grant power of attorney.','POA document.','Medical POA.','Durable POA.'] },

  { id:'notarization', en:'notarization', ru:'нотариальное заверение', image:null, emoji:'✍️', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:null },
    examples:['Notarize the document.','Notarization required.','Find a notary.','Notarized copy.'] },

  { id:'apostille', en:'apostille', ru:'апостиль', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'apostilles' },
    examples:['Get apostille.','Apostille certification.','Foreign document apostille.','Apostille required.'] },

  { id:'social-security', en:'social security number (SSN)', ru:'номер социального страхования', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'money-banking',
    forms:{ type:'other' },
    examples:['Provide SSN.','Protect your SSN.','SSN required for taxes.','SSN fraud.'] },

  { id:'itin', en:'ITIN (individual taxpayer identification number)', ru:'индивидуальный идентификационный номер налогоплательщика', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'money-banking',
    forms:{ type:'other' },
    examples:['Apply for ITIN.','ITIN for non-residents.','File taxes with ITIN.','ITIN vs SSN.'] },

  // ─── B1 — Immigration & Visa ──────────────────────────────────────────────

  { id:'h1b', en:'H-1B visa', ru:'рабочая виза H-1B', image:null, emoji:'🛂', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['H-1B application.','H-1B lottery.','H-1B sponsorship.','H-1B cap.'] },

  { id:'ead', en:'EAD (employment authorization document)', ru:'разрешение на работу (EAD)', image:null, emoji:'🪪', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['Apply for EAD.','EAD card.','Renew EAD.','Work on EAD.'] },

  { id:'opt', en:'OPT (optional practical training)', ru:'необязательная практическая подготовка (OPT)', image:null, emoji:'🎓', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['OPT work authorization.','Apply for OPT.','STEM OPT extension.','OPT period.'] },

  { id:'labor-certification', en:'labor certification (PERM)', ru:'трудовая сертификация (PERM)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['File PERM.','Labor certification.','DOL PERM.','PERM audit.'] },

  { id:'green-card-process', en:'green card application', ru:'заявление на грин-карту', image:null, emoji:'🪪', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'green card applications' },
    examples:['File green card.','I-485 adjustment.','Priority date.','Green card interview.'] },

  { id:'citizenship', en:'citizenship', ru:'гражданство', image:null, emoji:'🇺🇸', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Apply for citizenship.','Naturalization test.','Citizenship ceremony.','Dual citizenship.'] },

  { id:'naturalization', en:'naturalization', ru:'натурализация (получение гражданства)', image:null, emoji:'🇺🇸', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Naturalization interview.','N-400 form.','5-year naturalization.','Oath of naturalization.'] },

  { id:'sponsor-employer', en:'employer sponsorship', ru:'спонсорство работодателя', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Employer sponsorship.','Sponsor H-1B.','Find sponsoring company.','Sponsorship letter.'] },

  { id:'priority-date', en:'priority date', ru:'дата приоритета (иммиграционная)', image:null, emoji:'📅', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'priority dates' },
    examples:['Priority date current.','Wait for priority date.','Check priority date.','Priority date retrogression.'] },

  { id:'visa-bulletin', en:'visa bulletin', ru:'визовый бюллетень', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'visa bulletins' },
    examples:['Monthly visa bulletin.','Check visa bulletin.','Priority date in bulletin.','DOS visa bulletin.'] },

  // ─── B1 — Advanced Soft Skills & Management ───────────────────────────────

  { id:'servant-leadership', en:'servant leadership', ru:'слуга-лидер / лидерство-служение', image:null, emoji:'🙏', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Servant leadership.','Lead by serving.','Servant leader style.','Servant leadership model.'] },

  { id:'transformational-leadership', en:'transformational leadership', ru:'трансформационное лидерство', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Transformational leader.','Inspire the team.','Drive transformation.','Transformational approach.'] },

  { id:'situational-leadership', en:'situational leadership', ru:'ситуационное руководство', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Adapt leadership style.','Situational approach.','Coach vs delegate.','Situational leadership model.'] },

  { id:'matrix-org', en:'matrix organization', ru:'матричная организационная структура', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'matrix organizations' },
    examples:['Matrix organization.','Dual reporting.','Matrix challenges.','Functional matrix.'] },

  { id:'direct-report', en:'direct report', ru:'непосредственный подчинённый', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'direct reports' },
    examples:['Manage direct reports.','5 direct reports.','Meet with direct report.','Review direct report.'] },

  { id:'skip-level', en:'skip-level meeting', ru:'встреча через уровень руководства', image:null, emoji:'⬆️', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'skip-level meetings' },
    examples:['Skip-level meeting.','Talk to VP directly.','Skip-level feedback.','Arrange skip-level.'] },

  { id:'one-on-one', en:'one-on-one meeting', ru:'встреча один на один', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'one-on-one meetings' },
    examples:['Weekly 1:1.','One-on-one with manager.','Schedule 1:1.','1:1 agenda.'] },

  { id:'360-feedback', en:'360-degree feedback', ru:'обратная связь «360 градусов»', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['360 review.','Collect 360 feedback.','360 assessment.','Peer 360 feedback.'] },

  { id:'kpi-mgmt', en:'KPI management', ru:'управление КПЭ', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Track KPIs.','KPI dashboard.','Review KPIs.','Meet KPI targets.'] },

  { id:'okr', en:'OKR (objectives and key results)', ru:'цели и ключевые результаты (OKR)', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Set OKRs.','OKR framework.','Quarterly OKRs.','Align OKRs.'] },

  // ─── B1 — Advanced Numbers & Analysis ─────────────────────────────────────

  { id:'correlation-coeff', en:'correlation coefficient', ru:'коэффициент корреляции', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'correlation coefficients' },
    examples:['R² = 0.95.','Correlation coefficient.','Strong positive correlation.','Calculate R.'] },

  { id:'regression', en:'regression analysis', ru:'регрессионный анализ', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:null },
    examples:['Linear regression.','Multiple regression.','Regression model.','Regression line.'] },

  { id:'confidence-interval', en:'confidence interval', ru:'доверительный интервал', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'confidence intervals' },
    examples:['95% confidence interval.','CI ± 0.5.','Calculate CI.','Narrow confidence interval.'] },

  { id:'significance', en:'statistical significance', ru:'статистическая значимость', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:null },
    examples:['Statistical significance.','P < 0.05 significant.','Not statistically significant.','Alpha level.'] },

  { id:'sample-size', en:'sample size', ru:'объём выборки', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'sample sizes' },
    examples:['Adequate sample size.','Calculate sample size.','n=30 sample.','Minimum sample size.'] },

  { id:'anova', en:'ANOVA (analysis of variance)', ru:'дисперсионный анализ (ANOVA)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'other' },
    examples:['One-way ANOVA.','ANOVA p-value.','ANOVA significance.','Conduct ANOVA.'] },

  { id:'dof-statistics', en:'degrees of freedom (statistics)', ru:'степени свободы (статистика)', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'other' },
    examples:['df = n-1.','Degrees of freedom.','t-distribution df.','Check df.'] },

  { id:'outlier', en:'outlier', ru:'выброс / выбивающееся значение', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'outliers' },
    examples:['Identify outlier.','Remove outlier.','Outlier analysis.','Data outlier.'] },

  { id:'histogram', en:'histogram', ru:'гистограмма', image:'histogram', emoji:'📊', imageEligible:true, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'histograms' },
    examples:['Plot histogram.','Histogram of results.','Normal distribution histogram.','Histogram bins.'] },

  { id:'normal-distribution', en:'normal distribution', ru:'нормальное распределение (распределение Гаусса)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:null },
    examples:['Normal distribution.','Bell curve.','Normally distributed data.','Gaussian distribution.'] },

  // ─── B1 — Advanced Material Properties ────────────────────────────────────

  { id:'anisotropy', en:'anisotropy', ru:'анизотропия', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Material anisotropy.','Anisotropic behavior.','Fiber anisotropy.','Anisotropy factor.'] },

  { id:'isotropy', en:'isotropy', ru:'изотропия', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Isotropic material.','Isotropy assumption.','Isotropic steel.','Isotropic FEA.'] },

  { id:'fracture-mode', en:'fracture mode (I, II, III)', ru:'форма разрушения (I, II, III)', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'fracture modes' },
    examples:['Mode I fracture.','Crack opening mode.','Fracture mode analysis.','Mixed-mode fracture.'] },

  { id:'paris-law', en:'Paris law (fatigue crack growth)', ru:'закон Пэриса (рост усталостной трещины)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Paris law equation.','Fatigue crack growth rate.','da/dN vs ΔK.','Apply Paris law.'] },

  { id:'stress-intensity', en:'stress intensity factor (K)', ru:'коэффициент интенсивности напряжений (К)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['K_I factor.','Calculate K.','Critical K.','SIF analysis.'] },

  { id:'j-integral', en:'J-integral', ru:'J-интеграл', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['J-integral method.','Elastic-plastic J.','J value.','ASTM J-integral.'] },

  { id:'charpy', en:'Charpy impact test', ru:'испытание на ударный изгиб по Шарпи', image:null, emoji:'🔨', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Charpy test.','Impact energy J.','Charpy V-notch.','Low temperature Charpy.'] },

  { id:'drop-weight', en:'drop weight test', ru:'испытание падающим грузом', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Drop weight test.','DWTT.','Nil-ductility temperature.','Drop test energy.'] },

  { id:'weldability', en:'weldability', ru:'свариваемость', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Good weldability.','Carbon equivalent weldability.','Weldability testing.','Improve weldability.'] },

  { id:'machinability', en:'machinability', ru:'обрабатываемость (резанием)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Good machinability.','Machinability rating.','Free-machining steel.','Poor machinability.'] },

  // ─── B1 — More American Work Culture ─────────────────────────────────────

  { id:'town-hall', en:'town hall meeting', ru:'собрание в формате «вопрос-ответ»', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'town hall meetings' },
    examples:['Company town hall.','CEO town hall.','Q&A town hall.','All-hands town hall.'] },

  { id:'all-hands', en:'all-hands meeting', ru:'общее собрание (всей компании)', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'all-hands meetings' },
    examples:['All-hands meeting.','Monthly all-hands.','Virtual all-hands.','Attend all-hands.'] },

  { id:'off-site', en:'off-site (meeting)', ru:'выездное мероприятие / совещание', image:null, emoji:'🏔️', imageEligible:false, level:'B1', category:'work-meetings',
    forms:{ type:'noun', plural:'off-sites' },
    examples:['Team off-site.','Annual off-site.','Off-site retreat.','Planning off-site.'] },

  { id:'company-culture', en:'company culture', ru:'корпоративная культура', image:null, emoji:'🏢', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'company cultures' },
    examples:['Strong culture.','Company culture fit.','Culture change.','Culture of safety.'] },

  { id:'psychological-safety', en:'psychological safety', ru:'психологическая безопасность', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Psychological safety.','Feel safe to speak.','Build safety.','Culture of safety.'] },

  { id:'inclusive-language', en:'inclusive language', ru:'инклюзивный язык', image:null, emoji:'🌈', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Use inclusive language.','Avoid bias.','Inclusive communication.','Inclusive writing.'] },

  { id:'dei', en:'DEI (diversity equity inclusion)', ru:'разнообразие, равенство и инклюзивность', image:null, emoji:'🌈', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['DEI initiative.','DEI training.','DEI goals.','Promote DEI.'] },

  { id:'employee-resource-group', en:'employee resource group (ERG)', ru:'группа ресурсов сотрудников', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'employee resource groups' },
    examples:['Join ERG.','ERG meeting.','Women in engineering ERG.','Support ERG.'] },

  { id:'work-life-balance', en:'work-life balance', ru:'баланс работы и личной жизни', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Work-life balance.','Maintain balance.','Poor work-life balance.','Healthy balance.'] },

  { id:'burnout', en:'burnout', ru:'профессиональное выгорание', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Avoid burnout.','Signs of burnout.','Recover from burnout.','Engineer burnout.'] },



  { id:'idiom', en:'idiom', ru:'идиома / фразеологизм', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'idioms' },
    examples:['American idiom.','Understand idioms.','Common idiom.','Workplace idiom.'] },

  { id:'collocation', en:'collocation', ru:'словосочетание / коллокация', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'collocations' },
    examples:['Common collocation.','Strong collocation.','Make a decision.','Do business.'] },

  { id:'register-language', en:'language register', ru:'речевой регистр (формальный/неформальный)', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'language registers' },
    examples:['Formal register.','Informal register.','Change register.','Appropriate register.'] },

  { id:'euphemism', en:'euphemism', ru:'эвфемизм', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'euphemisms' },
    examples:['Let go (euphemism for fired).','Euphemism for failure.','Corporate euphemism.','Use euphemism.'] },

  { id:'understatement', en:'understatement', ru:'преуменьшение / умолчание', image:null, emoji:'😐', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'understatements' },
    examples:['British understatement.','Slight understatement.','That is an understatement.','American understatement.'] },

  { id:'hyperbole', en:'hyperbole', ru:'гипербола / преувеличение', image:null, emoji:'📢', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'hyperboles' },
    examples:['I am starving. (hyperbole)','Million times better.','Hyperbole in speech.','This kills me.'] },

  { id:'sarcasm', en:'sarcasm', ru:'сарказм', image:null, emoji:'😏', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:null },
    examples:['Detect sarcasm.','American sarcasm.','Sarcastic remark.','Sarcasm in conversation.'] },

  { id:'small-talk-topics', en:'small talk topics', ru:'темы для светской беседы', image:null, emoji:'☀️', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:['Weather small talk.','Sports small talk.','Weekend small talk.','Office small talk.'] },

  { id:'filler-words', en:'filler words', ru:'слова-заполнители / слова-паразиты', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['Like, you know, basically.','Avoid fillers.','Um, uh, er.','Reduce filler words.'] },

  { id:'hedging-language', en:'hedging language', ru:'язык смягчения / уточнения', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['It seems that.','Arguably.','Tends to.','May suggest.'] },

  // ─── B1 — Professional Certifications & Training ──────────────────────────

  { id:'lean-green-belt', en:'Lean Green Belt', ru:'Зелёный пояс (Лин / Шесть Сигм)', image:null, emoji:'🟢', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['Lean Green Belt.','GB certification.','Green Belt project.','Six Sigma GB.'] },

  { id:'lean-black-belt', en:'Lean Black Belt', ru:'Чёрный пояс (Лин / Шесть Сигм)', image:null, emoji:'⬛', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['Black Belt mentor.','BB certification.','Black Belt project.','Six Sigma BB.'] },

  { id:'cme', en:'CME (continuing medical education)', ru:'непрерывное медицинское образование', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['CME credits.','Earn CME.','Annual CME.','Medical CME requirement.'] },

  { id:'scrum-master', en:'Scrum Master', ru:'Скрам-мастер', image:null, emoji:'🏃', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'Scrum Masters' },
    examples:['Scrum Master role.','CSM certification.','Scrum Master facilitates.','Agile Scrum Master.'] },

  { id:'product-owner', en:'Product Owner', ru:'Владелец продукта', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'Product Owners' },
    examples:['Product Owner role.','PO decisions.','PO backlog.','Agile PO.'] },

  { id:'agile-cert', en:'Agile certification', ru:'сертификация по гибким методологиям', image:null, emoji:'📜', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'Agile certifications' },
    examples:['Get Agile cert.','SAFe certification.','CSM Agile cert.','Agile training.'] },

  { id:'safe-framework', en:'SAFe (Scaled Agile Framework)', ru:'масштабируемая Agile-методология', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['SAFe implementation.','PI planning.','SAFe ART.','Scale agile SAFe.'] },

  { id:'design-thinking', en:'design thinking', ru:'дизайн-мышление', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Design thinking process.','Empathize-Define-Ideate.','Design thinking workshop.','Apply design thinking.'] },

  { id:'user-story', en:'user story', ru:'пользовательская история', image:null, emoji:'📖', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'user stories' },
    examples:['Write user story.','As a user I want.','User story map.','Story points.'] },

  { id:'epic', en:'epic (agile)', ru:'эпик (в Agile)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'epics' },
    examples:['Create an epic.','Break epic into stories.','Epic level feature.','Epic owner.'] },

  // ─── B1 — Advanced Technical Topics ─────────────────────────────────────

  { id:'residual-stress', en:'residual stress', ru:'остаточное напряжение', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'residual stresses' },
    examples:['Residual stress from welding.','Measure residual stress.','Compressive residual.','Residual stress relief.'] },

  { id:'stress-corrosion', en:'stress corrosion cracking (SCC)', ru:'коррозионное растрескивание под напряжением', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['SCC failure.','Prevent SCC.','Stress corrosion test.','SCC in stainless.'] },

  { id:'hydrogen-embrittlement', en:'hydrogen embrittlement', ru:'водородная хрупкость', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Hydrogen embrittlement.','Plating hydrogen.','Bake to remove hydrogen.','HE failure.'] },

  { id:'galvanic-corrosion', en:'galvanic corrosion', ru:'гальваническая коррозия', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Galvanic pair.','Aluminum and steel galvanic.','Prevent galvanic corrosion.','Galvanic series.'] },

  { id:'crevice-corrosion', en:'crevice corrosion', ru:'щелевая коррозия', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Crevice corrosion.','Gap corrosion.','Prevent crevice.','Crevice in joint.'] },

  { id:'pitting-corrosion', en:'pitting corrosion', ru:'питтинговая коррозия', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Pitting corrosion.','Stainless pitting.','Chloride pitting.','Pitting resistance.'] },

  { id:'erosion-wear', en:'erosion', ru:'эрозия / абразивный износ', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Erosion wear.','Particle erosion.','Erosion rate.','Prevent erosion.'] },

  { id:'abrasion-wear', en:'abrasion', ru:'абразивный износ / истирание', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Abrasion resistance.','Abrasive wear.','Abrasion test.','Minimize abrasion.'] },

  { id:'galling', en:'galling (tribology)', ru:'задиры / схватывание поверхностей', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Galling of threads.','Prevent galling.','Galling failure.','Anti-galling treatment.'] },

  { id:'fretting', en:'fretting (fatigue)', ru:'фреттинг-коррозия / усталость от вибрации', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Fretting fatigue.','Fretting damage.','Prevent fretting.','Fretting in press fit.'] },

  // ─── B1 — Advanced Work & Career Vocabulary ───────────────────────────────

  { id:'upskill', en:'to upskill', ru:'повышать квалификацию', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'upskilled' },
    examples:['Upskill the team.','Upskill yourself.','Upskilled in Python.','Upskill program.'] },

  { id:'reskill', en:'to reskill', ru:'переобучать / осваивать новые навыки', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'reskilled' },
    examples:['Reskill the workforce.','Reskilled engineer.','Reskill for automation.','Reskill program.'] },

  { id:'pivot-career', en:'to pivot (career)', ru:'менять карьерное направление', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'pivoted' },
    examples:['Pivot to software.','Career pivot.','Pivoted industries.','Successful pivot.'] },

  { id:'value-add', en:'to add value', ru:'добавлять ценность', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'added value' },
    examples:['Add value to team.','Value-added task.','How does this add value?','Value-add activity.'] },

  { id:'proactive', en:'proactive', ru:'проактивный / инициативный', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Be proactive.','Proactive approach.','Proactive engineer.','Proactive communication.'] },

  { id:'reactive', en:'reactive', ru:'реактивный / действующий по факту', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Reactive approach.','Reactive maintenance.','Too reactive.','Shift from reactive.'] },

  { id:'strategic-thinking', en:'strategic thinking', ru:'стратегическое мышление', image:null, emoji:'♟️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Strategic thinking.','Think strategically.','Strategic mindset.','Long-term strategic thinking.'] },

  { id:'growth-mindset', en:'growth mindset', ru:'установка на рост / развитие', image:null, emoji:'🌱', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Growth mindset.','Develop growth mindset.','Fixed vs growth.','Cultivate growth mindset.'] },

  { id:'soft-skills', en:'soft skills', ru:'гибкие навыки / личностные качества', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Develop soft skills.','Communication soft skill.','Technical and soft skills.','Soft skills training.'] },

  { id:'hard-skills', en:'hard skills', ru:'профессиональные навыки / технические компетенции', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Technical hard skills.','CAD hard skill.','Hard skills resume.','Develop hard skills.'] },

  // ─── B1 — Vocabulary Filler to 1000 ──────────────────────────────────────

  { id:'leverage-tool', en:'to leverage a tool', ru:'использовать инструмент с максимальной выгодой', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'leveraged' },
    examples:['Leverage CAD tools.','Leverage ERP.','Leveraged simulation.','Leverage data analytics.'] },

  { id:'best-in-class', en:'best-in-class', ru:'лучший в своём классе', image:null, emoji:'🏆', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Best-in-class quality.','Best-in-class process.','Achieve best-in-class.','Best-in-class supplier.'] },

  { id:'world-class', en:'world-class', ru:'мирового класса', image:null, emoji:'🌍', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['World-class manufacturing.','World-class team.','Build world-class.','World-class quality.'] },

  { id:'cutting-edge', en:'cutting-edge', ru:'передовой / самый современный', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Cutting-edge technology.','Cutting-edge design.','Cutting-edge tools.','Stay cutting-edge.'] },

  { id:'state-of-art', en:'state-of-the-art', ru:'самый современный / последнее слово техники', image:null, emoji:'⭐', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['State-of-the-art facility.','State-of-the-art equipment.','Leading edge.','Latest technology.'] },

  { id:'holistic', en:'holistic approach', ru:'целостный / комплексный подход', image:null, emoji:'🔷', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Holistic approach.','Holistic view.','Holistic analysis.','Holistic design.'] },

  { id:'robust-solution', en:'robust', ru:'надёжный / устойчивый (о решении)', image:null, emoji:'💪', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Robust design.','Robust solution.','Robust process.','Robust system.'] },

  { id:'scalable', en:'scalable', ru:'масштабируемый', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Scalable process.','Scalable solution.','Scalable architecture.','Build scalable.'] },

  { id:'repeatable', en:'repeatable', ru:'воспроизводимый / повторяемый', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Repeatable process.','Repeatable results.','Reproducible test.','Ensure repeatability.'] },

  { id:'reproducible', en:'reproducible', ru:'воспроизводимый / репродуцируемый', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Reproducible results.','Reproducible test method.','Must be reproducible.','Reproducibility study.'] },

  { id:'traceable', en:'traceable', ru:'прослеживаемый', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Traceable measurement.','Traceable to NIST.','Fully traceable.','Traceable calibration.'] },

  { id:'auditable', en:'auditable', ru:'подлежащий проверке / поддающийся аудиту', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['Auditable process.','Auditable records.','Maintain auditable trail.','System is auditable.'] },

  { id:'defensible', en:'defensible', ru:'обоснованный / защищаемый', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Defensible decision.','Defensible analysis.','Technically defensible.','Legally defensible.'] },

  { id:'viable', en:'viable', ru:'жизнеспособный / реализуемый', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Viable solution.','Commercially viable.','Technically viable.','Is it viable?'] },

  { id:'actionable', en:'actionable', ru:'выполнимый / применимый на практике', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Actionable insight.','Actionable data.','Actionable feedback.','Make it actionable.'] },

  { id:'tangible', en:'tangible', ru:'ощутимый / материальный', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Tangible result.','Tangible benefit.','Tangible improvement.','Make it tangible.'] },

  { id:'intangible', en:'intangible', ru:'нематериальный / неосязаемый', image:null, emoji:'💭', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Intangible benefit.','Intangible asset.','Intangible value.','Intangible risk.'] },

  { id:'quantifiable', en:'quantifiable', ru:'измеримый / поддающийся количественной оценке', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Quantifiable improvement.','Quantifiable metric.','Hard to quantify.','Make quantifiable.'] },

  { id:'measurable', en:'measurable', ru:'измеримый (о целях)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Measurable goal.','SMART measurable.','Set measurable targets.','Measurable outcome.'] },

  { id:'achievable', en:'achievable', ru:'достижимый', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Achievable goal.','Realistic and achievable.','SMART achievable.','Set achievable targets.'] },

  { id:'smart-goal', en:'SMART goal', ru:'СМАРТ-цель', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'SMART goals' },
    examples:['Set SMART goals.','SMART framework.','Write SMART goal.','Achieve SMART target.'] },

  { id:'deliverable-b1', en:'key deliverable', ru:'ключевой результат / поставка', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'key deliverables' },
    examples:['Key deliverable.','Submit deliverable.','Deliverable on time.','Track deliverables.'] },

  { id:'milestone-b1', en:'project milestone', ru:'контрольная точка / веха', image:null, emoji:'🏁', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'project milestones' },
    examples:['Hit milestone.','Milestone review.','Key milestone.','Miss milestone.'] },

  { id:'project-closure', en:'project closure', ru:'закрытие проекта', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'project closures' },
    examples:['Project closure report.','Formal closure.','Close the project.','Closure meeting.'] },

  { id:'handover-project', en:'project handover', ru:'сдача / передача проекта', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'project handovers' },
    examples:['Project handover.','Handover documentation.','Handover to operations.','Complete handover.'] },

  { id:'ops-transfer', en:'technology transfer', ru:'передача технологии', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'technology transfers' },
    examples:['Tech transfer.','Transfer to manufacturing.','Technology transfer plan.','Complete tech transfer.'] },

  { id:'scale-production', en:'production scale-up', ru:'масштабирование производства', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Production scale-up.','Scale to volume.','Pilot to production.','Scale-up challenges.'] },

  { id:'volume-production', en:'volume production', ru:'серийное производство / крупносерийное', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Volume production.','High volume manufacturing.','Production volume.','Ramp to volume.'] },

  { id:'end-of-life', en:'end of life (EOL)', ru:'конец жизненного цикла (EOL)', image:null, emoji:'⏳', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['EOL plan.','Product end of life.','EOL support.','EOL transition.'] },

  { id:'aftermarket', en:'aftermarket', ru:'послепродажный рынок / рынок запчастей', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Aftermarket parts.','Aftermarket support.','Aftermarket service.','Aftermarket revenue.'] },

  { id:'service-manual', en:'service manual', ru:'руководство по техническому обслуживанию', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'service manuals' },
    examples:['Write service manual.','Service manual revision.','Follow service manual.','Download service manual.'] },

  { id:'user-manual', en:'user manual', ru:'руководство пользователя', image:null, emoji:'📖', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'user manuals' },
    examples:['User manual.','Write user guide.','Manual revision.','Safety in manual.'] },

  { id:'installation-manual', en:'installation manual', ru:'руководство по монтажу', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'installation manuals' },
    examples:['Installation manual.','Follow install guide.','Manual step 3.','Installation procedure.'] },

  { id:'spare-list', en:'spare parts list', ru:'перечень запасных частей', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'spare parts lists' },
    examples:['Spare parts list.','Order from list.','Update spare list.','Critical spares list.'] },

  { id:'technical-bulletin', en:'technical bulletin', ru:'технический бюллетень', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'technical bulletins' },
    examples:['Issue technical bulletin.','Service bulletin.','Field bulletin.','Technical alert.'] },

  { id:'field-change', en:'field change order (FCO)', ru:'приказ об изменении в полевых условиях', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'field change orders' },
    examples:['Issue FCO.','Field change order.','Implement FCO.','FCO tracking.'] },

  { id:'engineering-note', en:'engineering note', ru:'технический меморандум / инженерная записка', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'engineering notes' },
    examples:['Write engineering note.','EN-1234.','Engineering memo.','Document in eng note.'] },

  { id:'technical-memo', en:'technical memorandum', ru:'технический меморандум', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'technical memoranda' },
    examples:['Technical memo.','Write a tech memo.','Distribute memo.','Memo format.'] },

  { id:'lab-notebook', en:'laboratory notebook', ru:'лабораторный журнал', image:null, emoji:'📓', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'laboratory notebooks' },
    examples:['Lab notebook entry.','Keep lab notebook.','Witness lab book.','Electronic lab notebook.'] },

  { id:'test-plan', en:'test plan', ru:'план испытаний', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'test plans' },
    examples:['Write test plan.','Approve test plan.','Test plan scope.','Execute test plan.'] },

  { id:'test-report', en:'test report', ru:'отчёт об испытаниях', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'test reports' },
    examples:['Issue test report.','Test report findings.','Review test report.','Final test report.'] },

  { id:'acceptance-test', en:'acceptance testing', ru:'приёмочные испытания', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:null },
    examples:['Acceptance testing.','UAT test.','Pass acceptance test.','Acceptance criteria.'] },

  { id:'regression-test', en:'regression testing', ru:'регрессионное тестирование', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Run regression test.','Regression test suite.','Regression after change.','Pass regression.'] },

  { id:'design-of-experiments', en:'design of experiments (DOE)', ru:'планирование эксперимента (ПЭ)', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Run DOE.','Full factorial DOE.','DOE results.','Fractional DOE.'] },

  { id:'response-surface', en:'response surface methodology (RSM)', ru:'метод поверхности отклика', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['RSM optimization.','Response surface model.','Quadratic RSM.','Apply RSM.'] },

  { id:'taguchi', en:'Taguchi methods', ru:'методы Тагути', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Taguchi design.','L9 array Taguchi.','Robust design Taguchi.','Taguchi optimization.'] },

  { id:'robust-design', en:'robust design', ru:'надёжная конструкция / устойчивое к вариациям проектирование', image:null, emoji:'💪', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Robust design principle.','Design for robustness.','Taguchi robust.','Insensitive to variation.'] },

  { id:'signal-noise', en:'signal-to-noise ratio', ru:'отношение сигнал/шум', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Signal-to-noise ratio.','SNR improvement.','Maximize SNR.','Low noise design.'] },

  { id:'noise-factor', en:'noise factor (Taguchi)', ru:'шумовой фактор (по Тагути)', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'noise factors' },
    examples:['Noise factor.','External noise.','Internal noise factor.','Control vs noise.'] },

  { id:'control-factor', en:'control factor (DOE)', ru:'управляемый фактор (ПЭ)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'control factors' },
    examples:['Control factor level.','Two-level control.','Select control factors.','DOE control factor.'] },



  { id:'cover-memo', en:'cover memo', ru:'сопроводительная записка', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'cover memos' },
    examples:['Attach cover memo.','Brief cover memo.','Cover memo to report.','Include cover memo.'] },

  { id:'action-register', en:'action register', ru:'реестр действий / задач', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'action registers' },
    examples:['Update action register.','Action register review.','Open action items.','Close action in register.'] },

  { id:'status-report', en:'status report', ru:'отчёт о состоянии / прогрессе', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'status reports' },
    examples:['Weekly status report.','Submit status report.','Status report format.','Color-coded status.'] },

  { id:'dash-board', en:'dashboard (reporting)', ru:'информационная панель', image:'dash-board', emoji:'📊', imageEligible:true, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'dashboards' },
    examples:['Review dashboard.','Engineering dashboard.','Real-time dashboard.','Build dashboard.'] },

  { id:'heat-map', en:'heat map', ru:'тепловая карта', image:'heat-map', emoji:'🗺️', imageEligible:true, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'heat maps' },
    examples:['Risk heat map.','Stress heat map.','Color-coded heat map.','Analyze heat map.'] },

  { id:'radar-chart', en:'radar chart', ru:'радарная диаграмма / паутинная диаграмма', image:null, emoji:'🕸️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'radar charts' },
    examples:['Supplier radar chart.','Performance radar.','Plot radar chart.','Multi-axis radar.'] },

  { id:'swimlane', en:'swimlane diagram', ru:'диаграмма дорожек (ответственности)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'swimlane diagrams' },
    examples:['Swimlane diagram.','RACI swimlane.','Process swimlane.','Draw swimlane.'] },

  { id:'raci', en:'RACI matrix', ru:'матрица ответственности RACI', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['RACI matrix.','Responsible, Accountable.','Define RACI.','Build RACI chart.'] },

  { id:'lessons-report', en:'lessons learned report', ru:'отчёт об извлечённых уроках', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'lessons learned reports' },
    examples:['Write LL report.','Publish lessons.','LL database entry.','Project LL report.'] },

  { id:'closeout-report', en:'closeout report', ru:'заключительный отчёт', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'closeout reports' },
    examples:['Write closeout report.','Final closeout.','Closeout checklist.','Submit closeout.'] },

  // ─── B1 — More Advanced Engineering Vocabulary ────────────────────────────

  { id:'centroid', en:'centroid', ru:'центроид / центр тяжести сечения', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'centroids' },
    examples:['Find centroid.','Centroid location.','Area centroid.','Neutral axis centroid.'] },

  { id:'neutral-axis', en:'neutral axis', ru:'нейтральная ось', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'neutral axes' },
    examples:['Neutral axis beam.','Stress at neutral axis.','Locate neutral axis.','NA for composite.'] },

  { id:'plastic-hinge', en:'plastic hinge', ru:'пластический шарнир', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'plastic hinges' },
    examples:['Form plastic hinge.','Plastic hinge location.','Collapse mechanism.','Plastic analysis.'] },

  { id:'slenderness-ratio', en:'slenderness ratio', ru:'гибкость (отношение длины к радиусу)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'slenderness ratios' },
    examples:['Column slenderness.','L/r ratio.','High slenderness.','Slenderness limit.'] },

  { id:'euler-buckling', en:'Euler buckling load', ru:'критическая нагрузка Эйлера', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Euler critical load.','Pcr Euler.','Euler column.','Compare to Euler.'] },

  { id:'weld-throat', en:'weld throat', ru:'расчётный катет шва', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'weld throats' },
    examples:['Effective weld throat.','Throat dimension.','Minimum throat.','Throat thickness.'] },

  { id:'weld-root', en:'weld root', ru:'корень шва', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'weld roots' },
    examples:['Root pass.','Root penetration.','Root crack.','Inspect root.'] },

  { id:'weld-toe', en:'weld toe', ru:'носок шва / кромка шва', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'weld toes' },
    examples:['Stress at weld toe.','Weld toe cracking.','Toe radius.','Improve weld toe.'] },

  { id:'incomplete-fusion', en:'lack of fusion', ru:'непровар / несплавление', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Lack of fusion defect.','LOF indication.','Detect lack of fusion.','Cause of LOF.'] },

  { id:'undercut', en:'undercut (welding)', ru:'подрез (сварного шва)', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Undercut defect.','Measure undercut.','Acceptable undercut.','Cause of undercut.'] },

  // ─── B1 — Thermodynamics & Energy ────────────────────────────────────────

  { id:'efficiency-energy', en:'thermal efficiency', ru:'термический КПД', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Carnot efficiency.','Thermal efficiency 40%.','Improve efficiency.','Calculate efficiency.'] },

  { id:'cop', en:'COP (coefficient of performance)', ru:'коэффициент производительности (КПД холодильной машины)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['COP = 3.5.','Refrigerator COP.','Improve COP.','COP calculation.'] },

  { id:'btu', en:'BTU (British thermal unit)', ru:'британская тепловая единица (BTU)', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'other' },
    examples:['BTU per hour.','Cooling capacity BTU.','Convert BTU to kW.','10,000 BTU system.'] },

  { id:'kilowatt-hour', en:'kilowatt-hour (kWh)', ru:'киловатт-час (кВт·ч)', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'kilowatt-hours' },
    examples:['Energy in kWh.','Monthly kWh usage.','Cost per kWh.','Measure in kWh.'] },

  { id:'thermal-mass', en:'thermal mass', ru:'тепловая масса / теплоёмкость', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['High thermal mass.','Thermal mass material.','Use thermal mass.','Concrete thermal mass.'] },

  { id:'heat-pipe', en:'heat pipe', ru:'тепловая труба', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'heat pipes' },
    examples:['Copper heat pipe.','Heat pipe cooling.','Install heat pipe.','Heat pipe efficiency.'] },

  { id:'evaporative-cooling', en:'evaporative cooling', ru:'испарительное охлаждение', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Evaporative cooler.','Evaporative cooling tower.','Swamp cooler.','Evaporative efficiency.'] },

  { id:'refrigerant', en:'refrigerant', ru:'хладагент', image:null, emoji:'❄️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'refrigerants' },
    examples:['R-134a refrigerant.','Replace refrigerant.','Refrigerant leak.','Eco refrigerant.'] },

  { id:'compressor', en:'compressor', ru:'компрессор', image:'compressor', emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'compressors' },
    examples:['Air compressor.','Screw compressor.','Compressor discharge.','Compressor ratio.'] },

  { id:'condenser', en:'condenser', ru:'конденсатор (теплообменник)', image:null, emoji:'❄️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'condensers' },
    examples:['Condenser coil.','Air-cooled condenser.','Condenser pressure.','Clean condenser.'] },

  // ─── B1 — More Advanced Grammar ──────────────────────────────────────────

  { id:'gerund', en:'gerund', ru:'герундий', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'gerunds' },
    examples:['Testing is required.','Welding takes skill.','Reading improves English.','Analyzing data.'] },

  { id:'participle', en:'participle (grammar)', ru:'причастие', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'participles' },
    examples:['Present participle.','Past participle.','Reduced relative clause.','Participial phrase.'] },

  { id:'infinitive', en:'infinitive (grammar)', ru:'инфинитив', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'infinitives' },
    examples:['To measure accurately.','Infinitive of purpose.','Split infinitive.','Bare infinitive.'] },

  { id:'subjunctive', en:'subjunctive mood', ru:'сослагательное наклонение', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['If I were an engineer.','Recommend that he check.','It is essential that.','Subjunctive in requests.'] },

  { id:'discourse-marker', en:'discourse marker', ru:'дискурсивный маркер / скрепа', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:'discourse markers' },
    examples:['However, therefore.','As a result.','On the other hand.','In conclusion.'] },

  { id:'cohesion', en:'cohesion (text)', ru:'связность текста', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['Text cohesion.','Cohesive writing.','Use pronouns for cohesion.','Improve cohesion.'] },

  { id:'coherence-text', en:'coherence (text)', ru:'согласованность / логичность текста', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'conjunctions',
    forms:{ type:'noun', plural:null },
    examples:['Text coherence.','Logical coherence.','Maintain coherence.','Coherent argument.'] },

  { id:'paraphrase', en:'to paraphrase', ru:'перефразировать', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'paraphrased' },
    examples:['Paraphrase the spec.','Paraphrase for clarity.','Paraphrased correctly.','Paraphrase not copy.'] },

  { id:'synthesize', en:'to synthesize', ru:'синтезировать / обобщать', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'synthesized' },
    examples:['Synthesize findings.','Synthesize data.','Synthesize the report.','Synthesize research.'] },

  { id:'critique', en:'to critique', ru:'критически анализировать', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'verbs-regular',
    forms:{ type:'verb', v3:'critiqued' },
    examples:['Critique the design.','Critique the report.','Critique constructively.','Peer critique.'] },

  // ─── B1 — Technology & Innovation ────────────────────────────────────────

  { id:'patent-pending', en:'patent pending', ru:'патент на рассмотрении', image:null, emoji:'©️', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'other' },
    examples:['Patent pending.','Patent applied for.','Mark patent pending.','Provisional patent.'] },

  { id:'provisional-patent', en:'provisional patent application', ru:'предварительная патентная заявка', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'provisional patent applications' },
    examples:['File provisional.','12-month provisional.','Provisional protection.','Upgrade to full patent.'] },

  { id:'prior-art', en:'prior art', ru:'уровень техники (в патентном праве)', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:null },
    examples:['Search prior art.','Prior art exists.','Novel over prior art.','Prior art reference.'] },

  { id:'freedom-to-operate', en:'freedom to operate (FTO)', ru:'свобода деятельности (FTO)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'other' },
    examples:['FTO analysis.','Freedom to operate.','FTO opinion.','Clear FTO.'] },

  { id:'technology-readiness', en:'technology readiness level (TRL)', ru:'уровень готовности технологии (УГТ)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['TRL 6.','Technology readiness.','TRL assessment.','Advance TRL.'] },

  { id:'manufacturing-readiness', en:'manufacturing readiness level (MRL)', ru:'уровень производственной готовности', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['MRL 7.','Manufacturing readiness.','MRL assessment.','Improve MRL.'] },

  { id:'innovation-pipeline', en:'innovation pipeline', ru:'инновационный конвейер', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'innovation pipelines' },
    examples:['Build innovation pipeline.','Full pipeline.','Manage innovation.','Innovation funnel.'] },

  { id:'r-and-d', en:'R&D (research and development)', ru:'НИОКР (научные исследования и разработки)', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['R&D investment.','R&D department.','R&D budget.','R&D results.'] },

  { id:'skunk-works', en:'skunk works', ru:'секретная исследовательская группа', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Skunk works team.','Skunk works project.','Internal startup.','Skunk works innovation.'] },

  { id:'proof-of-value', en:'proof of value (POV)', ru:'подтверждение ценности (POV)', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['POV study.','Prove value.','POV results.','Business POV.'] },

  // ─── B1 — More American English ──────────────────────────────────────────

  { id:'y-all', en:"y'all", ru:'вы / вы все (южный диалект)', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["Y'all ready?","How are y'all doing?","Y'all come back.","Southern y'all."] },

  { id:'gonna', en:"gonna (going to)", ru:'собираться (разговорное «гонна»)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["I'm gonna check.","He's gonna fix it.","We're gonna test.","Gonna finish today."] },

  { id:'wanna', en:"wanna (want to)", ru:'хотеть (разговорное «ванна»)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["You wanna help?","I wanna try.","Do you wanna join?","Who wanna present?"] },

  { id:'gotta', en:"gotta (have got to)", ru:'должен (разговорное «готта»)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["I gotta finish.","You gotta be kidding.","Gotta go now.","He gotta sign it."] },

  { id:'kinda', en:"kinda (kind of)", ru:'своего рода / немного (разговорное)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["It is kinda hard.","Kinda expensive.","I kinda agree.","Kinda makes sense."] },

  { id:'sorta', en:"sorta (sort of)", ru:'что-то вроде / в какой-то мере (разговорное)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["Sorta true.","Sorta works.","I sorta agree.","Sorta like that."] },

  { id:'gimme', en:"gimme (give me)", ru:'дай мне (разговорное)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["Gimme a minute.","Gimme the data.","Gimme a break.","Gimme your report."] },

  { id:'cmon', en:"c'mon (come on)", ru:'ну давай / ну же (разговорное)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["C'mon, let's go.","C'mon, really?","C'mon man.","C'mon, it is easy."] },

  { id:'gotcha', en:"gotcha (got you)", ru:'понял / поймал тебя (разговорное)', image:null, emoji:'💬', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:["Gotcha! Understood.","Gotcha, will do.","Gotcha covered.","Gotcha, no problem."] },

  { id:'no-brainer', en:'no-brainer', ru:'очевидное решение / само собой разумеется', image:null, emoji:'🧠', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'noun', plural:'no-brainers' },
    examples:["It is a no-brainer.","That decision is a no-brainer.","Obvious choice, no-brainer.","Total no-brainer."] },

  // ─── B1 — Advanced Engineering Calculations ───────────────────────────────

  { id:'hand-calculation', en:'hand calculation', ru:'ручной расчёт', image:null, emoji:'🖊️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'hand calculations' },
    examples:['Verify with hand calc.','Hand calculation check.','Quick hand calc.','Compare to hand calc.'] },

  { id:'sanity-check', en:'sanity check', ru:'проверка на разумность / здравый смысл', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'sanity checks' },
    examples:['Do a sanity check.','Sanity check the numbers.','Failed sanity check.','Quick sanity check.'] },

  { id:'order-magnitude', en:'order of magnitude', ru:'порядок величины', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'orders of magnitude' },
    examples:['Order of magnitude estimate.','10x order of magnitude.','Within one order.','Magnitude check.'] },

  { id:'unit-conversion', en:'unit conversion', ru:'перевод единиц измерения', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'unit conversions' },
    examples:['Unit conversion factor.','Convert psi to MPa.','Metric to imperial.','Unit conversion error.'] },

  { id:'dimensional-analysis', en:'dimensional analysis', ru:'анализ размерностей', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Dimensional analysis.','Check units.','Buckingham pi.','Dimensional homogeneity.'] },

  { id:'significant-figures', en:'significant figures', ru:'значащие цифры', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:null },
    examples:['3 significant figures.','Round to sig figs.','Significant figure rules.','Too many sig figs.'] },

  { id:'rounding-error', en:'rounding error', ru:'ошибка округления', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'rounding errors' },
    examples:['Rounding error.','Cumulative rounding.','Avoid rounding error.','Round correctly.'] },

  { id:'scientific-notation', en:'scientific notation', ru:'научная (экспоненциальная) нотация', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'other' },
    examples:['Scientific notation.','3.5 × 10⁶.','Express in scientific notation.','Convert to sci notation.'] },

  { id:'logarithm', en:'logarithm', ru:'логарифм', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'logarithms' },
    examples:['Natural logarithm.','Log base 10.','Decibel logarithm.','Log-log plot.'] },

  { id:'derivative', en:'derivative (math)', ru:'производная (математика)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'derivatives' },
    examples:['First derivative.','dF/dx.','Calculate derivative.','Rate of change.'] },

  // ─── B1 — More Work Vocabulary ────────────────────────────────────────────

  { id:'onboarding-plan', en:'onboarding plan', ru:'план введения в должность', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'onboarding plans' },
    examples:['30-60-90 plan.','New hire onboarding.','Onboarding checklist.','Complete onboarding.'] },

  { id:'ninety-day', en:'90-day plan', ru:'план на первые 90 дней', image:null, emoji:'📅', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'90-day plans' },
    examples:['30-60-90 day plan.','90-day goals.','Execute 90-day.','Review 90-day plan.'] },

  { id:'individual-dev-plan', en:'individual development plan (IDP)', ru:'индивидуальный план развития', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'other' },
    examples:['Create IDP.','IDP goals.','Annual IDP review.','Develop IDP.'] },

  { id:'succession-planning', en:'succession planning', ru:'планирование преемственности', image:null, emoji:'♟️', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Succession plan.','Identify successors.','Talent pipeline.','Succession readiness.'] },

  { id:'attrition', en:'attrition', ru:'естественная убыль персонала / текучесть', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['High attrition.','Natural attrition.','Reduce attrition.','Attrition rate 15%.'] },

  { id:'retention', en:'retention (employee)', ru:'удержание персонала', image:null, emoji:'🏆', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Improve retention.','Retention strategy.','Employee retention.','Retention bonus.'] },

  { id:'talent-acquisition', en:'talent acquisition', ru:'привлечение талантов / рекрутинг', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Talent acquisition.','Recruiting talent.','TA team.','Talent pipeline.'] },

  { id:'job-description', en:'job description', ru:'должностная инструкция / описание вакансии', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'job descriptions' },
    examples:['Read job description.','Write JD.','Update job description.','Match JD requirements.'] },

  { id:'competency-framework', en:'competency framework', ru:'модель компетенций', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'competency frameworks' },
    examples:['Competency framework.','Engineering competencies.','Assess against framework.','Build framework.'] },

  { id:'talent-management', en:'talent management', ru:'управление талантами', image:null, emoji:'⭐', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Talent management.','Identify talent.','Develop talent.','Talent review.'] },

  // ─── B1 — Physics & Basic Science ────────────────────────────────────────

  { id:'torque-physics', en:'torque', ru:'момент (крутящий)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Torque = F × r.','Apply torque.','Torque wrench.','Tightening torque.'] },

  { id:'work-physics', en:'work (physics)', ru:'работа (физика)', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Work = F × d.','Mechanical work.','Work done.','Work in joules.'] },

  { id:'power-physics', en:'power (physics)', ru:'мощность (физика)', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Power = W/t.','Motor power kW.','Power output.','Horsepower.'] },

  { id:'momentum', en:'momentum', ru:'импульс / количество движения', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Linear momentum.','Angular momentum.','Conservation of momentum.','Impact momentum.'] },

  { id:'friction', en:'friction', ru:'трение', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Static friction.','Kinetic friction.','Friction coefficient.','Reduce friction.'] },

  { id:'coefficient-friction', en:'coefficient of friction', ru:'коэффициент трения', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'coefficients of friction' },
    examples:['μ = 0.3.','Static coefficient.','Measure friction coefficient.','Low friction coating.'] },

  { id:'normal-force', en:'normal force', ru:'нормальная сила / сила нормального давления', image:null, emoji:'⬆️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'normal forces' },
    examples:['Normal force N.','Contact normal force.','Calculate normal force.','FBD normal force.'] },

  { id:'equilibrium', en:'equilibrium', ru:'равновесие', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'equilibria' },
    examples:['Static equilibrium.','Sum of forces zero.','Equilibrium condition.','Thermal equilibrium.'] },

  { id:'conservation-energy', en:'conservation of energy', ru:'закон сохранения энергии', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Energy conservation.','Energy balance.','No energy lost.','Conservation law.'] },

  { id:'potential-energy', en:'potential energy', ru:'потенциальная энергия', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Gravitational potential energy.','Spring potential energy.','Stored potential energy.','Convert to kinetic.'] },

  // ─── B1 — Advanced Procurement & Finance ────────────────────────────────

  { id:'rfq', en:'RFQ (request for quotation)', ru:'запрос коммерческого предложения (ЗКП)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'other' },
    examples:['Issue RFQ.','RFQ response.','RFQ due date.','Evaluate RFQ.'] },

  { id:'rfp', en:'RFP (request for proposal)', ru:'запрос предложений (ЗП)', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'other' },
    examples:['Issue RFP.','RFP response.','Evaluate RFP.','Award after RFP.'] },

  { id:'rfi', en:'RFI (request for information)', ru:'запрос информации', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'other' },
    examples:['Issue RFI.','RFI to supplier.','RFI market research.','Respond to RFI.'] },

  { id:'bid-evaluation', en:'bid evaluation', ru:'оценка предложений', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:'bid evaluations' },
    examples:['Bid evaluation matrix.','Evaluate bids.','Score bids.','Bid award.'] },

  { id:'total-cost-ownership', en:'total cost of ownership (TCO)', ru:'совокупная стоимость владения (ТСВ)', image:null, emoji:'💰', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['TCO analysis.','Total cost of ownership.','Calculate TCO.','Compare TCO.'] },

  { id:'should-cost', en:'should-cost analysis', ru:'анализ «как должно стоить»', image:null, emoji:'💲', imageEligible:false, level:'B1', category:'engineer-vendors',
    forms:{ type:'noun', plural:null },
    examples:['Should-cost model.','Build should-cost.','Compare to should-cost.','Negotiate from should-cost.'] },

  { id:'cost-down', en:'cost reduction', ru:'снижение затрат', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Cost reduction target.','Cost-down initiative.','Value engineering cost.','Cost reduction program.'] },

  { id:'value-engineering', en:'value engineering (VE)', ru:'функционально-стоимостной анализ (ФСА)', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Value engineering.','VE study.','Function analysis.','VE saves 20%.'] },

  { id:'target-costing', en:'target costing', ru:'целевое калькулирование затрат', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Target cost set.','Design to target cost.','Cost target $5.','Meet target costing.'] },

  { id:'vave', en:'VA/VE (value analysis/value engineering)', ru:'анализ и инжиниринг ценности', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['VA/VE workshop.','VAVE savings.','Conduct VAVE.','VAVE results.'] },

  // ─── B1 — More Engineering Nouns ─────────────────────────────────────────

  { id:'flange', en:'flange', ru:'фланец', image:'flange', emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'flanges' },
    examples:['Bolt flange.','Pipe flange.','Flange face.','Blind flange.'] },

  { id:'weld-neck', en:'weld neck flange', ru:'приварной фланец с горловиной', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'weld neck flanges' },
    examples:['Weld neck flange.','Schedule 40 weld neck.','High pressure flange.','Weld neck connection.'] },

  { id:'socket-weld', en:'socket weld fitting', ru:'фитинг с раструбом под приварку', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'socket weld fittings' },
    examples:['Socket weld elbow.','SW fitting.','Socket weld pressure.','Install socket weld.'] },

  { id:'slip-on', en:'slip-on flange', ru:'надвижной фланец', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'slip-on flanges' },
    examples:['Slip-on flange.','SO flange.','Low-pressure slip-on.','Weld slip-on.'] },

  { id:'blind-flange', en:'blind flange', ru:'заглушка-фланец', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'blind flanges' },
    examples:['Blind flange.','Blank the pipe.','Blind off.','Temporary blind.'] },

  { id:'gasket', en:'gasket', ru:'прокладка (уплотнительная)', image:'gasket', emoji:'⭕', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'gaskets' },
    examples:['Replace gasket.','Spiral wound gasket.','Compressed gasket.','Gasket material.'] },

  { id:'pressure-vessel', en:'pressure vessel', ru:'сосуд под давлением', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'pressure vessels' },
    examples:['ASME pressure vessel.','Vessel design pressure.','Pressure vessel code.','Inspect vessel.'] },

  { id:'relief-valve', en:'relief valve', ru:'предохранительный клапан', image:'relief-valve', emoji:'⚠️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'relief valves' },
    examples:['Set relief valve.','Pressure relief.','Relief valve opens at.','Test relief valve.'] },

  { id:'check-valve', en:'check valve', ru:'обратный клапан', image:'check-valve', emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'check valves' },
    examples:['Install check valve.','Prevent backflow.','Swing check.','Check valve failure.'] },

  { id:'strainer', en:'strainer (pipe)', ru:'фильтр-сетка (трубопровод)', image:null, emoji:'🔵', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'strainers' },
    examples:['Y-strainer.','Clean the strainer.','Strainer mesh size.','Install strainer upstream.'] },



  { id:'value-added', en:'value-added activity', ru:'деятельность, добавляющая ценность', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'value-added activities' },
    examples:['VA activity.','Value-added step.','Identify value-added.','Focus on VA.'] },

  { id:'non-value-added', en:'non-value-added activity', ru:'деятельность, не добавляющая ценность (муда)', image:null, emoji:'🗑️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'non-value-added activities' },
    examples:['NVA activity.','Eliminate NVA.','Waste is NVA.','Reduce NVA steps.'] },

  { id:'eight-wastes', en:'eight wastes (lean)', ru:'восемь видов потерь (TIMWOODS)', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['Eight wastes lean.','TIMWOODS waste.','Identify waste.','Eliminate 8 wastes.'] },

  { id:'overproduction', en:'overproduction (waste)', ru:'перепроизводство (вид потерь)', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Overproduction waste.','Produce to demand.','Avoid overproduction.','Pull system prevents over.'] },

  { id:'waiting-waste', en:'waiting (lean waste)', ru:'ожидание (вид потерь)', image:null, emoji:'⏳', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Waiting waste.','Machine waiting.','Reduce waiting.','Idle time waiting.'] },

  { id:'transportation-waste', en:'transportation waste', ru:'излишняя транспортировка (вид потерь)', image:null, emoji:'🚛', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Transport waste.','Unnecessary movement.','Layout reduces transport.','Minimize transportation.'] },

  { id:'over-processing', en:'over-processing (waste)', ru:'излишняя обработка (вид потерь)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Over-processing waste.','More than needed.','Eliminate over-process.','Polish unnecessarily.'] },

  { id:'defect-waste', en:'defect waste', ru:'дефекты (вид потерь)', image:null, emoji:'❌', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Defect waste.','Zero defects goal.','Prevent defect waste.','Defects cost money.'] },

  { id:'motion-waste', en:'motion waste', ru:'лишние движения (вид потерь)', image:null, emoji:'🚶', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Motion waste.','Unnecessary motion.','Ergonomics reduces motion.','Motion study.'] },

  { id:'skill-waste', en:'skills underutilization', ru:'недоиспользование навыков (вид потерь)', image:null, emoji:'👤', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Skills waste.','Underused talent.','Match skills to work.','Utilize expertise.'] },

  // ─── B1 — Advanced Work Communication ────────────────────────────────────

  { id:'professional-summary', en:'professional summary', ru:'профессиональное резюме (краткое)', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'professional summaries' },
    examples:['LinkedIn summary.','Professional summary section.','Two-line summary.','Write summary.'] },

  { id:'linkedin-profile', en:'LinkedIn profile', ru:'профиль LinkedIn', image:null, emoji:'💼', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'LinkedIn profiles' },
    examples:['Update LinkedIn.','Connect on LinkedIn.','LinkedIn profile tip.','LinkedIn headline.'] },

  { id:'personal-brand', en:'personal brand', ru:'личный бренд', image:null, emoji:'⭐', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'personal brands' },
    examples:['Build personal brand.','Online personal brand.','Consistent brand.','Brand yourself.'] },

  { id:'thought-leadership', en:'thought leadership', ru:'интеллектуальное лидерство', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Thought leadership.','Publish thought leadership.','Engineer thought leader.','Demonstrate expertise.'] },

  { id:'industry-conference', en:'industry conference', ru:'отраслевая конференция', image:null, emoji:'🏢', imageEligible:false, level:'B1', category:'work-travel',
    forms:{ type:'noun', plural:'industry conferences' },
    examples:['Attend conference.','Present at conference.','Network at conference.','Annual conference.'] },

  { id:'technical-journal', en:'technical journal', ru:'научно-технический журнал', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'technical journals' },
    examples:['Publish in journal.','Journal article.','Peer-reviewed journal.','Read technical journal.'] },

  { id:'trade-publication', en:'trade publication', ru:'отраслевое издание', image:null, emoji:'📰', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'trade publications' },
    examples:['Read trade pub.','Article in trade.','Industry trade news.','Subscribe to trade.'] },

  { id:'published-article', en:'published article', ru:'опубликованная статья', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'published articles' },
    examples:['Published article.','Co-authored paper.','Article citation.','Publish findings.'] },

  { id:'conference-paper', en:'conference paper', ru:'доклад на конференции', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'work-email',
    forms:{ type:'noun', plural:'conference papers' },
    examples:['Submit conference paper.','Conference proceedings.','Present paper.','Technical paper.'] },

  { id:'case-study', en:'case study', ru:'анализ конкретного примера / кейс-стади', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'case studies' },
    examples:['Engineering case study.','Publish case study.','Learn from case study.','Failure case study.'] },

  // ─── B1 — Physics & Materials (More) ─────────────────────────────────────

  { id:'tribology', en:'tribology', ru:'трибология (наука о трении)', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Tribology study.','Lubrication tribology.','Wear tribology.','Tribological test.'] },

  { id:'adhesion', en:'adhesion', ru:'адгезия / сцепление', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Adhesion strength.','Coating adhesion.','Improve adhesion.','Adhesion test.'] },

  { id:'cohesion-material', en:'cohesion (materials)', ru:'когезия / силы сцепления', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Material cohesion.','Cohesive failure.','Cohesion strength.','Cohesive zone.'] },

  { id:'deformation', en:'deformation', ru:'деформация', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'deformations' },
    examples:['Elastic deformation.','Plastic deformation.','Permanent deformation.','Measure deformation.'] },

  { id:'elongation', en:'elongation at break', ru:'относительное удлинение при разрыве', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Elongation 25%.','Test elongation.','Percent elongation.','Elongation at break.'] },

  { id:'reduction-area', en:'reduction in area', ru:'поперечное сужение', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Reduction in area.','RA 60%.','Measure RA.','Tensile test RA.'] },

  { id:'tensile-test', en:'tensile test', ru:'испытание на растяжение', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'tensile tests' },
    examples:['Run tensile test.','Tensile specimen.','Tensile test results.','ASTM tensile.'] },

  { id:'stress-strain-curve', en:'stress-strain curve', ru:'диаграмма растяжения (σ-ε)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'stress-strain curves' },
    examples:['Plot stress-strain.','Elastic region.','Necking in curve.','Analyze curve.'] },

  { id:'proof-strength', en:'proof strength (0.2%)', ru:'условный предел текучести (0.2%)', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['0.2% proof strength.','Rp0.2.','Proof stress.','Compare to spec.'] },

  { id:'ultimate-strength', en:'ultimate tensile strength (UTS)', ru:'предел прочности при растяжении', image:null, emoji:'💪', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['UTS 1000 MPa.','Ultimate strength.','Fracture at UTS.','Specify UTS.'] },

  // ─── B1 — Advanced CAD & Design ───────────────────────────────────────────

  { id:'loft', en:'loft (CAD feature)', ru:'лофтинг / создание тела по профилям', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'lofts' },
    examples:['Loft feature.','Loft between profiles.','Blend with loft.','CAD loft command.'] },

  { id:'sweep', en:'sweep (CAD feature)', ru:'вытягивание по траектории', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'sweeps' },
    examples:['Sweep command.','Sweep path.','Tube via sweep.','Thin sweep.'] },

  { id:'revolve', en:'revolve (CAD feature)', ru:'вращение (создание тела вращения)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'revolves' },
    examples:['Revolve command.','360 revolve.','Revolve around axis.','Axisymmetric revolve.'] },

  { id:'shell', en:'shell (CAD feature)', ru:'оболочка (команда САПР)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'shells' },
    examples:['Shell the solid.','Wall thickness shell.','Shell command.','Shell 2mm thick.'] },

  { id:'draft-angle', en:'draft angle', ru:'уклон (для литья)', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'draft angles' },
    examples:['Draft angle 2°.','Add draft.','Mold draft.','Check draft angle.'] },

  { id:'rib-cad', en:'rib (CAD feature)', ru:'ребро жёсткости (в САПР)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'ribs' },
    examples:['Add rib.','Rib stiffener.','Draft rib.','Rib thickness.'] },

  { id:'boss', en:'boss (CAD feature)', ru:'бобышка (в САПР)', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'bosses' },
    examples:['Mounting boss.','Boss feature.','Counterbore boss.','Snap-fit boss.'] },

  { id:'snap-fit', en:'snap-fit (design)', ru:'защёлочное соединение', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'snap-fits' },
    examples:['Cantilever snap-fit.','Design snap-fit.','Snap-fit strength.','Annular snap-fit.'] },

  { id:'living-hinge', en:'living hinge', ru:'цельный шарнир (гибкий шарнир)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'living hinges' },
    examples:['Polypropylene hinge.','Living hinge design.','Thin living hinge.','Flex zone.'] },

  { id:'insert-molding', en:'insert molding', ru:'литьё с вставкой (запрессованный вкладыш)', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Metal insert molding.','Insert in mold.','Overmolded insert.','Insert tolerance.'] },

  // ─── B1 — More Vocabulary (General) ─────────────────────────────────────

  { id:'infrastructure', en:'infrastructure', ru:'инфраструктура', image:null, emoji:'🏗️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'infrastructures' },
    examples:['IT infrastructure.','Factory infrastructure.','Infrastructure investment.','Build infrastructure.'] },

  { id:'ecosystem', en:'ecosystem', ru:'экосистема', image:null, emoji:'🌱', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'ecosystems' },
    examples:['Technology ecosystem.','Partner ecosystem.','Supplier ecosystem.','Build ecosystem.'] },

  { id:'interdependency', en:'interdependency', ru:'взаимозависимость', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'interdependencies' },
    examples:['System interdependency.','Map interdependencies.','Risk of interdependency.','Manage dependencies.'] },

  { id:'interface-control', en:'interface control', ru:'управление интерфейсами', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Interface control document.','Manage interfaces.','Interface freeze.','Interface agreement.'] },

  { id:'integration-test', en:'integration testing', ru:'интеграционные испытания', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['System integration test.','SIT phase.','Integration test plan.','Hardware integration.'] },

  { id:'system-test', en:'system testing', ru:'системные испытания', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['System test phase.','Full system test.','End-to-end test.','System test report.'] },

  { id:'type-test', en:'type test', ru:'типовые испытания', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'noun', plural:'type tests' },
    examples:['Type test certification.','Conduct type test.','Type test report.','Electrical type test.'] },

  { id:'site-acceptance', en:'site acceptance test (SAT)', ru:'приёмочные испытания на месте', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['SAT complete.','Site acceptance.','On-site test.','SAT documentation.'] },

  { id:'factory-acceptance', en:'factory acceptance test (FAT)', ru:'заводские приёмочные испытания', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['FAT passed.','Factory acceptance.','Witness FAT.','FAT protocol.'] },

  { id:'emv-test', en:'EMC/EMI testing', ru:'испытания на электромагнитную совместимость', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-docs',
    forms:{ type:'other' },
    examples:['EMC test.','EMI testing.','FCC Part 15.','Radiated emissions.'] },

  // ─── B1 — Vocabulary Fill (Various) ──────────────────────────────────────

  { id:'stakeholder-mgmt', en:'stakeholder management', ru:'управление заинтересованными сторонами', image:null, emoji:'👥', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Manage stakeholders.','Stakeholder engagement.','Stakeholder strategy.','Key stakeholder plan.'] },

  { id:'change-management', en:'change management', ru:'управление изменениями (организационное)', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:null },
    examples:['Change management plan.','Manage organizational change.','Change resistance.','Kotter change model.'] },

  { id:'resistance-change', en:'resistance to change', ru:'сопротивление изменениям', image:null, emoji:'🛑', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Overcome resistance.','Resistance to change.','Address resistance.','Change resistance common.'] },

  { id:'knowledge-transfer', en:'knowledge transfer', ru:'передача знаний', image:null, emoji:'🎓', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:null },
    examples:['Knowledge transfer session.','Document knowledge.','Transfer expertise.','KT meeting.'] },

  { id:'subject-matter-expert', en:'subject matter expert (SME)', ru:'эксперт в предметной области', image:null, emoji:'🎓', imageEligible:false, level:'B1', category:'work-colleagues',
    forms:{ type:'noun', plural:'subject matter experts' },
    examples:['Consult SME.','SME review.','Be an SME.','SME input needed.'] },

  { id:'knowledge-base', en:'knowledge base', ru:'база знаний', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'knowledge bases' },
    examples:['Update knowledge base.','Search knowledge base.','Company KB.','Build knowledge base.'] },

  { id:'tribal-knowledge', en:'tribal knowledge', ru:'неформализованные знания / «знания на ходу»', image:null, emoji:'🏕️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Tribal knowledge risk.','Document tribal knowledge.','Capture tribal know-how.','Retain tribal knowledge.'] },

  { id:'institutional-memory', en:'institutional memory', ru:'корпоративная (организационная) память', image:null, emoji:'🏛️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:null },
    examples:['Preserve institutional memory.','Loss of memory.','Build institutional knowledge.','Document history.'] },

  { id:'core-competency', en:'core competency', ru:'ключевая компетенция', image:null, emoji:'⭐', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'core competencies' },
    examples:['Core competency.','Define core skills.','Protect core competency.','Build around core.'] },

  { id:'mission-critical', en:'mission-critical', ru:'критически важный (для выполнения задачи)', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Mission-critical system.','Mission-critical component.','Protect mission-critical.','Mission-critical process.'] },

  // ─── B1 — More Engineering Terms ─────────────────────────────────────────

  { id:'thermal-management', en:'thermal management', ru:'управление тепловым режимом', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:null },
    examples:['Thermal management plan.','Battery thermal management.','TMS design.','Active thermal management.'] },

  { id:'thermal-runaway', en:'thermal runaway', ru:'тепловой разгон', image:null, emoji:'🔥', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Battery thermal runaway.','Prevent thermal runaway.','Thermal runaway event.','TR protection.'] },

  { id:'battery-management', en:'battery management system (BMS)', ru:'система управления аккумулятором (BMS)', image:null, emoji:'🔋', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'other' },
    examples:['BMS protects battery.','BMS monitoring.','Configure BMS.','BMS fault.'] },

  { id:'state-of-charge', en:'state of charge (SOC)', ru:'уровень заряда батареи (SOC)', image:null, emoji:'🔋', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['SOC 80%.','Measure SOC.','SOC algorithm.','Estimate SOC.'] },

  { id:'depth-of-discharge', en:'depth of discharge (DOD)', ru:'глубина разряда (DOD)', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['80% DOD.','Limit DOD.','DOD effect on life.','Deep DOD.'] },

  { id:'cycle-life', en:'cycle life', ru:'ресурс по циклам (аккумуляторы)', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Cycle life 500 cycles.','Battery cycle life.','Extend cycle life.','Cycle life test.'] },

  { id:'energy-density', en:'energy density', ru:'плотность энергии', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Wh/kg energy density.','High energy density.','Improve energy density.','Volumetric energy density.'] },

  { id:'power-density', en:'power density', ru:'удельная мощность', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['W/kg power density.','High power density.','Power vs energy density.','Motor power density.'] },

  { id:'solid-state-battery', en:'solid-state battery', ru:'твердотельный аккумулятор', image:null, emoji:'🔋', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'solid-state batteries' },
    examples:['Solid-state technology.','Solid electrolyte.','Next-gen battery.','Solid-state advantage.'] },

  { id:'electrolyte', en:'electrolyte', ru:'электролит', image:null, emoji:'🧪', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'electrolytes' },
    examples:['Liquid electrolyte.','Electrolyte conductivity.','Solid electrolyte.','Electrolyte leakage.'] },

  // ─── B1 — Final 40 vocabulary ────────────────────────────────────────────

  { id:'perimeter', en:'perimeter', ru:'периметр', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'perimeters' },
    examples:['Calculate perimeter.','Weld perimeter.','Part perimeter.','Seal perimeter.'] },

  { id:'cross-section-area', en:'cross-sectional area', ru:'площадь поперечного сечения', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'cross-sectional areas' },
    examples:['Cross-sectional area.','A = π r².','Minimum area.','Calculate area.'] },

  { id:'aspect-ratio', en:'aspect ratio', ru:'соотношение сторон', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'noun', plural:'aspect ratios' },
    examples:['Mesh aspect ratio.','High aspect ratio.','L/D ratio.','Maintain aspect ratio.'] },

  { id:'span', en:'span (structure)', ru:'пролёт (строительная конструкция)', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'spans' },
    examples:['Beam span.','Long span.','Span-to-depth.','Bridge span.'] },

  { id:'cantilever', en:'cantilever', ru:'консоль / консольная балка', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'cantilevers' },
    examples:['Cantilever beam.','Cantilever deflection.','Cantilever bracket.','Fixed cantilever.'] },

  { id:'simply-supported', en:'simply supported beam', ru:'свободно опёртая балка', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'simply supported beams' },
    examples:['Simply supported.','Pinned supports.','SS beam deflection.','Analyze SS beam.'] },

  { id:'overhanging', en:'overhanging beam', ru:'балка с консолью', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'overhanging beams' },
    examples:['Overhanging beam.','Cantilever overhang.','Overhang loading.','Beam with overhang.'] },

  { id:'truss', en:'truss (structure)', ru:'ферма (строительная конструкция)', image:null, emoji:'🏗️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'trusses' },
    examples:['Roof truss.','Steel truss.','Truss member.','Analyze truss.'] },

  { id:'support-reaction', en:'support reaction', ru:'реакция в опоре', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'support reactions' },
    examples:['Pin reaction.','Roller reaction.','Calculate reaction.','Sum reactions.'] },

  { id:'pin-connection', en:'pin connection', ru:'шарнирное соединение', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'pin connections' },
    examples:['Pin joint.','Pinned base.','Pin and clevis.','Pin connection moment-free.'] },

  { id:'fixed-connection', en:'fixed connection', ru:'жёсткое соединение (заделка)', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'fixed connections' },
    examples:['Fixed end.','Built-in support.','Fixed connection transfers moment.','Rigid fixed joint.'] },

  { id:'roller-support', en:'roller support', ru:'опора на катке / катковая опора', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'roller supports' },
    examples:['Roller support.','One degree reaction.','Thermal expansion roller.','Sliding roller.'] },

  { id:'spring-constant', en:'spring constant (k)', ru:'жёсткость пружины (k)', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'spring constants' },
    examples:['k = 1000 N/m.','Spring rate.','Stiffness constant.','Calculate spring k.'] },

  { id:'damper', en:'damper', ru:'демпфер / гаситель колебаний', image:'damper', emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'dampers' },
    examples:['Shock damper.','Hydraulic damper.','Install damper.','Damper rating.'] },

  { id:'isolation-mount', en:'vibration isolation mount', ru:'виброизолятор / виброопора', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'vibration isolation mounts' },
    examples:['Rubber isolation mount.','Anti-vibration mount.','Reduce transmitted vibration.','Mount selection.'] },

  { id:'anti-vibration-pad', en:'anti-vibration pad', ru:'антивибрационная площадка', image:null, emoji:'🟫', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'anti-vibration pads' },
    examples:['Anti-vibration pad.','Install AV pad.','Neoprene pad.','Level with pad.'] },

  { id:'shim', en:'shim', ru:'прокладка-шим / регулировочная прокладка', image:'shim', emoji:'📏', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'shims' },
    examples:['Stainless shim.','Shim to align.','Shim stack.','Precision shim.'] },

  { id:'alignment-tool', en:'alignment tool', ru:'инструмент для выравнивания', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-tools',
    forms:{ type:'noun', plural:'alignment tools' },
    examples:['Laser alignment.','Dial indicator alignment.','Shaft alignment tool.','Alignment check.'] },

  { id:'coupling-alignment', en:'shaft alignment', ru:'центровка вала / выравнивание вала', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Shaft alignment.','Angular alignment.','Parallel alignment.','Laser shaft alignment.'] },

  { id:'runout-check', en:'runout check', ru:'проверка биения', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:'runout checks' },
    examples:['Check runout.','Dial indicator runout.','Total runout 0.01.','Runout acceptable.'] },



  { id:'rivet', en:'rivet', ru:'заклёпка', image:'rivet', emoji:'🔩', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'rivets' },
    examples:['Blind rivet.','Pop rivet.','Structural rivet.','Install rivet.'] },

  { id:'clevis', en:'clevis', ru:'вилка / серьга (крепёж)', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'clevises' },
    examples:['Clevis pin.','Fork and clevis.','Clevis bracket.','Hydraulic clevis.'] },

  { id:'turnbuckle', en:'turnbuckle', ru:'тандер / стяжная муфта', image:'turnbuckle', emoji:'🔩', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'turnbuckles' },
    examples:['Adjust turnbuckle.','Tension with turnbuckle.','Rigging turnbuckle.','Cable turnbuckle.'] },

  { id:'u-bolt', en:'U-bolt', ru:'U-образный болт', image:'u-bolt', emoji:'🔩', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'U-bolts' },
    examples:['U-bolt clamp.','Pipe U-bolt.','Install U-bolt.','U-bolt saddle.'] },

  { id:'eye-bolt', en:'eye bolt', ru:'рым-болт', image:'eye-bolt', emoji:'🔩', imageEligible:true, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'eye bolts' },
    examples:['Lifting eye bolt.','Eye bolt WLL.','Shoulder eye bolt.','Load eye bolt.'] },

  { id:'grub-screw', en:'grub screw (set screw)', ru:'глухой установочный винт', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'grub screws' },
    examples:['Tighten grub screw.','Cup point grub.','Hex key grub.','Collar grub screw.'] },

  { id:'blind-rivet', en:'blind rivet', ru:'вытяжная заклёпка (слепой монтаж)', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'blind rivets' },
    examples:['Pop rivet tool.','Blind rivet diameter.','Aluminum blind rivet.','Pull mandrel.'] },

  { id:'structural-adhesive', en:'structural adhesive', ru:'конструкционный клей', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'structural adhesives' },
    examples:['Epoxy structural.','Adhesive bond.','Structural bond line.','Bond strength.'] },

  { id:'clinching', en:'clinching (sheet metal joining)', ru:'клинчевание / прессовое соединение', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-shopfloor',
    forms:{ type:'noun', plural:null },
    examples:['Clinch joining.','No weld clinch.','TOX clinch.','Clinch tool.'] },

  { id:'self-tapping', en:'self-tapping screw', ru:'самонарезающий винт', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-assembly',
    forms:{ type:'noun', plural:'self-tapping screws' },
    examples:['Sheet metal screw.','Self-tapping thread.','Thread-forming screw.','Tap-tight screw.'] },

  // ─── B1 — Product Development ─────────────────────────────────────────────

  { id:'stage-gate', en:'stage-gate process', ru:'стадийный процесс разработки', image:null, emoji:'🚦', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'stage-gate processes' },
    examples:['Stage-gate model.','Gate review.','Pass the gate.','Stage-gate criteria.'] },

  { id:'npi', en:'NPI (new product introduction)', ru:'внедрение нового продукта', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['NPI process.','NPI manager.','NPI schedule.','NPI checklist.'] },

  { id:'concept-phase', en:'concept phase', ru:'фаза концепции / концептуальная стадия', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'concept phases' },
    examples:['Concept phase review.','Early concept.','Concept selection.','Exit concept phase.'] },

  { id:'alpha-prototype', en:'alpha prototype', ru:'альфа-прототип', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'alpha prototypes' },
    examples:['Alpha prototype build.','Test alpha.','Alpha findings.','Alpha to beta.'] },

  { id:'beta-prototype', en:'beta prototype', ru:'бета-прототип', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'beta prototypes' },
    examples:['Beta prototype.','Beta testing.','Beta feedback.','Beta to production.'] },

  { id:'pre-production', en:'pre-production build', ru:'опытная партия / предсерийная сборка', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'pre-production builds' },
    examples:['Pre-production run.','PP build.','Pre-production test.','Evaluate PP.'] },

  { id:'pilot-build', en:'pilot build', ru:'пилотный образец / пилотная партия', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'pilot builds' },
    examples:['Pilot build 10 units.','First pilot.','Pilot build evaluation.','Pilot to SOP.'] },

  { id:'build-plan', en:'build plan', ru:'план сборки / производственный план', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'build plans' },
    examples:['Prototype build plan.','Build plan schedule.','Execute build plan.','Update build plan.'] },

  { id:'product-roadmap', en:'product roadmap', ru:'дорожная карта продукта', image:null, emoji:'🗺️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', plural:'product roadmaps' },
    examples:['Product roadmap.','Long-term roadmap.','Roadmap presentation.','Feature roadmap.'] },

  { id:'voice-of-customer', en:'voice of customer (VOC)', ru:'голос потребителя', image:null, emoji:'🎤', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'other' },
    examples:['Capture VOC.','VOC analysis.','Customer voice.','Translate VOC to requirements.'] },

  // ─── B1 — Simulation & Analysis ──────────────────────────────────────────

  { id:'topology-opt', en:'topology optimization', ru:'топологическая оптимизация', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Topology optimization.','Weight reduction topo.','Organic topology.','Generative design.'] },

  { id:'size-optimization', en:'size optimization', ru:'оптимизация по размерам', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Size optimization.','Thickness optimization.','Optimize dimensions.','Size for minimum mass.'] },

  { id:'shape-optimization', en:'shape optimization', ru:'оптимизация формы', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Shape optimization.','Optimize profile.','Shape sensitivity.','Fillet shape opt.'] },

  { id:'generative-design', en:'generative design', ru:'генеративное проектирование', image:null, emoji:'🤖', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:null },
    examples:['Generative design algorithm.','AI generative.','Generative results.','Autodesk generative.'] },

  { id:'cfd', en:'CFD (computational fluid dynamics)', ru:'вычислительная гидродинамика (ВГД)', image:null, emoji:'💧', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'other' },
    examples:['CFD simulation.','Run CFD.','CFD mesh.','CFD results.'] },

  { id:'wind-tunnel', en:'wind tunnel', ru:'аэродинамическая труба', image:null, emoji:'🌬️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'wind tunnels' },
    examples:['Wind tunnel test.','Scale model.','Aerodynamic coefficients.','Open-loop tunnel.'] },

  { id:'drag', en:'drag force', ru:'сила лобового сопротивления', image:null, emoji:'💨', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Drag coefficient.','Reduce drag.','Aerodynamic drag.','Cd drag.'] },

  { id:'lift-force', en:'lift force', ru:'подъёмная сила', image:null, emoji:'✈️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Generate lift.','Lift coefficient.','Wing lift.','Bernoulli lift.'] },

  { id:'wake', en:'wake (fluid dynamics)', ru:'кильватерная струя / след (в аэродинамике)', image:null, emoji:'🌊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'wakes' },
    examples:['Turbulent wake.','Wake interference.','Reduce wake.','Wake region.'] },

  { id:'stagnation-point', en:'stagnation point', ru:'точка торможения (аэродинамика)', image:null, emoji:'📍', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'stagnation points' },
    examples:['Stagnation pressure.','Stagnation point.','Forward stagnation.','Stagnation temperature.'] },

  // ─── B1 — American English Filler ────────────────────────────────────────

  { id:'thumbs-up', en:'thumbs up', ru:'одобрение / хорошо', image:null, emoji:'👍', imageEligible:false, level:'B1', category:'small-talk',
    forms:{ type:'other' },
    examples:['Give thumbs up.','Thumbs up decision.','Approved thumbs up.','Thumbs up or down.'] },

  { id:'give-green-light', en:'to give the green light', ru:'дать зелёный свет / одобрить', image:null, emoji:'🟢', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'gave the green light' },
    examples:['Give green light.','Got the green light.','Green light to proceed.','Waiting for green light.'] },

  { id:'red-flag', en:'red flag', ru:'тревожный сигнал', image:null, emoji:'🚩', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'red flags' },
    examples:['Raise a red flag.','Red flag issue.','Recognize red flags.','Multiple red flags.'] },

  { id:'rubber-stamp', en:'rubber stamp', ru:'формальное одобрение без проверки', image:null, emoji:'🖊️', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'rubber-stamped' },
    examples:['Do not rubber stamp.','Rubber-stamp approval.','Blind rubber stamp.','More than rubber stamp.'] },

  { id:'devil-details', en:'devil is in the details', ru:'дьявол кроется в деталях', image:null, emoji:'😈', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Devil in the details.','Check details carefully.','Pay attention to detail.','The devil is there.'] },

  { id:'bitter-end', en:'to the bitter end', ru:'до конца / до победного', image:null, emoji:'🏁', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Fight to bitter end.','See it to bitter end.','Commit to bitter end.','Will not quit.'] },

  { id:'bite-bullet', en:'bite the bullet', ru:'стиснуть зубы / принять неприятное решение', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'bit the bullet' },
    examples:['Bite the bullet.','Bit the bullet, purchased.','Sometimes bite bullet.','Bite bullet and decide.'] },

  { id:'back-to-square-one', en:'back to square one', ru:'вернуться к началу', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'other' },
    examples:['Back to square one.','Start over.','Back to square one after failure.','Avoid square one.'] },

  { id:'kick-can', en:'kick the can down the road', ru:'откладывать на потом / тянуть время', image:null, emoji:'🥫', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'verb', v3:'kicked the can' },
    examples:['Stop kicking can.','Kicked can again.','Solve now not kick.','Management kicks can.'] },

  { id:'silver-bullet', en:'silver bullet', ru:'волшебное решение / панацея', image:null, emoji:'🔫', imageEligible:false, level:'B1', category:'work-office',
    forms:{ type:'noun', plural:'silver bullets' },
    examples:['No silver bullet.','Looking for silver bullet.','Is there a silver bullet?','Not a silver bullet.'] },

  // ─── B1 — More Technical Terms ────────────────────────────────────────────

  { id:'tolerance-build-up', en:'tolerance build-up', ru:'накопление допусков', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-drawings',
    forms:{ type:'noun', plural:null },
    examples:['Tolerance build-up.','Worst case build-up.','Minimize build-up.','Calculate build-up.'] },

  { id:'coordinate-system', en:'coordinate system', ru:'система координат', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'coordinate systems' },
    examples:['Cartesian coordinates.','Polar coordinates.','Machine coordinate system.','Part coordinate origin.'] },

  { id:'origin-point', en:'origin (coordinate)', ru:'начало координат', image:null, emoji:'🎯', imageEligible:false, level:'B1', category:'engineer-cad',
    forms:{ type:'noun', plural:'origins' },
    examples:['Set origin.','Origin at datum.','Machine origin.','Part origin.'] },

  { id:'right-hand-rule', en:'right-hand rule', ru:'правило правой руки', image:null, emoji:'🤚', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['Right-hand rule.','Cross product direction.','Vector direction.','Apply right-hand.'] },

  { id:'orthogonal', en:'orthogonal', ru:'ортогональный / перпендикулярный', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'other' },
    examples:['Orthogonal axes.','Orthogonal components.','Orthogonal design.','Orthogonal views.'] },

  { id:'coplanar', en:'coplanar', ru:'компланарный / лежащий в одной плоскости', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'numbers-time',
    forms:{ type:'other' },
    examples:['Coplanar forces.','Coplanar points.','Check coplanar.','Non-coplanar.'] },

  { id:'concurrent-forces', en:'concurrent forces', ru:'сходящиеся силы', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Concurrent force system.','Forces at a point.','Resolve concurrent.','Concurrent FBD.'] },

  { id:'distributed-load', en:'distributed load', ru:'распределённая нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'distributed loads' },
    examples:['Uniform distributed load.','UDL kN/m.','Triangular load.','Convert distributed load.'] },

  { id:'point-load', en:'point load', ru:'сосредоточенная нагрузка', image:null, emoji:'⬇️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'point loads' },
    examples:['Point load at midspan.','Concentrated load.','Apply point load.','Reaction to point load.'] },

  { id:'couple', en:'couple (moment)', ru:'пара сил (момент)', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'couples' },
    examples:['Force couple.','Pure moment couple.','Couple of forces.','Torque couple.'] },

  // ─── B1 — Complete to 1000 ────────────────────────────────────────────────

  { id:'proof-load', en:'proof load', ru:'пробная нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'proof loads' },
    examples:['Proof load test.','150% proof load.','Apply proof load.','Survive proof load.'] },

  { id:'working-load', en:'working load limit (WLL)', ru:'допустимая рабочая нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'other' },
    examples:['WLL 2 tons.','Do not exceed WLL.','Rigging WLL.','Marked WLL.'] },

  { id:'rated-load', en:'rated load', ru:'номинальная нагрузка', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'rated loads' },
    examples:['Rated load capacity.','Exceed rated load.','Full rated load.','Load rating.'] },

  { id:'static-load', en:'static load', ru:'статическая нагрузка', image:null, emoji:'⬇️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'static loads' },
    examples:['Static load test.','Applied static load.','Dead weight static.','Static vs dynamic.'] },

  { id:'dynamic-load', en:'dynamic load', ru:'динамическая нагрузка', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'dynamic loads' },
    examples:['Dynamic load factor.','Impact dynamic load.','Vibration dynamic.','DLF 2.0.'] },

  { id:'combined-loading', en:'combined loading', ru:'сложное нагружение', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Combined bending shear.','Axial + bending.','Combined stress analysis.','Multi-axial loading.'] },

  { id:'biaxial-stress', en:'biaxial stress', ru:'двухосное напряжение', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Biaxial stress state.','σ₁ and σ₂.','Biaxial tension.','Mohr circle biaxial.'] },

  { id:'mohr-circle', en:"Mohr's circle", ru:'круг Мора', image:null, emoji:'⭕', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:["Mohr's circle stress.","Draw Mohr's circle.","Principal stress Mohr.","Mohr's circle shear."] },

  { id:'principal-stress', en:'principal stress', ru:'главное напряжение', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'principal stresses' },
    examples:['First principal stress.','Maximum principal.','Principal directions.','σ₁ > σ₂.'] },

  { id:'shear-stress', en:'shear stress', ru:'касательное напряжение', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'shear stresses' },
    examples:['Shear stress τ.','Maximum shear stress.','Transverse shear.','Shear on plane.'] },

  { id:'thermal-stress', en:'thermal stress', ru:'термическое напряжение', image:null, emoji:'🌡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'thermal stresses' },
    examples:['Thermal stress from ΔT.','Calculate thermal stress.','Thermal stress failure.','Reduce thermal stress.'] },

  { id:'residual-strain', en:'residual strain', ru:'остаточная деформация', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Residual strain measured.','After unloading.','Permanent set.','Residual strain control.'] },

  { id:'plastic-strain', en:'plastic strain', ru:'пластическая деформация', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Plastic strain εp.','Yield and plastic strain.','Measure plastic deformation.','Plastic deformation zone.'] },

  { id:'elastic-strain', en:'elastic strain', ru:'упругая деформация', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Elastic strain ε.','Recoverable strain.','Hookes law elastic.','Elastic region.'] },

  { id:'safety-factor-fatigue', en:'fatigue safety factor', ru:'коэффициент запаса при усталостных нагрузках', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'fatigue safety factors' },
    examples:['Fatigue safety factor.','SF against fatigue.','Goodman safety.','Soderberg factor.'] },

  { id:'goodman', en:'Goodman diagram', ru:'диаграмма Гудмана', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'Goodman diagrams' },
    examples:['Goodman diagram.','Mean vs alternating.','Goodman criterion.','Plot Goodman.'] },

  { id:'soderberg', en:'Soderberg criterion', ru:'критерий Зодерберга', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Soderberg line.','Conservative Soderberg.','Soderberg vs Goodman.','Apply Soderberg.'] },

  { id:'gerber', en:'Gerber criterion', ru:'критерий Гербера', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Gerber parabola.','Less conservative Gerber.','Gerber criterion.','Compare criteria.'] },

  { id:'s-n-curve', en:'S-N curve (fatigue)', ru:'кривая усталости (Велера)', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:'S-N curves' },
    examples:['S-N curve.','Wöhler curve.','Plot S-N.','S-N data.'] },

  { id:'crack-propagation', en:'crack propagation', ru:'рост трещины', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun', plural:null },
    examples:['Crack propagation rate.','Fatigue crack growth.','Monitor crack.','Stop crack propagation.'] },

,
  { id:'acoustic-emission', en:'acoustic emission', ru:'акустическая эмиссия', image:null, emoji:'🔊', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Acoustic emission testing detects cracks in real time.','They monitored acoustic emission during the pressure test.','Acoustic emission sensors alert operators to defects.','The engineer analyzed acoustic emission signals.'] },,
  { id:'hardness-testing', en:'hardness testing', ru:'испытание на твёрдость', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Hardness testing confirms the heat treatment was correct.','They performed Rockwell hardness testing on each part.','The hardness testing results met the specification.','Hardness testing is a common quality check.'] },,
  { id:'nondestructive-testing', en:'nondestructive testing', ru:'неразрушающий контроль', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'NDT' },
    examples:['Nondestructive testing preserves the integrity of the part.','The NDT crew inspected the welds.','Nondestructive testing includes ultrasonic and dye penetrant methods.','They rely on NDT for in-service inspection.'] },,
  { id:'dye-penetrant', en:'dye penetrant', ru:'цветной дефектоскоп', image:null, emoji:'🎨', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Dye penetrant testing reveals surface cracks.','Apply the dye penetrant and wait ten minutes.','The technician wiped off excess dye penetrant.','Dye penetrant is suitable for non-porous materials.'] },,
  { id:'magnetic-particle', en:'magnetic particle inspection', ru:'магнитопорошковый контроль', image:null, emoji:'🧲', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Magnetic particle inspection detects surface defects in steel.','The inspector used dry magnetic particle on the shaft.','Magnetic particle inspection requires a ferromagnetic part.','They approved the casting after magnetic particle inspection.'] },,
  { id:'radiographic-testing', en:'radiographic testing', ru:'радиографический контроль', image:null, emoji:'☢️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'RT' },
    examples:['Radiographic testing uses X-rays to find internal defects.','The RT technician set up the film and source.','Radiographic testing is required for pressure vessel welds.','They reviewed the radiographic testing films carefully.'] },,
  { id:'phased-array', en:'phased array ultrasonic', ru:'фазированная решётка ультразвук', image:null, emoji:'📡', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Phased array ultrasonic provides better coverage than conventional UT.','The inspector chose phased array for the complex geometry.','Phased array data is saved as a C-scan image.','They trained the technicians in phased array methods.'] },,
  { id:'corrosion-protection', en:'corrosion protection', ru:'защита от коррозии', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-materials',
    forms:{ type:'noun' },
    examples:['Corrosion protection extends the service life of the structure.','They applied a coating for corrosion protection.','Cathodic protection is a form of corrosion protection.','Corrosion protection is critical in marine environments.'] },,
  { id:'surface-treatment', en:'surface treatment', ru:'обработка поверхности', image:null, emoji:'✨', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Surface treatment improves wear and corrosion resistance.','Shot peening is a compressive surface treatment.','The specification lists the required surface treatment.','They outsourced the surface treatment to a specialty shop.'] },,
  { id:'electroplating', en:'electroplating', ru:'гальваническое покрытие', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Electroplating deposits a thin metal layer on the part.','Chrome electroplating provides a decorative finish.','The electroplating tank uses direct current.','They sent the brackets out for zinc electroplating.'] },,
  { id:'powder-coating', en:'powder coating', ru:'порошковая окраска', image:null, emoji:'🎨', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Powder coating is more durable than liquid paint.','The frame received a black powder coating finish.','Powder coating is applied electrostatically and then cured.','They chose powder coating for the outdoor equipment.'] },,
  { id:'anodizing', en:'anodizing', ru:'анодирование', image:null, emoji:'🔵', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Anodizing increases corrosion resistance of aluminum.','Hard anodizing produces a thick wear-resistant layer.','The aluminum housing was anodized before assembly.','Anodizing can also add color to aluminum parts.'] },,
  { id:'passivation', en:'passivation', ru:'пассивирование', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Passivation removes free iron from stainless steel surfaces.','They used nitric acid passivation per the specification.','Passivation improves the corrosion resistance of stainless steel.','The parts were passivated after machining.'] },,
  { id:'dimensional-inspection', en:'dimensional inspection', ru:'размерный контроль', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Dimensional inspection verifies that parts meet the drawing.','The CMM is used for dimensional inspection.','They performed dimensional inspection on the first article.','Dimensional inspection results are recorded in a report.'] },,
  { id:'first-article', en:'first article inspection', ru:'контроль первой детали', image:null, emoji:'1️⃣', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'FAI' },
    examples:['First article inspection is required before production.','The FAI confirmed the part met all requirements.','They submitted a first article inspection report.','First article inspection checks all dimensions and materials.'] },,
  { id:'incoming-inspection', en:'incoming inspection', ru:'входной контроль', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Incoming inspection checks purchased parts before use.','They rejected the lot at incoming inspection.','Incoming inspection sampling is based on AQL levels.','The incoming inspection team works in the receiving area.'] },,
  { id:'in-process-inspection', en:'in-process inspection', ru:'контроль в процессе производства', image:null, emoji:'🔎', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['In-process inspection catches defects early.','The operator performs in-process inspection every hour.','In-process inspection reduces scrap and rework.','They added an in-process inspection step after machining.'] },,
  { id:'final-inspection', en:'final inspection', ru:'окончательный контроль', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Final inspection is the last check before shipment.','The quality engineer signed off after final inspection.','Final inspection includes functional and dimensional checks.','They found a defect during final inspection.'] },,
  { id:'aql', en:'acceptable quality level', ru:'приемлемый уровень качества', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'AQL' },
    examples:['The AQL for this critical characteristic is 0.65.','Sampling plans are based on the acceptable quality level.','The customer specified an AQL of 1.0 for minor defects.','They tightened the AQL after the last rejection.'] },,
  { id:'ppk', en:'process performance index', ru:'индекс воспроизводимости процесса', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'Ppk' },
    examples:['A Ppk above 1.33 indicates a capable process.','They calculated Ppk from the production data.','The process performance index showed the process was marginal.','Ppk accounts for process centering and spread.'] },,
  { id:'cpk', en:'process capability index', ru:'индекс воспроизводимости', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'Cpk' },
    examples:['Cpk measures how well the process meets specifications.','A Cpk of 1.67 is excellent capability.','They improved the Cpk by reducing process variation.','The customer requires a minimum Cpk of 1.33.'] },,
  { id:'sigma-level', en:'sigma level', ru:'уровень сигма', image:null, emoji:'σ', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Six Sigma means 3.4 defects per million opportunities.','They raised the sigma level through process improvement.','The sigma level indicates process quality.','A three-sigma level is the starting point for improvement.'] },,
  { id:'gage-r-r', en:'gauge repeatability and reproducibility', ru:'воспроизводимость и повторяемость измерений', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'Gage R&R' },
    examples:['The Gage R&R study showed the measurement system is acceptable.','Gauge R&R quantifies variation due to the measurement system.','They performed a Gage R&R before the production run.','A Gage R&R above 30% indicates the gauge needs improvement.'] },,
  { id:'measurement-system-analysis', en:'measurement system analysis', ru:'анализ системы измерений', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'MSA' },
    examples:['Measurement system analysis is a core IATF requirement.','They completed an MSA for every critical feature.','The measurement system analysis revealed high reproducibility error.','MSA ensures the data you collect is reliable.'] },,
  { id:'process-flow-diagram', en:'process flow diagram', ru:'схема технологического процесса', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The process flow diagram maps every manufacturing step.','They drew a process flow diagram for the APQP package.','The diagram shows inspection points between operations.','A process flow diagram helps identify waste.'] },,
  { id:'apqp', en:'advanced product quality planning', ru:'перспективное планирование качества продукта', image:null, emoji:'📅', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'APQP' },
    examples:['APQP is a structured process for launching new products.','They followed APQP to ensure customer satisfaction.','The APQP team included engineering, quality, and manufacturing.','APQP deliverables include the control plan and FMEA.'] },,
  { id:'ppap', en:'production part approval process', ru:'процесс согласования производства деталей', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'PPAP' },
    examples:['PPAP submission is required before first production shipment.','They completed a level 3 PPAP for the new part.','The customer approved the PPAP package.','PPAP includes dimensional results, material certifications, and a control plan.'] },,
  { id:'corrective-action', en:'corrective action', ru:'корректирующее действие', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The corrective action addressed the root cause.','They submitted a corrective action report to the customer.','Corrective actions must be verified for effectiveness.','The team identified three corrective actions from the audit.'] },,
  { id:'preventive-action', en:'preventive action', ru:'предупреждающее действие', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Preventive actions stop problems before they occur.','The FMEA team identified preventive actions for high-risk modes.','They documented preventive actions in the quality system.','Preventive action is proactive; corrective action is reactive.'] },,
  { id:'8d-report', en:'8D report', ru:'отчёт 8D', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The 8D report describes the problem-solving process.','They submitted an 8D report within 24 hours.','The 8D method includes team formation and root cause analysis.','The customer accepted the 8D report and closed the complaint.'] },,
  { id:'lessons-learned', en:'lessons learned', ru:'извлечённые уроки', image:null, emoji:'📚', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Lessons learned from this project improve the next one.','They documented lessons learned at the project close-out.','The team shared lessons learned in a meeting.','Lessons learned should be stored in a searchable database.'] },,
  { id:'technical-standard', en:'technical standard', ru:'технический стандарт', image:null, emoji:'📜', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The technical standard defines material requirements.','They followed the technical standard for weld acceptance.','The engineer referenced the technical standard during design.','Technical standards ensure consistency across projects.'] },,
  { id:'work-instruction', en:'work instruction', ru:'рабочая инструкция', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The work instruction describes each assembly step.','Operators must follow the work instruction exactly.','They updated the work instruction after the process changed.','Work instructions include safety precautions.'] },,
  { id:'traveler', en:'traveler (job traveler)', ru:'маршрутный лист', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The traveler follows the part through each operation.','The operator stamps the traveler when the step is complete.','The quality engineer reviews the traveler for sign-offs.','The traveler records the serial number and date.'] },,
  { id:'manufacturing-order', en:'manufacturing order', ru:'производственный заказ', image:null, emoji:'🗒️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'MO' },
    examples:['The manufacturing order specifies quantity and due date.','They released a manufacturing order in the ERP system.','The shop floor tracks work against the manufacturing order.','A manufacturing order triggers material issuance.'] },,
  { id:'erp', en:'ERP system', ru:'ERP-система', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'ERP' },
    examples:['The ERP system tracks inventory and production orders.','They entered the purchase order in the ERP system.','ERP integrates planning, manufacturing, and finance.','The plant migrated to a new ERP system last year.'] },,
  { id:'mes', en:'manufacturing execution system', ru:'система управления производством', image:null, emoji:'🖥️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'MES' },
    examples:['The MES records real-time production data.','They connected the CNC to the MES for automatic reporting.','The manufacturing execution system tracks each serial number.','MES provides visibility into shop floor status.'] },,
  { id:'cycle-time', en:'cycle time', ru:'время цикла', image:null, emoji:'⏱️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The cycle time for this operation is 45 seconds.','They reduced cycle time by optimizing the tool path.','Cycle time directly affects production capacity.','The engineer measured cycle time with a stopwatch.'] },,
  { id:'takt-time', en:'takt time', ru:'такт-тайм', image:null, emoji:'🎵', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Takt time sets the production rate to match demand.','The takt time is 60 seconds per unit.','They balanced the line to meet takt time.','Takt time equals available time divided by customer demand.'] },,
  { id:'throughput-rate', en:'throughput rate', ru:'производительность', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The throughput rate is 120 parts per hour.','They improved throughput rate by eliminating the bottleneck.','Throughput rate is tracked on the production dashboard.','The target throughput rate was met this week.'] },,
  { id:'bottleneck', en:'bottleneck', ru:'узкое место', image:null, emoji:'🍾', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The welding station is the bottleneck in the process.','They added a second machine to eliminate the bottleneck.','Identify the bottleneck before making other improvements.','The bottleneck limits overall system throughput.'] },,
  { id:'lean-manufacturing', en:'lean manufacturing', ru:'бережливое производство', image:null, emoji:'♻️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Lean manufacturing eliminates waste and adds value.','They implemented lean manufacturing across the plant.','Lean manufacturing principles include 5S and value stream mapping.','The lean manufacturing initiative reduced lead time by 30 percent.'] },,
  { id:'value-stream', en:'value stream', ru:'поток создания ценности', image:null, emoji:'🌊', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The value stream includes all steps from order to delivery.','They mapped the value stream to identify waste.','Value stream mapping is a key lean tool.','The team redesigned the value stream to reduce lead time.'] },,
  { id:'5s', en:'5S methodology', ru:'методология 5С', image:null, emoji:'🧹', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['5S stands for sort, set, shine, standardize, sustain.','They completed a 5S audit of the work area.','5S creates a clean and organized workplace.','The 5S score improved after the team training.'] },,
  { id:'kaizen', en:'kaizen', ru:'кайдзен', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Kaizen means continuous improvement in Japanese.','They held a kaizen event to redesign the assembly cell.','Kaizen involves all employees, not just managers.','The kaizen reduced setup time from 45 to 12 minutes.'] },,
  { id:'rapid-improvement', en:'rapid improvement event', ru:'мероприятие по быстрому улучшению', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The rapid improvement event lasted three days.','They achieved a 40 percent reduction in waste during the event.','A rapid improvement event focuses on a specific problem.','The team presented results after the rapid improvement event.'] },,
  { id:'setup-reduction', en:'setup reduction', ru:'сокращение времени переналадки', image:null, emoji:'⏬', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Setup reduction is a key goal of SMED.','They achieved 50 percent setup reduction.','Setup reduction allows smaller production batches.','The engineer documented internal and external setup steps.'] },,
  { id:'smed', en:'SMED', ru:'быстрая переналадка', image:null, emoji:'⚡', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'SMED', full:'Single-Minute Exchange of Die' },
    examples:['SMED reduces changeover time to under ten minutes.','They applied SMED techniques to the stamping press.','SMED separates internal and external setup tasks.','The SMED project cut changeover from 60 to 8 minutes.'] },,
  { id:'jidoka', en:'jidoka', ru:'дзидока (автоматизация с элементами разума)', image:null, emoji:'🤖', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Jidoka allows machines to detect and stop at abnormalities.','They implemented jidoka on the assembly line.','Jidoka prevents defects from passing to the next step.','The jidoka light signals when the machine needs attention.'] },,
  { id:'mistake-proofing', en:'mistake-proofing', ru:'защита от ошибок', image:null, emoji:'🚫', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Mistake-proofing prevents the assembly from going together wrong.','They added a pin for mistake-proofing the connector.','Mistake-proofing reduces reliance on operator attention.','The poka-yoke device is a form of mistake-proofing.'] },,
  { id:'push-system', en:'push system', ru:'система выталкивания', image:null, emoji:'➡️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['A push system produces based on a schedule, not demand.','Traditional manufacturing uses a push system.','A push system can create excess inventory.','They moved away from the push system to reduce waste.'] },,
  { id:'inventory-waste', en:'inventory waste', ru:'потери из-за запасов', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Inventory waste hides production problems.','They reduced inventory waste by 60 percent.','Excess WIP is a form of inventory waste.','The lean team targeted inventory waste first.'] },,
  { id:'unused-talent', en:'unused talent waste', ru:'потери из-за неиспользованного таланта', image:null, emoji:'💡', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Unused talent is the eighth waste in lean.','They engaged operators to eliminate unused talent waste.','Suggestion systems help capture unused talent.','Not involving experienced workers is unused talent waste.'] },,
  { id:'yield', en:'yield', ru:'выход годных изделий', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The process yield is 97 percent.','They improved yield by reducing the defect rate.','Rolled throughput yield accounts for all operations.','A low yield drives up manufacturing cost.'] },,
  { id:'rolled-throughput-yield', en:'rolled throughput yield', ru:'суммарный выход годных', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'RTY' },
    examples:['Rolled throughput yield multiplies yields across all operations.','An RTY of 85 percent means significant hidden waste.','They calculated RTY to find the weakest operation.','RTY reveals overall process quality.'] },,
  { id:'scrap-rate', en:'scrap rate', ru:'уровень брака', image:null, emoji:'🗑️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The scrap rate dropped from 5 to 1 percent.','High scrap rate increases material cost.','They analyzed the scrap rate by machine.','The scrap rate is reported weekly to management.'] },,
  { id:'rework-rate', en:'rework rate', ru:'уровень переработки', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The rework rate doubled after the process change.','They identified the cause of the high rework rate.','Rework rate is included in the cost of quality report.','A low rework rate indicates a stable process.'] },,
  { id:'quality-cost', en:'cost of quality', ru:'стоимость качества', image:null, emoji:'💵', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'COQ' },
    examples:['Cost of quality includes prevention, appraisal, and failure costs.','They tracked cost of quality monthly.','Poor quality drives up the cost of quality.','A low cost of quality indicates a mature quality system.'] },,
  { id:'escaping-defect', en:'escaping defect', ru:'дефект, ускользнувший к потребителю', image:null, emoji:'🚨', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['An escaping defect reaches the customer.','They put extra inspection in place after the escaping defect.','Escaping defects damage customer relationships.','The team analyzed how the escaping defect passed all checks.'] },,
  { id:'field-failure', en:'field failure', ru:'отказ в полевых условиях', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The field failure triggered a product recall.','They analyzed the field failure to find the root cause.','Field failures are tracked for warranty cost management.','The field failure rate was higher than expected.'] },,
  { id:'warranty-claim', en:'warranty claim', ru:'гарантийная претензия', image:null, emoji:'📜', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The warranty claim rate increased after the design change.','Each warranty claim triggers a root cause investigation.','They reduced warranty claims by improving the seal.','The warranty claim cost the company $500 per unit.'] },,
  { id:'reliability-testing', en:'reliability testing', ru:'испытание на надёжность', image:null, emoji:'🔬', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Reliability testing simulates years of field use.','They ran reliability testing for 1,000 hours.','Reliability testing included vibration and thermal cycling.','The product passed all reliability testing requirements.'] },,
  { id:'accelerated-life', en:'accelerated life test', ru:'ускоренное испытание на долговечность', image:null, emoji:'⏩', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'ALT' },
    examples:['An accelerated life test predicts long-term reliability.','They used elevated temperature for the accelerated life test.','The ALT results correlated with field data.','Accelerated life testing compresses years into weeks.'] },,
  { id:'design-for-manufacturability', en:'design for manufacturability', ru:'проектирование с учётом технологичности', image:null, emoji:'🏭', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'DFM' },
    examples:['Design for manufacturability simplifies production.','They reviewed the part for DFM early in the design process.','DFM reduces machining operations and tooling cost.','Design for manufacturability principles guide the CAD model.'] },,
  { id:'part-count-reduction', en:'part count reduction', ru:'сокращение числа деталей', image:null, emoji:'📉', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Part count reduction lowers assembly time and cost.','They achieved part count reduction by redesigning the bracket.','Part count reduction is a key DFA metric.','The new design achieved 40 percent part count reduction.'] },,
  { id:'platform-strategy', en:'platform strategy', ru:'платформенная стратегия', image:null, emoji:'🏗️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The platform strategy shares components across product lines.','A platform strategy reduces tooling and development costs.','They aligned the product roadmap with the platform strategy.','Platform strategy enables faster time to market.'] },,
  { id:'design-review', en:'design review', ru:'проверка конструкции', image:null, emoji:'👁️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The design review team identified several issues.','They held a design review before releasing the drawing.','Design reviews include manufacturing, quality, and engineering.','Action items from the design review were tracked to closure.'] },,
  { id:'design-change', en:'design change', ru:'изменение конструкции', image:null, emoji:'✏️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The design change required a new PPAP submission.','They assessed the impact of the design change.','A design change must go through the ECO process.','The design change improved field reliability.'] },,
  { id:'engineering-change-order', en:'engineering change order', ru:'распоряжение об изменении конструкции', image:null, emoji:'📝', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'ECO' },
    examples:['The ECO was approved by engineering and manufacturing.','They issued an engineering change order to update the material.','An engineering change order tracks who approved the change.','The ECO number is referenced on the drawing revision.'] },,
  { id:'obsolescence', en:'obsolescence', ru:'устаревание', image:null, emoji:'📅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Component obsolescence is a risk for long-life products.','They managed obsolescence by identifying alternate sources.','The obsolescence plan covers the next ten years.','Electronic component obsolescence is a growing challenge.'] },,
  { id:'lifetime-buy', en:'lifetime buy', ru:'финальная закупка', image:null, emoji:'🛒', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['A lifetime buy covers the remaining production quantity.','They made a lifetime buy of the obsolete component.','The lifetime buy quantity was calculated from the forecast.','A lifetime buy is a one-time purchase before EOL.'] },,
  { id:'risk-register', en:'risk register', ru:'реестр рисков', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The risk register lists all identified project risks.','They updated the risk register after the design review.','Each risk in the register has a mitigation plan.','The project manager reviewed the risk register weekly.'] },,
  { id:'contingency-plan', en:'contingency plan', ru:'план на непредвиденный случай', image:null, emoji:'🆘', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The contingency plan activates if the primary supplier fails.','They prepared a contingency plan for late delivery.','A contingency plan reduces project risk.','The contingency plan included alternative tooling.'] },,
  { id:'kickoff-meeting', en:'kickoff meeting', ru:'стартовое совещание', image:null, emoji:'🚀', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The kickoff meeting introduced the team and timeline.','They held a kickoff meeting with the customer.','The kickoff meeting set expectations for deliverables.','Everyone attended the project kickoff meeting.'] },,
  { id:'lessons-learned-session', en:'lessons learned session', ru:'разбор полётов', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The lessons learned session occurred at project close.','They documented action items from the lessons learned session.','A lessons learned session improves future projects.','All team members attended the lessons learned session.'] },,
  { id:'stakeholder-alignment', en:'stakeholder alignment', ru:'согласованность заинтересованных сторон', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Stakeholder alignment prevents surprises at gate reviews.','They achieved stakeholder alignment before releasing the design.','The project manager focused on stakeholder alignment.','Poor stakeholder alignment caused the project delay.'] },,
  { id:'resource-planning', en:'resource planning', ru:'планирование ресурсов', image:null, emoji:'📅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Resource planning ensures the right people are available.','They completed resource planning at the start of the quarter.','Resource planning includes equipment, staff, and budget.','Poor resource planning caused the project to slip.'] },,
  { id:'capacity-planning', en:'capacity planning', ru:'планирование мощностей', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Capacity planning matches production capacity to demand.','They updated the capacity plan for the new product.','Capacity planning identified the need for a second shift.','The capacity planning model runs quarterly.'] },,
  { id:'production-schedule', en:'production schedule', ru:'производственный график', image:null, emoji:'📅', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['The production schedule shows which jobs run each day.','They revised the production schedule due to a material shortage.','The planner builds the production schedule in the ERP.','The production schedule must account for maintenance downtime.'] },,
  { id:'master-production-schedule', en:'master production schedule', ru:'основной производственный план', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'MPS' },
    examples:['The master production schedule drives MRP.','They updated the MPS every Monday morning.','The master production schedule balances capacity and demand.','Sales and operations planning feeds the master production schedule.'] },,
  { id:'mrp', en:'material requirements planning', ru:'планирование потребности в материалах', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'MRP' },
    examples:['MRP calculates when to order materials.','The ERP system runs MRP every night.','Material requirements planning prevents stockouts and excess inventory.','They use MRP to plan components for the next 12 weeks.'] },,
  { id:'reorder-point', en:'reorder point', ru:'точка перезаказа', image:null, emoji:'📌', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The reorder point triggers a purchase order.','They set the reorder point based on lead time and usage.','When stock falls below the reorder point, a kanban is released.','The reorder point includes safety stock.'] },,
  { id:'economic-order-quantity', en:'economic order quantity', ru:'экономичный размер заказа', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'EOQ' },
    examples:['The economic order quantity minimizes total inventory cost.','They calculated the EOQ for each purchased item.','Economic order quantity balances ordering cost and holding cost.','The EOQ formula assumes stable demand.'] },,
  { id:'lead-time', en:'lead time', ru:'время выполнения заказа', image:null, emoji:'⏱️', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The supplier lead time is 12 weeks.','They reduced lead time by sourcing locally.','Lead time affects the reorder point calculation.','The lead time for custom parts is unpredictable.'] },,
  { id:'on-time-delivery', en:'on-time delivery', ru:'своевременная доставка', image:null, emoji:'🚚', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'OTD' },
    examples:['The on-time delivery rate is 96 percent.','They tracked OTD as a key supplier metric.','Poor on-time delivery disrupts production.','Improving on-time delivery was the top supply chain goal.'] },,
  { id:'vendor-managed-inventory', en:'vendor managed inventory', ru:'запасы под управлением поставщика', image:null, emoji:'🏪', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'VMI' },
    examples:['Vendor managed inventory reduces stock management effort.','The supplier replenishes VMI bins automatically.','They implemented vendor managed inventory for fasteners.','VMI shifts the inventory burden to the supplier.'] },,
  { id:'consignment', en:'consignment inventory', ru:'консигнационный склад', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Consignment inventory is paid for only when used.','They negotiated consignment terms with the supplier.','Consignment improves cash flow.','The supplier holds title to consignment inventory.'] },,
  { id:'blanket-order', en:'blanket order', ru:'рамочный заказ', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['A blanket order commits to annual volume for a lower price.','They placed a blanket order for the entire year.','Blanket orders reduce paperwork and improve pricing.','The blanket order specifies monthly release quantities.'] },,
  { id:'supplier-development', en:'supplier development', ru:'развитие поставщика', image:null, emoji:'🤝', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Supplier development improves a supplier's capabilities.','They sent engineers to help with supplier development.','Supplier development is a long-term investment.','The supplier development program reduced defect rates.'] },,
  { id:'supplier-audit', en:'supplier audit', ru:'аудит поставщика', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The supplier audit checked the quality management system.','They performed a supplier audit before qualifying the vendor.','The supplier audit report included 12 findings.','Annual supplier audits are part of the quality program.'] },,
  { id:'preferred-supplier', en:'preferred supplier', ru:'предпочтительный поставщик', image:null, emoji:'⭐', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Preferred suppliers receive priority sourcing.','They awarded preferred supplier status after the audit.','A preferred supplier list reduces procurement complexity.','Preferred suppliers offer competitive pricing and support.'] },,
  { id:'approved-vendor-list', en:'approved vendor list', ru:'список одобренных поставщиков', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'AVL' },
    examples:['Only suppliers on the AVL can be used.','They added a new supplier to the approved vendor list.','The approved vendor list is reviewed annually.','New suppliers must be qualified before joining the AVL.'] },,
  { id:'field-service', en:'field service', ru:'обслуживание на месте', image:null, emoji:'🔧', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Field service engineers support customers on-site.','They dispatched a field service team to the customer.','Field service reports feed back to the design team.','The field service manual guides the technician.'] },,
  { id:'spare-parts', en:'spare parts', ru:'запасные части', image:null, emoji:'⚙️', imageEligible:true, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Spare parts must be available to minimize downtime.','They stocked spare parts at the customer site.','The spare parts list is included in the service manual.','Spare parts cost is part of the total cost of ownership.'] },,
  { id:'mean-time-to-repair', en:'mean time to repair', ru:'среднее время восстановления', image:null, emoji:'⏱️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'MTTR' },
    examples:['Mean time to repair measures how quickly equipment is fixed.','They reduced MTTR by pre-staging spare parts.','The MTTR target is under four hours.','Mean time to repair is a key maintenance KPI.'] },,
  { id:'availability', en:'availability', ru:'готовность оборудования', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Equipment availability is 98 percent.','They calculated availability from MTBF and MTTR.','High availability is critical for production equipment.','The availability target is 99.5 percent.'] },,
  { id:'root-cause-failure', en:'root cause failure analysis', ru:'анализ первопричин отказа', image:null, emoji:'🔍', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'RCFA' },
    examples:['Root cause failure analysis found fatigue as the cause.','They completed an RCFA on the failed bearing.','Root cause failure analysis guides corrective action.','The RCFA team included engineering and operations.'] },,
  { id:'failure-mode', en:'failure mode', ru:'режим отказа', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Each failure mode is scored for severity in the FMEA.','The dominant failure mode is corrosion.','Understanding the failure mode guides the design fix.','They identified three failure modes in the valve assembly.'] },,
  { id:'fault-tree', en:'fault tree analysis', ru:'анализ дерева отказов', image:null, emoji:'🌳', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'FTA' },
    examples:['Fault tree analysis maps all paths to a top-level event.','They used FTA to analyze the hydraulic system failure.','Fault tree analysis is a top-down deductive method.','The fault tree identified a single-point failure.'] },,
  { id:'single-point-failure', en:'single point of failure', ru:'единственная точка отказа', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun', abbr:'SPOF' },
    examples:['A single point of failure can bring the system down.','They added redundancy to eliminate the single point of failure.','The fault tree revealed a single point of failure in the power supply.','System design should avoid single points of failure.'] },,
  { id:'redundancy', en:'redundancy', ru:'резервирование', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Redundancy ensures the system continues to function after a failure.','They added a backup pump for redundancy.','Redundancy increases cost but improves reliability.','The aerospace standard requires redundancy in critical systems.'] },,
  { id:'fail-safe', en:'fail-safe', ru:'отказобезопасный', image:null, emoji:'🔒', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'adjective' },
    examples:['A fail-safe design defaults to a safe state on failure.','The spring return makes the valve fail-safe.','They verified the fail-safe mode during testing.','Fail-safe design is required by the safety standard.'] },,
  { id:'safety-margin', en:'safety margin', ru:'запас прочности/безопасности', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The design has a safety margin of 2.5.','They verified the safety margin under all load cases.','A higher safety margin reduces risk but adds weight.','The safety margin was insufficient for the dynamic loads.'] },,
  { id:'proof-test', en:'proof test', ru:'контрольное испытание', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The proof test load is 1.5 times the design limit.','They performed a proof test on every vessel.','Proof testing verifies structural integrity.','The proof test pressure is 150 percent of working pressure.'] },,
  { id:'burst-test', en:'burst test', ru:'испытание на разрыв', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The burst test determines the ultimate pressure limit.','They pressurized the vessel until burst during testing.','Burst test results validate the design margin.','The burst test exceeded the target by 20 percent.'] },,
  { id:'fatigue-life', en:'fatigue life', ru:'усталостная долговечность', image:null, emoji:'🔄', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['The fatigue life is one million cycles.','They extended fatigue life by improving the surface finish.','Fatigue life is determined by testing and analysis.','The component exceeded its predicted fatigue life.'] },,
  { id:'stress-amplitude', en:'stress amplitude', ru:'амплитуда напряжений', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['The stress amplitude must be below the endurance limit.','They calculated stress amplitude from the measured load.','Stress amplitude and mean stress determine fatigue life.','The FEA showed acceptable stress amplitude values.'] },,
  { id:'mean-stress', en:'mean stress', ru:'среднее напряжение', image:null, emoji:'📏', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Tensile mean stress reduces fatigue life.','They applied the Goodman criterion to account for mean stress.','Mean stress correction is necessary for accurate life prediction.','Compressive mean stress is beneficial for fatigue.'] },,
  { id:'stress-ratio', en:'stress ratio', ru:'коэффициент асимметрии цикла', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['A stress ratio of -1 means fully reversed loading.','The stress ratio for rotating beam tests is -1.','They determined the stress ratio from the load profile.','Stress ratio affects the position on the S-N curve.'] },,
  { id:'loading-spectrum', en:'loading spectrum', ru:'спектр нагрузок', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['The loading spectrum defines all load levels and frequencies.','They derived the loading spectrum from field measurements.','A realistic loading spectrum improves fatigue life prediction.','The loading spectrum is used in the damage accumulation model.'] },,
  { id:'miner-rule', en:'Miner's rule', ru:'правило Майнера', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Miner's rule accumulates fatigue damage linearly.','They used Miner's rule to predict fatigue life under variable loading.','Miner's rule is conservative for most applications.','The damage sum per Miner's rule was 0.85.'] },,
  { id:'fracture-mechanics', en:'fracture mechanics', ru:'механика разрушения', image:null, emoji:'💥', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Fracture mechanics predicts crack growth rates.','They applied fracture mechanics to evaluate the flaw.','Fracture mechanics links flaw size to failure load.','The fracture mechanics analysis extended the inspection interval.'] }

,
  { id:'fracture-toughness-kic', en:'fracture toughness Kic', ru:'трещиностойкость Kic', image:null, emoji:'🔩', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Fracture toughness Kic is a material property.','High-strength steel has low fracture toughness.','They measured Kic using a standard compact tension specimen.','Kic determines the critical crack size.'] },,
  { id:'crack-growth-rate', en:'crack growth rate', ru:'скорость роста трещины', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['The crack growth rate increases with stress intensity range.','They used the Paris law to predict crack growth rate.','Crack growth rate is measured in mm per cycle.','The inspection interval is based on crack growth rate.'] },,
  { id:'damage-tolerance', en:'damage tolerance', ru:'допустимость повреждений', image:null, emoji:'🛡️', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Damage tolerance design allows cracks to be detected before failure.','They demonstrated damage tolerance per the aerospace standard.','Damage tolerance analysis determines inspection intervals.','The structure is designed to be damage tolerant.'] },,
  { id:'inspection-interval', en:'inspection interval', ru:'интервал контроля', image:null, emoji:'⏱️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The inspection interval is 1,000 flight hours.','They set the inspection interval based on crack growth analysis.','Shorter inspection intervals improve safety.','The inspection interval was approved by the authority.'] },,
  { id:'disposition', en:'disposition', ru:'решение по несоответствию', image:null, emoji:'⚖️', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The disposition was use-as-is based on the engineering evaluation.','They documented the disposition on the nonconformance report.','Possible dispositions are rework, scrap, or use-as-is.','The engineer approved the disposition.'] },,
  { id:'deviation-waiver', en:'deviation and waiver', ru:'отклонение и разрешение на отступление', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['A deviation is approved before the work; a waiver is approved after.','They submitted a waiver for the out-of-spec dimension.','Deviations and waivers must be approved by engineering.','The customer rejected the waiver request.'] },,
  { id:'supplier-corrective-action', en:'supplier corrective action request', ru:'запрос корректирующих действий поставщику', image:null, emoji:'📨', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'SCAR' },
    examples:['They sent a SCAR to the supplier after the nonconformance.','The supplier corrective action request requires an 8D response.','A SCAR tracks supplier improvement.','The SCAR was closed after verifying effectiveness.'] },,
  { id:'customer-complaint', en:'customer complaint', ru:'претензия клиента', image:null, emoji:'📣', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The customer complaint triggered an internal investigation.','They responded to the customer complaint within 48 hours.','Customer complaints are tracked in the quality system.','The team reduced customer complaints by 60 percent.'] },,
  { id:'requirements-traceability', en:'requirements traceability matrix', ru:'матрица отслеживания требований', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'RTM' },
    examples:['The requirements traceability matrix links requirements to tests.','They used an RTM to verify all requirements were met.','Requirements traceability is required for safety-critical products.','The RTM showed two requirements without verification tests.'] },,
  { id:'verification-plan', en:'verification plan', ru:'план верификации', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The verification plan describes how each requirement is checked.','They approved the verification plan at the CDR.','The verification plan includes analysis, test, and inspection.','All tests in the verification plan were executed successfully.'] },,
  { id:'validation-plan', en:'validation plan', ru:'план валидации', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The validation plan confirms the product meets user needs.','They ran validation with real customers.','The validation plan included usability testing.','Validation plan results are submitted with the design dossier.'] },,
  { id:'system-integration', en:'system integration', ru:'системная интеграция', image:null, emoji:'🔗', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['System integration combines subsystems into the final product.','They completed system integration testing last week.','System integration revealed interface issues.','The system integration team works across all disciplines.'] },,
  { id:'block-diagram', en:'block diagram', ru:'блок-схема', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The block diagram shows subsystem connections.','They drew a block diagram to explain the architecture.','A functional block diagram is used in system design.','The block diagram was included in the CDR presentation.'] },,
  { id:'non-functional-requirement', en:'non-functional requirement', ru:'нефункциональное требование', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Non-functional requirements include reliability and maintainability.','The non-functional requirement specifies operating temperature range.','They verified non-functional requirements in environmental tests.','Non-functional requirements are equally important to functional ones.'] },,
  { id:'specification-tree', en:'specification tree', ru:'дерево технических требований', image:null, emoji:'🌳', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The specification tree links system to subsystem requirements.','They built a specification tree for the new aircraft.','A specification tree helps manage complex requirements.','Each node in the specification tree has an owner.'] },,
  { id:'model-based', en:'model-based systems engineering', ru:'модельно-ориентированная системная инженерия', image:null, emoji:'💻', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun', abbr:'MBSE' },
    examples:['MBSE uses models instead of documents to capture system architecture.','They adopted MBSE for the next-generation platform.','Model-based systems engineering improves communication across teams.','The MBSE tool generates requirements from the system model.'] },,
  { id:'se-vee', en:'SE V-model', ru:'V-модель системной инженерии', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The SE V-model shows the relationship between design and verification.','They followed the V-model process for the safety system.','The left side of the V-model is development; the right is verification.','The V-model ensures traceability from requirements to tests.'] },,
  { id:'test-procedure', en:'test procedure', ru:'процедура испытания', image:null, emoji:'📄', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The test procedure gives step-by-step instructions.','Operators follow the test procedure exactly.','They updated the test procedure after the first run.','A test procedure must be approved before use.'] },,
  { id:'acceptance-criteria', en:'acceptance criteria', ru:'критерии приёмки', image:null, emoji:'✅', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['The acceptance criteria define what constitutes a passing test.','They agreed on acceptance criteria before testing.','All results met the acceptance criteria.','Acceptance criteria are stated in the test plan.'] }

,
  { id:'manufacturing-variance', en:'manufacturing variance', ru:'отклонение в производстве', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun' },
    examples:['Manufacturing variance is tracked against the standard cost.','The manufacturing variance report shows where costs differ.','They analyzed the manufacturing variance to find inefficiencies.','A large manufacturing variance triggers a root cause review.'] },,
  { id:'standard-cost', en:'standard cost', ru:'нормативная себестоимость', image:null, emoji:'💵', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Standard cost is calculated from labor, material, and overhead.','They compared actual cost to standard cost monthly.','The standard cost is set at the beginning of the year.','Standard cost helps identify process inefficiencies.'] },,
  { id:'overhead-rate', en:'overhead rate', ru:'ставка накладных расходов', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['The overhead rate is applied to all labor hours.','They recalculated the overhead rate after adding headcount.','The overhead rate affects product profitability.','A high overhead rate can make products uncompetitive.'] },,
  { id:'direct-labor', en:'direct labor', ru:'прямые трудозатраты', image:null, emoji:'👷', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Direct labor is charged directly to the product.','They tracked direct labor hours by operation.','Automation reduces direct labor cost.','Direct labor efficiency is reported on the production report.'] },,
  { id:'indirect-labor', en:'indirect labor', ru:'косвенные трудозатраты', image:null, emoji:'🏢', imageEligible:false, level:'B1', category:'engineer-management',
    forms:{ type:'noun' },
    examples:['Indirect labor supports production but is not charged to products.','Quality inspection is an indirect labor cost.','They monitored indirect labor as a percent of total cost.','Indirect labor is allocated through the overhead rate.'] },,
  { id:'make-to-order', en:'make to order', ru:'производство под заказ', image:null, emoji:'📋', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'MTO' },
    examples:['Make to order production starts only after receiving an order.','They switched from make to stock to make to order.','Make to order reduces finished goods inventory.','Custom products are typically make to order.'] },,
  { id:'make-to-stock', en:'make to stock', ru:'производство на склад', image:null, emoji:'📦', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'MTS' },
    examples:['Make to stock produces based on forecast demand.','Standard products are often make to stock.','Make to stock provides fast delivery to customers.','Excess inventory is a risk with make to stock.'] },,
  { id:'configure-to-order', en:'configure to order', ru:'конфигурирование под заказ', image:null, emoji:'⚙️', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'CTO' },
    examples:['Configure to order allows customers to choose options.','The ERP handles configure-to-order with a product configurator.','They built a configure-to-order system for the product line.','Configure to order balances flexibility and lead time.'] },,
  { id:'engineer-to-order', en:'engineer to order', ru:'разработка и изготовление под заказ', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-manufacturing',
    forms:{ type:'noun', abbr:'ETO' },
    examples:['Engineer to order requires custom design for each customer.','ETO products have long lead times.','They manage ETO projects with a detailed schedule.','Engineer-to-order suits complex, one-of-a-kind systems.'] },,
  { id:'field-of-view', en:'field of view', ru:'поле зрения / обзор', image:null, emoji:'👁️', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun', abbr:'FOV' },
    examples:['The camera field of view covers the entire inspection zone.','A wider field of view reduces camera repositioning.','They calculated the required field of view for the application.','Field of view affects the pixel resolution on the part.'] },,
  { id:'geometric-tolerance', en:'geometric tolerance', ru:'геометрический допуск', image:null, emoji:'📐', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['The geometric tolerance controls the shape of the surface.','They applied a flatness geometric tolerance of 0.05 mm.','Geometric tolerances are specified using GD&T symbols.','The CMM verifies geometric tolerances automatically.'] },,
  { id:'tolerance-stackup', en:'tolerance stack-up', ru:'суммирование допусков', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Tolerance stack-up analysis ensures parts fit together.','The tolerance stack-up showed the gap could close to zero.','They used worst-case tolerance stack-up for the safety check.','Statistical tolerance stack-up reduces design margins.'] },,
  { id:'worst-case-analysis', en:'worst-case analysis', ru:'анализ наихудшего случая', image:null, emoji:'⚠️', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Worst-case analysis assumes all tolerances are at their limits.','They ran a worst-case analysis before finalizing the design.','Worst-case analysis can be overly conservative.','The worst-case analysis confirmed the design would function.'] },,
  { id:'monte-carlo-simulation', en:'Monte Carlo simulation', ru:'симуляция Монте-Карло', image:null, emoji:'🎲', imageEligible:false, level:'B1', category:'engineer-mechanics',
    forms:{ type:'noun' },
    examples:['Monte Carlo simulation uses random sampling to predict outcomes.','They used Monte Carlo simulation for the tolerance stack-up.','Monte Carlo simulation gives a probability distribution of results.','The Monte Carlo simulation ran 10,000 iterations.'] },,
  { id:'regression-analysis', en:'regression analysis', ru:'регрессионный анализ', image:null, emoji:'📈', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['Regression analysis finds the relationship between variables.','They used regression analysis to predict tool wear.','A linear regression model fit the data well.','Regression analysis supports data-driven decision making.'] },,
  { id:'correlation-coefficient', en:'correlation coefficient', ru:'коэффициент корреляции', image:null, emoji:'📊', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['A correlation coefficient close to 1 means a strong relationship.','The correlation coefficient between hardness and strength was 0.95.','They calculated the correlation coefficient from the data set.','A low correlation coefficient means weak relationship.'] },,
  { id:'p-value', en:'p-value', ru:'p-значение', image:null, emoji:'🔢', imageEligible:false, level:'B1', category:'engineer-quality',
    forms:{ type:'noun' },
    examples:['A p-value below 0.05 indicates a statistically significant result.','The p-value for the factor was 0.003.','They interpreted the p-value carefully in the DOE analysis.','A high p-value means the factor is not significant.'] },
];

if (typeof module !== "undefined") module.exports = { WORDS_B1 };
