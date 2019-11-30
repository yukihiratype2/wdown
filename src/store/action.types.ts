import { Action } from 'redux';


export interface BooleanAction extends Action {
  value: boolean;
}
