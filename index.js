function theBeatlesPlay(musicians, instruments) {
  var musicPairings = [];

  for (let i = 0; i < musicians.length; i++) {
    musicPairings.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return musicPairings;
}

function johnLennonFacts(facts) {
  let exclaimedFacts = []

  let i = 0;

  while (i < facts.length) {
    exclaimedFacts.push(`${facts[i]}!!!`);
    i += 1;
  }

  return exclaimedFacts;
}

function iLoveTheBeatles(number) {
  var loveStatements = [];

  function incrementVariable() {
    number = number + 1;
    return number;
  }

  do {
    loveStatements.push("I love the Beatles!");
  } while (incrementVariable() < 15);

  return loveStatements;
}
