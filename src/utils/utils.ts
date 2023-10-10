export const convertPhone = (phone: string): string => {
	let p = phone.replace(/[^0-9]/g, "");
	p = p.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3");
	p.replace("--", "-");

	return p;
};

export const numberWithCommas = (x: number) => {
	return x.toLocaleString();
};

export const isEmptyObj = (obj: Record<string, any>): boolean => {
	return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export function getKoreanNumber(num: number) {
	const koreanNumber = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
	const tenUnit = ["", "십", "백", "천"];
	const tenThousandUnit = ["조", "억", "만", ""];
	const unit = 10000;

	let answer = "";

	while (num > 0) {
		const mod = num % unit;
		const modToArray = mod.toString().split("");
		const length = modToArray.length - 1;

		const modToKorean = modToArray.reduce((acc, value, index) => {
			const valueToNumber = +value;
			if (!valueToNumber) return acc;
			const numberToKorean = index < length && valueToNumber === 1 ? "" : koreanNumber[valueToNumber];
			return `${acc}${numberToKorean}${tenUnit[length - index]}`;
		}, "");

		answer = `${modToKorean}${tenThousandUnit.pop()}${answer}`;
		num = Math.floor(num / unit);
	}

	return answer;
}

export const debounce = (callback: any, delay: number) => {
	let timer: ReturnType<typeof setTimeout>;

	return (...args: any[]) => {
		timer && clearTimeout(timer);
		timer = setTimeout(() => callback(...args), delay);
	};
};

export const getPosition = (index: number) => {
	const height = 184;
	if (index < 8) {
		const left = 6 + index * 211;
		return { top: 60, left: left, position: "absolute" };
	} else if (index < 16) {
		const left = 111 + (index - 8) * 211;
		return { top: 60 + height, left: left, position: "absolute" };
	} else if (index < 24) {
		const left = 6 + (index - 16) * 211;
		return { top: 60 + height * 2, left: left, position: "absolute" };
	} else if (index < 32) {
		const left = 111 + (index - 24) * 211;
		return { top: 60 + height * 3, left: left, position: "absolute" };
	} else if (index < 40) {
		const left = 6 + (index - 32) * 211;
		return { top: 60 + height * 4, left: left, position: "absolute" };
	}
};
