
import { DateTime } from 'luxon';

// Data source

export interface DataPoint {
	date: DateTime;
	value: number;
}

export interface TimeSeries {
	name: string;
	data: DataPoint[];
}

// Config

export interface SeriesConfiguration {
	name: string;
	code: string;
	color: string;
}

export interface ColorSchema {
	background: string;
	scale: {
		lineStroke: object;
		font: object;
		axisFont: object;
	},
	seriesLabel: {
		font: object;
		offset: number[];
	},
	date: {
		font: object;
	},
	lineStroke: object;
}

export interface Box {
	left: number;
	right: number;
	top: number;
	bottom: number;
}

export interface PlotArea {
	left: number;
	right: number;
	top: number;
	bottom: number;
}

export interface Layout {
	canvasSize: number[];
	plotArea: PlotArea;
	circleSize: number;
	datePosition: number[];
	dateFont: object;
}

export interface DataSource {
	url: string;
	nameColumn: string;
	series: SeriesConfiguration[];
}

export interface Configuration {
	dataSources: { [key: string]: DataSource };
	days: number;
	framesPerDay: number;
	extraEndFrames: number;
	colorSchemas: { [key: string]: ColorSchema };
	layouts: { [key: string]: Layout; };
	defaults: {
		schema: string;
		source: string;
		days: number,
		frames: number,
		extraFrames: number;
	}
}

export interface Scale {
	horizontal: {
		min: number;
		max: number;
	};
	vertical: {
		min: number;
		max: number;
	}
}

// Plot

export interface FrameInfo {
	date: DateTime;
	ratio: number;
}

export interface PlotSeries {
	code: string;
	color: string;
	points: PlotPoint[];
}

export interface Point {
	x: number;
	y: number;
}

export interface PlotPoint extends Point {
	date: DateTime;
}
