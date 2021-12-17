import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function Graph() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    let labels = [
        "Everette",
        "Seattle",
        "Lynnwood",
        "Bothell",
        "Mukilteo",
        "Edmonds",
    ];
    let labels2 = [
        "service Plubming",
        "Bid World HVAC",
        "Service HVCAC",
        "BId Work Plumbing",
        "HWT Replacement",
        "Maintenance ",
        "Material Sale",
    ];
    let myData1 = [150000, 100000, 49000, 48000, 47000, 34000];
    let myData2 = [14000, 12000, 7600, 7500, 4300, 4100, 50];

    const options = {
        indexAxis: "y",
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Revenue By Job Location",
                position: "bottom",
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "Location",
                data: myData1,
                backgroundColor: "rgb(65, 191, 153)",
                categoryPercentage: 0.5,
                inflateAmount: 0.2,
            },
        ],
    };

    const options2 = {
        indexAxis: "y",
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Revenue for November",
                position: "bottom",
            },
        },
    };

    const data2 = {
        labels: labels2,
        datasets: [
            {
                label: "Job Types",
                data: myData2,
                backgroundColor: "rgb(65, 191, 153)",
                categoryPercentage: 0.5,
                inflateAmount: 0.2,
            },
        ],
    };

    return (
        <div className="graphs">
            <div className="graph-container">
                <p className="title">Revenue By Job Location</p>
                <Bar className="graph" options={options} data={data} />
            </div>
            <div className="graph-container">
                <p className="title">Revenue By Job type</p>
                <Bar className="graph" options={options2} data={data2} />
            </div>
        </div>
    );
}
