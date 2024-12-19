"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auction_module_1 = require("./auction/auction.module");
const auction_controller_1 = require("./auction/auction.controller");
const mongoose_1 = require("@nestjs/mongoose");
const auction_service_1 = require("./auction/auction.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auction_module_1.AuctionModule, mongoose_1.MongooseModule.forRoot('mongodb://localhost/nest')],
        controllers: [auction_controller_1.AuctionController, app_controller_1.AppController],
        providers: [auction_service_1.AuctionService, app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map