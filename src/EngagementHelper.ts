import { TooltipFormatterCallbackFunction } from "highcharts";
import { formatMessageCount, formatMessageDate } from "./helpers";
import { Ichannels, ImessageCountList } from "./interface";
const EngagementHelper = {
    engagementMessageOverTimeChartOptions: (messageCountList: ImessageCountList[], channels: Ichannels[]) => {
        const filteredChannels = channels.filter((channel) => {
            const channelId = channel.value;
            const messageDates = messageCountList.filter(
                (message) => message.channelId === channelId
            );
            return messageDates.length > 1;
        });

        const seriesData = filteredChannels.map((channel) => {
            const channelId = channel.value;
            const messageDates = messageCountList.filter(
                (message) => message.channelId === channelId
            );
            return {
                name: channel.name,
                data: messageDates.map((message) => {
                    return {
                        x: new Date(message.timeBucket).getTime(),
                        y: parseInt(message.count),
                        text: `${channel.name}:${formatMessageCount(Number(message.count))} on ${formatMessageDate(
                            new Date(message.timeBucket)
                        )}`
                    };
                })
            };
        });

        const options = {
            chart: {
                type: "line"
            },
            title: {
                text: "Engagement Messages Over Time"
            },
            xAxis: {
                type: "datetime",
                title: {
                    text: "Date"
                }
            },
            yAxis: {
                title: {
                    text: "Message Count"
                }
            },
            tooltip: {
                formatter: (): TooltipFormatterCallbackFunction => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return this?.point?.text;
                }
            },
            series: seriesData
        };

        return options;
    }
};

export default EngagementHelper;
