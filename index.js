#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Student = /** @class */ (function () {
    function Student(name) {
        this.studentID = this.generateStudentID();
        this.name = name;
        this.courses = [];
        this.balance = 0;
        Student.studentCount++;
    }
    Student.prototype.generateStudentID = function () {
        return Math.floor(10000 + Math.random() * 90000).toString();
    };
    Student.prototype.enrollCourse = function (course) {
        this.courses.push(course);
        console.log("".concat(this.name, " enrolled in ").concat(course, " successfully."));
    };
    Student.prototype.viewBalance = function () {
        console.log("".concat(this.name, "'s balance: $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance += amount;
        console.log("".concat(this.name, " paid $").concat(amount, ". Remaining balance: $").concat(this.balance));
    };
    Student.prototype.showStatus = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentID));
        console.log("Courses Enrolled: ".concat(this.courses.join(", ")));
        console.log("Balance: $".concat(this.balance));
    };
    Student.studentCount = 0;
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, newStudent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { name: "name", message: "Enter student name:" },
                        ])];
                    case 1:
                        name = (_a.sent()).name;
                        newStudent = new Student(name);
                        this.students.push(newStudent);
                        console.log("".concat(newStudent.name, " added to the system with ID ").concat(newStudent.studentID));
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.enrollStudentInCourse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, studentID, course, student;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { name: "studentID", message: "Enter student ID:" },
                            { name: "course", message: "Enter course name:" },
                        ])];
                    case 1:
                        _a = _b.sent(), studentID = _a.studentID, course = _a.course;
                        student = this.findStudentByID(studentID);
                        if (student) {
                            student.enrollCourse(course);
                        }
                        else {
                            console.log("Student not found.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.viewStudentBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var studentID, student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { name: "studentID", message: "Enter student ID:" },
                        ])];
                    case 1:
                        studentID = (_a.sent()).studentID;
                        student = this.findStudentByID(studentID);
                        if (student) {
                            student.viewBalance();
                        }
                        else {
                            console.log("Student not found.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.payStudentTuition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, studentID, amount, student;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { name: "studentID", message: "Enter student ID:" },
                            { name: "amount", message: "Enter tuition amount to pay:" },
                        ])];
                    case 1:
                        _a = _b.sent(), studentID = _a.studentID, amount = _a.amount;
                        student = this.findStudentByID(studentID);
                        if (student) {
                            student.payTuition(Number(amount));
                        }
                        else {
                            console.log("Student not found.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.showStudentStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var studentID, student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { name: "studentID", message: "Enter student ID:" },
                        ])];
                    case 1:
                        studentID = (_a.sent()).studentID;
                        student = this.findStudentByID(studentID);
                        if (student) {
                            student.showStatus();
                        }
                        else {
                            console.log("Student not found.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.findStudentByID = function (studentID) {
        return this.students.find(function (student) { return student.studentID === studentID; });
    };
    return StudentManagementSystem;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var sms, action, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sms = new StudentManagementSystem();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 15];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "action",
                                message: "Select an action:",
                                type: "list",
                                choices: [
                                    "Add Student",
                                    "Enroll Student in Course",
                                    "View Student Balance",
                                    "Pay Student Tuition",
                                    "Show Student Status",
                                    "Exit",
                                ],
                            },
                        ])];
                case 2:
                    action = (_b.sent()).action;
                    _a = action;
                    switch (_a) {
                        case "Add Student": return [3 /*break*/, 3];
                        case "Enroll Student in Course": return [3 /*break*/, 5];
                        case "View Student Balance": return [3 /*break*/, 7];
                        case "Pay Student Tuition": return [3 /*break*/, 9];
                        case "Show Student Status": return [3 /*break*/, 11];
                        case "Exit": return [3 /*break*/, 13];
                    }
                    return [3 /*break*/, 14];
                case 3: return [4 /*yield*/, sms.addStudent()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 5: return [4 /*yield*/, sms.enrollStudentInCourse()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, sms.viewStudentBalance()];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 9: return [4 /*yield*/, sms.payStudentTuition()];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, sms.showStudentStatus()];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 13:
                    console.log("Exiting Student Management System.");
                    process.exit(0);
                    _b.label = 14;
                case 14: return [3 /*break*/, 1];
                case 15: return [2 /*return*/];
            }
        });
    });
}
main();
