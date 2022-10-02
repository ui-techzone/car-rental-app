import * as apiUtils from './apiUtil';

export function getCars() {
    return apiUtils.getAPI('/cars');
}