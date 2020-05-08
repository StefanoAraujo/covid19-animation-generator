import * as Enumerable from 'linq';

import { DataPoint, PlotPoint } from '../util/Types';
import { DateTime } from 'luxon';

const INITIAL_DATE = DateTime.fromISO('2020-01-01');

export default class Log10PlotPointsGenerator
{
	public static generate(points: DataPoint[]): PlotPoint[]
	{
		return points
			.map((point, index) =>
			{
				// const previous = points[Math.max(0, index - 7)];
				// const x = Math.log10(point.value);
				// const y = Math.log10(point.value - previous.value);
				const x = Math.floor(point.date.diff(INITIAL_DATE).as('days'));
				const y = Math.log10(point.value);
				return { x, y, date: point.date };
			})
			.filter(point =>
				point.x > -Infinity &&
				point.y > -Infinity &&
				point.x < Infinity &&
				point.y < Infinity);
	}
}
