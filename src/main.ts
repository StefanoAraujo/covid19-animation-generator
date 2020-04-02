
// Dependencies
import * as optimist from 'optimist';
import * as path from 'path';

// Local
import ConfigLoader from './util/ConfigLoader';
import DataLoader from './util/DataLoader';
import ImageGenerator from './util/ImageGenerator';

// Constants
const OUTPUT_PATH = path.join(__dirname, '../output');

// Main
(async () =>
{
	// Read arguments and configuration
	const argv = optimist.argv;
	const config = await ConfigLoader.load ();
	const dataSourceName = argv.source || config.defaults.dataSource;
	const colorSchemaName = argv.schema || config.defaults.colorSchema;
	const days = argv.days || config.defaults.days;
	const framesPerDay = argv.frames || config.defaults.framesPerDay;
	const extraEndFrames = argv.extraFrames || config.defaults.extraEndFrames;

	// Read data
	const dataSource = config.dataSources[dataSourceName];
	if (!dataSource)
		throw new Error(`Data source not found: ${dataSourceName}`);
	const data = await DataLoader.load (dataSource);

	// Generate
	const colorSchema = config.colorSchemas[colorSchemaName];
	if (!colorSchema)
		throw new Error(`Color schema not found: ${colorSchemaName}`);
	const generator = new ImageGenerator(data, dataSource.series, colorSchema);
	await generator.generateAll(
		OUTPUT_PATH,
		days,
		framesPerDay,
		extraEndFrames);
})();
