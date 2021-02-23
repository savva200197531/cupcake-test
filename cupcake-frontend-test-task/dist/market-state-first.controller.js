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
exports.MarketStateFirstController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const market_state_output_dto_1 = require("./market-state.output.dto");
const market_state_first_service_1 = require("./market-state-first.service");
let MarketStateFirstController = class MarketStateFirstController {
    constructor(marketStateFirstService) {
        this.marketStateFirstService = marketStateFirstService;
    }
    getFirst() {
        return this.marketStateFirstService.getState();
    }
    getFirstPoll() {
        return this.marketStateFirstService.getNextState();
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
], MarketStateFirstController.prototype, "getFirst", null);
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
], MarketStateFirstController.prototype, "getFirstPoll", null);
MarketStateFirstController = __decorate([
    swagger_1.ApiTags('First market'),
    common_1.Controller('first'),
    __metadata("design:paramtypes", [market_state_first_service_1.MarketStateFirstService])
], MarketStateFirstController);
exports.MarketStateFirstController = MarketStateFirstController;
//# sourceMappingURL=market-state-first.controller.js.map