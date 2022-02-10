import axios from 'axios';
import { Ref } from 'vue';
import { useQuery } from 'vue-query';

const DOMAIN = 'https://5de29f5981d1f6001478a083.mockapi.io/api/v1';

export function useQueryUserList(
  queryParams: { [key: string]: string | number },
  { enabled }: { enabled: Ref<boolean> }
) {
  return useQuery(['users', queryParams], () => axios.get(`${DOMAIN}/users`, { params: queryParams }), {
    enabled,
    select: (res) => res.data,
  });
}

export function useQueryUserDetail(id: Ref<string>, { enabled }: { enabled: boolean }) {
  return useQuery(['user'], () => axios.get(`${DOMAIN}/users/${id.value}`), {
    enabled,
    select: (res) => res.data,
  });
}
