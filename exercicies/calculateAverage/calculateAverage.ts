export function calculateAverage(numberList: number[]) {
    if (numberList.length == 0) return 0;

    const average = numberList.reduce((accumulator, num) => accumulator + num, 0) / numberList.length
    return Number(average.toFixed(2));
}