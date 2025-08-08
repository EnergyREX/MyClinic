import { Avatar as RAvatar } from "radix-ui";

// Este componente representa el avatar de un usuario.
// La idea es que, automáticamente detecte si el usuario tiene una imagen o no.
// Si no tiene imagen, que genere un fallback en base a sus iniciales. Ej. "JD"
// Si tiene imagen, imagen entonces.
//
// La imagen proviene directamente del backend.

interface props {

}

export default () => (
	<RAvatar.Root>
		<RAvatar.Image >
		<RAvatar.Fallback />
	</RAvatar.Root>
);
