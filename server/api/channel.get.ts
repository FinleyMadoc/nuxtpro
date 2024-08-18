// get /api/channal
import channel from '@/database/channel'

// defineEventHandler定义接口
export default defineEventHandler(() => {
    return channel;
})