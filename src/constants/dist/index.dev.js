"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentTable = exports.cryptos = exports.transactions = void 0;

var _bitcoin = _interopRequireDefault(require("../assets/bitcoin.svg"));

var _ethereum = _interopRequireDefault(require("../assets/ethereum.svg"));

var _tether = _interopRequireDefault(require("../assets/tether.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transactions = [{
  id: 1,
  type: "Sent",
  name: "Sent Naira",
  amount: "10,0000.00 NGN",
  date: "June 10, 2021",
  status: "Success"
}, {
  id: 2,
  type: "Received",
  name: "Recieved Naira",
  amount: "10,0000.00 NGN",
  date: "June 10, 2021",
  status: "Success"
}, {
  id: 3,
  type: "Sent",
  name: "Sent Bitcoin",
  amount: "0.000521 BTC",
  date: "June 16, 2021",
  status: "Pending"
}, {
  id: 4,
  type: "Sent",
  name: "Sent Naira",
  amount: "10,0000.00 NGN",
  date: "June 18, 2021",
  status: "Pending"
}, {
  id: 5,
  type: "Sent",
  name: "Sent Naira",
  amount: "10,0000.00 NGN",
  date: "June 18, 2021",
  status: "Failed"
}, {
  id: 6,
  type: "Received",
  name: "Received Tether",
  amount: "1,000 USD₮",
  date: "June 18, 2021",
  status: "Success"
}, {
  id: 7,
  type: "Received",
  name: "Received Ethereum",
  amount: "0.0000032 ETH",
  date: "June 20, 2021",
  status: "Success"
}, {
  id: 8,
  type: "Received",
  name: "Received Naira",
  amount: "10,0000.00 NGN",
  date: "June 22, 2021",
  status: "Pending"
}, {
  id: 9,
  type: "Sent",
  name: "Sent Tether",
  amount: "1,000 USD₮",
  date: "June 27, 2021",
  status: "Pending"
}, {
  id: 10,
  type: "Received",
  name: "Received Bitcoin",
  amount: "0.000521 BTC",
  date: "June 30, 2021",
  status: "Failed"
}];
exports.transactions = transactions;
var cryptos = [{
  id: 2,
  name: "Bitcoin",
  img: _bitcoin["default"],
  classname: "accounts_img accounts_img-2"
}, {
  id: 3,
  name: "Ethereum",
  img: _ethereum["default"],
  classname: "accounts_img accounts_img-3"
}, {
  id: 4,
  name: "Tether",
  img: _tether["default"],
  classname: "accounts_img accounts_img-4"
}];
exports.cryptos = cryptos;
var paymentTable = [{
  id: 1,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 2,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 3,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 4,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 5,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 6,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 7,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 8,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 9,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}, {
  id: 10,
  name: "Freelance Link",
  amount: "10,000 NGN",
  date: "June 10, 2021"
}]; // export const settingsNav = ;

exports.paymentTable = paymentTable;