import { test } from "@playwright/test"
//eslint-disable-next-line
export function step<This, Args extends any[], Return>(message?: string) {
	return function actualDecorator(
		target: (this: This, ...args: Args) => Promise<Return>,
		context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>,
	) {
		//eslint-disable-next-line
		function replacementMethod(this: any, ...args: Args) {
			const name = message ?? `${this.constructor.name}.${context.name as string}`;
			//eslint-disable-next-line
			return test.step(name, async () => target.call(this, ...args), { box: true });
		}

		return replacementMethod;
	};
}
