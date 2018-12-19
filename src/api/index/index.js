import axios from '@utils/axios'
import {
  INDEX
} from '@const/api'
export function getData() {
  return axios({
    url: INDEX.TEST,
    method: 'get',
    params: {
      q: 1
    }
  })
}
