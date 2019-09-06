export class TeaSessionModel {
	constructor(
		private teaSessionId: number,
		private name: string,
		private desc: string,
		private treatDate: string,
		private cutoffDate: string,
		private menuImage: FileList,
		private isPrivate: boolean,
		private password: string
	) { }
}