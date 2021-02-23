import { MarketStateSecondService } from './market-state-second.service';
export declare class MarketStateSecondController {
    private marketStateSecondService;
    constructor(marketStateSecondService: MarketStateSecondService);
    getSecond(): any;
    getSecondPoll(): import("rxjs").Observable<import("./market-state.vm").MarketStateVm>;
}
