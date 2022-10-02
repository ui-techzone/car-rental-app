import * as apiUtils from './apiUtil';

export function login(userDetails) {
    return apiUtils.postAPI('/login', userDetails);
}