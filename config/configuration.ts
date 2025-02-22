import * as dotenv from 'dotenv';

dotenv.config({ override: true });

export class Configuration {
  public static get user(): string {
    return process.env.USER_STANDARD ?? '[NOT SET]';
  }
  public static get userLocked(): string {
    return process.env.USER_LOCKED ?? '[NOT SET]';
  }
  public static get userProblem(): string {
    return process.env.USER_PROBLEM ?? '[NOT SET]';
  }
  public static get userPerformance(): string {
    return process.env.USER_PERFORMANCE ?? '[NOT SET]';
  }
  public static get userError(): string {
    return process.env.USER_ERROR ?? '[NOT SET]';
  }
  public static get userVisual(): string {
    return process.env.USER_VISUAL ?? '[NOT SET]';
  }
  public static get password(): string {
    return process.env.PASSWORD ?? '[NOT SET]';
  }
}