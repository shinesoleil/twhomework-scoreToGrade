function scoreToGrade(score) {
    var scoreClass = [90, 80, 70, 60, 0];
    var grade = ["S", "A", "B", "C", "D"];

    if(arguments.length == 0) {
        throw new TypeError("input is empty");
    }

    if(typeof(score) == "string") {
        throw new TypeError("input is a string");
    }

    if(score<0 || score>100) {
        throw new TypeError("input is out of range");
    }

    for(var i= 0; i<scoreClass.length; i++) {
        if( score>=scoreClass[i]) {
            return grade[i];
        }
    }

}
