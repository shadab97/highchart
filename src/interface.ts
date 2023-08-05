export interface ImessageCountList {
    count: string,
    timeBucket: string,
    channelId: string
}
export interface Ichannels {
    label: string,
    value: string,
    type: number,
    guild: string,
    guildId: string,
    parentId: null | string,
    messages?: Array<string> | [],
    threads?: Array<string> | [],
    permissionOverwrites: Array<string> | [],
    id: string,
    name: string,
    rawPosition?: number,
    createdTimestamp?: number,
    bitrate?: number,
    rateLimitPerUser?: number,
    userLimit?: number,
    nsfw?: boolean,
    topic?: null | string,
    videoQualityMode?: null | string,
    lastMessageId?: undefined | string | null
    rtcRegion?: undefined | string | null
}