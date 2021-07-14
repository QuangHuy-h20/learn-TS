"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return this.client + " owes " + this.amount + " for this work: " + this.work;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipients, job, amt) {
        this.recipients = recipients;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "I owe " + this.recipients + " " + this.amt + " for this work: " + this.job + " ";
    };
    return Payment;
}());
exports.Payment = Payment;
