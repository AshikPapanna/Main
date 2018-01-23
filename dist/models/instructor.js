"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concerts {
    constructor() {
        var name = "";
        var place = "";
    }
}
class Instructor {
    constructor() {
        this.specialized = [];
        this.firstname = "";
        this.lastname = "";
        this.imageurl = "";
    }
}
exports.Instructor = Instructor;
class InstructorDetails extends Instructor {
    constructor() {
        super(...arguments);
        this.education = "";
        this.from = "";
        this.bio = "";
        this.concerts = [];
    }
}
exports.InstructorDetails = InstructorDetails;

//# sourceMappingURL=instructor.js.map
