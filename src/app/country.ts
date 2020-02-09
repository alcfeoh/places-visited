export interface Country {
  id: string;
  name: string;
  state?: VisitState;
}

export type VisitState = 'lived' | 'visited' | 'neverBeen';
