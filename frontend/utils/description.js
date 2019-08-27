function flatten(arr) {
	const flat123 = arr.reduce(
		((flat, toFlatten) => {
			return flat.concat(
				Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
			);
		},
		[])
	);
}

export default function FormatDescription(data) {
	const composed = data.map(child => {
		if (child && child.children) {
			const string = child.children.map(str => {
				if (typeof str === "string") return str;
				if (typeof str === "object" && str.children) {
					const test = str.children.map(children => {
						if (typeof children === "object") {
							const test2 = children.children.map(grandchild =>
								grandchild.toString()
							);
							return test2;
						}
						return children.toString();
					});
					return test;
				}
			});
			return string;
		}
	});

	// const flattnedArray = flatten(composed);

	const filteredArray = composed.filter(element => {
		return element !== undefined;
	});

	return filteredArray;
}
