import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  dates: number[];
  quantity: number[];
}
const GraphChanges = ({ dates, quantity }: Props) => {
  return (
    <LineChart
      xAxis={[{ data: dates }]} // תאריך
      series={[
        {
          data: quantity, // כמות
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
};
export default GraphChanges;
