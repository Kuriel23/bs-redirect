import { permanentRedirect } from "next/navigation";

export default async function CategoryPage({
	params: { id },
}: {
	params: { id: string };
}) {
	permanentRedirect(`https://bsky.app/search?q=${id}`);
	return (
		<div className="container mx-auto text-center py-10">
			<h3 className="text-indigo-500 font-bold text-xl mb-4">
				Descontraia! <br />
				Você está sendo redirecionado para a sua pesquisa.
			</h3>
			<a
				href={`https://bsky.app/search?q=${id}`}
				className="bg-indigo-500 py-2 px-4 rounded text-white font-bold hover:bg-indigo-600"
			>
				Demorando demais? Clique aqui.
			</a>
		</div>
	);
}
