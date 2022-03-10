// Theme: Peuplement automatique d'un graphe à partir de données structurées.

// exercices

// 1 - construction d'un graphe étiqueté des trajets éffectués dans la semaine
// 2 - ecrire une requete pour afficher les informations à partir du graphe
// 3 - interface pour ce connecter au graphe(create, read, update, delete) noeuds et relations 
// 4 - maquette de formulaire de collecte de données et expliquer le choix des différents labels

// proposition

// 1

// construction de l'instranstance de la semaine
create (se1:semaine {name:'première semaine'})

// construction des instansance des jours
create (lun:jour {name:'lundi'})
create (mar:jour {name:'mardi'})
create (mer:jour {name:'mercredi'})
create (jeu:jour {name:'jeudi'})
create (ven:jour {name:'vendredi'})
create (sam:jour {name:'samedi'})
create (dim:jour {name:'dimanche'})

// construction des instances de lieux dit
create (cra:lieu_dit {name:'Cradat'})
create (dep:lieu_dit {name:'Département d Informatique de l Univeristé de Yaoundé I'})
create (pen:lieu_dit {name:'Pentagone ENSPY'})
create (mel:lieu_dit {name:'Total Melen'})
create (bur:lieu_dit {name:'Takenco'})
create (cam:lieu_dit {name:'Camer'})
create (mil:lieu_dit {name:'Entrée Milénium'})
create (pre:lieu_dit {name:'Chez la Présidente'})
create (eko:lieu_dit {name:'Ekounou Carrefour'})
create (pha:lieu_dit {name:'Pharmacie Ekounou'})

// construction du lien entre les jours et la semaine
create (se1)<-[:DE {type:'jour de la semane'}]-(lun)
create (se1)<-[:DE {type:'jour de la semane'}]-(mar)
create (se1)<-[:DE {type:'jour de la semane'}]-(mer)
create (se1)<-[:DE {type:'jour de la semane'}]-(jeu)
create (se1)<-[:DE {type:'jour de la semane'}]-(ven)
create (se1)<-[:DE {type:'jour de la semane'}]-(sam)
create (se1)<-[:DE {type:'jour de la semane'}]-(dim)

// construction des trajets journaliers

// trajets du lundi
create (lun)-[:DEPART {name:'reveiller'}]->(cra)-[:DEPLACER {type:'marche',temps:'20min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(pen)-[:DEPLACER {type:'marche',temps:'10min',cout:'O FCFA',ni_de_poule:TRUE,embouteillage:FALSE,distance:'inconnue'}]->(dep)-[:DEPLACER {type:'marche',temps:'15min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(cra)-[:DEPLACER {type:'moto',temps:'15min',cout:'20O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(mel)-[:DEPLACER {type:'marche',temps:'5min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(bur)-[:DEPLACER {type:'marche',temps:'5min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(mel)-[:DEPLACER {type:'taxi',temps:'15min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:TRUE,distance:'inconnue'}]->(cra)

// trajets de mardi


// trajets de mercredi


// trajets de jeudi


// trajets de vendredi


// trajets de samedi


// trajets de dimanche


// 
// retourner le graphe des trajets de la semaine
//

match (s:semaine),(l:lieu_dit),(j:jour) return s,l,j

// Theme: Peuplement automatique d'un graphe à partir de données structurées.

// exercices

// 1 - construction d'un graphe étiqueté des trajets éffectués dans la semaine
// 2 - ecrire une requete pour afficher les informations à partir du graphe
// 3 - interface pour ce connecter au graphe(create, read, update, delete) noeuds et relations
// 4 - maquette de formulaire de collecte de données et expliquer le choix des différents labels

// proposition

// 1

// construction de l'instranstance de la semaine
create (se1:semaine {name:'première semaine'})

// construction des instansance des jours
create (lun:jour {name:'lundi'})
create (mar:jour {name:'mardi'})
create (mer:jour {name:'mercredi'})
create (jeu:jour {name:'jeudi'})
create (ven:jour {name:'vendredi'})
create (sam:jour {name:'samedi'})
create (dim:jour {name:'dimanche'})

// construction des instances de lieux dit
create (cra:lieu_dit {name:'Cradat'})
create (dep:lieu_dit {name:'Département d Informatique de l Univeristé de Yaoundé I'})
create (pen:lieu_dit {name:'Pentagone ENSPY'})
create (mel:lieu_dit {name:'Total Melen'})
create (bur:lieu_dit {name:'Takenco'})
create (cam:lieu_dit {name:'Camer'})
create (mil:lieu_dit {name:'Entrée Milénium'})
create (pre:lieu_dit {name:'Chez la Présidente'})
create (eko:lieu_dit {name:'Ekounou Carrefour'})
create (pha:lieu_dit {name:'Pharmacie Ekounou'})

// construction du lien entre les jours et la semaine
create (se1)<-[:DE {type:'jour de la semane'}]-(lun)
create (se1)<-[:DE {type:'jour de la semane'}]-(mar)
create (se1)<-[:DE {type:'jour de la semane'}]-(mer)
create (se1)<-[:DE {type:'jour de la semane'}]-(jeu)
create (se1)<-[:DE {type:'jour de la semane'}]-(ven)
create (se1)<-[:DE {type:'jour de la semane'}]-(sam)
create (se1)<-[:DE {type:'jour de la semane'}]-(dim)

// construction des trajets journaliers

// trajets du lundi
create (lun)-[:DEPART {name:'reveiller'}]->(cra)-[:DEPLACER {type:'marche',temps:'20min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(pen)-[:DEPLACER {type:'marche',temps:'10min',cout:'O FCFA',ni_de_poule:TRUE,embouteillage:FALSE,distance:'inconnue'}]->(dep)-[:DEPLACER {type:'marche',temps:'15min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(cra)-[:DEPLACER {type:'moto',temps:'15min',cout:'20O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(mel)-[:DEPLACER {type:'marche',temps:'5min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(bur)-[:DEPLACER {type:'marche',temps:'5min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:FALSE,distance:'inconnue'}]->(mel)-[:DEPLACER {type:'taxi',temps:'15min',cout:'O FCFA',ni_de_poule:FALSE,embouteillage:TRUE,distance:'inconnue'}]->(cra)

// trajets de mardi

// trajets de mercredi

// trajets de jeudi

// trajets de vendredi

// trajets de samedi

// trajets de dimanche

//
// retourner le graphe des trajets de la semaine
//

// test
match (s:semaine),(l:lieu_dit),(j:jour) return s,l,j
// deletion script
MATCH (n) DETACH DELETE n
