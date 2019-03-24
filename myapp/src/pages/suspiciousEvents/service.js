import request from '@/utils/request';

export function queryList(param) {
    return request('/api/suspiciousEvents',{
        param
    });
}
