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
        while (_) try {
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
exports.__esModule = true;
exports.POST = void 0;
var bcrypt_1 = require("bcrypt");
var headers_1 = require("next/headers");
var session_1 = require("@/app/app/lib/session");
var session_2 = require("@/app/app/lib/session");
var secretKey = process.env.SESSION_SECRET;
var server_1 = require("next/server");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function POST(request) {
    return __awaiter(this, void 0, void 0, function () {
        var parsedRequest, user, compare, sessionObject, cookieStore, user, compare, sessionObject, cookieStore, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('request came');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 12, , 13]);
                    return [4 /*yield*/, request.json()];
                case 2:
                    parsedRequest = _a.sent();
                    if (!parsedRequest.email) return [3 /*break*/, 7];
                    return [4 /*yield*/, prisma.$connect()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: {
                                email: parsedRequest.email
                            }
                        })];
                case 4:
                    user = _a.sent();
                    if (!user) {
                        return [2 /*return*/, server_1.NextResponse.json({
                                success: 'false',
                                msg: 'email not registered.'
                            })];
                    }
                    if (!user.password) {
                        return [2 /*return*/, server_1.NextResponse.json({
                                success: 'false',
                                msg: 'Password is not set for the email id.'
                            })];
                    }
                    return [4 /*yield*/, bcrypt_1["default"].compare(parsedRequest.password, user.password)]; // returns true or false.
                case 5:
                    compare = _a.sent() // returns true or false.
                    ;
                    if (!compare) {
                        return [2 /*return*/, server_1.NextResponse.json({
                                success: 'false',
                                msg: 'incorrect password'
                            })];
                    }
                    sessionObject = session_1.encrypt({ userId: user.id }, session_2.encryptCredentials.key, session_2.encryptCredentials.iv);
                    return [4 /*yield*/, headers_1.cookies()];
                case 6:
                    cookieStore = _a.sent();
                    cookieStore.set('session', sessionObject, {
                        httpOnly: true,
                        secure: false,
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        sameSite: 'lax'
                    });
                    return [2 /*return*/, server_1.NextResponse.redirect('/')];
                case 7: return [4 /*yield*/, prisma.user.findUnique({
                        where: {
                            phone: parsedRequest.phone
                        }
                    })];
                case 8:
                    user = _a.sent();
                    if (!user) {
                        return [2 /*return*/, server_1.NextResponse.json({
                                success: 'false',
                                msg: 'Phone not registered.'
                            })];
                    }
                    if (!user.password) {
                        return [2 /*return*/, server_1.NextResponse.json({
                                success: 'false',
                                msg: 'Password is not set for the contact number.'
                            })];
                    }
                    return [4 /*yield*/, bcrypt_1["default"].compare(parsedRequest.password, user.password)]; // returns true or false.
                case 9:
                    compare = _a.sent() // returns true or false.
                    ;
                    if (!compare) {
                        return [2 /*return*/, server_1.NextResponse.json({
                                success: 'false',
                                msg: 'incorrect password'
                            })];
                    }
                    sessionObject = session_1.encrypt({ userId: user.id }, session_2.encryptCredentials.key, session_2.encryptCredentials.iv);
                    return [4 /*yield*/, headers_1.cookies()];
                case 10:
                    cookieStore = _a.sent();
                    cookieStore.set('session', sessionObject, {
                        httpOnly: true,
                        secure: false,
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60)
                    });
                    return [2 /*return*/, server_1.NextResponse.redirect('/')];
                case 11: return [3 /*break*/, 13];
                case 12:
                    e_1 = _a.sent();
                    console.log("error is " + e_1);
                    return [2 /*return*/, server_1.NextResponse.json({ success: 'false', message: "internal server error. " + e_1 }, { status: 500 })];
                case 13: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
