
import * as Enumerable from 'linq';
import { Scale, PlotSeries } from '../util/Types';

const MARGIN = 0.5;

export default class DynamicScaleGenerator
{
	public static generate(series: PlotSeries[]): Scale {
		const lastPoints = Enumerable.from(
			Enumerable
				.from(series)
				.select(serie => serie.points)
				.where(points => points && points.length > 0)
				.select(points => points[points.length - 1])
				.selectMany(point => [point.x, point.y])
				.where(x => !!x)
				.toArray());

		const min = Math.max(lastPoints.min(), 1);
		const max = Math.max(lastPoints.max(), 1);
		return {
			horizontal: {
				min: 90, // min - MARGIN,
				max: 130 // max + MARGIN
			},
			vertical: {
				min: 2.1, // min - MARGIN,
				max: 3 // max + MARGIN
			}
		};
	}
}
