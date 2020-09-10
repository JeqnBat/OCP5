/**
 * <b>DESCR:</b><br>
 * Generates 3 random numbers, uses them as index to pick-up
 * chunks of sentences stored in the 3 arrays (tier1,2,3) and
 * then returns all 3 pieces combined together.
 *
 * @function
 *
 * @param {array} tier1 the 1st array to pick a chunk of sentence from
 * @param {array} tier2 the 2nd array to pick a chunk of sentence from
 * @param {array} tier3 the 3rd array to pick a chunk of sentence from
 *
 * @returns {string} the 3 pieces put together to form a sentence
 */
function quote(tier1, tier2, tier3) {
  let nbRandom1 = Math.floor(Math.random()*tier1.length);
  let nbRandom2 = Math.floor(Math.random()*tier2.length);
  let nbRandom3 = Math.floor(Math.random()*tier3.length);

  return tier1[nbRandom1] + ' ' + tier2[nbRandom2] + ' ' + tier3[nbRandom3];
}

/**
 * <b>DESCR:</b><br>
 * Calls 'quote()' in a 'for' loop whose length is the value of
 * the "quantity" parameter. Stores the result inside a DIV.
 *
 * @function
 *
 * @param {string} quantity the number of sentences we want to generate
 * @param {array} tier1 the 1st array to pick a chunk of sentence from
 * @param {array} tier2 the 2nd array to pick a chunk of sentence from
 * @param {array} tier3 the 3rd array to pick a chunk of sentence from
 */
function customQuotes(quantity, tier1, tier2, tier3) {
  let quoteField = document.getElementById("quoteField");
  for (let i = 0; i < quantity; i++) {
    quoteField.innerHTML += quote(tier1, tier2, tier3) + '<br>';
  }
}

/**
 * <b>DESCR:</b><br>
 * Sets conditions so we can choose either of the two groups
 * of arrays : <generic quotes> or <movie quotes>.
 * Then calls 'customQuotes()' w/ arguments matching our choice.
 *
 * @function
 *
 * @param {string} quoteEngine the value of quote engine's div, either '1' or '2'
 * @param {string} nbCitations the value of the 'nbCitations' div, can be 1 to 5
 */
function pickQuoteEngine(quoteEngine, nbCitations) {
  const CITATIONS_FILM = "1";
  const CITATIONS_GENERIQUE = "2";
  if (quoteEngine === CITATIONS_FILM) {
    customQuotes(nbCitations, phraseFilmStart, phraseFilmMiddle, phraseFilmEnd);
    return;
  }
  else if (quoteEngine === CITATIONS_GENERIQUE) {
    customQuotes(nbCitations, phraseGeneriqueStart, phraseGeneriqueMiddle, phraseGeneriqueEnd);
    return;
  }
}

/**
 * <b>DESCR:</b><br>
 * Stores 2 values in 2 variables
 * Uses these variables as arguments and calls 'pickQuoteEngine()'
 *
 * @function
 */
function startGenerator() {
  document.getElementById("logo").style.margin = '5vh 0 5vh 0'; // remonte le logo
  document.getElementById("quoteField").innerHTML = ''; // Supprime le contenu précédent pour éviter le scrolling
	let quoteEngine = document.getElementById('quoteEngine').value;
  let nbCitations = document.getElementById('nbCitations').value;

  pickQuoteEngine(quoteEngine, nbCitations);

  document.getElementById('question').innerHTML = 'Souhaitez-vous relancer ou arrêter le programme ?';
  document.getElementById('startGenerator').style.display = 'none';
  document.getElementById('buttons').style.display = 'block';
  return;
}

/**
 * <b>DESCR:</b><br>
 * Clears 'main' DIV from its content
 * Replaces it with a tx message
 *
 * @function
 */
function eraseAndThank() {
  document.getElementById('main').innerHTML = '<div id="merci" class="text-white text-center h2"> Merci d\'avoir utilisé le générateur de citations !</div>';
  return;
}
