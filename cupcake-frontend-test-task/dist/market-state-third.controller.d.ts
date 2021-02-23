import { MarketStateThirdService } from './market-state-third.service';
export declare class MarketStateThirdController {
    private marketStateThirdService;
    constructor(marketStateThirdService: MarketStateThirdService);
    getThird(): any;
    getThirdPoll(): import("rxjs").Observable<import("./market-state.vm").MarketStateVm>;
}
