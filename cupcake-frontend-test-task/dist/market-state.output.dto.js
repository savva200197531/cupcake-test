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
exports.MarketStateOutputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const market_rates_output_dto_1 = require("./market-rates-output.dto");
class MarketStateOutputDto {
}
__decorate([
    swagger_1.ApiProperty({ type: market_rates_output_dto_1.MarketRatesOutputDto }),
    __metadata("design:type", market_rates_output_dto_1.MarketRatesOutputDto)
], MarketStateOutputDto.prototype, "rates", void 0);
__decorate([
    swagger_1.ApiProperty({ description: ' Base currency ', example: 'CUPCAKE' }),
    __metadata("design:type", String)
], MarketStateOutputDto.prototype, "base", void 0);
__decorate([
    swagger_1.ApiProperty({ description: ' Seconds from epoch ', example: 1613456619 }),
    __metadata("design:type", Number)
], MarketStateOutputDto.prototype, "timestamp", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: ' Date in iso date format',
        example: '2021-02-16',
    }),
    __metadata("design:type", String)
], MarketStateOutputDto.prototype, "date", void 0);
exports.MarketStateOutputDto = MarketStateOutputDto;
//# sourceMappingURL=market-state.output.dto.js.map