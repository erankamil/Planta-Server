export function cleanObject(doc: any) {
	let obj = doc
	delete obj.__v
	delete obj.createdAt
	return obj
}
