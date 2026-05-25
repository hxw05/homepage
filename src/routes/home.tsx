export default function Home() {
	return (
		<main className="h-dvh w-full flex items-center justify-center">
			<div className="flex flex-col max-w-full px-5 md:px-0 md:max-w-[700px] gap-2">
				<div>
					<h1 className="text-3xl font-bold">Wang Haoxiang</h1>
					<h2 className="text-xl text-neutral-500 italic">Haskell Wang</h2>
				</div>
				<p>
					A student from Hubei Province, China. Focusing on software engineering,
					especially on the (seemingly dying) web development most of the time. Mainly
					using Golang and TypeScript things.
				</p>
				<p>
					I am not good at mathematics and classic algorithms but enjoys the beauty of them. Interested in fonts, programming languages, (amateur) photography and alternative
					music. Additionally, books make me feel good, but I don't usually read them (for now).
				</p>
				<div className="flex flex-wrap items-center gap-2">
					<a href="https://github.com/Subilan" target="_blank">
						GitHub
					</a>{' '}
					·{' '}
					<a target="_blank" href="https://notes.wanghaoxiang.com">
						My Notebook
					</a>{' '}
					· <a href="mailto:me@wanghaoxiang.com">me@wanghaoxiang.com</a>
				</div>
			</div>
		</main>
	);
}
