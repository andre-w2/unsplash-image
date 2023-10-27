import { URL } from '../utils/const'
import axios from 'axios'

axios.defaults.baseURL = URL
axios.defaults.headers.common['Authorization'] = 'Client-ID YkBm1nxOSLzXNAirp33YOK4Hwg_JALLST-SZnfVR9oc' 

export default axios