/* eslint-disable */

export interface ControleRemote {
  play(): void;
  pause(): void;
}

export interface ControleSom extends ControleRemote {
  mudarRadio(): void;
}

export class Bluray implements ControleRemote {
  play(): void {}
  pause(): void {}
}

export class Som implements ControleSom {
  mudarRadio(): void {}
  play(): void {}
  pause(): void {}
}
