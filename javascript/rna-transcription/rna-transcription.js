/* eslint no-else-return: "error" */
export const toRna = (string) => {
  let rnaString = '';
  for (let i = 0; i <= string.length; i += 1) {
    const rnaNucleotide = transcriptor(string.charAt(i));
    rnaString += rnaNucleotide;
  }
  return rnaString;
};

const transcriptor = (dnaNucleotide) => {
  if (dnaNucleotide === 'C') {
    return 'G';
  } else if (dnaNucleotide === 'G') {
    return 'C';
  } else if (dnaNucleotide === 'A') {
    return 'U';
  } else if (dnaNucleotide === 'T') {
    return 'A';
  } else if (dnaNucleotide === '') {
    return '';
  } else {
    throw 'Invalid input DNA.';
  }
};
