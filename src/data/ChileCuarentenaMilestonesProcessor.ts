
import { TimeSeries, Milestone } from '../util/Types';
import { DateTime } from 'luxon';

const GREEN = '#6DFF18';
const RED = '#FF3818';
const YELLOW = '#FFDA18';

const MILESTONES: { [key: string]: Milestone[] } = {
	'Santiago': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-26'), color: RED },
		{ date: DateTime.fromISO('2020-04-14'), color: YELLOW },
		{ date: DateTime.fromISO('2020-05-05'), color: RED },
	],
	'Punta Arenas': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-04-01'), color: RED },
		{ date: DateTime.fromISO('2020-05-08'), color: GREEN },
	],
	'Puente Alto': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-04-09'), color: YELLOW },
		{ date: DateTime.fromISO('2020-05-08'), color: RED },
	],
	'Vitacura': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-26'), color: RED },
		{ date: DateTime.fromISO('2020-04-14'), color: GREEN },
		{ date: DateTime.fromISO('2020-05-05'), color: RED },
	],
	'Temuco': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-28'), color: RED },
		{ date: DateTime.fromISO('2020-05-01'), color: GREEN },
	],
	'Las Condes': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-26'), color: RED },
		{ date: DateTime.fromISO('2020-04-17'), color: GREEN },
	],
	'Independencia': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-26'), color: RED },
		{ date: DateTime.fromISO('2020-04-03'), color: GREEN },
		{ date: DateTime.fromISO('2020-04-23'), color: YELLOW },
		{ date: DateTime.fromISO('2020-04-30'), color: RED },
	],
	'Quilicura': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-05-05'), color: RED },
	],
	'Recoleta': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-05-05'), color: RED },
	],
	'Providencia': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-26'), color: RED },
		{ date: DateTime.fromISO('2020-04-14'), color: GREEN },
	],
	'Osorno': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-30'), color: RED },
		{ date: DateTime.fromISO('2020-05-01'), color: GREEN },
	],
	'Ñuñoa': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-26'), color: RED },
		{ date: DateTime.fromISO('2020-04-14'), color: YELLOW },
		{ date: DateTime.fromISO('2020-05-08'), color: GREEN },
	],
	'Chillán': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-30'), color: RED },
		{ date: DateTime.fromISO('2020-04-23'), color: GREEN },
	],
	'Hualpén': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-04-06'), color: RED },
		{ date: DateTime.fromISO('2020-04-17'), color: GREEN },
	],
	'Padre Las Casas': [
		{ date: DateTime.fromISO('2020-01-01'), color: GREEN },
		{ date: DateTime.fromISO('2020-03-28'), color: RED },
		{ date: DateTime.fromISO('2020-04-17'), color: GREEN },
	],
	'todas': [
		{ date: DateTime.fromISO('2020-01-01'), color: '#70FF00' },
		{ date: DateTime.fromISO('2020-03-26'), color: 'rgb(255, 134, 134)' },
		{ date: DateTime.fromISO('2020-04-03'), color: 'rgb(255, 162, 162)' },
		{ date: DateTime.fromISO('2020-04-09'), color: 'rgb(255, 81, 81)' },
		{ date: DateTime.fromISO('2020-04-14'), color: 'rgb(255, 255, 255)' },
		{ date: DateTime.fromISO('2020-04-16'), color: 'rgb(255, 167, 167)' },
		{ date: DateTime.fromISO('2020-04-17'), color: 'rgb(255, 237, 237)' },
		{ date: DateTime.fromISO('2020-04-23'), color: 'rgb(255, 168, 168)' },
		{ date: DateTime.fromISO('2020-04-30'), color: 'rgb(255, 77, 77)' },
	]
};
const NONE = [{ date: DateTime.fromISO('2020-01-01'), color: GREEN }];

export default class ChileCuarentenaMilestonesProcessor
{
	public static process(series: TimeSeries[]): TimeSeries[]
	{
		return series.map(serie => ({
			name: serie.name,
			data: serie.data,
			milestones: MILESTONES[serie.name] || NONE
		}));
	}
}
