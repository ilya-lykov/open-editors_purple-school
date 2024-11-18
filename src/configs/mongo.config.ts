import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
	uri: getMongoString(configService),
});

function getMongoString(configService: ConfigService): string {
	const uri: string =
		'mongodb://' +
		configService.get('MONGO_LOGIN') +
		':' +
		configService.get('MONGO_PASSWORD') +
		'@' +
		configService.get('MONGO_HOST') +
		':' +
		configService.get('MONGO_PORT') +
		'/' +
		configService.get('MONDO_AUTHDATABASE');

	return uri;
}

//mongodb://admin:admin@localhost:27017/?authSource=admin
