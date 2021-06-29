'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.populateMembers = void 0;
const initDataDAL_1 = require('../DALs/initDataDAL');
const members_1 = __importDefault(require('../models/members'));
const populateMembers = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const members = yield initDataDAL_1.membersDAL();
      console.log(members.data);
      members.data.map((member) => ({
        name: member.name,
        email: member.email,
        city: member.address.city,
      }));
      console.log('new members', members.data);
      members_1.default.insertMany(members);
    } catch (error) {
      throw error;
    }
  });
exports.populateMembers = populateMembers;
