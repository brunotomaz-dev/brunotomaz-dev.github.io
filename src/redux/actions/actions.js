export const FUNDAMENTOS = 'FUNDAMENTOS';
export const FRONT_END = 'FRONT_END';
export const BACK_END = 'BACK_END';

export const fundamentosAction = (payload) => (
  { type: FUNDAMENTOS, payload });

export const frontEndAction = (payload) => (
  { type: FRONT_END, payload });

export const backEndAction = (payload) => (
  { type: BACK_END, payload });
