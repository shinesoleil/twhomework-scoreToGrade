describe('score to grade', function() {
    it('convert 0 to D', function() {
        expect(scoreToGrade(0)).toBe("D");
    });

    it('convert 10 to D', function() {
        expect(scoreToGrade(10)).toBe("D");
    });

    it('convert 60 to C', function() {
        expect(scoreToGrade(60)).toBe("C");
    });

    it('convert 65 to C', function() {
        expect(scoreToGrade(65)).toBe("C");
    });

    it('convert 70 to B', function() {
        expect(scoreToGrade(70)).toBe("B");
    });

    it('convert 75 to B', function() {
        expect(scoreToGrade(75)).toBe("B");
    });

    it('convert 80 to A', function() {
        expect(scoreToGrade(80)).toBe("A");
    });

    it('convert 85 to A', function() {
        expect(scoreToGrade(85)).toBe("A");
    });

    it('convert 90 to S', function() {
        expect(scoreToGrade(90)).toBe("S");
    });

    it('convert 95 to S', function() {
        expect(scoreToGrade(95)).toBe("S");
    });

    it('convert 100 to S', function() {
        expect(scoreToGrade(100)).toBe("S");
    });

    it('when 101, error', function() {
        expect(function(){scoreToGrade(101)}).toThrowError(TypeError, "input is out of range");
    });

    it('when "a" to, error', function() {
        expect(function(){scoreToGrade("a")}).toThrowError(TypeError, "input is a string");
    });

    it('when nothing to, error', function() {
        expect(function(){scoreToGrade()}).toThrowError(TypeError, "input is empty");
    });
});
