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
const market_state_first_service_1 = require("./market-state-first.service");
const market_state_second_service_1 = require("./market-state-second.service");
const market_state_third_service_1 = require("./market-state-third.service");
const market_state_first_controller_1 = require("./market-state-first.controller");
const market_state_second_controller_1 = require("./market-state-second.controller");
const market_state_third_controller_1 = require("./market-state-third.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [
            market_state_first_controller_1.MarketStateFirstController,
            market_state_second_controller_1.MarketStateSecondController,
            market_state_third_controller_1.MarketStateThirdController,
        ],
        providers: [
            market_state_first_service_1.MarketStateFirstService,
            market_state_second_service_1.MarketStateSecondService,
            market_state_third_service_1.MarketStateThirdService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map