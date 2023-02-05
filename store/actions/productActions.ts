import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants";

export const listProduct = async (dispatch: any) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});

		const data = "about to go get some products from firbase soon";
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (err: any) {
		dispatch({
			type: PRODUCT_LIST_FAILURE,
			payload: err.response,
		});
	}
};
