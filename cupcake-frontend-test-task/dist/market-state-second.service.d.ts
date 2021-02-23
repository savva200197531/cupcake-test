import { MarketStateVm } from './market-state.vm';
import { Observable } from 'rxjs';
export declare class MarketStateSecondService {
    #private;
    getState(): MarketStateVm;
    getNextState(): Observable<MarketStateVm>;
    private rnd;
    private subject;
    private nextState;
    private initialState;
}
