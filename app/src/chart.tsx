import * as React from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, Brush } from "recharts";
import {tiobe} from "./tiobe";
import * as convert from "color-convert"

const data = tiobe.reverse().map(month => {
    return {
        name: month.date,
        ...month.data.reduce((previousValue, currentValue) => {
            return {
                ...previousValue,
                [currentValue.name]: currentValue.position
            };
        }, {})
    }
});

const lines = tiobe[0].data.map(language => language.name);


function getColor(id: number, length: number) {
    const hue = id * (360 / length);
    const saturation = 90 + Math.random() * 10;
    const lightness = 60 + Math.random() * 10;
    const rgb = convert.hsl.rgb(hue, saturation, lightness);
    console.log(rgb);
    return `#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`;
}

export function MyChart() {
    return (
        <div className="line-chart-wrapper" style={{ padding: 40 }}>
            <LineChart
                width={1000}
                height={1000}
                data={data}
                margin={{top: 10, bottom: 10, left: 30, right: 30}}
            >
                <Tooltip active={true}/>
                <XAxis dataKey="name" />
                <CartesianGrid stroke="#f5f5f5"/>
                <Brush />
                {/*<Tooltip filterNull={false} />*/}
                {lines.map((name, id) => (
                    <Line
                        type="natural"
                        key={id}
                        dataKey={name}
                        stroke={getColor(id, lines.length)}
                        strokeWidth={1}
                        yAxisId={id}
                    />
                ))}
            </LineChart>
        </div>
    );
}
