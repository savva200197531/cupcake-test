import { MarketStateFirstService } from './market-state-first.service';
export declare class MarketStateFirstController {
    private marketStateFirstService;
    constructor(marketStateFirstService: MarketStateFirstService);
    getFirst(): any;
    getFirstPoll(): import("rxjs").Observable<import("./market-state.vm").MarketStateVm>;
}
