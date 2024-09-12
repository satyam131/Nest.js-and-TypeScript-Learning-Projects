import { PowerService } from 'src/power/power.service';
export declare class CpuService {
    powerService: PowerService;
    constructor(powerService: PowerService);
    compute(a: number, b: number): number;
}
