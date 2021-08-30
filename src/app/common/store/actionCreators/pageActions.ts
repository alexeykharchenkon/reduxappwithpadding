import { CHANGE_PAGE } from "@store/actions/actionPageTypes";

export const changePage = (page: any) => ({ type: CHANGE_PAGE, payload: page });