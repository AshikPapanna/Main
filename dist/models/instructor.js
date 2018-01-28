"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concerts {
    constructor() {
        var name = "";
        var place = "";
    }
}
class Instructorbrief {
    constructor() {
        this._id = "";
        this.firstname = "";
        this.lastname = "";
        this.imageurl = "";
    }
}
exports.Instructorbrief = Instructorbrief;
class Instructor {
    constructor() {
        this.instructorbriefs = [];
    }
}
exports.Instructor = Instructor;
class InstructorDetails extends Instructorbrief {
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
