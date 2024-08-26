export default class Converter {
  private static romanNumeralLookup: Array<Array<string>> = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM', '', '', '', '', '', ''],];
  private static romanNumeralRegEx = /(?<thousands>M{1,3})?(?<hundreds>CD|CM|DC{0,3}|C{1,3})?(?<tens>|XL|XC|LX{0,3}|X{1,3})?(?<ones>|IV|IX|VI{0,3}|I{1,3})?/

  public static arabicToRoman = (arabicNumber: number): string => {
    const result = new Array<string>();

    for (let i = 0; i < Converter.romanNumeralLookup.length && arabicNumber > 0; ++i) {
      result.unshift(Converter.romanNumeralLookup[i][arabicNumber % 10]);
      arabicNumber = Math.floor(arabicNumber / 10);
    }
    return arabicNumber !== 0 ? "" : result.join('');
  }

  public static romanToArabic = (romanNumber: string): number => {
    const romanNumberUpper = romanNumber.toUpperCase();
    const matches = Converter.romanNumeralRegEx.exec(romanNumberUpper);
    if (matches && matches.groups) {
      if (matches[0] !== romanNumberUpper) {
        return NaN;
      }
      const ones = Converter.romanNumeralLookup[0].indexOf(matches.groups.ones);
      const tens = Converter.romanNumeralLookup[1].indexOf(matches.groups.tens);
      const hundreds = Converter.romanNumeralLookup[2].indexOf(matches.groups.hundreds);
      const thousands = Converter.romanNumeralLookup[3].indexOf(matches.groups.thousands);
      return (ones > 0 ? ones : 0) + (tens > 0 ? tens * 10 : 0) + (hundreds > 0 ? hundreds * 100 : 0) + (thousands > 0 ? thousands * 1000 : 0);
    }
    return 0;
  }
}