"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _source;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketStateSecondService = void 0;
const common_1 = require("@nestjs/common");
const market_state_vm_1 = require("./market-state.vm");
const random_1 = require("@thi.ng/random");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const market_state_rates_vm_1 = require("./market-state-rates.vm");
const dateFormat = require('dateformat');
let MarketStateSecondService = class MarketStateSecondService {
    constructor() {
        this.rnd = new random_1.Smush32(0xdecafbad);
        this.subject = new rxjs_1.BehaviorSubject(this.initialState());
        _source.set(this, rxjs_1.interval(200)
            .pipe(operators_1.delay(300))
            .subscribe({
            next: () => this.subject.next(this.nextState(this.subject.value)),
        }));
    }
    getState() {
        return this.subject.getValue();
    }
    getNextState() {
        return this.subject.asObservable().pipe(operators_1.first((_, index) => index === 2));
    }
    nextState(lastState) {
        const marketState = new market_state_vm_1.MarketStateVm();
        const marketNoise = random_1.gaussian(this.rnd, 0.5, 0)();
        const currencyNoiseGen = random_1.gaussian(this.rnd, 0.5, 0);
        marketState.rates = new market_state_rates_vm_1.MarketStateRatesVm();
        marketState.rates.RUB =
            lastState.rates.RUB + marketNoise + currencyNoiseGen();
        marketState.rates.USD =
            lastState.rates.USD + marketNoise + currencyNoiseGen();
        marketState.rates.EUR =
            lastState.rates.EUR + marketNoise + currencyNoiseGen();
        marketState.timestamp = Math.round(new Date().getTime() / 1000);
        marketState.base = 'CUPCAKE';
        marketState.date = dateFormat(new Date(), 'yyyy-mm-dd');
        return marketState;
    }
    initialState() {
        const marketState = new market_state_vm_1.MarketStateVm();
        marketState.rates = new market_state_rates_vm_1.MarketStateRatesVm();
        marketState.rates.EUR = random_1.gaussian(this.rnd, 1, 4)();
        marketState.rates.RUB = random_1.gaussian(this.rnd, 1, 4)();
        marketState.rates.USD = random_1.gaussian(this.rnd, 1, 2)();
        marketState.timestamp = Math.round(new Date().getTime() / 1000);
        marketState.base = 'CUPCAKE';
        marketState.date = dateFormat(new Date(), 'yyyy-mm-dd');
        return marketState;
    }
};
_source = new WeakMap();
MarketStateSecondService = __decorate([
    common_1.Injectable()
], MarketStateSecondService);
exports.MarketStateSecondService = MarketStateSecondService;
//# sourceMappingURL=market-state-second.service.js.map