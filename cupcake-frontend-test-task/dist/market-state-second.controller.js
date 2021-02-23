"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketStateSecondController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const market_state_output_dto_1 = require("./market-state.output.dto");
const market_state_second_service_1 = require("./market-state-second.service");
let MarketStateSecondController = class MarketStateSecondController {
    constructor(marketStateSecondService) {
        this.marketStateSecondService = marketStateSecondService;
    }
    getSecond() {
        return this.marketStateSecondService.getState();
    }
    getSecondPoll() {
        return this.marketStateSecondService.getNextState();
    }
};
__decorate([
    swagger_1.ApiResponse({
        type: market_state_output_dto_1.MarketStateOutputDto,
        status: 200,
        description: 'Get current market state',
    }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MarketStateSecondController.prototype, "getSecond", null);
__decorate([
    swagger_1.ApiResponse({
        type: market_state_output_dto_1.MarketStateOutputDto,
        status: 200,
        description: 'Resolve, when new market state is available',
    }),
    common_1.Get('poll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarketStateSecondController.prototype, "getSecondPoll", null);
MarketStateSecondController = __decorate([
    swagger_1.ApiTags('Second market'),
    common_1.Controller('second'),
    __metadata("design:paramtypes", [market_state_second_service_1.MarketStateSecondService])
], MarketStateSecondController);
exports.MarketStateSecondController = MarketStateSecondController;
//# sourceMappingURL=market-state-second.controller.js.map