import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";
import { channels, messageCountList } from "./constant";

const EngagementMessagesOverTime = () => {
    const options = engagementHelper.engagementMessageOverTimeChartOptions(
        messageCountList,
        channels
    );

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default EngagementMessagesOverTime