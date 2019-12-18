import trend from './';

test('can detect increasing sequence', () => {
    const increasing = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(trend(increasing)).toBe(1);
});

test('can detect decreasing sequence', () => {
    const decreasing = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    expect(trend(decreasing)).toBe(-1);
});

test('can detect stable sequence', () => {
    const stable = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    expect(trend(stable)).toBe(0);
});

test('can detect middle sequence increase', () => {
    const middleIncrease = [1, 5, 4, 8, 7, 5, 6, 9, 8, 7, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 7, 1, 2, 4, 5];

    expect(trend(middleIncrease)).toBe(1);
});

test('can detect middle sequence decrease', () => {
    const middleDecrease = [1, 2, 4, 5, 3, 2, 7, 0, 0, 10, 4, 7, 5, 2, 4, 9, 8, 7, 6, 5, 4, 3, 2, 1, 4, 7, 5, 2, 1, 4, 7, 10, 5, 4];

    expect(trend(middleDecrease)).toBe(-1);
});

test('can detect pyramid shape sequences as stable', () => {
    const pyramid = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const reversePyramid = [10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10];

    expect(trend(pyramid)).toBe(0);
    expect(trend(reversePyramid)).toBe(0);
});

test('can detect pyramid shape sequence that start increasing', () => {
    const pyramidThenUp = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(trend(pyramidThenUp)).toBe(1);
});

test('can detect pyramid shape sequence that start decreasing', () => {
    const reversePyramidThenDown = [10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    expect(trend(reversePyramidThenDown)).toBe(-1);
});
