module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    const getUnit = (num) => units[num];

    const getSecondTens = (num) => secondTens[num - 11];

    const getTens = (num) => {
        if (num < 10) return getUnit(num);
        if (num < 20) return num === 10 ? tens[0] : getSecondTens(num);
        return tens[Math.floor(num / 10) - 1] + (num % 10 !== 0 ? ' ' + getUnit(num % 10) : '')
    };

    const getHundred = (num) => units[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + toReadable(num % 100) : '');

    return number < 100 ? getTens(number) : getHundred(number);
}
