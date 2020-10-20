describe('Testing Correct Title & Correct Charset', function() {
    it('should have the correct title Verbeteringen and be the correct charset UTF-8', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Test if unitTest.item is equal to item', function () {
    it('should be equal to item', function () {
        expect(unitTest.item).toBe('item');
    });
});

describe('Test if unitTest.beschrijving is equal to beschrijving', function () {
    it('should be equal to Beschrijving', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});

describe('Test if unitTest.boodschap is equal to Hallo', function () {
    it('should be equal to Hallo', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});

describe('Test if unitTest.nummer is equal to 2', function () {
    it('should be equal to 2', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});