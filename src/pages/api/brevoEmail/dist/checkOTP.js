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
var client_1 = require("@prisma/client");
var session_1 = require("@/app/lib/session");
var axios_1 = require("axios");
var prisma = new client_1.PrismaClient();
var session_2 = require("@/app/lib/session");
function checkOTP(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, OTP, otpId, email, verified, user, expiresAt, sessionObject, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (req.method !== 'POST') {
                        return [2 /*return*/, res.status(400).json({ success: 'false', msg: 'invalid method' })];
                    }
                    _a = req.body, OTP = _a.OTP, otpId = _a.otpId, email = _a.email;
                    console.log(OTP + ' ' + otpId + ' ' + email);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, prisma.$connect()];
                case 2:
                    _b.sent();
                    console.log('database connected');
                    return [4 /*yield*/, prisma.oTPStore.findUnique({
                            where: { id: otpId }
                        })];
                case 3:
                    verified = _b.sent();
                    console.log('this is the stuff obtained' + verified);
                    console.log(verified);
                    if (!verified || (verified === null || verified === void 0 ? void 0 : verified.otp) != OTP) {
                        return [2 /*return*/, res.json({ success: 'false', msg: 'Invalid otp' })];
                    }
                    console.log('creating new user');
                    return [4 /*yield*/, prisma.user.create({
                            data: { email: email }
                        })];
                case 4:
                    user = _b.sent();
                    expiresAt = 24 * 60 * 60 * 1000;
                    sessionObject = session_1.encrypt({ email: email, expiresAt: expiresAt }, session_2.encryptCredentials.key, session_2.encryptCredentials.iv);
                    return [4 /*yield*/, axios_1["default"].post('http://localhost:3000/setCookie', { sessionObject: sessionObject })];
                case 5:
                    _b.sent();
                    res.setHeader('loggedIn', 'true');
                    return [2 /*return*/, res
                            .status(200)
                            .json({ success: 'true', msg: 'You have signed up successfully' })];
                case 6:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [2 /*return*/, res
                            .status(500)
                            .json({ success: 'false', msg: 'internal server error' })];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = checkOTP;
