import { useEffect, useState } from "react";
import { TokenProvider } from "./Context";
import useLogin from "./hooks/useLogin";

export default function Page({ children }) {
	// const lyrics = useLyrics();
	const token = useLogin();
	return (
		<TokenProvider
			value={{
				useLogin,
				token
			}}
		>
			<div className="page">{children}</div>
		</TokenProvider>
	);
}
