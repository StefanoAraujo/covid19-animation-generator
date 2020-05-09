
import * as Enumerable from 'linq';
import { Scale, PlotSeries } from '../util/Types';

const MARGIN = 0.5;

export default class DynamicScaleGenerator
{
	public static generate(series: PlotSeries[]): Scale {
		/* const lastPoints = Enumerable.from(
			Enumerable
				.from(series)
				.select(serie => serie.points)
				.where(points => points && points.length > 0)
				.select(points => points[points.length - 1])
				// .selectMany(point => [point.x, point.y])
				.select(point => point.x)
				.where(x => !!x)
				.toArray()); */

		// const min = Math.max(lastPoints.min(), 0);
		// const max = lastPoints.max();
		return {
			horizontal: {
				min: 1, // min - MARGIN,
				max: 3.8, // max + MARGIN
			},
			vertical: {
				min: 0.4, // min - MARGIN,
				max: 3.2, // 2.8 // max + MARGIN
			}
		};
	}
}
